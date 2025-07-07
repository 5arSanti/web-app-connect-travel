import React, { useState } from "react";
import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { SpanCard, TextCard } from "../TextComponents";
import { FaCheck, FaTimes, FaTrash } from "react-icons/fa";
import { ButtonCard } from "../ButtonCard";
import { ImageRecord } from "../../../services/image-record/interfaces/image-record";
import { IMAGE_RECORD_TYPES } from "../../../services/image-record/constant/image-record.constant";
import "./styles.css";

interface ImageRecordCardProps {
    imageRecord: ImageRecord;
}

const ImageRecordCard = ({ imageRecord }: ImageRecordCardProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const imageType = IMAGE_RECORD_TYPES.find((type) => type.value === imageRecord.image_type)?.label;

    const imageUrl = `${import.meta.env.VITE_DB_PROJECT_URL}/storage/v1/object/public/${imageRecord.image_url}`;

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
                <img src={imageUrl} alt={imageRecord.name} style={{ width: "150px", height: "auto", objectFit: "contain", borderRadius: "10px" }} />

                <WrapperContainer2
                    padding={0}
                    width="100%"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="start"
                    gap={20}
                >
                    <WrapperContainer1
                        padding={"5px 15px"}
                        width="auto"
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap={10}
                        backgroundColor={imageRecord.is_active ? "var(--pallete-3)" : "var(--pallete-7)"}
                        borderRadius={5}
                    >
                        {imageRecord.is_active
                            ? <FaCheck className="icon-active" />
                            : <FaTimes className="icon-inactive" />}
                        <TextCard className="bold" white={true} width="auto" fontSize={14}>{imageRecord.is_active ? "Activa" : "Inactiva"}</TextCard>
                    </WrapperContainer1>
                    <TextCard width="auto" className="text-nowrap" fontSize={14}><SpanCard className="text-nowrap" fontSize={14}>Tipo de imagen:</SpanCard> {imageType}</TextCard>
                    <TextCard width="auto" fontSize={14}><SpanCard fontSize={14}>Nombre original:</SpanCard> {imageRecord.name}</TextCard>
                    <TextCard fontSize={12}><SpanCard fontSize={12}>Descripción:</SpanCard> {imageRecord.description}</TextCard>
                </WrapperContainer2>

                <WrapperContainer2
                    padding={0}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap={10}
                    width="auto"
                    height="auto"
                >

                    <ButtonCard
                        title="Eliminar"
                        onClick={() => { }}
                        type="button"
                        padding={10}
                        borderWidth={0}
                        borderRadius={10}
                        className="shadow-style"
                        disabled={isLoading}
                    >
                        <FaTrash />
                    </ButtonCard>
                </WrapperContainer2>
            </WrapperContainer1>
        </WrapperContainer2>
    )
}

export { ImageRecordCard };