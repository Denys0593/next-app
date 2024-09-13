import { getPerson } from "@/app/actions/getPerson";
import BuildPerson from "@/components/BuildPerson";
import Link from "next/link";

type Prop = {
  prop: number;
};

export default async function Person({ prop }: Prop) {
  const person = await getPerson(prop);

  return (
    <div
      style={{
        zIndex: 1,
        position: "relative",
        padding: "15px 0 0 35px",
        color: "#fff",
      }}
    >
      <BuildPerson persona={person} />
      <div
        style={{
          margin: "15px 0 0 15px",
          display: "flex",
          width: "245px",
          justifyContent: "space-between",
        }}
      >
        <Link href="/people">
          <button className="blue">Back to People</button>
        </Link>
        <Link href="/">
          <button className="blue">Home</button>
        </Link>
      </div>
    </div>
  );
}
