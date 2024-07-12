import {SeoComponent} from "@qubixstudio/sphere";
import gsap from "gsap/all";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {getter} from "./api";

export function formatNumber(num: number): string {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  } else {
    return num.toString();
  }
}
export const animatedPageIn = () => {
  const whitePageOut = document.getElementById("whitePageOut");
  const tl = gsap.timeline();
  if (whitePageOut) {
    tl.set(whitePageOut, {opacity: 1, zIndex: 99}).to(whitePageOut, {
      opacity: 0,
      duration: 0.3,
      ease: "linear",
      zIndex: -1,
    });
  }
};
export const animatedPageOut = (href: string, router: AppRouterInstance) => {
  const whitePageOut = document.getElementById("whitePageOut");
  const tl = gsap.timeline();
  if (whitePageOut) {
    tl.set(whitePageOut, {opacity: 0, zIndex: -1}).to(whitePageOut, {
      opacity: 1,
      duration: 0.3,
      zIndex: 99,
      ease: "linear",
      onComplete: () => {
        router.push(href);
      },
    });
  }
};
export const getSeo = async (href: string) => {
  const data = await getter<any>(`${href}?populate=Seo,Seo.metaSocials.image,Seo.otherMetas`);
  const seo = data.data?.attributes?.Seo as SeoComponent;
  if (!seo) {
    return;
  }
  const socialNetworks: any = {};
  seo?.metaSocials?.forEach((social) => {
    const projectImage = social.image?.data?.attributes?.url
      ? `${process.env.NEXT_PUBLIC_REST_API_URL}${social.image?.data?.attributes?.url}`
      : "/default-image.png";
    socialNetworks[social?.socialNetwork?.toLowerCase() ?? ""] = {
      title: social.title,
      description: social.description,
      images: [projectImage],
      card: "summary_large_image",
    };
    return data;
  });
  const otherMetas: any = {};
  seo?.otherMetas?.forEach((meta) => {
    otherMetas[meta.name ?? ""] = meta.content;
  });
  return {
    title: seo?.metaTitle,
    description: seo?.metaDescription,
    robots: seo?.metaRobots,
    openGraph: {
      ...otherMetas,
      ...socialNetworks,
      title: seo?.metaTitle,
      description: seo?.metaDescription,
    },
    ...socialNetworks,
    keywords: seo?.keywords,
    alternates: {
      canonical: seo?.canonicalURL,
    },
  };
};
