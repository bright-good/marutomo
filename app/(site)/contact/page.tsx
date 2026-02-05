import type { Metadata } from "next";
import { NavBreadcrumb } from "../_ui/nav-breadcrumb";
import { ContactHeader } from "./contact-header";
import { ContactInfo } from "./contact-info";
import { ContactForm } from "./contact-form";
import { getContactPage } from "./contact-cms";
import { getCompanyInfo } from "../_shared/company-info-cms";

export const dynamic = "force-static";

const googleFormUrl = process.env.GOOGLE_FORM_URL;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getContactPage();
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function ContactPage() {
  const companyInfo = await getCompanyInfo();

  return (
    <>
      <NavBreadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "お問い合わせ", href: "/contact" },
        ]}
      />

      <ContactHeader />

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <ContactInfo companyInfo={companyInfo} />
          </div>
          <ContactForm
            googleFormUrl={googleFormUrl}
            companyInfo={companyInfo}
          />
        </div>
      </section>
    </>
  );
}
