"use client";

import {ReactElement, useRef, useState} from "react";
import {Stack} from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../network/button";
import NextSvg from "@/assets/icons/next.svg";
import DotsSvg from "@/assets/icons/dots.svg";
import ActiveDotsSvg from "@/assets/icons//activedots.svg";
import {HeaderProductsDataInnerAttributesLogoData} from "@/types/REST/api/generated";
import CustomImage from "../CustomImage";

type Props = {
  data?: HeaderProductsDataInnerAttributesLogoData[];
};
function SampleNextArrow(props: any) {
  return (
    <Stack
      onClick={props.onClick}
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

    beforeChange: (current: number) => setActiveIndex(current),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots: any) => (
      <ul style={{margin: "30px 0 0 0", padding: 0}}>
        {dots.map((dot: any, index: number) => (
          <li key={index} style={{display: "inline-block", margin: "0 4px"}}>
            <Image
              src={index === activeIndex ? ActiveDotsSvg : DotsSvg}
              alt="dots"
              width={index === activeIndex ? 30 : 15}
              height={15}
            />
          </li>
        ))}
      </ul>
    ),
    customPaging: () => <Image src={DotsSvg} alt="next" width={15} height={15} />,
  };

  return (
    <Stack sx={{width: "100%"}}>
      <Stack
        sx={{
          width: "95%",
          // height: {md: "560px"},
          maxWidth: {md: "958px", xs: "400px", sm: "600px"},
          border: "4.83px solid rgba(255, 255, 255, 0.24)",
          boxShadow: "0px 0px 0px 1.21px rgba(255, 255, 255, 1)",
          margin: "0 auto 80px auto",
        }}
      >
        <Stack
          className="slider-container"
          sx={{
            "width": {md: "80%", xs: "100%"},
            "margin": "0px auto 0px auto",
            "& li.slick-active img": {
              backgroundImage: `url("@/assets/icons//activedots.svg")`,
              backgroundSize: "cover",
              width: "18px",
              height: "6px",
              content: '""',
              display: "block",
            },
          }}
        >
          <Slider {...settings}>
            {data?.map((item) => (
              <Stack
                key={item.id}
                sx={{
                  "width": "100%",
                  "height": "100%",
                  "position": "relative",
                  "borderRadius": "30px",
                  "boxShadow": "0px 0px 0px 1.21px #FFFFFF",
                  "overflow": "hidden",
                  "& img": {
                    width: "100%",
                    height: "450px",
                  },
                }}
              >
                <CustomImage alt="" style={{width: "100%", height: "100%"}} path={{data: item}} />
              </Stack>
            ))}
          </Slider>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Carousel;
