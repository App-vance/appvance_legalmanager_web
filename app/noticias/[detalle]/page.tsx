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


// "use client";

// import SectionIntro from "@/components/SectionIntro";
// import Carousel from "@/components/Carousel";
// import { getNewsById, getNewsList } from "@/lib/new";
// import { useEffect, useState } from "react";

// interface PageProps {
//   params: Promise<{ detalle: string }>;
// }

// interface Sys {
//   id: string;
// }

// interface Image {
//   url: string;
//   width: number;
//   height: number;
//   description: string | null;
//   title: string;
// }

// interface Notice {
//   sys: Sys;
//   tittle: string;
//   date: string;
//   description: string;
//   img: Image;
// }

// interface NoticesProps {
//   notices: Notice[];
// };

// const Notices = async ({ params }: PageProps) => {
//   const { detalle } = await params;
//   const [notices, setNotices] = useState<Notice[]>([]);
//   const [notice, setNotice] = useState<Notice>();

//   useEffect(() => {
//     const fetchNotices = async () => {
//       try {
//         const data = await getNewsList(20);
//         setNotices(data);
//       } catch (error) {
//         console.log(error); 
//       }
//     };
//     fetchNotices();
//   }, []);
//   // const notices = await getNewsList(20);

//   // const notice = await getNewsById(detalle);
//   // console.log(notice);  

//   const setDateNotice = (dateString: string) => {
//     const date = new Date(dateString);

//     const day = date.getUTCDate();
//     const month = date.toLocaleString("es-ES", { month: "long" });
//     const year = date.getUTCFullYear();

//     const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

//     return `${day} ${capitalizedMonth}, ${year}`;
//   };

//   return (
//     <>
//       <section>
//         <div className="px-8 py-14">
//           <div className="space-y-6">
//             <p className="text-body text-secondary-blue font-quicksand">{setDateNotice(notice.date)}</p>
//             <h2 className="text-subtitle text-primary-blue font-inter">{notice.tittle}</h2>
//             <div className="flex items-center gap-4">
//               <div className="h-10 w-10 bg-cover bg-center rounded-full" style={{ backgroundImage: `url('/img/gerente.jpg')` }}></div>
//               <div className="space-y-1.5 font-quicksand">
//                 <p className="text-body m-0">Noticia escrita por:</p>
//                 <span className="text-sm text-secondary-blue">Diego Mauricio Sierra Arango</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* imagen */}
//         <div className="w-full h-[31.25rem] bg-size-[100%_31.25rem]" style={{ backgroundImage: `url(${notice.img?.url}` }}>
//         </div>

//         {/* descripcion */}
//         <div className="bg-blue-light px-8 py-10 font-quicksand">
//           <SectionIntro
//             title="Aquí encontrará todo lo que necesita saber."
//             titleClass="text-primary-blue text-features"
//             description={notice?.description}
//             descriptionClass="text-body-secondary"
//           />
//         </div>

//         {/* mas noticias */}
//         <div className="px-8 py-14">
//           <Carousel<Notice>
//             items={notices}
//             classname3="w-full flex flex-col items-center justify-between rounded-2xl"
//             height="h-[26.875rem]"
//             renderItem={(item) => (
//               <div className="flex flex-col items-center text-center px-4 py-16 h-full justify-end">
//                 <p className="text-body text-slate-600 mb-6">{setDateNotice(item.date)}</p>
//                 <span className="text-small font-bold text-slate-800">
//                   {item.tittle}
//                 </span>
//               </div>
//             )}
//           />
//         </div>
//       </section>
//     </>
//   );
// };

// export default Notices;