import Link from 'next/link';

export default function MoviesPage() {
  return (
    <>
      <h1>List of all Movie</h1>
      <p>Some nice word all movies</p>
      <ul>
        <li>
          <Link href="/movies/spiderman">Go to Spiderman</Link>
        </li>
        <li>
          <Link href="/movies/barbie">Go to Barbie</Link>
        </li>
      </ul>
    </>
  );
}
