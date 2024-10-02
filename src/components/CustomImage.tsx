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
  unoptimazed?: boolean;
  priority?: boolean;
  fill?: boolean;
};
const CustomImage = ({
  src,
  path,
  alt,
  className,
  height,
  width,
  sx,
  unoptimazed,
  priority,
  fill,
  ...props
}: Props): ReactElement => {
  const url = src
    ? src
    : path?.data?.attributes?.url
    ? `${process.env.NEXT_PUBLIC_REST_API_URL}${path?.data?.attributes?.url}`
    : undefined;
  const alternativeText = src ? alt : path?.data?.attributes?.alternativeText;
  return (
    <>
      {url && (
        <Image
          src={url}
          alt={alternativeText || "image"}
          priority={priority}
          unoptimized={unoptimazed}
          width={width ? width : fill ? undefined : 100}
          height={height ? height : fill ? undefined : 100}
          fill={fill}
          sizes={fill ? "100%" : undefined}
          {...props}
        />
      )}
    </>
  );
};

export default CustomImage;
