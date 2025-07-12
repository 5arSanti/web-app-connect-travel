import { GridContainer } from "../../GridContainer";
import { SectionWrapper } from "../../SectionWrapper";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { WrapperContainer2 } from "../../WrapperContainers";
import { MapCard } from "../../MapCard";
import { ContactInformation } from "./ContactInformation";
import { ContactHelpSection } from "../../ContactHelpSection";
import { getSocialMediaInfo } from "../../../utils/ContactInfo/contactInfo";

import "./styles.css";
import { FadeWrapper } from "../../FadeWrapper";

const SectionContact = () => {
    const socialMediaInfo = getSocialMediaInfo();

    return (
        <SectionWrapper padding={0} id="contacto">
            <WrapperContainer2 flexDirection="column" padding={0} gap={30}>

                <FadeWrapper>
                    <WrapperContainer2 flexDirection="column" gap={20} className="contact-title-container">
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

                    </GridContainer>
                </div>

                <FadeWrapper delay={600}>
                    <WrapperContainer2
                        flexDirection="column"
                        gap={15}
                        padding={20}
                        className="social-media-section"
                        alignItems="center"
                        justifyContent="center"
                    >
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
                    </WrapperContainer2>
                </FadeWrapper>

                <FadeWrapper delay={800}>
                    <ContactHelpSection />
                </FadeWrapper>

            </WrapperContainer2>
        </SectionWrapper>
    );
}

export { SectionContact };