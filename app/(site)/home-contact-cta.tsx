import Link from "next/link";
import type { HomeCTA } from "./home-cms";
import type { CompanyInfo } from "./_shared/company-info-cms";

type HomeContactCTAProps = {
  cta: HomeCTA;
  companyInfo: CompanyInfo;
};

export function HomeContactCTA({ cta, companyInfo }: HomeContactCTAProps) {
  return (
    <section
      className="py-12 px-4 md:px-8 text-center text-white"
      style={{
        background: "linear-gradient(135deg, #8B6F47 0%, #A0826D 100%)",
      }}
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{cta.title}</h2>

        <p className="mb-6 opacity-90">{cta.subtitle}</p>

        <p className="text-2xl md:text-3xl font-black mb-4">
          {companyInfo.tel}
        </p>
        <p className="mb-6 opacity-95">
          {cta.note} {companyInfo.businessHours}({companyInfo.holidays})
        </p>
        <Link
          href={cta.ctaLink ?? "/contact"}
          className="mx-auto block w-full rounded bg-accent px-8 py-3 text-center font-bold text-white shadow-lg transition-all hover:bg-accent-dark hover:-translate-y-0.5 sm:w-auto sm:min-w-[16rem]"
        >
          {cta.ctaText}
        </Link>
      </div>
    </section>
  );
}
