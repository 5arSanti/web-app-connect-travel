import React, { useState } from "react";
import { InputCard } from "../../components/InputsCards";

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

    const [values, setValues] = React.useState({
        email: null,
        password: null,
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const result = await login(values.email, values.password);

            if (result.success) {
                toast.success('¡Inicio de sesión exitoso!');
                navigate("/home");
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
        <StyledSection height="auto">
            <FadeWrapper>
                <WrapperContainer2 padding={30} flexDirection="column" justifyContent="center" alignItems="center">

                    <WrapperContainer2
                        className="login-container"
                        flexDirection="column"
                        padding={"50px 75px"} gap={30}
                        height="auto"
                    >
                        <TextCard textAlign="center" white={true} fontSize={18}>
                            Inicia sesión con tu cuenta
                        </TextCard>

                        <form className="login-form-container" onSubmit={handleSubmit}>
                            <InputCard
                                type="email"
                                id={"email"}
                                label={"Correo:"}
                                placeholder="Ingrese su correo"
                                onChange={handleInputChange}
                                defaultValue={values?.email}
                            />
                            <InputCard
                                type="password"
                                id={"password"}
                                label={"Contraseña:"}
                                placeholder="Ingrese su contraseña"
                                onChange={handleInputChange}
                                defaultValue={values?.password}
                            />
                            <ButtonCard type="submit">{loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}</ButtonCard>

                        </form>
                    </WrapperContainer2>
                </WrapperContainer2>
            </FadeWrapper>
        </StyledSection>
    );
}

export { LoginScreen }