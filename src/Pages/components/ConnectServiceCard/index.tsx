import React, { useState } from "react";
import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { SpanCard, TextCard } from "../TextComponents";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ButtonCard } from "../ButtonCard";
import { ExpandableCard } from "../ExpandableCard";
import { IoCloseCircleOutline } from "react-icons/io5";
import { ImageCard } from "../ImageCard";
import { FormStatus } from "../../../config/enum/form-status.enum";
import { ConnectService, ConnectServiceFormValues } from "../../../services/connect-services/interfaces/connect-services";
import { EditServiceForm } from "../../Screens/AdminDashScreen/ConnectServicesScreen/EditServiceForm";
import { FadeWrapper } from "../FadeWrapper";
import { icons } from "../../utils/Icons";

interface ConnectServiceCardProps {
    connectService: ConnectService;
    handleUpdate: (e: React.FormEvent<HTMLFormElement>, formData: Partial<ConnectServiceFormValues>) => void;
    handleDelete: (id: string) => void;
    loading: boolean;
}

const ConnectServiceCard = ({ connectService, handleUpdate, handleDelete, loading }: ConnectServiceCardProps) => {
    const { id, name, description, icon_name, image_url, created_at } = connectService;
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const formatDate = (dateString: string | Date) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const icon = icons.find(icon => icon.name === icon_name)?.icon;

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
                    {image_url && <ImageCard imageUrl={connectService.image_url} alt={connectService.name} />}
                    <WrapperContainer2
                        padding={0}
                        width="auto"
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        className="icon-container"
                    >
                        {icon}
                    </WrapperContainer2>
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
                            height="auto"
                        >

                            <TextCard width="auto" fontSize={14}><SpanCard fontSize={14}>Nombre:</SpanCard> {name}</TextCard>

                            <TextCard width="auto" fontSize={14}><SpanCard fontSize={14}>Creado el:</SpanCard> {formatDate(created_at)}</TextCard>
                        </WrapperContainer2>
                        <TextCard fontSize={12}>
                            <SpanCard fontSize={12}>Descripción:</SpanCard> {description}
                        </TextCard>
                    </WrapperContainer2>
                </WrapperContainer2>

                <WrapperContainer2
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    width="auto"
                    gap={20}
                    padding={0}
                >
                    <ButtonCard
                        title="Editar"
                        onClick={() => { setIsEditing(!isEditing) }}
                        type="button"
                        padding={10}
                        borderWidth={0}
                        borderRadius={10}
                        className="shadow-style"
                        disabled={loading}
                        backgroundColor="var(--pallete-3)"
                        color="var(--white)"
                    >
                        {isEditing ? <IoCloseCircleOutline /> : <FaEdit />}
                    </ButtonCard>

                    <ButtonCard
                        title="Eliminar"
                        onClick={() => handleDelete(id)}
                        type="button"
                        padding={10}
                        borderWidth={0}
                        borderRadius={10}
                        className="shadow-style"
                        disabled={loading}
                        backgroundColor="var(--pallete-7)"
                        color="var(--white)"
                    >
                        <FaTrash />
                    </ButtonCard>
                </WrapperContainer2>
            </WrapperContainer1>

            {isEditing && (
                <ExpandableCard open={isEditing}>
                    <EditServiceForm
                        connectService={connectService}
                        handleSubmit={handleUpdate}
                        setIsEditing={setIsEditing}
                        loading={loading}
                        status={FormStatus.EDITING}
                    />
                </ExpandableCard>
            )}
        </WrapperContainer2>
    )
}

export { ConnectServiceCard };