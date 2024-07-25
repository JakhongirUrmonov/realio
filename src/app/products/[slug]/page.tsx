import Stack from "@mui/material/Stack";
import Hero from "@/components/network/hero";
import Carousel from "@/components/project/carousel";
import {getter} from "@/utils/api";
import {ProductListResponseDataItem} from "@/types/REST/api/generated";
import {getSeo} from "@/utils/functions";
import NotFound from "@/app/not-found";

type Props = {params: {slug: string}};

export async function generateMetadata({params}: Props) {
  const data = await getSeo(`products/${params.slug}`);
  return data;
}
export default async function ProductDetails({params}: Props) {
  const populateProps: string[] = ["slider"];
  const product = await getter<ProductListResponseDataItem>(`products/${params.slug}?populate=${populateProps.join()}`);
  if (!product.data) {
    return <NotFound />;
  }
  return (
    <Stack>
      <Hero
        topBtnText={product.data?.attributes?.notification}
        title={product.data?.attributes?.title}
        info={product.data?.attributes?.description}
        website={product.data?.attributes?.website}
        twitter={product.data?.attributes?.twitter}
        discord={product.data?.attributes?.discord}
      />
      <Carousel data={product.data?.attributes?.slider.data} />
    </Stack>
  );
}
