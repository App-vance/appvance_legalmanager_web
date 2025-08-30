import Header from "@/modules/Header";
import Hero from "@/modules/Hero";
import Info from "@/modules/Info";
import Services from "@/modules/Services";
import About from "@/modules/About";
import Team from "@/modules/Team";
import TeamCarousel from "@/modules/TeamCarousel";
import ConsultForm from "@/modules/ConsultForm";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Info />
      <Services />
      <About />
      <Team />
      <TeamCarousel />
      <ConsultForm />
    </>
  );
}
