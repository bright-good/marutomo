import type { CompanyInfo } from "../_shared/company-info-cms";

type CompanyInfoTableProps = {
  companyInfo: CompanyInfo;
};

export function CompanyInfoTable({ companyInfo }: CompanyInfoTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-beige-dark">
      <table className="w-full">
        <tbody>
          <tr className="border-b border-beige-dark">
            <th className="bg-beige px-6 py-4 text-left font-bold text-gray-800 w-1/4">
              会社名
            </th>
            <td className="px-6 py-4 text-gray-700">{companyInfo.name}</td>
          </tr>
          <tr className="border-b border-beige-dark">
            <th className="bg-beige px-6 py-4 text-left font-bold text-gray-800">
              所在地
            </th>
            <td className="px-6 py-4 text-gray-700">
              {companyInfo.postalCode}
              <br />
              {companyInfo.address}
            </td>
          </tr>
          <tr className="border-b border-beige-dark">
            <th className="bg-beige px-6 py-4 text-left font-bold text-gray-800">
              電話番号
            </th>
            <td className="px-6 py-4 text-gray-700">{companyInfo.tel}</td>
          </tr>
          <tr className="border-b border-beige-dark">
            <th className="bg-beige px-6 py-4 text-left font-bold text-gray-800">
              FAX
            </th>
            <td className="px-6 py-4 text-gray-700">{companyInfo.fax}</td>
          </tr>
          <tr className="border-b border-beige-dark">
            <th className="bg-beige px-6 py-4 text-left font-bold text-gray-800">
              メール
            </th>
            <td className="px-6 py-4 text-gray-700">
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-accent hover:underline"
              >
                {companyInfo.email}
              </a>
            </td>
          </tr>
          <tr className="border-b border-beige-dark">
            <th className="bg-beige px-6 py-4 text-left font-bold text-gray-800">
              営業時間
            </th>
            <td className="px-6 py-4 text-gray-700">
              {companyInfo.businessHours}({companyInfo.holidays})
            </td>
          </tr>
          <tr>
            <th className="bg-beige px-6 py-4 text-left font-bold text-gray-800 align-top">
              事業内容
            </th>
            <td className="px-6 py-4 text-gray-700">
              <ul className="list-disc list-inside space-y-1">
                {companyInfo.businessLines.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
