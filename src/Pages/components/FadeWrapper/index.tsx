import React from "react";
import { Fade } from "react-awesome-reveal";
import { AppContext } from "../../../Context";

const FadeWrapper = ({ children, width = "100%", delay = 100, height = "auto", className = "" }) => {
    const { windowWidth } = React.useContext(AppContext);
    return (
        windowWidth > 768
            ? <Fade style={{ width: width, height: height }} cascade={true} damping={1} delay={delay} className={className}>
                {children}
            </Fade>
            : <div style={{ width: width, height: height }} className={className}>
                {children}
            </div>
    );
}

export { FadeWrapper };