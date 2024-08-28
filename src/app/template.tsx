"use client";
import {Colors} from "@/ts/consts";
import {animatedPageIn} from "@/utils/functions";
import {Stack, SxProps} from "@mui/material";
import {usePathname} from "next/navigation";
import React, {useEffect} from "react";

type Props = {
  children: React.ReactNode;
  sx?: SxProps;
  refs?: React.MutableRefObject<HTMLDivElement | null>;
};

const Template = ({children, sx, refs}: Props) => {
  const path = usePathname();
  useEffect(() => {
    animatedPageIn();
  }, [path]);
  return (
    <Stack
      sx={{
        ...sx,
      }}
      ref={refs}
    >
      <Stack
        id={"whitePageOut"}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100%",
          background: Colors.whiteText,
          zIndex: 100,
          pointerEvents:"none"
        }}
      />

      {children}
    </Stack>
  );
};

export default Template;
