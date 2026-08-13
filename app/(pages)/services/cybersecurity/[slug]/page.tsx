
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
  CyberAssessmentsEmpower,
  CyberAssessmentsHero,
  CyberSecurityDeploymentEmpower,
  CyberSecurityDeploymentHero,
  GovernanceComplianceEmpower,
  GovernanceComplianceHero,
  ManagedCyberSecurityEmpower,
  ManagedCyberSecurityHero,
  CyberRiskManagementEmpower,
  CyberRiskManagementHero,
  stepsDataCyberAssessments,
  stepsDataCyberSecurityDeployment,
  stepsDataGovernanceCompliance,
  stepsDataManagedCyberSecurity,
  stepsDataRiskManagement,
  valueDataCyberAssessments,
  valueDataCyberSecurityDeployment,
  valueDataGovernanceCompliance,
  valueDataManagedCyberSecurity,
  valueRiskManagement,
  type ValueSectionData,
  type EmpowerData,
  type TimeLineData,
} from '../constant';
import { Faq_CyberSecurity_CyberAssessment, Faq_CyberSecurity_GovernanceCompliance, Faq_CyberSecurity_SecurityDeployment, Faq_CyberSecurityManagedCybersecurity, Faq_CyberSecurity_RiskManagement } from '@/app/_constant';


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
    slug: 'solution-deployment',
    title: 'Solution Deployment and Management',
    heroData: CyberSecurityDeploymentHero,
    value: valueDataCyberSecurityDeployment[0],
    Data: CyberSecurityDeploymentEmpower[0],
    timeLine: stepsDataCyberSecurityDeployment[0],
    sections: [
      { Component: Hero, props: CyberSecurityDeploymentHero },
      { Component: ValueSection, props: valueDataCyberSecurityDeployment[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataCyberSecurityDeployment[0] },
      { Component: Empower, props: CyberSecurityDeploymentEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_CyberSecurity_SecurityDeployment } },
      { Component: Cta },
    ],
  },
  {
    slug: 'governance-and-compliance',
    title: 'Governance & Compliance Services',
    heroData: GovernanceComplianceHero,
    value: valueDataGovernanceCompliance[0],
    Data: GovernanceComplianceEmpower[0],
    timeLine: stepsDataGovernanceCompliance[0],
    sections: [
      { Component: Hero, props: GovernanceComplianceHero },
      { Component: ValueSection, props: valueDataGovernanceCompliance[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataGovernanceCompliance[0] },
      { Component: Empower, props: GovernanceComplianceEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_CyberSecurity_GovernanceCompliance } },
      { Component: Cta },
    ],
  },
  {
    slug: 'cyber-assessments',
    title: 'Cyber Assessments',
    heroData: CyberAssessmentsHero,
    value: valueDataCyberAssessments[0],
    Data: CyberAssessmentsEmpower[0],
    timeLine: stepsDataCyberAssessments[0],
    sections: [
      { Component: Hero, props: CyberAssessmentsHero },
      { Component: ValueSection, props: valueDataCyberAssessments[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataCyberAssessments[0] },
      { Component: Empower, props: CyberAssessmentsEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_CyberSecurity_CyberAssessment } },
      { Component: Cta },
    ],
  },
  {
    slug: 'managed-cybersecurity-service',
    title: 'Managed Cybersecurity Service',
    heroData: ManagedCyberSecurityHero,
    value: valueDataManagedCyberSecurity[0],
    timeLine: stepsDataManagedCyberSecurity[0],
    Data: ManagedCyberSecurityEmpower[0],
    sections: [
      { Component: Hero, props: ManagedCyberSecurityHero },
      { Component: ValueSection, props: valueDataManagedCyberSecurity[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataManagedCyberSecurity[0] },
      { Component: Empower, props: ManagedCyberSecurityEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_CyberSecurityManagedCybersecurity } },
      { Component: Cta },
    ],
  },
  {
    slug: 'risk-management',
    title: 'Risk Management & Governance',
    heroData: CyberRiskManagementHero,
    value: valueRiskManagement[0],
    timeLine: stepsDataRiskManagement[0],
    Data: CyberRiskManagementEmpower[0],
    sections: [
      { Component: Hero, props: CyberRiskManagementHero },
      { Component: ValueSection, props: valueRiskManagement[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataRiskManagement[0] },
      { Component: Empower, props: CyberRiskManagementEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_CyberSecurity_RiskManagement } },
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
