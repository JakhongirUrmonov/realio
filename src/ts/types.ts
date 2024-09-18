import {OtherSeoComponentMetaSocialsInnerImage} from "@/types/REST/api/generated";

export enum BlogComponent {
  imageWithText = "blog.image-with-text",
  richText = "blog.richtext",
  bigImage = "blog.big-image",
  mediumImage = "blog.medium-image",
  smallImage = "blog.small-image",
  youtube = "blog.youtube",
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
  link?: string;
  imagePosition?: "right" | "left";
  imageType?: "vertical" | "horizontal";
};
export type BlogCarouselType = {
  image?: OtherSeoComponentMetaSocialsInnerImage;
  createdDate?: string;
  title?: string;
  link?: string;
};

export type Size = {
  width: number | undefined;
  height: number | undefined;
};
export type ScrollState = {
  lastScrollTop: number;
  scrollY: number;
  scrollDirection: "down" | "up" | "stop";
};
export type ScrollStateInRef = ScrollState & {
  currentScrollBottom: number;
  percentage: number;
  top: number;
};
export type useScrollRefProps = {
  targetYPercentage: number;
  ref: React.RefObject<Element>;
  offsetY?: number;
};
export type CSSJson = {
  [key: string]: string;
};
