import { getStarship } from "@/app/actions/getStarship";
import BuildStarShip from "./BuildStarShip";
import Link from "next/link";
interface Prop {
  uid: number;
}

export default async function Starship({ uid }: Prop) {
  const starship = await getStarship(uid);

  return (
    <div
      style={{
        zIndex: 1,
        position: "relative",
        padding: "15px 0 0 35px",
        color: "#fff",
      }}
    >
      <BuildStarShip starship={starship} />
      <div
        style={{
          margin: "15px 0 0 15px",
          display: "flex",
          width: "245px",
          justifyContent: "space-between",
        }}
      >
        <Link href="/starships">
          <button className="yellow">Back to Starships</button>
        </Link>
        <Link href="/">
          <button className="yellow">Home</button>
        </Link>
      </div>
    </div>
  );
}
