import React, { useState } from "react";
import { InputCard } from "../../components/InputsCards";
import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";
import InputWrapper from "./InputWrapper";

import "./styles.css";
import { StyledSection } from "../../components/StyledSection";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { SectionTitle } from "../../components/SectionWrapper/SectionTitle";
import { TextCard } from "../../components/TextComponents";
import { FadeWrapper } from "../../components/FadeWrapper";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handleInputChange } from "../../utils/handleInputChange";
import { useAuth } from "../../../Context/AuthContext";
import { ButtonCard } from "../../components/ButtonCard";

const LoginScreen = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [values, setValues] = React.useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
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

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <StyledSection height="100vh" className="login-screen">
            <div className="login-background">
                <div className="login-background-overlay"></div>
            </div>

            <FadeWrapper>
                <WrapperContainer2 className="login-main-container" padding={0}>
                    <div className="login-content">
                        {/* Imagen representativa */}
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

                        {/* Formulario de login */}
                        <div className="login-form-section">
                            <div className="login-form-container">
                                <div className="login-header">
                                    <h2 className="login-title">Bienvenido de vuelta</h2>
                                    <p className="login-subtitle">
                                        Inicia sesión para continuar tu aventura
                                    </p>
                                </div>

                                <form className="login-form" onSubmit={handleSubmit}>
                                    <InputWrapper
                                        icon={MdEmail}
                                        type="email"
                                        id="email"
                                        label="Correo electrónico"
                                        placeholder="Ingresa tu correo electrónico"
                                        onChange={handleInputChange}
                                        value={values.email}
                                    />

                                    <InputWrapper
                                        icon={MdLock}
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        label="Contraseña"
                                        placeholder="Ingresa tu contraseña"
                                        onChange={handleInputChange}
                                        value={values.password}
                                        showPasswordToggle={true}
                                        onPasswordToggle={togglePasswordVisibility}
                                        showPassword={showPassword}
                                    />

                                    <div className="form-options">
                                        <label className="remember-me">
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                            Recordarme
                                        </label>
                                        <a href="#" className="forgot-password">
                                            ¿Olvidaste tu contraseña?
                                        </a>
                                    </div>

                                    <ButtonCard
                                        type="submit"
                                        className="login-button"
                                        disabled={loading}
                                    >
                                        {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                                    </ButtonCard>
                                </form>
                            </div>
                        </div>
                    </div>
                </WrapperContainer2>
            </FadeWrapper>
        </StyledSection>
    );
};

export { LoginScreen };