
import { notFound } from 'next/navigation';
import { ReactLenis } from 'lenis/react';
import Hero from '../_components/Hero';
import ValueSection from '../../common/ValueSection';
import Empower from '../../common/Empower';
import TimeLine from '../../common/TimeLine';
import Cta from '@/components/common/Cta';
import Blogs from '@/app/(pages)/blogs/page';
import Success from '../../common/Success';
import Faq from '@/components/common/Faq';
import Engage from '../../common/Engage';
import { ErpEmpower, ErpHero, HelixEmpower ,HelixHero,DynamicsHero,DynamicsEmpower,ManageEngineHero,EngineEmpower,stepsDataErp,stepsDataHelix ,stepsDataDynamics,stepsDataEngine,valueDataErp ,valueDataHelix,valueDataDynamics, valueDataEngine, IbmHero, IbmvalueData, IbmstepsData, IbmEmpower,} from '../constant';
import { Faq_ERP ,Faq_Helix,Faq_Dynamics ,Faq_ManageEngine, Faq_Ibm } from '@/app/_constant';


// ────────────────────────────────────────────────
//  All services (array — easy to extend)
const services = [
     {
    slug: 'erp',
    title: 'ERP',
    heroData:  ErpHero,
    value: valueDataErp [0],
    Data:  ErpEmpower[0],
    timeLine: stepsDataErp[0],
    sections: [
      { Component: Hero, props:  ErpHero},
      { Component: ValueSection, props: valueDataErp [0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataErp[0] },
      { Component: Empower, props:  ErpEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_ERP  } },
      { Component: Cta },
    ],
  },
  {
    slug: 'bmc-helix',
    title: 'BMC Helix',
    heroData: HelixHero,
    value: valueDataHelix[0],
    Data: HelixEmpower [0],
    timeLine: stepsDataHelix [0],
    sections: [
      { Component: Hero, props: HelixHero },
      { Component: ValueSection, props: valueDataHelix[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataHelix [0] },
      { Component: Empower, props: HelixEmpower [0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_Helix} },
      { Component: Cta },
    ],
  },
    {
    slug: 'microsoft-360',
    title: 'Microsoft dynamics360',
    heroData: DynamicsHero,
    value: valueDataDynamics[0],
    Data: DynamicsEmpower [0],
    timeLine: stepsDataDynamics [0],
    sections: [
      { Component: Hero, props: DynamicsHero },
      { Component: ValueSection, props: valueDataDynamics[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataDynamics [0] },
      { Component: Empower, props: DynamicsEmpower [0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_Dynamics } },
      { Component: Cta },
    ],
  },
  {
    slug: 'manage-engine',
    title: 'Manage Engine',
    heroData: ManageEngineHero,
    value: valueDataEngine[0],
    Data: EngineEmpower [0],
    timeLine: stepsDataEngine [0],
    sections: [
      { Component: Hero, props: ManageEngineHero },
      { Component: ValueSection, props: valueDataEngine[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataEngine [0] },
      { Component: Empower, props: EngineEmpower [0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_ManageEngine } },
      { Component: Cta },
    ],
  },
  {
    slug: 'ibm',
    title: 'IBM',
    heroData: IbmHero,
    value: IbmvalueData[0],
    Data: IbmEmpower [0],
    timeLine: IbmstepsData [0],
    sections: [
      { Component: Hero, props: IbmHero },
      { Component: ValueSection, props: IbmvalueData[0] },
      { Component: Success },
      { Component: TimeLine, props: IbmstepsData [0] },
      { Component: Empower, props: IbmEmpower [0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_Ibm } },
      { Component: Cta },
    ],
  },
 
];


// Helper to find service by slug
function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}

// ────────────────────────────────────────────────
//  Static params
// ────────────────────────────────────────────────
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// ────────────────────────────────────────────────
//  Page component
// ────────────────────────────────────────────────
export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <ReactLenis root>
      <main className="min-h-screen bg-background antialiased pt-2">
        {service.sections.map(({ Component, props = {} }, index) => (
          <Component key={index} {...props} />
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
export async function generateMetadata({ params }) {
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