"use client";

import {Colors} from "@/ts/consts";
import {formatNumber} from "@/utils/functions";
import {Stack, Typography, Box} from "@mui/material";
import React, {useState, useEffect} from "react";

interface StatisticsProps {
  initialData: {
    circulating: number;
    holders: {
      ethereum: number;
      stellar: number;
      algorand: number;
      bnb: number;
      native: number;
    };
    price: number;
    volume: number;
  };
}

const getSafeValue = (value: any, formatter?: (val: any) => string, isCurrency: boolean = false) => {
  if (value == null || isNaN(value) || value === 0) {
    return "--";
  }
  const numericValue = typeof value === "string" ? Number(value) : value;
  if (!Number.isFinite(numericValue)) {
    return "--";
  }
  const formattedValue = formatter ? formatter(numericValue) : numericValue.toString();

  return isCurrency ? `$${formattedValue}` : formattedValue;
};

const tallyHolders = (holders: Record<string, number>) => {
  return Object.keys(holders).reduce((acc, key) => {
    if (!holders.hasOwnProperty(key)) return acc;
    return acc + holders[key];
  }, 0);
};

export default function StatisticsClient({initialData}: StatisticsProps) {
  const [state, setState] = useState(initialData);

  useEffect(() => {
    let retryTimeout: NodeJS.Timeout;
    const connectSSE = () => {
      const eventSource = new EventSource("/api/statistics/sse");

      eventSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          setState(data);
        } catch (error) {
          console.error("Error parsing SSE data:", error);
        }
      };

      eventSource.onerror = (error) => {
        console.error("SSE Error:", error);
        eventSource.close();
        // Retry connection after 5 seconds
        retryTimeout = setTimeout(connectSSE, 5000);
      };

      return eventSource;
    };

    const eventSource = connectSSE();

    return () => {
      if (retryTimeout) clearTimeout(retryTimeout);
      eventSource.close();
    };
  }, []);

  const holders = tallyHolders(state.holders);
  const marketCap = state.price * state.circulating;
  const marketCapFormatted = getSafeValue(marketCap, formatNumber, true);
  const networkSupplyCapFormatted = getSafeValue(process.env.NEXT_PUBLIC_RIO_NATIVE_SUPPLY_CAP, formatNumber);
  const priceFormatted = getSafeValue(state.price, (val) => parseFloat(val).toFixed(2), true);
  const volumeFormatted = getSafeValue(state.volume, formatNumber, true);
  const holdersFormatted = getSafeValue(holders, formatNumber);

  const stats = [
    {value: priceFormatted, text: "RIO Price"},
    {value: networkSupplyCapFormatted, text: "Network Supply Cap"},
    {value: marketCapFormatted, text: "Market Cap"},
    {value: volumeFormatted, text: "Volume (24 h)"},
    {value: holdersFormatted, text: "Holders"},
  ];

  return (
    <Stack
      sx={{
        flexDirection: {md: "row"},
        justifyContent: "center",
        marginTop: {md: "72px", xs: "60px"},
        flexWrap: {md: "wrap"},
      }}
    >
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
