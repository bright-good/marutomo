import type { CompanyInfo } from "../_shared/company-info-cms";

type ContactFormProps = {
  googleFormUrl?: string;
  companyInfo: CompanyInfo;
};

export function ContactForm({ googleFormUrl, companyInfo }: ContactFormProps) {
  return (
    <div className="md:col-span-2">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        お問い合わせフォーム
      </h2>
      {googleFormUrl ? (
        <iframe
          src={googleFormUrl}
          width="100%"
          height="800"
          className="border-0 rounded-lg"
          title="お問い合わせフォーム"
        >
          読み込み中...
        </iframe>
      ) : (
        <div className="bg-beige rounded-xl p-8 text-center">
          <p className="text-gray-700 mb-4">
            フォームの準備中です。お手数ですが、お電話またはメールでお問い合わせください。
          </p>
          <a
            href={`tel:${companyInfo.tel.replace(/-/g, "")}`}
            className="inline-block bg-accent text-white font-bold px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
          >
            電話でお問い合わせ
          </a>
        </div>
      )}
    </div>
  );
}
