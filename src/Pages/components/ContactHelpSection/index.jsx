import React from "react";
import { WrapperContainer2 } from "../WrapperContainers";
import { helpFeatures } from "../../utils/ContactInfo/help-features.utils";

import "./styles.css";
import { FaGlobe } from "react-icons/fa";

const ContactHelpSection = () => {
    
    return (
        <div className="help-section">
            <WrapperContainer2 flexDirection="column" padding={40} gap={40}>
                
                {/* Header */}
                <div className="help-header">
                    <h2 className="help-title">¿Necesitas Ayuda?</h2>
                    <p className="help-subtitle">
                        Nuestro equipo de expertos en viajes está aquí para hacer de tu experiencia 
                        algo extraordinario. No dudes en contactarnos.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="help-features">
                    {helpFeatures.map((feature, index) => (
                        <div 
                            key={index} 
                            className="help-feature-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="help-cta">
                    <div className="cta-content">
                        <h3 className="cta-title">¡Comienza tu aventura hoy!</h3>
                        <p className="cta-description">
                            Descubre destinos increíbles y crea recuerdos que durarán toda la vida.
                        </p>
                        <div className="cta-buttons">
                            <button className="cta-button primary">Contactar Ahora</button>
                            <button className="cta-button secondary">Ver Destinos</button>
                        </div>
                    </div>
                    <div className="cta-image">
                        <div className="image-placeholder">
                            <FaGlobe className="placeholder-icon" />
                        </div>
                    </div>
                </div>

            </WrapperContainer2>
        </div>
    );
};

export { ContactHelpSection }; 