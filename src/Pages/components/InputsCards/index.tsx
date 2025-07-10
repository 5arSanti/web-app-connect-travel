/* eslint-disable react/prop-types */
import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./styles.css";
import { InputCardProps, OptionInputCardProps, TextAreaCardProps, UploadFileCardProps } from "../../../interfaces/input-cards";

const InputCard = ({
    type = "text",
    id,
    label,
    placeholder = "placeholder",
    onChange,
    required = true,
    defaultValue = "",
    className = "input-container",
    haveLabel = true,
    icon
}: InputCardProps) => {

    return (
        <div className={`${className}`}>
            {haveLabel && <label htmlFor={id}>{label} {required && "*"}</label>}

            <div className="icon-input-container">
                {icon && icon}

                <input
                    type={type}
                    placeholder={placeholder}
                    name={id}
                    id={id}
                    onChange={onChange}
                    required={required}
                    defaultValue={defaultValue}
                />
            </div>
        </div>
    );
}

const OptionInputCard = ({
    id,
    label,
    array,
    onChange,
    defaultValue = "",
    none = false,
    padding = 10,
    required = false
}: OptionInputCardProps) => {

    return (
        <div className="input-container">
            <label htmlFor={id}>{label} </label>
            <select
                name={id}
                id={id}
                onChange={onChange}
                value={defaultValue}
                style={{ padding: padding }}
                required={required}
            >
                {none &&
                    <option value="">Seleccionar</option>
                }
                {array && array?.map((item, index) => (
                    <option
                        key={index}
                        value={item?.id || item}
                    >
                        {item?.name || item}
                    </option>
                ))}
            </select>
        </div >
    );
}

const TextAreaCard = ({
    id,
    label,
    placeholder = "placeholder",
    onChange,
    required = true,
    defaultValue = "",
    minHeight = 75
}: TextAreaCardProps) => {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label} {required && "*"}</label>
            <textarea
                placeholder={placeholder}
                name={id}
                id={id}
                onChange={onChange}
                required={required}
                defaultValue={defaultValue}
                style={{ minHeight: minHeight }}
            />
        </div>
    );
}

const UploadFileCard = ({
    id,
    label = "Cargar Archivo",
    onChange,
    filesArray,
    multiple = false,
    info = "Archivos PDF (.pdf) o Excel (.xlsx)",
    accept = ".pdf, .xlsx"
}: UploadFileCardProps) => {
    const array = filesArray ? [...filesArray] : null;

    return (
        <label htmlFor={id} className="upload-file-container">
            <input
                id={id}
                name={id}
                type="file"
                accept={accept}
                onChange={onChange}
                onClick={(event) => { (event.target as HTMLInputElement).value = "" }}
                multiple={multiple}
            />
            <span>
                <AiOutlineCloudUpload />
            </span>
            <div className="upload-file-info-container">
                <p>{label}</p>
                {array && array?.length !== 0 ? [...filesArray]?.map((item, index) => (
                    <p className="info-text" key={index}>{`(${index + 1})`} {item.name}</p>
                ))
                    :
                    <p>{info}</p>
                }
            </div>

        </label>
    );
}


export { InputCard, OptionInputCard, TextAreaCard, UploadFileCard };