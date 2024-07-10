import {Stack, Typography} from "@mui/material";
import logo from "@/assets/images/logoLight.svg";
import Image from "next/image";
import {Colors, ZIndex} from "@/ts/consts";
import Button from "../network/button";
import TwitterLogo from "@/assets/icons/twitter.svg";
import DiscordLogo from "@/assets/icons/discord.svg";
import LinkedinLogo from "@/assets/icons/linkedin.svg";
import {getter} from "@/utils/api";
import {SocialListResponseDataItem} from "@/types/REST/api/generated";
import FooterImage from "./FooterImage";
const Footer = async () => {
  const socials = await getter<SocialListResponseDataItem>(`social?populate=socials`);
  return (
    <Stack
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: {xs: "column", md: "row"},
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "43px",
        paddingTop: "154px",
        position: "relative",
      }}
    >
      <FooterImage />
      <Stack sx={{margin: {xs: "0 auto", md: "0"}, width: {xs: "70%", md: "auto"}, zIndex: ZIndex.header}}>
        <Stack sx={{margin: {xs: "0 auto", md: "0"}}}>
          <Image src={logo} width={98} height={28} alt={""} />
        </Stack>
        <Typography variant="bm4" sx={{color: Colors.lightGrey, marginTop: "12px", textAlign: {xs: "center", md: "left"}}}>
          All rights reserved to Realio Technology LLC {new Date().getFullYear()} ©
        </Typography>
      </Stack>
      <Stack
        sx={{display: "flex", flexDirection: "row", gap: "12px", marginTop: {xs: "20px", md: "0"}, zIndex: ZIndex.header}}
      >
        <Button light logo={DiscordLogo} link={socials?.data?.attributes?.socials?.discord} />
        <Button light logo={LinkedinLogo} link={socials?.data?.attributes?.socials?.linkedin} />
        <Button light link={socials?.data?.attributes?.socials?.twitter ?? ""} logo={TwitterLogo} />
      </Stack>
    </Stack>
  );
};

export default Footer;
