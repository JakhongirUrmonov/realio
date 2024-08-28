import {Stack, Typography, Box} from "@mui/material";
import logo from "@/assets/images/logoLight.svg";
import Image from "next/image";
import {Colors, ZIndex} from "@/ts/consts";
import Button from "../network/button";
import TwitterLogo from "@/assets/icons/twitter.svg";
import DiscordLogo from "@/assets/icons/discord.svg";
import LinkedinLogo from "@/assets/icons/linkedin.svg";
import ShopLogo from "@/assets/icons/shop.svg";
import {getter} from "@/utils/api";
import {FooterListResponseDataItem, SocialListResponseDataItem} from "@/types/REST/api/generated";
import FooterImage from "./FooterImage";
import MainWrapper from "../wrappers/MainWrapper";
import Link from "next/link";
import {hasCookie, setCookie} from "cookies-next";
import FooterLink from "./FooterLink";
const Footer = async () => {
  const socials = await getter<SocialListResponseDataItem>(`social?populate=socials`);
  const footer = await getter<FooterListResponseDataItem>(`footer?populate=links`);

  const footerLinks = footer.data?.attributes?.links?.map((item) => ({link: item.link, text: item.text, isCookie: false}));
  footerLinks?.push({
    link: undefined,
    text: "Cookie Policy",
    isCookie: true,
  });
  return (
    <MainWrapper>
      <Stack
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {xs: "column", md: "row"},
          justifyContent: "space-between",
          alignItems: {md: "flex-end", xs: "center"},
          paddingBottom: "53px",
          paddingTop: "154px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <FooterImage />
        <Stack sx={{zIndex: ZIndex.header, alignItems: {xs: "center", md: "flex-start"}}}>
          <Image src={logo} width={98} height={28} alt={""} />
          <Typography
            variant="bm4"
            sx={{
              color: Colors.lightGrey,
              marginTop: "24px",
              width: {md: "auto", xs: "60%"},
              textAlign: {xs: "center", md: "left"},
            }}
          >
            {footer.data?.attributes?.copyrightText} {new Date().getFullYear()} ©
          </Typography>
        </Stack>
        <Stack sx={{zIndex: 10, alignItems: {md: "flex-end"}}}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "12px",
              marginTop: {xs: "24px", md: "0"},
              zIndex: ZIndex.header,
            }}
          >
            <Button light logo={ShopLogo} link={socials?.data?.attributes?.socials?.discord} />
            <Button light logo={DiscordLogo} link={socials?.data?.attributes?.socials?.discord} />
            <Button light logo={LinkedinLogo} link={socials?.data?.attributes?.socials?.linkedin} />
            <Button light link={socials?.data?.attributes?.socials?.twitter ?? ""} logo={TwitterLogo} />
          </Stack>
          <Stack sx={{flexDirection: {md: "row"}, marginTop: "24px", alignItems: {xs: "center", md: "flex-end"}}}>
            {footerLinks?.map((item, key) => (
              <FooterLink text={item.text} isCookie={item.isCookie} link={item.link} key={key} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </MainWrapper>
  );
};

export default Footer;
