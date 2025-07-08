import React from "react"
import { aboutData } from "../../utils/ContactInfo/about-us.utils"
import { TimelineCard } from "./TimeLineCard"
import "./styles.css"

const TimeLine = () => {
    return (
        <div className="timeline-grid-container">
            <div className="timeline-center-line" />
            <div className="timeline-grid">
                {aboutData.map((item, idx) => (
                    idx % 2 === 0 ? (
                        <TimelineCard key={idx} {...item} side="left" />
                    ) : (
                        <TimelineCard key={idx} {...item} side="right" />
                    )
                ))}
            </div>
        </div>
    )
}

export { TimeLine }