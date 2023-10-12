import type { Metadata } from "next";
import { getAllFilms } from "../actions/getAllFilms";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Films",
  description: "Films page",
};

export default async function FilmsPage() {
  const allFilms = await getAllFilms();

  return (
    <div
      className="container mainDiv"
      style={{ zIndex: 1, position: "relative" }}
    >
      <h2>Films list:</h2>
      <ul className="max-w-md space-y-1 text-orange-100 list-none list-inside dark:text-gray-400">
        {allFilms.result.map((film: any) => (
          <li
            className="ml-4 hover:underline underline-offset-4"
            key={film._id}
          >
            <Link
              className="mt-3 max-w-max display: block hover:text-lg"
              href={`/films/${film.uid}`}
            >
              {film.properties.title}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/">
        <button className="blue">Home</button>
      </Link>
    </div>
  );
}
