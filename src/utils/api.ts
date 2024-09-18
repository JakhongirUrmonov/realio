import {IApiReturn} from "@/types/api";
import {OtherSeoComponent} from "@/types/REST/api/generated";
import {cache} from "react";

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
  return {};
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
};

export const getRioCirculationData = async () => {
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

export const getEthereumData = async () => {
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

export const getStellarData = async () => {
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

export const getAlgorandData = async () => {
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
