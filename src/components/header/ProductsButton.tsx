"use client";
import {Stack, Typography, Box} from "@mui/material";
import React, {Dispatch, SetStateAction} from "react";
import {Colors} from "@/ts/consts";
import {INavItemSub} from "@/types/header";
import CustomImage from "../CustomImage";
import Link from "next/link";

type Props = {
  hover: boolean;
  data: INavItemSub[];
  connect?: boolean;
};

function ProductsButton({hover, data, connect}: Props): JSX.Element {
  return (
    <Stack
      sx={{
        padding: hover ? "12px 16px" : 0,
        position: "absolute",
        background: "#fcfcfc",
        boxShadow: "0px 0px 0px 0.5px #7B8D9D29",
        borderRadius: "10px",
        top: "40px",
        right: 0,
        transition: "opacity 0.3s linear",
        opacity: hover ? "1" : "0",
        height: hover ? "auto" : "0",
        width: connect ? "309px" : "516px",
        maxWidth: {sm: "500px", md: "none"},
        overflow: "hidden",
      }}
    >
      <Stack>
        {data?.map((item, index) => (
          <Stack key={index}>
            {!connect && (
              <Typography variant="bm1" sx={{color: Colors.secondaryText, margin: "12px 0 0 14px"}}>
                {item.title}
              </Typography>
            )}
            <Stack sx={{flexDirection: connect ? "column" : "row", flexWrap: connect ? "nowrap" : "wrap", marginTop: "8px"}}>
              {item.data?.map((item, key) => (
                <Stack
                  key={key}
                  sx={{
                    width: connect ? "100%" : "50%",
                    flexDirection: "row",
                    padding: "12px 14px",
                    boxSizing: "border-box",
                    textDecoration: "none",
                    cursor: item.link ? "pointer" : "default",
                  }}
                  component={item.link ? Link : "div"}
                  href={item.notProduct ? item.link ?? "" : `/products/${item.link}`}
                  target={item.notProduct ? "_blank" : "_self"}
                >
                  <CustomImage
                    style={{width: "40px", height: "40px", borderRadius: item.notProduct ? "20px" : undefined}}
                    path={item.icon}
                  />
                  <Stack sx={{marginLeft: "16px"}}>
                    <Typography variant="bm3" color={Colors.mainText}>
                      {item.title}
                    </Typography>
                    <Typography variant="bm4" color={Colors.secondaryText}>
                      {item.desc}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
            {!connect && data.length - 1 !== index && (
              <Box
                component="hr"
                sx={{
                  height: "1px",
                  width: "auto",
                  display: "block",
                  background: "#DEE1E4",
                  border: "none",
                  margin: "12px 14px",
                }}
              />
            )}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default ProductsButton;
