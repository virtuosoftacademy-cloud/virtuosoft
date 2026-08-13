
import type { ComponentType } from 'react';
import { notFound } from 'next/navigation';
import { ReactLenis } from 'lenis/react';
import Hero, { type HeroVariant } from '../../common/Hero';
import ValueSection from '../../common/ValueSection';
import {  AppDevHero, AppModHero, CustomEmpower, CustomHero, DataMigHero, EmpowerAppMod, EmpowerDataMig, EmpowerThirdParty, stepsDataAppDev, stepsDataAppMod, stepsDataCustomSoftware, stepsDataMig, stepsDataThirdParty, ThirdPartyHero, valueData, valueDataAppDev, valueDataAppMod, valueDataMig, valueDataThirdParty, type ValueSectionData, type TimeLineData, type EmpowerData } from '../constant';
import TimeLine from '../../common/TimeLine';
import Cta from '@/components/common/Cta';
import { Faq_softwareeng_ApplicationDevelopment, Faq_softwareeng_ApplicationModernization, Faq_softwareeng_databaseMigration, Faq_softwareeng_SoftwareDevelopment, Faq_softwareeng_thirdPartyIntegration } from '@/app/_constant';
import Blogs from '@/app/(pages)/blogs/page';
import Success from '../../common/Success';
import Faq from '@/components/common/Faq';
import Engage from '../../common/Engage';
import Empower from '../../common/Empower';

// The section list is intentionally heterogeneous: each entry pairs a
// component with the exact prop shape that component expects. `ElementType`
// is React's own type for "any renderable component/tag", used here because
// the list mixes components with entirely different prop signatures.
interface ServiceSection {
  Component: ComponentType<any>; // heterogeneous section components (Hero, ValueSection, TimeLine, Empower, Faq, ...) each take different prop shapes
  props?: object;
}

interface Service {
  slug: string;
  title: string;
  heroData: HeroVariant;
  value?: ValueSectionData;
  Data?: EmpowerData;
  timeLine?: TimeLineData;
  sections: ServiceSection[];
  // Not populated by any entry below; kept optional so the pre-existing
  // `service.hero?.bottomDescription` lookup in generateMetadata still type-checks.
  hero?: { bottomDescription?: string };
}

// ────────────────────────────────────────────────
//  All services (array — easy to extend)
const services: Service[] = [
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    heroData: CustomHero,
    value: valueData[0],
    Data: CustomEmpower[0],
    timeLine: stepsDataCustomSoftware[0],
    sections: [
      { Component: Hero, props: CustomHero },
      { Component: ValueSection, props: valueData[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataCustomSoftware[0] },
      // { Component: Empower, props: CustomEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_softwareeng_SoftwareDevelopment } },
      { Component: Cta },
    ],
  },
  {
    slug: 'app-development',
    title: 'Application Development',
    heroData: AppDevHero,
    value: valueDataAppDev[0],
    timeLine: stepsDataAppDev[0],
    sections: [
      { Component: Hero, props: AppDevHero },
      { Component: ValueSection, props: valueDataAppDev[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataAppDev[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_softwareeng_ApplicationDevelopment } },
      { Component: Cta },
    ],
  },
  {
    slug: 'app-modernization',
    title: 'Application Modernization',
    heroData: AppModHero,
    value: valueDataAppMod[0],
    timeLine: stepsDataAppMod[0],
    Data: EmpowerAppMod[0],
    sections: [
      { Component: Hero, props: AppModHero },
      { Component: ValueSection, props: valueDataAppMod[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataAppMod[0] },
      { Component: Empower, props: EmpowerAppMod[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_softwareeng_ApplicationModernization } },
      { Component: Cta },
    ],
  },
  {
    slug: 'database-migration',
    title: 'Database Migration',
    heroData: DataMigHero,
    value: valueDataMig[0],
    timeLine: stepsDataMig[0],
    Data: EmpowerDataMig[0],
    sections: [
      { Component: Hero, props: DataMigHero },
      { Component: ValueSection, props: valueDataMig[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataMig[0] },
      { Component: Empower, props: EmpowerDataMig[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_softwareeng_databaseMigration } },
      { Component: Cta },
    ],
  },
  {
    slug: 'third-party',
    title: 'Third-Party Integration',
    heroData: ThirdPartyHero,
    value: valueDataThirdParty[0],
    timeLine: stepsDataThirdParty[0],
    Data: EmpowerThirdParty[0],
    sections: [
      { Component: Hero, props: ThirdPartyHero },
      { Component: ValueSection, props: valueDataThirdParty[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataThirdParty[0] },
      { Component: Empower, props: EmpowerThirdParty[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_softwareeng_thirdPartyIntegration } },
      { Component: Cta },
    ],
  },
];

// Helper to find service by slug
function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

// ────────────────────────────────────────────────
//  Static params
// ────────────────────────────────────────────────
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// ────────────────────────────────────────────────
//  Page component
// ────────────────────────────────────────────────
export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <ReactLenis root>
      <main className="min-h-screen bg-background antialiased pt-2">
        {service.sections.map(({ Component, props = {} }, index) => (
          <Component key={index} {...(props as Record<string, unknown>)} />
        ))}

        {/* Optional universal CTA at the bottom — same across all services */}
        {/* <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-muted/40 text-center">
          <div className="container mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Ready to get started with {service.title}?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground md:text-xl">
              Let’s talk about how Virtuosoft can help you achieve your goals.
            </p>
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-lg transition hover:bg-primary/90 hover:shadow-xl"
              >
                Talk to our team →
              </a>
            </div>
          </div>
        </section> */}
      </main>
    </ReactLenis>
  );
}

// ────────────────────────────────────────────────
//  Optional: dynamic metadata
// ────────────────────────────────────────────────
export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Service Not Found | Virtuosoft' };
  }

  return {
    title: `${service.title} | Virtuosoft`,
    description:
      service.hero?.bottomDescription ||
      `Professional ${service.title} services by Virtuosoft – custom, scalable, and built for your success.`,
  };
}