
import { mainHome } from "../../../assets";
import "./styles.css"

const StyledSection = ({ children, id, image = '', height = "100vh", className = "", background = "" }) => {

    return (
        <section
            className={`styled-home-main-container ${className}`}
            id={id}
            style={{
                height: height,
            }}
        >
            <div className={`gradient-container`}>
                {children}
            </div>

            <div className={background}></div>

            <img src={image || mainHome} alt="Main home imagen" />
        </section>
    );
}

export { StyledSection }