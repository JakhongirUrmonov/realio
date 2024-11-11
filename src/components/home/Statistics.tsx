"use server";

import {
  getRioCirculationData,
  getEthereumData,
  getStellarData,
  getAlgorandData,
  getBnbData,
  getNativeHolderData,
  getVolumePriceData,
} from "@/utils/api";
import StatisticsClient from "./Statistics.client";

export default async function Statistics() {
  // Initial data fetch on server
  const [rioData, ethereumData, stellarData, algorandData, bnbData, nativeData, volumePriceData] = await Promise.all([
    getRioCirculationData(),
    getEthereumData(),
    getStellarData(),
    getAlgorandData(),
    getBnbData(),
    getNativeHolderData(),
    getVolumePriceData(),
  ]);

  const initialData = {
    circulating: rioData.circulating ?? 0,
    holders: {
      ethereum: ethereumData.holders,
      stellar: stellarData.holders,
      algorand: algorandData.holders,
      bnb: bnbData.holders,
      native: nativeData.holders,
    },
    price: volumePriceData.price,
    volume: volumePriceData.volume,
  };

  return <StatisticsClient initialData={initialData} />;
}
