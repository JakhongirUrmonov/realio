"use client";
import {Stack, Typography, Box} from "@mui/material";
import React, {useContext} from "react";
import {Colors} from "@/ts/consts";
import CustomImage from "../CustomImage";
import Link from "next/link";
import {HeaderProductsDataInnerAttributesLogo} from "@/types/REST/api/generated/models/HeaderProductsDataInnerAttributesLogo";
import {usePathname, useRouter} from "next/navigation";
import {animatedPageOut} from "@/utils/functions";
import {PopupContext} from "./Header";

type Props = {
  link?: string;
  title?: string;
  desc?: string;
  icon?: HeaderProductsDataInnerAttributesLogo | undefined;
  notProduct?: boolean;
  connect?: boolean;
  isWallet?: boolean;
  onMouseLeave: () => void;
};

function ProductsButtonItem({link, title, connect, desc, icon, notProduct, isWallet, onMouseLeave}: Props): JSX.Element {
  const router = useRouter();
  const {setIsPopupOpen} = useContext(PopupContext);
  const path = usePathname();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (isWallet) {
      setIsPopupOpen?.(true);
    }
    if (path !== link && !isWallet && !notProduct) {
      onMouseLeave();
      animatedPageOut(link ?? "", router);
    }
    if (notProduct && link) {
      window.open(link, "_blank");
    }
    if (notProduct) return undefined;
  };
  return (
    <Stack
      sx={{
        "width": connect ? "100%" : "50%",
        "flexDirection": "row",
        "padding": "12px 14px",
        "boxSizing": "border-box",
        "textDecoration": "none",
        "cursor": link ? "pointer" : isWallet ? "pointer" : "default",
        "transition": "all 0.3s linear",
        "WebkitTapHighlightColor": "transparent",
        "borderRadius": "10px",
        "&:hover": {
          background: link ? "#e9ebee" : isWallet ? "#e9ebee" : undefined,
        },
      }}
      component={link ? Link : "div"}
      href={link ?? ""}
      onClick={handleClick}
      target={notProduct ? "_blank" : "_self"}
    >
      <CustomImage
        style={{width: "40px", height: "40px", borderRadius: connect ? "10px" : notProduct ? "20px" : undefined}}
        path={icon}
      />
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
