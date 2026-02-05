import { HomeSectionHeader } from "./home-section-header";
import type { HomeFeatures as HomeFeaturesType } from "./home-cms";

type HomeFeaturesProps = {
  section: HomeFeaturesType;
};

export function HomeFeatures({ section }: HomeFeaturesProps) {
  return (
    <section className="bg-beige px-6 py-20">
      <HomeSectionHeader title={section.title} subtitle={section.subtitle} />
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {section.items.map((strength, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-wood rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-xl font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                {strength.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
