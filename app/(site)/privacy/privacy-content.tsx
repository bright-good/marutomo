import type { PrivacyPage } from "./privacy-cms";
import type { CompanyInfo } from "../_shared/company-info-cms";

type PrivacyContentProps = {
  page: PrivacyPage;
  companyInfo: CompanyInfo;
};

export function PrivacyContent({ page, companyInfo }: PrivacyContentProps) {
  return (
    <div className="space-y-8 text-gray-700">
      <p>
        {companyInfo.fullName}
        {page.intro}
      </p>

      {page.sections.map((section) => (
        <div key={section.heading}>
          <h2 className="mb-3 text-xl font-bold text-gray-800">
            {section.heading}
          </h2>
          <p className={section.items ? "mb-2" : ""}>{section.content}</p>
          {section.items && (
            <ul className="ml-6 list-disc space-y-1">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {section.showCompanyInfo && (
            <div className="mt-4 rounded-lg bg-white p-4">
              <p className="font-bold">{companyInfo.fullName}</p>
              <p>〒{companyInfo.postalCode.replace("〒", "")}</p>
              <p>{companyInfo.address}</p>
              <p>TEL: {companyInfo.tel}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
