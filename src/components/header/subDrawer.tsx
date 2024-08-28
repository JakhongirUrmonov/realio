"use client";
import React, {Dispatch, SetStateAction, useContext} from "react";
import {Stack, Box, List, Typography, Drawer, ListItem} from "@mui/material";
import NetWorkButton from "@/components/network/button";
import {INavItem} from "@/types/header";
import TwitterLogo from "@/assets/icons/twitter.svg";
import DiscordLogo from "@/assets/icons/discord.svg";
import LinkedinLogo from "@/assets/icons/linkedin.svg";
import {Colors} from "@/ts/consts";
import {HamburgerBackIcon, HamburgerCloseIcon} from "@/assets/images/icons";
import SubDrawerItem from "./subDrawerItem";

interface Props {
  window?: () => Window;
  item?: INavItem;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
  discord?: string;
  twitter?: string;
  linkedin?: string;
}

export default function SubDrawerAppBar({window, item, open, setOpen, setMobileOpen, discord, twitter, linkedin}: Props) {
  const handleDrawerToggle = () => {
    setOpen((prevState) => !prevState);
  };
  const handleClose = () => {
    setOpen(false);
    setMobileOpen(false);
  };
  const container = window !== undefined ? () => window?.()?.document.body : undefined;
  return (
    <Drawer
      container={container}
      variant="temporary"
      open={open}
      transitionDuration={600}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        "display": {xs: "block", sm: "none"},
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "100%",
          background: "white",
          display: "block",
          height: "100%",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          padding: "16px 24px",
          minHeight: "100vh",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <Stack
          sx={{
            display: {xs: "flex", sm: "none"},
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <HamburgerBackIcon onClick={handleDrawerToggle} />
          <Typography variant="bm2">{item?.text}</Typography>
          <HamburgerCloseIcon onClick={handleClose} />
        </Stack>
        <List sx={{width: "100%"}}>
          {item?.sub?.map((i, index) => (
            <ListItem key={index} sx={{display: "flex", flexDirection: "column", alignItems: "start", padding: 0}}>
              {i?.title && (
                <Typography variant="bm4" sx={{color: Colors.secondaryText, marginTop: "24px"}}>
                  {i.title}
                </Typography>
              )}
              <Stack sx={{flexDirection: "column", marginTop: "8px"}}>
                {i?.data?.map((innerItem, key) => (
                  <SubDrawerItem
                    key={key}
                    title={innerItem.title}
                    link={innerItem.notProduct ? innerItem.link : `/products/${innerItem.link}`}
                    desc={innerItem.desc}
                    notProduct={innerItem.notProduct}
                    icon={innerItem.icon}
                    isWallet={innerItem.isWallet}
                    handleClose={handleClose}
                  />
                ))}
              </Stack>
            </ListItem>
          ))}
        </List>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "12px",
            marginTop: "50px",
          }}
        >
          <NetWorkButton light logo={DiscordLogo} link={discord} />
          <NetWorkButton light logo={LinkedinLogo} link={linkedin} />
          <NetWorkButton light link={twitter ?? ""} logo={TwitterLogo} />
        </Stack>
      </Box>
    </Drawer>
  );
}
