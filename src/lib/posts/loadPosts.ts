import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';
import type Post from '../../types/post.js';

export default async function loadPosts(contentDirectory: string): Promise<Post[]> {
  const files = (await readdir(contentDirectory)).filter((file: string) => file.endsWith('.md'));
  const posts = await Promise.all(files.map(async (file: string): Promise<Post> => {
    const source = await readFile(path.join(contentDirectory, file), 'utf8');
    const { data, content } = matter(source);
    const slug = path.basename(file, '.md');
    const date = data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : typeof data.date === 'string'
        ? data.date
        : null;

    if (typeof data.title !== 'string' || !date) {
      throw new Error(`${file} must include title and date front matter.`);
    }

    return {
      slug,
      title: data.title,
      date,
      summary: typeof data.summary === 'string' ? data.summary : '',
      html: await marked.parse(content)
    };
  }));

  return posts.sort((a: Post, b: Post) => Date.parse(b.date) - Date.parse(a.date));
}
