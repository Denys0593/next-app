import { getStarship } from "@/app/actions/getStarship";
import Starship from "@/components/Starship";

interface Prop {
  params: {
    uid: number;
  };
}

export default async function page({ params: { uid } }: Prop) {
  return <Starship uid={uid} />;
}
