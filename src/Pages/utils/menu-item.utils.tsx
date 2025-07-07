import React from "react";
import { FaBuilding, FaCog, FaHome, FaImage, FaNewspaper, FaTags } from "react-icons/fa";
import { MenuItem } from "../../interfaces/menu-items";
import { AdminHome } from "../Screens/AdminDashScreen/AdminHome";
import { AppSettingsScreen } from "../Screens/AdminDashScreen/AppSettingsScreen";

const getMenuItems = (): MenuItem[] => {
    const menuItems: MenuItem[] = [
        {
            icon: <FaHome />,
            label: 'Inicio',
            children: <AdminHome />,
            description: 'Volver a la pagina principal de Connect Travel\'s.',
            path: '/home'
        },
        {
            icon: <FaCog />,
            label: 'Configuraciones',
            children: <AppSettingsScreen />,
            description: 'Configuraciones de la plataforma.'
        },
        {
            icon: <FaBuilding />,
            label: 'Servicios',
            children: <p>Servicios</p>,
            description: 'Gestiona los servicios de la plataforma.'
        },
        {
            icon: <FaTags />,
            label: 'Categorías',
            children: <p>Categorías</p>,
            description: 'Gestiona las categorías de los servicios.'
        },
        {
            icon: <FaImage />,
            label: 'Carga de imágenes',
            children: <p>Carga de imágenes</p>,
            description: 'Carga de imagenes de servicios.'
        },
        {
            icon: <FaNewspaper />,
            label: 'Noticias',
            children: <p>Noticias</p>,
            description: 'Gestiona las noticias de la plataforma.'
        }
    ]

    return menuItems;
}

export { getMenuItems };