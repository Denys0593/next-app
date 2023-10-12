import { VehicleResponse } from "../types";

export async function getVehicle(uid: number): Promise<VehicleResponse> {
  return await fetch(`https://www.swapi.tech/api/vehicles/${uid}`).then((res) =>
    res.json()
  );
}
