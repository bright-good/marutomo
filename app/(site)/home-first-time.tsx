import { HomeSectionHeader } from "./home-section-header";
import type { HomeFirstTime as HomeFirstTimeType } from "./home-cms";

type HomeFirstTimeProps = {
  section: HomeFirstTimeType;
};

export function HomeFirstTime({ section }: HomeFirstTimeProps) {
  return (
    <section className="bg-beige px-6 py-16">
      <HomeSectionHeader title={section.title} subtitle={section.subtitle} />
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto justify-items-center">
        {section.items.map((item, index) => (
          <li
            key={index}
            className="bg-white rounded-full px-6 py-3 text-gray-800 font-medium shadow-sm w-56 text-center flex items-center justify-center"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
