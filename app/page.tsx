import Header from "@/modules/Header";
import Hero from "@/modules/Hero";
import Info from "@/modules/Info";
import Services from "@/modules/Services";
import About from "@/modules/About";
import Team from "@/modules/Team";
import TeamCarousel from "@/modules/TeamCarousel";
import ConsultForm from "@/modules/ConsultForm";
import Footer from "@/modules/Footer";

export default function Home() {
  return (
    <>
    <section>
      <Header />
    </section>
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
    <section id="contact">
      <ConsultForm />
    </section>
    <section id="ubication">
      <Footer />
    </section>
    </>
  );
}
