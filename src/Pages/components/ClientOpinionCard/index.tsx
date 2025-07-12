import React, { useState } from "react";
import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { SpanCard, TextCard } from "../TextComponents";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ButtonCard } from "../ButtonCard";
import { ExpandableCard } from "../ExpandableCard";
import { IoCloseCircleOutline } from "react-icons/io5";
import { ImageCard } from "../ImageCard";
import { EditNewForm } from "../../Screens/AdminDashScreen/NewsScreen/EditNewForm";
import { FormStatus } from "../../../config/enum/form-status.enum";
import { ClientOpinion } from "../../../services/client-opinions/interfaces/client-opinion.interface";
import { ConnectService } from "../../../services/connect-services/interfaces/connect-services";

interface ClientOpinionCardProps {
    clientOpinion: ClientOpinion;
    connectServices: ConnectService[];
    handleDelete: (id: string) => void;
    loading: boolean;
}

const ClientOpinionCard = ({ clientOpinion, connectServices, handleDelete, loading }: ClientOpinionCardProps) => {
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

    const getConnectServiceName = (connectServiceId: string) => {
        const connectService = connectServices.find(service => service.id === connectServiceId);
        return connectService ? connectService.name : 'Sin servicio';
    };

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
                            height="auto"
                        >

                            <TextCard width="auto" fontSize={14}><SpanCard fontSize={14}>Nombre del cliente:</SpanCard> {clientOpinion.client_name}</TextCard>

                            <TextCard width="auto" fontSize={14}><SpanCard fontSize={14}>Servicio de la opinión:</SpanCard> {getConnectServiceName(clientOpinion.service_id)}</TextCard>

                        </WrapperContainer2>
                        <TextCard width="auto" fontSize={14}><SpanCard fontSize={14}>Fecha:</SpanCard> {formatDate(clientOpinion.created_at)}</TextCard>
                        <TextCard fontSize={12}>
                            <SpanCard fontSize={12}>Contenido:</SpanCard> {clientOpinion.message}
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
                        title="Eliminar"
                        onClick={() => handleDelete(clientOpinion.id || "")}
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
        </WrapperContainer2>
    )
}

export { ClientOpinionCard };