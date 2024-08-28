"use client";
import {Stack, SxProps} from "@mui/material";
import React, {ReactNode} from "react";
import {usePathname, useRouter} from "next/navigation";
import {animatedPageOut} from "@/utils/functions";

type Props = {
  children: ReactNode;
  link: string;
  sx?: SxProps;
};

function CustomLink({children, link, sx}: Props): JSX.Element {
  const router = useRouter();
  const path = usePathname();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (path !== link) {
      animatedPageOut(link ?? "", router);
    }
  };
  return (
    <Stack sx={{cursor: "pointer", ...sx}} onClick={handleClick}>
      {children}
    </Stack>
  );
}

export default CustomLink;
