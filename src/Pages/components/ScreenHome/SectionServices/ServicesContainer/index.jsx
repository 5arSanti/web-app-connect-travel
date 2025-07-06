import { ServiceCard } from "../ServiceCard";
import { GridContainer } from "../../../GridContainer";
import { connectTravelServices } from "../../../../utils/EGESServices";

const ServicesContainer = () => {
    const mainServices = connectTravelServices

    return(
        <div className="services-container">
            <GridContainer className="grid-1-1-1" padding={0} gap={20}>
                {mainServices?.map((item, index) => (
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