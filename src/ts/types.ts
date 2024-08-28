import {OtherSeoComponentMetaSocialsInnerImage} from "@/types/REST/api/generated";

export enum BlogComponent {
  imageWithText = "blog.image-with-text",
  richText = "blog.richtext",
  bigImage = "blog.big-image",
  mediumImage = "blog.medium-image",
  smallImage = "blog.small-image",
}

export type BlogsDynamicZoneComponent = {
  id: number;
  __component: BlogComponent;
  image?: OtherSeoComponentMetaSocialsInnerImage;
  bigImage?: OtherSeoComponentMetaSocialsInnerImage;
  mediumImage?: OtherSeoComponentMetaSocialsInnerImage;
  smallImage?: OtherSeoComponentMetaSocialsInnerImage;
  rich?: string;
  text?: string;
  imagePosition?: "right" | "left";
};
export type BlogCarouselType = {
  image?: OtherSeoComponentMetaSocialsInnerImage;
  createdDate?: string;
  title?: string;
  link?: string;
};
