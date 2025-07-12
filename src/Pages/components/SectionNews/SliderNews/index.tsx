import React from "react";
import Slider from "react-slick";

import { NextArrowCard, PrevArrowCard } from "./ArrowsCard";
import { NewsCard } from "../NewsCard";
import { WrapperContainer2 } from "../../WrapperContainers";
import { News } from "../../../../services/news/interfaces/news";
import "./styles.css";
import { Category } from "../../../../services/categories/interface/categories.interface";

const SliderNews = ({ news, categories, arrows = true }: { news: News[], categories: Category[], arrows?: boolean }) => {
	const options = {
		infinite: true,
		speed: 1250,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplaySpeed: 6000,
		autoplay: true,
		dots: true,
		arrows: arrows,
		nextArrow: <NextArrowCard />,
		prevArrow: <PrevArrowCard />,
		style: { width: "100%" },
		focusOnSelect: false,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1150,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	}


	return (
		<WrapperContainer2 width="100%" justifyContent="center" alignItems="center" padding={15}>
			<Slider {...options}>
				{news?.map((item, index) => (
					<NewsCard key={index} item={item} categories={categories} />
				))}
			</Slider>
		</WrapperContainer2>
	);
}

export { SliderNews };