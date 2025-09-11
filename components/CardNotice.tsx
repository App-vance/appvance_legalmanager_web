import Image from 'next/image';
import Button from "@/components/Button";

interface Sys {
  id: string;
}

interface Image {
  url: string;
  width: number;
  height: number;
  description: string | null;
  title: string;
}

interface Notice {
  sys: Sys;
  tittle: string;
  date: string;
  description: string;
  img: Image;
}

const setDateNotice = (dateString: string) => {
  const date = new Date(dateString);

  const day = date.getUTCDate();
  const month = date.toLocaleString("es-ES", { month: "long" });
  const year = date.getUTCFullYear();

  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  return `${day} ${capitalizedMonth}, ${year}`;
};
const CardNotice = ({ date, description, img, sys, tittle }:Notice) => {
  return (
    <>
      <div className='relative w-full h-64'>
        <Image
          src={img?.url}
          alt={tittle}
          fill
          className="object-cover"
        />
      </div>
      <div className='p-8 last:pb-0'>
        <div className='flex flex-col gap-4 justify-center items-center font-quicksand pb-10 border-b border-gray'>
          <span className='text-small text-primary-blue'>{setDateNotice(date)}</span>
          <h1 className='text-features text-secondary-blue'>{tittle}</h1>
          <p className='text-center text-small'>{description}</p>
          <Button
            text="Más información aquí"
            customClass="justify-center w-fit mx-auto md:mx-12 text-button ring ring-secondary-blue bg-white !text-secondary-blue transition-colors hover:bg-secondary-blue hover:!text-white active:bg-white active:!text-secondary-blue lg:mx-0"
          />
        </div>
      </div>
    </>
  );
};

export default CardNotice;