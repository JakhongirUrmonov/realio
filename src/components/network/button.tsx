import {ReactElement} from "react";
import {Typography, Stack} from "@mui/material";
import {Colors} from "@/ts/consts";
import Image from "next/image";
import Link from "next/link";
export type BottomButtonProps = {
  light?: boolean;
  text?: string;
  link?: string;
  logo?: any;
  arrow?: true;
};

const Button = ({text, light, link, logo, arrow}: BottomButtonProps): ReactElement => {
  if (arrow) {
    return (
      <Stack
        sx={{
          "background": Colors.whiteText,
          "outline": "none",
          "cursor": "pointer",
          "gap": "8px",
          "borderRadius": "100px",
          "border": "1px",
          "height": "48px",
          "boxShadow": "0px 0px 0px 1px #F5F8F9",
          "transition": "all 0.3s linear",
          "justifyContent": "center",
          "&:hover": {
            background: light ? Colors.grey10 : "linear-gradient(0deg, rgb(11 25 40 / 77%), rgb(11 25 40 / 84%))",
          },
          "alignItems": "center",
        }}
      >
        <Image src={logo} alt="link" width={16} height={16} />
      </Stack>
    );
  }
  if (!link) {
    return <></>;
  }
  return (
    <>
      {!logo && text && (
        <Stack
          component="button"
          sx={{
            "width": "auto",
            "background": light ? Colors.whiteText : "linear-gradient(0deg, #0B1928, rgb(11 25 40 / 83%))",
            "outline": "none",
            "cursor": "pointer",
            "padding": "12px 24px",
            "gap": "8px",
            "borderRadius": "100px",
            "border": "1px solid",
            "borderImageSource": "linear-gradient(180deg, rgba(245, 245, 245, 0.24) 0%, rgba(245, 245, 245, 0) 100%)",
            "height": "48px",
            "boxShadow": "0px 0px 0px 1px #F5F8F9",
            "justifyContent": "center",
            "transition": "all 0.3s linear",
            "&:hover": {
              background: light ? Colors.grey10 : "linear-gradient(0deg, rgb(11 25 40 / 77%), rgb(11 25 40 / 84%))",
            },
          }}
        >
          <Typography
            href={link ?? ""}
            component={Link}
            variant={light ? "bm2" : "bs2"}
            target="_blank"
            sx={{
              color: !light ? Colors.whiteText : Colors.mainText,
              fontSize: "14px",
              lineHeight: "24px",
              textDecoration: "none",
            }}
          >
            {text}
          </Typography>
        </Stack>
      )}
      {logo && (
        <Stack
          component={Link}
          sx={{
            "width": "48px",
            "background": Colors.whiteText,
            "outline": "none",
            "cursor": "pointer",
            "gap": "8px",
            "borderRadius": "100px",
            "border": "1px",
            "height": "48px",
            "boxShadow": "0px 0px 0px 1px #F5F8F9",
            "transition": "all 0.3s linear",
            "justifyContent": "center",
            "alignItems": "center",
            "&:hover": {
              background: light ? Colors.grey10 : "linear-gradient(0deg, rgb(11 25 40 / 77%), rgb(11 25 40 / 84%))",
            },
          }}
          href={link ?? ""}
          target="_blank"
        >
          <Image src={logo} alt="twitter" width={14} height={14} />
        </Stack>
      )}
    </>
  );
};

export default Button;
