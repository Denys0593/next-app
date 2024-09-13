import { getAllStarships } from "@/app/actions/getAllStarships";
import Link from "next/link";

export default async function Starships() {
  const starships = await getAllStarships();

  return (
    <div
      className="container mainDiv"
      style={{ zIndex: 1, position: "relative" }}
    >
      <h2>Starships:</h2>
      <ul
        className="max-w-md space-y-1 text-orange-100 list-none list-inside dark:text-gray-400"
        style={{ listStyle: "none" }}
      >
        {starships.results.slice(0, 6).map((ship: any) => (
          <li
            key={ship.uid}
            className="ml-4 hover:underline underline-offset-4"
          >
            <Link
              href={`starships/${ship.uid}`}
              className="mt-3 max-w-max display: block hover:text-sm hover:text-cyan-100"
            >
              {ship.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/">
        <button className="yellow">Home</button>
      </Link>
    </div>
  );
}
