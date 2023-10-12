import { FilmResponse } from "../types";

export async function getFilm(id: number): Promise<FilmResponse> {
  return await fetch(`https://swapi.tech/api/films/${id}`).then((res) =>
    res.json()
  );
}
