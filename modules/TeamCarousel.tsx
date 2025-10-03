// components/TeamCarousel.tsx
"use client";

import Carousel from "@/components/Carousel";
import CardCarousel from "@/components/CardCarousel";
import { team } from "@/helpers/team";

type TeamMember = {
  name: string;
  position: string;
  image: string;
  qualifications: string[];
};

const TeamCarousel = () => {
  return (
    <Carousel<TeamMember>
      classname1="lg:hidden"
      classname2="py-10 px-8 md:px-36"
      classname3="w-full flex flex-col items-center justify-between bg-white rounded-2xl"
      items={team}
      renderItem={(item) => (
        <CardCarousel
          name={item.name}
          position={item.position}
          image={item.image}
          qualifications={item.qualifications}
        />
      )}
    />
  );
};

export default TeamCarousel;
