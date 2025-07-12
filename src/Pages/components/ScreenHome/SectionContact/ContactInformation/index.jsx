import { contactInfo } from "../../../../utils/ContactInfo/contactInfo";
import { GridContainer } from "../../../GridContainer";
import { SubTitle } from "../../../SubTitle";
import { WrapperContainer2 } from "../../../WrapperContainers";
import { ContactCard } from "../ContactCard";

import "./styles.css";

const ContactInformation = () => {
    const contactKeys = Object.keys(contactInfo) || [];

    return (
        <WrapperContainer2 flexDirection="column" padding={30} className="contact-information-container">
            <WrapperContainer2 flexDirection="column" gap={15} padding={0}>
                <SubTitle textAlign="center" className="contact-section-title">
                    INFORMACIÓN DE CONTACTO
                </SubTitle>
                <p className="contact-description">
                    Estamos aquí para ayudarte a planificar tu próxima aventura.
                    Contáctanos y te responderemos lo antes posible.
                </p>
            </WrapperContainer2>

            <div className="contact-content">
                <div className="contact-cards-container">
                    <GridContainer className="grid-3" gap={20}>
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