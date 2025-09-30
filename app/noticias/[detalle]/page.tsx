// Notices.tsx (Server Component)
import NoticesCarousel from "@/components/NoticesCarousel";
import SectionIntro from "@/components/SectionIntro";
import { getDateWithDay } from "@/lib/date";
import { getNewsById, getNewsList } from "@/lib/new";

interface PageProps {
  params: Promise<{ detalle: string }>;
}

const Notices = async ({ params }: PageProps) => {
  const { detalle } = await params;

  const notices = await getNewsList(20);
  const notice = await getNewsById(detalle);

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
      <div className="w-full relative">
        <img
          src={notice.img?.url}
          alt={notice.tittle}
          className="object-cover w-full h-full"
          style={{ maxHeight: "600px" }}
          sizes="(max-width: 1024px) 100vw, 80vw"
        />
      </div>

      {/* Descripción */}
      <div className="bg-blue-light px-8 py-10 font-quicksand lg:bg-white lg:py-20 lg:px-24 xl:px-56 xl:py-28">
        <SectionIntro
          title="Aquí encontrará todo lo que necesita saber."
          titleClass="text-primary-blue text-features"
          description={notice?.description}
          descriptionClass="text-body-secondary"
        />
      </div>

      <NoticesCarousel notices={notices} notice={notice} />
    </section>
  );
};

export default Notices;
