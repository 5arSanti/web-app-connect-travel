import { CONNECT_SERVICES_TABLE } from "../../config/constants/db-tables.constant";
import { supabase } from "../supabase";
import { ConnectService, ConnectServiceFormValues } from "./interfaces/connect-services";


export const connectServicesService = {
    async getConnectServices(): Promise<ConnectService[]> {
        const { data, error } = await supabase.from(CONNECT_SERVICES_TABLE)
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        return data;
    },

    async createConnectService(connectService: ConnectServiceFormValues): Promise<{ success: boolean, message: string }> {
        const { name, description, icon_name } = connectService;

        const { error } = await supabase.from(CONNECT_SERVICES_TABLE).insert({
            name,
            description,
            icon_name,
        });

        if (error) throw error;

        return {
            success: true,
            message: 'Servicio creado exitosamente',
        };
    },

    async updateConnectService(id: string, connectService: Partial<ConnectServiceFormValues>): Promise<{ success: boolean, message: string }> {
        const { name, description, icon_name } = connectService;

        const { error } = await supabase.from(CONNECT_SERVICES_TABLE)
            .update({
                name,
                description,
                icon_name,
            })
            .eq('id', id);

        if (error) throw error;

        return {
            success: true,
            message: 'Servicio actualizado exitosamente',
        };
    },

    async deleteConnectService(id: string): Promise<{ success: boolean, message: string }> {
        const { error } = await supabase.from(CONNECT_SERVICES_TABLE)
            .delete()
            .eq('id', id);

        if (error) throw error;

        return {
            success: true,
            message: 'Servicio eliminado exitosamente',
        };
    }
}