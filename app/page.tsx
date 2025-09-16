import Hero from "@/modules/Hero";
import Info from "@/modules/Info";
import Services from "@/modules/Services";
import About from "@/modules/About";
import Team from "@/modules/Team";
import TeamCarousel from "@/modules/TeamCarousel";
import Notices from "@/modules/Notices";
import { getNewsList } from "@/lib/new";

export default async function Home() {
  const items = await getNewsList(20);


  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <Info />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="team">
        <TeamCarousel />
      </section>
      <section id="notices">
        <Notices notices={items} />
      </section>
    </>
  );
}

