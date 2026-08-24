"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return <main className="error-page"><span>Something shifted off course.</span><h1>Let&apos;s recover the experience.</h1><button onClick={reset}>Try again</button></main>;
}
