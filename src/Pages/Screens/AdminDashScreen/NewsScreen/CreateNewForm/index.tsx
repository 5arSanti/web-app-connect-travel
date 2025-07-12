import React, { useState } from "react";
import { WrapperContainer2 } from "../../../../components/WrapperContainers";
import { InputCard, OptionInputCard, TextAreaCard, UploadFileCard } from "../../../../components/InputsCards";
import { ButtonCard } from "../../../../components/ButtonCard";
import { Category } from "../../../../../services/categories/interface/categories.interface";
import { NewsFormValues } from "../../../../../services/news/interfaces/news";
import { handleInputChange, handleTextAreaChange, handleSelectChange } from "../../../../utils/handleInputChange";
import { handleFileChange } from "../../../../utils/handleFileChange";
import { GridContainer } from "../../../../components/GridContainer";
import { FaImage, FaPlus, FaTimes } from "react-icons/fa";
import { ACCEPTED_EXTENSIONS } from "../../../../../config/constants/accepted-extensions.constant";
import { TextCard } from "../../../../components/TextComponents";
import { NewsForm } from "../NewsForm";
import { FormStatus } from "../../../../../config/enum/form-status.enum";

interface CreateNewFormProps {
    categories: Category[];
    handleSubmit: (e: React.FormEvent<HTMLFormElement>, values: NewsFormValues) => Promise<void>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
}

const CreateNewForm = ({ categories, handleSubmit, setOpen, loading }: CreateNewFormProps) => {
    const [values, setValues] = useState<NewsFormValues>({
        title: "",
        content: "",
        category_id: "",
        files: []
    });

    const categoriesOptions = categories.map((category) => ({
        id: category.id,
        name: category.name
    }));

    return (
        <WrapperContainer2
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            gap={0}
            width="100%"
            padding={0}
        >
            <form onSubmit={(e) => handleSubmit(e, values)} className="form-style">
                <NewsForm
                    values={values}
                    setValues={setValues}
                    categoriesOptions={categoriesOptions}
                    setOpen={setOpen}
                    loading={loading}
                    status={FormStatus.CREATING}
                />
            </form>
        </WrapperContainer2>
    )
}

export { CreateNewForm }