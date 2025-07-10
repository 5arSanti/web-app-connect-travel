import React, { useState } from "react";
import { WrapperContainer2 } from "../../../../components/WrapperContainers";
import { Category } from "../../../../../services/categories/interface/categories.interface";
import { News } from "../../../../../services/news/interfaces/news";
import { NewsFormValues } from "../../../../../services/news/interfaces/news";
import { NewsForm } from "../NewsForm";
import { NewsStatus } from "../../../../../services/news/enum/news.enum";

interface EditNewFormProps {
    news: News;
    categories: Category[];
    handleSubmit: (e: React.FormEvent<HTMLFormElement>, values: Partial<NewsFormValues>) => void;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
    status: NewsStatus;
}

const EditNewForm = ({ news, categories, handleSubmit, setIsEditing, loading, status }: EditNewFormProps) => {
    const [values, setValues] = useState<NewsFormValues>({
        id: news.id,
        title: news.title,
        content: news.content,
        category_id: news.category_id,
        image_url: news.image_url,
        files: [],
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
            gap={24}
            width="100%"
        >
            <form onSubmit={(e) => handleSubmit(e, values)} className="form-style">
                <NewsForm
                    values={values}
                    setValues={setValues}
                    categoriesOptions={categoriesOptions}
                    setOpen={setIsEditing}
                    loading={loading}
                    status={status}
                />
            </form>
        </WrapperContainer2>
    )
}

export { EditNewForm } 