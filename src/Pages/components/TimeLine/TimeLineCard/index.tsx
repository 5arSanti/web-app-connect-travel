import React from "react"
import { TextCard } from "../../TextComponents";
import "./styles.css"
import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";
import { FadeWrapper } from "../../FadeWrapper";

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
            <WrapperContainer2
                className={`timeline-card card-${side} ${side}`}
                padding={"0px 20px" as unknown as number}
            >
                <div className={`timeline-dot ${side}`} />
                <WrapperContainer1
                    className="timeline-card-content shadow-style"
                    flexDirection="column"
                    borderRadius={10}
                    gap={10}
                    alignItems={align}
                    padding="20px 30px"
                >
                    <FadeWrapper delay={0} className="timeline-card-content-container">
                        <WrapperContainer2 className="timeline-container-title" padding={0} justifyContent={align} alignItems="center" gap={10}>
                            {side === "right" && <div className="timeline-icon">{icon}</div>}
                            <TextCard fontSize={24} width="auto" className="timeline-title">{title}</TextCard>
                            {side === "left" && <div className="timeline-icon">{icon}</div>}
                        </WrapperContainer2>
                    </FadeWrapper>
                    {Array.isArray(description) ? description.map((item, idx) => (
                        <TextCard key={idx} fontSize={18} textAlign={align} className="timeline-description">{item}</TextCard>
                    )) : (
                        <FadeWrapper delay={100}>
                            <TextCard fontSize={18} textAlign={align} className="timeline-description">{description}</TextCard>
                        </FadeWrapper>
                    )}
                </WrapperContainer1>
            </WrapperContainer2>
            <div />
        </>
    )
};

export { TimelineCard }
