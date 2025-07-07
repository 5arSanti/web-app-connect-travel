import React, { useState } from "react";
import { WrapperContainer2 } from "../../WrapperContainers";

import { AppSettingFormValues, AppSettings } from "../../../../services/app-settings/interfaces/app-settings";
import { InputCard, TextAreaCard } from "../../InputsCards";
import { handleInputChange, handleTextAreaChange } from "../../../utils/handleInputChange";
import { ButtonCard } from "../../ButtonCard";
import { GridContainer } from "../../GridContainer";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaCheck, FaSpinner } from "react-icons/fa";

interface AppSettingFormProps {
    appSetting: AppSettings,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>, formData: AppSettingFormValues) => void,
    setIsEditing: (isEditing: boolean) => void,
    isLoading: boolean
}

export const AppSettingForm = ({
    appSetting,
    handleSubmit,
    setIsEditing,
    isLoading
}: AppSettingFormProps) => {
    const [formData, setFormData] = useState<AppSettingFormValues>({
        id: appSetting.id,
        key: appSetting.key,
        value: appSetting.value,
        description: appSetting.description
    });

    return (
        <WrapperContainer2
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            gap={10}
            padding={0}
            height="auto"
            width="100%"
        >
            <form style={{ width: "100%", display: "flex", flexDirection: "column", gap: 20 }} onSubmit={(e) => handleSubmit(e, formData)}>
                <WrapperContainer2
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="start"
                    gap={10}
                    padding={0}
                    height="auto"
                    width="100%"
                >
                    <InputCard
                        type="text"
                        id="key"
                        label="Nombre"
                        placeholder="Nombre"
                        onChange={(e) => handleInputChange(e, setFormData)}
                        defaultValue={formData.key}
                    />
                    <InputCard
                        type="text"
                        id="value"
                        label="Valor"
                        placeholder="Valor"
                        onChange={(e) => handleInputChange(e, setFormData)}
                        defaultValue={formData.value}
                    />
                </WrapperContainer2>

                <TextAreaCard
                    id="description"
                    label="Descripción"
                    placeholder="Descripción"
                    onChange={(e) => handleTextAreaChange(e, setFormData)}
                    defaultValue={formData.description || ""}
                    required={false}
                />

                <GridContainer>
                    <ButtonCard
                        title="Cancelar"
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="shadow-style"
                        borderRadius={10}
                    >
                        <IoCloseCircleOutline /> Cancelar
                    </ButtonCard>
                    <ButtonCard
                        title="Guardar"
                        type="submit"
                        className="shadow-style"
                        borderRadius={10}
                        disabled={isLoading}
                    >
                        {isLoading ? <FaSpinner /> : <FaCheck />} Guardar
                    </ButtonCard>
                </GridContainer>
            </form>
        </WrapperContainer2>
    )
}