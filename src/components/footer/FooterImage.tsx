"use client";
import footerImage from "@/assets/images/footer.svg";
import footerMobileImage from "@/assets/images/footerMobile.svg";
import CustomImage from "../CustomImage";
import {theme} from "@/ts/theme";
import useMediaQuery from "@mui/material/useMediaQuery";
const FooterImage = () => {
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {mobile ? (
        <CustomImage
          src={footerMobileImage}
          style={{position: "absolute", width: "100vw", left: "-24px", height: "67%"}}
        />
      ) : (
        <CustomImage
          src={footerImage}
          style={{position: "absolute", top: 0, bottom: 0, width: "100%", right: 0, height: "100%"}}
        />
      )}
    </>
  );
};

export default FooterImage;
