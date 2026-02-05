import { microCMSClient } from "./microcms-client";

// ============================================================
// Types
// ============================================================

export type AccessInfo = {
  icon: string;
  text: string;
};

export type CompanyInfo = {
  name: string;
  fullName?: string;
  postalCode: string;
  address: string;
  tel: string;
  fax: string;
  email: string;
  url: string;
  businessHours: string;
  holidays: string;
  established: string;
  capital: string;
  representative: string;
  businessLines: string[];
  logo?: string;
  instagram?: string;
  facebook?: string;
  onlineShopUrl?: string;
  access?: AccessInfo[];
  metaTitle?: string;
  metaDescription?: string;
};

// ============================================================
// Fallback
// ============================================================

export const companyInfoFallback: CompanyInfo = {
  name: "丸友製作所",
  fullName: "株式会社 丸友製作所",
  postalCode: "〒587-0062",
  address: "大阪府堺市美原区太井360-13",
  tel: "072-362-6415",
  fax: "072-362-6416",
  email: "info@marutomo-ss.co.jp",
  url: "https://www.marutomo-ss.co.jp",
  businessHours: "9:00-17:00",
  holidays: "土日祝休み",
  established: "1974年(昭和49年)5月1日",
  capital: "1,000万円",
  representative: "下原 猛",
  businessLines: [
    "店舗向け厨房・鉄板設備の特注製作",
    "お好み焼きテーブル・カウンター製造販売",
    "ステンレス製厨房機器製造",
  ],
  logo: "/company-logo.webp",
  instagram: "https://www.instagram.com/marutomo_hs/",
  facebook: "https://www.facebook.com/marutomo.hs",
  onlineShopUrl: "https://marutomohs.theshop.jp",
  access: [
    { icon: "🚃", text: "南海高野線 萩原天神駅より徒歩22分" },
    { icon: "🚌", text: "南海バス美原金岡線 太井バス停より徒歩3分" },
  ],
};

// ============================================================
// Fetcher
// ============================================================

export async function getCompanyInfo(): Promise<CompanyInfo> {
  if (!microCMSClient) {
    return companyInfoFallback;
  }

  try {
    const response = await microCMSClient.get<CompanyInfo>({
      endpoint: "company-info",
    });
    return response;
  } catch (error) {
    if (error instanceof Error && error.message.includes("404")) {
      return companyInfoFallback;
    }
    console.error("Failed to fetch company info:", error);
    return companyInfoFallback;
  }
}
