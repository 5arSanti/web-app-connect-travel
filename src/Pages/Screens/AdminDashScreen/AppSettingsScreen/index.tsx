import React, { useEffect } from "react";
import { useState } from "react";
import { AppSettingFormValues, AppSettings } from "../../../../services/app-settings/interfaces/app-settings";
import { SubTitle } from "../../../components/SubTitle";
import { WrapperContainer2 } from "../../../components/WrapperContainers";
import { appSettingsService } from "../../../../services/app-settings/app-settings.service";
import { TextCard } from "../../../components/TextComponents";
import { toast } from "react-toastify";
import { AppSettingCard } from "../../../components/AppSettingCard";

const AppSettingsScreen = () => {

    const [appSettings, setAppSettings] = useState<AppSettings[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchAppSettings();
    }, []);

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, formData: AppSettingFormValues) => {
        e.preventDefault();

        try {
            setLoading(true);
            const { success, message } = await appSettingsService.updateAppSetting(formData);
            if (success) {
                toast.success(message);
                await fetchAppSettings();
            }
            else {
                throw new Error("Error al actualizar la configuración de la aplicación");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

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
            {!loading && appSettings?.map((appSetting, index) => (
                <AppSettingCard key={index} appSetting={appSetting} handleSubmit={handleSubmit} />
            ))}
        </WrapperContainer2>
    );
};

export { AppSettingsScreen };