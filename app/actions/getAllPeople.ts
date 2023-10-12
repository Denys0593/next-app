import { PeopleRoot } from "../types";

export async function getAllPeople(): Promise<PeopleRoot> {
  return await fetch("https://www.swapi.tech/api/people").then((res) =>
    res.json()
  );
}
