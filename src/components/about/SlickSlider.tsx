"use client";
import {ReactElement, ReactNode, useEffect, useRef, useState} from "react";
import {Stack, SxProps, useMediaQuery, Box} from "@mui/material";

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {LeftArrow, RightArrow} from "@/assets/images/icons";
import {Colors} from "@/ts/consts";
import {theme} from "@/ts/theme";

type Props = {
  children?: ReactNode[];
  slideWidth: string;
  slideWidthMd?: string;
  slideWidthSm?: string;
  slideWidthXs?: string;
  slideSpace: number;
  navContainerSx?: SxProps;
  swiperContainerSx?: SxProps;
  isPosition?: boolean;
  minElement: number;
  minElementMd: number;
  minElementSm: number;
  isBlog?: boolean;
};

const SlickSlider = ({
  children,
  slideWidth,
  slideSpace,
  navContainerSx,
  slideWidthMd,
  slideWidthSm,
  slideWidthXs,
  isPosition,
  swiperContainerSx,
  minElement,
  minElementMd,
  minElementSm,
  isBlog,
}: Props): ReactElement => {
  const md = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const sm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const xs = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const [tempSlideWidth, setTempSlideWidth] = useState<string>();
  const [slideNumber, setSlideNumber] = useState<number>(1);
  const [edgeCase, setEdgeCase] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (xs) {
      setTempSlideWidth(isPosition ? "93.5%" : slideWidthXs ? slideWidthXs : "65%");
      setSlideNumber(1);
    } else if (sm) {
      setTempSlideWidth(slideWidthSm);
      setSlideNumber(minElementSm);
    } else if (md) {
      setTempSlideWidth(slideWidthMd);
      setSlideNumber(minElementMd);
    } else {
      setTempSlideWidth(slideWidth);
      setSlideNumber(minElement);
    }
  }, [md, slideWidth, slideWidthMd, slideWidthSm, sm, xs, isPosition, minElementSm, minElementMd, minElement, slideWidthXs]);
  const swiperRef = useRef<any>(null);
  const childNodes = () => {
    return children?.map((child, key) => (
      <SwiperSlide style={{width: tempSlideWidth, height: "auto"}} key={key}>
        {child}
      </SwiperSlide>
    ));
  };
  useEffect(() => {
    if (children)
      if (children?.length > slideNumber) setEdgeCase(true);
      else setEdgeCase(false);
  }, [children?.length, slideNumber, children]);
  return (
    <Stack ref={containerRef} sx={{width: "100%"}}>
      {edgeCase && (
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "center",
            marginTop: "-24px",
            zIndex: 10,
            userSelect: "none",
            ...navContainerSx,
          }}
        >
          <LeftArrow
            sx={{
              "cursor": "pointer",
              "WebkitTapHighlightColor": "transparent",
              "padding": "16px",
              "backgroundColor": "white",
              "boxShadow": "0px 1px 2px 0px #0B192814",
              "marginRight": "16px",
              "borderRadius": "50%",
              "transition": "all 0.3s linear",
              "fill": Colors.secondaryText,
              ":hover": {
                fill: Colors.mainText,
                background: Colors.grey10,
              },
            }}
            onClick={() => {
              swiperRef?.current?.slidePrev();
            }}
          />
          <RightArrow
            sx={{
              "cursor": "pointer",
              "WebkitTapHighlightColor": "transparent",
              "padding": "16px",
              "backgroundColor": "white",
              "borderRadius": "50%",
              "boxShadow": "0px 1px 2px 0px #0B192814",
              "transition": "all 0.3s linear",
              "fill": Colors.secondaryText,
              ":hover": {
                fill: Colors.mainText,
                background: Colors.grey10,
              },
            }}
            onClick={() => {
              swiperRef?.current?.slideNext();
            }}
          />
        </Stack>
      )}
      <Stack
        component={Swiper}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={isBlog ? slideNumber : "auto"}
        spaceBetween={slideSpace}
        className="mySwiper"
        sx={{
          "width": {
            xs: isBlog
              ? (containerRef?.current?.clientWidth ?? 0) - (containerRef?.current?.clientWidth ?? 0) * 0.204
              : (containerRef?.current?.clientWidth ?? 0) - (isPosition ? (xs ? 24 : 48) : 34),
            lg: isBlog ? "100%" : undefined,
          },
          "paddingLeft": {xs: isBlog ? undefined : isPosition ? "24px" : "34px"},
          "paddingRight": isBlog ? undefined : isPosition ? "24px" : "0",
          "& .swiper-wrapper": {
            justifyContent: edgeCase ? undefined : "center",
          },
          "& .swiper-slide:last-child": {
            marginRight: isBlog && !edgeCase ? "0px !important" : undefined,
          },
          ...swiperContainerSx,
        }}
      >
        {childNodes()}
      </Stack>
    </Stack>
  );
};
export default SlickSlider;
