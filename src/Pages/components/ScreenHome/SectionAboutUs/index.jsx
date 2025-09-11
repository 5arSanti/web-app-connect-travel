import { SectionWrapper } from "../../SectionWrapper";
import { TextCard } from "../../TextComponents";
import { WrapperContainer2 } from "../../WrapperContainers";
import { GridContainer } from "../../GridContainer";

import "./styles.css";
import { aboutData, statsData } from "../../../utils/ContactInfo/about-us.utils";
import { Title } from "../../Title";
import React from "react";
import { TimeLine } from "../../TimeLine";
import { FadeWrapper } from "../../FadeWrapper";

const AboutCard = ({ icon, title, description, delay = 0 }) => {
    return (
        <FadeWrapper delay={delay}>
            <div className="about-card">
                <div className="about-card-icon">
                    {icon}
                </div>
                <div className="about-card-content">
                    <h3 className="about-card-title">{title}</h3>
                    <TextCard textAlign="center" fontSize={14} className="about-card-description">
                        {description}
                    </TextCard>
                </div>
            </div>
        </FadeWrapper>
    );
};

const SectionAboutUs = () => {
    return (
        <SectionWrapper padding={0} id="nosotros" innerPadding={"50px 100px"}>
            <WrapperContainer2 flexDirection="column" padding={0} gap={40}>
                <FadeWrapper>
                    <WrapperContainer2 flexDirection="column" gap={20} className="about-us-text-container">
                        <TextCard fontSize={14} textAlign="center" className="about-subtitle">Descubre</TextCard>
                        <Title fontSize={60}>CONNECT TRAVELS</Title>
                        <TextCard textAlign="center" fontSize={18} className="about-main-description">
                            Somos una agencia especializada en turismo nacional e internacional con más de 15 años de trayectoria en el mercado, creando momentos inolvidables para cada viajero.
                        </TextCard>
                    </WrapperContainer2>
                </FadeWrapper>

                <FadeWrapper delay={200}>
                    <GridContainer
                        className="stats-grid"
                        justifyContent="center"
                        alignItems="center"
                        gap={30}
                        padding={"0 100px"}
                    >
                        {statsData.map((stat, index) => (
                            <div key={index} className="stat-item" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </GridContainer>
                </FadeWrapper>

                <TimeLine />


                <FadeWrapper delay={100}>
                    <WrapperContainer2 flexDirection="column" gap={20} className="about-cta">
                        <TextCard textAlign="center" fontSize={20} className="cta-text">
                            ¿Listo para tu próxima aventura?
                        </TextCard>
                        <TextCard textAlign="center" fontSize={16} className="cta-subtext">
                            Únete a miles de viajeros que ya han descubierto el mundo con Connect Travels
                        </TextCard>
                    </WrapperContainer2>
                </FadeWrapper>
            </WrapperContainer2>
        </SectionWrapper>
    );
}

export { SectionAboutUs };