import React, { useState, useEffect } from "react";
import { NavOptions } from "../NavOptions";
import { FloatingNav } from "../FloatingNav";
import "./styles.css"
import { LogoCard } from "../LogoCard";

const Header = ({ isAuthPage = false }) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResizeAndScroll = () => {
            const isMobileView = window.innerWidth <= 1100;

            setIsMobile(isMobileView);
        };

        handleResizeAndScroll();

        window.addEventListener('resize', handleResizeAndScroll);
        window.addEventListener('scroll', handleResizeAndScroll);

        return () => {
            window.removeEventListener('resize', handleResizeAndScroll);
            window.removeEventListener('scroll', handleResizeAndScroll);
        };
    }, []);

    return (
        <>
            <nav className="nav-container animacion-nav">
                <LogoCard padding={"0 0 0 75px" as unknown as number} />

                {!isMobile && <NavOptions isAuthPage={isAuthPage} />}
            </nav>

            {isMobile && <FloatingNav isAuthPage={isAuthPage} />}
        </>
    );
}

export { Header };