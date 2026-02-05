import type { CompanyInfo } from "../_shared/company-info-cms";

type ContactInfoProps = {
  companyInfo: CompanyInfo;
};

export function ContactInfo({ companyInfo }: ContactInfoProps) {
  return (
    <div className="bg-beige rounded-xl p-6 sticky top-24">
      <h2 className="font-bold text-lg text-gray-800 mb-4">
        お電話でのお問い合わせ
      </h2>
      <p className="text-2xl font-black text-accent mb-2">{companyInfo.tel}</p>
      <p className="text-sm text-gray-600 mb-6">
        受付時間 {companyInfo.businessHours}
        <br />({companyInfo.holidays})
      </p>

      <h2 className="font-bold text-lg text-gray-800 mb-2">
        メールでのお問い合わせ
      </h2>
      <a
        href={`mailto:${companyInfo.email}`}
        className="text-accent hover:underline break-all"
      >
        {companyInfo.email}
      </a>

      <div className="mt-8 pt-6 border-t border-beige-dark">
        <h3 className="font-bold text-gray-800 mb-3">ご相談の流れ</h3>
        <ol className="text-sm text-gray-600 space-y-2">
          <li className="flex gap-2">
            <span className="text-wood font-bold">1.</span>
            <span>お問い合わせ</span>
          </li>
          <li className="flex gap-2">
            <span className="text-wood font-bold">2.</span>
            <span>ヒアリング</span>
          </li>
          <li className="flex gap-2">
            <span className="text-wood font-bold">3.</span>
            <span>無料お見積もり</span>
          </li>
          <li className="flex gap-2">
            <span className="text-wood font-bold">4.</span>
            <span>製作・納品</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
