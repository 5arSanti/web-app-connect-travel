import React from "react";
import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { AppSettings } from "../../../services/app-settings/interfaces/app-settings";
import { SpanCard, TextCard } from "../TextComponents";
import { ICONS } from "../../../constants/icons.constant";
import { Icon } from "../../../interfaces/icons";

const AppSettingCard = ({ appSetting }: { appSetting: AppSettings }) => {
    return (
        <WrapperContainer1
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
            gap={30}
            width="100%"
            padding={"20px 35px"}
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

        </WrapperContainer1>
    )
}

export { AppSettingCard };