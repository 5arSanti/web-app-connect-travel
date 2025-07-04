import React, { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";

import "./styles.css";
import { HashLink } from "react-router-hash-link";
import { navigationItems } from "../../utils/navigationItems";

const FloatingNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsVisible(scrollTop > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = () => {
        setIsOpen(false);
    };

    if (!isVisible) return null;

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
            </div>
        </div>
    );
};

export { FloatingNav }; 