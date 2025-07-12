import React from "react";
import { SectionContact } from "../../components/ScreenHome/SectionContact";

import "./styles.css"
import { SectionAboutUs } from "../../components/ScreenHome/SectionAboutUs";
import { SectionNews } from "../../components/SectionNews";
import { SectionUsersOpinions } from "../../components/SectionUserOpinions";
import { StyledSection } from "../../components/StyledSection";
import { InitialSectioninfo } from "../../components/ScreenHome/InitialSectionInfo";
import { HeaderContact } from "../../components/HeaderContact";
import { FloatingNav } from "../../components/FloatingNav";
import { Footer } from "../../components/Footer";
import { imageRecordService } from "../../../services/image-record/image-record.service";
import { ImageRecordType } from "../../../services/image-record/enum/image-record.enum";
import { ImageRecord } from "../../../services/image-record/interfaces/image-record";
import { MdOutlineTravelExplore } from "react-icons/md";
import { SectionImageRecord } from "../../components/ScreenHome/SectionImageRecord";
import { GiCommercialAirplane } from "react-icons/gi";
import { FloatingWhatsApp } from "../../components/FloatingWhatsApp";
import { SectionOpinionForm } from "../../components/ScreenHome/SectionOpinionForm";
import { FadeWrapper } from "../../components/FadeWrapper";
import { newsService } from "../../../services/news/news.service";
import { News } from "../../../services/news/interfaces/news";
import { Category } from "../../../services/categories/interface/categories.interface";
import { categoriesService } from "../../../services/categories/categories.service";
import { connectServicesService } from "../../../services/connect-services/connect-services.service";
import { ConnectService } from "../../../services/connect-services/interfaces/connect-services";
import SectionServices from "../../components/ScreenHome/SectionServices";
import { clientOpinionService } from "../../../services/client-opinions/client-opinion.service";
import { ClientOpinion } from "../../../services/client-opinions/interfaces/client-opinion.interface";
import { Header } from "../../components/Header";

const Home = () => {
    const [travelWeeks, setTravelWeeks] = React.useState<ImageRecord[]>([]);
    const [blocks, setBlocks] = React.useState<ImageRecord[]>([]);
    const [news, setNews] = React.useState<News[]>([]);
    const [categories, setCategories] = React.useState<Category[]>([]);
    const [connectServices, setConnectServices] = React.useState<ConnectService[]>([]);
    const [clientOpinions, setClientOpinions] = React.useState<ClientOpinion[]>([]);

    const fetchTravelWeeks = async () => {
        const image_records = await imageRecordService.getActiveImageRecords();
        setTravelWeeks(image_records.filter(item => item.image_type === ImageRecordType.TRAVEL_WEEK));
        setBlocks(image_records.filter(item => item.image_type === ImageRecordType.BLOCK));
    };

    const fetchNews = async () => {
        const news = await newsService.getNews();
        setNews(news);
    };

    const fetchCategories = async () => {
        const categories = await categoriesService.getCategories();
        setCategories(categories);
    };

    const fetchConnectServices = async () => {
        const connectServices = await connectServicesService.getConnectServices();
        setConnectServices(connectServices);
    };

    const fetchClientOpinions = async () => {
        const clientOpinions = await clientOpinionService.getClientOpinions();
        setClientOpinions(clientOpinions);
    };

    React.useEffect(() => {
        fetchTravelWeeks();
        fetchNews();
        fetchCategories();
        fetchConnectServices();
        fetchClientOpinions();
    }, []);

    return (
        <div style={{ width: '100%', height: '100%', boxSizing: 'border-box', margin: 0, padding: 0 }}>
            <Header />
            <HeaderContact />

            <FloatingWhatsApp />

            <FadeWrapper>
                <StyledSection id="home">
                    <InitialSectioninfo />
                </StyledSection>
            </FadeWrapper>

            <SectionServices connectServices={connectServices} />

            <SectionImageRecord
                title="¡Te presentamos los Travel Weeks!"
                description="¡Descubre las mejores semanas de viajes como lo hacen los mejores!"
                icon={<GiCommercialAirplane />}
                layout="text-left"
                travelWeeks={travelWeeks}
            />

            <SectionImageRecord
                title="¡Pero no solo viajes, tambien bloqueos!"
                description="¡Tienes la disponibilidad de elegir viajar en cualquier momento!"
                icon={<MdOutlineTravelExplore />}
                layout="text-right"
                travelWeeks={blocks}
            />

            <SectionAboutUs />

            <SectionUsersOpinions clientOpinions={clientOpinions} />

            <SectionContact />

            <SectionOpinionForm connectServices={connectServices} realoadClientOpinions={fetchClientOpinions} />

            <SectionNews news={news} categories={categories} />

            <Footer />
        </div>
    );
}

export { Home };