"use client";

import { useEffect, useState } from "react";

interface Vehicle {
  src: string;
  alt: string;
  id: number;
}

const vehicles: Vehicle[] = [
  {
    src: "https://www.renderhub.com/dazinbane/star-wars-jawa-sandcrawler/star-wars-jawa-sandcrawler-01.jpg",
    alt: "Sandcrawler",
    id: 4,
  },
  {
    src: "https://previews.123rf.com/images/tixti/tixti1603/tixti160300243/53868137-milan-italy-march-5-vehicle-x-34-landspeeder-on-display-during-the-star-wars-parade-on-march-5-2016.jpg",
    alt: "X-34 landspeeder",
    id: 7,
  },
  {
    src: "https://swrpggm.com/wp-content/uploads/2021/03/T16Skyhopper_FE.png",
    alt: "T-16 skyhopper",
    id: 6,
  },
  {
    src: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/szFRiVXBgGQ8c77vfCLfzL6dBLAR6e.jpg",
    alt: "TIE/LN starfighter",
    id: 8,
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/projects/404/dae7d096870935.Y3JvcCw5OTIsNzc2LDQ5LDEy.jpg",
    alt: "Snowspeeder",
    id: 14,
  },
  {
    src: "https://cdn.27.ua/sc--media--prod/default/a3/1e/c2/a31ec2a9-caf8-46f2-91a0-0e36f9056261.jpg",
    alt: "AT-AT",
    id: 18,
  },
];

export default function Vehicle({ vehicle }: { vehicle: VehicleResponse }) {
  const veh: VehicleResponse = vehicle;
  const [res, setRes] = useState<any>([]);

  useEffect(() => {
    function go() {
      const vehicleIMG = vehicles
        .filter((vehicle: Vehicle) => {
          if (vehicle.id === +veh.result.uid) {
            return vehicle;
          }
        })
        .map((vehicle: Vehicle) => {
          return Object.values(vehicle);
        })
        .flat();

      setRes(vehicleIMG);
    }
    go();
  }, []);

  return (
    <div>
      <div style={{ maxWidth: "500px", height: "auto" }}>
        <img
          style={{ width: "100%", height: "auto" }}
          src={`${res[0]}`}
          alt={`${res[1]}`}
        />
      </div>
      <div>
        <h2 style={{ marginTop: "2.5rem" }}>
          {vehicle.result.properties.name}
        </h2>
        <p className="mt-2 ml-4 text-white">
          Length: {(+vehicle.result.properties.length).toFixed()}
          <br />
          Passangers: {vehicle.result.properties.passengers}
          <br />
          Max atmospheric speed:{" "}
          {vehicle.result.properties.max_atmosphering_speed}
        </p>
      </div>
    </div>
  );
}
