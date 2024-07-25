import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../ts/theme";
import {Inter} from "next/font/google";
import MainWrapper from "@/components/wrappers/MainWrapper";
import Footer from "@/components/footer/Footer";
import dynamic from "next/dynamic";
import Cookies from "@/components/Cookies";
import HeaderWrapper from "@/components/header/HeaderWrapper";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {ssr: false});
const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          overflowX: "hidden",
          overscrollBehavior: "none",
          margin: 0,
        }}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <HeaderWrapper />
            <SmoothScroll>
              <MainWrapper>
                {children}
                <Footer />
              </MainWrapper>
            </SmoothScroll>
            <Cookies />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
