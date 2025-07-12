import React from "react";
import { ServiceCard } from "../ServiceCard";
import { GridContainer } from "../../../GridContainer";
import { ConnectService } from "../../../../../services/connect-services/interfaces/connect-services";

const ServicesContainer = ({ connectServices }: { connectServices: ConnectService[] }) => {
    return (
        <div className="services-container">
            <GridContainer className="grid-1-1-1" padding={0} gap={20}>
                {connectServices?.map((item, index) => (
                    <ServiceCard
                        key={index}
                        item={item}
                    />
                ))}
            </GridContainer>
        </div>
    )
}

export { ServicesContainer };