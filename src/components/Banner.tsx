import { api_img_url, getSerie } from "@/app/api/getData";
import Image from "next/image";
import style from "@/components/banner.module.scss";
import Button from "./Button";

export default async function Banner() {
  const serie = await getSerie();

  return (
    <section className={style.banner}>
      <div className="banner__wrapper container">
        <div className={style.bannerTxt}>
          <h1>{serie.name}</h1>
          <p>{serie.overview}</p>

          <div className={style.cta}>
            <Button variant="primary">Play</Button>
            <Button variant="secondary">More Info</Button>
            {/* <span>Temporadas: {serie.number_of_seasons}</span> */}
          </div>
        </div>

        <div className={style.bannerImg}>
          <Image
            src={api_img_url + "original" + serie.backdrop_path}
            alt={serie.name}
            width={1920}
            height={800}
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
