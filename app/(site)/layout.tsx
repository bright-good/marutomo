import { SiteHeader } from "./_layout/site-header";
import { SiteFooter } from "./_layout/site-footer";
import { getLayout } from "./_layout/layout-cms";
import { getCompanyInfo } from "./_shared/company-info-cms";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [companyInfo, layout] = await Promise.all([
    getCompanyInfo(),
    getLayout(),
  ]);

  return (
    <>
      <SiteHeader
        companyInfo={companyInfo}
        navItems={layout.nav.items}
        phoneIcon={layout.phoneIcon}
      />
      <main>{children}</main>
      <SiteFooter companyInfo={companyInfo} footerSettings={layout.footer} />
    </>
  );
}
