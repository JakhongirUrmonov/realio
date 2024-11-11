"use server";
import {IApiReturn} from "@/types/api";
import {OtherSeoComponent} from "@/types/REST/api/generated";
import {cache} from "react";
import BigNumber from "bignumber.js";

export const getter = cache(async <T>(url: string, withMeta?: boolean): Promise<IApiReturn<T>> => {
  let result: IApiReturn<T> = {ok: false, data: null, msg: ""};

  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/api/${url}`, {
      method: "GET",
      headers,
      cache: "no-cache",
    });

    const data = await response.json();
    if (data?.data) {
      result = {ok: true, data: (withMeta ? data : data.data) as T, msg: data?.message || "ok"};
    } else {
      result.msg = data?.message || "Request failed";
    }
    // await new Promise((resolve) => setTimeout(resolve, 10000));
    return result;
  } catch (error) {
    result.msg = String(error);
    return result;
  }
});

export const getData = <T>(url: string, withMeta?: boolean): Promise<T> => {
  return fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/api/${url}`, {
    cache: "no-cache",
  })
    .then((response) => response.json())
    .then((data) => (withMeta ? data : data.data))
    .catch((error) => null);
};

export const getToken = async () => {
  let result = {ok: false, data: null, msg: ""};
  const myHeaders = new Headers();
  myHeaders.append("X-CMC_PRO_API_KEY", `${process.env.NEXT_PUBLIC_COINMARKETCAP}`);

  try {
    const response = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=realio-network", {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": `${process.env.NEXT_PUBLIC_COINMARKETCAP}`,
      },
      redirect: "follow",
      mode: "no-cors",
      next: {revalidate: 60 * 60},
    });

    if (!response.ok) {
      // Handle HTTP errors
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data?.data) {
      result = {ok: true, data: data.data, msg: data?.message || "ok"};
    } else {
      result.msg = data?.message || "Request failed";
    }
  } catch (error: any) {
    result.msg = `Fetch error: ${error.message}`;
  }

  return result;
};

export const getSeo = async (href: string) => {
  const data = await getter<any>(`${href}?populate=Seo,Seo.metaSocials.image,Seo.otherMetas`);
  const seo = data.data?.attributes?.Seo as OtherSeoComponent;
  if (!seo) {
    return;
  }
  const socialNetworks: any = {};
  seo?.metaSocials?.forEach((social) => {
    const projectImage = social.image?.data?.attributes?.url
      ? `${process.env.NEXT_PUBLIC_REST_API_URL}${social.image?.data?.attributes?.url}`
      : "/default-image.png";
    socialNetworks[social?.socialNetwork?.toLowerCase() ?? ""] = {
      title: social.title,
      description: social.description,
      images: [projectImage],
      card: "summary_large_image",
    };
    return data;
  });
  const otherMetas: any = {};
  seo?.otherMetas?.forEach((meta) => {
    otherMetas[meta.name ?? ""] = meta.content;
  });
  // return {
  //   title: seo?.metaTitle,
  //   description: seo?.metaDescription,
  //   robots: seo?.metaRobots,
  //   openGraph: {
  //     ...otherMetas,
  //     ...socialNetworks,
  //     title: seo?.metaTitle,
  //     description: seo?.metaDescription,
  //   },
  //   ...socialNetworks,
  //   keywords: seo?.keywords,
  //   alternates: {
  //     canonical: seo?.canonicalURL,
  //   },
  // };
  return {};
};

export const getRioCirculationData = async () => {
  try {
    const res = await fetch(process.env.RIO_NATIVE_SUPPLY_URL ?? "");
    const data = await res.json();
    const circulating = data?.amount?.amount;
    return {
      circulating: new BigNumber(circulating)
        .dividedBy(10 ** 18)
        .integerValue()
        .toNumber(),
    };
  } catch (e) {
    console.error("ERROR::api.ts::getRioCirculationData", e);
    return {holders: 0};
  }
};

export const getVolumePriceData = async () => {
  try {
    const res = await fetch(process.env.RIO_VOLUME_PRICE_DATA_URL ?? "", {
      headers: {
        "Apikey": `${process.env.CRYPTO_COMPARE_API_KEY}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
    const {Data} = await res.json();
    return {
      volume: Data.SPOT_MOVING_24_HOUR_QUOTE_VOLUME_USD,
      price: Data.PRICE_USD,
    };
  } catch (e) {
    console.error("ERROR::api.ts::getVolumePriceData", e);
    return {volume: 0, price: 0};
  }
};

export const getEthereumData = async () => {
  try {
    const res = await fetch(process.env.RIO_ETHEREUM_DATA_URL ?? "");
    const data = await res.json();
    return {
      price: data.tokenInfo.price.rate,
      holders: data.tokenInfo.holdersCount,
    };
  } catch (e) {
    console.error("ERROR::api.ts::getEthereumData", e);
    return {price: 0, volume: 0, holders: 0};
  }
};

export const getStellarData = async () => {
  try {
    const res = await fetch(`${process.env.RIO_STELLAR_HOLDERS_URL ?? ""}`);
    const data = await res.json();

    // Count accounts with balance > 0
    const numAccounts = data.trustlines?.funded ?? 0;

    return {
      holders: numAccounts,
    };
  } catch (e) {
    console.error("ERROR::api.ts::getStellarData", e);
    return {holders: 0};
  }
};

export const getAlgorandData = async () => {
  let next = "";
  let totalHolders = 0;
  const limit = 10000; // Maximum results per page

  try {
    while (true) {
      const queryParams = new URLSearchParams({
        "currency-greater-than": "0",
        "limit": limit.toString(),
        ...(next && {next}),
      }).toString();

      const url = `${process.env.RIO_ALGORAND_HOLDERS_URL ?? ""}?${queryParams}`;
      const res = await fetch(url);
      const data = await res.json();

      if (!data.balances || data.balances.length === 0) {
        break;
      }

      totalHolders += data.balances.length;

      // Last page
      if (!data["next-token"]) {
        break;
      }
      next = data["next-token"];
    }

    return {
      holders: totalHolders,
    };
  } catch (e) {
    console.error("ERROR::api.ts::getAlgorandData", e);
    return {holders: 0};
  }
};

export const getBnbData = async () => {
  let page = 1;
  let totalHolders = 0;
  const holdersPerPage = 10000;

  try {
    while (true) {
      const res = await fetch(`${process.env.RIO_BNB_HOLDERS_URL ?? ""}&page=${page}&offset=${holdersPerPage}`);
      const data = await res.json();

      if (data?.status === "0" && data?.message === "No token holder found") {
        break;
      }

      if (data?.status === "1" && data?.result?.length > 0) {
        totalHolders += data.result.length;
        page++;
      } else {
        break;
      }
    }

    return {
      holders: totalHolders,
    };
  } catch (e) {
    console.error("ERROR::api.ts::getBnbData", e);
    return {holders: 0};
  }
};

export const getNativeHolderData = async () => {
  try {
    const res = await fetch(process.env.RIO_NATIVE_HOLDERS_URL ?? "");
    const data = await res.json();
    return {
      holders: parseInt(data.pagination.total) || 0,
    };
  } catch (e) {
    console.error("ERROR::api.ts::getNativeHolderData", e);
    return {holders: 0};
  }
};
