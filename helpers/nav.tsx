export const navigationLinks = [
    { name: 'Servicios', href: '/servicios', id: 'services' },
    { name: 'Quiénes somos', href: '/nosotros', id: 'about' },
    { name: 'Noticias', href: '/noticias', id: 'team' },
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