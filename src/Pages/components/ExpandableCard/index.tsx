import React from "react";
import "./styles.css";

interface ExpandableCardProps {
    open: boolean;
    children: React.ReactNode;
    className?: string;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({ open, children, className }) => {

    if (open) return (
        <div className={`expandable-card ${className || ""}`}>
            <div
                className={`expandable-content ${open ? "open" : ""}`}
                style={{
                    maxHeight: open ? '600px' : 0,
                    overflow: "hidden",
                    transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
                }}
            >
                {open && (
                    <div className="expandable-inner-content">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};

export { ExpandableCard }; 