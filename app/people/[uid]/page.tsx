import Person from "@/components/Person";

interface Props {
  params: {
    uid: number;
  };
}

export default async function PersonLink({ params: { uid } }: Props) {
  return <Person prop={uid} />;
}
