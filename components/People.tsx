import { getAllPeople } from "@/app/actions/getAllPeople";
import Link from "next/link";

export default async function People() {
  const people = await getAllPeople();

  return (
    <div
      className="container mainDiv"
      style={{ zIndex: 1, position: "relative" }}
    >
      <h2>Characters:</h2>
      <ul
        className="max-w-md space-y-1 text-orange-100 list-none list-inside dark:text-gray-400"
        style={{ listStyle: "none" }}
      >
        {people.results.slice(0, 6).map((person: any) => (
          <li
            key={person.uid}
            className="ml-4 hover:underline underline-offset-4"
          >
            <Link
              href={`/people/${person.uid}`}
              className="mt-3 max-w-max display: block hover:text-lg"
            >
              {person.name}
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
