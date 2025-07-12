import React from "react";
import { WrapperContainer2 } from "../../../../components/WrapperContainers";
import { InputCard, OptionInputCard, TextAreaCard } from "../../../../components/InputsCards";
import { handleInputChange, handleSelectChange, handleTextAreaChange } from "../../../../utils/handleInputChange";
import { GridContainer } from "../../../../components/GridContainer";
import { FaPlus, FaTimes } from "react-icons/fa";
import { ButtonCard } from "../../../../components/ButtonCard";
import { FormStatus } from "../../../../../config/enum/form-status.enum";
import { ConnectServiceFormValues } from "../../../../../services/connect-services/interfaces/connect-services";
import { DropCard } from "../../../../components/DropCard";
import { SpanCard, TextCard } from "../../../../components/TextComponents";
import { icons } from "../../../../utils/Icons";
import "./styles.css";
import { FadeWrapper } from "../../../../components/FadeWrapper";

interface ConnectServiceFormProps {
    values: ConnectServiceFormValues;
    setValues: React.Dispatch<React.SetStateAction<ConnectServiceFormValues>>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
    status: FormStatus;
}

const ServiceForm = ({
    values,
    setValues,
    setOpen,
    loading,
    status
}: ConnectServiceFormProps) => {
    return (
        <WrapperContainer2
            flexDirection="column"
            gap={10}
            width="100%"
            padding={20}
        >
            <GridContainer
                className="grid-125-075"
                gap={15}
            >
                <WrapperContainer2
                    flexDirection="column"
                    gap={15}
                    padding={0}
                >
                    <DropCard
                        title="Selecciona el icono del servicio"
                        array={icons}
                        onClick={(value) => handleInputChange({
                            target: { name: "icon_name", value: value }
                        } as React.ChangeEvent<HTMLInputElement>, setValues)}
                        value={values.icon_name}
                        searchBox={true}
                        seeAllOption={false}
                    />

                    <InputCard
                        id="name"
                        label="Nombre del servicio"
                        placeholder="Ingresa el título del servicio"
                        type="text"
                        onChange={(e) => handleInputChange(e, setValues)}
                        defaultValue={values.name}
                        required={true}
                    />

                    <TextAreaCard
                        id="description"
                        label="Descripción del servicio"
                        placeholder="Escribe la descripción del servicio..."
                        onChange={(e) => handleTextAreaChange(e, setValues)}
                        defaultValue={values.description}
                        required={true}
                        minHeight={150}
                    />

                </WrapperContainer2>

                <WrapperContainer2
                    flexDirection="column"
                    gap={15}
                    padding={0}
                >

                    {values.icon_name &&
                        <FadeWrapper delay={100} width="100%" height="100%">
                            <WrapperContainer2
                                flexDirection="column"
                                justifyContent="space-around"
                                alignItems="center"
                                gap={20}
                                className="icon-container"
                            >
                                {icons.find(icon => icon.name === values.icon_name)?.icon}
                                <TextCard fontSize={16} className="bold" textAlign="center">
                                    Usted ha seleccionado el icono de <SpanCard className="bold">{values.icon_name}</SpanCard>
                                </TextCard>
                            </WrapperContainer2>
                        </FadeWrapper>
                    }
                </WrapperContainer2>
            </GridContainer>

            <GridContainer
                className="grid-1-1"
                gap={15}
            >
                <ButtonCard
                    type="button"
                    onClick={() => setOpen(false)}
                    padding={12}
                    borderRadius={8}
                    backgroundColor="var(--pallete-4)"
                >
                    <FaTimes /> Cancelar
                </ButtonCard>

                <ButtonCard
                    type="submit"
                    disabled={loading || !values.name || !values.description || !values.icon_name}
                    padding={12}
                    borderRadius={8}
                    backgroundColor="var(--pallete-4)"
                >
                    <FaPlus /> {loading ? 'Creando...' : `${status === FormStatus.CREATING ? 'Crear' : 'Actualizar'} Servicio`}
                </ButtonCard>

            </GridContainer>
        </WrapperContainer2>
    )
}

export { ServiceForm };