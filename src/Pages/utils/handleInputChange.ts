import React from "react";

const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    setFormData: React.Dispatch<React.SetStateAction<any>>
) => {
    setFormData((prev: object) => ({
        ...prev,
        [e.target.name]: e.target.value
    }));
};

const handleTextAreaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    setFormData: React.Dispatch<React.SetStateAction<any>>
) => {
    setFormData((prev: object) => ({
        ...prev,
        [e.target.name]: e.target.value
    }));
};

const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    setFormData: React.Dispatch<React.SetStateAction<any>>
) => {
    setFormData((prev: object) => ({
        ...prev,
        [e.target.name]: e.target.value
    }));
};

export { handleInputChange, handleTextAreaChange, handleSelectChange }