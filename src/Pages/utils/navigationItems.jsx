import { MdHome, MdBusinessCenter, MdPeople, MdRateReview, MdContactPhone, MdArticle } from "react-icons/md";

export const navigationItems = [
    { to: "/home#home", label: "Inicio", icon: <MdHome /> },
    { to: "/home#servicios", label: "Servicios", icon: <MdBusinessCenter /> },
    { to: "/home#nosotros", label: "Nosotros", icon: <MdPeople /> },
    { to: "/home#opiniones", label: "Opiniones", icon: <MdRateReview /> },
    { to: "/home#contacto", label: "Contacto", icon: <MdContactPhone /> },
    { to: "/home#noticias", label: "Noticias", icon: <MdArticle /> },
];