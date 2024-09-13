"use client";

import { useEffect, useState } from "react";

interface Starship {
  id: number;
  src: string;
  alt: string;
}

const starshipsImages: Starship[] = [
  {
    id: 2,
    src: "https://i.pinimg.com/736x/43/54/d3/4354d36812bdd8049b6e4a0f1a34e3cc.jpg",
    alt: "CR90 corvette",
  },
  {
    id: 3,
    src: "https://preview.redd.it/republic-imperator-class-star-destroyer-v0-rclg6u91tqya1.png?width=640&crop=smart&auto=webp&s=ce56aeaf7e3da7d4cf7138b679f663823d3d61fc",
    alt: "Star Destroyer",
  },
  {
    id: 5,
    src: "https://cdnb.artstation.com/p/marketplace/presentation_assets/001/723/257/large/file.jpg?1652847948",
    alt: "Sentinel-class landing craft",
  },
  {
    id: 9,
    src: "https://cutewallpaper.org/21/death-star-wallpaper/Star-Wars-Death-Star-HD-Backgrounds-FizX.jpg",
    alt: "Death Star",
  },
  {
    id: 10,
    src: "https://cdn.mos.cms.futurecdn.net/uciG9WygFRtEDcvw9gitTd-970-80.jpg",
    alt: "Millennium Falcon",
  },
  {
    id: 11,
    src: "https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg",
    alt: "Y-wing",
  },
  {
    id: 12,
    src: "https://static.wikia.nocookie.net/starwars/images/5/57/Black_One_BF2.png/revision/latest?cb=20170825000542",
    alt: "X-wing",
  },
  {
    id: 13,
    src: "https://happybeeps-production.s3.amazonaws.com/JJqa3DI.jpg",
    alt: "TIE Advanced x1",
  },
  {
    id: 15,
    src: "https://i.pinimg.com/originals/fc/34/91/fc34918743b2149732507f3ff2ecba0a.jpg",
    alt: "Executor",
  },
  {
    id: 17,
    src: "https://external-preview.redd.it/A2lpCEKxYSNqsgaHHjz9TPYVWnAhrA1s64Ey6hCDmv8.jpg?auto=webp&s=1d0a97617b39c6adcbdf34d55c76fe600e1d6d12",
    alt: "Rebel transport",
  },
];

export default function BuildStarShip({
  starship,
}: {
  starship: StarshipRoot;
}) {
  const ship: StarshipRoot = starship;
  const [res, setRes] = useState<any>([]);

  useEffect(() => {
    function go() {
      const shipIMG = starshipsImages
        .filter((starS: Starship) => {
          if (starS.id === +ship.result.uid) {
            return starS;
          }
        })
        .map((starS: Starship) => {
          return Object.values(starS);
        })
        .flat();
      setRes(shipIMG);
    }
    go();
  }, []);

  return (
    <div>
      <div style={{ maxWidth: "500px", height: "auto" }}>
        <img
          style={{ width: "100%", height: "auto" }}
          src={`${res[1]}`}
          alt={`${res[2]}`}
        />
      </div>
      <div>
        <h2 style={{ marginTop: "2.5rem" }}>
          {starship.result.properties.model}
        </h2>
        <p className="mt-2 ml-4">
          Length: {starship.result.properties.length}
          <br />
          Passangers: {starship.result.properties.passengers}
          <br />
          Max atmospheric speed:{" "}
          {starship.result.properties.max_atmosphering_speed}
        </p>
      </div>
    </div>
  );
}
