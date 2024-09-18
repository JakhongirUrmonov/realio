import {Colors} from "@/ts/consts";
import {getToken} from "@/utils/api";
import {formatNumber} from "@/utils/functions";
import {Stack, Typography, Box} from "@mui/material";
import React from "react";

export default async function Statistics() {
  const result: any = await getToken();
  const price = parseFloat(result.data[4166].quote.USD.price.toFixed(2));
  const stats = [
    {
      value: `$${price}`,
      text: "RIO Price",
    },
    {
      value: formatNumber(result.data[4166].total_supply),
      text: "Network Supply Cap",
    },
    {
      value: `$${formatNumber(result.data[4166].quote.USD.market_cap)}`,
      text: "Market Cap",
    },
    {
      value: `$${formatNumber(result.data[4166].quote.USD.volume_24h)}`,
      text: "Volume (24 h)",
    },
    {
      value: formatNumber(result.data[4166].circulating_supply),
      text: "Holders",
    },
  ];
  return (
    <Stack sx={{flexDirection: {md: "row"}, justifyContent: "center", marginTop: {md: "72px", xs: "60px"}}}>
      {stats.map((item, key) => (
        <Stack key={key} sx={{flexDirection: {md: "row"}, alignItems: "center"}}>
          <Stack sx={{alignItems: "center"}}>
            <Typography
              variant="h2"
              sx={{
                background: "linear-gradient(89deg, #652d6e 5%, #2d4078 60%)",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              {item.value}
            </Typography>
            <Typography variant="bm1" sx={{color: Colors.secondaryText}}>
              {item.text}
            </Typography>
          </Stack>
          {stats.length - 1 !== key && (
            <Box
              sx={{
                width: {md: "1px", xs: "32px"},
                height: {md: "32px", xs: "1px"},
                backgroundColor: Colors.secondaryText,
                margin: {lg: "0 40px", md: "0 28px", xs: "20px 0px"},
              }}
            />
          )}
        </Stack>
      ))}
    </Stack>
  );
}
