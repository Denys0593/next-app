import Starships from "@/components/Starships";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Starships",
  description: "Starships page",
};

export default function page() {
  return <Starships />;
}
