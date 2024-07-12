import {ReactElement} from "react";
import {Stack, Typography} from "@mui/material";

type Props = {
  text: string;
};

const TopBtn = ({text}: Props): ReactElement => {
  return (
    <Stack
      sx={{
        textTransform: "capitalize",
        background:
          "linear-gradient(to bottom, white, rgb(255 241 252 / 72%)) padding-box, linear-gradient(to left, rgb(62 109 210 / 19%), rgba(210, 62, 183, 0.18)) border-box",
        borderRadius: "100px",
        border: "1px solid rgb(255 255 255 / 60%)",
        position: "relative",
        cursor: "default",
      }}
    >
      <Typography
        variant="bm1"
        sx={{
          fontSize: "16px",
          lineHeight: "24px",
          borderRadius: "100px",
          textAlign: "center",
          opacity: "1",
          padding: "8px 16px 8px 16px",
          background: "linear-gradient(89deg, #652d6e 5%, #2d4078 60%)",
          backgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};

export default TopBtn;
