"use client";
import {Stack, Typography} from "@mui/material";
import {Colors} from "@/ts/consts";
import Link from "next/link";
import {useContext} from "react";
import {Cookie} from "@/app/CookieContext";
interface Props {
  text?: string;
  link?: string;
  isCookie?: boolean;
}
const FooterLink = ({text, link, isCookie}: Props) => {
  const {setIsCookieShow} = useContext(Cookie);
  const handleClick = () => {
    if (isCookie) setIsCookieShow(true);
  };

  return (
    <Stack sx={{flexDirection: {md: "row"}}}>
      <Typography
        component={!isCookie ? Link : "p"}
        href={!isCookie ? link ?? "" : undefined}
        target={!isCookie ? "_blank" : undefined}
        sx={{
          "textDecoration": "none",
          "color": Colors.lightGrey,
          "cursor": "pointer",
          "transition": "color 0.3s linear",
          ":hover": {
            color: Colors.mainText,
          },
        }}
        variant="bm4"
        onClick={handleClick}
      >
        {text}
      </Typography>
      {!isCookie && (
        <Typography
          component="span"
          variant="bm4"
          sx={{padding: "0 16px", color: Colors.lightGrey, display: {md: "block", xs: "none"}}}
        >
          |
        </Typography>
      )}
    </Stack>
  );
};

export default FooterLink;
