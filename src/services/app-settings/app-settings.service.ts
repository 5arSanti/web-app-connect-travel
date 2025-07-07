import { APP_SETTINGS_TABLE } from "../../constants/db-tables.constant";
import { supabase } from "../supabase";
import { AppSettings } from "./interfaces/app-settings";


export const appSettingsService = {
    async getAppSettings(): Promise<AppSettings[]> {
        const { data, error } = await supabase.from(APP_SETTINGS_TABLE).select('*');
        if (error) throw error;
        return data;
    }
}