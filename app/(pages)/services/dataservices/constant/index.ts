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

// Data Strategy Consulting
// Hero
export const DataStrategyHero: HeroVariant = {
  title: 'Data Strategy Consulting',
  topDescription: 'Data Services',
  bottomDescription:
    'We transform data from a passive asset into your most powerful strategic engine. ' +
    'At Virtuosoft, we architect actionable, future-proof data strategies that align your technology, processes and people — ' +
    'enabling you to collect, govern, analyze and activate data to drive innovation, optimize operations, ' +
    'and secure decisive competitive advantage.',
  btnTitle: 'Architect Your Data-Driven Future',
  ...heroStyle,
};

// When Does Your Business Need a Data Strategy?
const valueImg = 'assets/Images/service/ai'; // ← adjust path prefix if needed
export const valueDataDataStrategy: ValueSectionData[] = [
  {
    titleParts: [
      "Why Is a Data Strategy ",
      { text: "Your Foundation for Growth", bold: true }
    ],
    valueItems: [
      {
        title: "Data Silos Hindering a Unified Business View",
        description:
          "When critical information is trapped in departmental systems, we design strategies to integrate data, " +
          "providing leadership with a single source of truth for faster, better decision making.",
        image: `/${valueImg}/automate.svg`,          // ← suggested icon name – replace with actual
      },
      {
        title: "Inability to Derive Actionable Insights from Existing Data",
        description:
          "If you’re collecting data but not leveraging it, we build analytical frameworks and roadmaps " +
          "to translate raw information into clear, actionable business intelligence.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "Concerns Over Data Governance, Quality, and Security",
        description:
          "Lack of control leads to risk and distrust. We establish robust governance models that ensure " +
          "data integrity, security and regulatory compliance across your organization.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "Uncertainty on How to Leverage AI and Advanced Analytics",
        description:
          "We cut through the hype. Our strategy provides a pragmatic, phased roadmap for implementing " +
          "machine learning and AI that delivers tangible ROI.",
        image: `/${valueImg}/solve.svg`,
      },
      {
        title: "Scaling Challenges as Data Volume and Complexity Grow",
        description:
          "Ad-hoc approaches break down. We design scalable data architectures and operating models " +
          "that grow efficiently with your business.",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "Investing in Technology Without a Clear Business Case",
        description:
          "Avoid wasted spend on tools that don't align with goals. We define the capabilities you need, " +
          "ensuring every technology investment supports a specific business outcome.",
        image: `/${valueImg}/enable.svg`,
      },
    ]
  }
];

// TimeLine 
// Building Your Blueprint for Data Excellence
export const stepsDataDataStrategy: TimeLineData[] = [
  {
    titleParts: [
      "Building Your Blueprint for ",
      { text: "Data Excellence", bold: true }
    ],
    timeLineItems: [
      {
        title: "Business Objective Alignment",
        description:
          "We begin by deeply understanding your key business goals and challenges, ensuring the data strategy " +
          "is built to directly impact your bottom line.",
      },
      {
        title: "Current State Assessment & Maturity Audit",
        description:
          "We conduct a thorough evaluation of your existing data assets, architecture, governance, skills " +
          "and culture to establish a clear baseline.",
      },
      {
        title: "Future State Vision & Use Case Prioritization",
        description:
          "We co-create a vision for data-driven success and identify high-impact use cases (e.g., customer 360, " +
          "predictive maintenance) to drive immediate value.",
      },
      {
        title: "Target Data Architecture & Technology Blueprint",
        description:
          "We design the optimal modern data stack (cloud platforms, lakes, warehouses, tools) to support " +
          "your strategic goals efficiently and scalably.",
      },
      {
        title: "Data Governance & Quality Framework Design",
        description:
          "We define the policies, standards, roles and processes needed to ensure trusted, secure and " +
          "well-managed data across its lifecycle.",
      },
      {
        title: "Operating Model & Organizational Roadmap",
        description:
          "We outline the required team structure, skills development and cultural shifts to operationalize " +
          "the strategy and foster data literacy.",
      },
      {
        title: "Implementation Roadmap & Business Case",
        description:
          "We deliver a phased, prioritized action plan with clear milestones, resource requirements " +
          "and a compelling ROI-focused business case.",
      },
      {
        title: "Strategy Communication & Stakeholder Enablement",
        description:
          "We help socialize the strategy across the organization, creating executive presentations " +
          "and materials to secure buy-in and drive adoption.",
      },
    ],
    businessOutComes: [
      {
        point: "A clear, aligned and funded roadmap for becoming a data-driven organization"
      },
      {
        point: "Breakthrough efficiency from breaking down data silos and automating insights"
      },
      {
        point: "Reduced risk and cost through robust data governance and quality controls"
      },
      {
        point: "A scalable technology foundation ready for AI and advanced analytics"
      },
      {
        point: "Empowered teams with the tools, skills and trusted data to make better decisions faster"
      }
    ]
  }
];
//Empower
// Comprehensive Data Strategy Consulting Offerings
// Empower Your Organization with a Robust Data Strategy
export const DataStrategyEmpower: EmpowerData[] = [
  {
    title: "Comprehensive Data Strategy Consulting Offerings",
    items: [
      {
        title: "Data Maturity Assessment & Benchmarking",
        description:
          "Evaluation of your current data capabilities against industry frameworks and best practices to identify gaps and high-priority opportunities."
      },
      {
        title: "Vision & Business Case Development",
        description:
          "Articulating the strategic value of data for your organization and building a compelling financial and operational case for investment."
      },
      {
        title: "Modern Data Architecture Design",
        description:
          "Blueprinting future-state cloud data platforms (lakehouse, data mesh), integration pipelines and optimal tool selection (ETL, BI, analytics platforms)."
      },
      {
        title: "Data Governance & Stewardship Program Design",
        description:
          "Developing the foundational framework for data ownership, quality management, security, privacy compliance (GDPR, CCPA) and enterprise-wide cataloging."
      },
      {
        title: "Master Data Management (MDM) Strategy",
        description:
          "Creating a strategy for defining, managing and distributing critical business data entities (Customer, Product, Supplier, Location, etc.) across the enterprise."
      },
      {
        title: "Advanced Analytics & AI Adoption Roadmap",
        description:
          "A pragmatic, phased plan for incorporating predictive analytics, machine learning, generative AI and other advanced techniques into core business processes."
      },
      {
        title: "Data Monetization Strategy",
        description:
          "Identifying and prioritizing opportunities to create new revenue streams or enhance product value through internal data products and external data commercialization."
      },
      {
        title: "Data Literacy & Culture Change Program",
        description:
          "Designing targeted training, communication and incentive programs to foster a data-driven culture and systematically upskill your workforce."
      },
      {
        title: "Chief Data Officer (CDO) Advisory & Office Setup",
        description:
          "Providing interim leadership, advisory services and practical support to establish and rapidly scale a high-performing Data Office or CDO function."
      },
      {
        title: "Vendor & Technology Selection Advisory",
        description:
          "Objective, requirements-based evaluation and recommendation of data platforms, tools, cloud services and potential implementation partners."
      },
      {
        title: "Data Strategy for Mergers & Acquisitions (M&A)",
        description:
          "Developing detailed plans for post-merger data integration, harmonization, rationalization and value realization to capture planned synergies."
      },
      {
        title: "Sustainability & ESG Data Strategy",
        description:
          "Designing robust frameworks to collect, measure, report and analyze Environmental, Social and Governance (ESG) data for regulatory compliance and strategic reporting."
      }
    ]
  }
];


// Data Warehouse Solutions
// Hero
export const DataWarehouseHero: HeroVariant = {
  title: 'Data Warehouse Solutions',
  topDescription: 'Data Services',
  bottomDescription:
    'At Virtuosoft, we build modern data warehouses that transform raw information into a single source of truth. ' +
    'Our engineered platforms consolidate siloed data into a reliable, high-performance foundation for advanced analytics, ' +
    'business intelligence and AI-driven decision-making. We architect, implement and manage scalable data warehouses ' +
    'that empower your entire organization with timely, trustworthy insights.',
  btnTitle: 'Build Your Centralized Data Hub',
  ...heroStyle,
};

// When Does Your Business Need a Modern Data Warehouse?
export const valueDataDataWarehouse: ValueSectionData[] = [
  {
    titleParts: [
      "Why Is a Modern Data Warehouse ",
      { text: "a Strategic Imperative", bold: true }
    ],
    valueItems: [
      {
        title: "Siloed Data Sources Creating Inconsistent Reporting",
        description:
          "When sales, marketing, and operations use different numbers, we unify all your data into one authoritative " +
          "warehouse for consistent, reliable business intelligence.",
        image: `/${valueImg}/automate.svg`, // or silos-unified.svg if you have it
      },
      {
        title: "Slow Query Performance Hindering Real-Time Decisions",
        description:
          "If reports take hours to run, we design and optimize high-performance architectures that deliver insights " +
          "in seconds, not days.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "Inability to Scale with Growing Data Volumes",
        description:
          "Legacy systems buckle under big data. We build on scalable cloud platforms (like Snowflake, BigQuery, Redshift) " +
          "that grow elastically with your business.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "High Costs of Maintaining Outdated On-Premise Infrastructure",
        description:
          "We migrate you to efficient, cloud-native data warehouses, converting capital expense into operational expense " +
          "and dramatically reducing total cost of ownership.",
        image: `/${valueImg}/solve.svg`,
      },
      {
        title: "Lack of a Clean, Trusted Foundation for AI and Machine Learning",
        description:
          "Garbage in, garbage out. We create the clean, structured and integrated data environment required to train " +
          "accurate predictive models and deploy reliable AI.",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "Manual Data Wrangling Consuming Analyst Productivity",
        description:
          "We automate the entire data pipeline, from ingestion to transformation, freeing your team to analyze data, " +
          "not just collect and clean it.",
        image: `/${valueImg}/enable.svg`,
      },
    ]
  }
];

// TimeLine 
// Engineering Your Enterprise Data Foundation
export const stepsDataDataWarehouse: TimeLineData[] = [
  {
    titleParts: [
      "Engineering Your Enterprise ",
      { text: "Data Foundation", bold: true }
    ],
    timeLineItems: [
      {
        title: "Requirements & Source System Analysis",
        description:
          "We collaborate to define key business questions and thoroughly analyze all source systems to plan for " +
          "comprehensive data integration.",
      },
      {
        title: "Architecture Design & Technology Selection",
        description:
          "We design the optimal modern architecture (e.g., star/snowflake schema, data vault) and select the best-fit " +
          "cloud platform and tools for your needs.",
      },
      {
        title: "Cloud Infrastructure & Security Setup",
        description:
          "We provision and configure the cloud environment, implementing robust security, access controls and network " +
          "configurations from day one.",
      },
      {
        title: "ETL/ELT Pipeline Development",
        description:
          "We build automated, reliable pipelines to ingest raw data from all sources (APIs, databases, files) into the " +
          "warehouse's raw storage layer.",
      },
      {
        title: "Data Modeling & Transformation",
        description:
          "We design and implement the core dimensional data models and transformation logic that structure data for " +
          "optimal query performance and usability.",
      },
      {
        title: "Data Quality & Governance Integration",
        description:
          "We embed data quality checks, lineage tracking and governance protocols to ensure the warehouse contains " +
          "trusted, well-documented data.",
      },
      {
        title: "BI & Analytics Layer Enablement",
        description:
          "We connect leading BI tools (like Power BI, Tableau), create semantic layers and enable self-service analytics " +
          "for business users.",
      },
      {
        title: "Performance Tuning, Monitoring & Handoff",
        description:
          "We optimize the system, establish monitoring dashboards and provide complete documentation and knowledge " +
          "transfer to your team.",
      },
    ],
    businessOutComes: [
      {
        point: "A single, trusted source of truth for all enterprise reporting and analytics"
      },
      {
        point: "Drastically faster time-to-insight with sub-second query performance on large datasets"
      },
      {
        point: "Significant reduction in IT overhead and total data management costs"
      },
      {
        point: "A scalable, future-proof platform ready for advanced analytics and AI initiatives"
      },
      {
        point: "Empowered business users with secure, self-service access to reliable data"
      }
    ]
  }
];

// Empower
// End-to-End Data Warehouse Services
export const DataWarehouseEmpower: EmpowerData[] = [
  {
    title: "End-to-End Data Warehouse Services",
    items: [
      {
        title: "Data Warehouse Strategy & Architecture",
        description:
          "Assessment, design and blueprinting of the optimal modern data warehouse architecture tailored to your business " +
          "and technical landscape."
      },
      {
        title: "Cloud Data Warehouse Implementation",
        description:
          "End-to-end implementation on leading platforms: Snowflake, Google BigQuery, Amazon Redshift, Azure Synapse " +
          "Analytics and Databricks Lakehouse."
      },
      {
        title: "Legacy Data Warehouse Modernization & Migration",
        description:
          "Planning and execution of lift-and-shift or redesign migrations from outdated on-premise systems (like Teradata, " +
          "Oracle) to the cloud."
      },
      {
        title: "ETL/ELT Pipeline Development & Automation",
        description:
          "Building robust, maintainable data ingestion and transformation pipelines using tools like dbt, Apache Airflow, " +
          "Fivetran and Stitch."
      },
      {
        title: "Data Modeling (Dimensional & Data Vault)",
        description:
          "Design and implementation of performant, scalable data models (Star Schema, Snowflake, Data Vault 2.0) that " +
          "serve business intelligence needs."
      },
      {
        title: "Data Warehouse Performance Optimization",
        description:
          "Continuous tuning of queries, partitioning, clustering and caching strategies to ensure peak performance as " +
          "data volumes scale."
      },
      {
        title: "Data Governance & Security Implementation",
        description:
          "Integrating data cataloging (e.g., Alation, Collibra), lineage, quality monitoring and role-based access control " +
          "(RBAC) directly into the warehouse environment."
      },
      {
        title: "BI & Analytics Integration",
        description:
          "Seamless connectivity and semantic layer setup for visualization tools like Power BI, Tableau, Looker and ThoughtSpot."
      },
      {
        title: "Real-Time Data Streaming Integration",
        description:
          "Architecting and implementing pipelines to incorporate real-time Kafka or Kinesis streams into the warehouse " +
          "for up-to-the-minute analytics."
      },
      {
        title: "Master Data Management (MDM) Hub Integration",
        description:
          "Designing the integration between the data warehouse and an MDM hub to ensure consistent golden records across " +
          "the analytics ecosystem."
      },
      {
        title: "Disaster Recovery & High Availability Setup",
        description:
          "Configuring cross-region replication, backup strategies and failover procedures to ensure business continuity."
      },
      {
        title: "Managed Services & Ongoing Support",
        description:
          "Proactive monitoring, performance management, cost optimization and enhancement services to ensure your data " +
          "warehouse operates at peak efficiency."
      }
    ]
  }
];

// Data Analytics & Business Intelligence
// Hero
export const AnalyticsBIHero: HeroVariant = {
  title: 'Data Analytics & Business Intelligence',
  topDescription: 'Data Services',
  bottomDescription:
    'At Virtuosoft, we turn your data into a competitive weapon. ' +
    'Our analytics and BI solutions move beyond static reports to deliver interactive insights, ' +
    'predictive foresight and actionable intelligence. We empower every level of your organization ' +
    'to make faster, smarter decisions through intuitive dashboards, advanced analytics ' +
    'and self-service tools that reveal the story behind your numbers.',
  btnTitle: 'Unleash the Power of Your Data',
  ...heroStyle,
};

// Why Is Advanced Analytics & BI a Catalyst for Growth?
export const valueDataAnalyticsBI: ValueSectionData[] = [
  {
    titleParts: [
      "Why Is Advanced  ",
      { text: "Analytics & BI", bold: true },
      "a Catalyst for Growth"
    ],
    valueItems: [
      {
        title: "Static Reports That Fail to Answer 'Why'",
        description:
          "When your team is buried in spreadsheets, we build interactive dashboards that allow users " +
          "to drill down, uncover root causes and discover new opportunities in real time.",
        image: `/${valueImg}/automate.svg`,
      },
      {
        title: "Decision-Making Reliant on Gut Feel, Not Data",
        description:
          "We replace intuition with intelligence. Our solutions provide a single source of truth, " +
          "giving leaders the confidence to make strategic choices backed by solid evidence.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "Inability to Forecast Trends and Predict Outcomes",
        description:
          "Moving from hindsight to foresight, we implement predictive models and what-if scenarios " +
          "that help you anticipate market shifts, customer behavior and operational risks.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "Data Analysis as a Bottleneck for the IT Department",
        description:
          "We democratize data. Our self-service BI platforms equip business users to explore data safely, " +
          "freeing your technical teams to focus on more strategic initiatives.",
        image: `/${valueImg}/solve.svg`,
      },
      {
        title: "Lack of a Coherent Data Story for Stakeholders",
        description:
          "We transform complex data into compelling visual narratives through executive dashboards " +
          "and automated reporting that clearly communicates performance and progress.",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "High-Value Opportunities Hidden in Unstructured Data",
        description:
          "We go beyond transactional data. Our analytics can incorporate text, log files and other unstructured " +
          "sources to uncover hidden patterns and customer sentiment.",
        image: `/${valueImg}/enable.svg`,
      },
    ]
  }
];

// TimeLine 
// Transforming Raw Data into Strategic Foresight
export const stepsDataAnalyticsBI: TimeLineData[] = [
  {
    titleParts: [
      "Our  ",
      { text: "Analytics & BI Delivery", bold: true },
      "Framework"
    ],
    timeLineItems: [
      {
        title: "Business Discovery & KPI Definition",
        description:
          "We collaborate with key stakeholders to define the critical business questions and success metrics " +
          "the analytics solution must address.",
      },
      {
        title: "Data Source Assessment & Pipeline Design",
        description:
          "We identify and evaluate all required data sources, designing robust data pipelines to feed " +
          "the analytics layer with clean, timely information.",
      },
      {
        title: "Semantic Layer & Data Model Development",
        description:
          "We build a business-friendly semantic layer that translates complex database structures into " +
          "intuitive business logic (e.g., 'Revenue', 'Active Customer').",
      },
      {
        title: "Interactive Dashboard & Report Design",
        description:
          "Our designers and analysts create wireframes and prototypes for key dashboards, focusing on " +
          "user experience and intuitive data storytelling.",
      },
      {
        title: "Dashboard Development & Visualization",
        description:
          "We build the dashboards in your chosen BI platform (Power BI, Tableau, etc.), implementing " +
          "best-practice visualizations that highlight insights, not just data.",
      },
      {
        title: "Advanced Analytics & Predictive Model Integration",
        description:
          "Where applicable, we integrate statistical models, forecasts and machine learning outputs " +
          "directly into dashboards for augmented intelligence.",
      },
      {
        title: "User Acceptance Testing & Feedback Integration",
        description:
          "We conduct workshops with end-users to refine the solution, ensuring it is intuitive and meets " +
          "their daily decision-making needs.",
      },
      {
        title: "Deployment, Training & Adoption Strategy",
        description:
          "We launch the solution, provide comprehensive role-based training and establish a support model " +
          "to drive widespread adoption and value realization.",
      },
    ],
    businessOutComes: [
      {
        point: "Data-driven decision-making embedded into daily operations at all levels"
      },
      {
        point: "Dramatically reduced time spent on manual reporting and data gathering"
      },
      {
        point: "Proactive identification of trends, risks and opportunities before competitors"
      },
      {
        point: "Empowered business teams with self-service access to trusted insights"
      },
      {
        point: "Measurable improvements in key performance indicators (KPIs) across departments"
      }
    ]
  }
];

// Empower
// Comprehensive Data Analytics & BI Solutions
export const AnalyticsBIEmpower: EmpowerData[] = [
  {
    title: "Comprehensive Data Analytics & BI Solutions",
    items: [
      {
        title: "Enterprise BI & Dashboard Development",
        description:
          "Design and implementation of interactive, role-based dashboards and reports using Power BI, " +
          "Tableau, Qlik or Looker."
      },
      {
        title: "Self-Service Analytics Platform Enablement",
        description:
          "Setting up governed self-service environments where business users can safely explore data " +
          "and create their own insights."
      },
      {
        title: "Advanced & Predictive Analytics",
        description:
          "Developing and operationalizing statistical models, forecasting, clustering and machine learning " +
          "to predict outcomes and prescribe actions."
      },
      {
        title: "Executive & KPI Reporting Systems",
        description:
          "Automated, high-level reporting packages and scorecards that provide leadership with a real-time " +
          "view of organizational health."
      },
      {
        title: "Embedded Analytics",
        description:
          "Integrating dashboards, charts and data visualizations directly into your customer-facing or " +
          "internal software applications."
      },
      {
        title: "Data Storytelling & Communication",
        description:
          "Translating complex analytical findings into clear, persuasive presentations and narratives " +
          "for stakeholders and board members."
      },
      {
        title: "Customer Analytics & 360-Degree View",
        description:
          "Unifying customer data from all touchpoints to analyze behavior, lifetime value, segmentation " +
          "and churn propensity."
      },
      {
        title: "Operational & Supply Chain Analytics",
        description:
          "Building dashboards to monitor production efficiency, logistics, inventory levels and supply " +
          "chain performance in real time."
      },
      {
        title: "Financial Planning & Analysis (FP&A) Analytics",
        description:
          "Automating budgeting, forecasting, variance analysis and profitability modeling for the finance team."
      },
      {
        title: "Marketing & Sales Performance Analytics",
        description:
          "Tracking campaign ROI, lead conversion funnels, pipeline health and sales rep performance " +
          "through integrated dashboards."
      },
      {
        title: "Ad Hoc Analysis & Data Exploration Support",
        description:
          "Providing expert analyst support to tackle complex, one-off business questions that fall " +
          "outside of standard reports."
      },
      {
        title: "Analytics Strategy & Center of Excellence (CoE) Setup",
        description:
          "Helping you define an analytics operating model, tool strategy and build an internal analytics " +
          "CoE for sustained capability."
      }
    ]
  }
];