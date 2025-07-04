import { MdBusinessCenter, MdExplore, MdFlight, MdGpsFixed, MdHandshake, MdPeople, MdSecurity, MdStar, MdTrendingUp, MdVisibility } from "react-icons/md";

const aboutData = [
    {
        icon: <MdBusinessCenter />,
        title: "MISIÓN",
        description: "Conectar viajeros con experiencias únicas alrededor del mundo, ofreciendo servicios de calidad que transformen cada viaje en una aventura inolvidable."
    },
    {
        icon: <MdVisibility />,
        title: "VISIÓN",
        description: "Ser la agencia de viajes líder en Latinoamérica, reconocida por la excelencia en el servicio y la innovación en experiencias turísticas."
    },
    {
        icon: <MdGpsFixed />,
        title: "OBJETIVOS",
        description: "Expandir nuestra presencia a 50 destinos internacionales, aumentar la satisfacción del cliente al 98% y reducir nuestra huella de carbono en un 30%."
    },
    {
        icon: <MdSecurity />,
        title: "SEGURIDAD",
        description: "Garantizar la seguridad de nuestros viajeros con protocolos internacionales, seguros completos y soporte 24/7 en todos nuestros destinos."
    },
    {
        icon: <MdHandshake />,
        title: "CONFIANZA",
        description: "Construir relaciones duraderas basadas en la transparencia, honestidad y compromiso con la satisfacción total de nuestros clientes."
    },
    {
        icon: <MdTrendingUp />,
        title: "CRECIMIENTO",
        description: "Innovar constantemente en servicios turísticos, expandiendo nuestras opciones y mejorando la experiencia del viajero moderno."
    }
];

const statsData = [
    { number: "15+", label: "Años de Experiencia", icon: <MdFlight /> },
    { number: "50K+", label: "Clientes Satisfechos", icon: <MdPeople /> },
    { number: "100+", label: "Destinos Disponibles", icon: <MdExplore /> },
    { number: "4.9", label: "Calificación Promedio", icon: <MdStar /> }
];

export { aboutData, statsData };