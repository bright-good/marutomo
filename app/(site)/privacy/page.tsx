import type { Metadata } from "next";
import { NavBreadcrumb } from "../_ui/nav-breadcrumb";
import { SectionHeader } from "../_ui/section-header";
import { PrivacyContent } from "./privacy-content";
import { getPrivacyPage } from "./privacy-cms";
import { getCompanyInfo } from "../_shared/company-info-cms";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPrivacyPage();
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function PrivacyPage() {
  const [page, companyInfo] = await Promise.all([
    getPrivacyPage(),
    getCompanyInfo(),
  ]);

  return (
    <>
      <NavBreadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "プライバシーポリシー", href: "/privacy" },
        ]}
      />

      <section className="bg-beige px-6 py-12">
        <SectionHeader title={page.title} />
        <div className="mx-auto max-w-4xl">
          <PrivacyContent page={page} companyInfo={companyInfo} />
        </div>
      </section>
    </>
  );
}
