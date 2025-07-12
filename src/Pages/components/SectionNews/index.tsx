import React from "react";
import { SectionTitle } from "../SectionWrapper/SectionTitle";
import { WrapperContainer2 } from "../WrapperContainers";
import { SliderNews } from "./SliderNews";
import { News } from "../../../services/news/interfaces/news";
import { Category } from "../../../services/categories/interface/categories.interface";
import "./styles.css";

const SectionNews = ({ news, categories }: { news: News[], categories: Category[] }) => {
    return (
        <section id="noticias">
            <WrapperContainer2 flexDirection="column" gap={0} padding={30} className="news-section-container">
                <SectionTitle title="NOTICIAS" subTitle="ULTIMAS" />

                <SliderNews news={news} categories={categories} arrows={false} />
            </WrapperContainer2>
        </section>
    );
}

export { SectionNews };