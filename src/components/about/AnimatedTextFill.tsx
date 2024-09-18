"use client";
import {useScrollInRef} from "@/ts/hooks";
import {Box, Stack, Typography, TypographyTypeMap, useMediaQuery, useTheme} from "@mui/material";
import {detect} from "detect-browser";
import React, {useEffect, useRef, useState} from "react";

const browser = detect();
const isSafari = browser?.name === "safari";
const isOldSafari = isSafari && browser?.version?.split(".")[0] <= "15";
type Props = {
  text?: string;
  emptyColor: string;
  filledColor: string;
  offsetY: number;
  targetYPercentage: number;
  variant?: TypographyTypeMap["props"]["variant"];
};

const AnimatedTextFill = ({
  text = "",
  emptyColor,
  filledColor,
  offsetY,
  targetYPercentage,
  variant = "h1",
}: Props): JSX.Element => {
  const ref = useRef<HTMLSpanElement>(null);
  const {percentage} = useScrollInRef({
    ref,
    targetYPercentage,
    offsetY: -offsetY,
  });

  const [performBlink, setPerformBlink] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (percentage === 1) setPerformBlink(true);
  }, [percentage]);

  const splitStringToWordsSpans = (text: string): JSX.Element[] => {
    return text.split(" ").map((word, index) => (
      <Typography key={index} variant={variant} component="span" style={{display: "inline-block"}}>
        {splitStringToSpans(word + " ")}
      </Typography>
    ));
  };

  const splitStringToSpans = (text: string): JSX.Element[] => {
    return text.split("").map((char, index) => (
      <Typography
        key={index}
        variant={variant}
        component="span"
        style={{
          display: "inline-block",
          color: index / text.length > percentage ? emptyColor : filledColor,
        }}
      >
        {char === " " ? "\u00A0" : char}
      </Typography>
    ));
  };

  return (
    <Stack>
      <Typography color="black" variant={variant} ref={ref}>
        {isOldSafari ? (
          splitStringToWordsSpans(text)
        ) : (
          <span
            style={{
              background: `linear-gradient(${filledColor}, ${filledColor}) left no-repeat ${emptyColor}`,
              backgroundSize: `${percentage * 100}% 100%`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            {text}
          </span>
        )}
        {isDesktop && (
          <Box
            display="inline-block"
            width="0.45em"
            height="3px"
            bgcolor="black"
            ml="4px"
            component={"span"}
            sx={{
              opacity: 0,
              animation: performBlink ? "blink 0.8s linear forwards" : undefined,
            }}
          />
        )}
      </Typography>
    </Stack>
  );
};

export default AnimatedTextFill;
