import "./styles.css";
import { HashLink } from "react-router-hash-link";
import { navigationItems } from "../../utils/navigationItems";
import { FaUser } from "react-icons/fa";


const NavOptions = ({ className = "nav-buttons animacion2 pl2", isAuthPage = false }) => {

    return (
        <div className="nav-buttons-container">
            {navigationItems.map((item, index) => (
                <HashLink
                    key={index}
                    to={item.to}
                    className={`${className}`}
                    title={item.label}
                >
                    <span className="nav-label">{item.label}</span> {item.icon}
                </HashLink>
            ))}

            {!isAuthPage && <HashLink to={"/login"} className={`${className}`}>Iniciar Sesión <FaUser /></HashLink>}
        </div>
    )
}
export { NavOptions };