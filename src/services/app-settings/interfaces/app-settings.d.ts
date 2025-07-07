import { AppSettingsEnum } from "../enum/app-settings.enum";
export interface AppSettings {
    id: string;
    key: AppSettingsEnum;
    value: string;
    icon: string | null;
    description: string | null;
    created_at: string;
    updated_at: string | null;
}

export interface AppSettingFormValues {
    key: AppSettingsEnum;
    value: string;
    description: string | null;
}