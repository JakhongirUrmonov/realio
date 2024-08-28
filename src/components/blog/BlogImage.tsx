'use client'
import {Stack} from "@mui/material";
import React from "react";
import CustomImage from "../CustomImage";
import { HeaderProductsDataInnerAttributesLogo } from "@/types/REST/api/generated/models/HeaderProductsDataInnerAttributesLogo";
import { BlogImageWithTextComponentImagePositionEnum } from "@/types/REST/api/generated";
import MediaWrapper from "../share/MediaWrapper";
type ProjectInfoProps = {
  image?: HeaderProductsDataInnerAttributesLogo;
  position?: BlogImageWithTextComponentImagePositionEnum;
  imageType: "bigImage" | "mediumImage" | "smallImage";
};
function BlogImage({image, position, imageType}: ProjectInfoProps): JSX.Element {
  return (
    <Stack
      sx={{
        alignItems: position === "right" ? "flex-end" : "flex-start",
      }}
    >
      <MediaWrapper mediaType={imageType === "bigImage" ? 5 : imageType === "mediumImage" ? 4 : 3}>
        <CustomImage unoptimazed path={image} width={1000} height={1000} style={{width:"100%",height:"100%", objectFit: "cover", borderRadius: "16px"}} />
      </MediaWrapper>
    </Stack>
  );
}

export default BlogImage;
