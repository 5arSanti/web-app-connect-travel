import React from "react";
import { Fade } from "react-awesome-reveal";

const FadeWrapper = ({ children, width = "100%", delay = 100, height = "auto", className = "" }) => {
    return (
        <Fade style={{ width: width, height: height }} cascade={true} damping={1} delay={delay} className={className}>
            {children}
        </Fade>
    );
}

export { FadeWrapper };