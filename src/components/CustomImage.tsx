"use client"; // Mark as client component
import {HeaderProductsDataInnerAttributesLogo} from "@/types/REST/api/generated/models/HeaderProductsDataInnerAttributesLogo";
import Image from "next/image";
import {ReactElement} from "react";

type Props = {
  src?: string;
  path?: HeaderProductsDataInnerAttributesLogo;
  alt?: string;
  className?: string;
  [key: string]: any;
  height?: number;
  width?: number;
};
const CustomImage = ({src, path, alt, className, height, width, ...props}: Props): ReactElement => {
  const url = src
    ? src
    : path?.data?.attributes?.url
    ? `${process.env.NEXT_PUBLIC_REST_API_URL}${path?.data?.attributes?.url}`
    : undefined;

  return (
    <>
      {url && (
        <Image
          src={url}
          alt={alt || "image"}
          priority
          unoptimized
          width={width ? width : 100}
          height={height ? height : 100}
          {...props}
        />
      )}
    </>
  );
};

export default CustomImage;
