"use client";
import {Stack, Box} from "@mui/material";
import React, {useEffect} from "react";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import realio from "@/assets/icons/realio.png";
import district from "@/assets/icons/district.png";
import liquid from "@/assets/icons/liquid.png";
import freehold from "@/assets/icons/freehold.png";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import {theme} from "@/ts/theme";
gsap.registerPlugin(MotionPathPlugin, MorphSVGPlugin);

function HomeHero(): JSX.Element {
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const time = 300,
    animEase = "linear";
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("#districtIcon", {
        duration: time * 0.1,
        motionPath: {
          path: "#district",
          align: "#district",
          alignOrigin: [0.5, 0.5],
          // autoRotate: true,
          start: 0.5,
          end: 1,
        },
        yoyo: true,
        repeat: -1,
        ease: animEase,
      });
      gsap.to("#freeholdIcon", {
        duration: time * 0.15,
        motionPath: {
          path: "#freehold",
          align: "#freehold",
          alignOrigin: [0.5, 0.5],
          // autoRotate: true,
          start: 1,
          end: 0.5,
        },
        yoyo: true,
        repeat: -1,
        ease: animEase,
      });
      gsap.to("#liquidIcon", {
        duration: time * 0.17,
        motionPath: {
          path: "#liquid",
          align: "#liquid",
          alignOrigin: [0.5, 0.5],
          // autoRotate: true,
          start: 0.5,
          end: 1,
        },
        yoyo: true,
        repeat: -1,
        ease: animEase,
      });
      gsap.to("#realioIcon", {
        duration: time * 0.17,
        motionPath: {
          path: "#realio",
          align: "#realio",
          alignOrigin: [0.5, 0.5],
          // autoRotate: true,
          start: 1,
          end: 0.5,
        },
        yoyo: true,
        repeat: -1,
        ease: animEase,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Stack sx={{position: "absolute", top: 0, right: 0, left: "-24px", bottom: 0, width: {md: "auto", xs: "100vw"}}}>
      {!mobile ? (
        <Box
          component={"svg"}
          width="1204"
          height="563"
          viewBox="0 0 1204 563"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_125_5585)">
            <mask
              id="mask0_125_5585"
              style={{maskType: "alpha"}}
              maskUnits="userSpaceOnUse"
              x="-195"
              y="-100"
              width="1507"
              height="663"
            >
              <rect x="-195" y="-100" width="1507" height="663" fill="url(#paint0_linear_125_5585)" />
            </mask>
            <g mask="url(#mask0_125_5585)">
              <g opacity="0.24" filter="url(#filter0_f_125_5585)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M689.842 298H586.545C582.078 298 578.408 301.656 578.408 306.107V397.431C578.408 408.24 568.518 417.46 557.032 417.46H478.222C474.872 417.46 472 419.368 470.644 422.467C469.368 425.568 470.006 428.985 472.399 431.37L576.015 534.616C577.611 536.205 579.526 537 581.759 537H678.595C681.946 537 684.816 535.093 686.173 531.993C687.449 528.893 686.811 525.476 684.418 523.09L582.716 421.832L580.801 419.924L578.846 418.038C578.658 417.857 578.786 417.54 579.047 417.54V417.54C641.744 417.143 693.432 368.262 697.978 306.822C698.138 304.518 697.42 302.371 695.825 300.703C694.23 298.875 692.236 298 689.842 298Z"
                  fill="url(#paint1_linear_125_5585)"
                />
              </g>
              <path
                id="realio"
                d="M869.5 415.5C869.5 564.065 749.288 684.5 601 684.5C452.712 684.5 332.5 564.065 332.5 415.5C332.5 266.935 452.712 146.5 601 146.5C749.288 146.5 869.5 266.935 869.5 415.5Z"
                stroke="black"
                strokeOpacity="0.08"
              />
              <path
                id="liquid"
                d="M979.5 415.5C979.5 624.817 810.039 794.5 601 794.5C391.961 794.5 222.5 624.817 222.5 415.5C222.5 206.183 391.961 36.5 601 36.5C810.039 36.5 979.5 206.183 979.5 415.5Z"
                stroke="black"
                strokeOpacity="0.06"
              />
              <path
                id="freehold"
                d="M1085.5 415.5C1085.5 683.359 868.581 900.5 601 900.5C333.419 900.5 116.5 683.359 116.5 415.5C116.5 147.641 333.419 -69.5 601 -69.5C868.581 -69.5 1085.5 147.641 1085.5 415.5Z"
                stroke="black"
                strokeOpacity="0.04"
              />
              <path
                id="district"
                d="M1199.5 415.5C1199.5 746.319 931.542 1014.5 601 1014.5C270.458 1014.5 2.5 746.319 2.5 415.5C2.5 84.6811 270.458 -183.5 601 -183.5C931.542 -183.5 1199.5 84.6811 1199.5 415.5Z"
                stroke="black"
                strokeOpacity="0.04"
              />
              <g opacity="0.8" filter="url(#filter1_d_125_5585)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M691.699 295H586.59C582.044 295 578.31 298.733 578.31 303.277V396.511C578.31 407.547 568.246 416.959 556.558 416.959H476.366C472.957 416.959 470.035 418.907 468.656 422.071C467.357 425.236 468.006 428.726 470.441 431.16L575.875 536.566C577.499 538.189 579.447 539 581.72 539H680.254C683.664 539 686.585 537.053 687.966 533.888C689.264 530.723 688.615 527.235 686.179 524.799L582.694 421.423L580.745 419.475L578.754 417.548C578.563 417.364 578.694 417.041 578.96 417.041V417.041C642.757 416.635 695.352 366.732 699.978 304.007C700.14 301.654 699.41 299.463 697.787 297.759C696.164 295.893 694.134 295 691.699 295Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M691.699 295H586.59C582.044 295 578.31 298.733 578.31 303.277V396.511C578.31 407.547 568.246 416.959 556.558 416.959H476.366C472.957 416.959 470.035 418.907 468.656 422.071C467.357 425.236 468.006 428.726 470.441 431.16L575.875 536.566C577.499 538.189 579.447 539 581.72 539H680.254C683.664 539 686.585 537.053 687.966 533.888C689.264 530.723 688.615 527.235 686.179 524.799L582.694 421.423L580.745 419.475L578.754 417.548C578.563 417.364 578.694 417.041 578.96 417.041V417.041C642.757 416.635 695.352 366.732 699.978 304.007C700.14 301.654 699.41 299.463 697.787 297.759C696.164 295.893 694.134 295 691.699 295Z"
                  fill="url(#paint2_radial_125_5585)"
                />
                <path
                  d="M578.96 418.408V417.747L578.964 417.752L578.968 418.408C578.966 418.408 578.963 418.408 578.96 418.408ZM698.614 303.908C694.039 365.925 642.03 415.271 578.952 415.673C577.462 415.679 576.731 417.494 577.803 418.531L579.786 420.45L581.727 422.39L581.727 422.39L685.212 525.767C685.213 525.767 685.213 525.767 685.213 525.767C687.244 527.798 687.793 530.69 686.706 533.355C685.535 536.026 683.101 537.632 680.254 537.632H581.72C579.814 537.632 578.212 536.968 576.842 535.599L471.408 430.193C469.377 428.162 468.827 425.269 469.915 422.604C471.085 419.934 473.52 418.327 476.366 418.327H556.558C568.919 418.327 579.678 408.382 579.678 396.511V303.277C579.678 299.488 582.799 296.368 586.59 296.368H691.699C693.748 296.368 695.397 297.096 696.755 298.657L696.775 298.68L696.797 298.703C698.136 300.109 698.75 301.914 698.614 303.908Z"
                  stroke="url(#paint3_linear_125_5585)"
                  strokeWidth="2.73517"
                />
              </g>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_125_5585"
              x="406"
              y="234"
              width="356"
              height="367"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="32" result="effect1_foregroundBlur_125_5585" />
            </filter>
            <filter
              id="filter1_d_125_5585"
              x="462.507"
              y="295"
              width="242.986"
              height="254.986"
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
              <feOffset dy="5.49296" />
              <feGaussianBlur stdDeviation="2.74648" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0431373 0 0 0 0 0.0980392 0 0 0 0 0.156863 0 0 0 0.03 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_125_5585" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_125_5585" result="shape" />
            </filter>
            <linearGradient
              id="paint0_linear_125_5585"
              x1="558.5"
              y1="-100"
              x2="558.5"
              y2="563"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.792897" stopColor="#D9D9D9" />
              <stop offset="0.936436" stopColor="#737373" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear_125_5585" x1="584" y1="298" x2="584" y2="537" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D23EB7" />
              <stop offset="0.745" stopColor="#3E6DD2" />
            </linearGradient>
            <radialGradient
              id="paint2_radial_125_5585"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(584 303.23) rotate(76.7389) scale(255.727 243.147)"
            >
              <stop stopColor="#707D8A" stopOpacity="0" />
              <stop offset="1" stopColor="#707D8A" stopOpacity="0.06" />
            </radialGradient>
            <linearGradient
              id="paint3_linear_125_5585"
              x1="517.72"
              y1="311.275"
              x2="636.024"
              y2="526.426"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <clipPath id="clip0_125_5585">
              <rect width="1204" height="563" fill="white" />
            </clipPath>
          </defs>
        </Box>
      ) : (
        <Box sx={{width: "100%"}} component={"svg"} viewBox="0 0 393 401" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_128_5586)">
            <mask
              id="mask0_128_5586"
              style={{maskType: "alpha"}}
              maskUnits="userSpaceOnUse"
              x="-260"
              y="0"
              width="865"
              height="380"
            >
              <rect x="-259.516" width="863.741" height="380" fill="url(#paint0_linear_128_5586)" />
            </mask>
            <g mask="url(#mask0_128_5586)">
              <g opacity="0.24" filter="url(#filter0_f_128_5586)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M247.634 228.114H188.429C185.868 228.114 183.765 230.21 183.765 232.761V285.103C183.765 291.299 178.097 296.583 171.513 296.583H126.343C124.423 296.583 122.777 297.677 122 299.453C121.268 301.23 121.634 303.189 123.006 304.555L182.394 363.731C183.308 364.642 184.406 365.098 185.686 365.098H241.187C243.108 365.098 244.753 364.005 245.531 362.228C246.262 360.451 245.897 358.492 244.525 357.125L186.234 299.089L185.137 297.995L184.016 296.914C183.908 296.811 183.982 296.629 184.131 296.629V296.629C220.066 296.401 249.691 268.385 252.297 233.171C252.388 231.85 251.977 230.62 251.063 229.663C250.149 228.616 249.006 228.114 247.634 228.114Z"
                  fill="url(#paint1_linear_128_5586)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M247.634 228.114H188.429C185.868 228.114 183.765 230.21 183.765 232.761V285.103C183.765 291.299 178.097 296.583 171.513 296.583H126.343C124.423 296.583 122.777 297.677 122 299.453C121.268 301.23 121.634 303.189 123.006 304.555L182.394 363.731C183.308 364.642 184.406 365.098 185.686 365.098H241.187C243.108 365.098 244.753 364.005 245.531 362.228C246.262 360.451 245.897 358.492 244.525 357.125L186.234 299.089L185.137 297.995L184.016 296.914C183.908 296.811 183.982 296.629 184.131 296.629V296.629C220.066 296.401 249.691 268.385 252.297 233.171C252.388 231.85 251.977 230.62 251.063 229.663C250.149 228.616 249.006 228.114 247.634 228.114Z"
                  fill="url(#paint2_radial_128_5586)"
                />
              </g>
              <path
                id="realio"
                d="M350.605 295.459C350.605 380.61 281.705 449.637 196.714 449.637C111.723 449.637 42.8227 380.61 42.8227 295.459C42.8227 210.309 111.723 141.281 196.714 141.281C281.705 141.281 350.605 210.309 350.605 295.459Z"
                stroke="black"
                stroke-opacity="0.08"
                stroke-width="0.573152"
              />
              <path
                id="liquid"
                d="M413.652 295.461C413.652 415.431 316.525 512.686 196.714 512.686C76.9027 512.686 -20.2242 415.431 -20.2242 295.461C-20.2242 175.491 76.9027 78.2363 196.714 78.2363C316.525 78.2363 413.652 175.491 413.652 295.461Z"
                stroke="black"
                stroke-opacity="0.06"
                stroke-width="0.573152"
              />
              <path
                id="freehold"
                d="M474.407 295.459C474.407 448.983 350.079 573.438 196.714 573.438C43.3493 573.438 -80.9781 448.983 -80.9781 295.459C-80.9781 141.936 43.3493 17.4804 196.714 17.4804C350.079 17.4804 474.407 141.936 474.407 295.459Z"
                stroke="black"
                stroke-opacity="0.03"
                stroke-width="0.573152"
              />
              <path
                id="district"
                d="M539.745 295.461C539.745 485.071 386.165 638.779 196.714 638.779C7.26282 638.779 -146.318 485.071 -146.318 295.461C-146.318 105.851 7.26282 -47.8572 196.714 -47.8572C386.165 -47.8572 539.745 105.851 539.745 295.461Z"
                stroke="black"
                stroke-opacity="0.04"
                stroke-width="0.573152"
              />
              <g opacity="0.8" filter="url(#filter1_d_128_5586)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M248.698 226.396H188.454C185.849 226.396 183.709 228.535 183.709 231.14V284.577C183.709 290.902 177.941 296.297 171.242 296.297H125.279C123.326 296.297 121.651 297.414 120.86 299.227C120.116 301.041 120.488 303.041 121.883 304.436L182.313 364.85C183.244 365.78 184.361 366.245 185.663 366.245H242.138C244.093 366.245 245.767 365.129 246.558 363.315C247.302 361.501 246.93 359.502 245.534 358.106L186.221 298.856L185.104 297.739L183.963 296.635C183.854 296.529 183.929 296.344 184.081 296.344V296.344C220.646 296.111 250.792 267.509 253.443 231.558C253.536 230.21 253.118 228.954 252.187 227.978C251.257 226.908 250.094 226.396 248.698 226.396Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M248.698 226.396H188.454C185.849 226.396 183.709 228.535 183.709 231.14V284.577C183.709 290.902 177.941 296.297 171.242 296.297H125.279C123.326 296.297 121.651 297.414 120.86 299.227C120.116 301.041 120.488 303.041 121.883 304.436L182.313 364.85C183.244 365.78 184.361 366.245 185.663 366.245H242.138C244.093 366.245 245.767 365.129 246.558 363.315C247.302 361.501 246.93 359.502 245.534 358.106L186.221 298.856L185.104 297.739L183.963 296.635C183.854 296.529 183.929 296.344 184.081 296.344V296.344C220.646 296.111 250.792 267.509 253.443 231.558C253.536 230.21 253.118 228.954 252.187 227.978C251.257 226.908 250.094 226.396 248.698 226.396Z"
                  fill="url(#paint3_radial_128_5586)"
                />
                <path
                  d="M184.081 297.128V296.749L184.084 296.751L184.086 297.128C184.085 297.128 184.083 297.128 184.081 297.128ZM252.661 231.504C250.038 267.048 220.23 295.329 184.078 295.56C183.223 295.563 182.804 296.603 183.418 297.198L184.55 298.293L184.559 298.302L185.667 299.41L185.667 299.41L244.98 358.66C244.98 358.66 244.98 358.661 244.98 358.661C246.145 359.825 246.459 361.483 245.836 363.01C245.165 364.541 243.77 365.461 242.138 365.461H185.663C184.571 365.461 183.653 365.08 182.868 364.296L122.438 303.882C121.274 302.718 120.959 301.06 121.582 299.533C122.253 298.002 123.648 297.081 125.279 297.081H171.242C178.326 297.081 184.493 291.381 184.493 284.577V231.14C184.493 228.969 186.282 227.18 188.454 227.18H248.698C249.872 227.18 250.818 227.597 251.596 228.492L251.607 228.505L251.62 228.518C252.388 229.325 252.74 230.36 252.661 231.504Z"
                  stroke="url(#paint4_linear_128_5586)"
                  stroke-width="1.56767"
                />
              </g>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_128_5586"
              x="84.9491"
              y="191.433"
              width="204.042"
              height="210.347"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="18.3409" result="effect1_foregroundBlur_128_5586" />
            </filter>
            <filter
              id="filter1_d_128_5586"
              x="117.336"
              y="226.396"
              width="139.268"
              height="146.146"
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
              <feOffset dy="3.1483" />
              <feGaussianBlur stdDeviation="1.57415" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0431373 0 0 0 0 0.0980392 0 0 0 0 0.156863 0 0 0 0.03 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_128_5586" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_128_5586" result="shape" />
            </filter>
            <linearGradient
              id="paint0_linear_128_5586"
              x1="172.355"
              y1="0"
              x2="172.355"
              y2="380"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.792897" stopColor="#D9D9D9" />
              <stop offset="0.936436" stopColor="#737373" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_128_5586"
              x1="186.97"
              y1="228.114"
              x2="186.97"
              y2="365.098"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D23EB7" />
              <stop offset="0.745" stopColor="#3E6DD2" />
            </linearGradient>
            <radialGradient
              id="paint2_radial_128_5586"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(186.97 232.735) rotate(90) scale(132.363 126.271)"
            >
              <stop stopColor="#707D8A" stopOpacity="0.06" />
              <stop offset="1" stopColor="#707D8A" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint3_radial_128_5586"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(186.97 231.113) rotate(76.7389) scale(146.571 139.361)"
            >
              <stop stopColor="#707D8A" stopOpacity="0" />
              <stop offset="1" stopColor="#707D8A" stopOpacity="0.06" />
            </radialGradient>
            <linearGradient
              id="paint4_linear_128_5586"
              x1="148.982"
              y1="235.724"
              x2="216.788"
              y2="359.038"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <clipPath id="clip0_128_5586">
              <rect width="393" height="401" fill="white" />
            </clipPath>
          </defs>
        </Box>
      )}

      <Image
        id="realioIcon"
        alt="realio"
        src={realio}
        style={{
          willChange: "transform",
          position: "absolute",
          width: mobile ? "36px" : "64px",
          height: mobile ? "36px" : "64px",
        }}
      />
      <Image
        id="districtIcon"
        alt="district"
        src={district}
        style={{
          willChange: "transform",
          position: "absolute",
          width: mobile ? "36px" : "64px",
          height: mobile ? "36px" : "64px",
        }}
      />
      <Image
        id="freeholdIcon"
        alt="freehold"
        src={freehold}
        style={{
          willChange: "transform",
          position: "absolute",
          width: mobile ? "36px" : "64px",
          height: mobile ? "36px" : "64px",
        }}
      />
      <Image
        id="liquidIcon"
        alt="liquid"
        src={liquid}
        style={{
          willChange: "transform",
          position: "absolute",
          width: mobile ? "36px" : "64px",
          height: mobile ? "36px" : "64px",
        }}
      />
    </Stack>
  );
}

export default HomeHero;
