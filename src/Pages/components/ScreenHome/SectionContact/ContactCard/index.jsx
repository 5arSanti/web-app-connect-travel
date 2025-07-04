import { SpanCard, TextCard } from "../../../TextComponents";
import { WrapperContainer2 } from "../../../WrapperContainers";

import "./styles.css";

const ContactCard = ({item={}, object={}}) => {
    return (
        <WrapperContainer2 flexDirection="row" className="contact-card" padding={20} alignItems="center">
            <div className="contact-icon-wrapper">
                {object[item]?.icon}
            </div>
            
            <div className="contact-info-wrapper">
                <TextCard className="contact-label">
                    <SpanCard fontSize={14} className="contact-name">
                        {object[item]?.name}
                    </SpanCard>
                </TextCard>
                
                <TextCard className="contact-value">
                    {object[item]?.info}
                </TextCard>
            </div>
        </WrapperContainer2>
    );
}

export { ContactCard };