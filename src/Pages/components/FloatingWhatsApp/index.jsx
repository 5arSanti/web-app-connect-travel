import React, { useState } from "react";
import { FaWhatsapp, FaTimes, FaComments } from "react-icons/fa";
import { contactInfo } from "../../utils/ContactInfo/contactInfo";

import "./styles.css";

const FloatingWhatsApp = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleWhatsAppClick = () => {
        const phoneNumber = contactInfo.phone.info.replace(/\s/g, '').slice(5);
        const message = "Hola! Me interesa conocer más sobre los servicios de Connect Travel. ¿Podrían ayudarme?";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="floating-whatsapp-container">
            {isExpanded && (
                <div className="chat-preview">
                    <div className="chat-header">
                        <div className="chat-avatar">
                            <FaWhatsapp />
                        </div>
                        <div className="chat-info">
                            <h4>Connect Travel</h4>
                            <p>En línea • Responde en minutos</p>
                        </div>
                        <button 
                            className="close-chat"
                            onClick={toggleExpanded}
                        >
                            <FaTimes />
                        </button>
                    </div>
                    <div className="chat-message">
                        <p>¡Hola! 👋 ¿En qué podemos ayudarte hoy?</p>
                        <span className="message-time">Ahora</span>
                    </div>
                    <button 
                        className="start-chat-btn"
                        onClick={handleWhatsAppClick}
                    >
                        <FaWhatsapp />
                        Iniciar Chat
                    </button>
                </div>
            )}

            <div 
                className={`floating-button ${isExpanded ? 'expanded' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={isExpanded ? handleWhatsAppClick : toggleExpanded}
            >
                {isExpanded ? (
                    <FaWhatsapp className="whatsapp-icon" />
                ) : (
                    <>
                        <FaWhatsapp className="whatsapp-icon" />
                        {isHovered && (
                            <div className="tooltip">
                                <FaComments />
                                <span>¿Necesitas ayuda?</span>
                            </div>
                        )}
                    </>
                )}
            </div>

            <div className="pulse-ring"></div>
        </div>
    );
};

export { FloatingWhatsApp }; 