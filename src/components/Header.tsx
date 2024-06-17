import Image from "next/image";
import logo from "/public/badflix-logo.webp";
import style from "@/components/header.module.scss";

export default function Header() {
  return (
    <header className={style.header}>
      <div className="header__wrapper container">
        <Image src={logo} alt="Badflix Logo" width={100} height={26} />
      </div>
    </header>
  );
}
