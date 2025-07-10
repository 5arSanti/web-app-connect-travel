import React from "react";
import moment from "moment"
import { Link } from "react-router-dom";

import { SubTitle } from "../../SubTitle";
import { SpanCard, TextCard } from "../../TextComponents";
import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";
import { News } from "../../../../services/news/interfaces/news";
import { GridContainer } from "../../GridContainer";
import { SubInfoCard } from "../../SubInfoCard";

import "./styles.css"
import { Category } from "../../../../services/categories/interface/categories.interface";

const NewsCard = ({ item, categories }: { item: News, categories: Category[] }) => {
    const category = categories.find(category => category.id === item.category_id)?.name;
    return (
        <WrapperContainer2 flexDirection="column" padding={"0 10px" as unknown as number}>
            <Link
                to={`/news/${item.id}`}
                style={{ width: "100%", height: "100%" }}
                title={`Ir a ${item.title}`}
            >

                <WrapperContainer1
                    gap={0}
                    padding={0 as unknown as string}
                    flexDirection="column"
                    className="relative news-container"
                    justifyContent="center"
                    alignItems="center"
                >
                    <WrapperContainer2
                        height="100%"
                        gap={20}
                        padding={"25px 35px" as unknown as number}
                        flexDirection="column"
                        className="news-card animation-bg"
                        justifyContent="center"
                        alignItems="center"
                    >

                        <WrapperContainer2 flexDirection="column" gap={10} padding={0}>

                            <SubTitle>
                                <TextCard white={true} fontSize={20} className="bold">
                                    <SpanCard fontSize={20} className="bold">
                                        {item?.title}
                                    </SpanCard>
                                </TextCard>
                            </SubTitle>

                            <TextCard white={true} fontSize={12} textAlign="start" className={"italic"}>
                                Publicado el dia {moment(item?.created_at).format("DD/MM/YYYY")}
                            </TextCard>


                            <TextCard
                                white={true}
                                fontSize={14}
                            >
                                {item?.content}
                            </TextCard>

                        </WrapperContainer2>

                        <GridContainer padding={0} className="grid-1">
                            <SubInfoCard
                                subTitle={"Categoria de la noticia"}
                                text={category}
                                padding={"10px 20px"}
                                textAlign="center"
                            />

                        </GridContainer>
                    </WrapperContainer2>

                    <img
                        src={item?.image_url}
                        className={"bg"}
                        alt="alt-image"
                    />
                </WrapperContainer1>
            </Link>
        </WrapperContainer2>
    );
}

export { NewsCard }; 