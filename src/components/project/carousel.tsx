"use client";

import {ReactElement, useState} from "react";
import {Stack, Box} from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../network/button";
import NextSvg from "@/assets/icons/next.svg";
import DotsSvg from "@/assets/icons/dots.svg";
import ActiveDotsSvg from "@/assets/icons//activedots.svg";
import {HeaderProductsDataInnerAttributesLogoData} from "@/types/REST/api/generated/models/HeaderProductsDataInnerAttributesLogoData";
import CarouselImage from "./CarouselImage";
import {Colors} from "@/ts/consts";

type Props = {
  data?: HeaderProductsDataInnerAttributesLogoData[];
};
function SampleNextArrow(props: any) {
  return (
    <Stack
      onClick={props.onClick}
      className="arrows"
      sx={{
        position: "absolute",
        zIndex: 2,
        top: "45%",
        right: "-10%",
        display: {md: "flex", xs: "none"},
        height: "40px",
        width: "40px",
      }}
    >
      <Button light={true} logo={NextSvg} arrow />
    </Stack>
  );
}
function SamplePrevArrow(props: any) {
  return (
    <Stack
      onClick={props.onClick}
      className="arrows"
      sx={{
        transform: "rotate(180deg)",
        position: "absolute",
        left: "-10%",
        top: "45%",
        zIndex: 2,
        height: "40px",
        width: "40px",
        display: {md: "flex", xs: "none"},
      }}
    >
      <Button light={true} logo={NextSvg} arrow />
    </Stack>
  );
}

const Carousel = ({data}: Props): ReactElement => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    waitForAnimate: false,
    autoplaySpeed: 2500,
    beforeChange: (currentSlide: number, nextSlide: number) => setActiveIndex(nextSlide),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots: any) => (
      <ul style={{margin: "30px 0 0 0", padding: 0}}>
        {dots.map((dot: any, index: number) => {
          return (
            <li
              key={index}
              style={{display: "inline-block", margin: "0 3px", width: index === activeIndex ? 30 : 15, height: "auto"}}
            >
              <Box
                sx={{
                  background: index === activeIndex ? Colors.mainText : Colors.borderColor,
                  height: 10,
                  width: index === activeIndex ? 30 : 15,
                  transition: "width 0.5s ease-out",
                  borderRadius: "30px",
                }}
              />
            </li>
          );
        })}
      </ul>
    ),
    customPaging: () => (
      <Box
        sx={{
          background: Colors.borderColor,
          height: 10,
          width: 15,
          transition: "width 0.5s ease-out",
          borderRadius: "30px",
        }}
      />
    ),
  };

  return (
    <Stack sx={{width: "100%"}}>
      <Stack
        sx={{
          width: "100%",
          // border: "4.83px solid rgba(255, 255, 255, 0.24)",
          boxShadow: "0px 0px 0px 1.21px rgba(255, 255, 255, 1)",
          margin: "0 0 80px 0",
        }}
      >
        <Stack
          className="slider-container"
          sx={{
            "width": {md: "80%", xs: "100%"},
            "margin": "0px auto 0px auto",
            "& .arrows": {
              display: {md: data?.length && data?.length > 1 ? "flex" : "none", xs: "none"},
            },
            "& .slick-dots": {
              display: data?.length && data?.length > 1 ? "block" : "none",
            },
          }}
        >
          <Slider {...settings}>
            {data?.map((item) => (
              <Stack
                key={item.id}
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
              >
                <CarouselImage image={{data: item}} />
              </Stack>
            ))}
          </Slider>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Carousel;
