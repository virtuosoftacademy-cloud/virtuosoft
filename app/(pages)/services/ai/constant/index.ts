import { DatabaseZap, Package, Table, Users, type LucideIcon } from 'lucide-react';
import Src from '@/public/assets/Images/service/ai_data_service.png';
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
  sectionClassName: 'bg-linear-to-br from-primary to-[#003799] text-white border-white/5',
  buttonClassName:
    'bg-white text-primary hover:bg-primary hover:text-white font-bold capitalize text-sm md:text-base px-8 h-12 transition-all duration-300 shadow-xl rounded-lg active:scale-95',
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

// A.I Agent
// Hero
export const aiAgentsHero: HeroVariant = {
  title: 'AI Agent',
  topDescription: 'Artificial Intelligence',
  bottomDescription:
    'Empower your organization with intelligent AI agents that streamline operations, automate workflows, and deliver faster, data-driven decisions. ' +
    'At Virtuosoft, we build custom AI solutions that optimize efficiency, improve customer experiences, and unlock new levels of performance and growth.',
  btnTitle: 'Discover AI Agents with Virtuosoft',
  ...heroStyle,
};

// Value Section A.I
//Why Every Modern Business Needs Intelligent AI Agents?
const valueImg = 'assets/Images/service/ai';
export const valueData: ValueSectionData[] = [
  {
    titleParts: [
      "Why Every Modern Business Needs Intelligent",
      { text: " AI Agents", bold: true },
    ],
    valueItems: [
      {
        title: "Automate Complex Workflows",
        description:
          "Manual workflows slow teams down. AI Agents automate processes across finance, logistics and support, reducing errors, increasing throughput and freeing teams to focus on strategy and innovation.",
        image: `/${valueImg}/automate.svg`,
      },
      {
        title: "Scale Without Added Costs",
        description:
          "Grow without growing overhead. AI Agents handle high-volume operations seamlessly, allowing your business to scale with efficiency, not expense.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "Enhance Customer Experiences",
        description:
          "Deliver personal service at enterprise scale. AI Agents analyze behavior in real-time to predict needs, resolve issues instantly and create consistent, high-value interactions that build loyalty.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "Solve Problems Through Intelligent Reasoning",
        description:
          "When complex challenges arise, AI Agents think beyond automation. They apply advanced reasoning to optimize workflows, resolve issues autonomously and drive measurable improvements.",
        image: `/${valueImg}/solve.svg`,
      },
      {
        title: "Mitigate Risks Before They Escalate",
        description:
          "From compliance to cybersecurity, AI Agents use predictive analytics to detect threats early, helping your business stay proactive, secure and regulation-ready.",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "Enable Smarter, Faster Decisions",
        description:
          "Real-time insight means faster, more confident decisions. AI Agents turn live data into clear actions, empowering leadership to adapt instantly to shifts in market, demand or operations.",
        image: `/${valueImg}/enable.svg`,
      },
    ]
  }
]

// TimeLine 
//Process for Building Intelligent AI Agents
export const stepsData: TimeLineData[] = [
  {
    titleParts: [
      "Process for Building Intelligent",
      {
        text: "AI Agents", bold: true
      }
    ],
    timeLineItems: [
      {
        title: "Understanding Business Goals",
        description:
          "We start by understanding your organization’s unique objectives, identifying where AI Agents can deliver maximum automation and impact.",
      },
      {
        title: "Data and Workflow Mapping",
        description:
          "Our experts analyze workflows and data sources to design a roadmap for seamless AI integration.",
      },
      {
        title: "AI Agent Design and Development",
        description:
          "We architect and build intelligent agents tailored to your operational needs using the latest ML, NLP, and automation technologies.",
      },
      {
        title: "Integration and Testing",
        description:
          "Each AI Agent undergoes rigorous testing to ensure flawless integration with your systems and real-world reliability.",
      },
      {
        title: "Deployment and Optimization",
        description:
          "We deploy the agents into your environment, continuously monitoring and optimizing them for peak performance.",
      },
      {
        title: "Ongoing Learning and Support",
        description:
          "Our AI Agents evolve with your business, Virtuosoft provides continuous learning updates and technical support for sustained success.",
      },
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
export const aiAgentsEmpower: EmpowerData[] = [
  {
    title: "Empower Your Operations with AI Agents",
    items: [
      {
        title: "Business Workflow Automation",
        description:
          "Automate and connect workflows across finance, HR and logistics. These AI Agents streamline routine processes like invoicing, scheduling and tracking, to minimize errors, improve accuracy and increase overall operational efficiency across business functions."
      },
      {
        title: "Bespoke AI Development",
        description:
          "Deploy AI agents customized with your business needs. From lead generation to data processing, each agent integrates seamlessly into existing systems, enhancing productivity, scalability and measurable business performance outcomes efficiently."
      },
      {
        title: "AI-Powered Support Automation",
        description:
          "Deliver round-the-clock support with AI agents. They instantly respond, resolve issues and personalize communication, improving satisfaction, reducing response times and optimizing customer engagement across all digital interaction channels effectively."
      },
      {
        title: "Task Automation Bots",
        description:
          "Automate repetitive tasks like data entry, scheduling and email processing. AI bots helps in eliminating manual errors, improve accuracy and free human teams for strategic, high-value projects driving measurable business growth consistently."
      },
      {
        title: "Virtual Assistants",
        description:
          "Empower your workforce with AI-driven virtual assistants managing meetings, reminders and internal communication. These AI assistants improve daily productivity, streamline coordination and simplify complex administrative workflows for busy professionals efficiently."
      },
      {
        title: "AI Operations Optimization",
        description:
          "Optimize monitoring inventory, forecasting demand, and managing logistics intelligently with AI agents. They prevent stockouts, identify bottlenecks and ensure continuous, seamless operations with data-driven automation and predictive decision-making precision."
      },
      {
        title: "AI Data Processing Agents",
        description:
          "Extract, structure and process business data with accuracy. These AI agents automate information handling from invoices and reports, enabling faster insights, improved compliance and data-backed decision-making without manual intervention."
      },
      {
        title: "Integrated AI Agent Networks",
        description:
          "Enable seamless teamwork with multiple AI agents managing interconnected workflows. These bot systems coordinate with operations like fulfillment and logistics, improving efficiency, execution speed and communication across business departments collaboratively."
      },
      {
        title: "Generative AI Agents for Content Creation",
        description:
          "Empower Generative AI to create marketing materials, product descriptions and design concepts. These AI Agents accelerates creative output, maintains brand tone and supports content teams in delivering consistent quality faster across platforms."
      },
      {
        title: "AI Chat Interaction Systems",
        description:
          "Develop advanced conversational AI that engages users naturally. These agents manage inquiries, automate communication and enhance interaction quality, reducing operational costs while improving response efficiency and overall customer satisfaction."
      },
      {
        title: "Natural Language Processing (NLP) Agents",
        description:
          "Develop NLP agents that understand and interpret human language. Ideal for chatbots, analytics and feedback automation, these agents enhance comprehension, streamline responses and improve overall communication efficiency organization-wide."
      },
      {
        title: "Custom ML Agent Design",
        description:
          "Design intelligent AI agents trained through machine learning. These agents develops systems for predictive analysis, pattern recognition and decision support, helping businesses operate smarter, faster and with measurable competitive advantage."
      },
      {
        title: "Computer Vision Agents",
        description:
          "Specialize in Computer vision agents that help analyzing and interpreting visual data. They perform automated inspections, recognition and quality assessments, enhancing accuracy, safety and efficiency across industries relying on visual intelligence."
      },
      {
        title: "AI-Powered Chatbots and Virtual Assistants",
        description:
          "Enhance customer experience with AI chatbots offering instant support. These smart agents deliver accurate responses, automate engagement and provide reliable communication, ensuring consistent service quality across all customer touchpoints."
      },
      {
        title: "Predictive Analytics Agents",
        description:
          "Optimize Predictive Analytics Agents to evaluate trends and patterns using business data. These agents forecast outcomes, optimize resource allocation and empower leaders to make proactive, informed and strategic business decisions."
      },
      {
        title: "AI Voice Command Agents",
        description:
          "Enable voice-driven operations with smart AI speech agents. They help to convert spoken commands into precise actions, supporting accessibility, automation and productivity through accurate, real-time voice understanding technology."
      },
      {
        title: "Robotic Process Automation (RPA) Agents",
        description:
          "Enhance routine workflows like payroll and compliance with efficient RPA agents. They increase speed, reduce manual intervention and ensure accuracy, turning repetitive operations into fully optimized, self-running processes."
      },
      {
        title: "AI Security Agents",
        description:
          "Secure your digital infrastructure with AI-powered monitoring. These agents detect threats, assess vulnerabilities and respond instantly, providing real-time defense, proactive protection and continuous system security."
      },
      {
        title: "Recommendation System Agents",
        description:
          "Boost engagement with AI-driven recommendation engines. These AI agents analyze user behavior, predict preferences and deliver tailored content, enhancing user experience and improving conversion rates effectively."
      },
      {
        title: "Sentiment Analysis Agents",
        description:
          "Interpret emotions within reviews, chats, and feedback with Sentiment Analysis Agents. They help your business understand audience perception, refine communication strategies and strengthen brand reputation intelligently."
      }

    ]
  }
]

//Generative A.I
//Hero
export const genaiHero: HeroVariant = {
  title: 'Generative AI',
  topDescription: 'Artificial Intelligence',
  bottomDescription:
    'At Virtuosoft, we use Generative AI to refine workflows, boost creativity and shape innovation, through smart and adaptive solutions built to strengthen collaboration and optimize performance.',
  btnTitle: 'Build Creativity',
  ...heroStyle,
};

//Why are Businesses Adopting Generative AI Today?
export const valueDataGen: ValueSectionData[] = [
  {
    titleParts: [
      "Why are Businesses Adopting",
      { text: " Generative AI", bold: true },
    ],
    valueItems: [
      {
        title: "Streamlining Complex Operations",
        description: "Generative AI automates intricate workflows, accelerating operations and reducing errors to ensure maximum efficiency and productivity across business processes.",
        image: `/${valueImg}/automate.svg`,
      },
      {
        title: "Optimizing IT Operations",
        description:
          "Intelligent automation modernizes IT infrastructure, minimizing downtime and improving system performance for a more agile, reliable and future-ready technology environment.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "Maximizing Resource Efficiency",
        description:
          "AI solutions increase output while reducing resource consumption, delivering cost savings without compromising quality, enabling businesses to achieve more with less.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "Driving Predictive Insights",
        description:
          "Advanced analytics turn data into actionable foresight, allowing businesses to anticipate market changes, optimize strategies and make confident, AI-backed decisions.",
        image: `/${valueImg}/solve.svg`,
      },
      {
        title: "Enhancing Customer Experiences",
        description:
          "Generative AI delivers personalized, dynamic interactions across platforms, boosting engagement and building lasting loyalty with tailored, user-focused experiences.",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "Ensuring Responsible AI Deployment",
        description:
          "Comprehensive AI governance balances innovation with security, maintaining compliance and protecting data while enabling ethical and reliable AI adoption.",
        image: `/${valueImg}/enable.svg`,
      },
    ]
  }
]


// TimeLine 
//Process for Building Intelligent AI Agents
export const stepsDataGen: TimeLineData[] = [
  {
    titleParts: [
      "Unleash Creativity with",
      {
        text: "Generative AI", bold: true
      }
    ],
    timeLineItems: [
      {
        title: "Define Your Vision",
        description:
          "Establish your creative goals, focusing on exactly what you want to generate. From compelling copy to stunning visuals, we ensure strategic alignment from the start.",
      },
      {
        title: "Build Your Data Foundation",
        description:
          "Collect, organize and refine relevant datasets. High-quality, diverse data enables AI to understand context and deliver accurate, meaningful and effective outputs.",
      },
      {
        title: "Architect Your AI Engine",
        description:
          "Select and design the ideal AI model, tailoring its core architecture to balance powerful creative capabilities with the efficiency your project demands.",
      },
      {
        title: "Train & Refine the Intelligence",
        description:
          "Use curated data to train the AI. Continuous fine-tuning ensures outputs remain consistent, precise, and aligned with creative and business standards.",
      },
      {
        title: "Validate Creative Output",
        description:
          "Every output undergoes thorough evaluation for accuracy, creativity and relevance, ensuring results align with project goals and maintain consistent quality.",
      },
      {
        title: "Integrate & Launch Seamlessly",
        description:
          "The Generative AI solution is embedded into existing systems and processes, enabling smooth adoption and delivering value without operational disruption.",
      },
      {
        title: "Evolve & Optimize Continuously",
        description: "Continuous monitoring and fine-tuning allow the AI to learn from new data, stay aligned with emerging trends and sustain long-term innovation and performance."
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

//Data Science & MLOps
//Hero
export const DataScienceHero: HeroVariant = {
  title: 'Data Science & MLOps',
  topDescription: 'Artificial Intelligence',
  bottomDescription:
    'At Virtuosoft, we bring together the power of Data Science and MLOps to transform raw information into intelligent, scalable and production-ready AI systems. From advanced analytics and predictive modeling to seamless deployment and continuous monitoring, we help organizations turn data into decisions and machine learning into measurable business impact.',
  btnTitle: 'Build Intelligent, Scalable AI Systems',
  ...heroStyle,
};
// Value Section A.I
//When Intelligence + Automation Become Your Competitive Advantage? 
export const valueDataScience: ValueSectionData[] = [
  {
     titleParts: [
      "When",
      { text: " Intelligence + Automation", bold: true },
      "  Become Your Competitive Advantage"
    ],
    // titleBold: "AI Agents",
    valueItems: [
      {
        title: "Data Complexity & Overload",
        description:
          "Drowning in data with no clarity? We transform unstructured information into meaningful insights using advanced analytics, ML models and visualization tools.",
        image: `/${valueImg}/automate.svg`,
      },
      {
        title: "Scaling AI with Confidence",
        description:
          "Struggling to maintain model performance as you grow? Our MLOps pipelines introduce autoscaling, real-time monitoring and drift detection to keep models stable and reliable.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "Slow or Inconsistent ML Deployments",
        description:
          "Deploying models still feels manual or messy? We build automated CI/CD workflows, containerized environments and cloud-ready architectures for frictionless deployment.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "Security, Risk & Threat Detection Needs",
        description:
          "Need to identify anomalies, fraud or system breaches? Our data science frameworks provide predictive security insights and anomaly detection.",
        image: `/${valueImg}/solve.svg`,
      },
      {
        title: "Cost Optimization Challenges",
        description:
          "Struggling with operational inefficiencies or unpredictable expenses? We use data-driven forecasting and optimization models to maximize ROI and reduce spending.",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "Modernizing Legacy Systems",
        description:
          "Outdated systems holding you back? We integrate legacy data with modern analytical ecosystems and robust MLOps frameworks.",
        image: `/${valueImg}/enable.svg`,
      },
    ]
  }
]

// TimeLine 
//Process for Building Intelligent AI Agents
export const stepsDataScience: TimeLineData[] = [
  {
    titleParts: [
      { text: "Data Science + MLOps", bold: true },
      "Process",
    ],
    timeLineItems: [
      {
        title: "Define Objectives & Use Cases",
        description:
          "Identify business challenges and determine where AI and analytics can create impact.",
      },
      {
        title: "Data Acquisition & Validation",
        description:
          "Consolidate data from multiple sources with strict quality checks.",
      },
      {
        title: "Data Exploration & Pattern Discovery",
        description:
          "Analyze trends, correlations and early insights that shape modeling decisions.",
      },
      {
        title: "Feature Engineering",
        description:
          "Transform raw variables into meaningful inputs for optimal model performance.",
      },
      {
        title: "Data Preparation & Splitting",
        description:
          "Organize datasets for training, validation and testing.",
      },
      {
        title: "Model Selection & Architecture Design",
        description:
          "Choose the right ML/statistical models for your goals.",
      },
      {
        title: "Model Training & Experimentation",
        description: "Iterate across algorithms, hyperparameters and configurations."
      },
      {
        title: "Model Evaluation & Benchmarking",
        description: "Validate model performance using precision-based metrics."
      },
      {
        title: "Optimization & Fine-Tuning",
        description: "Enhance efficiency, accuracy and generalization."
      },
      {
        title: "Model Packaging & Version Control",
        description: "Containerize models and manage versions for governance."
      },
      {
        title: "Automated CI/CD for ML Pipelines",
        description: "Implement automated processes for training, testing and deployment."
      },
      {
        title: "Deployment Across Environments",
        description: "Launch models on cloud, hybrid or edge environments with full orchestration."
      },
      {
        title: "Monitoring & Drift Detection",
        description: "Track model behavior, accuracy, latency and health in real time."
      },
      {
        title: "Feedback Loop & Continuous Learning",
        description: "Incorporate new data and insights to refine models."
      },
      {
        title: "Scaling & Enterprise Expansion",
        description: "Extend successful models across departments, markets and use cases."
      }
    ]
  }
];

//Empower
//Intelligent Solutions That Turn Data Into Decisions and Models Into Scalable Systems
export const EmpowerDataScience: EmpowerData[] = [
  {
    title: "Intelligent Solutions That Turn Data Into Decisions and Models Into Scalable Systems",
    items: [
      {
        title: "Advanced Analytics & Data Intelligence",
        description:
          "Extract actionable insights from complex datasets using predictive modeling, statistical analysis and data mining."
      },
      {
        title: "Machine Learning Development",
        description:
          "Build high-accuracy ML models tailored to your business challenges, from forecasting to classification and optimization."
      },
      {
        title: "Deep Learning & NLP",
        description:
          "Deploy neural networks, sentiment analysis, text classification and computer vision systems for complex use cases."
      },
      {
        title: "Data Engineering & Pipelines",
        description:
          "Design robust pipelines for clean, reliable datasets across cloud, hybrid and on-prem environments."
      },
      {
        title: "Model Deployment & Serving",
        description:
          "Deploy ML models across cloud, edge or hybrid infrastructure using scalable orchestration."
      },
      {
        title: "Monitoring & Drift Detection",
        description:
          "Track real-time performance, detect degradation early and maintain long-term accuracy."
      }
    ]
  }
]

//Conversational AI
//Hero
export const ConHero: HeroVariant = {
  title: 'Conversational AI',
  topDescription: 'Artificial Intelligence',
  bottomDescription:
    'At Virtuosoft, we deliver next-generation Conversational AI solutions that elevate customer engagement and automate support experiences. From intelligent NLP chatbots to multimodal assistants powered by platforms like Dialogflow, Vertex AI and Google Cloud, we help businesses streamline operations and unlock smarter, more intuitive interactions.',
  btnTitle: 'Start Automating',
  ...heroStyle,
};
//When Does Conversational AI Become Essential for Scaling Support & Sales?
export const valueDataCon: ValueSectionData[] = [
  {
    titleParts: [
      "When Does",
      { text: " Conversational AI", bold: true },
      "Become Essential for Scaling Support & Sales"
    ],
    valueItems: [
      {
        title: "Delivering Superior Customer Experiences",
        description: "AI-powered conversations enhance user journeys with personalized recommendations and real-time assistance. We build experiences that stay true to your brand’s tone, clarity, and identity.",
        image: `/${valueImg}/automate.svg`,
      },
      {
        title: "Expanding Support Capacity Effortlessly",
        description:
          "Virtual agents handle rising query volumes without sacrificing quality. Our integrations plug directly into your ecosystem for smooth, scalable operations.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "Reducing Support Costs Without Compromise",
        description:
          "Conversational AI significantly lowers dependency on large support teams. With VirtuoSoft, you optimize costs while maintaining high-quality interactions.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "Ensuring Message Accuracy Across All Touchpoints",
        description:
          "Our AI ensures consistent, correct information through intelligent knowledge bases—minimizing errors and enhancing trust across every customer interaction.",
        image: `/${valueImg}/solve.svg`,
      },
      {
        title: "Delivering Instant Service Around the Clock",
        description:
          "AI chatbots provide immediate, 24/7 responses across channels. Your customers are always heard — anytime, anywhere.",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "Managing Multilingual Communication at Scale",
        description:
          "Our language-flexible AI solutions support global audiences with natural, fluent conversations across multiple languages.",
        image: `/${valueImg}/enable.svg`,
      },
    ]
  }
]

// TimeLine 
//Process for Building Intelligent AI Agents
export const stepsDataCon: TimeLineData[] = [
  {
    titleParts: [
      "Build Smarter Support & Sales Workflows with",
      { text: "Conversational AI", bold: true },
    ],
    timeLineItems: [
      {
        title: "Requirement Discovery",
        description:
          "We begin by understanding your goals, audience needs and the outcomes you want your AI to achieve.",
      },
      {
        title: "Experience & Flow Design",
        description:
          "We design conversational flows, tone and persona, crafting interactions that feel natural and on-brand.",
      },
      {
        title: "Data Collection & Preparation",
        description:
          "Our team collects and analyzes relevant datasets to train AI models with high accuracy and contextual understanding.",
      },
      {
        title: "AI Model Training",
        description:
          "We train NLP and intent-recognition models to understand queries, context and user behavior patterns.",
      },
      {
        title: "System Integration",
        description:
          "We connect your AI with CRMs, websites, apps, helpdesks and communication channels for seamless workflows.",
      },
      {
        title: "Testing & Fine-Tuning",
        description:
          "Models are rigorously tested for accuracy, reliability and stability, followed by iterative optimization.",
      },
      {
        title: "Launch & Deployment",
        description: "We deploy the conversational AI solution across your selected platforms, ensuring smooth go-live execution."
      },
      {
        title: "Monitoring & Optimization",
        description: "Our team tracks performance metrics and user behavior to enhance responses and improve accuracy over time."
      },
      {
        title: "Continuous Feedback Loop",
        description: "We collect user feedback, analyze conversations and refine models for better engagement and relevance."
      },
      {
        title: "Expansion & Scaling",
        description: "As your needs grow, we enhance capabilities, add new use cases and scale the AI across departments and geographies."
      }
    ]
  }
];

//Empower
//Intelligent Solutions That Turn Data Into Decisions and Models Into Scalable Systems
export const EmpowerCon: EmpowerData[] = [
  {
    title: "Conversational AI Solutions Designed for Intelligent Customer Interactions",
    items: [
      {
        title: "Automated Customer Support",
        description:
          "Deliver instant, round-the-clock responses with intelligent virtual assistants that resolve common queries and improve satisfaction."
      },
      {
        title: "Hyper-Personalized Experiences",
        description:
          "AI adapts to user intent, behavior and history, delivering recommendations and responses tailored to each customer."
      },
      {
        title: "Voice-Enabled Interactions",
        description:
          "Provide hands-free, natural voice interfaces powered by cutting-edge speech-to-text and conversational AI."
      },
      {
        title: "Multilingual Communication",
        description:
          "Engage global audiences with AI capable of understanding and responding in multiple languages with cultural nuance."
      },
      {
        title: "Smart Query Routing",
        description:
          "Seamlessly escalate complex conversations from bots to human agents while preserving context and conversation history."
      },
      {
        title: "Sentiment-Aware Interactions",
        description:
          "Use emotion and sentiment analysis to craft empathetic, tone-appropriate responses for better customer experiences."
      },
      {
        title: "Insight-Driven Analytics",
        description: "Analyze chat logs and user patterns to uncover trends, improve services and make data-driven decisions."
      },
      {
        title: "Conversational Commerce",
        description: "Enable users to browse, compare and purchase through conversational experiences, driving higher conversions."
      },
      {
        title: "Automated Feedback & Surveys",
        description: "Collect real-time feedback through chat interactions, enabling rapid insight gathering and continuous improvement."
      },
      {
        title: "Custom Conversational AI Development",
        description: "We engineer bespoke AI assistants tailored to your workflows, industry and customer engagement goals."
      }
    ],
  }
]

//Computer Vision
//Hero
export const ComHero: HeroVariant = {
  title: 'Computer Vision',
  topDescription: 'Artificial Intelligence',
  bottomDescription:
    'At Virtuosoft, we build advanced computer vision solutions that enable machines to see, understand and act on visual data. From real-time image recognition to video analytics and automated inspection, we help businesses transform visual information into actionable intelligence that drives accuracy, efficiency and innovation.',
  btnTitle: 'See Beyond Data',
  ...heroStyle,
};

//Where Visual Intelligence Creates Business Advantage?
export const valueDataCom: ValueSectionData[] = [
  {
    titleParts: [
      "Where",
      { text: " Visual Intelligence", bold: true },
      "Creates Business Advantage"
    ],
    valueItems: [
      {
        title: "Visual Data Overload",
        description: "Drowning in images and videos without insights? Our computer vision models extract meaning from visual data at scale, turning pixels into decisions.",
        image: `/${valueImg}/automate.svg`,
      },
      {
        title: "Manual Inspection Bottlenecks",
        description:
          "Human inspection is slow and error-prone. We automate quality checks, defect detection and compliance monitoring with high-precision vision systems.",
        image: `/${valueImg}/scale.svg`,
      },
      {
        title: "Security & Surveillance Challenges",
        description:
          "Enhance safety with real-time object detection, facial recognition and behavior analysis to proactively identify risks and threats.",
        image: `/${valueImg}/enhance.svg`,
      },
      {
        title: "Operational Inefficiencies",
        description:
          "Optimize workflows with vision-powered automation, monitor production lines, track assets and reduce downtime with intelligent visual monitoring.",
        image: `/${valueImg}/solve.svg`,
      },
      {
        title: "Customer Experience Gaps",
        description:
          "Enable smarter retail, healthcare and digital experiences with visual search, gesture recognition and personalized interactions.",
        image: `/${valueImg}/mitigate.svg`,
      },
      {
        title: "Scalability & Accuracy Concerns",
        description:
          "We build scalable computer vision pipelines that maintain accuracy across environments, lighting conditions and growing data volumes.",
        image: `/${valueImg}/enable.svg`,
      },
    ]
  }
]

// TimeLine 
//From Visual Input to Intelligent Outcomes
export const stepsDataCom: TimeLineData[] = [
  {
    titleParts: [
      { text: "From Visual Input to", bold: true },
      "Intelligent Outcomes",
    ],
    timeLineItems: [
      {
        title: "Business & Use-Case Definition",
        description:
          "We identify where visual intelligence delivers measurable business impact and define success metrics.",
      },
      {
        title: "Data Collection & Annotation",
        description:
          "We gather, clean and label image or video datasets to ensure high-quality training data.",
      },
      {
        title: "Model Selection & Architecture Design",
        description:
          "We choose the right techniques, CNNs, transformers or hybrid models, based on accuracy and performance needs.",
      },
      {
        title: "Model Training & Optimization",
        description:
          "Models are trained and fine-tuned to recognize patterns, objects, movements or anomalies with precision.",
      },
      {
        title: "Validation & Accuracy Testing",
        description:
          "We rigorously test models across real-world scenarios to ensure robustness and reliability.",
      },
      {
        title: "Deployment & Integration",
        description:
          "Deploy models into production environments, cloud, edge or on-prem and integrate with existing systems.",
      },
      {
        title: "Real-Time Processing & Scaling",
        description: "Enable low-latency inference and scalable processing for images and video streams."
      },
      {
        title: "Monitoring & Continuous Improvement",
        description: "We monitor performance, detect drift and retrain models to maintain long-term accuracy."
      },
    ]
  }
];

//Empower
//Visual Intelligence Built for Real-World Impact
export const EmpowerCom: EmpowerData[] = [
  {
    title: "Visual Intelligence Built for Real-World Impact",
    items: [
      {
        title: "Image & Object Recognition",
        description:
          "Identify objects, faces, text and patterns with high accuracy across images and videos."
      },
      {
        title: "Video Analytics & Real-Time Monitoring",
        description:
          "Analyze live or recorded video streams for behavior detection, motion tracking and event recognition."
      },
      {
        title: "Quality Inspection & Defect Detection",
        description:
          "Automate inspection processes in manufacturing and infrastructure with precision vision models."
      },
      {
        title: "Facial Recognition & Biometrics",
        description:
          "Enable secure identity verification, access control and user authentication."
      },
      {
        title: "Optical Character Recognition (OCR)",
        description:
          "Extract text from documents, images and scanned files to automate data processing."
      },
      {
        title: "Pose & Gesture Recognition",
        description:
          "Understand human movement for healthcare, sports analytics and interactive applications."
      },
      {
        title: "Visual Search & Recommendation",
        description: "Allow users to search products or content using images instead of text."
      },
      {
        title: "Edge Vision Solutions",
        description: "Deploy lightweight models on cameras and edge devices for low-latency decision-making."
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
export const valueDataOcr: ValueSectionData[] = [
  {
    titleParts: [
      "Turning Documents into ",
      { text: "Digital Intelligence", bold: true },
    ],
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
export const stepsDataOcr: TimeLineData[] = [
  {
    titleParts: [
      "From Document Capture to",
      { text: "Actionable Data", bold: true },
    ],
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
export const EmpowerOcr: EmpowerData[] = [
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


