import { Link } from "react-router-dom";

import "./styles.css";
import { WrapperContainer2 } from "../WrapperContainers";
import { SpanCard, TextCard } from "../TextComponents";

import { MdOpenInNew } from "react-icons/md";
import { Title } from "../Title";
import { SLOGAN } from "../../../config/constants/slogan.constant";
import { GridContainer } from "../GridContainer";
import { ImageCard } from "../ImageCard";
import { LogoCard } from "../LogoCard";
import { IconsList } from "../IconsList";

const Footer = () => {
    const date = new Date();

    return (
        <footer className="footer">
            <GridContainer className="grid-05-15" gap={10}>
                <LogoCard padding={0} containerWidth="100%" imageWidth="100%" />

                <WrapperContainer2 flexDirection="column" gap={50}>
                    <WrapperContainer2 justifyContent="center" alignItems="center" gap={5} flexDirection="column">
                        <Link to={"/home"}>
                            <Title className="animacion2" white={true}>CONNECT TRAVEL'S</Title>
                            <TextCard width="auto" className="animacion2" white={true} textAlign="center">{SLOGAN}</TextCard>
                        </Link>
                    </WrapperContainer2>

                    <WrapperContainer2
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        padding={"40px 0px 0px 0px"}
                        className="border-top"
                        gap={30}
                    >
                        <GridContainer className="grid-1-1" gap={10}>
                            <TextCard width="100%" fontSize={13} white={true} textAlign="center" padding={0}>
                                <SpanCard className="animacion2 italic" white={true}>RNT: 220989</SpanCard>
                            </TextCard>
                            <TextCard width="100%" fontSize={13} white={true} textAlign="center" padding={0}>
                                <SpanCard className="animacion2 italic" white={true}>NIT: 901691611-2</SpanCard>
                            </TextCard>
                        </GridContainer>

                        <IconsList white={true} size={20} padding={0} />
                        <TextCard textAlign="center" white={true} fontSize={10}>Copyright &copy; {date.getFullYear()} Connect Travel's</TextCard>

                    </WrapperContainer2>
                </WrapperContainer2>
            </GridContainer>

        </footer>
    );
}

export { Footer };