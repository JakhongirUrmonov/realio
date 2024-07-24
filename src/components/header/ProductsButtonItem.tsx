"use client";
import {Stack, Typography, Box} from "@mui/material";
import React from "react";
import {Colors} from "@/ts/consts";
import CustomImage from "../CustomImage";
import Link from "next/link";
import {HeaderProductsDataInnerAttributesLogo} from "@/types/REST/api/generated/models/HeaderProductsDataInnerAttributesLogo";
import {usePathname, useRouter} from "next/navigation";
import {animatedPageOut} from "@/utils/functions";

type Props = {
  link?: string;
  title?: string;
  desc?: string;
  icon?: HeaderProductsDataInnerAttributesLogo | undefined;
  notProduct?: boolean;
  connect?: boolean;
};

function ProductsButtonItem({link, title, connect, desc, icon, notProduct}: Props): JSX.Element {
  const router = useRouter();
  const path = usePathname();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (path !== link) {
      animatedPageOut(link ?? "", router);
    }
  };
  return (
    <Stack
      sx={{
        "width": connect ? "100%" : "50%",
        "flexDirection": "row",
        "padding": "12px 14px",
        "boxSizing": "border-box",
        "textDecoration": "none",
        "cursor": link ? "pointer" : "default",
        "transition": "all 0.3s linear",
        "borderRadius": "10px",
        ":hover": {
          background: link ? "#e9ebee" : undefined,
        },
      }}
      component={link ? Link : "div"}
      href={notProduct ? link ?? "" : link}
      onClick={notProduct ? undefined : handleClick}
      target={notProduct ? "_blank" : "_self"}
    >
      <CustomImage style={{width: "40px", height: "40px", borderRadius: notProduct ? "20px" : undefined}} path={icon} />
      <Stack sx={{marginLeft: "16px"}}>
        <Typography variant="bm3" color={Colors.mainText}>
          {title}
        </Typography>
        <Typography variant="bm4" color={Colors.secondaryText}>
          {desc}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default ProductsButtonItem;
