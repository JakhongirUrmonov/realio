"use client";
import Cookies from "@/components/Cookies";
import Footer from "@/components/footer/Footer";
import {Colors} from "@/ts/consts";
import {animatedPageIn} from "@/utils/functions";
import {Stack, SxProps} from "@mui/material";
import {usePathname} from "next/navigation";
import React, {createContext, Dispatch, SetStateAction, useEffect, useState} from "react";

type Props = {
  children: React.ReactNode;
  sx?: SxProps;
  refs?: React.MutableRefObject<HTMLDivElement | null>;
};
interface AppContextInterface {
  isCookieShow: boolean;
  setIsCookieShow: Dispatch<SetStateAction<boolean>>;
}
export const cookieContext: AppContextInterface = {
  isCookieShow: false,
  setIsCookieShow: () => false,
};
export const Cookie = createContext<AppContextInterface>(cookieContext);
const CookieContext = ({children}: Props) => {
  const [isCookieShow, setIsCookieShow] = useState<boolean>(false);
  return (
    <Cookie.Provider value={{isCookieShow, setIsCookieShow}}>
            {children}
      </Cookie.Provider>
  );
};

export default CookieContext;
