import React from "react";
import { DropCardItem } from "../../components/DropCard";
import { FaCar, FaGamepad, FaGraduationCap, FaHotel, FaMedkit, FaPlane, FaUtensils } from "react-icons/fa";
import { BiTrip } from "react-icons/bi";

const icons: DropCardItem[] = [
    {
        name: "Vuelos",
        icon: <FaPlane />
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
]

export { icons };