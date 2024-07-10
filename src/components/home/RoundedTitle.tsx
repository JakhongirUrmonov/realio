"use client";
import {Colors} from "@/ts/consts";
import {Stack, Typography, SxProps, useMediaQuery} from "@mui/material";
import React from "react";
import leftImage from "@/assets/images/homeLeftTitle.png";
import rightImage from "@/assets/images/homeRightTitle.png";
import leftImageMobile from "@/assets/images/leftTitleMobile.png";
import rightImageMobile from "@/assets/images/rightTitleMobile.png";
import Image from "next/image";
import {theme} from "@/ts/theme";

type Props = {
  text: string;
  sx?: SxProps;
};
function RoundedTitle({text, sx}: Props): JSX.Element {
  const xs = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  return (
    <Stack
      sx={{
        alignItems: "center",
        position: "relative",
        height: "140px",
        justifyContent: "center",
        px: {sm: "100px", xs: "55px"},
        textAlign: "center",
        width: {md: "fit-content", xs: "calc(100vw - 48px)"},
        mx: "auto",
        minHeight: "140px",
        display: "block",
        boxSizing: "border-box",
        ...sx,
      }}
    >
      <Stack sx={{position: "absolute", left: 0, top: 0}}>
        <Image unoptimized src={xs ? leftImageMobile : leftImage} alt="test" />
      </Stack>
      <Stack sx={{height: "140px", justifyContent: "center"}}>
        <Typography variant="c1" color={Colors.secondaryText}>
          {text}
        </Typography>
      </Stack>
      <Stack sx={{position: "absolute", right: 0, top: 0}}>
        <Image unoptimized src={xs ? rightImageMobile : rightImage} alt="test" />
      </Stack>
    </Stack>
  );
}

export default RoundedTitle;
