import { microCMSClient } from "../_shared/microcms-client";

// ============================================================
// Types
// ============================================================

export type CompanyCTA = {
  title: string;
  subtitle?: string;
  note?: string;
  ctaText: string;
  ctaLink: string;
};

export type CompanyPage = {
  metaTitle: string;
  metaDescription: string;
  cta: CompanyCTA;
};

// ============================================================
// Fallback
// ============================================================

export const companyPageFallback: CompanyPage = {
  metaTitle: "会社概要 | 丸友製作所",
  metaDescription:
    "株式会社丸友製作所の会社情報。大阪・堺で店舗向け厨房・鉄板設備を製造。",
  cta: {
    title: "まずはお気軽にご相談ください",
    subtitle: "お電話でもメールでも、お気軽にお問い合わせください",
    note: "受付時間",
    ctaText: "お問い合わせ・お見積もり",
    ctaLink: "/contact",
  },
};

// ============================================================
// Fetcher
// ============================================================

type CMSRawCompanyPage = {
  metaTitle?: string;
  metaDescription?: string;
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaNote?: string;
  ctaText?: string;
  ctaLink?: string;
};

export async function getCompanyPage(): Promise<CompanyPage> {
  if (!microCMSClient) {
    return companyPageFallback;
  }

  try {
    const response = await microCMSClient.get<CMSRawCompanyPage>({
      endpoint: "company-page",
    });
    return transformToCompanyPage(response);
  } catch (error) {
    if (error instanceof Error && error.message.includes("404")) {
      return companyPageFallback;
    }
    console.error("Failed to fetch company page:", error);
    return companyPageFallback;
  }
}

function transformToCompanyPage(raw: CMSRawCompanyPage): CompanyPage {
  return {
    metaTitle: raw.metaTitle ?? companyPageFallback.metaTitle,
    metaDescription: raw.metaDescription ?? companyPageFallback.metaDescription,
    cta: {
      title: raw.ctaTitle ?? companyPageFallback.cta.title,
      subtitle: raw.ctaSubtitle ?? companyPageFallback.cta.subtitle,
      note: raw.ctaNote ?? companyPageFallback.cta.note,
      ctaText: raw.ctaText ?? companyPageFallback.cta.ctaText,
      ctaLink: raw.ctaLink ?? companyPageFallback.cta.ctaLink,
    },
  };
}
