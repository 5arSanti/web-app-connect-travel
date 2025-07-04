import { SectionWrapper } from "../../SectionWrapper";
import { TextCard } from "../../TextComponents";
import { Title } from "../../Title";
import { WrapperContainer2 } from "../../WrapperContainers";

const SectionAboutUs = () => {
    return (
        <SectionWrapper padding={30} id="nosotros">
            <WrapperContainer2 flexDirection="column" padding={125}>
                <WrapperContainer2 flexDirection="column" gap={0}>
                    <TextCard fontSize={12} textAlign="center">Somos</TextCard>
                    <Title>CONNECT TRAVEL'S</Title>
                </WrapperContainer2>

                <TextCard textAlign="center">Somos una empresa líder en turismo nacional e internacional con más de 15 años de experiencia conectando viajeros con los destinos más increíbles del mundo. Nuestra misión es hacer que cada viaje sea una experiencia única, memorable y accesible para todos nuestros clientes.</TextCard>

            </WrapperContainer2>
        </SectionWrapper>
    );
}

export { SectionAboutUs };