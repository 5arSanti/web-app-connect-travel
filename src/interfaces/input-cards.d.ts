import { IconType } from "react-icons";

export interface InputCardProps {
    type: React.HTMLInputTypeAttribute;
    id: string;
    label: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    defaultValue: string;
    className?: string;
    haveLabel?: boolean;
    icon?: React.ReactNode;
}

export interface OptionInputCardProps {
    id: string;
    label: string;
    array: any[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    defaultValue: string;
    none?: boolean;
    padding?: number | string;
    required?: boolean;
}

export interface TextAreaCardProps {
    id: string;
    label: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
    defaultValue: string;
}

export interface UploadFileCardProps {
    id: string;
    label?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    filesArray: File[];
    multiple?: boolean;
    info?: string;
    accept?: string;
}