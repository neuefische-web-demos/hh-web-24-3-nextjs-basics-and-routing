import Link from 'next/link';

export default function BarbiePage() {
  return (
    <>
      <h1>This is the Movie: Barbie 💞</h1>
      <p>Some nice word about Barbie</p>
      <Link href="/">Go Back to Home</Link>
      <br />
      <Link href="/movies">Go Back to all Movies</Link>
    </>
  );
}
