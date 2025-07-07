import { APP_SETTINGS_TABLE } from "../../constants/db-tables.constant";
import { supabase } from "../supabase";
import { AppSettingFormValues, AppSettings } from "./interfaces/app-settings";


export const appSettingsService = {
    async getAppSettings(): Promise<AppSettings[]> {
        const { data, error } = await supabase.from(APP_SETTINGS_TABLE).select('*');
        if (error) throw error;
        return data;
    },

    async updateAppSetting(appSetting: AppSettingFormValues): Promise<{ success: boolean, message: string }> {
        const { data, error } = await supabase.from(APP_SETTINGS_TABLE)
            .update(appSetting)
            .eq('id', appSetting.id)
            .select()
            .single();
        if (error) throw error;
        return { success: true, message: "Configuración actualizada correctamente" };
    }
}