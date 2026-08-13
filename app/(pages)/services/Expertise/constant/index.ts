import type { TitlePart, TimeLineStep, BusinessOutcome } from '../../common/TimeLine';
import type { ValueItem } from '../../common/ValueSection';
import type { EmpowerItem } from '../../common/Empower';
import Src from '@/public/assets/Images/service/as_service.png';
import type { HeroVariant, HeroStyle } from '../../common/Hero';

// Visual variant for this vertical's Hero — merged once into every service's
// Hero data below, so pages only ever import the fully-assembled constant.
const heroStyle: HeroStyle = {
  image: Src,
  imageAlt: 'AI Agents',
  sectionClassName: 'bg-linear-to-br from-[#084387] to-[#021021] text-white border-white/5',
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

// RPA Solution & Transformation
// Hero
export const RpaHero: HeroVariant = {
  title: 'Robotic Process Automation (RPA) Transformation',
  topDescription: 'Expertise',
  bottomDescription:
    'At Virtuosoft, we empower enterprises to reimagine workflows through intelligent automation using Robotic Process Automation (RPA). ' +
    'By integrating cognitive bots and optimizing repetitive processes, businesses achieve greater accuracy, efficiency and compliance with scalable and resilient automation solutions.',
  btnTitle: 'Redefine Operational Efficiency',
  ...heroStyle,
};

// When Should Organizations Embrace RPA?
const valueImg = 'assets/Images/service/ai';
export const valueDataRpa: ValueSectionData[] = [
  {
    titleParts: [
      "When to Embrace ",
      { text: "RPA Transformation", bold: true }
    ],
    valueItems: [
      {
        title: "Workflow Inefficiency",
        description:
          "Repetitive manual tasks slow operations and limit output. At Virtuosoft, we implement automated solutions that replace time-consuming steps with streamlined digital workflows, improving speed, precision and consistency.",
        image: `/${valueImg}/automate.svg`,
      },
      {
        title: "Human Error Risks",
        description:
          "Manual processes often invite errors and data inconsistencies. Our team deploys RPA to ensure accuracy at every stage, standardizing operations and strengthening quality control across business units.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "Rising Operational Costs",
        description:
          "High labor and process costs restrict profitability. Automation minimizes repetitive workloads, helping enterprises lower costs while maintaining operational excellence.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "Limited Scalability",
        description:
          "Traditional systems struggle to expand efficiently. Our scalable RPA solutions enable rapid adaptation to demand shifts without additional resource strain or workflow disruption.",
       image: `/${valueImg}/solve.svg`,
      },
      {
        title: "Compliance Pressures",
        description:
          "Strict regulatory environments require precision and accountability. Our automated systems ensure accurate data handling, audit readiness and continuous compliance with evolving standards.",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "Process Rigidity",
        description:
          "Dynamic markets demand agility. RPA empowers businesses to adjust workflows quickly, optimizing responsiveness and ensuring flexibility in fast-changing conditions.",
        image: `/${valueImg}/enable.svg`,
      },
    ]
  }
];

// TimeLine
// A Structured Path to Intelligent Automation
export const stepsDataRpa: TimeLineData[] = [
  {
    titleParts: [
      "Driving Precision Through ",
      { text: "Process Automation", bold: true }
    ],
    timeLineItems: [
      {
        title: "Automation Discovery",
        description:
          "High-volume, rule-based tasks are evaluated to identify areas where automation can deliver the greatest efficiency and resource savings.",
      },
      {
        title: "Process Assessment",
        description:
          "Each process is analyzed in depth to determine its automation readiness, potential ROI and alignment with operational goals.",
      },
      {
        title: "Solution Architecture",
        description:
          "A detailed automation blueprint is designed, defining bot workflows, integrations and success metrics tailored to enterprise needs.",
      },
      {
        title: "Bot Development",
        description:
          "Automation bots are built and configured to replicate defined processes with precision, consistency and compliance.",
      },
      {
        title: "System Validation",
        description:
          "Comprehensive testing ensures every bot performs reliably under real business conditions, validating accuracy and efficiency.",
      },
      {
        title: "Seamless Deployment",
        description:
          "Automated workflows are deployed into production environments with minimal disruption, ensuring smooth operational adoption.",
      },
      {
        title: "Continuous Monitoring",
        description:
          "Bots are actively monitored and fine-tuned for performance, ensuring adaptability to system or process changes.",
      },
      {
        title: "Scalable Expansion",
        description:
          "Successful implementations are scaled across departments, optimizing performance and maximizing automation ROI enterprise-wide.",
      },
    ],
    businessOutComes: [
      { point: "Streamlined process efficiency" },
      { point: "Greater operational scalability" },
      { point: "Strengthened compliance and security" },
      { point: "Seamless system integration" },
      { point: "Ongoing process optimization" }
    ]
  }
];

// Empower
// RPA Capabilities & Implementation Services
export const RpaEmpower: EmpowerData[] = [
  {
    title: "Comprehensive RPA Services",
    items: [
      {
        title: "Process Discovery",
        description:
          "Process mining and assessment tools identify automation-ready workflows by analyzing complexity, transaction volume and rule-based dependencies.",
      },
      {
        title: "Automation Strategy",
        description:
          "A tailored RPA roadmap is developed, including tool selection, architecture design and phased implementation aligned with core business and IT objectives.",
      },
      {
        title: "Bot Development",
        description:
          "Automation bots are built and configured using platforms such as UiPath, Blue Prism and Automation Anywhere, customized to meet unique workflow and system requirements.",
      },
      {
        title: "System Integration",
        description:
          "Seamless integration ensures bots communicate effectively with enterprise systems, databases and applications, enabling unified automation across the organization.",
      },
      {
        title: "Security Compliance",
        description:
          "Role-based access, encryption and automated audit logs safeguard data integrity and ensure full compliance with industry standards.",
      },
      {
        title: "Change Enablement",
        description:
          "Structured change management and RPA training programs prepare teams for adoption, building confidence and maximizing long-term automation value.",
      },
      {
        title: "Performance Monitoring",
        description:
          "Real-time dashboards track bot activity and process metrics, uncovering optimization opportunities and ensuring continuous performance improvement.",
      },
      {
        title: "Ongoing Support",
        description:
          "Dedicated maintenance ensures bots stay current, secure and efficient, with regular updates, issue resolution and feature enhancements.",
      },
      {
        title: "RPA-as-a-Service",
        description:
          "Cloud-based RPA deployment offers scalability with minimal upfront investment, delivering hosted bots, managed services and continuous upgrades.",
      },
      {
        title: "Custom Solutions",
        description:
          "Tailored RPA development addresses unique processes, specialized integrations and niche use cases, ensuring solutions fit seamlessly within existing systems.",
      }
    ]
  }
];

// DevOps Solution & Transformation
// Hero
export const DevOpsHero: HeroVariant = {
  title: 'DevOps Transformation & Implementation',
  topDescription: 'Expertise',
  bottomDescription:
    'DevOps combines development and operations to accelerate software delivery through automation, collaboration ' +
    'and continuous improvement throughout the application lifecycle.',
  btnTitle: 'Accelerate Software Delivery',
  ...heroStyle,
};

// When Should Organizations Embrace DevOps? // adjust if you have a different folder
export const valueDataDevOps: ValueSectionData[] = [
  {
    titleParts: [
      "Why Your Organization Should Implement ",
      { text: "DevOps", bold: true }
    ],
    valueItems: [
      {
        title: "Accelerate Deployment Frequency",
        description:
          "DevOps increases deployment frequency by up to 200%, reduces failure rates and accelerates time-to-market while maintaining superior code quality and system reliability.",
        image: `/${valueImg}/automate.svg`,
      },
      {
        title: "Bridge Development and Operations",
        description:
          "Agile focuses on development methodology, while DevOps extends this to include operations, creating a continuous delivery pipeline from code to customer.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "Implement CI/CD Pipelines",
        description:
          "Continuous Integration and Continuous Deployment automate building, testing and releasing software, enabling frequent, reliable updates with minimal manual intervention.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "Automate Infrastructure Management",
        description:
          "Infrastructure as Code (IaC) manages your infrastructure through machine-readable configuration files, enabling version control, repeatability and rapid disaster recovery.",
        image: `/${valueImg}/solve.svg`,
      },
      {
        title: "Foster Team Collaboration & Culture",
        description:
          "We foster collaboration between development and operations through shared goals, automated processes and blameless post-mortems that encourage continuous learning.",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "Optimize Cloud Costs & Resources",
        description:
          "Through automated scaling, resource optimization and continuous monitoring, DevOps typically reduces cloud spending by 20-35% while improving performance.",
        image: `/${valueImg}/enable.svg`,
      },
      {
        title: "Embed Security Throughout (DevSecOps)",
        description:
          "Security is integrated into the pipeline with automated scanning, compliance checks and testing at every stage of development.",
        image: `/${valueImg}/automate.svg`,
      },
      {
        title: "Measure Success with Key Metrics",
        description:
          "We track deployment frequency, lead time for changes, mean time to recovery and change failure rate to demonstrate clear ROI.",
        image: `/${valueImg}/scale.svg`,
      },
    ]
  }
];

// TimeLine 
// A Structured Path to DevOps Excellence
export const stepsDataDevOps: TimeLineData[] = [
  {
    titleParts: [
      "A Structured Approach to ",
      { text: "DevOps Transformation", bold: true }
    ],
    timeLineItems: [
      {
        title: "Assessment & Readiness Review",
        description:
          "We begin with an assessment of current processes, tools and workflows to identify DevOps opportunities.",
      },
      {
        title: "CI/CD Implementation",
        description:
          "Implement automated build, test and deployment pipelines using Jenkins, Git, Docker and Kubernetes.",
      },
      {
        title: "Infrastructure as Code Setup",
        description:
          "Automate infrastructure provisioning using tools like Terraform and CloudFormation for repeatable, reliable deployments.",
      },
      {
        title: "Monitoring & Feedback Loops",
        description:
          "Establish monitoring, alerting and logging frameworks to maintain high reliability and visibility.",
      },
      {
        title: "Security Integration",
        description:
          "Incorporate automated security scans, policy checks and compliance monitoring within the delivery pipeline.",
      },
      {
        title: "Continuous Improvement & Optimization",
        description:
          "Refine pipelines, enhance collaboration and adopt emerging tools to continuously improve efficiency and reliability.",
      },
    ],
    businessOutComes: [
      { point: "Faster software delivery and deployment cycles" },
      { point: "Higher code quality and reduced failures" },
      { point: "Aligned development and operations teams" },
      { point: "Optimized cloud and resource usage" },
      { point: "Improved security and compliance posture" }
    ]
  }
];

// Empower
// DevOps Capabilities & Implementation Services
export const DevOpsEmpower: EmpowerData[] = [
  {
    title: "Comprehensive DevOps Services",
    items: [
      {
        title: "CI/CD Pipeline Setup",
        description:
          "Implement automated, repeatable pipelines for building, testing and deploying applications."
      },
      {
        title: "Containerization & Orchestration",
        description:
          "Deploy Docker containers and manage them with Kubernetes for scalable and resilient applications."
      },
      {
        title: "Infrastructure as Code (IaC)",
        description:
          "Provision and manage infrastructure via code for consistency, version control and disaster recovery."
      },
      {
        title: "Monitoring & Observability",
        description:
          "Implement logging, metrics and dashboards to provide full visibility and proactive incident detection."
      },
      {
        title: "DevSecOps Integration",
        description:
          "Embed automated security testing and compliance verification throughout the development lifecycle."
      },
      {
        title: "Cloud Optimization & Management",
        description:
          "Continuously optimize cloud resources and costs while maintaining performance and reliability."
      },
      {
        title: "Team Enablement & Culture Shift",
        description:
          "Train and guide teams to embrace DevOps practices, collaboration, and continuous improvement mindset."
      }
    ]
  }
];