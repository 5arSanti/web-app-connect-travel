import React, { useEffect } from "react";
import { useState } from "react";
import { AppSettings } from "../../../../services/app-settings/interfaces/app-settings";
import { SubTitle } from "../../../components/SubTitle";
import { WrapperContainer2 } from "../../../components/WrapperContainers";
import { appSettingsService } from "../../../../services/app-settings/app-settings.service";
import { TextCard } from "../../../components/TextComponents";
import { toast } from "react-toastify";

const AppSettingsScreen = () => {

    const [appSettings, setAppSettings] = useState<AppSettings[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchAppSettings = async () => {
            try {
                setLoading(true);
                const appSettings = await appSettingsService.getAppSettings();
                setAppSettings(appSettings);

            } catch (error) {
                toast.error(error instanceof Error ? error.message : 'Error al cargar las configuraciones');
            } finally {
                setLoading(false);
            }
        };
        fetchAppSettings();
    }, []);

    return (
        <WrapperContainer2
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            gap={24}
            width="100%"
        >
            <SubTitle>
                Configuraciones
            </SubTitle>
            <TextCard>{loading ? 'Cargando...' : 'Configuraciones cargadas'}</TextCard>
        </WrapperContainer2>
    );
};

export { AppSettingsScreen };