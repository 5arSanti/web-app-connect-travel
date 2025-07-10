import React from "react";
import { AppSettingsEnum } from "../../services/app-settings/enum/app-settings.enum";
import { FaPercent } from "react-icons/fa";
import { Icon } from "../interfaces/icons";

export const ICONS: Icon[] = [
    {
        name: AppSettingsEnum.IVA,
        icon: <FaPercent />
    }
]