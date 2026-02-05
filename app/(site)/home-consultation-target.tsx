import { HomeSectionHeader } from "./home-section-header";
import type { HomeConsultationTarget as HomeConsultationTargetType } from "./home-cms";

type HomeConsultationTargetProps = {
  section: HomeConsultationTargetType;
};

export function HomeConsultationTarget({
  section,
}: HomeConsultationTargetProps) {
  return (
    <section className="bg-white px-6 py-16">
      <HomeSectionHeader title={section.title} subtitle={section.subtitle} />
      <ul className="space-y-4 max-w-xl mx-auto">
        {section.items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-4 bg-beige rounded-lg px-6 py-4"
          >
            <span className="text-accent text-xl font-bold">✓</span>
            <span className="text-gray-800 font-medium">{item.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
