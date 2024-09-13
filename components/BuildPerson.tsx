"use client";

import { useEffect, useState } from "react";

interface Characters {
  src: string;
  alt: string;
  id?: number;
}

const characters: Characters[] = [
  {
    src: "https://w0.peakpx.com/wallpaper/823/646/HD-wallpaper-luke-skywalker-empire-strikes-back-jedi-light-side-star-wars-star-wars-episode-5-starwars.jpg",
    alt: "Luke Skywalker",
    id: 1,
  },
  {
    src: "https://i.pinimg.com/474x/0a/97/35/0a9735b644fe23ec48b911b9f5d576fb.jpg",
    alt: "C-3PO",
    id: 2,
  },
  {
    src: "https://m.media-amazon.com/images/I/51HhTBc3KYL._AC_UF1000,1000_QL80_.jpg",
    alt: "R2-D2",
    id: 3,
  },
  {
    src: "https://w0.peakpx.com/wallpaper/100/795/HD-wallpaper-darth-vader-star-wars-vader-thumbnail.jpg",
    alt: "Darth Vader",
    id: 4,
  },
  {
    src: "https://c4.wallpaperflare.com/wallpaper/552/824/863/star-wars-carrie-fisher-leia-organa-1628x2161-video-games-star-wars-hd-art-wallpaper-preview.jpg",
    alt: "Leia Organa",
    id: 5,
  },
  {
    src: "https://sportshub.cbsistatic.com/i/2022/06/27/1b4500f0-639e-48c2-94df-267c4a9dc955/star-wars-obi-wan-tv-posters-owen-lars-joel-edgerton.jpg?auto=webp&width=864&height=1280&crop=0.675:1,smart",
    alt: "Owen Lars",
    id: 6,
  },
];

export default function BuildPerson({ persona }: { persona: PersonRoot }) {
  const [charact, setCharact] = useState<any>([]);
  const person: PersonRoot = persona;

  useEffect(() => {
    function go() {
      // const per: any = await getPerson(prop);
      const char = characters
        .filter((obj: Characters) => {
          if (obj.id === +person.result.uid) {
            return obj;
          }
        })
        .map((obj: Characters) => {
          return Object.values(obj);
        })
        .flat();
      setCharact(char);
    }
    go();
  }, []);

  return (
    <>
      <div style={{ maxWidth: "350px", height: "auto" }}>
        <img
          style={{ width: "100%", height: "auto" }}
          src={`${charact[0]}`}
          alt={`${charact[1]}`}
        />
      </div>

      <div>
        <h2 style={{ marginTop: "2.5rem" }}>{person.result.properties.name}</h2>
        <p className="mt-2 ml-4">
          <br />
          Gender: {person.result.properties.gender}
          <br />
          Height: {person.result.properties.height}
          <br />
          Mass: {person.result.properties.mass}
          <br />
          Skin color: {person.result.properties.skin_color}
        </p>
      </div>
    </>
  );
}
