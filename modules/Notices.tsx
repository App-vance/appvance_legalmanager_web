import CardNotice from "@/components/CardNotice";
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

interface NoticesProps {
  notices: Notice[];
};

const setDateNotice = (dateString: string) => {
  const date = new Date(dateString);

  const day = date.getUTCDate();
  const month = date.toLocaleString("es-ES", { month: "long" });
  const year = date.getUTCFullYear();

  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  return `${day} ${capitalizedMonth}, ${year}`;
};

const Notices = ({ notices }: NoticesProps) => {
  const latestNew = notices[0];
  return (
    <>
      <div className="lg:bg-primary-blue lg:p-24">
        <div className="flex flex-col items-center gap-3 text-white text-center bg-primary-blue h-fit p-8 md:px-20 lg:p-0 lg:text-start lg:items-start">
          <h1 className="text-body-secondary font-quicksand">Mantente informado</h1>
          <h2 className="font-semibold font-inter text-subtitle lg:max-w-[36.625rem]">Noticias y actualidad: tendencias legales y contables al día.</h2>
          <div className="w-8 h-1 bg-secondary-blue"></div>
        </div>
        <div className="flex lg:gap-8 lg:mt-10">
          <div className="hidden lg:relative lg:flex lg:flex-1 lg:justify-start lg:items-center lg:rounded-lg lg:bg-cover lg:bg-center lg:pl-10 xl:w-3/5" style={{ backgroundImage: `url(${latestNew?.img?.url})` }}>
            <div className="lg:max-w-96 lg:bg-white lg:rounded-lg lg:p-8 lg:flex lg:flex-col lg:gap-4 lg:font-quicksand">
              <span className='lg:text-small lg:text-secondary-blue'>{setDateNotice(latestNew.date)}</span>
              <h1 className='text-features'>{latestNew.tittle}</h1>
              <p className='lg:text-small lg:text-start lg:line-clamp-8'>{latestNew.description}</p>
              <Button
                text="Más información aquí"
                customClass="lg:justify-center lg:w-fit mx-auto text-small lg:!bg-gray lg:!text-white transition-colors hover:!bg-secondary-blue hover:lg:!text-white active:lg:!bg-gray active:!text-white lg:mx-0"
            />
            </div>
          </div>
          <div className="w-full flex flex-col mt-10 lg:w-2/5 xl:w-2/5 lg:gap-8 lg:mt-0">
            <p className="hidden lg:!block lg:order-2 lg:text-white lg:text-body lg:font-quicksand font-bold">Accede a todas las noticias haciendo <span className="underline">clic aquí</span></p>
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
