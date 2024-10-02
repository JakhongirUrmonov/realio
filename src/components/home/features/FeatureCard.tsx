"use client";
import {Colors} from "@/ts/consts";
import {Stack, Typography} from "@mui/material";
import React from "react";
import CustomImage from "@/components/CustomImage";
import {HomeFeatureComponentImage} from "@/types/REST/api/generated/models/HomeFeatureComponentImage";

type Props = {
  image?: HomeFeatureComponentImage;
  title?: string;
  description?: string;
};

function FeatureCard({image, title, description}: Props): JSX.Element {
  return (
    <Stack
      sx={{
        borderRadius: "24px",
        position: "relative",
        backgroundColor: Colors.grey50,
        width: {md: "calc(50% - 10px)", xs: "100%"},
      }}
    >
      <CustomImage
        path={image}
        alt={image?.data?.attributes?.alternativeText}
        unoptimazed
        style={{
          width: "100%",
          height: "214px",
          objectFit: "cover",
        }}
      />
      <Stack sx={{paddingX: {md: "40px", xs: "32px"}, paddingBottom: {md: "38px", xs: "32px"}}}>
        <Typography variant="h3" sx={{color: Colors.mainText, marginBottom: "6px"}}>
          {title}
        </Typography>
        <Typography variant="br2" sx={{color: Colors.secondaryText}}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default FeatureCard;
