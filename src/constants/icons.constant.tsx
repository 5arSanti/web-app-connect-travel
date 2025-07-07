import React from "react";
import { Icon } from "../interfaces/icons";
import { AppSettingsEnum } from "../services/app-settings/enum/app-settings.enum";
import { FaPercent } from "react-icons/fa";

export const ICONS: Icon[] = [
    {
        name: AppSettingsEnum.IVA,
        icon: <FaPercent />
    }
]