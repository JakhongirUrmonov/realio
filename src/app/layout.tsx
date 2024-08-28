import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../ts/theme";
import {Instrument_Sans} from "next/font/google";
import Footer from "@/components/footer/Footer";
import Script from "next/script";
import {HeaderListResponseDataItem, SocialListResponseDataItem} from "@/types/REST/api/generated";
import {getter} from "@/utils/api";
import Header from "@/components/header/Header";
import CookieContext from "./CookieContext";
import Cookies from "@/components/Cookies";
export const metadata = {
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-light.svg",
        href: "/favicon-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.svg",
        href: "/favicon-dark.svg",
      },
    ],
  },
};
const instrument_Sans = Instrument_Sans({
  weight: ["400",'500','600'],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const populateProps: string[] = [
    "products.logo",
    "headerTokens.icon",
    "connect.icon",
    "announcement",
    "walletButtons.image",
    "walletButtons.keplrImage",
    "walletButtons.metamaskImage",
    "walletButtons.connection",
  ];
  const header = await getter<HeaderListResponseDataItem>(`header?populate=${populateProps.join()}`);
  const socials = await getter<SocialListResponseDataItem>(`social?populate=socials`);
  return (
    <html lang="en">
      <body
        className={instrument_Sans.className}
        style={{
          margin: 0,
          overflowX: "hidden",
        }}
      >
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <CookieContext>
          <ThemeProvider theme={theme}>
              <Header socials={socials.data?.attributes?.socials} data={header.data?.attributes} />
              {children}
              <Cookies />
              <Footer />
          </ThemeProvider>
          </CookieContext>
        </AppRouterCacheProvider>
      </body>
      {/* Start of realionetwork Zendesk Widget script */}
      <Script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=9413ebf3-2962-4624-b274-d684225030b3" />
      {/* End of realionetwork Zendesk Widget script */}
    </html>
  );
}
