import {Typography, Stack} from "@mui/material";
import {Colors} from "@/ts/consts";
import Statistics from "@/components/home/Statistics";
import RoundedTitle from "@/components/home/RoundedTitle";
import HomeProducts from "@/components/home/products/HomeProducts";
import HomeFeatures from "@/components/home/features/HomeFeatures";
import HomeHero from "@/components/home/hero/HomeHero";
import {getter, getSeo} from "@/utils/api";
import {HomePageListResponseDataItem} from "@/types/REST/api/generated";
import tokenImage from "@/assets/icons/headerToken.svg";
import {RightArrow} from "@/assets/images/icons";
import Link from "next/link";
import Image from "next/image";
import BlogCarousel from "@/components/blog/BlogCarousel";
import MainWrapper from "@/components/wrappers/MainWrapper";
export async function generateMetadata() {
  const data = await getSeo(`home-page`);
  return data;
}
export default async function Home() {
  const populateProps: string[] = [
    "title",
    "products.prevTitle",
    "products.prevImage",
    "products.prevImageMobile",
    "products.logo",
    "features.image",
    "announcement",
  ];
  const home = await getter<HomePageListResponseDataItem>(`home-page?populate=${populateProps.join()}`);
  return (
    <MainWrapper>
      <Stack sx={{width: "100%", alignItems: "center"}}>
        <Stack
          sx={{
            width: {md: "80%", xs: "100%"},
            height: {md: "41vh", xs: "50vh"},
            position: "relative",
            justifyContent: "center",
          }}
        >
          <HomeHero />
        </Stack>
      </Stack>
      <Stack sx={{width: {md: "62%"}, textAlign: "center", mx: "auto", alignItems: "center"}}>
        {home.data?.attributes?.announcement?.text && (
          <Stack
            component={home.data?.attributes?.announcement?.link ? Link : "div"}
            href={home.data?.attributes?.announcement?.link}
            target="_blank"
            sx={{
              "cursor": home.data?.attributes?.announcement?.link ? "pointer" : "default",
              "flexDirection": "row",
              "justifyContent": "center",
              "alignItems": "center",
              "textDecoration": "none",
              "padding": "8px",
              "border": "1px",
              "borderRadius": "100px",
              "boxShadow": "0px 2px 4px 0px rgb(17 38 60 / 23%)",
              "width": "fit-content",
              "marginBottom": "24px",
              "&:hover": {
                background: Colors.grey10,
              },
            }}
          >
            <Image src={tokenImage} alt="token" width={20} height={20} />
            <Typography variant="bm4" sx={{color: Colors.mainText, marginX: "8px"}}>
              {home.data?.attributes?.announcement?.text}
            </Typography>
            {home.data?.attributes?.announcement?.link && <RightArrow sx={{fill: Colors.secondaryText}} />}
          </Stack>
        )}
        <Typography variant="d1">{home.data?.attributes?.title}</Typography>
        <Typography
          variant="br1"
          color={Colors.secondaryText}
          sx={{
            color: Colors.secondaryText,
            mt: "24px",
          }}
        >
          {home.data?.attributes?.description}
        </Typography>
      </Stack>
      {/* statistics */}
      <Statistics />
      {/* Projects */}
      <RoundedTitle
        text={home.data?.attributes?.productsTitle ?? ""}
        sx={{marginTop: {md: "160px", xs: "80px"}, marginBottom: {md: "32px", xs: "40px"}}}
      />
      <HomeProducts products={home.data?.attributes?.products?.data} />
      {/* features */}
      <RoundedTitle
        text={home.data?.attributes?.featuresTitle ?? ""}
        sx={{marginTop: {md: "160px", xs: "64px"}, marginBottom: {md: "47px", xs: "40px"}}}
      />
      <HomeFeatures features={home.data?.attributes?.features} />
      <BlogCarousel title={home.data?.attributes?.blogsTitle ?? "Read Blog"} />
    </MainWrapper>
  );
}
