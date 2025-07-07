import React from "react";
import "./styles.css";

interface SwitchCardProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    id?: string;
    label?: string;
    disabled?: boolean;
}

const SwitchCard: React.FC<SwitchCardProps> = ({ checked, onChange, id, label, disabled }) => {
    return (
        <label className="switch-card">
            <input
                type="checkbox"
                checked={checked}
                onChange={e => onChange(e.target.checked)}
                id={id}
                disabled={disabled}
            />
            <span className="slider" />
            {label && <span className="switch-label">{label}</span>}
        </label>
    );
};

export { SwitchCard }; 