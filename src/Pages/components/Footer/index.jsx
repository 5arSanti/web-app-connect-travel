import { Link } from "react-router-dom";

import "./styles.css";
import { WrapperContainer2 } from "../WrapperContainers";
import { Title } from "../Title";
import { TextCard } from "../TextComponents";
import { GridContainer } from "../GridContainer";

import { MdOpenInNew } from "react-icons/md";
import { NavButtons } from "../NavButtons";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <GridContainer className="grid-075-125">

                    <WrapperContainer2 flexDirection="column" gap={75}>


                        <WrapperContainer2 justifyContent="center" alignItems="center" gap={5} flexDirection="column">
                            <Link to={"/home"}>
                                <Title className="animacion2" white={true}>CONNECT TRAVEL'S</Title>
                                <TextCard width="auto" className="animacion2" white={true} textAlign="center">TU CONEXIÓN CON EL MUNDO</TextCard>
                            </Link>
                        </WrapperContainer2>

                        <GridContainer className="grid-1-1-1">
                            <NavButtons/>
                        </GridContainer>

                        <WrapperContainer2 justifyContent="center" alignItems="center" padding={"40px 0px 0px 0px"} className="border-top">
                            <TextCard width="auto" className="privacy-policy animacion2" fontSize={13} white={true} textAlign="center">Politica de privacidad <MdOpenInNew/></TextCard>
                        </WrapperContainer2>
                    </WrapperContainer2>
                </GridContainer>

            </footer>
            <SecondFooter/>
        </>
    );
}

const SecondFooter = () => {
    const date = new Date();
    
    return (
        <WrapperContainer2 
            className="footer-copy-container"
            padding={"20px 150px"}
            justifyContent="space-between"
        >
            <TextCard fontSize={10}>Copyright &copy; {date.getFullYear()} Connect Travel's</TextCard>
        </WrapperContainer2>
    );
}

export {Footer};