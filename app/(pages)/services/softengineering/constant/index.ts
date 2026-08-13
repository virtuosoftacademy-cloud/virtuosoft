import type { TitlePart, TimeLineStep, BusinessOutcome } from '../../common/TimeLine';
import type { ValueItem } from '../../common/ValueSection';
import type { EmpowerItem } from '../../common/Empower';
import Src from '@/public/assets/Images/service/ed_service.png';
import type { HeroVariant, HeroStyle } from '../../common/Hero';

// Visual variant for this vertical's Hero — merged once into every service's
// Hero data below, so pages only ever import the fully-assembled constant.
const heroStyle: HeroStyle = {
  image: Src,
  imageAlt: 'Application Modernization',
  sectionClassName: 'bg-linear-to-br from-[#0E3043] to-[#485861] text-accent',
  descriptionClassName: 'opacity-85',
  buttonClassName:
    'bg-white hover:bg-accent/5 text-accent-foreground/80 hover:text-accent font-bold capitalize text-sm md:text-base px-8 h-12 transition-all duration-300 shadow-xl rounded-lg active:scale-95',
};

export interface ValueSectionData {
  titleParts: TitlePart[];
  valueItems: ValueItem[];
}

export interface TimeLineData {
  titleParts: TitlePart[];
  timeLineItems: TimeLineStep[];
  businessOutComes?: BusinessOutcome[];
}

export interface EmpowerData {
  title: string;
  items: EmpowerItem[];
}

// Legacy OCR data shapes (titleNormal/titleBold instead of titleParts)
export interface OcrValueSectionData {
  titleNormal: string;
  titleBold: string;
  valueItems: ValueItem[];
}

export interface OcrTimeLineData {
  titlenormal: string;
  titleBold: string;
  timeLineItems: TimeLineStep[];
}

export interface OcrEmpowerData {
  title: string;
  items: EmpowerItem[];
}

// Custom Software Development
// Hero
export const CustomHero: HeroVariant = {
  title: 'Custom Software Development',
  topDescription: 'Engineering',
  bottomDescription:
    'At Virtuosoft, we craft custom software solutions designed to fit your unique business processes and goals perfectly. From enterprise-grade applications to scalable digital platforms, we engineer custom software that transforms your operations, drives growth and establishes a durable competitive edge.',
  btnTitle: 'Build Your Digital Advantage',
  ...heroStyle,
};

// Value Section A.I
//Why Every Modern Business Needs Intelligent AI Agents?
const valueImg = 'assets/Images/service/ai';
export const valueData: ValueSectionData[] = [
  {
    titleParts: [
      "Where ",
      { text: "Tailored Technology", bold: true },
      " Solves Unique Business Challenges"
    ],
    valueItems: [
      {
        title: "Off-the-Shelf Software Limitations",
        description:
          "Generic platforms forcing you to adapt your workflow? We build software that adapts to you, automating and perfecting your unique business processes.",
        image: `/${valueImg}/automate.svg`,
      },
      {
        title: "Need for a Proprietary Competitive Edge",
        description:
          "When market differentiation is key, we develop unique features and proprietary systems that competitors cannot replicate, securing your market position.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "Complex Integration Requirements",
        description:
          "Struggling with data silos between legacy systems and modern tools? We build the connective tissue, seamless integrations that unify your entire technology ecosystem.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "Scalability and Future-Proofing Demands",
        description:
          "Anticipating rapid growth? We architect solutions on scalable, modern foundations that evolve with your business, avoiding costly rebuilds down the line.",
        image: `/${valueImg}/solve.svg`,
      },
      {
        title: "Stringent Security and Compliance Needs",
        description:
          "Operating in regulated industries? We engineer software with robust, tailored security protocols and full data sovereignty, ensuring compliance and protecting your IP",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "Pursuit of Operational Excellence",
        description:
          "Manual processes slowing you down? We identify and automate critical workflows, eliminating bottlenecks and freeing your team to focus on strategic innovation.",
        image: `/${valueImg}/enable.svg`,
      },
    ]
  }
]

// TimeLine 
//Process for Building Intelligent AI Agents
export const stepsDataCustomSoftware: TimeLineData[] = [
  {
    titleParts: [
      "From",
      { text: "Vision to Value-Driven", bold: true },
      "Deployment"
    ],

    timeLineItems: [
      {
        title: "Discovery & Strategic Blueprinting",
        description:
          "We deeply analyze your business objectives, user needs and technical landscape to define a clear project vision, scope and success metrics.",
      },
      {
        title: "Architecture & Technology Stack Selection",
        description:
          "Our architects design the optimal system structure and select the right technologies for performance, security, scalability and long-term maintainability.",
      },
      {
        title: "UI/UX Design & Interactive Prototyping",
        description:
          "We design intuitive, user-centered interfaces and build clickable prototypes to validate workflows and ensure an exceptional user experience before development.",
      },
      {
        title: "Agile Development & Iterative Building",
        description:
          "Our certified developers build your solution in transparent, two-week sprints, providing regular demos for continuous feedback and alignment.",
      },
      {
        title: "Rigorous Quality Assurance & Testing",
        description:
          "We conduct comprehensive testing, including unit, integration, security and performance tests to ensure reliability, security and flawless functionality.",
      },
      {
        title: "Deployment & Production Launch",
        description:
          "We manage the full release process, including environment setup, data migration and go-live support, ensuring a smooth transition to production.",
      },
      {
        title: "Integration & Knowledge Transfer",
        description: "We seamlessly connect the new software with your existing systems and provide complete documentation and training to empower your team."
      },
      {
        title: "Ongoing Support & Evolution",
        description: "We offer post-launch support, maintenance and iterative enhancements to ensure your software continues to deliver value and adapt to new needs."
      }
    ],
    businessOutComes: [
      { 
        point:"A perfectly aligned digital asset that accelerates core business processes"
      },
      {
        point:"A unique, market-differentiating proprietary advantage"
      },
      {
        point:"A unified, efficient and future-proof technology ecosystem"
      },
      {
        point:"Enhanced security, compliance and complete ownership of your IP"
      },
      {
        point:"Sustainable operational efficiency through intelligent automation"
      }
    ]
  }
];

//Empower
//End-to-End Tailored Technology Solutions
export const CustomEmpower: EmpowerData[] = [
  {
    title: "End-to-End Tailored Technology Solutions",
    items: [
      {
        title: "Enterprise Application Development",
        description:
          "Build robust, scalable internal tools for CRM, ERP, HRM and complex business process management."
      },
      {
        title: "Web Application Development",
        description:
          "Create secure, high-performance web portals, SaaS platforms and dynamic customer-facing applications."
      },
      {
        title: "Mobile App Development (Native & Cross-Platform)",
        description:
          "Develop engaging iOS and Android applications using native or cross-platform frameworks like Flutter and React Native."
      },
      {
        title: "Cloud-Native Development & Migration",
        description:
          "Design, build and modernize applications using microservices, serverless architecture and containerization on AWS, Azure or GCP."
      },
      {
        title: "API-First Integration & Middleware Development",
        description:
          "Develop custom APIs and middleware to seamlessly connect disparate software systems, databases and third-party services."
      },
      {
        title: "Legacy System Modernization & Re-engineering",
        description:
          "Refactor, rebuild or migrate outdated monolithic applications to modern, scalable and maintainable architectures."
      },
      {
        title: "Real-Time Data & Dashboard Development",
        description:
          "Build interactive real-time dashboards, reporting tools and data visualization platforms for actionable business intelligence."
      },
      {
        title: "E-commerce & Marketplace Platform Development",
        description:
          "Create custom online stores, B2B portals or multi-vendor marketplaces with tailored features and scalable infrastructure."
      },

    ]
  }
]

//Application Development
//Hero
export const AppDevHero: HeroVariant = {
  title: 'Application Development',
  topDescription: 'Engineering',
  bottomDescription:
    'At Virtuosoft, we turn your vision into powerful digital solutions. Our experts design, build and scale custom applications using React, Node.js and cloud technologies, creating intuitive experiences, robust functionality and scalable architecture that accelerate your business growth.',
  btnTitle: 'Start Development',
  ...heroStyle,
};

//Why are Businesses Adopting Generative AI Today?
export const valueDataAppDev: ValueSectionData[] = [
  {
     titleParts: [
      "Why Should You Invest in Custom ",
      { text: "Application Development", bold: true }
    ],
    valueItems: [
      {
        title: "Eliminate Operational Inefficiencies",
        description: "Manual processes are slowing growth and increasing costs. Our custom applications automate workflows and eliminate repetitive tasks, enabling your team to focus on strategic business initiatives.",
        image: `/${valueImg}/automate.svg`,
      },
      {
        title: "Solve Customer Engagement Challenges",
        description:
          "Generic solutions are failing to meet user expectations. We create tailored applications that deliver personalized experiences, driving higher retention and strengthening customer relationships.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "Overcome Scaling Limitations",
        description:
          "Existing systems are struggling with increased demand. Our scalable applications ensure your technology grows with your business, maintaining reliability during expansion periods.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "Address Competitive Gaps",
        description:
          "Competitors are gaining ground with better technology. We develop distinctive applications that provide unique capabilities, helping you capture market attention and stand out.",
        image: `/${valueImg}/solve.svg`,
      },
      {
        title: "Modernize Outdated Infrastructure",
        description:
          "Legacy systems are restricting innovation and creating risks. Our custom applications replace aging technology with secure, compatible solutions that support future growth.",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "Enable Data-Driven Decision Making",
        description:
          "Unclear insights are hindering business choices. Our applications integrate advanced analytics, transforming complex data into actionable intelligence for strategic planning.",
        image: `/${valueImg}/enable.svg`,
      },
    ]
  }
]


// TimeLine 
//Process for Building Intelligent AI Agents
export const stepsDataAppDev: TimeLineData[] = [
  {
    titleParts: [
      "",
      { text: "Application Development", bold: true },
      "Process"
    ],
    timeLineItems: [
      {
        title: "Strategic Planning",
        description:
          "We transform your vision into a detailed, actionable development roadmap for success.",
      },
      {
        title: "UI/UX Design & Prototyping",
        description:
          "Crafting intuitive and engaging user experiences that customers will love.",
      },
      {
        title: "Agile Development & Engineering",
        description:
          "Building robust, scalable applications with clean code and modern frameworks",
      },
      {
        title: "Rigorous Testing & Quality Assurance",
        description:
          "Ensuring flawless performance, security and reliability before launch.",
      },
      {
        title: "Deployment & Optimization",
        description:
          "Launching your product and providing continuous improvements for growth.",
      }
    ]
  }
];

//Empower
//Empower Your Operations with AI Agents
export const EmpowerGen: EmpowerData[] = [
  {
    title: "Boost Efficiency with AI Innovation",
    items: [
      {
        title: "Custom AI Solutions",
        description:
          "Build custom AI models tailored to your business needs. These algorithms enhance performance, deliver insights and create lasting competitive advantage."
      },
      {
        title: "Natural Language Processing (NLP)",
        description:
          "Integrate NLP solutions that analyze language, extract insights and automate conversations to improve engagement, accuracy and communication efficiency."
      },
      {
        title: "AI-Powered Support Automation",
        description:
          "Accelerate software delivery using AI-driven tools that generate codebases, refactor and debug code faster with accuracy and reduced development time."
      },
      {
        title: "AI-Powered Security Systems",
        description:
          "Strengthen your cybersecurity with AI agents that detect vulnerabilities, predict risks and respond to emerging threats in real time."
      },
      {
        title: "Synthetic Data Generation",
        description:
          "Create synthetic datasets to train robust models. These agents enhance diversity, improve accuracy and protect data privacy effectively."
      },
      {
        title: "AI Predictive Analytics",
        description:
          "Use predictive AI to forecast trends, anticipate customer behavior and guide strategic decisions with data-driven clarity and precision."
      },
      {
        title: "Automated Design and Prototyping",
        description:
          "Transform ideas into prototypes faster using AI tools that automate design creation, visualization and production workflows efficiently."
      },
      {
        title: "AI Implementation Support",
        description:
          "Integrate generative AI into existing systems effortlessly. These services ensure smooth compatibility, scalability and reliable performance."
      }
    ]
  }
]

//Application Modernization
//Hero
export const AppModHero: HeroVariant = {
  title: 'Application Modernization',
  topDescription: 'Engineering',
  bottomDescription:
    'At Virtuosoft, we transform legacy systems into cloud-native platforms using microservices architecture, containerization and DevOps automation, delivering scalable, secure and future-ready applications that accelerate your digital evolution.',
  btnTitle: 'Modernize with Virtuosoft',
  ...heroStyle,
};
// Value Section A.I
//When Intelligence + Automation Become Your Competitive Advantage? 
export const valueDataAppMod: ValueSectionData[] = [
  {
    titleParts: [
      "Why Should ",
      { text: "Businesses Modernize Their Applications", bold: true },
      " Now"
    ],
    valueItems: [
      {
        title: "Accelerate Digital Transformation",
        description:
          "Modernization eliminates inefficient processes through automation and agile methodologies. We help you implement streamlined workflows that reduce operational friction and accelerate time-to-market for your digital initiatives.",
        image: `/${valueImg}/automate.svg`,
      },
      {
        title: "Overcome Technical Debt",
        description:
          "Legacy systems create mounting maintenance costs and compatibility issues. Our modernization approach replaces outdated architecture with cloud-native solutions that scale effortlessly with your growing business needs.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "Optimize Total Cost of Ownership",
        description:
          "Reduce unnecessary spending on legacy maintenance and inefficient infrastructure. Our solutions leverage cloud economics and automated processes to deliver significant cost savings while improving performance metrics.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "Strengthen Security Posture",
        description:
          "Outdated applications expose your business to evolving cyber threats. We integrate advanced security frameworks and compliance measures that protect your data and maintain regulatory adherence across all systems.",
        image: `/${valueImg}/solve.svg`,
      },
      {
        title: "Enhance System Performance",
        description:
          "Eliminate bottlenecks slowing down your business operations. Our modernization improves application responsiveness and reliability, ensuring seamless user experiences even during peak demand periods.",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "Future-Proof Your Technology",
        description:
          "Stay competitive with modern, adaptable technology stacks. We upgrade your infrastructure to support emerging innovations, ensuring your business remains agile and responsive to market changes.",
        image: `/${valueImg}/enable.svg`,
      },
    ]
  }
]

// TimeLine 
//Process for Building Intelligent AI Agents
export const stepsDataAppMod: TimeLineData[] = [
  {
    titleParts: [
      { text: "Application Modernization", bold: true },
      " Solutions"
    ],
    timeLineItems: [
      {
        title: "System Review",
        description:
          "We begin by thoroughly assessing your current applications to pinpoint performance bottlenecks and technical debt.",
      },
      {
        title: "Plan Creation",
        description:
          "Our team then creates a detailed, phased transformation plan aligned with your specific business objectives.",
      },
      {
        title: "Architecture Design",
        description:
          "We design a scalable cloud-native foundation using microservices and modern technology stacks.",
      },
      {
        title: "Code Upgrade",
        description:
          "Next, we systematically modernize your codebase, enhancing functionality while maintaining business logic integrity.",
      },
      {
        title: "Data Transfer",
        description:
          "We carefully migrate and integrate your data assets to the new environment, ensuring integrity.",
      },
      {
        title: "Testing & Optimization",
        description:
          "Each modernized component undergoes thorough testing for performance, security, and reliability validation.",
      },
      {
        title: "Go-Live",
        description: "We execute a carefully managed rollout with comprehensive monitoring and instant rollback capabilities."
      },
      {
        title: "Ongoing Updates",
        description: "Finally, we implement ongoing optimizations based on real-world usage data and evolving needs."
      }
    ]
  }
];

//Empower
//Intelligent Solutions That Turn Data Into Decisions and Models Into Scalable Systems
export const EmpowerAppMod: EmpowerData[] = [
  {
    title: "Modernize Your Applications with Confidence and Speed",
    items: [
      {
        title: "Application Assessment & Modernization Strategy",
        description:
          "Gain a clear modernization roadmap with a deep assessment of your legacy systems. We identify technical gaps, inefficiencies and risks, then craft a tailored, business-aligned transformation strategy."
      },
      {
        title: "Cloud Migration & Optimization",
        description:
          "Move from outdated on-prem systems to scalable cloud environments. We ensure seamless migration with minimal downtime while enhancing performance, flexibility and long-term cost efficiency."
      },
      {
        title: "Legacy System Reengineering",
        description:
          "Rebuild and refactor aging applications into modern, scalable architectures. From monoliths to microservices, we future-proof your systems while preserving critical business logic."
      },
      {
        title: "API-Driven Integration",
        description:
          "Unlock interoperability with custom APIs and integrations. We connect legacy and modern systems to streamline workflows and enable real-time data exchange across your ecosystem."
      },
      {
        title: "UI/UX Modernization",
        description:
          "Upgrade outdated interfaces with intuitive, responsive and accessible designs. We deliver modern UI experiences that boost user satisfaction and productivity."
      },
      {
        title: "Performance Enhancement",
        description:
          "Eliminate bottlenecks and maximize efficiency. Our team fine-tunes your applications for faster load times, higher reliability and sustained performance at scale."
      },
      {
        title: "Security Hardening & Compliance",
        description: "Strengthen your security posture with updated controls, encryption, threat protection and compliance with today’s standards. Your modernized systems stay secure and audit-ready."
      },
      {
        title: "DevOps & Automation Enablement",
        description: "Accelerate delivery with CI/CD pipelines, infrastructure automation and DevOps best practices. We modernize how your teams build, deploy and maintain applications."
      },
      {
        title: "Data Modernization & Analytics",
        description: "Transform legacy data into a strategic asset. We modernize storage, cleansing, governance and analytics to enable real-time insights and AI-ready data ecosystems."
      },
      {
        title: "Continuous Support & Lifecycle Management",
        description: "Modernization doesn’t end at deployment. We provide proactive monitoring, updates and maintenance to ensure your applications stay optimized, stable and future-ready."
      }
    ]
  }
]

//Database Migration
//Hero
export const DataMigHero: HeroVariant = {
  title: 'Database Migration',
  topDescription: 'Engineering',
  bottomDescription:
    'At Virtuosoft, we deliver secure, seamless and zero-downtime database migration services that help organizations modernize their data infrastructure. From legacy systems to cloud-native databases, we ensure data integrity, performance optimization and minimal business disruption throughout the migration journey.',
  btnTitle: 'Migrate With Confidence',
  ...heroStyle,
};

//Why are Businesses Adopting Generative AI Today?
export const valueDataMig: ValueSectionData[] = [
  {
    titleParts: [
      "When Do You Need ",
      { text: "Database Migration", bold: true }
    ],
    valueItems: [
      {
        title: "Legacy Systems Limiting Growth",
        description: "Outdated databases slow performance and restrict scalability. We migrate legacy systems to modern, high-performance platforms.",
        image: `/${valueImg}/automate.svg`,
      },
      {
        title: "Cloud Adoption & Modernization Initiatives",
        description:
          "Moving to AWS, Azure or Google Cloud? Our experts ensure smooth, secure cloud database transitions.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "Performance Bottlenecks & Downtime Issues",
        description:
          "Improve query speed, availability and reliability with optimized database architectures.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "High Maintenance & Licensing Costs",
        description:
          "Reduce infrastructure and licensing expenses by migrating to cost-effective, open-source or cloud-managed databases.",
        image: `/${valueImg}/solve.svg`,
      },
      {
        title: "Security & Compliance Requirements",
        description:
          "Meet modern compliance standards with encrypted, well-governed database environments.",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "Mergers, Acquisitions & System Consolidation",
        description:
          "Unify multiple databases into a single, streamlined data ecosystem.",
        image: `/${valueImg}/enable.svg`,
      },
    ]
  }
]

// TimeLine 
//Our Database Migration Process
export const stepsDataMig: TimeLineData[] = [
  {
    titleParts: [
      "Our ",
      { text: "Database Migration", bold: true },
      "Process"
    ],
    timeLineItems: [
      {
        title: "Discovery & Assessment",
        description:
          "Analyze existing databases, dependencies, data volume and business constraints.",
      },
      {
        title: "Migration Strategy & Planning",
        description:
          " Define migration type (lift-and-shift, re-platform, re-architect) and success metrics.",
      },
      {
        title: "Data Mapping & Schema Design",
        description:
          " Map data models, transform schemas and resolve compatibility issues.",
      },
      {
        title: "Environment Setup",
        description:
          " Prepare target environments including cloud, hybrid or on-prem infrastructure.",
      },
      {
        title: "Migration Execution",
        description:
          "Perform secure data transfer using automated tools and proven methodologies.",
      },
      {
        title: "Validation & Testing",
        description:
          "Verify data accuracy, integrity, performance and application compatibility.",
      },
      {
        title: "Cutover & Go-Live",
        description:
          "Execute controlled cutover with minimal downtime and rollback planning."
      },
      {
        title: "Post-Migration Optimization & Support",
        description: "Optimize queries, tune performance and provide ongoing support."
      }
    ],
      businessOutComes: [
      { 
        point:"Zero or Minimal Downtime"
      },
      {
        point:"Improved Database Performance"
      },
      {
        point:"Enhanced Security & Compliance"
      },
      {
        point:"Lower Operational Costs"
      },
      {
        point:"Future-Ready Data Architecture"
      }
    ]
  }
];

//Empower
//Intelligent Solutions That Turn Data Into Decisions and Models Into Scalable Systems
export const EmpowerDataMig: EmpowerData[] = [
  {
    title: "End-to-End Migration Expertise",
    items: [
      {
        title: "Legacy to Modern Database Migration",
        description:
          "Migrate from outdated systems like Oracle, SQL Server or mainframes to modern platforms."
      },
      {
        title: "Cloud Database Migration",
        description:
          "Seamless migration to AWS RDS, Azure SQL, Google Cloud SQL, DynamoDB, BigQuery and more."
      },
      {
        title: "Cross-Database Migration",
        description:
          "Move between heterogeneous databases (e.g., Oracle to PostgreSQL, MySQL to Aurora)."
      },
      {
        title: "Data Transformation & Cleansing",
        description:
          "Improve data quality through normalization, validation and enrichment."
      },
      {
        title: "Minimal Downtime Migration",
        description:
          "Use replication and synchronization strategies to ensure business continuity."
      },
      {
        title: "Security & Compliance Enablement",
        description:
          "Encrypt data in transit and at rest while maintaining regulatory compliance."
      },
      {
        title: "Application Compatibility Assurance",
        description: "Ensure applications continue to perform smoothly post-migration."
      },
      {
        title: "Performance Tuning & Optimization",
        description: "Optimize indexing, queries and configurations for peak efficiency."
      }
    ],
  }
]

//Third-Party Integration
//Hero
export const ThirdPartyHero: HeroVariant = {
  title: 'Third-Party Integration',
  topDescription: 'Engineering',
  bottomDescription:
    'At Virtuosoft, we enable third-party integrations that connect your applications, platforms and data ecosystems. From APIs and SaaS tools to enterprise systems, we ensure secure, scalable and reliable integrations that enhance functionality, automate workflows and accelerate digital growth.',
  btnTitle: 'Integrate Without Friction',
  ...heroStyle,
};

//When Do You Need Third-Party Integration?
export const valueDataThirdParty: ValueSectionData[] = [
  {
    titleParts: [
      "When Do You Need ",
      { text: "Third-Party Integration", bold: true }
    ],
    valueItems: [
      {
        title: "Disconnected Systems & Data Silos",
        description: "Break down silos by integrating platforms for real-time data exchange and unified operations.",
        image: `/${valueImg}/automate.svg`,
      },
      {
        title: "Expanding Digital Capabilities",
        description:
          " Add new features quickly by integrating external services such as payment gateways, CRM or analytics tools.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "Scaling Business Operations",
        description:
          "Ensure systems communicate efficiently as your business grows and transaction volumes increase.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "Manual Processes & Workflow Inefficiencies",
        description:
          "Automate repetitive tasks by integrating tools across sales, finance, marketing and operations.",
        image: `/${valueImg}/solve.svg`,
      },
      {
        title: "Multi-Platform Customer Experiences",
        description:
          "Deliver consistent user experiences across web, mobile and third-party channels.",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "Security & Compliance Requirements",
        description:
          "Ensure integrations meet industry standards for data protection and regulatory compliance.",
        image: `/${valueImg}/enable.svg`,
      },
    ]
  }
]

// TimeLine 
//Our Integration Process
export const stepsDataThirdParty: TimeLineData[] = [
  {
    titleParts: [
      "Our ",
      { text: "Integration Process", bold: true }
    ],
    timeLineItems: [
      {
        title: "Requirement Analysis",
        description:
          "Understand business objectives, integration scope and system dependencies.",
      },
      {
        title: "API & Architecture Assessment",
        description:
          "Evaluate APIs, protocols, data formats and security requirements.",
      },
      {
        title: "Integration Strategy Design",
        description:
          "Define integration patterns (point-to-point, middleware, event-driven) and success criteria.",
      },
      {
        title: "Development & Configuration",
        description:
          "Build and configure secure, scalable integrations using best practices.",
      },
      {
        title: "Data Mapping & Transformation",
        description:
          "Ensure accurate data exchange through schema mapping and transformation logic.",
      },
      {
        title: "Testing & Validation",
        description:
          "Test functionality, performance, error handling and security.",
      },
      {
        title: "Deployment & Go-Live",
        description: "Deploy integrations with monitoring and rollback strategies."
      },
      {
        title: "Monitoring & Optimization",
        description: "Continuously monitor performance and optimize for reliability and scale."
      },
    ],
     businessOutComes: [
      { 
        point:"Unified System Connectivity"
      },
      {
        point:"Faster Feature Enablement"
      },
      {
        point:"Automated Workflows"
      },
      {
        point:"Improved Data Accuracy"
      },
      {
        point:"Scalable Integration Architecture"
      }
    ]
  }
];

//Empower
//Visual Intelligence Built for Real-World Impact
export const EmpowerThirdParty: EmpowerData[] = [
  {
    title: "Flexible, Secure & Scalable Integrations",
    items: [
      {
        title: "API Integration (REST, GraphQL, SOAP)",
        description:
          "Connect applications using modern and legacy APIs."
      },
      {
        title: "SaaS & Cloud Platform Integration",
        description:
          "Integrate tools like Salesforce, HubSpot, Stripe, Shopify, ServiceNow and more."
      },
      {
        title: "Payment Gateway Integration",
        description:
          "Enable secure payments with Stripe, PayPal, Square and regional providers."
      },
      {
        title: "CRM & ERP Integration",
        description:
          "Sync data across CRM, ERP and business systems for operational efficiency."
      },
      {
        title: "Middleware & iPaaS Solutions",
        description:
          "Leverage platforms like MuleSoft, Boomi and Zapier for scalable integration."
      },
      {
        title: "Event-Driven & Real-Time Integrations",
        description:
          "Enable real-time updates using webhooks and message queues."
      },
      {
        title: "Security & Authentication",
        description: "Implement OAuth, JWT, API keys and encryption for secure data exchange."
      },
      {
        title: "Monitoring & Error Handling",
        description: "Ensure reliability with logging, alerts and automated retries."
      }
    ],
  }
]

//Optical Character Recognition
//Hero
export const OcrHero: HeroVariant = {
  title: 'OCR (Optical Character Recognition)',
  topDescription: 'Artificial Intelligence',
  bottomDescription:
    'At Virtuosoft, we deliver intelligent OCR solutions that convert scanned documents, images, and handwritten text into structured, searchable, and actionable data. By combining AI, computer vision, and NLP, we help businesses eliminate manual data entry, improve accuracy, and accelerate document-driven workflows.',
  btnTitle: 'Unclock Text Intelligence',
  ...heroStyle,
};

//Turning Documents into Digital Intelligence
export const valueDataOcr: OcrValueSectionData[] = [
  {
    titleNormal: "Turning Documents into ",
    titleBold: "Digital Intelligence",
    valueItems: [
      {
        title: "Manual Data Entry Slowing You Down",
        description: "Paper-based processes drain time and resources. Our OCR automates text extraction, reducing errors and accelerating operation",
        image: `/${valueImg}/automate.svg`,
      },
      {
        title: "Unstructured Document Overload",
        description:
          "Invoices, forms, PDFs, and contracts hold valuable data. We transform unstructured documents into usable, structured information.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "Compliance & Record-Keeping Challenges",
        description:
          "Digitize and index documents for faster audits, traceability, and regulatory compliance.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "High Processing Costs",
        description:
          "Cut operational expenses by automating document handling, classification, and validation.",
        image: `/${valueImg}/solve.svg`,
      },
      {
        title: "Low Searchability & Accessibility",
        description:
          "Enable instant search, retrieval, and analysis of documents across your organization.",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "Scalability & Accuracy Concerns",
        description:
          "Our AI-powered OCR scales across millions of documents while maintaining high recognition accuracy.",
        image: `/${valueImg}/enable.svg`,
      },
    ]
  }
]

// TimeLine 
//From Document Capture to Actionable Data
export const stepsDataOcr: OcrTimeLineData[] = [
  {
    titlenormal: "From Document Capture to",
    titleBold: "Actionable Data",
    timeLineItems: [
      {
        title: "Use-Case & Document Analysis",
        description:
          "We identify document types, formats, languages, and accuracy requirements.",
      },
      {
        title: "Data Ingestion & Preprocessing",
        description:
          "Images and documents are enhanced using noise reduction, alignment, and quality optimization.",
      },
      {
        title: "OCR Model Selection & Training",
        description:
          "We apply advanced OCR engines and AI models optimized for printed, handwritten, or mixed text.",
      },
      {
        title: "Text Extraction & Structuring",
        description:
          "Extracted text is converted into structured formats such as tables, fields, and metadata.",
      },
      {
        title: "Validation & Accuracy Enhancement",
        description:
          "We apply rule-based checks, AI validation, and confidence scoring to improve precision.",
      },
      {
        title: "System Integration",
        description:
          "OCR outputs are integrated with ERP, CRM, DMS, or workflow automation systems.",
      },
      {
        title: "Deployment & Scaling",
        description: "Deploy OCR solutions across cloud, on-prem, or edge environments for high-volume processing."
      },
      {
        title: "Monitoring & Continuous Improvement",
        description: "We monitor accuracy, retrain models, and optimize performance over time."
      },
    ]
  }
];

//Empower
//Smarter Document Processing at Scale
export const EmpowerOcr: OcrEmpowerData[] = [
  {
    title: "Smarter Document Processing at Scale",
    items: [
      {
        title: "Document Digitization",
        description:
          "Convert scanned documents, PDFs, and images into editable, searchable text."
      },
      {
        title: "Intelligent Invoice & Form Processing",
        description:
          "Automatically extract key fields such as totals, dates, IDs, and line items."
      },
      {
        title: "Handwritten Text Recognition (HTR)",
        description:
          "Accurately digitize handwritten notes, forms, and records."
      },
      {
        title: "Multi-Language OCR",
        description:
          "Support global operations with OCR models trained across multiple languages."
      },
      {
        title: "Table & Layout Recognition",
        description:
          "Preserve document structure including tables, headers, and formatting."
      },
      {
        title: "ID & KYC Document Processing",
        description:
          "Extract data from passports, IDs, and licenses for onboarding and verification."
      },
      {
        title: "OCR with NLP Intelligence",
        description: "Combine OCR with NLP for classification, sentiment analysis, and entity extraction."
      },
      {
        title: "Workflow Automation Integration",
        description: "Trigger approvals, validations, and downstream actions using OCR-driven workflows."
      }
    ],
  }
]


