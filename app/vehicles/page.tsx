import type { Metadata } from "next";
import { getAllVehicles } from "../actions/getAllVehicles";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vehicle",
  description: "Films page",
};

export default async function Vehicles() {
  const vehicles = await getAllVehicles();

  return (
    <div
      className="container mainDiv"
      style={{ zIndex: 1, position: "relative" }}
    >
      <h2>Vehicles:</h2>
      <ul
        className="max-w-md space-y-1 text-orange-100 list-disc list-inside dark:text-gray-400"
        style={{ listStyle: "none" }}
      >
        {vehicles.results.map((item: any) => (
          <li key={item.id} className="ml-4 hover:underline underline-offset-4">
            <Link
              href={{
                pathname: `/vehicles/${item.uid}`,
              }}
              className="mt-3 max-w-max display: block hover:text-lg"
            >
              {item.name}
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
