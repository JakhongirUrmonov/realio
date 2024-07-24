"use client";
import {Colors} from "@/ts/consts";
import {Stack, Typography} from "@mui/material";
import React, {useRef, useState} from "react";
import CustomImage from "@/components/CustomImage";
import {AspectRatioMode, useAspectRatio} from "@qubixstudio/sphere";
import useMediaQuery from "@mui/material/useMediaQuery";
import {theme} from "@/ts/theme";
import CustomLink from "@/components/header/CustomLink";
import {HeaderProductsDataInnerAttributesLogo} from "@/types/REST/api/generated/models/HeaderProductsDataInnerAttributesLogo";

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
  const mobile = useMediaQuery(theme.breakpoints.down("lg"));
  const ref = useRef<HTMLDivElement>(null);
  const aspectRatio = useAspectRatio(mobile ? 345 / 420 : 589 / 582, AspectRatioMode.heightFromWidth, ref);
  const [hover, setHover] = useState<boolean>(false);
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);
  return (
    <Stack
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        "borderRadius": "24px",
        "position": "relative",
        "width": {md: "calc(50% - 16px)", xs: "100%"},
        "overflow": "hidden",
        "cursor": "pointer",
        "transition": "transform 0.2s linear",
        "height": aspectRatio.height,
        ":hover": {
          transform: "scale(0.99)",
        },
      }}
    >
      <CustomLink link={`/products/${id}`}>
        <Stack>
          <CustomImage
            path={mobile ? backgroundMobile : background}
            height={420}
            width={345}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.4s linear",
              transform: hover ? "scale(1.1)" : "scale(1)",
            }}
          />
          <Stack sx={{padding: {md: "40px", xs: "24px 14px 24px 24px"}, position: "absolute", top: 0, left: 0}}>
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
