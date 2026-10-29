import type Post from '../types/post.js';
import SiteLayout from './SiteLayout.js';
import PostList from './PostList.js';
import Announcements from './Announcements.js';

type HomePageProps = {
  posts: Post[];
};

export default function HomePage({ posts }: HomePageProps) {
  const countLabel = posts.length === 1 ? 'entry' : 'entries';

  return (
    <SiteLayout
      title="Soupstuff"
      description="Many things. many, many things."
      stylesheet="styles.css"
      homeHref="index.html"
      aboutHref="about/index.html"
      faviconHref="assets/soup.svg"
      faviconFallbackHref="favicon.ico"
    >
      <main className="mx-auto max-w-[920px] px-5 py-10 sm:px-8 sm:py-12">
        <section className="rounded-2xl border border-stone-300/20 bg-stone-900/35 p-6 shadow-lg backdrop-blur-md sm:p-8">
          <Announcements className="m-0 text-4xl leading-none text-stone-50 sm:text-6xl" />
        </section>
        <section className="mt-10 rounded-2xl border border-stone-300/20 bg-stone-900/25 p-6 shadow-lg backdrop-blur-md sm:p-8" aria-labelledby="latest-heading">
          <div className="flex items-baseline justify-between border-b border-stone-300/20 pb-4">
            <h2 id="latest-heading" className="m-0 text-2xl font-medium text-stone-50">Latest writing</h2>
            <span className="font-mono text-[11px] text-stone-200/80">{posts.length} {countLabel}</span>
          </div>
          <PostList posts={posts} />
        </section>
      </main>
    </SiteLayout>
  );
}