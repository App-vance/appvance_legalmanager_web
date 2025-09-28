// Notices.tsx (Server Component)
import NoticesCarousel from "@/components/NoticesCarousel";
import SectionIntro from "@/components/SectionIntro";
import { getNewsById, getNewsList } from "@/lib/new";

interface PageProps {
  params: Promise<{ detalle: string }>;
}

const Notices = async ({ params }: PageProps) => {
  const { detalle } = await params;

  const notices = await getNewsList(20);
  const notice = await getNewsById(detalle);

  return (
    <NoticesCarousel notices={notices} notice={notice} />
  );
};

export default Notices;
