import { getSeasonEpisodes, Season } from "@/app/api/getData";
import style from "@/components/seasonEpisodes.module.scss";
import "swiper/css";
import EpSlide from "./EpSlide";

type SeasonNumber = Pick<Season, "season_number">;

export default async function SeasonEpisodes({ season_number }: SeasonNumber) {
  const episodes = await getSeasonEpisodes(season_number);

  return (
    <ul className={style.seasonEpisodes}>
      <EpSlide episodes={episodes} />
    </ul>
  );
}
