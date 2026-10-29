import type Post from '../types/post.js';
import formatDate from '../lib/posts/formatDate.js';
import toDateTime from '../lib/posts/toDateTime.js';
import SiteLayout from './SiteLayout.js';
import { CircleArrowLeft } from 'lucide-react';


type PostPageProps = {
  post: Post;
};

export default function PostPage({ post }: PostPageProps) {
  return (
    <SiteLayout
      title={`${post.title} | Soupstuff`}
      description={post.summary || post.title}
      stylesheet="../../styles.css"
      faviconHref="../../assets/soup.svg"
      faviconFallbackHref="../../favicon.ico"
      homeHref="../../index.html"
      aboutHref="../../about/index.html"
    >
      <main className="mx-auto max-w-[720px] px-5 pt-10 pb-24 sm:px-8 sm:pt-12">
        <a className="font-mono text-[11px] text-stone-200/80 no-underline hover:text-amber-200" href="../../index.html">
          <CircleArrowLeft className="inline-block w-4 h-4 mr-2" />
          All writing
        </a>
        <article className="mt-8 rounded-2xl border border-stone-300/20 bg-stone-900/25 p-6 shadow-lg backdrop-blur-md sm:p-8">
          <header className="mb-12 border-b border-stone-300/20 pb-8">
            <h1 className="m-0 max-w-[760px] text-5xl font-normal leading-none text-stone-50 sm:text-6xl">{post.title}</h1>
            <time className="mt-6 block font-mono text-[11px] text-stone-200/80" dateTime={toDateTime(post.date)}>
              {formatDate(post.date)}
            </time>
          </header>
          <div
            className="article-copy text-lg leading-relaxed text-stone-100 sm:text-xl"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </main>
    </SiteLayout>
  );
}