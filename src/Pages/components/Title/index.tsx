import React from "react";
import "./styles.css";

interface TitleProps {
    children: React.ReactNode;
    white?: boolean;
    className?: string;
    padding?: number;
    fontSize?: number;
    textAlign?: "center" | "start" | "end";
    width?: string;
    innerWidth?: string;
}

const Title = ({
    children,
    white = false,
    className = "",
    padding = 15,
    fontSize = 50,
    textAlign = "center",
    width = "100%",
    innerWidth = "auto"
}: TitleProps) => {
    return (
        <div className="title-container" style={{
            padding: padding,
            width: width,
        }}>
            <h1
                className={`title archivo-font ${white && "white-color"} ${className}`}
                style={{
                    fontSize: fontSize,
                    textAlign: textAlign,
                    width: innerWidth
                }}
            >
                {children}
            </h1>
        </div>
    );
}

export { Title };