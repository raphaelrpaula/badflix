"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import EpCard from "./EpCard";
import { Season } from "@/app/api/getData";
import style from "@/components/epslide.module.scss";

type EpisodeProps = Pick<Season, "episodes">;

export default function EpSlide({ episodes }: EpisodeProps) {
  return (
    <Swiper spaceBetween={16} slidesPerView={"auto"}>
      {episodes &&
        episodes.map((episode) => (
          <SwiperSlide className={style.slide} key={episode.id}>
            <EpCard name={episode.name} still_path={episode.still_path} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
