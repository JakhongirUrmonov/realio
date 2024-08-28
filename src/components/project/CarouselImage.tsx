"use client";
import {ReactElement, useRef} from "react";
import {Stack} from "@mui/material";
import CustomImage from "../CustomImage";
import {HeaderProductsDataInnerAttributesLogo} from "@/types/REST/api/generated/models/HeaderProductsDataInnerAttributesLogo";
import {AspectRatioMode, useAspectRatio} from "@qubixstudio/sphere";

type Props = {
  image?: HeaderProductsDataInnerAttributesLogo | undefined;
};

const CarouselImage = ({image}: Props): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const aspectRatio = useAspectRatio(766 / 431, AspectRatioMode.heightFromWidth, ref);

  return (
    <Stack
      ref={ref}
      sx={{
        width: "100%",
        height: aspectRatio.height,
        borderRadius: "30px",
        boxShadow: "0px 0px 0px 1.21px #FFFFFF",
        overflow: "hidden",
        position:'relative'
      }}
    >
      <CustomImage alt="" style={{ objectFit: "cover"}} fill path={image} />
    </Stack>
  );
};

export default CarouselImage;
