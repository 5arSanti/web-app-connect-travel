import { CLIENT_OPINIONS_TABLE } from "../../config/constants/db-tables.constant";
import { supabase } from "../supabase";
import { ClientOpinion, ClientOpinionFormValues } from "./interfaces/client-opinion.interface";


export const clientOpinionService = {
    async getClientOpinions(): Promise<ClientOpinion[]> {
        const { data, error } = await supabase.from(CLIENT_OPINIONS_TABLE)
            .select('*')
            .is('deleted_at', null)
            .order('created_at', { ascending: false });

        if (error) throw error;

        return data;
    },

    async createClientOpinion(clientOpinion: ClientOpinionFormValues): Promise<{ success: boolean, message: string }> {
        const { client_name, service_id, message, client_email } = clientOpinion;

        const { error } = await supabase.from(CLIENT_OPINIONS_TABLE).insert({
            client_name,
            service_id,
            message,
            client_email,
        });

        if (error) throw error;

        return {
            success: true,
            message: 'Su opinión ha sido guardada exitosamente. Mil gracias por compartirla con nosotros.',
        };
    },

    async deleteClientOpinion(id: string): Promise<{ success: boolean, message: string }> {
        if (!id) {
            throw new Error('No se proporcionó un ID válido');
        }

        const { error } = await supabase.from(CLIENT_OPINIONS_TABLE)
            .update({
                deleted_at: new Date().toISOString()
            })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;

        return {
            success: true,
            message: 'Opinion eliminada exitosamente',
        };
    }
}