import { microCMSClient } from "../_shared/microcms-client";

// ============================================================
// Types
// ============================================================

export type PrivacySection = {
  heading: string;
  content: string;
  items?: string[];
  showCompanyInfo?: boolean;
};

export type PrivacyPage = {
  title: string;
  intro: string;
  sections: PrivacySection[];
  lastUpdated?: string;
  metaTitle: string;
  metaDescription: string;
};

// ============================================================
// Fallback
// ============================================================

export const privacyPageFallback: PrivacyPage = {
  title: "プライバシーポリシー",
  metaTitle: "プライバシーポリシー | 丸友製作所",
  metaDescription:
    "丸友製作所のプライバシーポリシー。個人情報の取り扱いについてご説明します。",
  intro:
    "（以下「当社」）は、お客様の個人情報の重要性を認識し、以下の方針に基づき適切に管理・保護してまいります。",
  sections: [
    {
      heading: "1. 個人情報の収集・利用目的",
      content: "当社は、以下の目的でお客様の個人情報を収集・利用いたします。",
      items: [
        "お問い合わせへの対応",
        "お見積もりのご連絡",
        "製品・サービスに関するご案内",
      ],
    },
    {
      heading: "2. 第三者への開示",
      content:
        "法令に基づく場合を除き、お客様の同意なく第三者に個人情報を開示することはありません。",
    },
    {
      heading: "3. 個人情報の管理",
      content:
        "当社は、個人情報の正確性を保ち、不正アクセス・紛失・改ざん等を防止するため、適切なセキュリティ対策を講じます。",
    },
    {
      heading: "4. 個人情報の開示・訂正・削除について",
      content:
        "お客様ご本人から、当社が保有する個人情報の開示・訂正・削除等のご請求があった場合には、適切に対応いたします。",
    },
    {
      heading: "5. アクセス解析ツールについて",
      content:
        "当社ウェブサイトでは、サイト改善のためアクセス解析ツールを利用する場合があります。これらのツールにより収集される情報は匿名であり、個人を特定するものではありません。",
    },
    {
      heading: "6. プライバシーポリシーの改定",
      content:
        "本ポリシーの内容は、法令の改正やサービス内容の変更等に応じて、予告なく見直すことがあります。",
    },
    {
      heading: "7. お問い合わせ窓口",
      content: "個人情報に関するお問い合わせは、下記までご連絡ください。",
      showCompanyInfo: true,
    },
  ],
  lastUpdated: "2024-01-01",
};

// ============================================================
// Fetcher
// ============================================================

export async function getPrivacyPage(): Promise<PrivacyPage> {
  if (!microCMSClient) {
    return privacyPageFallback;
  }

  try {
    const response = await microCMSClient.get<PrivacyPage>({
      endpoint: "privacy-page",
    });
    return {
      title: response.title ?? privacyPageFallback.title,
      intro: response.intro ?? privacyPageFallback.intro,
      sections: response.sections ?? privacyPageFallback.sections,
      lastUpdated: response.lastUpdated ?? privacyPageFallback.lastUpdated,
      metaTitle: response.metaTitle ?? privacyPageFallback.metaTitle,
      metaDescription:
        response.metaDescription ?? privacyPageFallback.metaDescription,
    };
  } catch (error) {
    if (error instanceof Error && error.message.includes("404")) {
      return privacyPageFallback;
    }
    console.error("Failed to fetch privacy page:", error);
    return privacyPageFallback;
  }
}
