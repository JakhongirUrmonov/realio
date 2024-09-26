"use client";
import {Stack} from "@mui/material";
import React from "react";
import CustomImage from "../CustomImage";
import {HeaderProductsDataInnerAttributesLogo} from "@/types/REST/api/generated/models/HeaderProductsDataInnerAttributesLogo";
import {BlogImageWithTextComponentImagePositionEnum} from "@/types/REST/api/generated";
import MediaWrapper from "../share/MediaWrapper";
type ProjectInfoProps = {
  image?: HeaderProductsDataInnerAttributesLogo;
  position?: BlogImageWithTextComponentImagePositionEnum;
  imageSizeType: "bigImage" | "mediumImage" | "smallImage";
  imageType?: "vertical" | "horizontal";
};
function BlogImage({image, position, imageSizeType, imageType}: ProjectInfoProps): JSX.Element {
  const imageIsHorithontal = imageType === "horizontal";
  const imageIsPositionRight = position === "right";
  const getMediaSize = (imageSizeType: "bigImage" | "mediumImage" | "smallImage") => {
    switch (imageSizeType) {
      case "bigImage":
        return 5;
      case "mediumImage":
        return imageIsHorithontal ? 4 : 3;
      case "smallImage":
        return imageIsHorithontal ? 3 : 1;
      default:
        return 5;
    }
  };
  return (
    <Stack
      sx={{
        alignItems: imageIsPositionRight ? "flex-end" : "flex-start",
      }}
    >
      <MediaWrapper mediaType={getMediaSize(imageSizeType)}>
        <CustomImage
          path={image}
          width={1280}
          height={1280}
          style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px"}}
        />
      </MediaWrapper>
    </Stack>
  );
}

export default BlogImage;
