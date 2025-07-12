import React from "react";
import { FaBuilding, FaCog, FaHome, FaImage, FaNewspaper, FaTags } from "react-icons/fa";
import { AdminHome } from "../Screens/AdminDashScreen/AdminHome";
import { AppSettingsScreen } from "../Screens/AdminDashScreen/AppSettingsScreen";
import { ImagesRecordScreen } from "../Screens/AdminDashScreen/ImagesRecordScreen";
import NewsScreen from "../Screens/AdminDashScreen/NewsScreen";
import CategoriesScreen from "../Screens/AdminDashScreen/CategoriesScreen";
import ConnectServicesScreen from "../Screens/AdminDashScreen/ConnectServicesScreen";
import { MenuItem } from "../../config/interfaces/menu-items";

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
            children: <ConnectServicesScreen />,
            description: 'Gestiona los servicios de la plataforma.'
        },
        {
            icon: <FaTags />,
            label: 'Categorías',
            children: <CategoriesScreen />,
            description: 'Gestiona las categorías de los servicios.'
        },
        {
            icon: <FaImage />,
            label: 'Carga de imágenes',
            children: <ImagesRecordScreen />,
            description: 'Carga de imagenes de servicios.'
        },
        {
            icon: <FaNewspaper />,
            label: 'Noticias',
            children: <NewsScreen />,
            description: 'Gestiona las noticias de la plataforma.'
        }
    ]

    return menuItems;
}

export { getMenuItems };