"use client";
import {Stack} from "@mui/material";
import React, {ReactNode} from "react";
import {usePathname, useRouter} from "next/navigation";
import {animatedPageOut} from "@/utils/functions";

type Props = {
  children: ReactNode;
  link: string;
};

function CustomLink({children, link}: Props): JSX.Element {
  const router = useRouter();
  const path = usePathname();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (path !== link) {
      animatedPageOut(link ?? "", router);
    }
  };
  return (
    <Stack sx={{cursor: "pointer"}} onClick={handleClick}>
      {children}
    </Stack>
  );
}

export default CustomLink;
