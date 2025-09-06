import Hero from "@/modules/Hero";
import Info from "@/modules/Info";
import Services from "@/modules/Services";
import About from "@/modules/About";
import Team from "@/modules/Team";
import TeamCarousel from "@/modules/TeamCarousel";

export default function Home() {
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
    </>
  );
}
