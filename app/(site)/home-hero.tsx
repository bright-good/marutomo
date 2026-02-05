import Link from "next/link";
import type { HomeHero as HomeHeroType } from "./home-cms";

type HomeHeroProps = {
  hero: HomeHeroType;
};

export function HomeHero({ hero }: HomeHeroProps) {
  const backgroundUrl = hero.backgroundImage ?? "/home-hero-bg.webp";

  return (
    <section
      className="relative bg-cover bg-center text-white py-32 md:py-48 px-4 md:px-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.4)), url('${backgroundUrl}')`,
      }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 drop-shadow-lg leading-tight whitespace-pre-line">
          {hero.title}
        </h1>

        {hero.subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl mb-12 drop-shadow opacity-95">
            {hero.subtitle}
          </p>
        )}

        <div className="mx-auto w-full max-w-md px-6">
          <Link
            href={hero.ctaLink ?? "/contact"}
            className="block w-full rounded bg-accent px-12 md:px-14 py-4 text-center text-lg md:text-xl font-bold text-white shadow-xl transition-all hover:bg-accent-dark hover:-translate-y-0.5"
          >
            {hero.ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
