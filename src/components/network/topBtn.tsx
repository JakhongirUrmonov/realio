import {ReactElement} from "react";
import {Button, Typography} from "@mui/material";

type Props = {
  text: string;
};
const converted = {
  background:
    "linear-gradient(0deg, #0B1928, #0B1928),\nradial-gradient(98.75% 2940.81% at 5.83% 0%, rgba(62, 109, 210, 0.4) 0%, rgba(210, 62, 183, 0.4) 100%) ",
};

const TopBtn = ({text}: Props): ReactElement => {
  return (
    <Button
      sx={{
        textTransform: "capitalize",
        height: "40px",
        padding: "8px 16px 8px 16px",
        background: "radial-gradient(98.75% 2940.81% at 5.83% 0%, rgba(62, 109, 210, 0.4) 0%, rgba(210, 62, 183, 0.4) 100%)",
        gap: "8px",
        borderRadius: "100px",
        border: "1px",
        cursor: "default",
      }}
    >
      <Typography
        variant="bm1"
        sx={{
          fontSize: "16px",
          lineHeight: "24px",
          textAlign: "center",
        }}
      >
        {text}
      </Typography>
    </Button>
  );
};

export default TopBtn;
