"use client";
import {getRioCirculationData, getEthereumData, getStellarData, getAlgorandData} from "@/utils/api";
import {numbersFormatter} from "@/utils/functions";
import React, {useState, useEffect, useCallback} from "react";

const formatValue3 = (value: number) => value.toFixed(3);
const formatValue2 = (value: number) => value.toFixed(2);
const formatValue1 = (value: number) => value.toFixed(1);

const tallyHolders = (holders: Record<string, number>) => {
  return Object.keys(holders).reduce((acc, key) => {
    if (!holders.hasOwnProperty(key)) return acc;
    return acc + holders[key];
  }, 0);
};

interface TickerState {
  circulating: number;
  holders: {
    ethereum: number;
    stellar: number;
    algorand: number;
  };
  percentChange: number;
  price: number;
  volume: number;
  menuOpen: boolean;
}
const Ticker = () => {
  const [state, setState] = useState<TickerState>({
    circulating: 0,
    holders: {ethereum: 0, stellar: 0, algorand: 0},
    percentChange: 0,
    price: 0,
    volume: 0,
    menuOpen: false,
  });

  const pollAndUpdateRioStatsData = useCallback(async () => {
    const [rioData, ethereumData, stellarData, algorandData] = await Promise.all([
      getRioCirculationData(),
      getEthereumData(),
      getStellarData(),
      getAlgorandData(),
    ]);

    setState((prevState) => ({
      ...prevState,
      circulating: rioData.circulating ?? 0,
      holders: {
        ethereum: ethereumData.holders,
        stellar: stellarData.holders,
        algorand: algorandData.holders,
      },
      percentChange: ethereumData.percentChange,
      price: ethereumData.price,
      volume: ethereumData.volume,
    }));
  }, []);

  useEffect(() => {
    pollAndUpdateRioStatsData();
    const interval = setInterval(pollAndUpdateRioStatsData, 30000);
    return () => clearInterval(interval);
  }, [pollAndUpdateRioStatsData]);

  const holders = tallyHolders(state.holders);

  return (
    <>
      <div>
        <div>
          <span>Rio Price</span>
          <div>
            ${formatValue3(state.price)}
            <span>
              {state.percentChange > 0 && "+"}
              {formatValue3(state.percentChange)} %
            </span>
          </div>
        </div>
        <div>
          <span>MKt. Cap</span>
          <div>
            ${numbersFormatter(state.price * state.circulating, 2)}
            {String(numbersFormatter(state.price * state.circulating, 2)).substr(-1)}
          </div>
        </div>
        <div>
          <span>24h Volume</span>
          <div>
            {numbersFormatter(state.volume, 2)}
            {String(numbersFormatter(state.volume, 2)).substr(-1)}
          </div>
        </div>
        <div>
          <span>Holders</span>
          <div>
            {numbersFormatter(holders, 2)}
            {String(numbersFormatter(holders, 2)).substr(-1)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticker;
