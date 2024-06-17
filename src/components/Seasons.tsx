import { getSerie } from "@/app/api/getData";
import Image from "next/image";
import style from "@/components/seasons.module.scss";

export default async function Seasons() {
  const data = await getSerie();
  const seasons = data.seasons;
  const api_img_url = process.env.API_IMG;

  return (
    <div className={style.seasons + " container"}>
      <ul>
        {seasons
          .filter((season) => season.season_number > 0)
          .map((season) => (
            <li key={season.id}>
              <Image
                src={api_img_url + "w500/" + season.poster_path}
                alt={"Temporada " + season.season_number}
                width={220}
                height={300}
              />

              <p>Temporada {season.season_number}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
