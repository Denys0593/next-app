export async function getAllStarships(): Promise<StarshipsRoot> {
  return await fetch("https://swapi.tech/api/starships?page=1&limit=36").then(
    (res) => res.json()
  );
}
