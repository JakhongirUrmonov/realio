"use client";
import {Stack, useMediaQuery} from "@mui/material";
import React from "react";
import {Colors} from "@/ts/consts";
import AnimatedTextFill from "@qubixstudio/sphere/sphere/components/AnimatedTextFill";
import {theme} from "@/ts/theme";

type Props = {
  text?: string;
};

function AnimatedText({text}: Props): JSX.Element {
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const tablet = useMediaQuery(theme.breakpoints.only("md"));
  const lg = useMediaQuery(theme.breakpoints.only("lg"));
  return (
    <Stack sx={{width: {lg: "80%", sm: "90%"}, height: "90vh", justifyContent: "center", mx: "auto"}}>
      <AnimatedTextFill
        emptyColor={Colors.secondaryText}
        filledColor={Colors.mainText}
        variant="d1"
        text={text}
        targetYPercentage={mobile ? 0.9 : tablet ? 1.5 : lg ? 1 : 0.8}
        offsetY={mobile ? 290 : tablet ? 400 : lg ? 300 : 150}
      />
    </Stack>
  );
}

export default AnimatedText;
