import React, { useState } from "react";
import { AppSettings } from "../../../services/app-settings/interfaces/app-settings";
import { TextCard } from "../TextComponents";

import "./styles.css";
import { formatDate } from "../../utils/format-date.utils";

interface SettingCardProps {
    setting: AppSettings;
}

interface TRM {
    unidad: string;
    valor: number;
    vigenciadesde: string;
    vigenciahasta: string;
}

const SettingCard = ({ setting }: SettingCardProps) => {
    const { key, value, updated_at } = setting;
    const [trm, setTrm] = useState<TRM | null>(null);
    const [hovered, setHovered] = useState(false);

    async function obtenerTRM(): Promise<void> {
        try {
            const response = await fetch('https://www.datos.gov.co/resource/mcec-87by.json?$order=vigenciadesde DESC&$limit=1');
            const data: TRM[] = await response.json();
            const trm = data[0];
            setTrm(trm);
        } catch (error) {
            console.error('Error al obtener la TRM:', error);
        }
    }

    React.useEffect(() => {
        obtenerTRM();
    }, []);

    return (
        <div
            className={`setting-card shadow-style${hovered ? " setting-card-hover" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <TextCard textAlign="center" fontSize={12} white={hovered ? false : true} className="italic">
                {trm && hovered
                    ? `${setting.key} vigente: 1 USD = ${trm?.valor} ${trm?.unidad}`
                    : `${setting.key}: 1 USD = ${trm?.valor} ${trm?.unidad}`
                }
            </TextCard>
            {trm && hovered &&
                <TextCard textAlign="center" fontSize={12} white={hovered ? false : true} className="italic">
                    Vigencia: {formatDate(trm?.vigenciadesde || "")}
                </TextCard>
            }
        </div>
    );
};

export default SettingCard;