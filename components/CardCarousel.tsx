import Image from 'next/image';

type CardTeamProps = {
  name: string;
  position: string;
  image: string;
  qualifications: string[];
}

const CardCarousel = ({ name, position, image, qualifications }: CardTeamProps) => {
  return (
    <>
      <div className="font-quicksand bg-blue-light w-full h-full rounded-lg overflow-hidden">
        <div className="relative w-full min-h-[13.125rem] max-h-[19.375rem]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <h1 className="text-features mb-3">{name}</h1>
          <div className="bg-secondary-blue w-full text-center text-white text-body py-1 mb-5">{position}</div>
          <div className="flex w-full flex-col items-start px-8">
            <div>
              {qualifications.map((item, index) => (
                <div key={index} className="group flex gap-x-5">
                  <div className="relative">
                    {index !== qualifications.length - 1 && (
                      <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-secondary-blue"></div>
                    )}
                    <span className="relative z-10 grid h-1 w-1 place-items-center rounded-full bg-secondary-blue text-slate-800"></span>
                  </div>
                  <div className="-translate-y-1.5 pb-4 text-slate-600">
                    <p className="text-small font-bold text-slate-800 antialiased">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCarousel;