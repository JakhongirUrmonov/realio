"use client";
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
        sx={{position: "absolute", top: 0, left: 0, width: "100vw", height: "100%", background: "white"}}
      />

      {children}
    </Stack>
  );
};

export default Template;
