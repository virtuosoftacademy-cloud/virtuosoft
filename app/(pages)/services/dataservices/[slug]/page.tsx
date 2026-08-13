
import { notFound } from 'next/navigation';
import { ReactLenis } from 'lenis/react';
import type { Metadata } from 'next';
import type { ComponentType } from 'react';
import Hero, { type HeroVariant } from '../../common/Hero';
import Success from '../../common/Success';
import Cta from '@/components/common/Cta';
import { Faq_DataServices_AnalyticsBI, Faq_DataServices_DataStrategy, Faq_DataServices_DataWarehouse } from '@/app/_constant';
import Blogs from '@/app/(pages)/blogs/page';
import {
  AnalyticsBIEmpower,
  AnalyticsBIHero,
  DataStrategyEmpower,
  DataStrategyHero,
  DataWarehouseEmpower,
  DataWarehouseHero,
  stepsDataAnalyticsBI,
  stepsDataDataStrategy,
  stepsDataDataWarehouse,
  valueDataAnalyticsBI,
  valueDataDataStrategy,
  valueDataDataWarehouse,
  type EmpowerData,
  type TimeLineData,
  type ValueSectionData,
} from '../constant';
import TimeLine from '../../common/TimeLine';
import Faq from '@/components/common/Faq';
import ValueSection from '../../common/ValueSection';
import Engage from '../../common/Engage';
import Empower from '../../common/Empower';

// ────────────────────────────────────────────────
//  Types
// ────────────────────────────────────────────────
interface ServiceSection {
  Component: ComponentType<any>; // heterogeneous section components (Hero, ValueSection, TimeLine, Empower, Faq, ...) each take different prop shapes
  props?: object;
}

interface ServiceDefinition {
  slug: string;
  title: string;
  heroData: HeroVariant;
  // Preserved from the original data shape: never actually populated (typo'd as
  // `heroData` on every entry below), kept optional so `generateMetadata`'s
  // existing `service.hero?.bottomDescription` fallback behavior is unchanged.
  hero?: HeroVariant;
  value: ValueSectionData;
  Data: EmpowerData;
  timeLine: TimeLineData;
  sections: ServiceSection[];
}

// ────────────────────────────────────────────────
//  All services (array — easy to extend)
const services: ServiceDefinition[] = [
  {
    slug: 'data-strategy',
    title: 'Data Strategy Consulting',
    heroData: DataStrategyHero,
    value: valueDataDataStrategy[0],
    Data: DataStrategyEmpower[0],
    timeLine: stepsDataDataStrategy[0],
    sections: [
      { Component: Hero, props: DataStrategyHero },
      { Component: ValueSection, props: valueDataDataStrategy[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataDataStrategy[0] },
      { Component: Empower, props: DataStrategyEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_DataServices_DataStrategy } },
      { Component: Cta },
    ],
  },
  {
    slug: 'data-warehouse',
    title: 'Data Warehouse Solutions',
    heroData: DataWarehouseHero,
    value: valueDataDataWarehouse[0],
    Data: DataWarehouseEmpower[0],
    timeLine: stepsDataDataWarehouse[0],
    sections: [
      { Component: Hero, props: DataWarehouseHero },
      { Component: ValueSection, props: valueDataDataWarehouse[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataDataWarehouse[0] },
      { Component: Empower, props: DataWarehouseEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_DataServices_DataWarehouse} },
      { Component: Cta },
    ],
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics and BI',
    heroData: AnalyticsBIHero,
    value: valueDataAnalyticsBI[0],
    Data: AnalyticsBIEmpower[0],
    timeLine: stepsDataAnalyticsBI[0],
    sections: [
      { Component: Hero, props: AnalyticsBIHero },
      { Component: ValueSection, props: valueDataAnalyticsBI[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataAnalyticsBI[0] },
      { Component: Empower, props: AnalyticsBIEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_DataServices_AnalyticsBI} },
      { Component: Cta },
    ],
  },
];

// Helper to find service by slug
function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return services.find((service) => service.slug === slug);
}

// ────────────────────────────────────────────────
//  Static params
// ────────────────────────────────────────────────
interface ServiceStaticParams {
  slug: string;
}

export async function generateStaticParams(): Promise<ServiceStaticParams[]> {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// ────────────────────────────────────────────────
//  Page component
// ────────────────────────────────────────────────
interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

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
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
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
