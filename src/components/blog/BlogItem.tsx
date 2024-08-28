"use client";
import {Typography, Stack} from "@mui/material";
import {Colors} from "@/ts/consts";
import CustomImage from "@/components/CustomImage";
import {BlogCarouselType} from "@/ts/types";
import {useRef} from "react";
import {AspectRatioMode, useAspectRatio} from "@qubixstudio/sphere";
import Link from "next/link";
import {animatedPageOut} from "@/utils/functions";
import {useRouter} from "next/navigation";
type Props = {
  blog?: BlogCarouselType;
};

export default function BlogItem({blog}: Props) {
  const ref = useRef(null);
  const size = useAspectRatio(1, AspectRatioMode.heightFromWidth, ref);
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (blog?.link) {
      animatedPageOut(blog?.link ?? "", router);
    }
  };
  return (
    <Stack component={Link} onClick={handleClick} href={blog?.link ?? ""} ref={ref} sx={{textDecoration: "none"}}>
      <Stack
        sx={{
          cursor: "pointer",
          position: "relative",
          borderRadius: "16px",
          overflow:"hidden",
          height: size.height,
          ":hover":{
            "img":{transform: "scale(1.1)"},
          },
        }}
      >
        <CustomImage
          alt=""
          path={blog?.image}
          fill
          style={{
            transition: "transform 0.4s linear",
            objectFit: "cover",
          }}
        />
      </Stack>
      <Typography
        variant="bm4"
        sx={{marginTop: "24px", marginBottom: "8px", color: Colors.secondaryText, textDecoration: "none"}}
      >
        {blog?.createdDate}
      </Typography>
      <Typography variant="bm2" sx={{color: Colors.mainText, textDecoration: "none"}}>
        {blog?.title}
      </Typography>
    </Stack>
  );
}
