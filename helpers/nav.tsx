'use client';

export const navigationLinks = [
    { name: 'Servicios', href: '/servicios', id: 'services' },
    { name: 'Quiénes somos', href: '/nosotros', id: 'about' },
    { name: 'Noticias', href: '/noticias', id: 'notices' },
    { name: 'Contáctanos', href: '/contacto', id: 'contact' },
    { name: 'Ubicación', href: '/ubicacion', id: 'ubication' },
]

export const navigationLinkMobile = [
    { name: 'Home', href: '/', id: 'home' },
    ...navigationLinks
]

export const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

// Navega a la página principal y guarda el id de la sección
export const navigateAndScrollToSection = (id: string, router: any, path:string = '/') => {
    if (window.location.pathname !== '/') {
        localStorage.setItem('scrollToSectionId', id);
        router.push(path);
    } else {
        scrollToSection(id);
    }
};