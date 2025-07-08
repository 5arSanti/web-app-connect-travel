import { GridContainer } from "../../GridContainer";
import { SectionWrapper } from "../../SectionWrapper";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { WrapperContainer2 } from "../../WrapperContainers";
import { FadeWrapper } from "../../FadeWrapper";
import { MapCard } from "../../MapCard";
import { ContactInformation } from "./ContactInformation";
import { ContactHelpSection } from "../../ContactHelpSection";
import { getSocialMediaInfo } from "../../../utils/ContactInfo/contactInfo";

import "./styles.css";

const SectionContact = () => {
    const socialMediaInfo = getSocialMediaInfo();

    return (
        <SectionWrapper padding={0} id="contacto">
            <WrapperContainer2 flexDirection="column" padding={0} gap={30}>

                <FadeWrapper>
                    <WrapperContainer2 flexDirection="column" gap={20}>
                        <SectionTitle title="CONTACTANOS" subTitle="ESTAMOS AQUÍ PARA AYUDARTE" />
                        <p className="contact-slogan">
                            ¿Listo para planificar tu próxima aventura? Nuestro equipo de expertos en viajes
                            está disponible 24/7 para ayudarte a crear la experiencia perfecta.
                        </p>
                    </WrapperContainer2>
                </FadeWrapper>

                <div className="contact-main-grid">
                    <GridContainer className="grid-1">
                        <FadeWrapper delay={100}>
                            <div className="contact-info-section">
                                <ContactInformation />
                            </div>
                        </FadeWrapper>

                        {/* <FadeWrapper delay={200}>
                            <div className="map-section">
                                <div className="map-container">
                                    <MapCard width="100%" height={500}/>
                                </div>
                                <div className="map-overlay">
                                    <div className="location-info">
                                        <h3>Oficina Principal</h3>
                                        <p>Santa Rosa de Cabal, Risaralda</p>
                                        <p>Colombia</p>
                                    </div>
                                </div>
                            </div>
                        </FadeWrapper> */}

                    </GridContainer>
                </div>

                <FadeWrapper delay={600}>
                    <div className="social-media-section">
                        <h3 className="social-title">Síguenos en Redes Sociales</h3>
                        <p className="social-subtitle">Mantente conectado y descubre ofertas exclusivas</p>

                        <div className="social-icons-container">
                            {socialMediaInfo.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link || "#"}
                                    className="social-icon-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={social.name}
                                >
                                    <div className="social-icon-wrapper">
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </FadeWrapper>

                <FadeWrapper delay={800}>
                    <ContactHelpSection />
                </FadeWrapper>

            </WrapperContainer2>
        </SectionWrapper>
    );
}

export { SectionContact };