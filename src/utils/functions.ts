import gsap from "gsap/all";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export function formatNumber(num: number): string {
  const format = (n: number, divisor: number, suffix: string) => {
    const quotient = n / divisor;
    return Number.isInteger(quotient) ? quotient.toString() + suffix : quotient.toFixed(2).replace(/\.0+$/, "") + suffix;
  };

  if (num >= 1_000_000_000) {
    return format(num, 1_000_000_000, "B");
  } else if (num >= 1_000_000) {
    return format(num, 1_000_000, "M");
  } else if (num >= 1_000) {
    return format(num, 1_000, "K");
  } else {
    return num.toString();
  }
}

export const numbersFormatter = (num: number, digits: number) => {
  const lookup = [
    {value: 1, symbol: ""},
    {value: 1e3, symbol: "k"},
    {value: 1e6, symbol: "M"},
    {value: 1e9, symbol: "G"},
    {value: 1e12, symbol: "T"},
    {value: 1e15, symbol: "P"},
    {value: 1e18, symbol: "E"},
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(({value}) => num >= value);
  const result = item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  return result;
};

export const animatedPageIn = () => {
  const transitionElement = document.getElementById("whitePageOut");
  const loader = document.getElementById("loader");
  if (transitionElement) {
    gsap
      .timeline()
      .set(transitionElement, {
        opacity: 1,
        pointerEvents: "none", // Disable interactions during fade-in
      })
      .set(loader, {
        opacity: 1,
        pointerEvents: "none",
      })
      .to(loader, {
        opacity: 0,
        duration: 0.1, // Adjust the duration for the fade-in effect
      })
      .to(
        transitionElement,
        {
          opacity: 0,
          duration: 0.5, // Adjust the duration for the fade-in effect
          ease: "power2.out",
          onComplete: () => {
            transitionElement.style.pointerEvents = "none"; // Ensure clicks are re-enabled after fade
          },
        },
        "+0.2s"
      );
  }
};

export const animatedPageOut = (href: string, router: AppRouterInstance) => {
  const transitionElement = document.getElementById("whitePageOut");
  const loader = document.getElementById("loader");
  if (transitionElement) {
    gsap
      .timeline()
      .set(transitionElement, {
        opacity: 0,
        pointerEvents: "all", // Enable interactions for fade-out (if needed)
      })
      .set(loader, {
        opacity: 0,
        pointerEvents: "all", // Enable interactions for fade-out (if needed)
      })

      .to(transitionElement, {
        opacity: 1,
        duration: 0.5, // Adjust the duration for the fade-out effect
        ease: "power2.in",
        onComplete: () => {
          router.push(href);
        },
      })
      .to(
        loader,
        {
          opacity: 1,
          duration: 0.1, // Adjust the duration for the fade-out effect
        },
        "+0.2s"
      );
  }
};
