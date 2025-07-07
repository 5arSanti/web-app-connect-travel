import React, { useState } from "react";
import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { SpanCard, TextCard } from "../TextComponents";
import { FaEdit } from "react-icons/fa";
import { ButtonCard } from "../ButtonCard";
import { IoCloseCircleOutline } from "react-icons/io5";
import { ImageRecord } from "../../../services/image-record/interfaces/image-record";

interface ImageRecordCardProps {
    imageRecord: ImageRecord;
}

const ImageRecordCard = ({ imageRecord }: ImageRecordCardProps) => {
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
                            <TextCard width="auto" fontSize={14}><SpanCard fontSize={14}>Nombre original:</SpanCard> {imageRecord.name}</TextCard>
                            <TextCard width="auto" fontSize={14}><SpanCard fontSize={14}>Tipo de imagen:</SpanCard> {imageRecord.image_type}</TextCard>
                        </WrapperContainer2>
                        <TextCard fontSize={12}><SpanCard fontSize={12}>Descripción:</SpanCard> {imageRecord.description}</TextCard>
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
        </WrapperContainer2>
    )
}

export { ImageRecordCard };