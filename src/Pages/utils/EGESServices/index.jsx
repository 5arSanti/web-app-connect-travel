import { MdFlight, MdHotel, MdDirectionsCar, MdBeachAccess, MdBusinessCenter, MdExplore } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import { FaPlaneDeparture, FaMapMarkedAlt } from "react-icons/fa";

const connectTravelServices = [
    {
        serviceName: "VIAJES NACIONALES",
        mainSection: "CONNECT TRAVEL'S",
        icon: <MdDirectionsCar/>,
        uri: "viajes-nacionales",
        description: "Explora los destinos más hermosos de tu país con nuestros paquetes nacionales. Desde la costa hasta la montaña, te llevamos a descubrir la riqueza cultural y natural de tu tierra."
    },
    {
        serviceName: "VIAJES INTERNACIONALES",
        mainSection: "CONNECT TRAVEL'S",
        icon: <MdFlight/>,
        uri: "viajes-internacionales",
        description: "Conectamos con el mundo entero. Ofrecemos destinos internacionales con las mejores tarifas, hoteles de calidad y experiencias únicas que te harán vivir aventuras inolvidables."
    },
    {
        serviceName: "PAQUETES TODO INCLUIDO",
        mainSection: "CONNECT TRAVEL'S",
        icon: <MdHotel/>,
        uri: "paquetes-todo-incluido",
        description: "Disfruta de vacaciones sin preocupaciones con nuestros paquetes todo incluido. Vuelos, hoteles, comidas y actividades incluidas para que solo te enfoques en disfrutar."
    },
    {
        serviceName: "CRUCEROS Y NAVEGACIÓN",
        mainSection: "CONNECT TRAVEL'S",
        icon: <GiWorld/>,
        uri: "cruceros",
        description: "Navega por los mares más hermosos del mundo con nuestras opciones de cruceros. Desde el Caribe hasta el Mediterráneo, vive la experiencia de navegar en lujo y confort."
    },
    {
        serviceName: "TURISMO DE NEGOCIOS",
        mainSection: "CONNECT TRAVEL'S",
        icon: <MdBusinessCenter/>,
        uri: "turismo-negocios",
        description: "Facilitamos tus viajes de negocios con servicios corporativos especializados. Vuelos ejecutivos, hoteles de negocios y logística profesional para tu empresa."
    },
    {
        serviceName: "EXCURSIONES Y TOURS",
        mainSection: "CONNECT TRAVEL'S",
        icon: <MdExplore/>,
        uri: "excursiones",
        description: "Descubre destinos únicos con nuestras excursiones guiadas. Tours personalizados, guías expertos y experiencias auténticas que te conectarán con la cultura local."
    }
]

export { connectTravelServices }; 