import { getSerie } from "@/app/api/getData";
import SeasonEpisodes from "./SeasonEpisodes";
import style from "@/components/seasonList.module.scss";

export default async function SeasonList() {
  const serie = await getSerie();
  const seasons = serie.seasons;

  return (
    <ul className={style.seasonList}>
      {seasons
        .filter((season) => season.season_number > 0)
        .map((season) => (
          <li key={season.id}>
            <h2>{season.name}</h2>

            <SeasonEpisodes season_number={season.season_number} />
          </li>
        ))}
    </ul>
  );
}
