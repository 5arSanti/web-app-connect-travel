import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { WrapperContainer2 } from "../../../components/WrapperContainers";
import { SubTitle } from "../../../components/SubTitle";
import { ButtonCard } from "../../../components/ButtonCard";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ExpandableCard } from "../../../components/ExpandableCard";
import { CreateServiceForm } from "./CreateServiceForm";
import { connectServicesService } from "../../../../services/connect-services/connect-services.service";
import { ConnectService, ConnectServiceFormValues } from "../../../../services/connect-services/interfaces/connect-services";
import { ConnectServiceCard } from "../../../components/ConnectServiceCard";

const ConnectServicesScreen = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [connectServices, setConnectServices] = useState<ConnectService[]>([]);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        fetchConnectServices();
    }, []);

    const fetchConnectServices = async () => {
        try {
            setLoading(true);
            const connectServices = await connectServicesService.getConnectServices();
            setConnectServices(connectServices);
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Error al cargar los servicios');
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = async (e: React.FormEvent<HTMLFormElement>, values: ConnectServiceFormValues) => {
        e.preventDefault();
        try {
            setLoading(true);
            setOpen(false);
            console.log(values);
            const response = await connectServicesService.createConnectService(values);

            if (response.success) {
                toast.success(response.message);
                await fetchConnectServices();
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Error al crear el servicio');
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>, values: Partial<ConnectServiceFormValues>) => {
        e.preventDefault();
        try {
            setLoading(true);
            setOpen(false);

            if (!values.id) { throw new Error('ID de servicio no encontrado'); }

            const response = await connectServicesService.updateConnectService(values.id, values);

            if (response.success) {
                toast.success(response.message);
                await fetchConnectServices();
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Error al actualizar el servicio');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            setLoading(true);
            setOpen(false);
            const response = await connectServicesService.deleteConnectService(id);

            if (response.success) {
                toast.success(response.message);
                await fetchConnectServices();
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Error al eliminar el servicio');
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
                Gestión de Servicios
            </SubTitle>

            <ButtonCard
                title="Agregar servicio"
                onClick={() => { setOpen(!open) }}
                type="button"
                padding={10}
                borderWidth={0}
                borderRadius={10}
                backgroundColor="var(--pallete-4)"
            >
                {open ? <FaMinus /> : <FaPlus />} {open ? "Cerrar" : "Crear nuevo servicio"}
            </ButtonCard>

            {!loading && <ExpandableCard open={open}>
                <CreateServiceForm
                    handleSubmit={handleCreate}
                    setOpen={setOpen}
                    loading={loading}
                />
            </ExpandableCard>}

            <WrapperContainer2
                flexDirection="column"
                justifyContent="start"
                alignItems="start"
                gap={10}
                width="100%"
                padding={0}
            >
                {!loading && connectServices?.map((connectService, index) => (
                    <ConnectServiceCard
                        key={index}
                        connectService={connectService}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                        loading={loading}
                    />
                ))}
            </WrapperContainer2>
        </WrapperContainer2>
    )
}

export default ConnectServicesScreen;