import { HomeHero } from "./home-hero";
import { HomeConsultationTarget } from "./home-consultation-target";
import { HomeFeatures } from "./home-features";
import { HomeCaseStudies } from "./home-case-studies";
import { HomeFirstTime } from "./home-first-time";
import { HomeContactCTA } from "./home-contact-cta";
import { getHomePage } from "./home-cms";
import { getCompanyInfo } from "./_shared/company-info-cms";

export const dynamic = "force-static";

export default async function HomePage() {
  const [homePage, companyInfo] = await Promise.all([
    getHomePage(),
    getCompanyInfo(),
  ]);

  return (
    <>
      <HomeHero hero={homePage.hero} />
      <HomeConsultationTarget section={homePage.consultationTarget} />
      <HomeFeatures section={homePage.features} />
      <HomeCaseStudies section={homePage.caseStudies} />
      <HomeFirstTime section={homePage.firstTime} />
      <HomeContactCTA cta={homePage.contactCTA} companyInfo={companyInfo} />
    </>
  );
}
