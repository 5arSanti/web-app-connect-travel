import React from "react";
import { WrapperContainer2 } from "../WrapperContainers";
import { helpFeatures } from "../../utils/ContactInfo/help-features.utils";

import "./styles.css";

const ContactHelpSection = () => {

    return (
        <div className="help-section">
            <WrapperContainer2 flexDirection="column" padding={40} gap={40} className="help-section-container">
                <div className="help-header">
                    <h2 className="help-title">¿Necesitas Ayuda?</h2>
                    <p className="help-subtitle">
                        Nuestro equipo de expertos en viajes está aquí para hacer de tu experiencia
                        algo extraordinario. No dudes en contactarnos.
                    </p>
                </div>

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
            </WrapperContainer2>
        </div>
    );
};

export { ContactHelpSection }; 