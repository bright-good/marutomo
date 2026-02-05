import Image from "next/image";
import Link from "next/link";
import type { CompanyInfo } from "../_shared/company-info-cms";
import type { FooterSettings } from "./layout-cms";

type SiteFooterProps = {
  companyInfo: CompanyInfo;
  footerSettings: FooterSettings;
};

export function SiteFooter({ companyInfo, footerSettings }: SiteFooterProps) {
  return (
    <footer className="bg-gray-800 px-4 py-12 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Company Info */}
        <div className="mb-8">
          <p className="text-gray-300">
            {companyInfo.postalCode} {companyInfo.address}
          </p>
          <p className="text-gray-300">
            {footerSettings.labels.tel} {companyInfo.tel} |{" "}
            {footerSettings.labels.businessHours} {companyInfo.businessHours}(
            {companyInfo.holidays})
          </p>
        </div>

        {/* Navigation */}
        <nav className="mb-8 flex flex-wrap gap-4 md:gap-8">
          {footerSettings.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Social Media */}
        <div className="mb-8 flex items-center gap-6">
          {footerSettings.social.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label={social.name}
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={32}
                height={32}
              />
            </a>
          ))}
        </div>

        {/* Online Shop */}
        {footerSettings.shopUrl && (
          <div className="mb-8 text-sm">
            <a
              href={footerSettings.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors underline"
            >
              {footerSettings.shopNote}
            </a>
          </div>
        )}

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-400">
          {footerSettings.copyright}
        </div>
      </div>
    </footer>
  );
}
