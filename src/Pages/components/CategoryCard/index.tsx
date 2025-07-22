import React, { useState } from "react";
import { Category } from "../../../services/categories/interface/categories.interface";
import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { SpanCard } from "../TextComponents";
import { TextCard } from "../TextComponents";
import { ButtonCard } from "../ButtonCard";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ExpandableCard } from "../ExpandableCard";

interface CategoryCardProps {
    category: Category;
    handleDelete: (id: string) => void;
}

const CategoryCard = ({ category, handleDelete }: CategoryCardProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    return (
        <WrapperContainer2
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={0}
            width="100%"
            padding={0}
            height="auto"
        >
            <WrapperContainer1
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                gap={30}
                width="100%"
                padding={"20px 35px"}
                className="mobile-flex-column buttons-100"
            >
                <WrapperContainer2
                    padding={0}
                    width="100%"
                    flexDirection="column"
                    justifyContent="start"
                    alignItems="start"
                >
                    <TextCard width="auto" fontSize={14}><SpanCard fontSize={14}>Nombre:</SpanCard> {category.name}</TextCard>
                    <TextCard fontSize={12}><SpanCard fontSize={12}>Descripción:</SpanCard> <br /> {category.description}</TextCard>
                </WrapperContainer2>

                <ButtonCard
                    title="Eliminar"
                    onClick={() => { handleDelete(category.id) }}
                    type="button"
                    padding={10}
                    borderWidth={0}
                    borderRadius={10}
                    className="shadow-style"
                    disabled={isLoading}
                >
                    <FaTrash />
                </ButtonCard>
            </WrapperContainer1>
        </WrapperContainer2>
    )
}
export { CategoryCard }