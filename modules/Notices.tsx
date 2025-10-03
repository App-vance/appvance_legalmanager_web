import CardNotice from "@/components/CardNotice";
import Button from "@/components/Button";
import { getDateWithDay } from "@/lib/date";

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

interface NoticesProps {
  notices: Notice[];
};

const Notices = ({ notices }: NoticesProps) => {
  const latestNew = notices[0];
  return (
    <>
      <div className="lg:bg-primary-blue lg:p-20 xl:px-56">
        <div className="flex flex-col items-center gap-3 text-white text-center bg-primary-blue h-fit p-8 md:px-20 lg:p-0 lg:text-start lg:items-start xl:gap-8">
          <h1 className="text-body-secondary font-quicksand">Mantente informado</h1>
          <h2 className="font-inter text-subtitle lg:max-w-[36.625rem]">Noticias y actualidad: tendencias legales y contables al día.</h2>
          <div className="w-8 h-1 bg-secondary-blue"></div>
        </div>
        <div className="flex lg:gap-8 lg:mt-10">
          <div className="hidden lg:relative lg:flex lg:flex-1 lg:justify-start lg:items-center lg:rounded-lg lg:bg-cover lg:bg-center lg:p-4 xl:pl-10 lg:w-1/2 xl:w-3/5" style={{ backgroundImage: `url(${latestNew?.img?.url})` }}>
            <div className="lg:max-w-96 lg:bg-white lg:rounded-lg lg:p-8 lg:flex lg:flex-col lg:gap-4 lg:font-quicksand">
              <span className='lg:text-small lg:text-secondary-blue'>{getDateWithDay(latestNew.date)}</span>
              <h1 className='text-features'>{latestNew.tittle}</h1>
              <p className='lg:text-small lg:text-start lg:line-clamp-8'>{latestNew.description}</p>
              <Button
                text="Más información aquí"
                customClass="lg:justify-center lg:w-fit mx-auto text-small lg:!bg-gray lg:!text-white transition-colors hover:!bg-secondary-blue hover:lg:!text-white active:lg:!bg-gray active:!text-white lg:mx-0"
            />
            </div>
          </div>
          <div className="w-full flex flex-col mt-10 lg:w-1/2 lg:gap-8 lg:mt-0 xl:w-2/5">
            {notices.map((notice, index) => (
              <CardNotice key={index} order={index} date={notice.date} description={notice.description} sys={notice.sys} img={notice.img} tittle={notice.tittle} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notices;
