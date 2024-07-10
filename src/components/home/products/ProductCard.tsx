"use client";
import {Colors} from "@/ts/consts";
import {Stack, Typography} from "@mui/material";
import React, {useRef} from "react";
import CustomImage from "@/components/CustomImage";
import {HeaderProductsDataInnerAttributesLogo} from "@/types/REST/api/generated";
import {AspectRatioMode, useAspectRatio} from "@qubixstudio/sphere";
import useMediaQuery from "@mui/material/useMediaQuery";
import {theme} from "@/ts/theme";
import Link from "next/link";

type Props = {
  id?: number;
  background?: HeaderProductsDataInnerAttributesLogo;
  backgroundMobile?: HeaderProductsDataInnerAttributesLogo;
  productIcon?: HeaderProductsDataInnerAttributesLogo;
  isDark?: boolean;
  title?: string;
  description?: string;
};

function ProductCard({background, productIcon, isDark, title, description, id, backgroundMobile}: Props): JSX.Element {
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const ref = useRef<HTMLAnchorElement>(null);
  const aspectRatio = useAspectRatio(mobile ? 345 / 380 : 589 / 582, AspectRatioMode.heightFromWidth, ref);
  return (
    <Stack
      ref={ref}
      sx={{
        borderRadius: "24px",
        position: "relative",
        width: {md: "calc(50% - 16px)", xs: "100%"},
        overflow: "hidden",
        cursor: "pointer",
      }}
      href={`/products/${id}`}
      component={Link}
    >
      <CustomImage
        path={mobile ? backgroundMobile : background}
        style={{width: "100%", height: aspectRatio.height, objectFit: "cover"}}
      />
      <Stack sx={{padding: {md: "40px", xs: "32px"}, position: "absolute", top: 0, left: 0}}>
        <CustomImage
          path={productIcon}
          style={{width: mobile ? "40px" : "64px", height: mobile ? "40px" : "64px", objectFit: "cover"}}
        />
        <Typography
          variant="h3"
          sx={{
            color: isDark ? Colors.whiteText : Colors.mainText,
            marginTop: "16px",
            marginBottom: "8px",
            fontSize: {xs: "22px", md: "28px"},
            lineHeight: {xs: "32px", md: "44px"},
          }}
        >
          {title}
        </Typography>
        <Typography variant="br2" sx={{color: isDark ? Colors.lightGrey : Colors.secondaryText}}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default ProductCard;
