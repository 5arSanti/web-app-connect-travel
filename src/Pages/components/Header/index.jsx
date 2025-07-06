import { NavOptions } from "../NavOptions";
import "./styles.css"
import { LogoCard } from "../LogoCard";

const Header = () => {

    return (
        <nav className="nav-container animacion-nav">
            <LogoCard padding={"0 75px"} />

            <NavOptions />
        </nav>
    );
}

export { Header };