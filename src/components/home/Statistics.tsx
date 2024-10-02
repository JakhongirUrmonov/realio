"use client";
import {Colors} from "@/ts/consts";
import {getRioCirculationData, getEthereumData, getStellarData, getAlgorandData} from "@/utils/api";
import {formatNumber} from "@/utils/functions";
import {Stack, Typography, Box} from "@mui/material";
import React, {useState, useEffect, useCallback} from "react";

const getSafeValue = (value: any, formatter?: (val: any) => string, isCurrency: boolean = false) => {
  if (value == null || isNaN(value) || value === 0) {
    return "--";
  }
  const formattedValue = formatter ? formatter(value) : value;

  return isCurrency ? `$${formattedValue}` : formattedValue;
};

const tallyHolders = (holders: Record<string, number>) => {
  return Object.keys(holders).reduce((acc, key) => {
    if (!holders.hasOwnProperty(key)) return acc;
    return acc + holders[key];
  }, 0);
};

export default function Statistics() {
  const [state, setState] = useState({
    circulating: 0,
    holders: {ethereum: 0, stellar: 0, algorand: 0},
    percentChange: 0,
    price: 0,
    volume: 0,
  });

  const pollAndUpdateRioStatsData = useCallback(async () => {
    const [rioData, ethereumData, stellarData, algorandData] = await Promise.all([
      getRioCirculationData(),
      getEthereumData(),
      getStellarData(),
      getAlgorandData(),
    ]);

    setState({
      circulating: rioData.circulating ?? 0,
      holders: {
        ethereum: ethereumData.holders,
        stellar: stellarData.holders,
        algorand: algorandData.holders,
      },
      percentChange: ethereumData.percentChange,
      price: ethereumData.price,
      volume: ethereumData.volume,
    });
  }, []);

  useEffect(() => {
    pollAndUpdateRioStatsData();
    const interval = setInterval(pollAndUpdateRioStatsData, 30000);
    return () => clearInterval(interval);
  }, [pollAndUpdateRioStatsData]);

  const holders = tallyHolders(state.holders);

  const stats = [
    {
      value: getSafeValue(state.price, (val) => parseFloat(val).toFixed(2), true),
      text: "RIO Price",
    },
    {
      value: getSafeValue(state.circulating, formatNumber),
      text: "Network Supply Cap",
    },
    {
      value: getSafeValue(state.price * state.circulating, formatNumber, true),
      text: "Market Cap",
    },
    {
      value: getSafeValue(state.volume, formatNumber, true),
      text: "Volume (24 h)",
    },
    {
      value: getSafeValue(holders, formatNumber),
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
