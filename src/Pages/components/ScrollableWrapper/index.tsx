import React from "react";
import "./styles.css";

interface ScrollableWrapperProps {
    children: React.ReactNode;
    height?: string;
    gap?: number;
    alignItems?: string;
    padding?: number;
    justifyContent?: string;
}

const ScrollableWrapper = ({
    children,
    height = "100%",
    gap = 0,
    alignItems = "start",
    justifyContent = "start",
    padding = 0,
}: ScrollableWrapperProps) => {
    return (
        <div className="scrollable-wrapper-container" style={{
            height: height,
            gap: gap,
            alignItems: alignItems,
            padding: padding,
            justifyContent: justifyContent,
        }}>
            {children}
        </div>
    );
}

export { ScrollableWrapper };