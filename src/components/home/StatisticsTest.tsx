"use client";
import React, {useState, useEffect, useCallback} from "react";
const numbersFormatter = (num: number, digits: number) => {
  const lookup = [
    {value: 1, symbol: ""},
    {value: 1e3, symbol: "k"},
    {value: 1e6, symbol: "M"},
    {value: 1e9, symbol: "G"},
    {value: 1e12, symbol: "T"},
    {value: 1e15, symbol: "P"},
    {value: 1e18, symbol: "E"},
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(({value}) => num >= value);
  const result = item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  return result;
};

const formatValue3 = (value: number) => value.toFixed(3);
const formatValue2 = (value: number) => value.toFixed(2);
const formatValue1 = (value: number) => value.toFixed(1);
console.log(process.env.NEXT_PUBLIC_RIO_STELLAR_HOLDERS_URL ?? "");
const getRioCirculationData = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_RIO_STELLAR_HOLDERS_URL ?? "");
    const data = await res.json();
    return {
      circulating: Math.round(parseFloat(data)),
    };
  } catch (e) {
    return {holders: 0};
  }
};

const getEthereumData = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_RIO_ETHEREUM_DATA_URL ?? "");
    const data = await res.json();
    return {
      price: data.tokenInfo.price.rate,
      percentChange: data.tokenInfo.price.diff,
      volume: data.tokenInfo.price.volume24h,
      holders: data.tokenInfo.holdersCount,
    };
  } catch (e) {
    // TODO: add info toast
    return {price: 0, volume: 0, percentChange: 0, holders: 0};
  }
};

const getStellarData = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_REACT_APP_RIO_STELLAR_HOLDERS_URL ?? "");
    const data = await res.json();
    const numAccounts = data._embedded.records[0].num_accounts;
    return {
      holders: numAccounts,
    };
  } catch (e) {
    // TODO: add info toast
    return {holders: 0};
  }
};

const getAlgorandData = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_REACT_APP_RIO_ALGORAND_HOLDERS_URL ?? "");
    const data = await res.json();
    return {
      holders: data.balances.length,
    };
  } catch (e) {
    // TODO: add info toast
    return {holders: 0};
  }
};

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
