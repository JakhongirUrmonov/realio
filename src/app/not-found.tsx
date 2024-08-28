import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";

export default function NotFound() {
  return (
    <Stack sx={{height: "calc(100vh - 257px)", justifyContent: "center", alignItems: "center"}}>
      <Stack
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="d1">404</Typography>
        <Typography variant="h2">Page not found</Typography>
        {/* <Ticker /> */}
      </Stack>
    </Stack>
  );
}
