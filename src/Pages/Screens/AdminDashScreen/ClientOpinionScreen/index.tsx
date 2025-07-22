import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { WrapperContainer2 } from "../../../components/WrapperContainers";
import { SubTitle } from "../../../components/SubTitle";
import { ClientOpinion } from "../../../../services/client-opinions/interfaces/client-opinion.interface";
import { clientOpinionService } from "../../../../services/client-opinions/client-opinion.service";
import { connectServicesService } from "../../../../services/connect-services/connect-services.service";
import { ConnectService } from "../../../../services/connect-services/interfaces/connect-services";
import { ClientOpinionCard } from "../../../components/ClientOpinionCard";

const ClientOpinionScreen = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [clientOpinions, setClientOpinions] = useState<ClientOpinion[]>([]);
    const [connectServices, setConnectServices] = useState<ConnectService[]>([]);

    useEffect(() => {
        fetchClientOpinions();
        fetchConnectServices();
    }, []);

    const fetchClientOpinions = async () => {
        const response = await clientOpinionService.getClientOpinions();
        setClientOpinions(response);
    }

    const fetchConnectServices = async () => {
        const response = await connectServicesService.getConnectServices();
        setConnectServices(response);
    }

    const handleDelete = async (id: string) => {
        try {
            setLoading(true);
            const response = await clientOpinionService.deleteClientOpinion(id);

            if (response.success) {
                toast.success(response.message);
                await fetchClientOpinions();
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Error al eliminar la noticia');
        } finally {
            setLoading(false);
        }
    };

    return (
        <WrapperContainer2
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            gap={24}
            width="100%"
            className="admin-container"
        >
            <SubTitle>
                Gestión de Opiniones de Clientes
            </SubTitle>

            <WrapperContainer2
                flexDirection="column"
                justifyContent="start"
                alignItems="start"
                gap={10}
                width="100%"
                padding={0}
            >
                {!loading && clientOpinions?.map((clientOpinion, index) => (
                    <ClientOpinionCard
                        key={index}
                        clientOpinion={clientOpinion}
                        connectServices={connectServices}
                        handleDelete={handleDelete}
                        loading={loading}
                    />
                ))}
            </WrapperContainer2>
        </WrapperContainer2>
    )
}

export default ClientOpinionScreen;