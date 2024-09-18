"use client";
import {Stack} from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";
import {HeaderProductsDataInner} from "@/types/REST/api/generated";

type Props = {
  products?: HeaderProductsDataInner[];
};
function HomeProducts({products}: Props): JSX.Element {
  return (
    <Stack
      sx={{
        flexDirection: {sm: "row"},
        justifyContent: {xs: "center", md: "flex-start"},
        flexWrap: "wrap",
        gap: {md: "16px", lg: "32px", xs: "16px"},
        rowGap: {md: "20px", lg: "40px", xs: "16px"},
        width: "100%",
      }}
    >
      {products?.map((item, key) => (
        <ProductCard
          key={key}
          slug={item.attributes?.slug}
          background={item.attributes?.prevImage}
          title={item.attributes?.prevTitle}
          description={item.attributes?.prevDescription}
          isDark={item.attributes?.isDark}
          productIcon={item.attributes?.logo}
          backgroundMobile={item.attributes?.prevImageMobile}
        />
      ))}
    </Stack>
  );
}

export default HomeProducts;
