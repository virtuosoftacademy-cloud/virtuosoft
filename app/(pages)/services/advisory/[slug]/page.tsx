
import { notFound } from 'next/navigation';
import { ReactLenis } from 'lenis/react';
import type { Metadata } from 'next';
import type { ComponentType } from 'react';
import Hero, { type HeroVariant } from '../../common/Hero';
import Success from '../../common/Success';
import Cta from '@/components/common/Cta';
import { Faq_Advisory_DigitalTransformation, Faq_Advisory_ProductStrategy, Faq_AI_CustomAgent } from '@/app/_constant';
import Blogs from '@/app/(pages)/blogs/page';
import {
  DigitalHero,
  EmpowerDigitalTransformation,
  ProductStrategyEmpower,
  ProductStrategyHero,
  stepsDataDigitalTransformation,
  stepsDataProductStrategy,
  valueDataDigital,
  valueDataProductStrategy,
  type ValueSectionData,
  type EmpowerData,
  type TimeLineData,
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
    slug: 'product-strategy',
    title: 'Product Strategy & Roadmapping',
    heroData: ProductStrategyHero,
    value: valueDataProductStrategy[0],
    Data: ProductStrategyEmpower[0],
    timeLine: stepsDataProductStrategy[0],
    sections: [
      { Component: Hero, props: ProductStrategyHero },
      { Component: ValueSection, props: valueDataProductStrategy[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataProductStrategy[0] },
      { Component: Empower, props: ProductStrategyEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_Advisory_ProductStrategy } },
      { Component: Cta },
    ],
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    heroData: DigitalHero,
    value: valueDataDigital[0],
    Data: EmpowerDigitalTransformation[0],
    timeLine: stepsDataDigitalTransformation[0],
    sections: [
      { Component: Hero, props: DigitalHero },
      { Component: ValueSection, props: valueDataDigital[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataDigitalTransformation[0] },
      { Component: Empower, props: EmpowerDigitalTransformation[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_Advisory_DigitalTransformation } },
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
