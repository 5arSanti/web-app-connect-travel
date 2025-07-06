import { mainLogo } from "../../../assets";
import { NavLink } from "react-router-dom";
import "./styles.css";

const LogoCard = ({ padding = 0, containerWidth = "auto", imageWidth = "100%" }) => (
    <NavLink
        to="/home"
        className="main-logo-card"
        style={{ padding: padding, width: containerWidth }}
    >
        <img src={mainLogo} alt="Logo" style={{ width: imageWidth }} />
    </NavLink>
);

export { LogoCard }; 