// NoticesClient.tsx (Client Component)
"use client";

import Carousel from "@/components/Carousel";
import SectionIntro from "@/components/SectionIntro";
import { getDateWithDay } from "@/lib/date";

interface Sys {
  id: string;
}

type Notice = {
  sys: Sys;
  date: string;
  tittle: string;
  image: string;
  description?: string;
  img?: { url: string };
};

const NoticesClient = ({ notices, notice }: { notices: Notice[]; notice: Notice }) => {
  const noticesWeb = notices.filter((not) => not.sys.id !== notice.sys.id).slice(0, 3);

  return (
    <section>
      <div className="px-8 py-14 lg:py-20 lg:px-24 xl:px-56 xl:py-28">
        <div className="space-y-6">
          <p className="text-body text-secondary-blue font-quicksand">
            {getDateWithDay(notice.date)}
          </p>
          <h2 className="text-subtitle text-primary-blue font-inter">
            {notice.tittle}
          </h2>
          <div className="flex items-center gap-4">
            <div
              className="h-10 w-10 bg-cover bg-center rounded-full lg:w-14 lg:h-14"
              style={{ backgroundImage: `url('/img/gerente.jpg')` }}
            ></div>
            <div className="space-y-1.5 font-quicksand">
              <p className="text-body m-0">Noticia escrita por:</p>
              <span className="text-small text-secondary-blue">
                Diego Mauricio Sierra Arango
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Imagen */}
      <div
        className="w-full h-[31.25rem] bg-size-[100%_31.25rem] lg:h-[39.875rem] lg:bg-size-[100%_39.875rem]"
        style={{ backgroundImage: `url(${notice.img?.url})` }}
      ></div>

      {/* Descripción */}
      <div className="bg-blue-light px-8 py-10 font-quicksand lg:bg-white lg:py-20 lg:px-24 xl:px-56 xl:py-28">
        <SectionIntro
          title="Aquí encontrará todo lo que necesita saber."
          titleClass="text-primary-blue text-features"
          description={notice?.description}
          descriptionClass="text-body-secondary"
        />
      </div>

      {/* Más noticias */}
      <div className="px-8 py-14 lg:bg-blue-light lg:py-20 lg:px-24 xl:px-56 xl:py-28">
        <h1 className="text-primary-blue text-subtitle lg:mb-10">Últimas noticias</h1>
        <section className="lg:hidden">
          <Carousel<Notice>
            items={notices}
            classname3="w-full flex flex-col items-center justify-between rounded-2xl"
            height="h-[26.875rem]"
            renderItem={(item) => (
              <div className="flex flex-col items-start text-center w-full h-full justify-center font-quicksand">
                <img
                  src={item.img?.url}
                  alt={item.tittle}
                  className="w-full h-[15.625rem] object-cover mb-8 rounded-lg"
                />
                <p className="text-body text-secondary-blue mb-6">
                  {getDateWithDay(item.date)}
                </p>
                <span className="text-features text-primary-blue">
                  {item.tittle}
                </span>
              </div>
            )}
          />
        </section>
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-10">
            {noticesWeb.map((item, index) => (
              <div key={index} className="group flex flex-col">
                <img
                  src={item.img?.url}
                  alt={item.tittle}
                  className="w-96 h-[18.75rem] object-cover rounded-lg mb-8"
                />
                <span className="text-body text-secondary-blue mb-6">{getDateWithDay(item.date)}</span>
                <span className="text-features text-primary-blue">
                  {item.tittle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticesClient;
