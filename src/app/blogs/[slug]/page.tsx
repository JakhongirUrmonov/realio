import React from "react";
import {Stack, Typography} from "@mui/material";
import {BlogComponent, BlogsDynamicZoneComponent} from "@/ts/types";
import HtmlStringParser from "@/components/share/HtmlStringParser";
import {BlogListResponseDataItem} from "@/types/REST/api/generated";
import {getter} from "@/utils/api";
import CustomImage from "@/components/CustomImage";
import {Colors} from "@/ts/consts";
import BlogCarousel from "@/components/blog/BlogCarousel";
import MainWrapper from "@/components/wrappers/MainWrapper";
import BlogImage from "@/components/blog/BlogImage";

const ProjectDetails = async ({params}: {params: {slug: string}}) => {
  const populateProps: string[] = [
    "dynamicZone.bigImage",
    "dynamicZone.smallImage",
    "dynamicZone.mediusImage",
    "dynamicZone.image",
    "dynamicZone.rich",
    "dynamicZone.imageWithText",
    "thumbnail",
  ];
  const blogRequest = await getter<BlogListResponseDataItem[]>(
    `blogs?filters[slug][$eq]=${params.slug}&populate=${populateProps.join()}`
  );
  const blogData = blogRequest?.data?.[0]?.attributes;
  const handleDynamicZone = () => {
    if (!blogData?.dynamicZone) return [];
    return blogData.dynamicZone.map((el, idx) => {
      const component = el as BlogsDynamicZoneComponent;
      const key = `${component.__component}-${idx}`;

      switch (component.__component) {
        case BlogComponent.richText:
          return <HtmlStringParser key={key} htmlString={component.rich} />;
        case BlogComponent.bigImage:
          return <BlogImage key={key} imageType={"bigImage"} image={component.image} position={component.imagePosition} />;
        case BlogComponent.smallImage:
          return <BlogImage key={key} imageType={"smallImage"} image={component.image} position={component.imagePosition} />;
        case BlogComponent.mediumImage:
          return (
            <BlogImage key={key} imageType={"mediumImage"} image={component.image} position={component.imagePosition} />
          );
        case BlogComponent.youtube:
          return (
            <Stack
              component={"iframe"}
              sx={{aspectRatio: "16/9", borderRadius: "16px"}}
              frameBorder="0"
              allowFullScreen
              key={key}
              src={component.link}
            />
          );
        case BlogComponent.imageWithText:
          return (
            <Stack
              key={key}
              sx={{
                flexDirection: {lg: component.imagePosition == "left" ? "row-reverse" : "row"},
                gap: "40px",
              }}
            >
              <Stack sx={{flex: component.imageType === "horizontal" ? "1 1 0" : undefined, width: "100%"}}>
                <HtmlStringParser htmlString={component.text} />
              </Stack>
              <Stack
                sx={{
                  width: {xs: "100%", md: component.imageType === "horizontal" ? "100%" : "35%"},
                  flex: component.imageType === "horizontal" ? "1 1 0" : undefined,
                }}
              >
                <CustomImage
                  unoptimazed
                  path={component.image}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "16px",
                  }}
                />
              </Stack>
            </Stack>
          );
        default:
          return null;
      }
    });
  };

  return (
    <MainWrapper>
      <Stack sx={{width: "100%"}}>
        <Stack sx={{marginBottom: "58px", marginTop: "200px"}}>
          <Typography variant="d1">{blogData?.title}</Typography>
          <Typography variant="bm1" color={Colors.secondaryText}>
            {blogData?.subtitle}
          </Typography>
        </Stack>
        <Stack gap={"80px"}>{handleDynamicZone()}</Stack>
        <BlogCarousel slug={params.slug} title="Read More" />
      </Stack>
    </MainWrapper>
  );
};

export default ProjectDetails;
