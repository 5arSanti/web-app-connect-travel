import React, { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";

import "./styles.css";
import { StyledSection } from "../../components/StyledSection";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handleInputChange } from "../../utils/handleInputChange";
import { useAuth } from "../../../Context/AuthContext";
import { ButtonCard } from "../../components/ButtonCard";
import { InputCard } from "../../components/InputsCards";
import { TextCard } from "../../components/TextComponents";
import { FadeWrapper } from "../../components/FadeWrapper";
import { HeaderContact } from "../../components/HeaderContact";
import { Header } from "../../components/Header";
import { FloatingWhatsApp } from "../../components/FloatingWhatsApp";
import { Footer } from "../../components/Footer";

const LoginScreen = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [values, setValues] = React.useState<{ email: string; password: string }>({
        email: "",
        password: "",
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const result = await login(values.email, values.password);

            if (result.success) {
                toast.success('¡Inicio de sesión exitoso!');
                navigate("/admin/dashboard");
            } else {
                toast.error(result.error);
            }
        } catch (error) {
            toast.error('Error al iniciar sesión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header isAuthPage={true} />
            <HeaderContact />
            <StyledSection
                height="100vh"
                id="login-screen"
                image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                background="login-background"
            >

                <FadeWrapper>
                    <WrapperContainer2 className="login-main-container" padding={0} justifyContent="center" alignItems="center">
                        <div className="login-content">
                            <div className="login-image-section">
                                <div className="login-image-overlay">
                                    <div className="login-brand">
                                        <FaPlaneDeparture className="brand-icon" />
                                        <h1 className="brand-title">Connect Travel's</h1>
                                        <p className="brand-subtitle">
                                            Descubre el mundo con nosotros
                                        </p>
                                    </div>
                                    <div className="login-features">
                                        <div className="feature-item">
                                            <div className="feature-icon">✈️</div>
                                            <div className="feature-text">
                                                <h3>Viajes Nacionales</h3>
                                                <p>Explora los destinos más hermosos de tu país</p>
                                            </div>
                                        </div>
                                        <div className="feature-item">
                                            <div className="feature-icon">🌍</div>
                                            <div className="feature-text">
                                                <h3>Viajes Internacionales</h3>
                                                <p>Conectamos con el mundo entero</p>
                                            </div>
                                        </div>
                                        <div className="feature-item">
                                            <div className="feature-icon">🏨</div>
                                            <div className="feature-text">
                                                <h3>Paquetes Todo Incluido</h3>
                                                <p>Disfruta de vacaciones sin preocupaciones</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <WrapperContainer2 flexDirection="column" gap={10} height="auto" justifyContent="center" alignItems="center">
                                <WrapperContainer2 padding={0} flexDirection="column" gap={5} height="auto">
                                    <TextCard textAlign="center" fontSize={20} className="login-title">
                                        Bienvenido de vuelta
                                    </TextCard>
                                    <TextCard textAlign="center" fontSize={14} className="login-subtitle">
                                        Inicia sesión para continuar tu aventura
                                    </TextCard>
                                </WrapperContainer2>

                                <TextCard textAlign="center" fontSize={10} className="italic">
                                    Los campos con el simbolo (*) son obligatorios
                                </TextCard>

                                <form className="login-form" onSubmit={handleSubmit}>
                                    <InputCard
                                        icon={<MdEmail />}
                                        type="email"
                                        id="email"
                                        label="Correo electrónico"
                                        placeholder="Ingresa tu correo electrónico"
                                        onChange={(e) => handleInputChange(e, setValues)}
                                        defaultValue={values.email}
                                    />
                                    <InputCard
                                        icon={<MdLock />}
                                        type="password"
                                        id="password"
                                        label="Contraseña"
                                        placeholder="Ingresa tu contraseña"
                                        onChange={(e) => handleInputChange(e, setValues)}
                                        defaultValue={values.password}
                                    />

                                    <ButtonCard
                                        type="submit"
                                        className="login-button"
                                        disabled={loading || !values.email || !values.password}
                                    >
                                        {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                                    </ButtonCard>
                                </form>
                            </WrapperContainer2>
                        </div>
                    </WrapperContainer2>
                </FadeWrapper>
            </StyledSection>

            <FloatingWhatsApp />
            <Footer />
        </>
    );
};

export { LoginScreen };