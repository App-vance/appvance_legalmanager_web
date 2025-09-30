// NoticesClient.tsx (Client Component)
"use client";

import Carousel from "@/components/Carousel";
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

const NoticesClient = ({
  notices,
  notice,
}: {
  notices: Notice[];
  notice: Notice;
}) => {
  const noticesWeb = notices
    .filter((not) => not.sys.id !== notice.sys.id)
    .slice(0, 3);

  return (
    <div className="px-8 py-14 lg:bg-blue-light lg:py-20 lg:px-24 xl:px-56 xl:py-28">
      <h1 className="text-primary-blue text-subtitle lg:mb-10">
        Últimas noticias
      </h1>
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
              <span className="text-body text-secondary-blue mb-6">
                {getDateWithDay(item.date)}
              </span>
              <span className="text-features text-primary-blue">
                {item.tittle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticesClient;
