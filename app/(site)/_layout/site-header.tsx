import Link from "next/link";
import Image from "next/image";
import { SiteNav } from "./site-nav";
import type { CompanyInfo } from "../_shared/company-info-cms";
import type { NavItem } from "./layout-cms";

type SiteHeaderProps = {
  companyInfo: CompanyInfo;
  navItems: readonly NavItem[];
  phoneIcon?: string;
};

export function SiteHeader({
  companyInfo,
  navItems,
  phoneIcon,
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex h-16 sm:h-18 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src={companyInfo.logo ?? ""}
            alt={companyInfo.fullName ?? companyInfo.name}
            width={150}
            height={50}
            className="h-10 sm:h-12.5 w-auto"
            priority
          />
        </Link>

        {/* Navigation + Phone */}
        <SiteNav
          companyInfo={companyInfo}
          navItems={navItems}
          phoneIcon={phoneIcon}
        />
      </div>
    </header>
  );
}
