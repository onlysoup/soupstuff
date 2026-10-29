import type { ReactNode } from 'react';
import NavBar from './NavBar.js';
import SiteFooter from './SiteFooter.js';

type SiteLayoutProps = {
  title: string;
  description: string;
  stylesheet: string;
  faviconHref?: string;
  faviconFallbackHref?: string;
  homeHref: string;
  aboutHref:string;
  children: ReactNode;
};

export default function SiteLayout({ title, description, stylesheet, faviconHref, faviconFallbackHref, homeHref, aboutHref, children }: SiteLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <link rel="icon" href={faviconHref || "assets/soup.svg"} type="image/svg+xml" />
        <link rel="icon" href={faviconFallbackHref || "favicon.ico"} type="image/x-icon" sizes="any" />
        <title>{title}</title>
        <link rel="stylesheet" href={stylesheet} />
      </head>
      <body className="min-h-screen bg-stone-800 text-stone-100 antialiased">
        <div className="site-shell min-h-screen backdrop-blur-sm">
          <NavBar homeHref={homeHref} aboutHref={aboutHref} />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}