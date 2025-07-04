import { SectionWrapper } from "../../SectionWrapper";
import { TextCard } from "../../TextComponents";
import { Title } from "../../Title";
import { WrapperContainer2 } from "../../WrapperContainers";
import { GridContainer } from "../../GridContainer";
import { FadeWrapper } from "../../FadeWrapper";

import "./styles.css";
import { aboutData, statsData } from "../../../utils/ContactInfo/about-us.utils";

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
        <SectionWrapper padding={30} id="nosotros">
            <WrapperContainer2 flexDirection="column" padding={50} gap={80}>

                <FadeWrapper>
                    <WrapperContainer2 flexDirection="column" gap={20}>
                        <TextCard fontSize={14} textAlign="center" className="about-subtitle">Descubre</TextCard>
                        <Title fontSize={60}>CONNECT TRAVEL'S</Title>
                        <TextCard textAlign="center" fontSize={18} className="about-main-description">
                            Somos una empresa líder en turismo nacional e internacional con más de 15 años de experiencia
                            conectando viajeros con los destinos más increíbles del mundo.
                        </TextCard>
                    </WrapperContainer2>
                </FadeWrapper>

                <FadeWrapper delay={200}>
                    <div className="stats-container">
                        <GridContainer className="stats-grid">
                            {statsData.map((stat, index) => (
                                <div key={index} className="stat-item" style={{ animationDelay: `${index * 100}ms` }}>
                                    <div className="stat-icon">{stat.icon}</div>
                                    <div className="stat-number">{stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </GridContainer>
                    </div>
                </FadeWrapper>

                <div className="about-grid-container">
                    <GridContainer className="about-grid">
                        {aboutData.map((item, index) => (
                            <AboutCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                delay={index * 100}
                            />
                        ))}
                    </GridContainer>
                </div>

                <FadeWrapper delay={800}>
                    <WrapperContainer2 flexDirection="column" gap={20} className="about-cta">
                        <TextCard textAlign="center" fontSize={20} className="cta-text">
                            ¿Listo para tu próxima aventura?
                        </TextCard>
                        <TextCard textAlign="center" fontSize={16} className="cta-subtext">
                            Únete a miles de viajeros que ya han descubierto el mundo con Connect Travel's
                        </TextCard>
                    </WrapperContainer2>
                </FadeWrapper>

            </WrapperContainer2>
        </SectionWrapper>
    );
}

export { SectionAboutUs };