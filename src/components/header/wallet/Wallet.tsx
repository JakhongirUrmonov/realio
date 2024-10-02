"use client";
import {Stack, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Colors} from "@/ts/consts";
import detectEthereumProvider from "@metamask/detect-provider";
import CloseIcon from "@/assets/icons/close.svg";
import WalletIcon from "@/assets/icons/realiowallet.svg";
import WalletItem from "./WalletItem";
import {HeaderWalletComponent, OtherSeoComponentMetaSocialsInnerImage} from "@/types/REST/api/generated";
import CustomImage from "@/components/CustomImage";
import Modal from "@mui/material/Modal";

type Props = {
  open: boolean;
  data?: HeaderWalletComponent;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

function WalletButton({open, data, setOpen}: Props): JSX.Element {
  const [keplrInstalled, setKeplrInstalled] = useState<boolean>(false);
  const [metaMaskInstalled, setMetaMaskInstalled] = useState<boolean>(false);
  const [image, setImage] = useState<OtherSeoComponentMetaSocialsInnerImage | undefined>(undefined);
  const [title, setTitle] = useState<string | undefined>(data?.title ?? "");
  const [desc, setDesc] = useState<string | undefined>(data?.description ?? "");
  const [error, setError] = useState<boolean>(false);
  const [keplrClicked, setKeplrClicked] = useState<boolean>(false);
  const [metaMaskClicked, setMetaMaskClicked] = useState<boolean>(false);
  const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const handleClose = () => {
    setOpen?.(false);
    setDesc(data?.description);
    setTitle(data?.title);
    setImage(undefined);
  };
  useEffect(() => {
    if (typeof (window as any).ethereum !== "undefined") {
      console.log("Metamask is installed");

      setMetaMaskInstalled(true);
      setError(false);
    } else {
      console.log("Metamask is not installed");
    }

    if (!(window as any).keplr) {
      console.error("Keplr extension not installed");

      return;
    } else {
      setKeplrInstalled(true);
      setError(false);
    }
  }, [data?.connection?.errorMessageSubtitle, data?.connection?.errorMessageTitle]);

  const handleRetry = () => {
    if (metaMaskClicked) connectToMetaMask();
    if (keplrClicked) connectToKeplr();
  };
  const connectToMetaMask = async () => {
    if (isMobile()) {
      // Redirect to Keplr mobile app
      window.location.href = "metamask://";
      return;
    }
    setKeplrClicked(false);
    setImage(data?.metamaskImage);
    setTitle(data?.connection?.awaitingMessageTitle);
    setError(false);
    setDesc(`${data?.connection?.awaitingMessageSubtitle} ${data?.metamaskTitle}`);
    if (!metaMaskInstalled) {
      setError(true);
      setTitle("MetaMask is not installed");
      setDesc(isMobile() ? "Please install MetaMask mobile app" : "Please install MetaMask extension");
      return;
    }

    try {
      const provider = await detectEthereumProvider();

      if (provider) {
        const chainId = await (provider as any).request({method: "eth_chainId"});
        if (chainId === process.env.NEXT_PUBLIC_REACT_APP_CHAIN_ID_HEX) {
          setTitle(data?.connection?.successMessageTitle);
        }
      }
      setTitle(data?.connection?.successMessageTitle);
      setDesc(`${data?.connection?.successMessageSubtitle}`);
    } catch (err) {
      console.log(err);
    }

    try {
      await (window as any).ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: process.env.NEXT_PUBLIC_REACT_APP_CHAIN_ID_HEX,
            rpcUrls: [process.env.NEXT_PUBLIC_REACT_APP_RPC_URL],
            chainName: "realio",
            nativeCurrency: {
              name: "ario",
              symbol: "RIO",
              decimals: 18,
            },
            blockExplorerUrls: [process.env.NEXT_PUBLIC_REACT_APP_BLOCK_EXPLORE_URL],
          },
        ],
      });
      setTitle(data?.connection?.successMessageTitle);
      setDesc(`${data?.connection?.successMessageSubtitle}`);
    } catch (error) {
      console.log(error);
      setTitle(data?.connection?.errorMessageTitle);
      setDesc(`${data?.connection?.errorMessageSubtitle}`);
      setError(true);
    }
  };
  const connectToKeplr = async () => {
    if (isMobile()) {
      // Redirect to Keplr mobile app
      window.location.href = "keplrwallet://";
      return;
    }
    setMetaMaskClicked(false);
    setImage(data?.keplrImage);
    setTitle(data?.connection?.awaitingMessageTitle ?? "Awaiting confirmation");
    setDesc(`${data?.connection?.awaitingMessageSubtitle} ${data?.keplrText}`);
    setError(false);
    if (!keplrInstalled) {
      setError(true);
      setTitle("Keplr is not installed");
      setTitle(isMobile() ? "Please install Keplr mobile app" : "Please install Keplr extension");
      return;
    }
    try {
      await (window as any).keplr.enable("realionetwork_3301-1");
      const chainId = "realionetwork_3301-1";
      (window as any).getOfflineSigner(chainId);
      setTitle(data?.connection?.successMessageTitle);
      setDesc(`${data?.connection?.successMessageSubtitle}`);
      setKeplrInstalled(true);
      setError(false);
    } catch (err) {
      console.log(err);
      setTitle("Connection is failed");
      setTitle(data?.connection?.errorMessageTitle);
      setDesc(`${data?.connection?.errorMessageSubtitle}`);
      setError(true);
    }

    try {
      await (window as any).keplr.experimentalSuggestChain({
        chainId: process.env.NEXT_PUBLIC_REACT_APP_CHAIN_ID,
        chainName: "realio",
        rpc: process.env.NEXT_PUBLIC_REACT_APP_RPC,
        rest: process.env.NEXT_PUBLIC_REACT_APP_REST,
        bip44: {
          coinType: 60,
        },
        bech32Config: {
          bech32PrefixAccAddr: "realio",
          bech32PrefixAccPub: "realio" + "pub",
          bech32PrefixValAddr: "realio" + "valoper",
          bech32PrefixValPub: "realio" + "valoperpub",
          bech32PrefixConsAddr: "realio" + "valcons",
          bech32PrefixConsPub: "realio" + "valconspub",
        },
        currencies: [
          {
            coinDenom: "RIO",
            coinMinimalDenom: "ario",
            coinDecimals: 18,
          },
          {
            coinDenom: "RST",
            coinMinimalDenom: "arst",
            coinDecimals: 18,
          },
        ],
        feeCurrencies: [
          {
            coinDenom: "RIO",
            coinMinimalDenom: "ario",
            coinDecimals: 18,
            gasPriceStep: {
              low: 7.0,
              average: 8.523,
              high: 10.404,
            },
          },
        ],
        stakeCurrency: {
          coinDenom: "RIO",
          coinMinimalDenom: "ario",
          coinDecimals: 18,
        },

        features: ["ibc-transfer", "ibc-go", "eth-address-gen", "eth-key-sign"],
      });
      setTitle(data?.connection?.successMessageTitle);
      setDesc(`${data?.connection?.successMessageSubtitle}`);
      setError(false);
    } catch (error) {
      console.error("Failed to connect to Keplr wallet:", error);
      setTitle(data?.connection?.errorMessageTitle);
      setDesc(`${data?.connection?.errorMessageSubtitle}`);
      setError(true);
    }
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(26, 26, 26, 0.65)",
        display: "flex",
      }}
    >
      <Stack
        sx={{
          "padding": {sm: "32px 24px 24px", xs: "24px"},
          "width": "100%",
          "boxSizing": "border-box",
          "maxWidth": {sm: "50vw", xs: "90vw"}, // Set your width here
          "borderRadius": "16px",
          "background": "white",
          "boxShadow":
            "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
          ":focus-visible": {
            outline: "none",
          },
        }}
      >
        <Stack sx={{justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginBottom: "24px"}}>
          <Typography variant="h4">Connect wallet</Typography>
          <Stack sx={{cursor: "pointer"}} onClick={() => setOpen?.(false)}>
            <CustomImage src={CloseIcon} width={32} height={32} alt="close button" />
          </Stack>
        </Stack>
        <Stack sx={{justifyContent: "space-between", flexDirection: {md: "row"}, gap: "24px"}}>
          <Stack
            sx={{
              width: {md: "30%", xs: "100%"},
              gap: "4px",
              flexDirection: {xs: "row", md: "column"},
              justifyContent: {xs: "space-between", sm: "start"},
            }}
          >
            <WalletItem
              title={data?.keplrText ?? ""}
              status={keplrInstalled ? "Installed" : undefined}
              onClick={() => {
                setKeplrClicked(true);
                connectToKeplr();
              }}
              icon={data?.keplrImage}
            />
            <WalletItem
              title={data?.metamaskTitle ?? ""}
              status={metaMaskInstalled ? "Installed" : undefined}
              icon={data?.metamaskImage}
              onClick={() => {
                setMetaMaskClicked(true);
                connectToMetaMask();
              }}
            />
          </Stack>
          <Stack
            sx={{
              border: `1px solid`,
              borderImage: "linear-gradient(180deg, rgba(245, 245, 245, 0.24) 0%, rgba(245, 245, 245, 0) 100%)",
              borderRadius: "16px",
              boxShadow: "0px 0px 0px 1px #F5F8F9",
              width: {md: "80%"},
              height: "319px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {image ? (
              <CustomImage src={image ? undefined : WalletIcon} path={image} width={48} height={48} />
            ) : (
              <CustomImage src={WalletIcon} width={48} height={48} />
            )}
            <Typography variant="bm3" sx={{marginTop: "16px", marginBottom: error ? "16px" : "8px"}}>
              {title ? title : ""}
            </Typography>
            {!error && (
              <Typography variant="br4" sx={{color: Colors.secondaryText, width: {sm: "60%"}, textAlign: "center"}}>
                {desc ? desc : ""}
              </Typography>
            )}
            {(error && metaMaskClicked && metaMaskInstalled) ||
              (keplrClicked && keplrInstalled && (
                <Typography
                  component="button"
                  variant="bm3"
                  onClick={handleRetry}
                  sx={{
                    "width": "auto",
                    "background": "linear-gradient(0deg, #0B1928, rgb(11 25 40 / 83%))",
                    "outline": "none",
                    "cursor": "pointer",
                    "padding": "12px 24px",
                    "gap": "8px",
                    "borderRadius": "100px",
                    "border": "1px solid",
                    "borderImageSource":
                      "linear-gradient(180deg, rgba(245, 245, 245, 0.24) 0%, rgba(245, 245, 245, 0) 100%)",
                    "height": "48px",
                    "boxShadow": "0px 0px 0px 1px #F5F8F9",
                    "justifyContent": "center",
                    "transition": "all 0.3s linear",
                    "color": Colors.whiteText,
                    "&:hover": {
                      background: "linear-gradient(0deg, rgb(11 25 40 / 77%), rgb(11 25 40 / 84%))",
                    },
                  }}
                >
                  {desc}
                </Typography>
              ))}
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
}

export default WalletButton;
