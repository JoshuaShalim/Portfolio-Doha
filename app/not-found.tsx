import Link from "next/link";

export default function NotFound() {
  return <main className="error-page"><span>404 / Route not found</span><h1>This chapter does not exist.</h1><Link href="/">Return to the portfolio</Link></main>;
}
