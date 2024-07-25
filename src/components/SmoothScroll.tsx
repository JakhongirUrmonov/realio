"use client";
import {Stack, StackProps} from "@mui/material";
import React, {createContext, useEffect, useState} from "react";
import {ScrollTrigger} from "gsap/all";
import gsap from "gsap";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {usePathname} from "next/navigation";
// import HeaderWrapper from "./header/HeaderWrapper";

type SmoothScrollProps = StackProps;

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

export const ScrollSmootherContext = createContext<ScrollSmoother | undefined>(undefined);

function SmoothScroll(props: SmoothScrollProps): JSX.Element {
  const ref = React.useRef<HTMLDivElement>(null);
  const {children, sx, ...boxProps} = props;
  const [scrollSmoother, setScrollSmoother] = useState<ScrollSmoother>();
  const path = usePathname();

  useEffect(() => {
    const context = gsap.context(() => {
      if (ref.current === null) return;
      const scrollSmoother = ScrollSmoother.create({
        smooth: 0.5, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
        //smoothTouch: 0.5, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
        wrapper: ref.current, // a selector or element to listen for scroll events on instead of the window
        normalizeScroll: false,
      });
      setScrollSmoother(scrollSmoother);
    });
    return () => context.kill();
  }, []);
  useEffect(() => {
    scrollSmoother?.scrollTop(0);
  }, [scrollSmoother, path]);
  return (
    <ScrollSmootherContext.Provider value={scrollSmoother}>
      {/* <HeaderWrapper /> */}
      <Stack ref={ref} id="smooth-wrapper" {...boxProps} sx={{height: "max-content", ...sx}}>
        <Stack sx={{height: "max-content", ...sx}} id={"smooth-content"}>
          {children}
        </Stack>
      </Stack>
    </ScrollSmootherContext.Provider>
  );
}

export default SmoothScroll;
