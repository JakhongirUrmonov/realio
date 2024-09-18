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
      className="MainWrapper"
      sx={{
        height: "100%",
        width: "100%",
        maxWidth: "1680px",
        alignItems: "center",
        paddingX: {lg: "10.2%", xs: "24px", md: "5%"},
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
