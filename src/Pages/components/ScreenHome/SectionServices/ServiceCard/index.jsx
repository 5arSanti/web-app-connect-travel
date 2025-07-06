import { WrapperContainer2 } from "../../../WrapperContainers";
import { TextCard } from "../../../TextComponents";
import { SubTitle } from "../../../SubTitle";
import { Link } from "react-router-dom";

import "./styles.css"

const ServiceCard = ({item={}}) => {
    return(
        <Link className="service-card" to={`/${item.uri}`}>
            <div className="service-card-content">
                <div className="service-icon-wrapper">
                    {item.icon}
                </div>
                
                <div className="service-text-content">
                    <TextCard fontSize={12} className="service-main-section">{item.mainSection}</TextCard>
                    <SubTitle className="service-title">{item.serviceName}</SubTitle>
                    <TextCard fontSize={14} className="service-description">{item.description}</TextCard>
                </div>
                
                <div className="service-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </Link>
    )
}

export { ServiceCard };