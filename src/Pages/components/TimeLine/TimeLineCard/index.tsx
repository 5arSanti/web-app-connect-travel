import React from "react"
import { TextCard } from "../../TextComponents";
import "./styles.css"

interface TimelineCardProps {
    icon: React.ReactNode
    title: string
    description: string
    side: "left" | "right"
}

const TimelineCard = ({ icon, title, description, side }: TimelineCardProps) => {
    let align = side === "left" ? "end" : "start"
    return (
        <>
            <div className={`timeline-card ${side}`}>
                <div className={`timeline-dot ${side}`} />
                <div className="timeline-card-content" style={{ alignItems: align }}>
                    <div className="timeline-icon">{icon}</div>
                    <h3 className="timeline-title">{title}</h3>
                    <TextCard textAlign={align} className="timeline-description">{description}</TextCard>
                </div>
            </div>
            <div />
        </>
    )
};

export { TimelineCard }
