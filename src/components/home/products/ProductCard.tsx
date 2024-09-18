"use client";
import {Colors} from "@/ts/consts";
import {Stack, Typography} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";
import CustomImage from "@/components/CustomImage";
import {AspectRatioMode, useAspectRatio} from "@qubixstudio/sphere";
import useMediaQuery from "@mui/material/useMediaQuery";
import {theme} from "@/ts/theme";
import CustomLink from "@/components/header/CustomLink";
import {HeaderProductsDataInnerAttributesLogo} from "@/types/REST/api/generated/models/HeaderProductsDataInnerAttributesLogo";

type Props = {
  slug?: string;
  background?: HeaderProductsDataInnerAttributesLogo;
  backgroundMobile?: HeaderProductsDataInnerAttributesLogo;
  productIcon?: HeaderProductsDataInnerAttributesLogo;
  isDark?: boolean;
  title?: string;
  description?: string;
};

function ProductCard({background, productIcon, isDark, title, description, slug, backgroundMobile}: Props): JSX.Element {
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const imageResolution = useMediaQuery(theme.breakpoints.down("sm"));
  const ref = useRef<HTMLDivElement>(null);
  // Media query check
  const xs = useMediaQuery(theme.breakpoints.between("xs", "mini"));
  const mini = useMediaQuery(theme.breakpoints.between("mini", "sm"));
  const sm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const md = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const [aspectRatioNumber, setAspectRatioNumber] = useState<number>(589 / 582);

  useEffect(() => {
    if (xs) {
      setAspectRatioNumber(345 / 550);
    } else if (mini) {
      setAspectRatioNumber(345 / 400);
    } else if (sm) {
      setAspectRatioNumber(345 / 300);
    } else if (md) {
      setAspectRatioNumber(345 / 420);
    } else {
      setAspectRatioNumber(589 / 582);
    }
  }, [xs, mini, md, sm]);

  const aspectRatio = useAspectRatio(aspectRatioNumber, AspectRatioMode.heightFromWidth, ref);

  return (
    <Stack
      ref={ref}
      sx={{
        borderRadius: "24px",
        position: "relative",
        width: {md: "calc(50% - 8px)", lg: "calc(50% - 16px)", xs: "100%", sm: "90%"},
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.2s linear",
        height: aspectRatio.height,
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <CustomLink sx={{borderRadius: "24px", overflow: "hidden", height: "100%"}} link={`/products/${slug}`}>
        <Stack
          sx={{
            "height": "100%",
            "position": "relative",
            ":hover": {
              "#productBackImage": {
                transform: "scale(1.1)",
              },
            },
          }}
        >
          <CustomImage
            path={imageResolution ? backgroundMobile : background}
            id="productBackImage"
            fill
            style={{
              objectFit: "cover",
              transition: "transform 0.4s linear",
              willChange: "transform",
            }}
          />
          <Stack
            sx={{
              padding: {md: "30px 5px 30px 30px", lg: "40px", xs: "24px 14px 24px 24px", mini: "40px"},
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <CustomImage
              path={productIcon}
              style={{width: mobile ? "40px" : "64px", height: mobile ? "40px" : "64px", objectFit: "cover"}}
            />
            <Typography
              variant={mobile ? "h4" : "h3"}
              sx={{
                color: isDark ? Colors.whiteText : Colors.mainText,
                marginTop: "12px",
                marginBottom: "4px",
              }}
            >
              {title}
            </Typography>
            <Typography variant={"br2"} sx={{color: isDark ? Colors.lightGrey : Colors.secondaryText}}>
              {description}
            </Typography>
          </Stack>
        </Stack>
      </CustomLink>
    </Stack>
  );
}

export default ProductCard;
