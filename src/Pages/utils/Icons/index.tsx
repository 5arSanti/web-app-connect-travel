import React from "react";
import { DropCardItem } from "../../components/DropCard";
import { FaBusinessTime, FaCalendarAlt, FaCar, FaFutbol, FaGamepad, FaGlobe, FaGraduationCap, FaHotel, FaMapMarkedAlt, FaMedkit, FaPlane, FaUtensils, FaShip } from "react-icons/fa";
import { BiTrip } from "react-icons/bi";

const icons: DropCardItem[] = [
    {
        name: "Vuelos",
        icon: <FaPlane />
    },
    {
        name: "Cruceros",
        icon: <FaShip />
    },
    {
        name: "Hoteles",
        icon: <FaHotel />
    },
    {
        name: "Autos",
        icon: <FaCar />
    },
    {
        name: "Restaurantes",
        icon: <FaUtensils />
    },
    {
        name: "Transporte",
        icon: <FaPlane />
    },
    {
        name: "Turismo",
        icon: <BiTrip />
    },
    {
        name: "Ocio",
        icon: <FaGamepad />
    },
    {
        name: "Salud",
        icon: <FaMedkit />
    },
    {
        name: "Educación",
        icon: <FaGraduationCap />
    },
    {
        name: "Navegación",
        icon: <FaMapMarkedAlt />,
    },
    {
        name: "Negocios",
        icon: <FaBusinessTime />
    },
    {
        name: "Excursiones",
        icon: <FaMapMarkedAlt />
    },
    {
        name: "Eventos",
        icon: <FaCalendarAlt />
    },
    {
        name: "Cultural",
        icon: <FaGlobe />
    },
    {
        name: "Deportes",
        icon: <FaFutbol />
    }
]

export { icons };