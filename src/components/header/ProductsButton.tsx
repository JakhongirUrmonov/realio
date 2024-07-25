"use client";
import {Stack, Typography, Box} from "@mui/material";
import React from "react";
import {Colors} from "@/ts/consts";
import {INavItemSub} from "@/types/header";
import ProductsButtonItem from "./ProductsButtonItem";

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
        background: Colors.whiteText,
        // background: "#fcfcfc",
        border: "0.5px solid #7B8D9D29",
        boxShadow: "0px 2px 5px 0px rgb(0 0 0 / 12%)",
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
                <ProductsButtonItem
                  key={key}
                  title={item.title}
                  link={item.notProduct ? item.link : `/products/${item.link}`}
                  desc={item.desc}
                  notProduct={item.notProduct}
                  icon={item.icon}
                  connect={connect}
                />
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
