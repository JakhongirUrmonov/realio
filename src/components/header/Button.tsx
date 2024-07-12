"use client";
import {Stack, Typography} from "@mui/material";
import React, {useState} from "react";
import {Colors} from "@/ts/consts";
import ProductsButton from "./ProductsButton";
import {INavItemSub} from "@/types/header";
import {DownArrow} from "@/assets/images/icons";
import {usePathname, useRouter} from "next/navigation";
import {animatedPageOut} from "@/utils/functions";
import Link from "next/link";

type Props = {
  buttonText: string;
  subMenu?: INavItemSub[];
  link: string;
  connect?: boolean;
  external?: boolean;
};

function Button({buttonText, subMenu, link, connect, external}: Props): JSX.Element {
  const [hover, setHover] = useState<boolean>(false);
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);
  const router = useRouter();
  const path = usePathname();
  const handleClick = () => {
    if (path !== link) {
      animatedPageOut(link, router);
    }
  };
  return (
    <Stack>
      <Stack>
        <Typography
          variant="bm3"
          onClick={subMenu ? undefined : external ? undefined : handleClick}
          component={external ? Link : "p"}
          href={link}
          target={external ? "_blank" : undefined}
          sx={{
            cursor: "pointer",
            transition: "color 0.3s linear",
            color: hover ? Colors.mainText : Colors.secondaryText,
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            paddingBottom: "18px",
            marginBottom: "-18px",
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {buttonText}
          {subMenu && (
            <DownArrow
              sx={{
                ml: "8px",
                fill: hover ? Colors.mainText : Colors.secondaryText,
                transition: "all 0.3s linear",
                transform: `rotate(${hover ? "0.5turn" : "0"})`,
              }}
              hover={hover}
            />
          )}
          {subMenu && <ProductsButton hover={hover} data={subMenu} connect={connect} />}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Button;
