"use client";
import {Stack, Typography} from "@mui/material";
import Image from "next/image";
import React, {createContext, Dispatch, SetStateAction, useCallback, useEffect, useRef, useState, useMemo} from "react";
import logo from "@/assets/images/logo.svg";
import Button from "./Button";
import Link from "next/link";
import {Colors, ZIndex} from "@/ts/consts";
import {INavItem} from "@/types/header";
import DrawerAppBar from "./drawer";
import {HamburgerIcon, RightArrow} from "@/assets/images/icons";
import {Header as HeaderType, SocialListResponseDataItem} from "@/types/REST/api/generated";
import tokenImage from "@/assets/icons/headerToken.svg";
import CustomLink from "./CustomLink";
import gsap from "gsap";
import WalletButton from "./wallet/Wallet";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Loader from "../share/Loader";
import MainWrapper from "../wrappers/MainWrapper";
gsap.registerPlugin(ScrollTrigger);
interface Props {
  window?: () => Window;
  data?: HeaderType;
  socials?: SocialListResponseDataItem;
}

interface AppContextInterface {
  isPopupOpen: boolean;
  setIsPopupOpen: Dispatch<SetStateAction<boolean>>;
}

export const popupContextDefaultValue: AppContextInterface = {
  isPopupOpen: false,
  setIsPopupOpen: () => false,
};
export const PopupContext = createContext<AppContextInterface>(popupContextDefaultValue);

function Header(props: Props): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  // Memoize nav items to avoid re-creating them on every render
  const navItems: INavItem[] = useMemo(() => {
    const subProjects = props.data?.products?.data?.map((item) => ({
      icon: item.attributes?.logo,
      title: item.attributes?.headerTitle,
      desc: item.attributes?.headerDescription,
      link: item.attributes?.slug,
    }));

    const subTokens = props.data?.headerTokens?.map((item) => ({
      icon: item.icon,
      title: item.title,
      desc: item.description,
      link: item.link,
      notProduct: true,
    }));

    const subConnect = props.data?.connect?.map((item) => ({
      icon: item.icon,
      title: item.title,
      desc: item.description,
      link: item.link,
      notProduct: true,
      isWallet: false,
    }));

    subConnect?.unshift({
      icon: props.data?.walletButtons?.image,
      title: props.data?.walletButtons?.buttonTitle,
      desc: props.data?.walletButtons?.buttonDesc,
      link: undefined,
      notProduct: true,
      isWallet: true,
    });

    return [
      {
        text: "Products",
        sub: [
          {title: "Projects & Apps", data: subProjects},
          {title: "Tokens", data: subTokens},
        ],
        link: "/products",
      },
      {text: "Network", link: "/network"},
      {text: "About Us", link: "/about"},
      {
        text: "Connect",
        sub: [{data: subConnect}],
        disabled: subConnect?.length ?? 0 > 0 ? false : true,
        link: "/connect",
        connect: true,
      },
    ];
  }, [props.data]);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prevState) => !prevState);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (ref.current) {
        gsap.to(ref.current, {
          opacity: 0,
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom top",
            scrub: true,
            onUpdate: (self) => {
              // Adjust opacity based on scroll direction
              gsap.to(ref.current, {
                opacity: self.direction === -1 ? 1 : 0,
                duration: 0.3,
                pointerEvents: self.direction === -1 ? "all" : "none",
              });
            },
          },
        });
        gsap.to(ref.current, {
          scrollTrigger: {
            trigger: ref.current,
            start: "+=50 top",
            toggleActions: "play none none reverse",
          },
          backdropFilter: "blur(5px)",
        });
      }
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <PopupContext.Provider value={{isPopupOpen, setIsPopupOpen}}>
      <Stack
        id={"whitePageOut"}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100%",
          background: Colors.whiteText,
          zIndex: 100,
          pointerEvents: "none",
        }}
      >
        <Loader />
      </Stack>
      <Stack
        ref={ref}
        sx={{
          position: "fixed",
          width: "100%",
          zIndex: ZIndex.aboveHeader,
          justifyContent: "center",
          alignItems: "center",
          top: 0,
          left: 0,
        }}
      >
        {props.data?.announcement?.text && (
          <Stack
            sx={{
              flexDirection: "row",
              padding: {sm: "8px 0", xs: "8px 24px"},
              justifyContent: "center",
              width: "100vw",
              backgroundColor: Colors.grey10,
              boxSizing: "border-box",
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
              {props.data?.announcement?.link && <RightArrow sx={{fill: Colors.secondaryText}} />}
            </Stack>
          </Stack>
        )}
        <MainWrapper sx={{overflow: "visible"}}>
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
            <CustomLink link={"/"}>
              <Image src={logo} priority width={98} height={28} alt={""} />
            </CustomLink>
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
                <Button
                  key={item.text}
                  subMenu={item.sub}
                  connect={item.connect}
                  buttonText={item.text}
                  link={item.link}
                  external={item.external}
                  disabled={item.disabled}
                />
              ))}
            </Stack>
            <HamburgerIcon sx={{display: {sm: "none"}}} onClick={handleDrawerToggle} />
            <DrawerAppBar
              navItems={navItems}
              mobileOpen={mobileOpen}
              socials={props.socials}
              setMobileOpen={setMobileOpen}
            />
          </Stack>
        </MainWrapper>
      </Stack>
      {props.data?.walletButtons ? (
        <WalletButton open={isPopupOpen} data={props.data?.walletButtons} setOpen={setIsPopupOpen} />
      ) : (
        ""
      )}
    </PopupContext.Provider>
  );
}

export default Header;
