import { VehiclesResponse } from "../types";

export async function getAllVehicles(): Promise<VehiclesResponse> {
  return await fetch("https://www.swapi.tech/api/vehicles/").then((res) =>
    res.json()
  );
}
