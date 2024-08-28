import {Stack} from "@mui/material";
import RoundedTitle from "@/components/home/RoundedTitle";
import SlickSlider from "@/components/about/SlickSlider";
import BlogItem from "./BlogItem";
import {getter} from "@/utils/api";
import {BlogListResponseDataItem} from "@/types/REST/api/generated";
type Props = {
  title?: string;
  slug?: string;
};

export default async function BlogCarousel({title, slug}: Props) {
  const blogProps: string[] = ["thumbnail"];
  const blogsRequest = await getter<BlogListResponseDataItem[]>(
    `blogs?filters[slug][$ne]=${slug}&populate=${blogProps.join()}`
  );
  const blogs = blogsRequest.data?.map((item) => {
    let date;
    if (item.attributes?.createdDate)
      date = new Date(item.attributes?.createdDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    else if (item.attributes?.createdAt)
      date = new Date(item.attributes?.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    return {
      image: item.attributes?.thumbnail,
      title: item.attributes?.title,
      link: `/blogs/${item.attributes?.slug}`,
      createdDate: date,
    };
  });
  return (
    <Stack
      sx={{
        width: "100%",
        boxSizing: "border-box",
        alignItems: "center",
        paddingY: "80px",
      }}
    >
      <RoundedTitle text={title ?? ""} />
      <SlickSlider
        slideSpace={25}
        slideWidth="16%"
        slideWidthMd="16%"
        slideWidthSm="45%"
        minElementMd={3}
        minElementSm={2}
        minElement={4}
        isBlog={true}
        swiperContainerSx={{marginTop: "48px"}}
      >
        {blogs?.map((item, key) => (
          <BlogItem blog={item} key={key} />
        ))}
      </SlickSlider>
    </Stack>
  );
}
