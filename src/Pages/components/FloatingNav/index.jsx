import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { FaUser } from "react-icons/fa";

import "./styles.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { navigationItems } from "../../utils/navigationItems";
import { TextCard } from "../TextComponents";

const FloatingNav = ({ isAuthPage = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = () => {
        setIsOpen(false);
    };

    return (
        <div className={`floating-nav ${isOpen ? 'open' : ''}`}>
            <button
                className="floating-nav-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation"
            >
                {isOpen ? <MdClose /> : <MdMenu />}
            </button>
            <div className="floating-nav-menu">
                <TextCard width="100%" textAlign="center italic" fontSize={10}>Navega por Connect Travels</TextCard>
                {navigationItems.map((item, index) => (
                    <HashLink
                        key={index}
                        to={item.to}
                        className="floating-nav-item"
                        onClick={handleNavClick}
                        title={item.label}
                    >
                        {item.icon}
                        <span className="floating-nav-label">{item.label}</span>
                    </HashLink>
                ))}

                {!isAuthPage && (
                    <>
                        <div className="floating-nav-separator"></div>

                        <Link
                            to="/login"
                            className="floating-nav-item floating-nav-login"
                            onClick={handleNavClick}
                            title="Iniciar Sesión"
                        >
                            <FaUser />
                            <span className="floating-nav-label">Iniciar Sesión</span>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export { FloatingNav }; 