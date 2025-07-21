import React, { useState } from "react";
import { AppSettings } from "../../../services/app-settings/interfaces/app-settings";
import { TextCard } from "../TextComponents";

import "./styles.css";

interface SettingCardProps {
    setting: AppSettings;
}

const SettingCard = ({ setting }: SettingCardProps) => {
    const { key, value } = setting;
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`setting-card shadow-style${hovered ? " setting-card-hover" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <TextCard textAlign="center" fontSize={12} white={hovered ? false : true} className="italic">
                {hovered ? `El valor diario del ${key} es de ${value}` : `${key} ${value}`}
            </TextCard>
        </div>
    );
};

export default SettingCard;