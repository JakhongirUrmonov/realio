import {ReactElement} from "react";
import {Stack, Typography} from "@mui/material";
import {Colors} from "@/ts/consts";
import Image from "next/image";
import GoToUrlSvg from "@/assets/icons/gotourl.svg";
import CustomImage from "../CustomImage";
import {HomePageProductsDataInnerAttributesLogo} from "@/types/REST/api/generated/models/HomePageProductsDataInnerAttributesLogo";
import Link from "next/link";

export type CardType = {
  text: string;
  textUrl: string;
  info: string;
  imgSrc?: HomePageProductsDataInnerAttributesLogo;
};

const Card = (props: CardType): ReactElement => {
  return (
    <Stack sx={{width: "100%", height: "100%", backgroundColor: Colors.grey50, borderRadius: "24px"}}>
      <Stack width="100%" height="243px" sx={{display: "flex", alignItems: "center",position:'relative'}}>
        <CustomImage
          alt={props.text}
          path={props.imgSrc}
         fill
          style={{width: "100%", height: "100%", objectFit: "contain"}}
        />
      </Stack>
      <Stack sx={{display: "flex", alignItems: "center"}}>
        <Link href={props.textUrl} target="_blank" style={{textDecoration: "none", display: "flex", alignItems: "center"}}>
          <Typography variant="h4" sx={{color: Colors.mainText}}>
            {props.text}
          </Typography>
          <Stack>
            <Image src={GoToUrlSvg} alt={props.textUrl} width={20} height={20} />
          </Stack>
        </Link>
        <Typography variant="bm3" sx={{color: Colors.secondaryText, marginBottom: "40px", marginTop: "4px"}}>
          {props.info}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Card;
