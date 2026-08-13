import type { TitlePart, TimeLineStep, BusinessOutcome } from '../../common/TimeLine';
import type { ValueItem } from '../../common/ValueSection';
import type { EmpowerItem } from '../../common/Empower';
import Src from '@/public/assets/Images/service/ai_data_service.png';
import type { HeroVariant, HeroStyle } from '../../common/Hero';

// Visual variant for this vertical's Hero — merged once into every service's
// Hero data below, so pages only ever import the fully-assembled constant.
const heroStyle: HeroStyle = {
  image: Src,
  imageAlt: 'AI Agents',
  sectionClassName: 'bg-linear-to-br from-primary to-[#084387] text-white border-white/5',
  buttonClassName:
    'bg-white text-[#084387] hover:bg-[#084387] hover:text-accent font-bold capitalize text-sm md:text-base px-8 h-12 transition-all duration-300 shadow-xl rounded-lg active:scale-95',
};

export interface ValueSectionData {
  titleParts: TitlePart[];
  valueItems: ValueItem[];
}

export interface TimeLineData {
  titleParts: TitlePart[];
  timeLineItems: TimeLineStep[];
  businessOutComes: BusinessOutcome[];
}

export interface EmpowerData {
  title: string;
  items: EmpowerItem[];
}

// Regulatory Compliance
// Hero
export const regulatoryHero: HeroVariant = {
  title: 'Regulatory Compliance',
  topDescription: 'IT Governance',
  bottomDescription:
    'At Virtuosoft, we deliver comprehensive regulatory compliance solutions, from risk assessment to automated monitoring, ensuring your business meets industry standards, mitigates legal risks and maintains operational excellence across global jurisdictions.',
  btnTitle: 'Discover More',
  ...heroStyle,
};

//When Does Your Business Need a Strategic Product Roadmap?
const valueImg = 'assets/Images/service/ai';
export const valueDataRegulatory: ValueSectionData[] = [
  {
    titleParts: [
      "When Does ",
      { text: "Regulatory Compliance", bold: true },
      " Become Crucial"
    ],
    valueItems: [
      {
        title: "Navigating Complex Multi-Jurisdictional Requirements",
        description:
          "Operating across multiple jurisdictions means managing diverse regulatory frameworks simultaneously. Our compliance experts help you navigate GDPR, PDPL, SOC 2 and regional requirements, ensuring seamless adherence without operational disruption or costly penalties across all your markets.",
        image: `/${valueImg}/automate.svg`,
      },
      {
        title: "Avoiding Costly Penalties and Legal Consequences",
        description:
          "Non-compliance can result in millions in fines and irreparable reputation damage. We implement proactive compliance frameworks that identify vulnerabilities before they become violations, protecting your business from regulatory enforcement actions and safeguarding your market position.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "Preparing for Audits and Certification Requirements",
        description:
          "Regular audits and certifications like ISO 27001, HIPAA or PCI DSS demand meticulous documentation and process alignment. Our team prepares your organization with audit-ready systems, comprehensive documentation and continuous monitoring to ensure certification success and renewal.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "Managing Data Privacy and Protection Obligations",
        description:
          "Customer data protection is non-negotiable in today’s digital landscape. We build robust data governance frameworks that ensure compliance with privacy regulations, implement encryption standards and establish clear data handling protocols that build customer trust and regulatory confidence.",
        image: `/${valueImg}/solve.svg`,
      },
      {
        title: "Scaling Compliance as Your Business Grows",
        description:
          "Rapid growth often outpaces compliance infrastructure, creating dangerous gaps. Our scalable compliance solutions grow with your business, adapting to new markets, products and regulatory changes while maintaining consistent standards across your expanding operations and evolving business model.",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "Integrating Compliance into Development Lifecycles",
        description:
          "Retrofitting compliance into existing systems is costly and risky. We embed compliance-by-design principles into your SDLC, ensuring every product release meets regulatory requirements from inception, reducing technical debt and accelerating time-to-market with built-in compliance assurance.",
        image: `/${valueImg}/enable.svg`,
      },
    ]
  }
]

// TimeLine 
//Transforming Ideas into High-Impact Products
export const stepsDataRegulatory: TimeLineData[] = [
  {
    titleParts: [
      "Simple Compliance from ",
      { text: "Assessment to Certification", bold: true }
    ],
    timeLineItems: [
      {
        title: "Compliance Gap Analysis",
        description:
          "We conduct comprehensive assessments of your current practices against applicable regulations, identifying critical gaps and prioritization areas for immediate remediation and long-term compliance strategy.",
      },
      {
        title: "Regulatory Landscape Mapping",
        description:
          "Our team maps all relevant regulations across your operating jurisdictions, creating a clear compliance roadmap that addresses GDPR, HIPAA, SOC 2, ISO standards and region-specific requirements.",
      },
      {
        title: "Compliance Framework Design",
        description:
          "We design customized compliance frameworks tailored to your industry, business model and risk profile, establishing policies, procedures and controls that integrate seamlessly with existing operations.",
      },
      {
        title: "Risk Assessment and Mitigation",
        description:
          "Our experts identify compliance risks across your technology stack and business processes, developing targeted mitigation strategies that address vulnerabilities before they escalate into regulatory violations.",
      },
      {
        title: "Policy and Procedure Documentation",
        description:
          "We create comprehensive, audit-ready documentation including policies, procedures and control descriptions that meet regulatory expectations while remaining practical for day-to-day operations and team adoption.",
      },
      {
        title: "Technical Implementation and Automation",
        description:
          "Our developers implement automated compliance monitoring tools, security controls and reporting systems that reduce manual effort while ensuring continuous adherence to regulatory requirements and standards.",
      },
      {
        title: "Staff Training and Awareness Programs",
        description:
          "We deliver targeted training programs that educate your team on compliance obligations, secure practices and their role in maintaining regulatory standards, creating a culture of compliance awareness.",
      },
      {
        title: "Internal Audit and Validation",
        description:
          "Our team conducts thorough internal audits simulating regulatory examinations, identifying any remaining gaps and ensuring all controls function effectively before official certification or regulatory review.",
      },
      {
        title: "Certification and Audit Support",
        description:
          "We provide hands-on support during external audits and certification processes, liaising with auditors, presenting evidence and ensuring smooth examination procedures that result in successful certification outcomes.",
      },
      {
        title: "Continuous Monitoring and Updates",
        description:
          "After certification, we maintain ongoing compliance monitoring, track regulatory changes and implement updates to keep your organization ahead of evolving requirements and maintain uninterrupted compliance status.",
      },
    ],
    businessOutComes: [
      { 
        point:"Reduced Regulatory Risk and Penalty Exposure"
      },
      {
        point:"Accelerated Certification and Audit Success"
      },
      {
        point:"Enhanced Customer Trust and Market Credibility"
      },
      {
        point:"Operational Efficiency Through Automation"
      },
      {
        point:"Sustainable Compliance as You Scale"
      }
    ]
  }
];



//Empower
//Empower Your Operations with AI Agents
export const ProductRegulatory: EmpowerData[] = [
  {
    title: "Services That Understand Modern Needs",
    items: [
      {
        title: "Compliance Assessment & Gap Analysis",
        description:
          "Our team conducts thorough Compliance Assessments to identify gaps between your current state and regulatory requirements, providing actionable roadmaps for achieving and maintaining compliance across all jurisdictions."
      },
      {
        title: "Regulatory Roadmap Development",
        description:
          "We create comprehensive Regulatory Roadmaps that outline clear paths to compliance, prioritizing initiatives based on risk, impact and resource availability to ensure efficient and effective compliance achievement."
      },
      {
        title: "Data Privacy & Protection Solutions",
        description:
          "Our Data Privacy solutions implement GDPR, CCPA and PDPL-compliant frameworks, ensuring proper data handling, consent management and privacy controls that protect customer information and meet regulatory obligations."
      },
      {
        title: "Security Compliance & Certification",
        description:
          "We guide organizations through SOC 2, ISO 27001, PCI DSS and HIPAA certification processes, implementing required controls, documentation and evidence collection for successful audit outcomes and ongoing compliance."
      },
      {
        title: "Compliance Automation & Monitoring",
        description:
          "Our Compliance Automation solutions deploy continuous monitoring tools that track regulatory adherence in real-time, generate automated reports and alert stakeholders to potential violations before they become critical issues."
      },
      {
        title: "Policy & Procedure Documentation",
        description:
          "We develop comprehensive Policy & Procedure Documentation that meets auditor expectations while remaining practical for implementation, covering all aspects of regulatory compliance in clear, actionable language."
      },
      {
        title: "Compliance Training & Awareness",
        description:
          "Our Compliance Training programs educate teams on regulatory requirements, security best practices and their compliance responsibilities, creating awareness and accountability throughout your organization."
      },
      {
        title: "Third-Party Risk Management",
        description:
          "Empower Generative AI to cWe implement Third-Party Risk Management frameworks that assess vendor compliance, monitor supplier security posture and ensure your partners meet the same regulatory standards required of your organization."
      },
      {
        title: "Audit Preparation & Support",
        description:
          "Our Audit Preparation services ensure you're ready for regulatory examinations, with organized evidence, documented controls and experienced support during auditor interviews and certification processes."
      },
      {
        title: "Ongoing Compliance Management",
        description:
          "Post-certification, we provide Ongoing Compliance Management services that monitor regulatory changes, update policies, conduct periodic assessments and ensure your compliance framework evolves with changing requirements and business needs."
      }
    ]
  }
]

//Governance Framework Development
//Hero
export const FrameworkHero: HeroVariant = {
  title: 'Governance Framework Development',
  topDescription: 'IT Governance',
  bottomDescription:
    'At Virtuosoft, we transform operational chaos into strategic clarity. Our governance frameworks establish the essential policies, controls and accountability structures that align your IT investments with business objectives, ensuring compliance, maximizing ROI and building a foundation for disciplined, scalable growth.',
  btnTitle: 'Start Your Journey',
  ...heroStyle,
};

//Is Your Growth Undermined by a Lack of Governance?
export const valueDataFramework: ValueSectionData[] = [
  {
    titleParts: [
      "Is Your Growth Undermined by a Lack of ",
      { text: "Governance", bold: true }
    ],
    valueItems: [
      {
        title: "Experiencing Inconsistent Project Outcomes",
        description: "Eliminate costly overruns and misaligned deliverables. We implement standardized project governance to ensure every initiative delivers expected value, on time and within budget.",
        image: `/${valueImg}/automate.svg`,
      },
      {
        title: "Navigating Complex Regulatory Compliance",
        description:
          "Stop struggling with audit anxiety. Our frameworks embed compliance (SOX, GDPR, CCPA) into your core processes, turning regulatory requirements from a burden into a baseline.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "Managing Proliferating Technology & Shadow IT",
        description:
          "Regain control and visibility over your software ecosystem. We establish clear technology standards and procurement policies to reduce redundancy, cost and security risks.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "Ensuring Data Integrity & Decision-Making Confidence",
        description:
          "Trust your data. We design data governance models that ensure information is accurate, accessible and secure, empowering leadership with reliable insights.",
        image: `/${valueImg}/solve.svg`,
      },
      {
        title: "Scaling Operations Across Teams & Geographies",
        description:
          "Maintain consistency and quality as you grow. Our frameworks create a unified operational language and control environment for all your teams, local and offshore.",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "Preparing for Mergers, Acquisitions or Investment",
        description:
          "Demonstrate mature, de-risked operations to investors and partners. A robust governance framework is a tangible asset that increases your valuation and ensures smooth integration.",
        image: `/${valueImg}/enable.svg`,
      },
    ]
  }
]


// TimeLine 
//Process for Building Intelligent AI Agents
export const stepsDataFramework: TimeLineData[] = [
  {
    titleParts: [
      "Our ",
      { text: "Framework Development", bold: true },
      "Process"
    ],
    timeLineItems: [
      {
        title: "Current State Assessment",
        description:
          "We conduct a deep-dive analysis of your existing policies, processes and organizational structure to identify gaps and opportunities.",
      },
      {
        title: "Stakeholder Alignment & Goal Setting",
        description:
          "We collaborate with leadership to define the core objectives, risk appetite and strategic goals the framework must support.",
      },
      {
        title: "Framework Design & Structuring",
        description:
          "Our experts architect the governance model, defining the pillars of policy, control and accountability tailored to your business.",
      },
      {
        title: "Policy & Standard Development",
        description:
          "We draft clear, actionable policies covering data, security, project lifecycles and technology use that your teams can easily adopt.",
      },
      {
        title: "Control Definition & Implementation",
        description:
          "We specify the key controls, checks and balances required to enforce policies and mitigate identified risks effectively.",
      },
      {
        title: "Role & Responsibility Mapping (RACI)",
        description:
          "We eliminate ambiguity by clearly defining who is accountable, responsible, consulted and informed for every critical process.",
      },
      {
        title: "Tooling & Integration Strategy",
        description: "We recommend and help integrate technology solutions that automate governance controls and provide real-time oversight."
      },
      {
        title: "Communication & Rollout Planning",
        description: "We develop a phased rollout plan to introduce the framework across the organization, ensuring buy-in and understanding."
      },
      {
        title:"Training & Enablement",
        description:"We transform your team from participants to champions through comprehensive training on new processes and their importance."
      },
      {
        title:"Monitoring, Review & Continuous Improvement",
        description:"We establish metrics and review cycles to ensure the framework evolves with your business and the regulatory landscape."
      },
    ],
    businessOutComes: [
      { 
        point:"Enhanced Strategic Alignment & Decision-Making"
      },
      {
        point:"Streamlined Compliance & Reduced Audit Friction"
      },
      {
        point:"Increased Operational Efficiency & Cost Control"
      },
      {
        point:"Improved Risk Management & Security Posture"
      },
      {
        point:"Scalable Foundation for Sustainable Growth"
      }
    ]
  }
];

//Empower
//Transformation Powered by Technology
export const EmpowerFramework: EmpowerData[] = [
  {
    title: "Services That Build a Culture of Accountability",
    items: [
      {
        title: "IT Governance Design",
        description:
          "We design top-level IT governance structures that ensure your technology strategy directly supports and drives business goals."
      },
      {
        title: "Policy & Procedure Development",
        description:
          "Our team crafts clear, comprehensive and enforceable policies that standardize operations and ensure consistent quality."
      },
      {
        title: "Compliance Framework Alignment",
        description:
          "We map your controls to industry standards (COBIT, ITIL, ISO) and regulations, creating a unified and audit-ready compliance posture."
      },
      {
        title: "RACI Matrix Development",
        description:
          "Eliminate confusion and bottlenecks. We define clear Roles and Responsibilities across teams for seamless project execution and accountability."
      },
      {
        title: "Metrics & KPI Definition",
        description:
          "What gets measured gets managed. We establish the key performance indicators (KPIs) to give you a real-time view of governance effectiveness."
      },
      {
        title: "Risk & Control Libraries",
        description:
          "Gain a centralized view of your risk landscape. We develop comprehensive libraries of risks and corresponding mitigation controls."
      },
      {
        title: "Vendor Management Framework",
        description:
          "Manage third-party risk effectively. We create the policies and processes for vendor onboarding, performance monitoring and offboarding."
      },
      {
        title: "Change Management Governance",
        description:
          "Standardize how change is introduced. We implement governance for changes in scope, technology and process to minimize disruption."
      },
      {
        title: "Framework Training & Adoption",
        description: "We ensure your team doesn't just receive a document but truly adopts the framework through targeted workshops and training sessions."
      },
      {
        title:"Ongoing Governance Health Checks",
        description:"Maintain the integrity of your framework. Our periodic reviews assess its effectiveness and recommend adjustments for continuous improvement."
      }
    ]
  }
]


// Resource Augmentation
// Hero
export const resourceHero: HeroVariant = {
  title: 'Resource Augmentation',
  topDescription: 'IT Governance',
  bottomDescription:
    'Bridge your talent gap seamlessly with Virtuosoft. We provide elite, pre-vetted developers, engineers and IT specialists who integrate directly into your workflow. Extend your capabilities on-demand to accelerate development, fill skill gaps and maintain momentum, all without the cost and complexity of traditional hiring.',
  btnTitle: 'Discover More',
  ...heroStyle,
};

//When Does Your Team Need Immediate Augmentation?
export const valueDataresource: ValueSectionData[] = [
  {
    titleParts: [
      "When Does Your Team Need ",
      { text: "Immediate Augmentation", bold: true }
    ],
    valueItems: [
      {
        title: "Facing a Critical Skill Gap for a New Technology",
        description:
          "Don't let a missing skill derail your project. We provide specialists in AI/ML, DevOps or cybersecurity to fill the gap instantly, keeping your innovation on track.",
        image: `/${valueImg}/automate.svg`,
      },
      {
        title: "Navigating Unexpected Workload Spikes or Tight Deadlines",
        description:
          "Scale your team overnight, not over months. Add dedicated resources immediately to meet launch dates and manage peak demands without overloading your core team.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "Needing Niche Expertise for a Short-Term Project",
        description:
          "Access top-tier talent for a specific phase without long-term commitment. Get the exact skills you need, only for the duration you need them.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "Accelerating Your Time-to-Market",
        description:
          "Beat your competitors to launch. Inject seasoned developers into your team to parallelize work and dramatically speed up your development lifecycle.",
        image: `/${valueImg}/solve.svg`,
      },
      {
        title: "Controlling Budgets While Scaling Capacity",
        description:
          "Avoid the high costs of recruitment, onboarding and benefits. Our flexible model gives you senior talent on a simple subscription basis, maximizing your ROI.",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "Maintaining Project Continuity During Team Transitions",
        description:
          "Prevent knowledge loss and delays during employee turnover. We provide interim experts to ensure your projects move forward without a hitch.",
        image: `/${valueImg}/enable.svg`,
      },
    ]
  }
]

// TimeLine 
//Transforming Ideas into High-Impact Products
export const stepsDataresource: TimeLineData[] = [
  {
    titleParts: [
      "Our ",
      { text: "Seamless Integration ", bold: true },
      "Process"
    ],
    timeLineItems: [
      {
        title: "Discovery & Needs Analysis",
        description:
          "We go beyond the job description to understand your project's technical needs, team culture and specific success metrics.",
      },
      {
        title: "Talent Sourcing & Vetting",
        description:
          "Our rigorous process assesses technical skills, communication and problem-solving abilities, presenting you with only the top 2% of candidates.",
      },
      {
        title: "Curated Profile Submission",
        description:
          "You receive a shortlist of pre-vetted candidates with detailed profiles and video introductions, tailored to your exact requirements.",
      },
      {
        title: "Technical Interview & Selection",
        description:
          "You conduct final interviews to ensure the perfect technical and cultural fit. Your approval is mandatory before any placement.",
      },
      {
        title: "Onboarding & Integration Support",
        description:
          "We facilitate a smooth start, handling contracts and ensuring your new team member has everything needed to be productive from day one.",
      },
      {
        title: "Project Kick-off & Goal Alignment",
        description:
          "We ensure the augmented resource is fully briefed on project goals, tools and workflows, aligning them with your team's mission.",
      },
      {
        title: "Continuous Performance Monitoring",
        description:
          "We don't disappear after placement. We maintain regular check-ins to track performance and ensure deliverables are met.",
      },
      {
        title: "Agile Collaboration & Communication",
        description:
          "Your augmented resource works as a fully integrated team member, participating in your stand-ups, sprints and collaborative tools.",
      },
      {
        title: "Knowledge Transfer & Documentation",
        description:
          "We ensure seamless integration and transparency, with resources documenting their work to become a true extension of your team.",
      },
      {
        title: "Flexible Scaling & Ramp-down",
        description:
          "Easily scale your team up or down based on project phases, with no long-term lock-in or complex termination processes.",
      },
    ],
      businessOutComes: [
      { 
        point:"Accelerated Project Velocity & Faster Releases"
      },
      {
        point:"Access to Top-Tier, Specialized Global Talent"
      },
      {
        point:"Significant Reduction in Hiring Time & Costs"
      },
      {
        point:"Enhanced Flexibility & Operational Scalability"
      },
      {
        point:"Maintained Focus of Your Core In-House Team"
      }
    ]
  }
];



//Empower
//Empower Your Operations with AI Agents
export const EmpowerResource: EmpowerData[] = [
  {
    title: "The Right Expertise, Precisely When You Need It",
    items: [
      {
        title: "Full-Stack Developers",
        description:
          "Integrate versatile developers proficient in end-to-end development, from front-end interfaces to robust back-end systems."
      },
      {
        title: "DevOps & Cloud Engineers",
        description:
          "Augment your team with experts in CI/CD, infrastructure as code (IaC) and cloud platform management (AWS, Azure, GCP)."
      },
      {
        title: "UI/UX Designers",
        description:
          "Inject creative talent to design intuitive, user-centric interfaces that enhance customer engagement and satisfaction."
      },
      {
        title: "Data Scientists & AI Engineers",
        description:
          "Access specialists in data analytics, machine learning and AI to build intelligent, data-driven features into your products."
      },
      {
        title: "Mobile App Developers",
        description:
          "Scale your mobile initiatives with experts in native (iOS/Android) and cross-platform (Flutter, React Native) development."
      },
      {
        title: "QA & Test Automation Engineers",
        description:
          "Ensure impeccable quality and accelerate testing cycles with specialists in automated testing frameworks and manual testing."
      },
      {
        title: "Cybersecurity Specialists",
        description:
          "Fortify your projects with security experts who can embed best practices and conduct vulnerability assessments."
      },
      {
        title: "Digital Marketing & SEO Experts",
        description:
          "Boost your product's launch and visibility with resources skilled in growth marketing, SEO and content strategy."
      }
    ]
  }
]
