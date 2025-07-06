import { Link } from "react-router-dom";

import "./styles.css";
import { WrapperContainer2 } from "../WrapperContainers";
import { Title } from "../Title";
import { TextCard } from "../TextComponents";

import { MdOpenInNew } from "react-icons/md";

const Footer = () => {
    const date = new Date();

    return (
        <footer className="footer">
            <WrapperContainer2 flexDirection="column" gap={75}>
                <WrapperContainer2 justifyContent="center" alignItems="center" gap={5} flexDirection="column">
                    <Link to={"/home"}>
                        <Title className="animacion2" white={true}>CONNECT TRAVEL'S</Title>
                        <TextCard width="auto" className="animacion2" white={true} textAlign="center">TU CONEXIÓN CON EL MUNDO</TextCard>
                    </Link>
                </WrapperContainer2>

                <WrapperContainer2 justifyContent="center" alignItems="center" padding={"40px 0px 0px 0px"} className="border-top">
                    <TextCard width="auto" className="privacy-policy animacion2" fontSize={13} white={true} textAlign="center">Politica de privacidad <MdOpenInNew /></TextCard>
                </WrapperContainer2>
            </WrapperContainer2>

            <TextCard white={true} fontSize={10}>Copyright &copy; {date.getFullYear()} Connect Travel's</TextCard>
        </footer>
    );
}

export { Footer };