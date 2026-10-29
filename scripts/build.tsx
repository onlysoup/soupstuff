import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderToStaticMarkup } from 'react-dom/server';
import About from '../src/components/About.js';
import HomePage from '../src/components/HomePage.js';
import PostPage from '../src/components/PostPage.js';
import loadPosts from '../src/lib/posts/loadPosts.js';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const contentDirectory = path.join(root, 'content', 'posts');
const outputDirectory = path.join(root, 'dist');

function renderDocument(page: React.ReactElement): string {
  return `<!doctype html>${renderToStaticMarkup(page)}`;
}

const posts = await loadPosts(contentDirectory);
await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(path.join(root, 'assets'), path.join(outputDirectory, 'assets'), { recursive: true });
await cp(path.join(root, 'favicon.ico'), path.join(outputDirectory, 'favicon.ico'));
await writeFile(path.join(outputDirectory, 'index.html'), renderDocument(<HomePage posts={posts} />));
await mkdir(path.join(outputDirectory, 'about'), { recursive: true });
await writeFile(path.join(outputDirectory, 'about/index.html'), renderDocument(<About />));

for (const post of posts) {
  const postDirectory = path.join(outputDirectory, 'posts', post.slug);
  await mkdir(postDirectory, { recursive: true });
  await writeFile(path.join(postDirectory, 'index.html'), renderDocument(<PostPage post={post} />));
}

console.log(`Generated ${posts.length} post${posts.length === 1 ? '' : 's'} in dist/`);