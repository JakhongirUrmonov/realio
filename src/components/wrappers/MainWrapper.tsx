import {Stack, SxProps} from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
  sx?: SxProps;
  refs?: React.MutableRefObject<HTMLDivElement | null>;
};

const MainWrapper = ({children, sx, refs}: Props) => {
  return (
    <Stack
      sx={{
        height: "100%",
        maxHeight: "100%",
        width: "100%",
        maxWidth: "100%",
        alignItems: "center",
        paddingX: {md: "10.2%", xs: "24px"},
        boxSizing: "border-box",
        position: "relative",
        overflowX: "hidden",
        ...sx,
      }}
      ref={refs}
    >
      {children}
    </Stack>
  );
};

export default MainWrapper;
