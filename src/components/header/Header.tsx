"use client";
import {Stack, Typography} from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.svg";
import Button from "./Button";
import Link from "next/link";
import {Colors, ZIndex} from "@/ts/consts";
import {INavItem} from "@/types/header";
import DrawerAppBar from "./drawer";
import {HamburgerIcon, RightArrow} from "@/assets/images/icons";
import {Header as HeaderType, SocialListResponseDataItem} from "@/types/REST/api/generated";
import tokenImage from "@/assets/icons/headerToken.svg";
interface Props {
  window?: () => Window;
  data?: HeaderType;
  socials?: SocialListResponseDataItem;
}
function Header(props: Props): JSX.Element {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const subProjects = props.data?.products?.data?.map((item) => {
    return {
      icon: item.attributes?.logo,
      title: item.attributes?.headerTitle,
      desc: item.attributes?.headerDescription,
      link: item.id + "",
    };
  });
  const subTokens = props.data?.headerTokens?.map((item) => {
    return {icon: item.icon, title: item.title, desc: item.description, link: item.link, notProduct: true};
  });
  const subConnect = props.data?.connect?.map((item) => {
    return {icon: item.icon, title: item.title, desc: item.description, link: item.link, notProduct: true};
  });
  const navItems: INavItem[] = [
    {
      text: "Products",
      sub: [
        {
          title: "Projects & Apps",
          data: subProjects,
        },
        {
          title: "Tokens",
          data: subTokens,
        },
      ],
      link: "/products",
    },
    {text: "Network", link: "/network"},
    {text: "Shop", link: props.data?.shopLink ?? ""},
    {text: "About Us", link: "/about"},
    {
      text: "Connect",
      sub: [
        {
          data: subConnect,
        },
      ],
      link: "/connect",
      connect: true,
    },
  ];
  return (
    <>
      {props.data?.announcement?.text && (
        <Stack
          sx={{
            flexDirection: "row",
            padding: {sm: "8px 0", xs: "8px 24px"},
            justifyContent: "center",
            width: "100vw",
            backgroundColor: Colors.grey10,
            boxSizing: "border-box",
            zIndex: ZIndex.header,
          }}
        >
          <Stack
            component={props.data?.announcement?.link ? Link : "div"}
            href={props.data?.announcement?.link}
            target="_blank"
            sx={{
              cursor: props.data?.announcement?.link ? "pointer" : undefined,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Image src={tokenImage} alt="token" width={20} height={20} />
            <Typography variant="bm4" sx={{color: Colors.mainText, marginX: "8px"}}>
              {props.data.announcement.text}
            </Typography>
            <RightArrow sx={{fill: Colors.secondaryText}} />
          </Stack>
        </Stack>
      )}

      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
          width: "100%",
          zIndex: ZIndex.header,
          height: {xs: "80px", md: "114px"},
        }}
      >
        <Link href={"/"}>
          <Image src={logo} width={98} height={28} alt={""} />
        </Link>
        <Stack
          sx={{
            display: {xs: "none", sm: "flex"},
            flexDirection: "row",
            gap: {xs: "0 15px", md: "0 24px"},
            alignItems: "center",
            position: "relative",
          }}
        >
          {navItems.map((item) => (
            <Button key={item.text} subMenu={item.sub} connect={item.connect} buttonText={item.text} link={item.link} />
          ))}
        </Stack>
        <HamburgerIcon sx={{display: {sm: "none"}}} onClick={handleDrawerToggle} />
        <DrawerAppBar navItems={navItems} mobileOpen={mobileOpen} socials={props.socials} setMobileOpen={setMobileOpen} />
      </Stack>
    </>
  );
}

export default Header;
