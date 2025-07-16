import React from "react";
import { ClientOpinion } from "../../../services/client-opinions/interfaces/client-opinion.interface";
import { SliderWrapper } from "../SliderWrapper";
import { TextCard } from "../TextComponents";
import { WrapperContainer2 } from "../WrapperContainers";
import { GridContainer } from "../GridContainer";
import { FadeWrapper } from "../FadeWrapper";
import { CgQuote } from "react-icons/cg";

import "./styles.css"

const SectionUsersOpinions = ({ clientOpinions }: { clientOpinions: ClientOpinion[] }) => {
    return (
        <section id="opiniones" className="opinions-section">

            <WrapperContainer2 flexDirection="column" gap={0} padding={0}>
                <div className="opinions-carousel-container">
                    <FadeWrapper>
                        <WrapperContainer2 flexDirection="column" gap={30} padding={50} className="opinions-carousel-content">
                            <WrapperContainer2 flexDirection="column" gap={5}>
                                <TextCard fontSize={14} textAlign="center" className="opinions-subtitle">
                                    Testimonios
                                </TextCard>
                                <TextCard fontSize={32} textAlign="center" className="opinions-title">
                                    Las experiencias de nuestros viajeros 💙
                                </TextCard>
                                <TextCard fontSize={16} textAlign="center" className="opinions-description">
                                    Descubre las experiencias de quienes han confiado en nosotros para sus viajes
                                </TextCard>
                            </WrapperContainer2>

                            <SliderWrapper padding={0} arrows={false} dots={false} slidesToShow={1}>
                                {clientOpinions?.map((clientOpinion, index) => (
                                    <WrapperContainer2 key={index} flexDirection="column" justifyContent="center" alignItems="center" padding={15} gap={0}>
                                        <div className="opinion-card">
                                            <WrapperContainer2 flexDirection="column" justifyContent="center" alignItems="center" padding={20} gap={30}>
                                                <div className="quote-icon-container">
                                                    <CgQuote className="quote-icon" />
                                                </div>

                                                <TextCard className="opinion-message" textAlign="center" fontSize={18}>
                                                    "{clientOpinion.message}"
                                                </TextCard>

                                                <div className="client-info">
                                                    <TextCard className="client-name" textAlign="center" fontSize={16}>
                                                        {clientOpinion.client_name}
                                                    </TextCard>
                                                    <div className="client-rating">
                                                        {[...Array(5)].map((_, i) => (
                                                            <span key={i} className="star">★</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </WrapperContainer2>
                                        </div>
                                    </WrapperContainer2>
                                ))}
                            </SliderWrapper>
                        </WrapperContainer2>
                    </FadeWrapper>
                </div>

                <div className="opinions-image-container">
                    <WrapperContainer2 className="image-overlay" flexDirection="column" justifyContent="center" alignItems="center" padding={50} gap={30}>
                        <FadeWrapper delay={300}>
                            <WrapperContainer2 flexDirection="column" justifyContent="center" alignItems="center" padding={50} gap={30}>
                                <div className="satisfaction-icon">
                                    <span className="satisfaction-emoji">😊</span>
                                </div>
                                <TextCard white={true} textAlign="center" fontSize={28}>
                                    Satisfacción Garantizada
                                </TextCard>
                                <TextCard white={true} textAlign="center" fontSize={16}>
                                    Más de 1000 clientes satisfechos confían en nosotros para sus viajes
                                </TextCard>
                            </WrapperContainer2>
                        </FadeWrapper>
                    </WrapperContainer2>
                </div>
            </WrapperContainer2>
        </section>
    );
}

export { SectionUsersOpinions };