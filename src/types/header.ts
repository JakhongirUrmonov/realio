import {HeaderProductsDataInnerAttributesLogo} from "./REST/api/generated";

export type INavItemSub = {
  title?: string;
  data?: {
    link?: string;
    title?: string;
    desc?: string;
    icon?: HeaderProductsDataInnerAttributesLogo | undefined;
    notProduct?: boolean;
  }[];
};

export type INavItem = {
  text: string;
  link: string;
  sub?: INavItemSub[];
  connect?: boolean;
};
