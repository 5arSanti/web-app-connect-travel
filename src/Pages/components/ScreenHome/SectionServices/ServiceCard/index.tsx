import React from "react";
import { TextCard } from "../../../TextComponents";
import { SubTitle } from "../../../SubTitle";
import { Link } from "react-router-dom";

import "./styles.css"
import { ConnectService } from "../../../../../services/connect-services/interfaces/connect-services";
import { icons } from "../../../../utils/Icons";

const ServiceCard = ({ item }: { item: ConnectService }) => {
    return (
        <div className="service-card">
            <div className="service-card-content">
                <div className="service-icon-wrapper">
                    {icons.find(icon => icon.name === item.icon_name)?.icon}
                </div>

                <div className="service-text-content">
                    <TextCard fontSize={12} className="service-main-section">
                        Connect Travel's
                    </TextCard>
                    <SubTitle className="service-title">
                        {item.name}
                    </SubTitle>
                    <TextCard fontSize={14} className="service-description">
                        {item.description}
                    </TextCard>
                </div>
            </div>
        </div>
    )
}

export { ServiceCard };