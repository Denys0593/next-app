import { getFilm } from "@/app/actions/getFilm";
import { getAllPeople } from "@/app/actions/getAllPeople";
import Link from "next/link";
import { getAllStarships } from "@/app/actions/getAllStarships";
import { getAllVehicles } from "@/app/actions/getAllVehicles";

interface Props {
  params: {
    id: number;
  };
}

export default async function Film({ params }: Props) {
  const singleFilm = await getFilm(params.id);
  const allPeople = await getAllPeople();
  const allStarships = await getAllStarships();
  const allVehicles = await getAllVehicles();

  const personName: string[] = singleFilm.result.properties.characters; //массив стрічок
  const personShips: string[] = singleFilm.result.properties.starships;
  const filmVehicles: string[] = singleFilm.result.properties.vehicles;

  const personUrl = allPeople.results
    .map((obj: any) => Object.values(obj).slice(2))
    .flat(); //массив стрічок

  function makeList(array: any, getSmth: any, link: any) {
    const result = array
      .map((element: any) => {
        return getSmth.results.map((url: any) => {
          if (url.url === element) {
            return (
              <li
                className="ml-4 hover:underline underline-offset-4"
                key={url.uid}
              >
                <Link
                  className="mt-3 max-w-full display: block hover:text-sm hover:text-cyan-100"
                  href={`/${link}/${url.uid}`}
                >
                  {url.name}
                </Link>
              </li>
            );
          }
        });
      })
      .slice(0, 6);
    return result;
  }

  return (
    <div
      className="container mainDiv"
      style={{ zIndex: 1, position: "relative" }}
    >
      <h2>{singleFilm.result.properties.title}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1.5rem",
        }}
      >
        <div style={{ width: "300px" }}>
          <h3 style={{ color: "#fff" }}>Characters:</h3>
          <ul className="max-w-md space-y-1 text-orange-100 list-none list-inside dark:text-gray-400">
            {makeList(personName, allPeople, "people")}
          </ul>
        </div>
        <div style={{ width: "300px" }}>
          <h3 style={{ color: "#fff" }}>Starships:</h3>
          <ul className="max-w-md space-y-1 text-orange-100 list-none list-inside dark:text-gray-400">
            {makeList(personShips, allStarships, "starships")}
          </ul>
        </div>
        <div style={{ width: "300px" }}>
          <h3 style={{ color: "#fff" }}>Vehicles:</h3>
          <ul className="max-w-md space-y-1 text-orange-100 list-none list-inside dark:text-gray-400">
            {makeList(filmVehicles, allVehicles, "vehicles")}
          </ul>
        </div>
      </div>
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
