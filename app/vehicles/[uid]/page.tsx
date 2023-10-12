import { getVehicle } from "@/app/actions/getVehicle";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Props {
  params: {
    uid: number;
  };
}

export default async function SingleVehicle({ params: { uid } }: Props) {
  const vehicle = await getVehicle(uid);

  return (
    <div style={{ zIndex: 1, position: "relative", padding: "15px 0 0 15px" }}>
      <h2>{vehicle.result.properties.name}</h2>
      <div
        style={{
          margin: "15px 0 0 15px",
          display: "flex",
          width: "245px",
          justifyContent: "space-between",
        }}
      >
        <Link href="/vehicles">
          <button className="yellow">Back to Vehicles</button>
        </Link>
        <Link href="/">
          <button className="yellow">Home</button>
        </Link>
      </div>
    </div>
  );
}
