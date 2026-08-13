import { DatabaseZap, Package, Table, Users, type LucideIcon } from 'lucide-react';
import Src from '@/public/assets/Images/service/as_service.png';
import type { HeroVariant, HeroStyle } from '../../common/Hero';

// ────────────────────────────────────────────────
//  Shared shapes for this vertical's service data
// ────────────────────────────────────────────────
export type TitlePart = string | { text: string; bold?: boolean };

// Visual variant for this vertical's Hero — merged once into every service's
// Hero data below, so pages only ever import the fully-assembled constant.
const heroStyle: HeroStyle = {
  image: Src,
  imageAlt: 'AI Agents',
  containerClassName: 'w-full flex justify-center px-4 md:px-10 lg:px-12',
  sectionClassName: 'bg-linear-to-br from-[#084387] to-[#021021] text-white',
  buttonClassName:
    'bg-white text-[#084387] hover:bg-[#084387] hover:text-white font-bold capitalize text-sm md:text-base px-6 h-11 transition-all shadow-lg',
};

export interface ValueItem {
  title: string;
  description: string;
  image: string;
}

export interface ValueSectionData {
  titleParts: TitlePart[];
  valueItems: ValueItem[];
}

export interface TimeLineStepItem {
  title: string;
  description: string;
}

export interface BusinessOutcome {
  point: string;
}

export interface TimeLineData {
  titleParts: TitlePart[];
  timeLineItems: TimeLineStepItem[];
  businessOutComes?: BusinessOutcome[];
}

export interface EngageItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface EmpowerItem {
  title: string;
  description: string;
}

export interface EmpowerData {
  title: string;
  items: EmpowerItem[];
}

// Product Strategy & Roadmapping
// Hero
export const ProductStrategyHero: HeroVariant = {
  title: 'Product Strategy & Roadmapping',
  topDescription: 'Advisory',
  bottomDescription:
    'Empower your organization with intelligent AI agents that streamline operations, automate workflows, and deliver faster, data-driven decisions. ' +
    'At Virtuosoft, we build custom AI solutions that optimize efficiency, improve customer experiences, and unlock new levels of performance and growth.',
  btnTitle: 'Discover AI Agents with Virtuosoft',
  ...heroStyle,
};

//When Does Your Business Need a Strategic Product Roadmap?
const valueImg = 'assets/Images/service/ai';
export const valueDataProductStrategy: ValueSectionData[] = [
  {
    titleParts: [
      "When Does Your Business Need a ",
      { text: "Strategic Product Roadmap", bold: true }
    ],
    valueItems: [
      {
        title: "When Vision and Product Direction Don’t Align",
        description:
          "Misaligned teams slow down innovation. We help unify your product direction with business objectives, ensuring every feature and decision drives strategic value.",
        image: `/${valueImg}/automate.svg`,
      },
      {
        title: "When Customer Needs Shift Rapidly",
        description:
          "Markets evolve fast. Our agile, research-driven product approach keeps your offering relevant, delivering experiences that consistently meet changing user expectations.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "When Prioritizing Features Becomes Challenging",
        description:
          "Not every idea deserves investment. We use proven prioritization frameworks to identify high-impact features, ensuring your resources go where they create maximum ROI.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "When Achieving Product-Market Fit Is Uncertain",
        description:
          "We reduce risk through iterative validation, user feedback loops and rapid experimentation, shaping products that resonate with the market from day one.",
        image: `/${valueImg}/solve.svg`,
      },
      {
        title: "When Modern Technology Needs to Be Integrated",
        description:
          "Whether it’s AI, automation, cloud or analytics, we guide you in choosing the right technologies and integrating them strategically to strengthen your competitive position.",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "When Scaling or Entering New Markets Creates Complexity",
        description:
          "Growth introduces new challenges. We design scalable product architectures and go to market strategies that allow you to expand confidently, enter new segments and adapt your product for global audiences without losing focus or operational efficiency.",
        image: `/${valueImg}/enable.svg`,
      },
    ]
  }
]

// TimeLine
//Transforming Ideas into High-Impact Products
export const stepsDataProductStrategy: TimeLineData[] = [
  {
    titleParts: [
      "Transforming Ideas into ",
      { text: "High-Impact Products", bold: true }
    ],
    timeLineItems: [
      {
        title: "Define the Vision & Target Users",
        description:
          "We begin by clarifying your product mission, goals, user segments and core value drivers to set a strong strategic foundation.",
      },
      {
        title: "Market & Competitive Intelligence",
        description:
          "We analyze industry trends, competitor offerings and emerging opportunities to ensure your product is positioned for success.",
      },
      {
        title: "Craft the Value Proposition",
        description:
          "Our team shapes a compelling value proposition that differentiates your product and resonates with customers.",
      },
      {
        title: "Monetization Strategy & Success Metrics",
        description:
          "We define revenue models, validate pricing options and establish KPIs that track growth, adoption and product performance.",
      },
      {
        title: "Build the Strategic Product Roadmap",
        description:
          "You receive a clear, actionable roadmap outlining feature priorities, release phases and long-term product evolution strategies.",
      }
    ]
  }
];

export const aiAgentsEngage: EngageItem[] = [
  {
    icon: Users,
    title: "Teams That Deliver",
    description: "Integrate a full team of senior developers and a project manager to accelerate your strategic roadmap. This model is ideal for long-term innovation and scaling."
  },
  {
    icon: DatabaseZap,
    title: "Offshore Powerhouse",
    description:
      "Create a dedicated extension of your tech department with top-tier, vetted engineering talent. Ideal for full project ownership and strategic growth."
  },
  {
    icon: Package,
    title: "Fixed Projects",
    description:
      "Streamline projects while reducing risks, ensuring timely delivery of top-quality results."
  }
];

//Empower
//Empower Your Operations with AI Agents
export const ProductStrategyEmpower: EmpowerData[] = [
  {
    title: "Charting a Clear Path from Idea to Impact",
    items: [
      {
        title: "Strategic Product Visioning",
        description:
          "We help define a compelling product vision grounded in market realities and business goals, ensuring every decision supports long-term success."
      },
      {
        title: "Market & Competitive Intelligence",
        description:
          "Our team analyzes trends, customer behavior and competitor positioning to uncover opportunities and guide strategic differentiation."
      },
      {
        title: "Value Proposition & Positioning",
        description:
          "We craft clear, customer-centered value propositions that define what sets your product apart and why it wins in the market."
      },
      {
        title: "Roadmapping & Feature Prioritization",
        description:
          "Using proven frameworks, we prioritize features that maximize ROI, balance effort vs. impact and accelerate time-to-market."
      },
      {
        title: "Synthetic Data Generation",
        description:
          "We build actionable GTM strategies, covering launch planning, customer acquisition, messaging and channels for impactful market entry."
      },
      {
        title: "Monetization & Pricing Strategy",
        description:
          "Our experts establish revenue models and pricing structures tailored to customer expectations and market viability."
      },
      {
        title: "Product Lifecycle Planning",
        description:
          "From launch to expansion, we develop lifecycle strategies ensuring continuous product evolution and long-term relevance."
      },
      {
        title: "User-Centered Experience Design",
        description:
          "We align UX strategy with business goals, crafting intuitive, research-backed experiences that enhance adoption and retention."
      },
      {
        title: "Technology & Innovation Advisory",
        description:
          "Our team guides you in selecting the right technologies and integrating modern capabilities, AI, cloud, automation, to future-proof your product."
      },
      {
        title: "Risk Evaluation & Mitigation",
        description:
          "We identify technical, market and operational risks early, offering measurable plans to reduce uncertainty and drive confident execution."
      }
    ]
  }
]

//Digital Transformation Consulting
//Hero
export const DigitalHero: HeroVariant = {
  title: 'Digital Transformation',
  topDescription: 'Advisory',
  bottomDescription:
    'At Virtuosoft, we use Generative AI to refine workflows, boost creativity and shape innovation, through smart and adaptive solutions built to strengthen collaboration and optimize performance.',
  btnTitle: 'Begin Your Transformation',
  ...heroStyle,
};

//Why are Businesses Adopting Generative AI Today?
export const valueDataDigital: ValueSectionData[] = [
  {
    titleParts: [
      "When is the Right Time to",
      { text: "Transform", bold: true }
    ],
    valueItems: [
      {
        title: "Competing in the Digital Era",
        description: "In today’s fast-moving, technology-driven marketplace, digital transformation is no longer optional. It’s essential. Virtuosoft empowers organizations to innovate and outperform competitors.",
        image: `/${valueImg}/automate.svg`,
      },
      {
        title: "Overcoming Legacy Constraints",
        description:
          "Outdated systems limit agility and innovation. Virtuosoft modernizes legacy environments to support scalable, future-ready growth.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "Breaking Growth Barriers",
        description:
          "Digital modernization opens pathways for expansion through automation, cloud solutions, and flexible architectures.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "Enhancing Customer Journeys",
        description:
          "Personalized, data-driven experiences drive loyalty. Virtuosoft enables seamless digital interactions across all touchpoints.",
        image: `/${valueImg}/solve.svg`,
      },
      {
        title: "Strengthening Security & Compliance",
        description:
          "Robust security frameworks ensure data protection and regulatory compliance, building resilient digital ecosystems.",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "Turning Data into Strategy",
        description:
          "Advanced analytics transform raw data into actionable insights that guide smarter, faster business decisions.",
        image: `/${valueImg}/enable.svg`,
      },
    ]
  }
]


// TimeLine
//Process for Building Intelligent AI Agents
export const stepsDataDigitalTransformation: TimeLineData[] = [
  {
    titleParts: [
      "The ",
      { text: "Digital Transformation", bold: true },
      "Process"
    ],
    timeLineItems: [
      {
        title: "Discovery & Evaluation",
        description:
          "A deep-dive assessment identifies your existing systems, challenges and digital opportunities. This phase defines the transformation scope and ensures every initiative supports business priorities.",
      },
      {
        title: "Strategy & Roadmap Design",
        description:
          "A tailored transformation roadmap outlines clear milestones, KPIs and implementation timelines, merging strategic vision with technology enablement for long-term success.",
      },
      {
        title: "Technology Alignment",
        description:
          "Best-fit tools and platforms are selected and integrated seamlessly, from cloud systems to AI-driven applications, strengthening your organization’s technological foundation.",
      },
      {
        title: "Workflow Optimization",
        description:
          "Manual and inefficient processes are automated to accelerate performance, improve data accuracy and support scalable, cost-efficient growth.",
      },
      {
        title: "Change Enablement",
        description:
          "Targeted training and structured change management empower teams to adopt new systems confidently, driving company-wide adoption and sustained transformation success.",
      },
      {
        title: "Experience Innovation",
        description:
          "Customer engagement evolves through digital-first experiences, personalized, data-informed and designed to strengthen loyalty and brand perception.",
      },
      {
        title: "Insight-Driven Decisions",
        description: "Advanced analytics and business intelligence tools turn complex data into actionable insights, enabling faster and smarter strategic decision-making."
      },
      {
        title: "Continuous Evolution",
        description: "Digital success is an ongoing process. Systems are monitored, optimized and refined to adapt seamlessly to emerging market demands and technological shifts."
      }
    ]
  }
];

//Empower
//Transformation Powered by Technology
export const EmpowerDigitalTransformation: EmpowerData[] = [
  {
    title: "Transformation Powered by Technology",
    items: [
      {
        title: "App Development",
        description:
          "Design and build high-performance digital platforms that combine intuitive user experiences with agile architecture, driving efficiency and scalability across all devices."
      },
      {
        title: "Cloud Solutions",
        description:
          "Enable flexible, secure, and scalable infrastructure through advanced cloud engineering. SaaS, PaaS and IaaS deployments support modernization and business agility."
      },
      {
        title: "Data Intelligence",
        description:
          "Turn raw data into actionable intelligence. Advanced analytics and visualization techniques empower smarter, faster decisions across every business function."
      },
      {
        title: "Digital Security",
        description:
          "Protect critical assets with enterprise-grade cybersecurity frameworks that integrate threat detection, encryption and regulatory compliance."
      },
      {
        title: "AI & Machine Learning",
        description:
          "Leverage intelligent automation, predictive analytics and adaptive algorithms to optimize operations, enhance customer engagement and strengthen competitiveness."
      },
      {
        title: "IoT Integration",
        description:
          "Connect devices, systems and sensors through intelligent IoT solutions that improve process visibility, operational control and innovation potential."
      },
      {
        title: "DevOps Acceleration",
        description:
          "Streamline development pipelines and deployment cycles through collaboration, automation and continuous integration, ensuring faster delivery and consistent quality."
      },
      {
        title: "Process Automation",
        description:
          "Enhance productivity with robotic automation that eliminates manual tasks, minimizes errors and redirects focus toward strategic growth initiatives."
      },
      {
        title: "Mobile Solutions",
        description: "Empower teams and customers with mobile-enabled systems that provide real-time data access, operational continuity and seamless on-the-go functionality."
      }
    ]
  }
]
