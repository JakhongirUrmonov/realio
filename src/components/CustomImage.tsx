"use client"; // Mark as client component
import {HeaderProductsDataInnerAttributesLogo} from "@/types/REST/api/generated";
import Image from "next/image";
import {ReactElement} from "react";

type Props = {
  src?: string;
  path?: HeaderProductsDataInnerAttributesLogo;
  alt?: string;
  className?: string;
  [key: string]: any;
};
const CustomImage = ({src, path, alt, className, ...props}: Props): ReactElement => {
  const url = src
    ? src
    : path?.data?.attributes?.url
    ? `${process.env.NEXT_PUBLIC_REST_API_URL}${path?.data?.attributes?.url}`
    : undefined;

  return <>{url && <Image src={url} alt={alt || "image"} priority unoptimized width={100} height={100} {...props} />}</>;
};

export default CustomImage;
