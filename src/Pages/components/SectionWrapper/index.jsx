import { FadeWrapper } from "../FadeWrapper";
import { WrapperContainer2 } from "../WrapperContainers";

import "./styles.css"

const SectionWrapper = ({
    children,
    id = "",
    border = true,
    flexDirection = "column",
    padding = 0,
    gap = 0,
    justifyContent = "start",
    alignItems = "start",
    innerPadding = 125,
    backgroundColor = "transparent",
    className = "",
    margin = "10px 0"
}) => {
    return (
        <section className={`section-wrapper ${className}`} id={id} style={{
            flexDirection: flexDirection,
            padding: padding,
            gap: gap,
            justifyContent: justifyContent,
            alignItems: alignItems,
            backgroundColor: backgroundColor,
            margin: margin
        }}>
            {border && <div className="section-decoration"></div>}

            <FadeWrapper>
                <WrapperContainer2 flexDirection="column" padding={innerPadding} className="secondary-section-wrapper">
                    {children}
                </WrapperContainer2>
            </FadeWrapper>
        </section>

    );
}


export { SectionWrapper };