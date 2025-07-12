import React from "react";
import { ServiceCard } from "../ServiceCard";
import { GridContainer } from "../../../GridContainer";
import { ConnectService } from "../../../../../services/connect-services/interfaces/connect-services";
import { WrapperContainer2 } from "../../../WrapperContainers";

const ServicesContainer = ({ connectServices }: { connectServices: ConnectService[] }) => {
    return (
        <WrapperContainer2
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={20}
            padding={0}
        >
            <GridContainer className="services-grid" padding={0} gap={20}>
                {connectServices?.map((item, index) => (
                    <ServiceCard
                        key={index}
                        item={item}
                    />
                ))}
            </GridContainer>
        </WrapperContainer2>
    )
}

export { ServicesContainer };