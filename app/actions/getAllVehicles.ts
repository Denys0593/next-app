export async function getAllVehicles(): Promise<VehiclesResponse> {
  return await fetch("https://swapi.tech/api/vehicles?page=1&limit=39").then(
    (res) => res.json()
  );
}
