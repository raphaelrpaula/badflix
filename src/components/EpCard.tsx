import { api_img_url, Episode } from "@/app/api/getData";
import Image from "next/image";
import Link from "next/link";
import style from "@/components/epCard.module.scss";

type EpisodeProps = Pick<Episode, "still_path" | "name">;

export default function EpCard({ still_path, name }: EpisodeProps) {
  return (
    <li className={style.epCard}>
      <Link href="/">
        <Image
          src={api_img_url + "/w500" + still_path}
          alt={name}
          width={300}
          height={200}
        />
        <p>{name}</p>
      </Link>
    </li>
  );
}
