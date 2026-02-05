import Link from "next/link";
import { SiteHeader } from "./(site)/_layout/site-header";
import { SiteFooter } from "./(site)/_layout/site-footer";
import { getLayout } from "./(site)/_layout/layout-cms";
import { getCompanyInfo } from "./(site)/_shared/company-info-cms";

export default async function NotFound() {
  const [layout, companyInfo] = await Promise.all([
    getLayout(),
    getCompanyInfo(),
  ]);
  const { notFound } = layout;

  return (
    <>
      <SiteHeader
        companyInfo={companyInfo}
        navItems={layout.nav.items}
        phoneIcon={layout.phoneIcon}
      />
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-accent mb-4">
            {notFound.title}
          </h1>
          <h2 className="text-2xl font-semibold mb-4">{notFound.message}</h2>
          <p className="text-gray-600 mb-8">{notFound.description}</p>
          <Link
            href="/"
            className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            {notFound.buttonText}
          </Link>
        </div>
      </main>
      <SiteFooter companyInfo={companyInfo} footerSettings={layout.footer} />
    </>
  );
}
