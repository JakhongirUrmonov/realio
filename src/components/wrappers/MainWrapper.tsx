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
        width: "100%",
        alignItems: "center",
        paddingX: {md: "10.2%", xs: "24px"},
        boxSizing: "border-box",
        position: "relative",
        overflowX: "clip",
        overflowY: "visible",
        ...sx,
      }}
      ref={refs}
    >
      {children}
    </Stack>
  );
};

export default MainWrapper;
