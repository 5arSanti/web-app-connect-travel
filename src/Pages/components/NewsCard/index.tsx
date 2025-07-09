import React, { useState } from "react";
import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { AppSettingFormValues, AppSettings } from "../../../services/app-settings/interfaces/app-settings";
import { SpanCard, TextCard } from "../TextComponents";
import { ICONS } from "../../../constants/icons.constant";
import { Icon } from "../../../interfaces/icons";
import { FaCheck, FaEdit } from "react-icons/fa";
import { ButtonCard } from "../ButtonCard";
import { ExpandableCard } from "../ExpandableCard";
import { IoCloseCircleOutline } from "react-icons/io5";
import { appSettingsService } from "../../../services/app-settings/app-settings.service";
import { toast } from "react-toastify";
import { News } from "../../../services/news/interfaces/news";
import { ImageCard } from "../ImageCard";

interface NewsCardProps {
    news: News;
    handleSubmit?: (e: React.FormEvent<HTMLFormElement>, formData: AppSettingFormValues) => void;
}

const NewsCard = ({ news, handleSubmit }: NewsCardProps) => {
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
                    <ImageCard imageUrl={news.image_url} alt={news.title} />
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
                            <SpanCard fontSize={14}>Titulo:</SpanCard>
                            <TextCard width="auto" fontSize={14}>{news.title}</TextCard>

                            <SpanCard fontSize={14}>Fecha de publicación:</SpanCard>
                            <TextCard width="auto" fontSize={14}>{news.created_at}</TextCard>
                        </WrapperContainer2>
                        <TextCard fontSize={12}><SpanCard fontSize={12}>Contenido:</SpanCard> {news.content}</TextCard>
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
                    s
                </ExpandableCard>
            )}
        </WrapperContainer2>
    )
}

export { NewsCard };