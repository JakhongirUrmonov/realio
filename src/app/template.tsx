"use client";
import {animatedPageIn} from "@/utils/functions";
import {Stack} from "@mui/material";
import {usePathname} from "next/navigation";
import React, {useEffect} from "react";

type Props = {
  children: React.ReactNode;
};

const Template = ({children}: Props) => {
  const path = usePathname();
  useEffect(() => {
    animatedPageIn();
  }, [path]);
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {children}
    </Stack>
  );
};

export default Template;
