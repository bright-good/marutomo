"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CompanyInfo } from "../_shared/company-info-cms";
import type { NavItem } from "./layout-cms";

type SiteNavProps = {
  companyInfo: CompanyInfo;
  navItems: readonly NavItem[];
  phoneIcon?: string;
};

export function SiteNav({ companyInfo, navItems, phoneIcon }: SiteNavProps) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-3 sm:gap-6">
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm sm:text-base text-gray-700 font-medium transition-colors hover:text-accent whitespace-nowrap ${
              isActive ? "font-bold text-accent" : ""
            }`}
          >
            {item.label}
          </Link>
        );
      })}

      {/* 電話番号 */}
      <a
        href={`tel:${companyInfo.tel}`}
        className="flex items-center gap-1 text-accent font-bold text-sm sm:text-base whitespace-nowrap"
      >
        <span>{phoneIcon}</span>
        <span className="hidden sm:inline">{companyInfo.tel}</span>
      </a>
    </nav>
  );
}
