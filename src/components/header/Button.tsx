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
  disabled?: boolean;
};

function Button({buttonText, subMenu, link, connect, external, disabled}: Props): JSX.Element {
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
      <Stack
        sx={{
          paddingBottom: "18px",
          marginBottom: "-18px",
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Typography
          onClick={subMenu ? () => setHover(!hover) : external ? undefined : handleClick}
          variant="bm3"
          component={external ? Link : "div"}
          href={subMenu ? "div" : link}
          target={external ? "_blank" : undefined}
          sx={{
            cursor: "pointer",
            transition: "color 0.3s linear",
            color: hover ? Colors.mainText : Colors.secondaryText,
            display: disabled ? "none" : "flex",
            alignItems: "center",
            textDecoration: "none",
            padding: connect ? "8px 16px" : undefined,
            borderRadius: "100px",
            boxShadow: hover ? "none" : connect ? "0px 0px 0px 1px #F5F8F9" : undefined,
            border: hover && connect ? `1px solid ${Colors.primary500}` : "1px solid transparent",
            WebkitTapHighlightColor: "transparent",
          }}
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
        </Typography>
        {subMenu && <ProductsButton hover={hover} data={subMenu} connect={connect} onMouseLeave={onMouseLeave} />}
      </Stack>
    </Stack>
  );
}

export default Button;
