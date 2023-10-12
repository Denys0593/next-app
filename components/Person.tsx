import { getPerson } from "@/app/actions/getPerson";
import Link from "next/link";

type Prop = {
  prop: number;
};

interface Characters {
  src: string;
  alt: string;
  id: number;
}

export default async function Person({ prop }: Prop) {
  let person = await getPerson(prop);

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
      src: "https://static.posters.cz/image/750/obrazy/star-wars-posledni-jediovia-r2-d2-porgs-i50109.jpg",
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

  let finalCharacter = characters
    .filter((char: Characters) => {
      if (char.id === 3) {
        return char;
      }
    })
    .map((char: Characters) => {
      return Object.values(char);
    })
    .map((charec: any) => {
      return (
        <img
          style={{ width: "100%", height: "100%", objectFit: "none" }}
          src={charec[0]}
          alt={charec[1]}
        />
      );
    });

  return (
    <div
      style={{
        zIndex: 1,
        position: "relative",
        padding: "15px 0 0 35px",
        color: "#fff",
      }}
    >
      <div
        style={{
          width: "300px",
          height: "400px",
          backgroundColor: "red",
        }}
      >
        {finalCharacter}
      </div>

      <h2>{person.result.properties.name}</h2>
      <p className="mt-6 ml-4">
        <br />
        Gender: {person.result.properties.gender}
        <br />
        Height: {person.result.properties.height}
        <br />
        Mass: {person.result.properties.mass}
        <br />
        Skin color: {person.result.properties.skin_color}
      </p>
      <div
        style={{
          margin: "15px 0 0 15px",
          display: "flex",
          width: "245px",
          justifyContent: "space-between",
        }}
      >
        <Link href="/people">
          <button className="yellow">Back to People</button>
        </Link>
        <Link href="/">
          <button className="yellow">Home</button>
        </Link>
      </div>
    </div>
  );
}
