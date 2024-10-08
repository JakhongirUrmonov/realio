"use client";
import {createTheme, Theme} from "@mui/material/styles";
import {Colors} from "./consts";
import {Instrument_Sans} from "next/font/google";

const instrument_Sans = Instrument_Sans({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
declare module "@mui/material/styles" {
  interface TypographyVariants {
    d1: React.CSSProperties;
    d1light: React.CSSProperties;
    bs1: React.CSSProperties;
    bs2: React.CSSProperties;
    bs3: React.CSSProperties;
    bs4: React.CSSProperties;
    bm1: React.CSSProperties;
    bm2: React.CSSProperties;
    bm3: React.CSSProperties;
    bm4: React.CSSProperties;
    br1: React.CSSProperties;
    br2: React.CSSProperties;
    br3: React.CSSProperties;
    br4: React.CSSProperties;
    c1: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    d1: React.CSSProperties;
    d1light: React.CSSProperties;
    bs1: React.CSSProperties;
    bs2: React.CSSProperties;
    bs3: React.CSSProperties;
    bs4: React.CSSProperties;
    bm1: React.CSSProperties;
    bm2: React.CSSProperties;
    bm3: React.CSSProperties;
    bm4: React.CSSProperties;
    br1: React.CSSProperties;
    br2: React.CSSProperties;
    br3: React.CSSProperties;
    br4: React.CSSProperties;
    c1: React.CSSProperties;
  }

  interface BreakpointOverrides {
    fullHD: true; // adds the `fullHD 1940` breakpoint
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    d1: true;
    bs1: true;
    bs2: true;
    bs3: true;
    bs4: true;
    bm1: true;
    bm2: true;
    bm3: true;
    bm4: true;
    br1: true;
    br2: true;
    br3: true;
    br4: true;
    c1: true;
    d1light: true;
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    mini: true; // adds the `mobile 375px` breakpoint
  }
}

function getTheme(): Theme {
  let theme = createTheme({
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            d1: "p",
            d1light: "p",
            bs1: "p",
            bs2: "p",
            bs3: "p",
            bs4: "p",
            bm1: "p",
            bm2: "p",
            bm3: "p",
            bm4: "p",
            br1: "p",
            br2: "p",
            br3: "p",
            br4: "p",
            c1: "p",
          },
        },
      },
    },
    breakpoints: {
      values: {
        //TODO update breakpoints
        xs: 0,
        mini: 400,
        sm: 582,
        md: 900,
        lg: 1220,
        xl: 1700,
        fullHD: 1940,
      },
    },
  });
  theme = createTheme(theme, {
    cssVariables: true,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 34,
          },
        },
      },
    },
    typography: {
      fontFamily: [instrument_Sans.style.fontFamily, "Arial", "Helvetica", "Verdana", "sans-serif"].join(","),
      allVariants: {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },
      d1: {
        lineHeight: "84px",
        fontSize: "56px",
        fontStyle: "normal",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "500",
        fontFamily: instrument_Sans.style.fontFamily,
        [theme.breakpoints.down("md")]: {
          fontSize: "32px",
          lineHeight: "48px",
        },
      },
      d1light: {
        lineHeight: "84px",
        fontSize: "56px",
        fontStyle: "normal",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "400",
        fontFamily: instrument_Sans.style.fontFamily,
        [theme.breakpoints.down("md")]: {
          fontSize: "32px",
          lineHeight: "48px",
        },
      },
      h1: {
        lineHeight: "60px",
        fontSize: "40px",
        fontStyle: "normal",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "500",
        fontFamily: instrument_Sans.style.fontFamily,
        [theme.breakpoints.down("md")]: {
          fontSize: "32px",
          lineHeight: "60px",
        },
      },
      h2: {
        lineHeight: "48px",
        fontSize: "32px",
        fontStyle: "normal",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "500",
        fontFamily: instrument_Sans.style.fontFamily,
        [theme.breakpoints.down("md")]: {
          fontSize: "28px",
          lineHeight: "48px",
        },
      },
      h3: {
        fontStyle: "normal",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "500",
        fontSize: "28px",
        lineHeight: "44px",
        fontFamily: instrument_Sans.style.fontFamily,
        [theme.breakpoints.down("md")]: {
          fontSize: "24px",
          lineHeight: "32px",
        },
      },
      h4: {
        fontStyle: "normal",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "500",
        fontSize: "24px",
        lineHeight: "36px",
        fontFamily: instrument_Sans.style.fontFamily,
        [theme.breakpoints.down("md")]: {
          fontSize: "22px",
          lineHeight: "36px",
        },
      },
      h5: {
        fontStyle: "normal",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "500",
        fontSize: "22px",
        lineHeight: "32px",
        fontFamily: instrument_Sans.style.fontFamily,
        [theme.breakpoints.down("md")]: {
          fontSize: "20px",
          lineHeight: "32px",
        },
      },
      bs1: {
        fontSize: "20px",
        lineHeight: "32px",
        fontStyle: "normal",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "600",
        fontFamily: instrument_Sans.style.fontFamily,
        [theme.breakpoints.down("md")]: {
          fontSize: "20px",
          lineHeight: "32px",
        },
      },
      bs2: {
        fontSize: "18px",
        lineHeight: "28px",
        fontStyle: "normal",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "600",
        fontFamily: instrument_Sans.style.fontFamily,
      },
      bs3: {
        fontStyle: "normal",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "24px",
        fontFamily: instrument_Sans.style.fontFamily,
        [theme.breakpoints.down("md")]: {
          fontSize: "16px",
          lineHeight: "24px",
        },
      },
      bs4: {
        fontStyle: "normal",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "600",
        fontSize: "14px",
        lineHeight: "20px",
        fontFamily: instrument_Sans.style.fontFamily,
        [theme.breakpoints.down("md")]: {
          fontSize: "14px",
          lineHeight: "20px",
        },
      },
      bm1: {
        fontSize: "20px",
        lineHeight: "32px",
        fontStyle: "normal",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "500",
        fontFamily: instrument_Sans.style.fontFamily,
      },
      bm2: {
        fontSize: "18px",
        lineHeight: "28px",
        fontStyle: "normal",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "500",
        fontFamily: instrument_Sans.style.fontFamily,
      },
      bm3: {
        fontStyle: "normal",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "24px",
        fontFamily: instrument_Sans.style.fontFamily,
      },
      bm4: {
        fontStyle: "normal",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "20px",
        fontFamily: instrument_Sans.style.fontFamily,
      },
      br1: {
        fontSize: "20px",
        lineHeight: "32px",
        fontStyle: "normal",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "400",
        fontFamily: instrument_Sans.style.fontFamily,
      },
      br2: {
        fontSize: "18px",
        lineHeight: "28px",
        fontStyle: "normal",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "400",
        fontFamily: instrument_Sans.style.fontFamily,
      },
      br3: {
        fontStyle: "normal",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "24px",
        fontFamily: instrument_Sans.style.fontFamily,
      },
      br4: {
        fontStyle: "normal",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "20px",
        fontFamily: instrument_Sans.style.fontFamily,
      },
      c1: {
        fontStyle: "normal",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "24px",
        fontFamily: instrument_Sans.style.fontFamily,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      },
    },
    palette: {
      primary: {
        main: Colors.mainText,
      },
      background: {
        default: "#FFFFFF",
      },
      text: {
        primary: Colors.mainText,
        secondary: Colors.secondaryText,
        disabled: "#727272",
      },
    },
  });
  return theme;
}
export const theme = getTheme();
