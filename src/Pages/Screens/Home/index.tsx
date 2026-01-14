import React from "react";
import { SectionContact } from "../../components/ScreenHome/SectionContact";

import "./styles.css";
import { SectionAboutUs } from "../../components/ScreenHome/SectionAboutUs";
import { SectionNews } from "../../components/SectionNews";
import { SectionUsersOpinions } from "../../components/SectionUserOpinions";
import { StyledSection } from "../../components/StyledSection";
import { InitialSectioninfo } from "../../components/ScreenHome/InitialSectionInfo";
import { HeaderContact } from "../../components/HeaderContact";
import { Footer } from "../../components/Footer";
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
import { AppSettings } from "../../../services/app-settings/interfaces/app-settings";
import { appSettingsService } from "../../../services/app-settings/app-settings.service";
import SettingCard from "../../components/SettingCard";
import { SectionImageGallery } from "../../components/ScreenHome/SectionImageGallery";
import { imageRecordService } from "../../../services/image-record/image-record.service";
import { ImageRecord } from "../../../services/image-record/interfaces/image-record";

const Home = () => {
  const [news, setNews] = React.useState<News[]>([]);
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [connectServices, setConnectServices] = React.useState<
    ConnectService[]
  >([]);
  const [clientOpinions, setClientOpinions] = React.useState<ClientOpinion[]>(
    []
  );
  const [setting, setSetting] = React.useState<AppSettings>();
  const [imageRecords, setImageRecords] = React.useState<ImageRecord[]>([]);

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

  const fetchAppSettings = async () => {
    const appSettings = await appSettingsService.findOne(
      "5dd8a8fd-83a1-4e53-beb7-32bd83eb64bc"
    );
    setSetting(appSettings);
  };

  const fetchImageRecords = async () => {
    const imageRecords = await imageRecordService.getActiveImageRecords();
    setImageRecords(imageRecords);
  };

  React.useEffect(() => {
    fetchNews();
    fetchCategories();
    fetchConnectServices();
    fetchClientOpinions();
    fetchAppSettings();
    fetchImageRecords();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      }}
    >
      <Header />
      <HeaderContact />

      <FloatingWhatsApp />

      {setting && <SettingCard setting={setting} />}

      <FadeWrapper>
        <StyledSection id="home">
          <InitialSectioninfo />
        </StyledSection>
      </FadeWrapper>

      <SectionServices connectServices={connectServices} />

      <SectionImageGallery />

      <SectionAboutUs />

      <SectionUsersOpinions clientOpinions={clientOpinions} />

      <SectionContact />

      <SectionOpinionForm
        connectServices={connectServices}
        realoadClientOpinions={fetchClientOpinions}
      />

      <SectionNews news={news} categories={categories} />

      <Footer />
    </div>
  );
};

export { Home };
