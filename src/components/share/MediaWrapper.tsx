'use client'
import {Stack, StackProps, SxProps} from "@mui/material";
import React, {ReactNode} from "react";
import { mediaWrapper } from "@/ts/consts";

type Proprs = {
  children: ReactNode;
  containerSx?: SxProps;
  mediaType: 1 | 2 | 3 | 4 | 5 | 6;
};

const MediaWrapper = ({children, containerSx, mediaType}: StackProps & Proprs): JSX.Element => {
  return (
    <Stack
      sx={{
        width: mediaWrapper[mediaType],
        overflow: "hidden",
        position:'relative',
        ...containerSx,
      }}
    >
      {children}
    </Stack>
  );
};

export default MediaWrapper;
