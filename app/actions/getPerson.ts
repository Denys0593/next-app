import { PersonRoot } from "../types";

export async function getPerson(uid: number): Promise<PersonRoot> {
  return await fetch(`https://www.swapi.tech/api/people/${uid}`).then((res) =>
    res.json()
  );
}
