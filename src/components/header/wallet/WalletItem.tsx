import {Stack, Typography} from "@mui/material";
import React from "react";
import CustomImage from "../../CustomImage";
import {HeaderProductsDataInnerAttributesLogo} from "@/types/REST/api/generated/models/HeaderProductsDataInnerAttributesLogo";
import {Colors} from "@/ts/consts";
type Props = {
  title?: string;
  icon?: HeaderProductsDataInnerAttributesLogo | undefined;
  status?: string;
  onClick: () => void;
};

function WalletItem({title, icon, status, onClick}: Props): JSX.Element {
  return (
    <Stack
      sx={{cursor: "pointer", flexDirection: "row", gap: "16px", alignItems: "center", padding: "8px"}}
      onClick={status ? onClick : undefined}
    >
      <CustomImage path={icon} width={40} height={40} />
      <Stack>
        <Typography variant="bm4">{title}</Typography>
        {status && (
          <Typography variant="br4" color={Colors.secondaryText}>
            {status}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}

export default WalletItem;
