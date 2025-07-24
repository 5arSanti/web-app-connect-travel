import { contactInfo } from "../../utils/ContactInfo/contactInfo";
import { IconsList } from "../IconsList";
import { TextCard } from "../TextComponents";
import { WrapperContainer2 } from "../WrapperContainers";

import "./styles.css"

const HeaderContact = () => {
    return (
        <WrapperContainer2
            padding={"15px 150px"}
            className="header-contact-container"
            justifyContent="space-between"
            height="auto"

        >
            <IconsList gap justifyContent="start" size={20} padding={0} white={true} />

            <TextCard textAlign="end" white={true}>
                {contactInfo.phone.icon} (+57) {contactInfo.phone.info}
            </TextCard>

        </WrapperContainer2>
    )
}

export { HeaderContact };