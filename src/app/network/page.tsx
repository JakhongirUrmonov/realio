import Hero from "@/components/network/hero";
import {Stack, Grid} from "@mui/material";
import Image from "next/image";
import sectionImg from "@/assets/images/aboutIllustration.svg";
import Card from "@/components/network/card";
import RoundedTitle from "@/components/home/RoundedTitle";
import {getter, getSeo} from "@/utils/api";
import {NetworkPageListResponseDataItem} from "@/types/REST/api/generated";
import MainWrapper from "@/components/wrappers/MainWrapper";
export async function generateMetadata() {
  const data = await getSeo(`network-page`);
  return data;
}
export default async function NetWork() {
  const populateProps: string[] = ["sources.image", "appLink", "walletLink"];
  const networkData = await getter<NetworkPageListResponseDataItem>(`network-page?populate=${populateProps.join()}`);
  return (
    <Stack
      sx={{
        marginTop: {md: "115px", xs: "80px"},
        alignItems: "center",
      }}
    >
      <MainWrapper>
        <Hero
          topBtnText={networkData.data?.attributes?.notification}
          title={networkData.data?.attributes?.title}
          info={networkData.data?.attributes?.description}
          appLink={networkData.data?.attributes?.appLink}
          walletLink={networkData.data?.attributes?.walletLink}
          sx={{marginBottom: {md: 0}}}
          isNetwork={true}
        />
      </MainWrapper>
      <Stack
        sx={{
          "width": "100vw",
          "height": {xs: "250px", md: "488px"},
          "position": "relative",
          "overflow": "hidden",
          "& img": {
            width: {xs: "150%", md: "100%"},
            height: "100%",
            position: {xs: "absolute", md: "relative"},
            left: {xs: "-25%", md: "0"},
          },
        }}
      >
        <Image priority width={200} height={400} src={sectionImg} alt="about us illustration image" />
      </Stack>
      <MainWrapper>
        <Stack
          sx={{
            marginTop: {md: "-140px", xs: "0px"},
          }}
        >
          <RoundedTitle text={networkData.data?.attributes?.networkTitle ?? ""} />
          <Grid sx={{marginTop: "56px", justifyContent: "center"}} container spacing="24px">
            {networkData.data?.attributes?.sources?.map((c, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card text={c.title ?? ""} textUrl={c.link ?? ""} info={c.description ?? ""} imgSrc={c.image} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </MainWrapper>
    </Stack>
  );
}
