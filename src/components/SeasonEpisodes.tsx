import {
  api_img_url,
  api_key,
  getSeasonEpisodes,
  Season,
} from "@/app/api/getData";
import style from "@/components/seasonEpisodes.module.scss";
import Image from "next/image";
import Link from "next/link";
import EpCard from "./EpCard";

type SeasonNumber = Pick<Season, "season_number">;

export default async function SeasonEpisodes({ season_number }: SeasonNumber) {
  const episodes = await getSeasonEpisodes(season_number);

  return (
    <div className={style.seasonEpisodes}>
      <ul>
        {episodes &&
          episodes.map((episode) => (
            <EpCard
              key={episode.id}
              id={episode.id}
              name={episode.name}
              still_path={episode.still_path}
            />
          ))}
      </ul>
    </div>
  );
}
