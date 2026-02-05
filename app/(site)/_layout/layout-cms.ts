import { microCMSClient } from "../_shared/microcms-client";

// ============================================================
// Types
// ============================================================

export type NavItem = {
  readonly label: string;
  readonly href: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export type NavSettings = {
  items: readonly NavItem[];
};

export type FooterSettings = {
  nav: readonly NavItem[];
  social: readonly SocialLink[];
  shopNote?: string;
  shopUrl?: string;
  copyright: string;
  labels: {
    tel: string;
    businessHours: string;
  };
};

export type MetaSettings = {
  title: string;
  description: string;
  favicon: string;
  lang: string;
};

export type NotFoundSettings = {
  title: string;
  message: string;
  description?: string;
  buttonText: string;
};

export type Layout = {
  meta: MetaSettings;
  nav: NavSettings;
  notFound: NotFoundSettings;
  footer: FooterSettings;
  phoneIcon?: string;
};

// ============================================================
// Fallback
// ============================================================

export const layoutFallback: Layout = {
  meta: {
    title: "丸友製作所 | 店舗向け厨房・鉄板設備の特注製作",
    description: "小規模店舗から複数店舗まで、業態に合わせて柔軟に対応します。",
    favicon: "/favicon.png",
    lang: "ja",
  },
  nav: {
    items: [
      { label: "会社概要", href: "/company" },
      { label: "お問い合わせ", href: "/contact" },
    ],
  },
  notFound: {
    title: "404",
    message: "ページが見つかりません",
    description: "お探しのページは存在しないか、移動した可能性があります。",
    buttonText: "トップページへ戻る",
  },
  footer: {
    nav: [
      { label: "会社概要", href: "/company" },
      { label: "お問い合わせ", href: "/contact" },
      { label: "プライバシーポリシー", href: "/privacy" },
    ],
    social: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/marutomo_hs",
        icon: "/icon-instagram.svg",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/marutomo.hs",
        icon: "/icon-facebook.svg",
      },
    ],
    shopNote: "一部製品はオンラインショップで購入できます",
    shopUrl: "https://marutomohs.theshop.jp",
    copyright: "© 2025 Marutomo Seisakusho. All Rights Reserved.",
    labels: {
      tel: "TEL:",
      businessHours: "営業時間:",
    },
  },
  phoneIcon: "📞",
};

// ============================================================
// Fetcher
// ============================================================

type CMSRawLayout = {
  siteTitle?: string;
  siteDescription?: string;
  navItems?: { label: string; href: string }[];
  notFoundTitle?: string;
  notFoundMessage?: string;
  notFoundDescription?: string;
  notFoundButtonText?: string;
  footerNav?: { label: string; href: string }[];
  footerSocial?: { name: string; url: string; icon: string }[];
  footerShopNote?: string;
  footerShopUrl?: string;
  footerCopyright?: string;
  footerTelLabel?: string;
  footerBusinessHoursLabel?: string;
  phoneIcon?: string;
};

export async function getLayout(): Promise<Layout> {
  if (!microCMSClient) {
    return layoutFallback;
  }

  try {
    const response = await microCMSClient.get<CMSRawLayout>({
      endpoint: "layout",
    });
    return transformToLayout(response);
  } catch (error) {
    if (error instanceof Error && error.message.includes("404")) {
      return layoutFallback;
    }
    console.error("Failed to fetch layout:", error);
    return layoutFallback;
  }
}

function transformToLayout(raw: CMSRawLayout): Layout {
  return {
    meta: {
      title: raw.siteTitle ?? layoutFallback.meta.title,
      description: raw.siteDescription ?? layoutFallback.meta.description,
      favicon: layoutFallback.meta.favicon,
      lang: layoutFallback.meta.lang,
    },
    nav: {
      items: raw.navItems ?? layoutFallback.nav.items,
    },
    notFound: {
      title: raw.notFoundTitle ?? layoutFallback.notFound.title,
      message: raw.notFoundMessage ?? layoutFallback.notFound.message,
      description:
        raw.notFoundDescription ?? layoutFallback.notFound.description,
      buttonText: raw.notFoundButtonText ?? layoutFallback.notFound.buttonText,
    },
    footer: {
      nav: raw.footerNav ?? layoutFallback.footer.nav,
      social: raw.footerSocial ?? layoutFallback.footer.social,
      shopNote: raw.footerShopNote ?? layoutFallback.footer.shopNote,
      shopUrl: raw.footerShopUrl ?? layoutFallback.footer.shopUrl,
      copyright: raw.footerCopyright ?? layoutFallback.footer.copyright,
      labels: {
        tel: raw.footerTelLabel ?? layoutFallback.footer.labels.tel,
        businessHours:
          raw.footerBusinessHoursLabel ??
          layoutFallback.footer.labels.businessHours,
      },
    },
    phoneIcon: raw.phoneIcon ?? layoutFallback.phoneIcon,
  };
}
