import React from "react";

import { AppContext } from "../../../Context";
import { NavButtons } from "../NavButtons";

import "./styles.css";
import { HashLink } from "react-router-hash-link";
import { navigationItems } from "../../utils/navigationItems";
import { FaUser } from "react-icons/fa";


const NavOptions = ({ className = "nav-buttons animacion2 pl2" }) => {

    return (
        <div className="nav-buttons-container">
            <NavButtons className={className} />

            {/* Navegación a secciones */}
            {navigationItems.map((item, index) => (
                <HashLink
                    key={index}
                    to={item.to}
                    className={`${className}`}
                    title={item.label}
                >
                    <span className="nav-label">{item.label}</span> {item.icon}
                </HashLink>
            ))}

            <HashLink to={"/login"} className={`${className}`}>Iniciar Sesión <FaUser /></HashLink>

            {/* <IsAuthWrapper>
                <button
                    className={`${className}`}
                    onClick={handleLogout}
                >
                    Cerrar Sesión
                    <IoLogOutOutline />
                </button>
            </IsAuthWrapper> */}
        </div>
    )
}
export { NavOptions };