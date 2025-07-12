import { WrapperContainer2 } from "../../WrapperContainers";
import { ButtonCard } from "../../ButtonCard";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { SpanCard } from "../../TextComponents";
import { FaArrowRight } from "react-icons/fa";

import "./styles.css"

const ContentCollapseBar = ({ collapsed, setCollapsed, title, description }) => {
    return (
        <WrapperContainer2
            justifyContent="start"
            alignItems="start"
            height="auto"
            padding={0}
            gap={0}
            flexDirection="column"
        >
            <WrapperContainer2 justifyContent="start" alignItems="start" width="auto" height="auto" padding={0}>
                <ButtonCard
                    onClick={() => setCollapsed(!collapsed)}
                    borderWidth={0}
                    padding={5}
                    borderRadius={5}
                    title={collapsed ? "Expandir" : "Colapsar"}
                >
                    {collapsed ? <TbLayoutSidebarRightCollapse /> : <TbLayoutSidebarLeftCollapse />} {title}
                    <FaArrowRight className="arrow-icon" /> <SpanCard fontSize={10} color="var(--pallete-2)">{description}</SpanCard>
                </ButtonCard>

            </WrapperContainer2>

            <div style={{ width: "100%", height: "1px", borderBottom: "1px solid var(--lines-color)" }}></div>
        </WrapperContainer2>
    )
}

export { ContentCollapseBar };