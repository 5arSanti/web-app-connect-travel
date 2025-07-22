import React, { useEffect, useState } from "react";
import { newsService } from "../../../../services/news/news.service";
import { News, NewsFormValues } from "../../../../services/news/interfaces/news";
import { toast } from "react-toastify";
import { WrapperContainer2 } from "../../../components/WrapperContainers";
import { SubTitle } from "../../../components/SubTitle";
import { NewsCard } from "../../../components/NewsCard";
import { ButtonCard } from "../../../components/ButtonCard";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ExpandableCard } from "../../../components/ExpandableCard";
import { CreateNewForm } from "./CreateNewForm";
import { categoriesService } from "../../../../services/categories/categories.service";
import { Category } from "../../../../services/categories/interface/categories.interface";

const NewsScreen = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [news, setNews] = useState<News[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        fetchNews();
        fetchCategories();
    }, []);

    const fetchNews = async () => {
        try {
            setLoading(true);
            const news = await newsService.getNews();
            setNews(news);
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Error al cargar las noticias');
        } finally {
            setLoading(false);
        }
    };

    const fetchCategories = async () => {
        try {
            const categories = await categoriesService.getCategories();
            setCategories(categories);
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Error al cargar las categorías');
        }
    }

    const handleCreate = async (e: React.FormEvent<HTMLFormElement>, values: NewsFormValues) => {
        e.preventDefault();
        try {
            setLoading(true);
            setOpen(false);
            const response = await newsService.createNews(values);

            if (response.success) {
                toast.success(response.message);
                await fetchNews();
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Error al crear la noticia');
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>, values: Partial<NewsFormValues>) => {
        e.preventDefault();
        try {
            setLoading(true);
            setOpen(false);

            if (!values.id) { throw new Error('ID de noticia no encontrado'); }

            const response = await newsService.updateNews(values.id, values);

            if (response.success) {
                toast.success(response.message);
                await fetchNews();
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Error al actualizar la noticia');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            setLoading(true);
            setOpen(false);
            const response = await newsService.deleteNews(id);

            if (response.success) {
                toast.success(response.message);
                await fetchNews();
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Error al eliminar la noticia');
        } finally {
            setLoading(false);
        }
    };

    return (
        <WrapperContainer2
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            gap={24}
            width="100%"
            className="admin-container"
        >
            <SubTitle>
                Gestión de Noticias
            </SubTitle>

            <ButtonCard
                title="Agregar noticia"
                onClick={() => { setOpen(!open) }}
                type="button"
                padding={10}
                borderWidth={0}
                borderRadius={10}
                backgroundColor="var(--pallete-4)"
            >
                {open ? <FaMinus /> : <FaPlus />} {open ? "Cerrar" : "Crear nueva noticia"}
            </ButtonCard>

            {!loading && <ExpandableCard open={open}>
                <CreateNewForm
                    categories={categories}
                    handleSubmit={handleCreate}
                    setOpen={setOpen}
                    loading={loading}
                />
            </ExpandableCard>}

            <WrapperContainer2
                flexDirection="column"
                justifyContent="start"
                alignItems="start"
                gap={10}
                width="100%"
                padding={0}
            >
                {!loading && news?.map((newsItem, index) => (
                    <NewsCard
                        key={index}
                        news={newsItem}
                        categories={categories}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                        loading={loading}
                    />
                ))}
            </WrapperContainer2>
        </WrapperContainer2>
    )
}

export default NewsScreen;