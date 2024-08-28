"use client";
import {Stack, Typography} from "@mui/material";
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
  isWallet?: boolean;
  handleClose?: () => void;
};

function SubDrawerItem({link, title, desc, icon, notProduct, isWallet, handleClose}: Props): JSX.Element {
  const router = useRouter();
  const {setIsPopupOpen} = useContext(PopupContext);
  const path = usePathname();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (isWallet) {
      handleClose?.()
      setIsPopupOpen?.(true);
    }
    if (path !== link && !isWallet && !notProduct) {
      handleClose?.()
      animatedPageOut(link ?? "", router);
    }
    if (notProduct && link) {
      window.open(link, "_blank");
    }
    if (notProduct) return undefined;
  };
  return (
    <Stack
      component={link ? Link : "div"}
      href={notProduct ? link ?? "" : link}
      target={notProduct ? "_blank" : "_self"}
      sx={{width: "100%", flexDirection: "row", padding: "12px 0", textDecoration: "none"}}
      onClick={handleClick}
    >
      <CustomImage style={{width: "40px", height: "40px"}} path={icon} />
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

export default SubDrawerItem;
