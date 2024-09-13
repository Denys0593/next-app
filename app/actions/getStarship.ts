export async function getStarship(uid: number): Promise<StarshipRoot> {
  return await fetch(`https://www.swapi.tech/api/starships/${uid}`).then(
    (res) => res.json()
  );
}
