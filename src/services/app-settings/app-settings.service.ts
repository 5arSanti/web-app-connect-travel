import { APP_SETTINGS_TABLE } from "../../config/constants/db-tables.constant";
import { supabase } from "../supabase";
import { AppSettingFormValues, AppSettings } from "./interfaces/app-settings";


export const appSettingsService = {

    async findOne(id: string): Promise<AppSettings> {
        const { data, error } = await supabase.from(APP_SETTINGS_TABLE)
            .select('*')
            .eq('id', id)
            .single();
        if (error) throw error;
        return data;
    },

    async getAppSettings(): Promise<AppSettings[]> {
        const { data, error } = await supabase.from(APP_SETTINGS_TABLE).select('*');
        if (error) throw error;
        return data;
    },

    async updateAppSetting(appSetting: AppSettingFormValues): Promise<{ success: boolean, message: string }> {
        const { error } = await supabase.from(APP_SETTINGS_TABLE)
            .update(appSetting)
            .eq('id', appSetting.id)
            .select()
            .single();
        if (error) throw error;
        return { success: true, message: "Configuración actualizada correctamente" };
    }
}