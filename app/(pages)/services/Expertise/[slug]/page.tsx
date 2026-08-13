
import { notFound } from 'next/navigation';
import { ReactLenis } from 'lenis/react';
import type { Metadata } from 'next';
import type { ComponentType } from 'react';
import Hero, { type HeroVariant } from '../../common/Hero';
import ValueSection from '../../common/ValueSection';
import Empower from '../../common/Empower';
import TimeLine from '../../common/TimeLine';
import Cta from '@/components/common/Cta';
import Blogs from '@/app/(pages)/blogs/page';
import Success from '../../common/Success';
import Faq from '@/components/common/Faq';
import Engage from '../../common/Engage';
import {
  RpaEmpower,
  RpaHero,
  DevOpsEmpower,
  DevOpsHero,
  stepsDataRpa,
  stepsDataDevOps,
  valueDataRpa,
  valueDataDevOps,
  type EmpowerData,
  type TimeLineData,
  type ValueSectionData,
} from '../constant';
import { Faq_Expertise_RPA,Faq_Expertise_DEVOPs  } from '@/app/_constant';

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
    slug: 'rpa',
    title: 'RPA',
    heroData:  RpaHero,
    value: valueDataRpa[0],
    Data:  RpaEmpower[0],
    timeLine: stepsDataRpa[0],
    sections: [
      { Component: Hero, props: RpaHero },
      { Component: ValueSection, props: valueDataRpa[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataRpa[0] },
      { Component: Empower, props:  RpaEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_Expertise_RPA } },
      { Component: Cta },
    ],
  },
  {
    slug: 'devops',
    title: 'DevOps',
    heroData: DevOpsHero,
    value: valueDataDevOps[0],
    Data: DevOpsEmpower[0],
    timeLine: stepsDataDevOps[0],
    sections: [
      { Component: Hero, props: DevOpsHero },
      { Component: ValueSection, props: valueDataDevOps[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataDevOps[0] },
      { Component: Empower, props: DevOpsEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_Expertise_DEVOPs } },
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
