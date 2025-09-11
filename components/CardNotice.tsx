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
  order: number;
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
const CardNotice = ({ order, date, description, img, sys, tittle }:Notice) => {
  return (
    <>
      <div className={`lg:flex lg:gap-5 ${order === 0 ? 'lg:hidden' : ''}`}>
        <div className='relative shrink-0 w-full h-64 lg:w-40 lg:h-40 xl:w-48 xl:h-48'>
          <Image
            src={img?.url}
            alt={tittle}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className='p-8 last:lg:pb-0 lg:p-0'>
          <div className='flex flex-col gap-4 justify-center items-center font-quicksand pb-10 border-b border-gray lg:border-none lg:items-start lg:pb-0 lg:gap-3 xl:gap-4'>
            <span className='text-small text-primary-blue lg:text-white'>{setDateNotice(date)}</span>
            <h1 className='text-features text-secondary-blue lg:text-white'>{tittle}</h1>
            <p className='text-center text-small lg:text-white lg:text-start lg:line-clamp-3'>{description}</p>
            <Button
              text="Más información aquí"
              customClass="justify-center w-fit mx-auto md:mx-12 text-button ring ring-secondary-blue bg-white !text-secondary-blue lg:ring-0 lg:!bg-gray lg:!text-white transition-colors hover:!bg-secondary-blue hover:lg:!text-white active:bg-secondary-blue active:lg:!bg-gray active:!text-white lg:mx-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardNotice;