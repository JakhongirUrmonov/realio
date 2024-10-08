import {ReactElement} from "react";
import {Typography, Stack, SxProps} from "@mui/material";
import TopBtn from "./topBtn";
import {Colors} from "@/ts/consts";
import Button from "./button";

import TwitterLogo from "@/assets/icons/twitter.svg";
import DiscordLogo from "@/assets/icons/discord.svg";
import {OtherTextWithLinkComponent} from "@/types/REST/api/generated";
type Props = {
  topBtnText?: string;
  title?: string;
  info?: string;
  // bottomButtons: BottomButtonProps[];
  sx?: SxProps;
  website?: OtherTextWithLinkComponent;
  twitter?: string;
  discord?: string;
  isNetwork?: boolean;
  appLink?: OtherTextWithLinkComponent;
  walletLink?: OtherTextWithLinkComponent;
};

const Hero = ({
  topBtnText,
  info,
  title,
  sx,
  website,
  twitter,
  discord,
  isNetwork,
  appLink,
  walletLink,
}: Props): ReactElement => {
  return (
    <Stack
      sx={{
        margin: {xs: "82px auto 55px auto", md: "145px auto 96px auto"},
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: {lg: "70%", xs: "100%"},
        ...sx,
      }}
    >
      {topBtnText && <TopBtn text={topBtnText} />}
      <Typography variant="d1" sx={{textAlign: "center", marginTop: "24px", lineHeight: "72px"}}>
        {title}
      </Typography>
      <Typography
        variant={isNetwork ? "br1" : "br3"}
        sx={{
          color: Colors.secondaryText,
          textAlign: "center",
          width: {xs: "95%", lg: "65%"},
          marginTop: "16px",
        }}
      >
        {info}
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          gap: "16px",
          marginTop: "40px",
        }}
      >
        {isNetwork ? (
          <>
            <Button link={appLink?.link} text={appLink?.text} />
            <Button link={walletLink?.link} text={walletLink?.text} />
          </>
        ) : (
          <>
            <Button link={website?.link} text={website?.text} />
            <Button link={twitter} logo={TwitterLogo} light />
            <Button link={discord} logo={DiscordLogo} light />
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default Hero;
