"use client";
import {Typography, Stack} from "@mui/material";
import {Colors, ZIndex} from "@/ts/consts";
import RoundedTitle from "@/components/home/RoundedTitle";
import {AboutPositionsComponent} from "@/types/REST/api/generated";
import SlickSlider from "@/components/about/SlickSlider";
import Image from "next/image";
import positionImage from "@/assets/images/position.png";
import {AspectRatioMode, useAspectRatio} from "@qubixstudio/sphere";
import {useRef} from "react";
import Link from "next/link";
type Props = {
  title?: string;
  position?: AboutPositionsComponent[];
};

export default function Position({title, position}: Props) {
  const ref = useRef(null);
  const aspectRatio = useAspectRatio(1, AspectRatioMode.widthFromHeight, ref);
  return (
    <Stack
      sx={{
        width: "100vw",
        boxSizing: "border-box",
      }}
    >
      <RoundedTitle text={title ?? ""} sx={{marginTop: {md: "88px", xs: "96px"}}} />

      <SlickSlider
        slideSpace={24}
        slideWidth="100%"
        slideWidthMd="100%"
        slideWidthSm="100%"
        isPosition
        swiperContainerSx={{marginTop: "64px"}}
        minElement={1}
        minElementMd={1}
        minElementSm={1}
      >
        {position?.map((item, key) => (
          <Stack
            key={key}
            sx={{
              backgroundColor: Colors.mainText,
              borderRadius: "16px",
              flexDirection: "row",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <Stack
              sx={{
                padding: {md: "105px 64px", xs: "40px"},
                width: {md: "55%", xs: "100%"},
                paddingRight: {md: 0},
                zIndex: ZIndex.header,
              }}
            >
              <Typography variant="h2" sx={{color: Colors.whiteText}}>
                {item.title}
              </Typography>
              <Typography
                variant="bm1"
                sx={{
                  marginTop: {md: "24px", xs: "16px"},
                  marginBottom: "40px",
                  color: Colors.lightGrey,
                }}
              >
                {item.description}
              </Typography>
              <Typography
                variant="bm1"
                component={Link}
                href={item.url ?? ""}
                target="_blank"
                sx={{
                  color: Colors.whiteText,
                  padding: "16px 32px",
                  borderRadius: "100px",
                  cursor: "pointer",
                  boxSizing: "border-box",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  width: {md: "fit-content", xs: "100%"},
                  textAlign: "center",
                }}
              >
                Apply for position
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: {xs: "none", md: "flex"},
                height: "100%",
                position: "absolute",
                right: "32px",
              }}
            >
              <Image
                ref={ref}
                src={positionImage}
                unoptimized
                alt="position"
                style={{height: "100%", width: aspectRatio.height}}
              />
            </Stack>
          </Stack>
        ))}
      </SlickSlider>
    </Stack>
  );
}
