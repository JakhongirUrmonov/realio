import Stack from "@mui/material/Stack";
import Hero from "@/components/network/hero";
import Carousel from "@/components/project/carousel";
import {getter, getSeo} from "@/utils/api";
import {ProductListResponseDataItem} from "@/types/REST/api/generated";
import NotFound from "@/app/not-found";
import MainWrapper from "@/components/wrappers/MainWrapper";

type Props = {params: {slug: string}};

export async function generateMetadata({params}: Props) {
  const data = await getSeo(`products?filters[slug][$eq]=${params.slug}`);
  return data;
}
export default async function ProductDetails({params}: Props) {
  const populateProps: string[] = ["slider", "websiteButton"];
  const product = await getter<ProductListResponseDataItem[]>(
    `products?filters[slug][$eq]=${params.slug}&populate=${populateProps.join()}`
  );
  if (!product.data) {
    return <NotFound />;
  }
  return (
    <MainWrapper>
      <Stack
        sx={{
          marginTop: {md: "115px", xs: "80px"},
          width: "100%",
        }}
      >
        <Hero
          topBtnText={product.data[0]?.attributes?.notification}
          title={product.data[0]?.attributes?.title}
          info={product.data[0]?.attributes?.description}
          website={product.data[0]?.attributes?.websiteButton}
          twitter={product.data[0]?.attributes?.twitter}
          discord={product.data[0]?.attributes?.discord}
        />
        <Carousel data={product.data[0]?.attributes?.slider.data} />
      </Stack>
    </MainWrapper>
  );
}
