import { ScrollableWrapper } from "../../ScrollableWrapper";
import { WrapperContainer2 } from "../../WrapperContainers";
import { ContentCollapseBar } from "../ContentCollapseBar";

const MainContent = ({ children, collapsed, setCollapsed, title, description }) => (
    <WrapperContainer2 padding={10} justifyContent="start" alignItems="start" flexDirection="column" gap={5}>
        <ContentCollapseBar collapsed={collapsed} setCollapsed={setCollapsed} title={title} description={description} />

        <ScrollableWrapper height="100%">
            {children}
        </ScrollableWrapper>
    </WrapperContainer2>
);

export { MainContent }; 