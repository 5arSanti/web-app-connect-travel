import React, { useState } from "react";
import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { AppSettingFormValues, AppSettings } from "../../../services/app-settings/interfaces/app-settings";
import { SpanCard, TextCard } from "../TextComponents";
import { ICONS } from "../../../config/constants/icons.constant";
import { Icon } from "../../../config/interfaces/icons";
import { FaEdit } from "react-icons/fa";
import { ButtonCard } from "../ButtonCard";
import { ExpandableCard } from "../ExpandableCard";
import { AppSettingForm } from "./AppSettingForm";
import { IoCloseCircleOutline } from "react-icons/io5";

interface AppSettingCardProps {
    appSetting: AppSettings;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>, formData: AppSettingFormValues) => void;
}

const AppSettingCard = ({ appSetting, handleSubmit }: AppSettingCardProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    return (
        <WrapperContainer2
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={0}
            width="100%"
            padding={0}
            height="auto"
        >
            <WrapperContainer1
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                gap={30}
                width="100%"
                padding={"20px 35px"}
            >
                <WrapperContainer2
                    padding={0}
                    width="100%"
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="center"
                    gap={20}
                >
                    {ICONS.find((icon: Icon) => icon.name === appSetting.key)?.icon}

                    <WrapperContainer2
                        padding={0}
                        width="auto"
                        flexDirection="column"
                        justifyContent="start"
                        alignItems="start"
                        gap={20}
                    >
                        <WrapperContainer2
                            flexDirection="row"
                            justifyContent="start"
                            alignItems="start"
                            gap={50}
                            padding={0}
                        >
                            <TextCard width="auto" fontSize={14}><SpanCard fontSize={14}>Nombre:</SpanCard> {appSetting.key}</TextCard>
                            <TextCard width="auto" fontSize={14}><SpanCard fontSize={14}>Valor actual:</SpanCard> {appSetting.value}</TextCard>
                        </WrapperContainer2>
                        <TextCard fontSize={12}><SpanCard fontSize={12}>Descripción:</SpanCard> {appSetting.description}</TextCard>
                    </WrapperContainer2>
                </WrapperContainer2>

                <ButtonCard
                    title="Editar"
                    onClick={() => { setIsEditing(!isEditing) }}
                    type="button"
                    padding={10}
                    borderWidth={0}
                    borderRadius={10}
                    className="shadow-style"
                    disabled={isLoading}
                >
                    {isEditing ? <IoCloseCircleOutline /> : <FaEdit />}
                </ButtonCard>
            </WrapperContainer1>
            {isEditing && (
                <ExpandableCard open={isEditing}>
                    <AppSettingForm
                        appSetting={appSetting}
                        handleSubmit={handleSubmit}
                        setIsEditing={setIsEditing}
                        isLoading={isLoading}
                    />
                </ExpandableCard>
            )}
        </WrapperContainer2>
    )
}

export { AppSettingCard };