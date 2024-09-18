import {useState, useEffect, useCallback} from "react";
import {CSSJson, ScrollStateInRef, Size, useScrollRefProps} from "./types";

export const clamp = (num: number, min: number, max: number): number => Math.min(Math.max(num, min), max);

export const cssToReactJson = (css: string): CSSJson | undefined => {
  if (css === undefined) return;
  const cssArr = css.split(";");
  const cssJson: CSSJson = {};

  for (const rule of cssArr) {
    let [property, value] = rule.split(":");
    if (!property || !value) continue;

    // Trim spaces
    property = property.trim();
    value = value.trim();

    // Convert kebab-case to camelCase
    property = property.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });

    // Add to JSON object
    cssJson[property] = value;
  }

  return cssJson;
};

export function useWindowSize(): Size {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export type ScrollInfo = {
  scrollY: number;
  scrollDirection: "up" | "down" | "stop";
  currentScrollBottom: number;
  percentage: number;
  top: number;
  lastScrollTop?: number;
};

export const useScrollInRef = (props: useScrollRefProps): ScrollInfo => {
  const [state, setState] = useState<ScrollStateInRef>({
    lastScrollTop: 0,
    scrollY: window.scrollY,
    scrollDirection: "down",
    currentScrollBottom: document.documentElement.clientHeight,
    percentage: 0,
    top: 0,
  });
  const [rect, setRect] = useState<DOMRect>();
  const size = useWindowSize();

  useEffect(() => {
    setState((prevState: ScrollStateInRef) => {
      return {
        ...prevState,
        top: (props.ref.current?.getBoundingClientRect().top ?? 0) + document.documentElement.scrollTop,
      };
    });
  }, [size, rect, props.ref]);

  const handleScrollEvent = useCallback(() => {
    // html string parser updates a bit later after ref is set, so we need to check it
    if (rect?.height === 0 && props.ref.current) {
      setRect(props.ref.current.getBoundingClientRect());
    }
    const scrollYNeg = -window.scrollY;
    //ignoring overscroll
    if (scrollYNeg <= 0 && rect && size.height) {
      setState((prevState: ScrollStateInRef) => {
        const prevLastScrollTop = prevState.lastScrollTop;
        const height = document.documentElement.clientHeight + (props.offsetY ?? 0);
        const currentScrollBottom = scrollY + height + (props.offsetY ?? 0);
        const offset = currentScrollBottom - prevState.top;
        const targetY = height * props.targetYPercentage;
        const percentage100 = clamp(offset / (targetY / 100), 0, 100);
        const percentage = percentage100 / 100;

        let newTop = prevState.top;
        if (prevLastScrollTop === 0) {
          newTop = (props.ref.current?.getBoundingClientRect().top ?? 0) + document.documentElement.scrollTop;
        }
        return {
          scrollY: -scrollYNeg,
          scrollDirection: prevLastScrollTop >= -scrollYNeg ? (prevLastScrollTop === -scrollYNeg ? "stop" : "down") : "up",
          lastScrollTop: -scrollYNeg,
          currentScrollBottom: currentScrollBottom,
          percentage: percentage,
          top: newTop,
        };
      });
    }
  }, [props.targetYPercentage, rect, props.ref, props.offsetY, size]);

  useEffect(() => {
    if (props.ref.current) {
      setRect(props.ref.current.getBoundingClientRect());
    }
  }, [props.ref]);

  useEffect(() => {
    if (rect?.height !== 0 && size.height) {
      handleScrollEvent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rect, size]);

  useEffect(() => {
    const scrollListener = () => {
      handleScrollEvent();
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [handleScrollEvent]);

  useEffect(() => {
    handleScrollEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    scrollY: state.scrollY,
    scrollDirection: state.scrollDirection,
    currentScrollBottom: state.currentScrollBottom,
    percentage: state.percentage,
    top: state.top,
  };
};
