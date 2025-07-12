import React from "react";
import { WrapperContainer2 } from "../../WrapperContainers"
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { ServicesContainer } from "./ServicesContainer";
import { FadeWrapper } from "../../FadeWrapper";

import "./styles.css"
import { ConnectService } from "../../../../services/connect-services/interfaces/connect-services";

const SectionServices = ({ connectServices }: { connectServices: ConnectService[] }) => {
    return (
        <section id="servicios">
            <FadeWrapper>
                <WrapperContainer2 flexDirection="column" padding={50} gap={40}>
                    <WrapperContainer2 flexDirection="column" gap={20}>
                        <SectionTitle title="NUESTROS SERVICIOS" subTitle="CONNECT TRAVEL'S" />
                        <p className="services-slogan">
                            Descubre una amplia gama de servicios turísticos diseñados para hacer de tu viaje
                            una experiencia inolvidable. Desde destinos nacionales hasta aventuras internacionales.
                        </p>
                    </WrapperContainer2>

                    <ServicesContainer connectServices={connectServices} />
                </WrapperContainer2>
            </FadeWrapper>
        </section>
    )
}

export default SectionServices;