import { SLOGAN } from "../../../../config/constants/slogan.constant";
import { contactInfo } from "../../../utils/ContactInfo/contactInfo";
import { IconsList } from "../../IconsList";
import { TextCard } from "../../TextComponents";
import { Title } from "../../Title";
import { WrapperContainer2 } from "../../WrapperContainers";

const InitialSectioninfo = () => {
    return (
        <WrapperContainer2 justifyContent="center" alignItems="center" gap={5} flexDirection="column" paddingVertical={80}>
            <TextCard white={true} textAlign="center" fontSize={16}>Bienvenido a</TextCard>

            <WrapperContainer2 justifyContent="center" alignItems="center" gap={5} flexDirection="column">
                <Title white={true}>CONNECT TRAVEL'S</Title>
                <TextCard white={true} textAlign="center">{SLOGAN}</TextCard>

            </WrapperContainer2>

            <div>
                <TextCard white={true} textAlign="center" fontSize={16}>(+57) {contactInfo.phone.info}</TextCard>
                <IconsList padding={10} white={true} />
            </div>


        </WrapperContainer2>
    );
}

export { InitialSectioninfo };