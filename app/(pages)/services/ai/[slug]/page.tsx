
import { notFound } from 'next/navigation';
import { ReactLenis } from 'lenis/react';
import type { Metadata } from 'next';
import type { ComponentType } from 'react';
import Hero, { type HeroVariant } from '../../common/Hero';
import {
  aiAgentsEmpower,
  aiAgentsHero,
  ComHero,
  ConHero,
  DataScienceHero,
  EmpowerCom,
  EmpowerCon,
  EmpowerDataScience,
  EmpowerGen,
  EmpowerOcr,
  genaiHero,
  OcrHero,
  stepsData,
  stepsDataCom,
  stepsDataCon,
  stepsDataGen,
  stepsDataOcr,
  stepsDataScience,
  valueData,
  valueDataCom,
  valueDataCon,
  valueDataGen,
  valueDataOcr,
  valueDataScience,
  type ValueSectionData,
  type EmpowerData,
  type TimeLineData,
} from '../constant';
import Cta from '@/components/common/Cta';
import Faq from '../../../../../components/common/Faq';
import { Faq_AI_ComputerVision, Faq_AI_ConversationalAI, Faq_AI_CustomAgent, Faq_AI_DataScience_MLOps, Faq_AI_GenerativeAI, Faq_AI_OCR } from '@/app/_constant';
import Blogs from '@/app/(pages)/blogs/page';
import Engage from '../../common/Engage';
import Success from '../../common/Success';
import TimeLine from '../../common/TimeLine';
import ValueSection from '../../common/ValueSection';
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
    slug: 'ai-agent',
    title: 'AI Agent',
    heroData: aiAgentsHero,
    value: valueData[0],
    Data: aiAgentsEmpower[0],
    timeLine: stepsData[0],
    sections: [
      { Component: Hero, props: aiAgentsHero },
      { Component: ValueSection, props: valueData[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsData[0] },
      { Component: Empower, props: aiAgentsEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_AI_CustomAgent } },
      { Component: Cta },
    ],
  },
  {
    slug: 'generative-ai',
    title: 'Generative AI',
    heroData: genaiHero,
    value: valueDataGen[0],
    Data: EmpowerGen[0],
    timeLine: stepsData[0],
    sections: [
      { Component: Hero, props: genaiHero },
      { Component: ValueSection, props: valueDataGen[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataGen[0] },
      { Component: Empower, props: EmpowerGen[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_AI_GenerativeAI } },
      { Component: Cta },
    ],
  },
  {
    slug: 'data-science',
    title: 'Data Science & MLOps',
    heroData: DataScienceHero,
    value: valueDataGen[0],
    Data: EmpowerDataScience[0],
    timeLine: stepsDataScience[0],
    sections: [
      { Component: Hero, props: DataScienceHero },
      { Component: ValueSection, props: valueDataScience[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataScience[0] },
      { Component: Empower, props: EmpowerDataScience[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_AI_DataScience_MLOps } },
      { Component: Cta },
    ],
  },
  {
    slug: 'conversational-intelligence',
    title: 'Conversational Intelligence',
    heroData: ConHero,
    value: valueDataCon[0],
    Data: EmpowerCon[0],
    timeLine: stepsDataCon[0],
    sections: [
      { Component: Hero, props: ConHero },
      { Component: ValueSection, props: valueDataCon[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataCon[0] },
      { Component: Empower, props: EmpowerCon[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_AI_ConversationalAI } },
      { Component: Cta },
    ],
  },
  {
    slug: 'computer-vision',
    title: 'Computer Vision',
    heroData: ComHero,
    value: valueDataCon[0],
    Data: EmpowerCom[0],
    timeLine: stepsDataCom[0],
    sections: [
      { Component: Hero, props: ComHero },
      { Component: ValueSection, props: valueDataCom[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataCom[0] },
      { Component: Empower, props: EmpowerCom[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_AI_ComputerVision } },
      { Component: Cta },
    ],
  },
  {
    slug: 'optical-character-recognition',
    title: 'Optical Character Recognition',
    heroData: OcrHero,
    value: valueDataOcr[0],
    Data: EmpowerOcr[0],
    timeLine: stepsDataOcr[0],
    sections: [
      { Component: Hero, props: OcrHero },
      { Component: ValueSection, props: valueDataOcr[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataOcr[0] },
      { Component: Empower, props: EmpowerOcr[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_AI_OCR } },
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
