import {keyframes} from "@emotion/react";
import {Stack, Box} from "@mui/material";
import React from "react";
const loading = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
function Loader() {
  return (
    <Stack
      id="loader"
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Box
        sx={{
          border: "2px solid black",
          borderRadius: "50%",
          borderRightColor: "transparent",
          borderBottomColor: "transparent",
          width: "48px",
          height: "48px",
          animation: `${loading} 700ms infinite linear`,
        }}
      />
    </Stack>
  );
}

export default Loader;
