import {ReactElement} from "react";
import {Box, SxProps} from "@mui/material";
type Props = {
  hover?: boolean;
  sx?: SxProps;
  onClick?: () => void;
};

export const HamburgerBackIcon = ({sx, onClick}: Props): ReactElement => {
  return (
    <Box
      component={"svg"}
      viewBox="0 0 52 52"
      sx={{width: "48px", height: "48px", ...sx}}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <g filter="url(#filter0_dd_51_3323)">
        <rect x="2" y="1" width="48" height="48" rx="24" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.4714 19.1953C28.7318 19.4556 28.7318 19.8777 28.4714 20.1381L23.6095 25L28.4714 29.8619C28.7318 30.1223 28.7318 30.5444 28.4714 30.8047C28.2111 31.0651 27.7889 31.0651 27.5286 30.8047L22.1953 25.4714C21.9349 25.2111 21.9349 24.7889 22.1953 24.5286L27.5286 19.1953C27.7889 18.9349 28.2111 18.9349 28.4714 19.1953Z"
          fill="#707D8A"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_51_3323"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_51_3323" />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.972549 0 0 0 0 0.976471 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_3323" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0431373 0 0 0 0 0.0980392 0 0 0 0 0.156863 0 0 0 0.08 0" />
          <feBlend mode="normal" in2="effect1_dropShadow_51_3323" result="effect2_dropShadow_51_3323" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_51_3323" result="shape" />
        </filter>
      </defs>
    </Box>
  );
};

export const HamburgerCloseIcon = ({sx, onClick}: Props): ReactElement => {
  return (
    <Box
      component={"svg"}
      viewBox="0 0 52 52"
      sx={{width: "48px", height: "48px", ...sx}}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <g filter="url(#filter0_dd_51_2859)">
        <rect x="2" y="1" width="48" height="48" rx="24" fill="white" />
        <path
          d="M21.8051 19.8618C21.5447 19.6014 21.1226 19.6014 20.8623 19.8618C20.6019 20.1221 20.6019 20.5442 20.8623 20.8046L25.0576 24.9999L20.8623 29.1952C20.6019 29.4555 20.6019 29.8777 20.8623 30.138C21.1226 30.3984 21.5447 30.3984 21.8051 30.138L26.0004 25.9427L30.1956 30.1379C30.4559 30.3983 30.878 30.3983 31.1384 30.1379C31.3987 29.8776 31.3987 29.4554 31.1384 29.1951L26.9432 24.9999L31.1384 20.8047C31.3987 20.5443 31.3987 20.1222 31.1384 19.8619C30.878 19.6015 30.4559 19.6015 30.1956 19.8619L26.0004 24.0571L21.8051 19.8618Z"
          fill="#707D8A"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_51_2859"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_51_2859" />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.972549 0 0 0 0 0.976471 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_2859" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0431373 0 0 0 0 0.0980392 0 0 0 0 0.156863 0 0 0 0.08 0" />
          <feBlend mode="normal" in2="effect1_dropShadow_51_2859" result="effect2_dropShadow_51_2859" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_51_2859" result="shape" />
        </filter>
      </defs>
    </Box>
  );
};

export const HamburgerIcon = ({sx, onClick}: Props): ReactElement => {
  return (
    <Box
      component={"svg"}
      viewBox="0 0 52 52"
      sx={{width: "48px", height: "48px", ...sx}}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <g filter="url(#filter0_dd_51_2128)">
        <rect x="2" y="1" width="48" height="48" rx="24" fill="white" />
        <path
          d="M19.333 21.0002C19.333 20.632 19.6315 20.3335 19.9997 20.3335H31.9997C32.3679 20.3335 32.6663 20.632 32.6663 21.0002C32.6663 21.3684 32.3679 21.6668 31.9997 21.6668L19.9997 21.6668C19.6315 21.6668 19.333 21.3684 19.333 21.0002Z"
          fill="#707D8A"
        />
        <path
          d="M19.333 25.0002C19.333 24.632 19.6315 24.3335 19.9997 24.3335L31.9997 24.3335C32.3679 24.3335 32.6663 24.632 32.6663 25.0002C32.6663 25.3684 32.3679 25.6668 31.9997 25.6668L19.9997 25.6668C19.6315 25.6668 19.333 25.3684 19.333 25.0002Z"
          fill="#707D8A"
        />
        <path
          d="M19.9997 28.3335C19.6315 28.3335 19.333 28.632 19.333 29.0002C19.333 29.3684 19.6315 29.6668 19.9997 29.6668L31.9997 29.6668C32.3679 29.6668 32.6663 29.3684 32.6663 29.0002C32.6663 28.632 32.3679 28.3335 31.9997 28.3335L19.9997 28.3335Z"
          fill="#707D8A"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_51_2128"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_51_2128" />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.972549 0 0 0 0 0.976471 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_2128" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0431373 0 0 0 0 0.0980392 0 0 0 0 0.156863 0 0 0 0.08 0" />
          <feBlend mode="normal" in2="effect1_dropShadow_51_2128" result="effect2_dropShadow_51_2128" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_51_2128" result="shape" />
        </filter>
      </defs>
    </Box>
  );
};

export const DownArrow = ({sx}: Props): ReactElement => {
  return (
    <Box
      component={"svg"}
      viewBox="0 0 16 16"
      sx={{width: "16px", height: "16px", ...sx}}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.19526 5.52827C2.45561 5.26792 2.87772 5.26792 3.13807 5.52827L8 10.3902L12.8619 5.52827C13.1223 5.26792 13.5444 5.26792 13.8047 5.52827C14.0651 5.78862 14.0651 6.21073 13.8047 6.47108L8.4714 11.8044C8.21106 12.0648 7.78895 12.0648 7.5286 11.8044L2.19526 6.47108C1.93491 6.21073 1.93491 5.78862 2.19526 5.52827Z"
      />
    </Box>
  );
};

export const RightArrow = ({sx, onClick}: Props): ReactElement => {
  return (
    <Box
      component={"svg"}
      viewBox="0 0 16 16"
      sx={{width: "16px", height: "16px", ...sx}}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.52827 2.19526C5.78862 1.93491 6.21073 1.93491 6.47108 2.19526L11.8044 7.5286C12.0648 7.78895 12.0648 8.21106 11.8044 8.4714L6.47108 13.8047C6.21073 14.0651 5.78862 14.0651 5.52827 13.8047C5.26792 13.5444 5.26792 13.1223 5.52827 12.8619L10.3902 8L5.52827 3.13807C5.26792 2.87772 5.26792 2.45561 5.52827 2.19526Z"
      />
    </Box>
  );
};
export const LeftArrow = ({sx, onClick}: Props): ReactElement => {
  return (
    <Box
      component={"svg"}
      viewBox="0 0 16 16"
      sx={{width: "16px", height: "16px", ...sx}}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4714 2.19526C10.7318 2.45561 10.7318 2.87772 10.4714 3.13807L5.60948 8L10.4714 12.8619C10.7318 13.1223 10.7318 13.5444 10.4714 13.8047C10.2111 14.0651 9.78895 14.0651 9.5286 13.8047L4.19526 8.4714C3.93491 8.21106 3.93491 7.78895 4.19526 7.5286L9.5286 2.19526C9.78895 1.93491 10.2111 1.93491 10.4714 2.19526Z"
      />
    </Box>
  );
};
