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
  const transitionElement = document.getElementById("whitePageOut");

  if (transitionElement) {
    gsap.timeline()
      .set(transitionElement, {
        opacity: 1,
        pointerEvents: "none", // Disable interactions during fade-in
      })
      .to(transitionElement, {
        opacity: 0,
        duration: 0.5, // Adjust the duration for the fade-in effect
        ease: "power2.out",
        onComplete: () => {
          transitionElement.style.pointerEvents = "none"; // Ensure clicks are re-enabled after fade
        },
      });
  }
};

export const animatedPageOut = (href: string, router: AppRouterInstance) => {
  const transitionElement = document.getElementById("whitePageOut");

  if (transitionElement) {
    gsap.timeline()
      .set(transitionElement, {
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
  return;
  // return {
  //   title: seo?.metaTitle,
  //   description: seo?.metaDescription,
  //   robots: seo?.metaRobots,
  //   openGraph: {
  //     ...otherMetas,
  //     ...socialNetworks,
  //     title: seo?.metaTitle,
  //     description: seo?.metaDescription,
  //   },
  //   ...socialNetworks,
  //   keywords: seo?.keywords,
  //   alternates: {
  //     canonical: seo?.canonicalURL,
  //   },
  // };
};
