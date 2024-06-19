import Banner from "@/components/Banner";
import Header from "@/components/Header";
import SeasonList from "@/components/SeasonList";
import Seasons from "@/components/Seasons";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Seasons />
      <SeasonList />
    </main>
  );
}
