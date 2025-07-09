import React, { useEffect, useState } from "react";
import { appSettingsService } from "../../../../services/app-settings/app-settings.service";
import { newsService } from "../../../../services/news/news.service";
import { News } from "../../../../services/news/interfaces/news";
import { toast } from "react-toastify";
import { WrapperContainer2 } from "../../../components/WrapperContainers";
import { SubTitle } from "../../../components/SubTitle";
import { NewsCard } from "../../../components/NewsCard";
import { ButtonCard } from "../../../components/ButtonCard";
import { FaPlus } from "react-icons/fa";

const NewsScreen = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [news, setNews] = useState<News[]>([]);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            setLoading(true);
            const news = await newsService.getNews();
            setNews(news);

        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Error al cargar las configuraciones');
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
        >
            <SubTitle>
                Gestion de Noticias
            </SubTitle>

            <ButtonCard
                title="Agregar noticia"
                onClick={() => { }}
                type="button"
                padding={10}
                borderWidth={0}
                borderRadius={10}
            >
                <FaPlus /> Crear nueva noticia
            </ButtonCard>

            {!loading && news?.map((news, index) => (
                <NewsCard key={index} news={news} />
            ))}
        </WrapperContainer2>
    )
}

export default NewsScreen;