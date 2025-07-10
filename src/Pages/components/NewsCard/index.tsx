import React, { useState } from "react";
import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { SpanCard, TextCard } from "../TextComponents";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ButtonCard } from "../ButtonCard";
import { ExpandableCard } from "../ExpandableCard";
import { IoCloseCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { News } from "../../../services/news/interfaces/news";
import { ImageCard } from "../ImageCard";
import { NewsFormValues } from "../../../services/news/interfaces/news";
import { EditNewForm } from "../../Screens/AdminDashScreen/NewsScreen/EditNewForm";
import { Category } from "../../../services/categories/interface/categories.interface";
import { NewsStatus } from "../../../services/news/enum/news.enum";

interface NewsCardProps {
    news: News;
    categories: Category[];
    handleUpdate: (e: React.FormEvent<HTMLFormElement>, formData: Partial<NewsFormValues>) => void;
    handleDelete: (id: string) => void;
    loading: boolean;
}

const NewsCard = ({ news, categories, handleUpdate, handleDelete, loading }: NewsCardProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const formatDate = (dateString: string | Date) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getCategoryName = (categoryId: string) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.name : 'Sin categoría';
    };

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
            >
                <WrapperContainer2
                    padding={0}
                    width="100%"
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="center"
                    gap={20}
                >
                    <ImageCard imageUrl={news.image_url} alt={news.title} />
                    <WrapperContainer2
                        padding={0}
                        width="auto"
                        flexDirection="column"
                        justifyContent="start"
                        alignItems="start"
                        gap={20}
                    >
                        <WrapperContainer2
                            flexDirection="row"
                            justifyContent="start"
                            alignItems="start"
                            gap={50}
                            padding={0}
                            height="auto"
                        >

                            <TextCard width="auto" fontSize={14}><SpanCard fontSize={14}>Título:</SpanCard> {news.title}</TextCard>

                            <TextCard width="auto" fontSize={14}><SpanCard fontSize={14}>Categoría:</SpanCard> {getCategoryName(news.category_id)}</TextCard>

                            <TextCard width="auto" fontSize={14}><SpanCard fontSize={14}>Fecha:</SpanCard> {formatDate(news.created_at)}</TextCard>
                        </WrapperContainer2>
                        <TextCard fontSize={12}>
                            <SpanCard fontSize={12}>Contenido:</SpanCard> {news.content}
                        </TextCard>
                    </WrapperContainer2>
                </WrapperContainer2>

                <WrapperContainer2
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    width="auto"
                    gap={20}
                    padding={0}
                >
                    <ButtonCard
                        title="Editar"
                        onClick={() => { setIsEditing(!isEditing) }}
                        type="button"
                        padding={10}
                        borderWidth={0}
                        borderRadius={10}
                        className="shadow-style"
                        disabled={loading}
                        backgroundColor="var(--pallete-3)"
                        color="var(--white)"
                    >
                        {isEditing ? <IoCloseCircleOutline /> : <FaEdit />}
                    </ButtonCard>

                    <ButtonCard
                        title="Eliminar"
                        onClick={() => handleDelete(news.id || "")}
                        type="button"
                        padding={10}
                        borderWidth={0}
                        borderRadius={10}
                        className="shadow-style"
                        disabled={loading}
                        backgroundColor="var(--pallete-7)"
                        color="var(--white)"
                    >
                        <FaTrash />
                    </ButtonCard>
                </WrapperContainer2>
            </WrapperContainer1>

            {isEditing && (
                <ExpandableCard open={isEditing}>
                    <EditNewForm
                        news={news}
                        categories={categories}
                        handleSubmit={handleUpdate}
                        setIsEditing={setIsEditing}
                        loading={loading}
                        status={NewsStatus.EDITING}
                    />
                </ExpandableCard>
            )}
        </WrapperContainer2>
    )
}

export { NewsCard };