import React, {Dispatch, SetStateAction, useState} from "react";
import {Stack, Box, keyframes, List, Typography, Drawer, ListItem} from "@mui/material";
import NetWorkButton from "@/components/network/button";
import {INavItem} from "@/types/header";
import TwitterLogo from "@/assets/icons/twitter.svg";
import DiscordLogo from "@/assets/icons/discord.svg";
import LinkedinLogo from "@/assets/icons/linkedin.svg";
import {Colors} from "@/ts/consts";
import SubDrawerAppBar from "./subDrawer";
import {HamburgerCloseIcon} from "@/assets/images/icons";
import {HeaderSocialsComponent} from "@/types/REST/api/generated";
import Link from "next/link";

interface Props {
  window?: () => Window;
  navItems?: INavItem[];
  mobileOpen: boolean;
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
  socials?: HeaderSocialsComponent;
}

export default function DrawerAppBar({window, navItems, mobileOpen, setMobileOpen, socials}: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [subItems, setSubItems] = useState<INavItem | undefined>(undefined);
  const textAnimation = keyframes` 
    0% {
      opacity:0;
      transform: translateX(-120px);
    }
    50% {
      opacity:0;
      transform: translateX(-120px);
    }
    100% {
      opacity:1;
      transform: translate(0);
    }
  `;
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window?.()?.document.body : undefined;
  return (
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
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
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          height: "100vh",
          margin: "16px 0",
          justifyContent: "space-between",
        }}
      >
        <Stack
          sx={{
            display: {xs: "flex", sm: "none"},
            flexDirection: "row",
            justifyContent: "right",
            width: "100%",
            padding: "0 24px",
            boxSizing: "border-box",
          }}
        >
          <HamburgerCloseIcon onClick={handleDrawerToggle} />
        </Stack>
        <List>
          {navItems?.map((item, index) => (
            <ListItem key={index} sx={{height: "64px", display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Typography
                key={index}
                variant="h4"
                sx={{
                  textAlign: "center",
                  animation: mobileOpen ? `${textAnimation} 0.${index + 5}s ease` : undefined,
                  color: Colors.secondaryText,
                  cursor: "pointer",
                }}
                onClick={() => {
                  if (item.sub?.length) {
                    setOpen(true);
                    setSubItems(item);
                  }
                }}
              >
                {item?.sub?.length ? (
                  item.text
                ) : (
                  <Stack
                    component={Link}
                    onClick={item.sub?.length ? undefined : handleDrawerToggle}
                    href={item.link}
                    style={{textDecoration: "none", color: "inherit"}}
                  >
                    {item.text}
                  </Stack>
                )}
              </Typography>
            </ListItem>
          ))}
        </List>
        <Stack sx={{display: "flex", flexDirection: "row", justifyContent: "center", gap: "12px"}}>
          <NetWorkButton light logo={DiscordLogo} link={socials?.discord} />
          <NetWorkButton light logo={LinkedinLogo} link={socials?.linkedin} />
          <NetWorkButton light link={socials?.twitter ?? ""} logo={TwitterLogo} />
        </Stack>
      </Box>
      <SubDrawerAppBar
        open={open}
        setOpen={setOpen}
        item={subItems}
        twitter={socials?.twitter}
        discord={socials?.discord}
        linkedin={socials?.linkedin}
        setMobileOpen={setMobileOpen}
      />
    </Drawer>
  );
}
