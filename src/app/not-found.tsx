import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-caption-mono text-signal">404</p>
      <h1 className="text-display-h1 mt-3 text-ink">This page went missing.</h1>
      <p className="mt-4 max-w-md text-lg text-ink-soft">
        Either the link is broken, or this guide hasn&rsquo;t been published
        yet. Let&rsquo;s get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-authority px-6 py-3 text-sm font-medium text-paper transition-colors duration-200 hover:bg-authority-dark"
        >
          Back to Homepage
        </Link>
        <Link
          href="/self-help-guides/"
          className="inline-flex items-center justify-center rounded-md border border-mist px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-authority hover:text-authority"
        >
          Browse Guides
        </Link>
      </div>
    </div>
  );
}
