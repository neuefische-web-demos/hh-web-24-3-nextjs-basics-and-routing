import Link from 'next/link';

export default function SpidermanPage() {
  return (
    <>
      <h1>This is the Movie: Spiderman 🕸️</h1>
      <p>Some nice word about Spiderman</p>
      <Link href="/">Go Back to Home</Link>
      <br />
      <Link href="/movies">Go Back to all Movies</Link>
    </>
  );
}
