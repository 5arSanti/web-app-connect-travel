import React, { useState } from "react";
import { MdPerson, MdEmail } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";

import "./styles.css";
import { StyledSection } from "../../StyledSection";
import { WrapperContainer2 } from "../../WrapperContainers";
import { handleInputChange, handleTextAreaChange, handleSelectChange } from "../../../utils/handleInputChange";
import { ButtonCard } from "../../ButtonCard";
import { InputCard, OptionInputCard, TextAreaCard } from "../../InputsCards";
import { TextCard } from "../../TextComponents";
import { ClientOpinionFormValues } from "../../../../services/client-opinions/interfaces/client-opinion.interface";
import { FadeWrapper } from "../../FadeWrapper";
import { clientOpinionService } from "../../../../services/client-opinions/client-opinion.service";
import { toast } from "react-toastify";
import { ConnectService } from "../../../../services/connect-services/interfaces/connect-services";

interface SectionOpinionFormProps {
    connectServices: ConnectService[];
}

const SectionOpinionForm = ({ connectServices }: SectionOpinionFormProps) => {
    const [loading, setLoading] = useState(false);

    const [values, setValues] = useState<ClientOpinionFormValues>({
        client_name: "",
        client_email: "",
        service_id: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { success, message } = await clientOpinionService.createClientOpinion(values);

            if (success) {
                toast.success(message);
            } else {
                toast.error(message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const servicesOptions = connectServices.map(service => ({
        id: service.id,
        name: service.name,
    }));

    return (
        <StyledSection
            height="auto"
            id="opinion-form-section"
            image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            background="opinion-background"
        >
            <FadeWrapper>
                <WrapperContainer2 className="opinion-main-container" padding={"30px 75px" as unknown as number} justifyContent="center" alignItems="center">
                    <div className="opinion-content">
                        <div className="opinion-image-section">
                            <div className="opinion-image-overlay">
                                <div className="opinion-brand">
                                    <FaPlaneDeparture className="brand-icon" />
                                    <h1 className="brand-title">Tu Opinión Importa</h1>
                                    <p className="brand-subtitle">
                                        Ayúdanos a mejorar y comparte tu experiencia
                                    </p>
                                </div>
                                <div className="opinion-features">
                                    <div className="feature-item">
                                        <div className="feature-icon">⭐</div>
                                        <div className="feature-text">
                                            <h3>Experiencias Reales</h3>
                                            <p>Comparte tu experiencia de viaje con nosotros</p>
                                        </div>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">💬</div>
                                        <div className="feature-text">
                                            <h3>Feedback Valioso</h3>
                                            <p>Tu opinión nos ayuda a mejorar nuestros servicios</p>
                                        </div>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">🌍</div>
                                        <div className="feature-text">
                                            <h3>Comunidad de Viajeros</h3>
                                            <p>Únete a nuestra comunidad y conecta con otros viajeros</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <WrapperContainer2 padding={30} flexDirection="column" gap={10} height="auto" justifyContent="center" alignItems="center">
                            <WrapperContainer2 padding={0} flexDirection="column" gap={5} height="auto">
                                <TextCard textAlign="center" fontSize={24} className="opinion-title">
                                    Comparte tu Experiencia
                                </TextCard>
                                <TextCard textAlign="center" fontSize={14} className="opinion-subtitle">
                                    Cuéntanos sobre tu viaje y ayúdanos a mejorar
                                </TextCard>
                            </WrapperContainer2>

                            <TextCard textAlign="center" fontSize={10} className="italic">
                                Los campos con el símbolo (*) son obligatorios
                            </TextCard>

                            <form className="opinion-form" onSubmit={handleSubmit}>
                                <InputCard
                                    icon={<MdPerson />}
                                    type="text"
                                    id="client_name"
                                    label="Nombre completo"
                                    placeholder="Ingresa tu nombre completo"
                                    onChange={(e) => handleInputChange(e, setValues)}
                                    defaultValue={values.client_name}
                                />

                                <InputCard
                                    icon={<MdEmail />}
                                    type="email"
                                    id="client_email"
                                    label="Correo electrónico"
                                    placeholder="Ingresa tu correo electrónico"
                                    onChange={(e) => handleInputChange(e, setValues)}
                                    defaultValue={values.client_email}
                                />

                                <OptionInputCard
                                    id="service_id"
                                    label="Servicio utilizado"
                                    array={servicesOptions}
                                    onChange={(e) => handleSelectChange(e, setValues)}
                                    defaultValue={values.service_id}
                                    none={true}
                                    required={true}
                                />

                                <TextAreaCard
                                    id="message"
                                    label="Tu opinión"
                                    placeholder="Comparte tu experiencia, qué te gustó, qué podríamos mejorar..."
                                    onChange={(e) => handleTextAreaChange(e, setValues)}
                                    defaultValue={values.message}
                                />

                                <ButtonCard
                                    type="submit"
                                    className="opinion-button"
                                    disabled={
                                        loading
                                        || !values.client_name
                                        || !values.client_email
                                        || !values.service_id
                                        || !values.message
                                    }
                                >
                                    {loading ? 'Guardando su opinión...' : 'Enviar opinión'}
                                </ButtonCard>
                            </form>
                        </WrapperContainer2>
                    </div>
                </WrapperContainer2>
            </FadeWrapper >
        </StyledSection >
    );
};

export { SectionOpinionForm };