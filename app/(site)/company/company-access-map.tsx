import type { CompanyInfo } from "../_shared/company-info-cms";

type CompanyAccessMapProps = {
  companyInfo: CompanyInfo;
};

export function CompanyAccessMap({ companyInfo }: CompanyAccessMapProps) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        アクセス
      </h2>
      <div className="rounded-xl overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d853.8638113296406!2d135.54901493010556!3d34.54261120616511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000d9c6c6270ee1%3A0x36436e932157672d!2z77yI5qCq77yJ5Li45Y-L6KO95L2c5omA!5e0!3m2!1sja!2sjp!4v1645854569755!5m2!1sja!2sjp"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="会社所在地"
        />
      </div>
      {companyInfo.access && companyInfo.access.length > 0 && (
        <div className="mt-6 space-y-3">
          {companyInfo.access.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-700">
              <span className="text-xl">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
