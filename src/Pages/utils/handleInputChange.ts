import React from "react";

const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFormData: React.Dispatch<React.SetStateAction<any>>
) => {
    setFormData((prev: object) => ({
        ...prev,
        [e.target.name]: e.target.value
    }));
};

export { handleInputChange }