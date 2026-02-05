import { microCMSClient } from "../_shared/microcms-client";

// ============================================================
// Types
// ============================================================

export type ContactPage = {
  metaTitle: string;
  metaDescription: string;
};

// ============================================================
// Fallback
// ============================================================

export const contactPageFallback: ContactPage = {
  metaTitle: "お問い合わせ・お見積もり | 丸友製作所",
  metaDescription:
    "丸友製作所へのお問い合わせ、無料お見積もりのご依頼はこちらから。",
};

// ============================================================
// Fetcher
// ============================================================

export async function getContactPage(): Promise<ContactPage> {
  if (!microCMSClient) {
    return contactPageFallback;
  }

  try {
    const response = await microCMSClient.get<ContactPage>({
      endpoint: "contact-page",
    });
    return {
      metaTitle: response.metaTitle ?? contactPageFallback.metaTitle,
      metaDescription:
        response.metaDescription ?? contactPageFallback.metaDescription,
    };
  } catch (error) {
    if (error instanceof Error && error.message.includes("404")) {
      return contactPageFallback;
    }
    console.error("Failed to fetch contact page:", error);
    return contactPageFallback;
  }
}
