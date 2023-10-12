import { FilmsResponse } from "../types";

export async function getAllFilms(): Promise<FilmsResponse> {
  return await fetch("https://swapi.tech/api/films").then((res) => res.json());
}
