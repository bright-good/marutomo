import { microCMSClient } from "./_shared/microcms-client";

// ============================================================
// Types
// ============================================================

export type HomeHero = {
  backgroundImage?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
};

export type HomeConsultationTargetItem = {
  title: string;
};

export type HomeConsultationTarget = {
  title: string;
  subtitle?: string;
  items: HomeConsultationTargetItem[];
};

export type HomeFeatureItem = {
  title: string;
  description: string;
};

export type HomeFeatures = {
  title: string;
  subtitle?: string;
  items: HomeFeatureItem[];
};

export type HomeCaseStudyItem = {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
};

export type HomeCaseStudies = {
  title: string;
  subtitle?: string;
  items: HomeCaseStudyItem[];
};

export type HomeFirstTimeItem = {
  title: string;
};

export type HomeFirstTime = {
  title: string;
  subtitle?: string;
  items: HomeFirstTimeItem[];
};

export type HomeCTA = {
  title: string;
  subtitle?: string;
  note?: string;
  ctaText: string;
  ctaLink: string;
};

export type HomePage = {
  hero: HomeHero;
  consultationTarget: HomeConsultationTarget;
  features: HomeFeatures;
  caseStudies: HomeCaseStudies;
  firstTime: HomeFirstTime;
  contactCTA: HomeCTA;
};

// ============================================================
// Fallback
// ============================================================

export const homePageFallback: HomePage = {
  hero: {
    backgroundImage: "/home-hero-bg.webp",
    title: "店舗規模に合わせた\n厨房・鉄板設備の特注製作",
    subtitle: "小規模店舗から複数店舗まで、業態に合わせて柔軟に対応します。",
    ctaText: "相談する",
    ctaLink: "/contact",
  },
  consultationTarget: {
    title: "こんなお悩み、ありませんか？",
    subtitle:
      "既製品では解決できない厨房設備のお悩み、丸友製作所が解決します。",
    items: [
      { title: "お好み焼き・鉄板焼き店舗" },
      { title: "新規開業・改装" },
      { title: "既製品が現場に合わないケース" },
    ],
  },
  features: {
    title: "選ばれる3つの理由",
    subtitle: "創業50年以上の実績。設計から製作まで一貫対応します。",
    items: [
      {
        title: "現場合わせの設計・製作",
        description:
          "現場条件と業態を理解したうえで、設計から製作まで一貫して対応します。",
      },
      {
        title: "業態理解",
        description:
          "焼き・動線・使い勝手を熟知した、店舗に最適な設備をご提案します。",
      },
      {
        title: "厨房一式・複数店舗対応",
        description:
          "個人店から法人まで、1台から厨房一式まで柔軟に対応可能です。",
      },
    ],
  },
  caseStudies: {
    title: "納入実績（抜粋）",
    subtitle: "厨房設備専門メーカーとして、様々な現場で採用されています。",
    items: [
      {
        id: "1",
        title: "個人店向け鉄板設備",
        shortDescription: "小規模店舗・初出店に対応",
        image: "/home-case-small.webp",
      },
      {
        id: "2",
        title: "法人・チェーン店向け鉄板設備",
        shortDescription: "複数店舗・規格対応",
        image: "/home-case-chain.webp",
      },
    ],
  },
  firstTime: {
    title: "はじめての方も安心してご相談ください",
    subtitle: "「こんな感じにしたい」だけで大丈夫。一緒に形にしていきます。",
    items: [
      { title: "図面なし相談OK" },
      { title: "検討段階での相談OK" },
      { title: "住宅向け特注相談OK" },
    ],
  },
  contactCTA: {
    title: "まずはお気軽にご相談ください",
    subtitle:
      "見積もり前提でなくても大丈夫。「こんなことできる？」からお聞かせください。",
    note: "受付時間",
    ctaText: "相談する",
    ctaLink: "/contact",
  },
};

// ============================================================
// Fetcher
// ============================================================

type CMSRawHomePage = {
  heroBackgroundImage?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroCtaText?: string;
  heroCtaLink?: string;
  consultationTargetTitle?: string;
  consultationTargetSubtitle?: string;
  consultationTargetItems?: { title: string }[];
  featuresTitle?: string;
  featuresSubtitle?: string;
  featuresItems?: { title: string; description: string }[];
  caseStudiesTitle?: string;
  caseStudiesSubtitle?: string;
  firstTimeTitle?: string;
  firstTimeSubtitle?: string;
  firstTimeItems?: { title: string }[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaNote?: string;
  ctaText?: string;
  ctaLink?: string;
};

export async function getHomePage(): Promise<HomePage> {
  if (!microCMSClient) {
    return homePageFallback;
  }

  try {
    const response = await microCMSClient.get<CMSRawHomePage>({
      endpoint: "home-page",
    });
    return transformToHomePage(response);
  } catch (error) {
    if (error instanceof Error && error.message.includes("404")) {
      return homePageFallback;
    }
    console.error("Failed to fetch home page:", error);
    return homePageFallback;
  }
}

function transformToHomePage(raw: CMSRawHomePage): HomePage {
  return {
    hero: {
      backgroundImage:
        raw.heroBackgroundImage ?? homePageFallback.hero.backgroundImage,
      title: raw.heroTitle ?? homePageFallback.hero.title,
      subtitle: raw.heroSubtitle ?? homePageFallback.hero.subtitle,
      ctaText: raw.heroCtaText ?? homePageFallback.hero.ctaText,
      ctaLink: raw.heroCtaLink ?? homePageFallback.hero.ctaLink,
    },
    consultationTarget: {
      title:
        raw.consultationTargetTitle ??
        homePageFallback.consultationTarget.title,
      subtitle:
        raw.consultationTargetSubtitle ??
        homePageFallback.consultationTarget.subtitle,
      items:
        raw.consultationTargetItems ??
        homePageFallback.consultationTarget.items,
    },
    features: {
      title: raw.featuresTitle ?? homePageFallback.features.title,
      subtitle: raw.featuresSubtitle ?? homePageFallback.features.subtitle,
      items: raw.featuresItems ?? homePageFallback.features.items,
    },
    caseStudies: {
      title: raw.caseStudiesTitle ?? homePageFallback.caseStudies.title,
      subtitle:
        raw.caseStudiesSubtitle ?? homePageFallback.caseStudies.subtitle,
      items: homePageFallback.caseStudies.items,
    },
    firstTime: {
      title: raw.firstTimeTitle ?? homePageFallback.firstTime.title,
      subtitle: raw.firstTimeSubtitle ?? homePageFallback.firstTime.subtitle,
      items: raw.firstTimeItems ?? homePageFallback.firstTime.items,
    },
    contactCTA: {
      title: raw.ctaTitle ?? homePageFallback.contactCTA.title,
      subtitle: raw.ctaSubtitle ?? homePageFallback.contactCTA.subtitle,
      note: raw.ctaNote ?? homePageFallback.contactCTA.note,
      ctaText: raw.ctaText ?? homePageFallback.contactCTA.ctaText,
      ctaLink: raw.ctaLink ?? homePageFallback.contactCTA.ctaLink,
    },
  };
}
