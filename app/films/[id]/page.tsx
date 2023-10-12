import { getFilm } from "@/app/actions/getFilm";
import { getAllPeople } from "@/app/actions/getAllPeople";
import Link from "next/link";

interface Props {
  params: {
    id: number;
  };
}

export default async function Film({ params }: Props) {
  const singleFilm = await getFilm(params.id);
  const allPeople = await getAllPeople();

  const personName: string[] = singleFilm.result.properties.characters; //массив стрічок

  const personUrl = allPeople.results
    .map((obj: any) => Object.values(obj).slice(2))
    .flat(); //массив стрічок

  const result = personName.map((name: any) => {
    return allPeople.results.map((url: any) => {
      if (url.url === name) {
        return (
          <li className="ml-4 hover:underline underline-offset-4" key={name}>
            <Link
              className="mt-3 max-w-max display: block hover:text-lg"
              href={`/people/${url.uid}`}
            >
              {url.name}
            </Link>
          </li>
        );
      }
    });
  }); //Сук, да, блеать, я це зробив. список лохів показується.

  return (
    <div
      className="container mainDiv"
      style={{ zIndex: 1, position: "relative" }}
    >
      <h2>{singleFilm.result.properties.title}</h2>
      <ul className="max-w-md space-y-1 text-orange-100 list-none list-inside dark:text-gray-400">
        {result}
      </ul>
      <div
        style={{
          display: "flex",
          width: "200px",
          justifyContent: "space-between",
        }}
      >
        <Link href="/films">
          <button className="blue">Back to Films</button>
        </Link>
        <Link href="/">
          <button className="blue">Home</button>
        </Link>
      </div>
    </div>
  );
}
