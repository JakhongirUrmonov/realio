"use client";
import React, {createContext, Dispatch, SetStateAction, useState} from "react";

type Props = {
  children: React.ReactNode;
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
  return <Cookie.Provider value={{isCookieShow, setIsCookieShow}}>{children}</Cookie.Provider>;
};

export default CookieContext;
