import React from "react";
import { WrapperContainer2 } from "../../../../components/WrapperContainers";
import { InputCard, OptionInputCard } from "../../../../components/InputsCards";
import { Category } from "../../../../../services/categories/interface/categories.interface";

interface CreateNewFormProps {
    categories: Category[];
}

const CreateNewForm = ({ categories }: CreateNewFormProps) => {

    const categoriesOptions = categories.map((category) => ({
        id: category.id,
        name: category.name
    }));

    return (
        <WrapperContainer2
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            gap={24}
            width="100%"
        >
            <form action="">
                <InputCard
                    id="title"
                    label="Título"
                    placeholder="Título"
                    type="text"
                    onChange={() => { }}
                    defaultValue=""
                />
                <InputCard
                    id="content"
                    label="Contenido de la noticia"
                    placeholder="Contenido de la noticia"
                    type="text"
                    onChange={() => { }}
                    defaultValue=""
                />
                <OptionInputCard
                    id="category_id"
                    label="Categoría"
                    array={categoriesOptions}
                    onChange={() => { }}
                    defaultValue=""
                    none={true}
                />
            </form>
        </WrapperContainer2>
    )
}

export { CreateNewForm }