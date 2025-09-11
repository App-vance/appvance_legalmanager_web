import CardNotice from "@/components/CardNotice";

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
  console.log(notices);
  return (
    <>
      <div className="flex flex-col items-center gap-3 text-white text-center bg-primary-blue h-fit p-8 md:px-20 lg:p-0 lg:text-start lg:bg-white lg:text-primary-blue lg:items-start">
        <h1 className="text-body-secondary font-quicksand">Mantente informado</h1>
        <h2 className="text-2xl font-semibold font-inter lg:text-subtitle lg:max-w-[30.625rem]">Noticias y actualidad: tendencias legales y contables al día.</h2>
        <div className="w-8 h-1 bg-secondary-blue"></div>
      </div>
      <div className="flex">
        <div className="hidden lg:flex">aaaaa</div>
        <div className="w-full flex flex-col mt-10">
          {notices.map((notice, index) => (
            <CardNotice key={index} date={notice.date} description={notice.description} sys={notice.sys} img={notice.img} tittle={notice.tittle} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Notices;
