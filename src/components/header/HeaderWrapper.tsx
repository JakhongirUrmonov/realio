import React from "react";
import {getter} from "@/utils/api";
import {HeaderListResponseDataItem, SocialListResponseDataItem} from "@/types/REST/api/generated";
import Header from "./Header";
async function HeaderWrapper() {
  const populateProps: string[] = ["products.logo", "headerTokens.icon", "connect.icon", "announcement"];
  const header = await getter<HeaderListResponseDataItem>(`header?populate=${populateProps.join()}`);
  const socials = await getter<SocialListResponseDataItem>(`social?populate=socials`);
  return (
    <>
      <Header data={header.data?.attributes} socials={socials.data?.attributes?.socials} />
    </>
  );
}

export default HeaderWrapper;
