import Hero from "@/components/network/hero";
import {Stack, Grid} from "@mui/material";
import Image from "next/image";
import sectionImg from "@/assets/images/aboutIllustration.png";
import Card from "@/components/network/card";
import RoundedTitle from "@/components/home/RoundedTitle";
import {getter} from "@/utils/api";
import {NetworkPageListResponseDataItem} from "@/types/REST/api/generated";

export default async function NetWork() {
  const populateProps: string[] = ["sources.image"];
  const networkData = await getter<NetworkPageListResponseDataItem>(`network-page?populate=${populateProps.join()}`);
  return (
    <Stack>
      <Hero
        topBtnText={networkData.data?.attributes?.notification}
        title={networkData.data?.attributes?.title}
        info={networkData.data?.attributes?.description}
        appLink={networkData.data?.attributes?.appLink}
        walletLink={networkData.data?.attributes?.walletLink}
        sx={{marginBottom: {md: 0}}}
        isNetwork={true}
      />
      <Stack
        sx={{
          "width": "100%",
          "height": {xs: "250px", md: "600px"},
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
        <Image unoptimized src={sectionImg} width={200} height={400} alt="about us illustration image" />
      </Stack>
      <Stack
        sx={{
          marginBottom: "100px",
        }}
      >
        <RoundedTitle text={networkData.data?.attributes?.networkTitle ?? ""} />
        <Grid sx={{marginTop: "56px", justifyContent: "center"}} container spacing="24px">
          {networkData.data?.attributes?.sources?.map((c, index) => (
            <Grid item xs={12} md={6} lg={4} key={index} sx={{maxWidth: {xs: "calc(100% - 48px)", sm: "auto"}}}>
              <Card text={c.title ?? ""} textUrl={c.link ?? ""} info={c.description ?? ""} imgSrc={c.image} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}
