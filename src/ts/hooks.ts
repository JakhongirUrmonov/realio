import {ScrollSmootherContext} from "@/components/SmoothScroll";
import {useContext} from "react";
export function useScrollSmoother(): ScrollSmoother | undefined {
  const scrollSmoother = useContext(ScrollSmootherContext);

  if (!scrollSmoother) {
    console.error("useScrollSmoother must be used within a SmoothScroll parent");
  }
  return scrollSmoother;
}
