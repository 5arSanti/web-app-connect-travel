import { ServiceCard } from "../ServiceCard";
import { GridContainer } from "../../../GridContainer";
import { connectTravelServices } from "../../../../utils/EGESServices";

const ServicesContainer = () => {
    const mainServices = connectTravelServices

    return(
        <GridContainer className="grid-1-1-1" padding={0} gap={0}>
            {mainServices?.map((item, index) => (
                <ServiceCard 
                    key={index}
                    item={item}
                />
            ))}
        </GridContainer>
    )
}

export { ServicesContainer };