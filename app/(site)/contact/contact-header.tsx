import { SectionHeader } from "../_ui/section-header";

export function ContactHeader() {
  return (
    <section className="bg-beige px-6 py-12">
      <SectionHeader title="お問い合わせ・お見積もり" />
      <div className="mx-auto max-w-4xl text-center -mt-6">
        <div className="inline-block bg-accent/10 border border-accent rounded-lg px-6 py-3 mb-4">
          <p className="text-accent font-bold">図面がなくても大丈夫です</p>
        </div>
        <p className="text-gray-700">
          イメージやサイズをお聞かせください。最適なご提案をいたします。
        </p>
      </div>
    </section>
  );
}
