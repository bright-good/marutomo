import Image from "next/image";
import { HomeSectionHeader } from "./home-section-header";
import type { HomeCaseStudies as HomeCaseStudiesType } from "./home-cms";

type HomeCaseStudiesProps = {
  section: HomeCaseStudiesType;
};

export function HomeCaseStudies({ section }: HomeCaseStudiesProps) {
  return (
    <section className="bg-white px-6 py-16">
      <HomeSectionHeader title={section.title} subtitle={section.subtitle} />
      <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
        {section.items.map((caseStudy) => (
          <article
            key={caseStudy.id}
            className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-4/3">
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="mb-1 font-bold text-gray-800">
                {caseStudy.title}
              </h3>
              <p className="text-sm text-gray-600">
                {caseStudy.shortDescription}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="mx-auto max-w-4xl mt-12 text-center">
        <p className="text-gray-600 mb-2">
          その他の納入事例は、Instagramでもご紹介しています
        </p>
        <a
          href="https://www.instagram.com/marutomo_hs/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-600 hover:text-gray-800 font-medium"
        >
          現場写真を見る
          <span className="ml-1">→</span>
        </a>
      </div>
    </section>
  );
}
