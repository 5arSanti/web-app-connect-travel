import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { WrapperContainer2 } from "../../../components/WrapperContainers";
import { SubTitle } from "../../../components/SubTitle";
import { ButtonCard } from "../../../components/ButtonCard";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ExpandableCard } from "../../../components/ExpandableCard";
import { categoriesService } from "../../../../services/categories/categories.service";
import { Category, CategoryFormValues } from "../../../../services/categories/interface/categories.interface";
import { CategoryCard } from "../../../components/CategoryCard";
import { CreateCategoryForm } from "./CreateCategoryForm";

const CategoriesScreen = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            setLoading(true);
            const categories = await categoriesService.getCategories();
            setCategories(categories);
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Error al cargar las categorías');
        } finally {
            setLoading(false);
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, values: CategoryFormValues) => {
        e.preventDefault();
        try {
            const category = await categoriesService.createCategory(values);

            if (category.success) {
                toast.success(category.message);
                await fetchCategories();
            } else {
                toast.error(category.message);
            }
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Error al crear la categoría');
        }
    }

    const handleDelete = async (id: string) => {
        try {
            setLoading(true);
            const category = await categoriesService.deleteCategory(id);

            if (category.success) {
                toast.success(category.message);
                await fetchCategories();
            } else {
                toast.error(category.message);
            }
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Error al eliminar la categoría');
        } finally {
            setLoading(false);
        }
    }

    return (
        <WrapperContainer2
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            gap={24}
            width="100%"
        >
            <SubTitle>
                Gestion de Categorías
            </SubTitle>

            <ButtonCard
                title="Agregar categoría"
                onClick={() => { setOpen(!open) }}
                type="button"
                padding={10}
                borderWidth={0}
                borderRadius={10}
                backgroundColor="var(--pallete-4)"
            >
                {open ? <FaMinus /> : <FaPlus />} {open ? "Cerrar" : "Crear nueva categoría"}
            </ButtonCard>

            <ExpandableCard
                open={open}
            >
                {!loading && <CreateCategoryForm handleSubmit={handleSubmit} setOpen={setOpen} />}
            </ExpandableCard>

            {!loading && categories?.map((category, index) => (
                <CategoryCard key={index} category={category} handleDelete={handleDelete} />
            ))}
        </WrapperContainer2>
    )
}

export default CategoriesScreen;