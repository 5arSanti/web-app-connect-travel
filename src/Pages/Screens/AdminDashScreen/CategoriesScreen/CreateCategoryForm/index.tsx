import React, { useState } from "react";
import { WrapperContainer2 } from "../../../../components/WrapperContainers";
import { InputCard, TextAreaCard } from "../../../../components/InputsCards";
import { ButtonCard } from "../../../../components/ButtonCard";
import { FaPlus, FaTimes } from "react-icons/fa";
import { GridContainer } from "../../../../components/GridContainer";
import { CategoryFormValues } from "../../../../../services/categories/interface/categories.interface";
import { handleInputChange, handleTextAreaChange } from "../../../../utils/handleInputChange";

interface CreateCategoryFormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>, values: CategoryFormValues) => void;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateCategoryForm = ({ handleSubmit, setOpen }: CreateCategoryFormProps) => {

    const [values, setValues] = useState<CategoryFormValues>({
        name: "",
        description: ""
    });

    return (
        <WrapperContainer2
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            gap={24}
            width="100%"
            padding={0}
        >
            <form onSubmit={(e) => handleSubmit(e, values)} className="form-style">
                <WrapperContainer2
                    flexDirection="column"
                    justifyContent="start"
                    alignItems="start"
                    width="100%"
                    padding={0}
                >
                    <InputCard
                        id="name"
                        label="Nombre"
                        placeholder="Nombre"
                        type="text"
                        onChange={(e) => handleInputChange(e, setValues)}
                        defaultValue={values.name}
                    />
                    <TextAreaCard
                        id="description"
                        label="Descripción"
                        placeholder="Descripción"
                        onChange={(e) => handleTextAreaChange(e, setValues)}
                        defaultValue={values.description}
                        minHeight={100}
                    />
                    <GridContainer
                        width="100%"
                        className="grid-1-1"
                    >
                        <ButtonCard
                            title="Cancelar"
                            onClick={() => { setOpen(false) }}
                            type="submit"
                            borderRadius={10}
                            backgroundColor="var(--pallete-4)"
                        >
                            <FaTimes /> Cancelar
                        </ButtonCard>
                        <ButtonCard
                            title="Crear categoría"
                            type="submit"
                            borderRadius={10}
                            backgroundColor="var(--pallete-4)"
                        >
                            <FaPlus /> Crear categoria
                        </ButtonCard>
                    </GridContainer>
                </WrapperContainer2>
            </form>
        </WrapperContainer2>
    )
}

export { CreateCategoryForm }