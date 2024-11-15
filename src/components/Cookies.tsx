"use client";
import React, {useContext, useEffect, useState} from "react";
import {Stack, Typography} from "@mui/material";
import {Colors, ZIndex} from "@/ts/consts";
import {hasCookie, setCookie} from "cookies-next";
import {Cookie} from "@/app/CookieContext";
import {install} from "ga-gtag";
let managerInitialized = false;

const Cookies = () => {
  const {isCookieShow, setIsCookieShow} = useContext(Cookie);
  const [cookieAccepted, setCookieAccepted] = useState<boolean>(false);

  useEffect(() => {
    setIsCookieShow(!(hasCookie("localConsent") || hasCookie("localConsentReject")));
    setCookieAccepted(hasCookie("localConsent"));
  }, [setIsCookieShow]);

  const acceptCookie = () => {
    setIsCookieShow(false);
    setCookie("localConsent", "true", {});
    setCookieAccepted(true);
  };

  const rejectCookie = () => {
    setIsCookieShow(false);
    setCookie("localConsentReject", "true", {});
  };

  useEffect(() => {
    if (cookieAccepted) {
      if (!managerInitialized) {
        install("G-698N7V7VWW");
      }
    } else {
      if (managerInitialized) {
        managerInitialized = false;
        window.location.reload();
      }
    }
  }, [cookieAccepted]);

  return (
    <Stack
      sx={{
        position: "fixed",
        padding: {md: "32px", xs: "24px"},
        boxShadow: "0px 4px 10px 1px rgb(0 0 0 / 26%)",
        right: {md: "32px", xs: "24px"},
        backgroundColor: Colors.whiteText,
        width: {sm: "370px", xs: "auto"},
        borderRadius: "16px",
        bottom: {md: "32px", xs: "24px"},
        left: {xs: "24px", sm: "auto"},
        zIndex: ZIndex.aboveHeader,
        display: isCookieShow ? "block" : "none",
      }}
    >
      <Typography variant="bm2">We use cookies!</Typography>
      <Typography variant="bm4" sx={{marginTop: "8px", marginBottom: "16px", color: Colors.secondaryText}}>
        By continuing to use this site, you consent to our use of cookies. To learn more, please read our Cookie Policy.
      </Typography>
      <Stack sx={{flexDirection: "row", gap: "16px"}}>
        <Typography
          variant={"bm2"}
          sx={{
            "color": Colors.mainText,
            "fontSize": "14px",
            "lineHeight": "24px",
            "textDecoration": "none",
            "background": Colors.whiteText,
            "outline": "none",
            "cursor": "pointer",
            "padding": "12px 24px",
            "borderRadius": "100px",
            "border": "1px solid",
            "borderImageSource": "linear-gradient(180deg, rgba(245, 245, 245, 0.24) 0%, rgba(245, 245, 245, 0) 100%)",
            "boxShadow": "0px 0px 0px 1px #F5F8F9",
            "transition": "box-shadow 0.3s",
            "textAlign": "center",
            "flexGrow": 1,
            "&:hover": {
              background: Colors.grey10,
            },
          }}
          onClick={rejectCookie}
        >
          Close
        </Typography>
        <Typography
          variant={"bm2"}
          sx={{
            "color": Colors.whiteText,
            "fontSize": "14px",
            "lineHeight": "24px",
            "textDecoration": "none",
            "background": "linear-gradient(0deg, #0B1928, rgb(11 25 40 / 83%))",
            "outline": "none",
            "cursor": "pointer",
            "padding": "12px 24px",
            "borderRadius": "100px",
            "border": "1px solid",
            "borderImageSource": "linear-gradient(180deg, rgba(245, 245, 245, 0.24) 0%, rgba(245, 245, 245, 0) 100%)",
            "boxShadow": "0px 0px 0px 1px #F5F8F9",
            "transition": "box-shadow 0.3s",
            "textAlign": "center",
            "flexGrow": 1,
            "&:hover": {
              background: "linear-gradient(0deg, rgb(11 25 40 / 77%), rgb(11 25 40 / 84%))",
            },
          }}
          onClick={acceptCookie}
        >
          Accept
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Cookies;
