"use client";
import {Stack} from "@mui/material";
import React from "react";
import features1 from "@/assets/images/features/compliant.png";
import features2 from "@/assets/images/features/evm.png";
import FeatureCard from "./FeatureCard";
import {HomeFeatureComponent} from "@/types/REST/api/generated";

type Props = {
  features?: HomeFeatureComponent[];
};

function HomeFeatures({features}: Props): JSX.Element {
  return (
    <Stack
      sx={{
        flexDirection: {md: "row"},
        justifyContent: "flex-start",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {features?.map((item, key) => (
        <FeatureCard key={key} image={item.image} title={item.title} description={item.description} />
      ))}
    </Stack>
  );
}

export default HomeFeatures;
