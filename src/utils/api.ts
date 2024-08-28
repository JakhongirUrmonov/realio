import {IApiReturn} from "@/types/api";
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
  myHeaders.append("X-CMC_PRO_API_KEY", "2012595c-25fe-417b-8241-bdbec61e86ae");

  try {
    const response = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=realio-network", {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": "2012595c-25fe-417b-8241-bdbec61e86ae",
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
