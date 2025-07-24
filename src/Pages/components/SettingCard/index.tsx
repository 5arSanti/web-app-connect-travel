import React, { useState } from "react";
import { AppSettings } from "../../../services/app-settings/interfaces/app-settings";
import { TextCard } from "../TextComponents";

import "./styles.css";
import { formatDate } from "../../utils/format-date.utils";

interface SettingCardProps {
    setting: AppSettings;
}

const SettingCard = ({ setting }: SettingCardProps) => {
    const { key, value, updated_at } = setting;
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`setting-card shadow-style${hovered ? " setting-card-hover" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <TextCard textAlign="center" fontSize={12} white={hovered ? false : true} className="italic">
                {hovered
                    ? `${key} vigente: 1 USD = ${value} COP`
                    : `${key}: 1 USD = ${value} COP`
                }
            </TextCard>
            {hovered &&
                <TextCard textAlign="center" fontSize={12} white={hovered ? false : true} className="italic">
                    Ultima actualización: {formatDate(updated_at || "")}
                </TextCard>
            }
        </div>
    );
};

export default SettingCard;