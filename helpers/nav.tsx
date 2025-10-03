import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const navigationLinks = [
  { name: "Servicios", href: "/servicios", id: "services" },
  { name: "Quiénes somos", href: "/nosotros", id: "about" },
  { name: "Noticias", href: "/noticias", id: "notices" },
  { name: "Contáctanos", href: "/contacto", id: "contact" },
  { name: "Ubicación", href: "/ubicacion", id: "ubication" },
];

export const navigationLinkMobile = [
  { name: "Home", href: "/", id: "home" },
  ...navigationLinks,
];

export const scrollToSection = (id: string, router: AppRouterInstance) => {
  if (window.location.pathname !== "/") {
    router.push(`/#${id}`);
    // setTimeout(() => {
    //   document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    // }, 200);
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
};
