import { contactInfo } from "../../../../utils/ContactInfo/contactInfo";
import { GridContainer } from "../../../GridContainer";
import { SubTitle } from "../../../SubTitle";
import { WrapperContainer2 } from "../../../WrapperContainers";
import { ContactCard } from "../ContactCard";

import "./styles.css";

const ContactInformation = () => {
    const contactKeys = Object.keys(contactInfo) || [];

    return (
        <WrapperContainer2 flexDirection="column" padding={30}>
            <div className="contact-header">
                <SubTitle textAlign="center" className="contact-section-title">
                    INFORMACIÓN DE CONTACTO
                </SubTitle>
                <p className="contact-description">
                    Estamos aquí para ayudarte a planificar tu próxima aventura.
                    Contáctanos y te responderemos lo antes posible.
                </p>
            </div>

            <div className="contact-content">
                <div className="contact-cards-container">
                    <GridContainer className="grid-1-1">
                        {contactKeys?.map((item, index) => (
                            <ContactCard key={index} item={item} object={contactInfo} />
                        ))}
                    </GridContainer>
                </div>
            </div>
        </WrapperContainer2>
    );
}

export { ContactInformation };