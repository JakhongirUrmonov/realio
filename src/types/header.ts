import {HeaderProductsDataInnerAttributesLogo} from "./REST/api/generated/models/HeaderProductsDataInnerAttributesLogo";

export type INavItemSub = {
  title?: string;
  data?: {
    link?: string;
    title?: string;
    desc?: string;
    icon?: HeaderProductsDataInnerAttributesLogo | undefined;
    notProduct?: boolean;
    isWallet?: boolean;
  }[];
};

export type INavItem = {
  text: string;
  link: string;
  external?: boolean;
  sub?: INavItemSub[];
  connect?: boolean;
  disabled?: boolean;
};
