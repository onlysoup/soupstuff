type NavBarProps = {
  homeHref: string;
  aboutHref: string
};

export default function NavBar({ homeHref, aboutHref}: NavBarProps) {
  return (
    <header className="mx-auto flex h-20 w-full max-w-[1080px] items-center justify-between border-b border-stone-300/20 px-5 sm:px-8">
      <a className="text-xl font-semibold text-stone-50 no-underline" href={homeHref}>Main Page</a>
      <span className="font-mono text-[11px] text-stone-200/80">A small personal blog</span>
      <a className="text-stone-100" href={aboutHref}>About the Author</a>
    </header>
  );
}