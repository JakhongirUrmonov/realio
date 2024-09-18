"use client";
import {Stack, useMediaQuery} from "@mui/material";
import React from "react";
import {Colors} from "@/ts/consts";
import {theme} from "@/ts/theme";
import dynamic from "next/dynamic";

type Props = {
  text?: string;
};
const AnimatedTextFill = dynamic(() => import("./AnimatedTextFill"), {ssr: false});
function AnimatedText({text}: Props): JSX.Element {
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const tablet = useMediaQuery(theme.breakpoints.only("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Stack
      sx={{
        width: {lg: "85%", md: "90%", xs: "100%"},
        height: "90vh",
        justifyContent: "center",
        mx: "auto",
        paddingX: {md: "10.2%", xs: "24px"},
        boxSizing: "border-box",
      }}
    >
      <AnimatedTextFill
        emptyColor={Colors.secondaryText}
        filledColor={Colors.mainText}
        variant="d1light"
        text={text}
        targetYPercentage={mobile ? 0.5 : tablet ? 0.6 : lg ? 0.7 : 0.8}
        offsetY={mobile ? 250 : tablet ? 350 : lg ? 290 : 150}
      />
    </Stack>
  );
}

export default AnimatedText;
