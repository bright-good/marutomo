import type { Metadata } from "next";
import { NavBreadcrumb } from "../_ui/nav-breadcrumb";
import { SectionHeader } from "../_ui/section-header";
import { CompanyInfoTable } from "./company-info-table";
import { CompanyAccessMap } from "./company-access-map";
import { CompanyContactCTA } from "./company-contact-cta";
import { getCompanyPage } from "./company-cms";
import { getCompanyInfo } from "../_shared/company-info-cms";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getCompanyPage();
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function CompanyPage() {
  const [page, companyInfo] = await Promise.all([
    getCompanyPage(),
    getCompanyInfo(),
  ]);

  return (
    <>
      <NavBreadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "会社概要", href: "/company" },
        ]}
      />

      <section className="bg-white px-6 py-16">
        <SectionHeader title="会社概要" />
        <div className="mx-auto max-w-4xl">
          <CompanyInfoTable companyInfo={companyInfo} />
          <CompanyAccessMap companyInfo={companyInfo} />
        </div>
      </section>

      <CompanyContactCTA cta={page.cta} companyInfo={companyInfo} />
    </>
  );
}
