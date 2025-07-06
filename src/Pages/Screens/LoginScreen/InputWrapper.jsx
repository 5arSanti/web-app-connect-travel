import React from 'react';
import { InputCard } from "../../components/InputsCards";

const InputWrapper = ({
    icon: Icon,
    type = "text",
    id,
    label,
    placeholder,
    onChange,
    value,
    className = "",
    showPasswordToggle = false,
    onPasswordToggle = null,
    showPassword = false
}) => {
    return (
        <div className="input-group">
            <div className="input-wrapper">
                {Icon && <Icon className="input-icon" />}
                <InputCard
                    type={type}
                    id={id}
                    label={label}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    className={`modern-input ${className}`}
                />
                {showPasswordToggle && (
                    <button
                        type="button"
                        className="password-toggle"
                        onClick={onPasswordToggle}
                    >
                        {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default InputWrapper; 