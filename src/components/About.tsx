import SiteLayout from './SiteLayout.js';

export default function About() {
  return (
    <SiteLayout
      title="About the Author"
      description="A short bio and the story behind the writing."
      stylesheet="../styles.css"
      faviconHref="../assets/soup.svg"
      faviconFallbackHref="../favicon.ico"
      homeHref="../index.html"
      aboutHref="index.html"
    >
      <main className="mx-auto max-w-[720px] px-5 pt-10 pb-24 sm:px-8 sm:pt-12">
        <article className="mt-8 rounded-2xl border border-stone-300/20 bg-stone-900/25 p-6 shadow-lg backdrop-blur-md sm:p-8">
          <header className="mb-10 border-b border-stone-300/20 pb-8">
            <h1 className="m-0 max-w-[760px] text-5xl font-normal leading-none text-stone-50 sm:text-6xl">About the Author</h1>
          </header>

          <div className="grid gap-8 md:grid-cols-[220px_minmax(0,1fr)] md:items-start">
            <div className="flex justify-center md:justify-start">
              <img
                src="../assets/profile.JPG"
                alt="Portrait of the author"
                className="h-60 w-60 rounded-full border border-stone-300/20 object-cover shadow-lg sm:h-72 sm:w-72"
              />
            </div>

            <div className="article-copy text-lg leading-relaxed text-stone-100 sm:text-xl">
              <p>Hi — I’m the person behind this site.</p>
              <p>I write about the things I’m learning as a developer, the ideas that keep me curious, and the work of building a life that feels thoughtful and intentional.</p>
              <p>Most of the writing here sits between technology, creativity, and the everyday habits that turn effort into progress: side projects, experiments, observations, and small lessons worth keeping.</p>
              <p>Thanks for reading.</p>
            </div>
          </div>
        </article>
      </main>
    </SiteLayout>
  );
}