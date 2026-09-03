
// Type Definitions

export interface LogoItem {
  src: string;
  alt: string;
  /**
   * Figma renders these as alpha masks filled white. The exported PNG is the
   * original coloured artwork (e.g. GASCO is blue, Tawal is black), so it must
   * be masked rather than drawn directly or it disappears on the dark hero.
   */
  masked?: boolean;
  /**
   * A second masked piece drawn beside `src` in the same marquee cell — Eagle
   * Hills is a mark plus a separate wordmark export, which Figma composes into
   * one 130px cell rather than two logos.
   */
  companion?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem {
  title: string;
  subPages: NavLink[];
}

// A mega-menu link. Omit `href` to render a disabled "Soon" row instead of a
// dead link. Set `comingSoon` to keep the item clickable (e.g. pointing at a
// coming-soon page) while still flagging it as not yet launched.
export interface MegaMenuLink {
  label: string;
  href?: string;
  comingSoon?: boolean;
  /**
   * Panel image shown beside the list while this row is hovered. Only the
   * Solutions menu has per-item art; menus without it keep one static panel.
   */
  image?: string;
}

export interface ServiceButton {
  label: string;
  href: string;
}

export interface ServiceSectionItem {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  bgImage: string;
  gridClasses: string;
  hoverTranslate: string;
  isBusiness?: boolean;
  MoreBtn?: string;
  buttons: ServiceButton[];
}

export interface ValueItem {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin: string;
}

export interface CategoryService {
  label: string;
  description: string;
  slug?: string;
}

export interface ServiceCategory {
  title: string;
  subtitletop?: string;
  subtitlebottom: string;
  bgColor: string;
  textColor: string;
  accentImage: string;
  imagePosition: string;
  href?: string;
  services: CategoryService[];
}

export interface DifferentCardItem {
  icon: string;
  label: string;
  description: string;
}

export interface CollabCardItem {
  icon: string;
  translate_y: string;
  max_w?: string;
  label: string;
  description: string;
}

export interface FaqItem {
  value: string;
  question: string;
  answer: string;
}

export interface JobListing {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  fullDescription: string;
  requirements: string[];
  benefits: string[];
}

export interface CareersHeader {
  title: string;
  company: string;
}

export interface OpenApplication {
  title: string;
  type: string;
  location: string;
  shortDesc: string;
}

export interface SocialLink {
  name: string;
  href: string;
  src: string;
}

// Client Logos — the white marquee row exported cell-by-cell from Figma
// 2436:17135, in the designs left-to-right order (logo-01 is the first cell).
// These exports are already filled white, so they are drawn directly; nothing
// here needs the alpha-mask treatment that the coloured artwork required.
// They still assume a dark surface behind them.
const logoIcon = "/assets/Images/ClientLogo/marquee"
export const logos: LogoItem[] = [
  { src: `${logoIcon}/logo-01.png`, alt: "Tarabut" },
  { src: `${logoIcon}/logo-02.png`, alt: "Neogies" },
  { src: `${logoIcon}/logo-03.png`, alt: "AMAX" },
  { src: `${logoIcon}/logo-04.png`, alt: "Client logo" },
  { src: `${logoIcon}/logo-05.png`, alt: "Client logo" },
  { src: `${logoIcon}/logo-06.png`, alt: "Client logo" },
  { src: `${logoIcon}/logo-07.png`, alt: "Eagle Hills Properties" },
  { src: `${logoIcon}/logo-08.png`, alt: "Client logo" },
  { src: `${logoIcon}/logo-09.png`, alt: "Client logo" },
  { src: `${logoIcon}/logo-10.png`, alt: "GASCO" },
  { src: `${logoIcon}/logo-11.png`, alt: "Client logo" },
  { src: `${logoIcon}/logo-12.png`, alt: "Tawal" },
  { src: `${logoIcon}/logo-13.png`, alt: "Client logo" },
  { src: `${logoIcon}/logo-14.png`, alt: "GoTel" },
  { src: `${logoIcon}/logo-15.png`, alt: "Client logo" },
  { src: `${logoIcon}/logo-16.png`, alt: "MyCo" },
  { src: `${logoIcon}/logo-17.png`, alt: "Client logo" },
  { src: `${logoIcon}/logo-18.png`, alt: "Client logo" },
];
//Navbar
// Spotlight image shown beside the sub-services in the Services mega menu.
// Keys must match services_Nav titles exactly — a mismatch silently falls
// back to the Advisory image rather than erroring.
const servicesNavImages = "/assets/Images/nav/services";
export function getSpotlightImage(title: string): string {
  const imageMap: Record<string, string> = {
    "Advisory": `${servicesNavImages}/advisory.png`,
    "Artificial Intelligence": `${servicesNavImages}/artificial-intelligence.png`,
    "Software Engineering": `${servicesNavImages}/software-engineering.png`,
    "Data Engineering": `${servicesNavImages}/data-engineering.png`,
    "Cybersecurity": `${servicesNavImages}/cybersecurity.png`,
    "Policy & Governance": `${servicesNavImages}/policy-governance.png`,
    "Expertise": `${servicesNavImages}/policy-governance.png`,
  };
  return imageMap[title] || `${servicesNavImages}/advisory.png`;
}
export const services_Nav: NavItem[] = [
  {
    title: "Advisory",
    subPages: [
      { label: "Product Strategy & Roadmapping", href: "/services/advisory/product-strategy" },
      { label: "Digital Transformation", href: "/services/advisory/digital-transformation" },
    ],
  },
  {
    title: "Artificial Intelligence",
    subPages: [
      { label: "AI Agent", href: "/services/ai/ai-agent" },
      { label: "Generative AI", href: "/services/ai/generative-ai" },
      { label: "Data Science & MLOps", href: "/services/ai/data-science" },
      { label: "Conversational Intelligence", href: "/services/ai/conversational-intelligence" },
      { label: "Computer Vision", href: "/services/ai/computer-vision" },
      { label: "Optical Character Recognition", href: "/services/ai/optical-character-recognition" },
    ],
  },
  {
    title: "Software Engineering",
    subPages: [
      { label: "Custom Software Development", href: "/services/softengineering/custom-software-development" },
      { label: "Application Development (Mobile & Web)", href: "/services/softengineering/app-development" },
      { label: "Application Modernization", href: "/services/softengineering/app-modernization" },
      { label: "Database Migration", href: "/services/softengineering/database-migration" },
      { label: "Third-Party Integrations", href: "/services/softengineering/third-party" },
    ],
  },
  {
    // Labelled "Data Engineering" in the nav design; routes stay /dataservices/*
    title: "Data Engineering",
    subPages: [
      { label: "Data Strategy Consulting ", href: "/services/dataservices/data-strategy" },
      { label: "Data Warehouse Solutions", href: "/services/dataservices/data-warehouse" },
      { label: "Data Analytics & BI", href: "/services/dataservices/data-analytics" },
    ],
  },
  {
    title: "Cybersecurity",
    subPages: [
      { label: "Solution Deployment and Management", href: "/services/cybersecurity/solution-deployment" },
      { label: "Governance and Compliance", href: "/services/cybersecurity/governance-and-compliance" },
      { label: "Cyber Assessments", href: "/services/cybersecurity/cyber-assessments" },
      { label: "Managed Cybersecurity Service", href: "/services/cybersecurity/managed-cybersecurity-service" },
      { label: "Risk Management & Governance", href: "/services/cybersecurity/risk-management" }
    ]
  },
  {
    // Labelled "Policy & Governance" in the nav design; routes stay /itgovernance/*
    title: "Policy & Governance",
    subPages: [
      { label: "Regulatory Compliance", href: "/services/itgovernance/regulatory-compliance" },
      { label: "Governance Framework Development", href: "/services/itgovernance/governance-framework-development" },
      { label: "Resource Augmentation", href: "/services/itgovernance/resource-augmentation" },
    ],
  },
  {
    title: "Expertise",
    subPages: [
      { label: "RPA", href: "/services/Expertise/rpa" },
      { label: "DevOps", href: "/services/Expertise/devops" },
    ]
  }
  // {
  //   title: "Digital Marketing",
  //   subPages: [
  //     { label: "Content Creation", href: "#" },
  //     { label: "Social Media Management", href: "#" },
  //     { label: "Video Editing", href: "#" },
  //     { label: "Ads Managment", href: "#" },
  //     { label: "Copywriting", href: "#" },
  //     { label: "Design & Creative Solutions", href: "#" },
  //   ],
  // },
  // {
  //   icon: Megaphone,
  //   title: "Business Enablement",
  //   subPages: [
  //     { label: "Account & Finance", href: "#" },
  //     { label: "Hr & Recruitment", href: "#" },
  //   ],
  // },
];

/**
 * Flat list of every real service page, derived from services_Nav's
 * sub-pages. Consumed by the case-study "related services" picker and the
 * contact form's enquiry dropdown, so both stay resolvable to a route that
 * actually exists instead of maintaining a second, driftable list.
 */
export const serviceItems: { title: string; href: string }[] = services_Nav.flatMap((category) =>
  category.subPages.map((sub) => ({ title: sub.label, href: sub.href }))
);

// "Solutions" top-nav dropdown (separate from services_Nav's categories)
const solutionsNavImages = "/assets/Images/nav/solutions";
export const solutions_Nav: MegaMenuLink[] = [
  {
    label: "ERP Solutions",
    href: "/services/solutions/erp",
    image: `${solutionsNavImages}/erp-solutions.png`,
  },
  {
    label: "BMC Helix",
    href: "/services/solutions/bmc-helix",
    image: `${solutionsNavImages}/bmc-helix.png`,
  },
  {
    label: "Microsoft Dynamics 365",
    href: "/services/solutions/microsoft-360",
    image: `${solutionsNavImages}/microsoft-dynamics-365.png`,
  },
  {
    label: "Manage Engine",
    href: "/services/solutions/manage-engine",
    image: `${solutionsNavImages}/manage-engine.png`,
  },
];

// "Products" top-nav dropdown — items without an `href` render as "Soon".
// Cortex Radiology and Catalyst.ai resolve to coming-soon pages until their
// real product pages are built.
export const products_Nav: MegaMenuLink[] = [
  { label: "Certus", href: "/products/certus" },
  { label: "Cortex Radiology", comingSoon: true },
  { label: "Catalyst.ai", comingSoon: true },
];

// "About Us" top-nav dropdown — items without an `href` render as "Soon"
const aboutNavImages = "/assets/Images/nav/about";
export const aboutUs_Nav: MegaMenuLink[] = [
  { label: "About Us", href: "/about-us", image: `${aboutNavImages}/about.png` },
  { label: "Our Team", href: "/team", image: `${aboutNavImages}/team.png`},
  // The blog is the Insights hub — its hero reads "Insights, Ideas & Industry Trends".
  { label: "Insights", href: "/blogs", image: `${aboutNavImages}/blogs.png`},
  { label: "News & Article" },
  { label: "Case Study", href: "/case-studies", image: `${aboutNavImages}/case-studies.png`},
  { label: "White Paper", href: "/white-paper", image: `${aboutNavImages}/white-paper.png`},
  { label: "Careers", href: "/careers", image: `${aboutNavImages}/careers.png`},
];

// Footer Links and Data
export const FooterData: NavItem[] = [
  {
    title: "Company",
    subPages: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Advisory",
    subPages: [
      { label: "Product Strategy & Roadmapping", href: "/services/advisory/product-strategy" },
      { label: "Digital Transformation", href: "/services/advisory/digital-transformation" },
    ],
  },
  {
    title: "Artificial Intelligence",
    subPages: [
      { label: "AI Agent", href: "/services/ai/ai-agent" },
      { label: "Generative A.I", href: "/services/ai/generative-ai" },
      { label: "Data Science & MLOps", href: "/services/ai/data-science" },
      { label: "Conversational Intelligence", href: "/services/ai/conversational-intelligence" },
      { label: "Computer Vision", href: "/services/ai/computer-vision" },
      { label: "Optical Character Recognition", href: "/services/ai/optical-character-recognition" },
    ],
  },
  {
    title: "Software Engineering",
    subPages: [
      { label: "Custom Software Development", href: "/services/softengineering/custom-software-development" },
      { label: "Application Development (Mobile & Web)", href: "/services/softengineering/app-development" },
      { label: "Application Modernization", href: "/services/softengineering/app-modernization" },
      { label: "Database Migration", href: "/services/softengineering/database-migration" },
      { label: "Third-Party Integrations", href: "/services/softengineering/third-party" },
    ],
  },
  {
    title: "Cybersecurity",
    subPages: [
      { label: "Solution Deployment and Management", href: "/services/cybersecurity/solution-deployment" },
      { label: "Governance and Compliance", href: "/services/cybersecurity/governance-and-compliance" },
      { label: "Cyber Assessments", href: "/services/cybersecurity/cyber-assessments" },
      { label: "Managed Cybersecurity Service", href: "/services/cybersecurity/managed-cybersecurity-service" },
      { label: "Risk Management & Governance", href: "/services/cybersecurity/risk-management" }
    ]
  },
  {
    title: "Data Service",
    subPages: [
      { label: "Data Strategy Consulting ", href: "/services/dataservices/data-strategy" },
      { label: "Data Warehouse Solutions", href: "/services/dataservices/data-warehouse" },
      { label: "Data Analytics & BI", href: "/services/dataservices/data-analytics" },
    ],
  },
  {
    title: 'IT Governance',
    subPages: [
      { label: 'Regulatory Compliance', href: "/services/itgovernance/regulatory-compliance" },
      { label: 'Governance Framework Development', href: "/services/itgovernance/governance-framework-development" },
      // { label: 'ITIL', href:"/services/itgovernance/itil" },
      { label: 'Resource Augmentation', href: "/services/itgovernance/resource-augmentation" },
    ],
  },
  {
    title: 'Solutions',
    subPages: [
      { label: 'ERP Solutions', href: "/services/solutions/erp" },
      { label: 'BMC Hleix', href: "/services/solutions/bmc-helix" },
      { label: 'Microsoft Dynamics 365', href: "/services/solutions/microsoft-360" },
      { label: 'Manage Engine', href: "/services/solutions/manage-engine" },
      { label: 'IBM', href: "/services/solutions/ibm" },
    ],
  },
  {
    title: 'Expertise',
    subPages: [
      { label: 'RPA', href: "/services/Expertise/rpa" },
      { label: 'DevOps', href: "/services/Expertise/devops" },
    ],
  },


  // {
  //   title: 'Digital Marketing',
  //   items: [
  //     { label: 'Content Creation', href:"/" },
  //     { label: 'Social Media Management', href:"/" },
  //     { label: 'Ads Management', href:"/" },
  //     { label: 'Copywriting', href:"/" },
  //     { label: 'Creative Solutions', href:"/" },
  //     { label: 'Video Editing', href:"/" },
  //   ],
  // },
  // {
  //   title: 'Business Enablement',
  //   items: [
  //     { label: 'Accounts & Finance', href:"/" },
  //     { label: 'HR & Recruitment', href:"/" },
  //   ],
  // },
];

// export const secondarySections = [
//   {
//     title: 'IT Service Management',
//     items: [
//       { label: 'BMC Helix', href:"/" },
//       { label: 'Manage Engine', href:"/" },
//     ],
//   },
//   {
//     title: 'Cyber Security',
//     items: [
//       { label: 'Solution Deployment', href:"/" },
//       { label: 'Governance & Compliance', href:"/" },
//       { label: 'Cyber Assessments', href:"/" },
//       { label: 'Managed Cybersecurity', href:"/" },
//     ],
//   },
//   {
//     title: 'Data & Analytics',
//     items: [
//       { label: 'Data Strategy Consulting', href:"/" },
//       { label: 'Data Warehouse', href:"/" },
//       { label: 'Data Analytics & BI', href:"/" },
//     ],
//   },
// ];

// export const solutions = ['Microsoft Dynamics 365', 'Power BI', 'BMC Helix', 'Odoo'];

const IconSocial = "assets/Images"
export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/virtuosoft.pk/',
    src: `/${IconSocial}/linkedin.svg`
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1D7GPDPc44/?mibextid=LQQJ4d',
    src: `/${IconSocial}/facebook.svg`
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/virtuosoft_official?igsh=bHNzd2kxa2Z3eDhp&utm_source=qr',
    src: `/${IconSocial}/instagram.svg`
  },
];

//Home
// Services Section 
const IconServices = "/assets/Images/home/"

export const services_Section: ServiceSectionItem[] = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "AI Solutions That Automate And Innovate",
    bgColor: "bg-[#0E3782]",
    textColor: "text-white",
    bgImage: `${IconServices}/ai.svg`,
    gridClasses: "col-span-full md:col-span-1 lg:row-span-2 lg:min-h-[600px] py-10 md:py-0",
    hoverTranslate: "md:translate-y-48 md:group-hover:-translate-y-28 lg:group-hover:-translate-y-32",
    buttons: [
      { label: "A.I Agent", href: "/services/ai/ai-agent" },
      { label: "Generative AI", href: "/services/ai/generative-ai" },
      { label: "Data Science & MLOps", href: "/services/ai/data-science" },
      { label: "Conversational Intelligence", href: "/services/ai/conversational-intelligence" },
      { label: "Computer Vision", href: "/services/ai/computer-vision" },
      { label: "Optical character recognition", href: "/services/ai/optical-character-recognition" },
    ],
  },
  {
    id: "advisory",
    title: "Advisory & Strategy",
    description: "Expert guidance to drive digital growth.",
    bgColor: "bg-[#003366]",
    textColor: "text-white",
    bgImage: `${IconServices}/advisory.svg`,
    gridClasses: "col-span-full md:col-span-1 lg:row-span-1 lg:min-h-[300] py-10 md:py-0",
    hoverTranslate: "md:translate-y-20 group-hover:-traslate-y-5 md:group-hover:-translate-y-20 lg:group-hover:-translate-y-10",
    buttons: [
      { label: "Product Strategy & Roadmapping", href: "/services/advisory/product-strategy" },
      { label: "Digital Transformation", href: "/services/advisory/digital-transformation" },
    ],
  },
  {
    id: "business",
    title: "IT governance",
    description: "Structured Governance That Strengthens Control And Accountability",
    bgColor: "bg-[#e6e6e6]",
    textColor: "text-[#111]",
    bgImage: `${IconServices}/be.svg`,
    gridClasses: "col-span-full md:col-span-1 lg:row-span-1 lg:min-h-[300]",
    hoverTranslate: "md:translate-y-30 md:group-hover:-translate-y-20 lg:group-hover:-translate-y-2 py-10 md:py-0",
    isBusiness: true,
    buttons: [
      { label: "Regulatory Compliance", href: "/services/itgovernance/regulatory-compliance" },
      { label: "Governance Framework Development", href: "/services/itgovernance/governance-framework-development" },
      { label: "Resource Augmentation", href: "/services/itgovernance/resource-augmentation" },
    ],
  },
  {
    id: "engineering",
    title: "Software Engineering",
    description: "Designing, building, and modernizing digital systems that scale with your business.",
    bgColor: "bg-[#2a2d30]",
    textColor: "text-white",
    bgImage: `${IconServices}/engineering.svg`,
    gridClasses: "col-span-full md:col-span-2 lg:col-span-2 lg:row-span-1 min-h-[300px]",
    hoverTranslate: "md:translate-y-50 md:translate-y-20 md:group-hover:-translate-y-16 lg:group-hover:-translate-y-10 py-10 md:py-0",
    // isBusiness: true,
    MoreBtn: "/",
    buttons: [
      { label: "Custom Software Development", href: "/services/softengineering/custom-software-development" },
      { label: "App Development", href: "/services/softengineering/app-development" },
      { label: "App Modernization", href: "/services/softengineering/app-modernization" },
      { label: "Database Migration", href: "/services/softengineering/database-migration" },
      { label: "Third-Party Integrations", href: "/services/softengineering/third-party" },
    ],
  },
];
// Values Section
const IconValues = "/assets/Images/home/"
export const values_Section: ValueItem[] = [
  {
    title: 'Teamwork',
    description:
      'We believe great ideas come from great collaboration. Our strength lies in the way we work together, across teams, disciplines and perspectives. At Virtuosoft, everyone contributes, challenges and supports one another to bring out their best. This culture of shared ownership drives innovation, fuels creativity and ensures every success is a collective one.',
    imageSrc: `${IconValues}/teamwork.svg`,
    alt: 'Teamwork Icon',
  },
  {
    title: 'Integrity',
    description:
      'Integrity is the backbone of everything we do. It guides our choices, shapes our culture and defines our relationships. We stand by our word, follow through on our commitments and always choose fairness and honesty, even when no one’s watching. For us, integrity isn’t a statement of ethics; it’s a daily practice of doing what’s right.',
    imageSrc: `${IconValues}/integrity.svg`,
    alt: 'Integrity Icon',
  },
  {
    title: 'Reliability',
    description:
      'What our clients value most is knowing we’re there, steady, responsive and committed to their success. From the smallest task to the most complex project, Virtuosoft stands for consistency, precision and accountability. We don’t just aim to meet expectations, we make sure our partners can rely on us to exceed them, every time.',
    imageSrc: `${IconValues}/relability.svg`,
    alt: 'Reliability Icon',
  },
];
// Our Team Page
const imageBaseUrl = "assets/Images/team";
export const teamMembers: TeamMember[] = [
  {
    name: "Muhammad Lukman",
    role: "Chairman",
    description: "Muhammad Lukman is an established business leader with over 30 years of experience guiding organizations through financial, operational, and technology driven transformation. His career includes two decades as CEO of NCCPL and early professional grounding at PwC. He is recognized for shaping governance frameworks, strengthening financial systems, and steering complex change across large scale enterprises",
    image: `/${imageBaseUrl}/lukman.png`,
    linkedin: "https://www.linkedin.com/in/muhammad-lukman-888288116"
  },
  {
    name: "Shoaib Ur Rehman",
    role: "Chief Executive Officer",
    description:
      "Shoaib ur Rehman is a seasoned technology leader and enterprise innovator with over 20 years of experience delivering large-scale digital solutions across Pakistan, the UAE, MENA and global markets. As Chief Executive Officer of Virtuosoft, he leads the firm’s strategic vision, technology roadmap and delivery operations, guiding organizations through cloud modernization, data-driven transformation and human-centered system design.",
    image: `/${imageBaseUrl}/ceo.png`,
    linkedin: "https://www.linkedin.com/in/shoaib-rehman-226b621a"
  },
  {
    name: "Amir Akhtar Jamili",
    role: "Director Cybersecurity and IT - Governance",
    description: "Amir Jamili is a senior cybersecurity executive with 18 years of experience building national grade security programs across financial and regulated sectors. As CISO and Secretary of the NCCPL IT Board, he has delivered major advancements in information security governance, enterprise resilience, and AI driven automation. Amir is widely recognized in the region for elevating cybersecurity maturity across critical institutions.",
    image: `/${imageBaseUrl}/directorcs.png`,
    linkedin: "https://www.linkedin.com/in/amir-jamili-a3b343a"
  },
  {
    name: "Azhar Rizvi",
    role: "Chief Operating Officer",
    description:
      "Azhar Rizvi brings 15 years of leadership experience across the Middle East, West Africa and Asia, specializing in growth operations, market expansion and trade marketing. As COO, he oversees operational strategy, client delivery and organizational performance, helping Virtuosoft scale sustainably across regional markets.",
    image: `/${imageBaseUrl}/azhar-2.png`,
    linkedin: "https://www.linkedin.com/in/azher-rizvi"

  },
  {
    name: "Usman Ur Rehman",
    role: "Director of IT Governance",
    description:
      "Usman is a seasoned technology leader with more than 6 years of experience in IT Governance, elevating service quality and transforming operations in enterprise environments. His background spans software quality assurance, DevOps practices, service optimization and governance frameworks, enabling him to guide organizations toward reliable, scalable and well governed technology ecosystems.",
    image: `/${imageBaseUrl}/Usman-Ur-Rehman.png`,
    linkedin: "https://www.linkedin.com/in/usman-ur-rehman-64b67223/"
  },
  {
    name: "Syed Ibrahim Ahmed",
    role: "Head of HR",
    description: "Ibrahim Ahmed is the Head of HR at Virtuosoft with strong experience and professional certifications in human resource management. He focuses on talent management, organizational development and building effective HR policies. With solid skills in communication, team leadership and strategic planning, he works to create a positive and inclusive work environment. His goal is to support Virtuosoft's growth by aligning HR strategies with the company's vision, values and long-term objectives.",
    image: `/${imageBaseUrl}/Ibrahim.png`,
    linkedin: "https://www.linkedin.com/in/syedibrahimahmed-hr/"
  },
  {
    name: "Asiya Nazeer",
    role: "HR Operations",
    description: "Asiya Nazeer is an HR Executive who specializes in recruitment, employee engagement and improving day-to-day HR processes to support organizational efficiency. With a strong interest in building positive workplace cultures, she focuses on employee satisfaction, smooth coordination and continuous improvement. Asiya is committed to learning, growing her HR expertise and contributing to long-term business success.",
    image: `/${imageBaseUrl}/asiya-nazeer.png`,
    linkedin: "https://www.linkedin.com/in/asiya-nazeer"
  },
  // {
  //   name: "Muhammad Rehan",
  //   role: "Head of Tecnology",
  //   description: "Muhammad Rehan is a Lead Full Stack Engineer at Virtuosoft with nearly 8 years of hands-on experience in software development. He has grown through multiple roles from Python Developer to Senior Engineer and now leads full stack development initiatives. His expertise includes backend systems, cloud infrastructure and scalable web applications using technologies such as Python, Node.js, AWS, Django and modern JavaScript frameworks. He plays a key role in building reliable, high-performance solutions for clients across different industries.",
  //   image: `/${imageBaseUrl}/m_rehan.png`,
  //   linkedin: "https://www.linkedin.com/in/rehan010/"
  // },
  // {
  //   name: "Aumare javed",
  //   role: "Business Development Consultant , Europe",
  //   description: "Currently contributing to Caansoft, a sister concern of Virtuosoft, with over a decade of expertise in delivering cutting-edge software solutions. With a strong focus on user-centric design, they excel in enhancing efficiency and quality. Skilled in leading teams to craft solutions tailored to diverse business needs, they prioritize exceptional user experiences and aesthetic excellence, ensuring alignment with organizational goals",
  //   image: `/${imageBaseUrl}/aumair_javed.png`,
  //   linkedin: "#"
  // },
  // {
  //   name: "Ahmed Nawaz",
  //   role: "Sr. Business Development Manager",
  //   description: "Ahmed Nawaz is a Senior Manager of Business Operations at Virtuosoft with over 12 years of experience in business management and operations. He specializes in aligning strategy with execution, improving internal processes and managing cross-functional teams. Ahmed oversees core business functions including operations, administration, vendor management and compliance. Known for his practical approach and strong leadership, he helps drive efficiency, stability and long-term growth across the organization.",
  //   image: `/${imageBaseUrl}/ahmed_nawaz.png`,
  //   linkedin: "https://www.linkedin.com/in/ahnawaz17/"
  // },
  // {
  //   name: "Adnan Malik",
  //   role: "Cyber Security Expert",
  //   description: "Mr. Adnan, holds a Bachelor’s in Computer System Engineering, from the University of Engineering & Technology, Peshawar.He is an adept cybersecurity professional with expertise in Security Operations, PCI DSS compliance, VAPT, Ethical Hacking, Cyber  Security Risk Management, ISO 27001, Cloud Security, and SIEM. He excels in Threat and Vulnerability Management,",
  //   image: `/${imageBaseUrl}/adnan_malik.png`,
  //   linkedin: "https://www.linkedin.com/in/adnanmalikinfo/"
  // },
  // {
  //   name: "Wasif Shariq",
  //   role: "Head of Growth",
  //   description: "Wasif Shariq leads strategic planning, internal operations, client relationships and external partnerships. His core focus is helping founders and businesses build strong development teams within 48–72 hours, modernize their technology stacks and scale with confidence. With hands-on experience in software development, SaaS and team building, Wasif works closely with clients to turn ideas into practical, growth-ready solutions.",
  //   image: `/${imageBaseUrl}/wasif_shariq.png`,
  //   linkedin: "https://www.linkedin.com/in/mwasifshariq/"
  // },
  {
    name: "Tahir aziz",
    role: "Business Development Consultant, USA",
    description: "Data Engineering and Analytics Expert with over 14 years of experience in designing, developing, and implementing complex data warehousing and big data solutions. Proficient in ETL, data modeling, and data mining techniques using industry-leading tools like Teradata, Informatica, and Hadoop. Skilled in cloud technologies like AWS and Snowflake. Passionate about leveraging data to drive business insights and improve decision-making.",
    image: `/${imageBaseUrl}/tahir.png`,
    linkedin: "https://www.linkedin.com/in/mrtaz/"
  },
  {
    name: "Saad Athar",
    role: "Head Of Business Development, Middle East",
    description: "Saad Athar, a seasoned Chartered Accountant, serves as the Business Development Head for the Middle East. With over 15 years of experience in the MENA region and a career spanning nine countries, Saad brings unparalleled expertise in business development, strategy, and organizational growth. His specializations include systems and process optimization, budgeting, cost recovery models, project management, and ERP implementation. Proficient in English, Arabic, and Urdu, Saad is adept at fostering cross-border collaborations and negotiating contracts. An alumnus of the University of East London and Warwick Business School, with certifications from the International Council of Shopping Centres and Covey Labs, Saad embodies a commitment to excellence. His multicultural insights and strategic vision have been instrumental in expanding operations and driving success for the organization in the Middle East region.",
    image: `/${imageBaseUrl}/saad.png`,
    linkedin: "https://www.linkedin.com/in/saadathar-strategist/"
  },
  {
    name: "Sohail malik",
    role: "Head of Financial BPO",
    description: "Sohail Imdad is an Associate Chartered Accountant from ICAR he has more than ten years of working experience. During the course of employment in PwC, he gained valuable experience of audit and Assurance, Taxation and Accounting & Book Keeping of multiple industries. He has also served in fastest growing pharmaceutical of Pakistan as a Lead Treasury and also in the the top FMCG of Pakistan as the Head of Taxation.",
    image: `/${imageBaseUrl}/sohail_malik.png`,
    linkedin: "https://www.linkedin.com/in/suhail-imdad/"
  },
]


// Services Page Sections
const accentImg = "assets/Images/service"
export const aiCategory: ServiceCategory = {
  title: 'Artificial Intelligence & Data',
  subtitletop: 'Turning Data into Intelligent Action',
  subtitlebottom: "Artificial Intelligence and Data are transforming how businesses operate and grow. With the right tools and strategy, data becomes a powerful engine for automation, prediction and smarter decision-making.",
  bgColor: 'bg-linear-to-br from-primary to-[#003799]',
  textColor: 'text-white',
  accentImage: `/${accentImg}/ai_data_service.png`,
  imagePosition: "-top-6 -right-4",
  href: "/services/ai/",
  services: [
    { label: 'AI Agent', description: "Intelligent AI agents automating workflows, enhancing customer experiences and enabling real-time decisions for operational efficiency.", slug: 'ai-agent' },
    { label: 'Generative AI', description: "Advanced generative AI services enabling intelligent automation, personalized experiences and rapid prototyping for business transformation.", slug: 'generative-ai' },
    { label: 'Data Science & MLOps', description: "Comprehensive machine learning operations delivering faster deployments, improved accuracy and long-term operational excellence.", slug: 'data-science' },
    {
      label: 'Conversational AI', description: "We design and deploy conversational systems that understand context, intent, and user behavior. Our solutions automate support workflows, enhance customer engagement, and provide real time insights through intelligent dialog models tailored to your business processes.",
      slug: "conversational-intelligence"
    },
    {
      label: 'Computer Vision', description: "We build computer vision solutions that analyze images and video to detect objects, identities, behaviors, and anomalies. These systems enable real-time monitoring, compliance enforcement, automation, and data-driven decision-making across physical and digital environments.",
      slug: "computer-vision"
    },
    {
      label: 'Optical character recognition', description: "We implement OCR engines that accurately extract, classify, and structure data from scanned documents, images, and unstructured inputs. This enables automated workflows, reduces manual data entry, and improves data accuracy across enterprise operations.",
      slug: "optical-character-recognition"
    },
  ]
}

export const itCategory: ServiceCategory = {
  title: 'IT Governance',
  subtitletop: '',
  subtitlebottom: "Structured Governance That Strengthens Control And Accountability",
  bgColor: 'bg-linear-to-br from-primary to-[#003799]',
  textColor: 'text-white',
  accentImage: `/${accentImg}/ai_data_service.png`,
  imagePosition: "-top-6 -right-4",
  href: "/services/itgovernance/",
  services: [
    { label: 'Regulatory Compliance', description: "Ensure Business Operations Meet Industry Regulations, Standard And Legal Requirements To Maintain Trust And Avoid Penalties", slug: 'regulatory-compliance' },
    { label: 'Governance Framework Development', description: "Design And Implement Structured It Governance Frameworks To Align Technology Strategy with Business Objectives Efficiently", slug: 'governance-framework-development' },
    { label: 'Resource Augmentation', description: "Provide Skilled IT Professionals And Expertise To Support Projects, Optimize Performance And Achieve Business Goals.", slug: 'resource-augmentation' },
  ]
}
export const dataServicesCategory: ServiceCategory = {
  title: 'Data Service',
  subtitletop: '',
  subtitlebottom: 'Turning Complex Data Into Valuable Insights',
  accentImage: `/${accentImg}/as_service.png`,
  textColor: 'text-white',
  bgColor: 'bg-linear-to-br from-[#084387] to-[#021021]',
  imagePosition: "top-0 right-0",
  href: "/services/dataservices/",
  services: [
    {
      label: "Data Strategy Consulting",
      description: "Develop actionable data strategies that align with business goals, maximize value and drive informed decision-making.",
      slug: "data-strategy"
    },
    {
      label: "Data Warehouse",
      description: "Design and manage centralized data storage solutions to enable efficient access, integration and reporting.",
      slug: "data-warehouse"
    },
    {
      label: "Data Analytics and BI",
      description: "Transform raw data into insights through analytics and business intelligence for smarter, data-driven decisions.",
      slug: "data-analytics"
    },
  ],
}

export const cloudCategory: ServiceCategory = {
  title: 'Cloud Engineering',
  // subtitletop: 'Powering Agility in a Connected World',
  subtitlebottom: 'Designing, migrating, and operating secure, scalable cloud environments that improve agility, resilience, and cost efficiency.',
  accentImage: `/${accentImg}/as_service.png`,
  textColor: 'text-white',
  bgColor: 'bg-linear-to-br from-[#084387] to-[#021021]',
  imagePosition: "-top-6 -right-4",
  services: [
    {
      label: 'Cloud Consulting',
      description: "Design the perfect cloud setup with secure, flexible and built to support your business goals."
    },
    {
      label: 'Cloud Migration',
      description: "Move to the cloud without the chaos. We handle the transition smoothly while keeping your data safe."
    },
    {
      label: "DevOps & CI/CD Implementation",
      description: "Accelerate your development cycle with automation, continuous integration and faster deployment."
    },
    {
      label: "Cloud Cost Optimization",
      description: "Get more value from your cloud by streamlining resources and minimizing unnecessary costs."
    },
    {
      label: "Managed Services & Support",
      description: "Stay focused on growth while we manage, monitor and maintain your cloud infrastructure 24/7."
    }
  ],
}

export const advisoryCategory: ServiceCategory = {
  title: 'Advisory & Strategy',
  subtitletop: 'From Vision to Real-World Impact',
  subtitlebottom: 'Every great product begins with a clear strategy. Our advisory services help you uncover opportunities, reduce risk and shape a roadmap that turns big ideas into sustainable results.',
  accentImage: `/${accentImg}/as_service.png`,
  textColor: 'text-white',
  bgColor: 'bg-linear-to-br from-[#084387] to-[#021021]',
  imagePosition: "top-0 right-0",
  href: "/services/advisory/",
  services: [
    // {
    //   label: 'Discovery Workshops',
    //   description: "Collaborate with experts to explore ideas, define goals and set a clear direction for your digital journey."
    // },
    // {
    //   label: 'Technical Feasibility Study',
    //   description: "Know what’s possible and what’s not. We evaluate your concepts from every angle before development begins."
    // },
    {
      label: "Product Strategy & Roadmapping",
      description: "Turn your product vision into a detailed, achievable plan with defined milestones and measurable outcomes.",
      slug: "product-strategy"
    },
    {
      label: "Digital Transformation Consulting",
      description: "Reimagine your organization with strategies that connect technology, people and processes for long-term growth.",
      slug: "digital-transformation"
    },
    // {
    //   label: "UX / UI Consulting",
    //   description: "Design experiences that people love, blending usability, simplicity and aesthetic appeal."
    // }, 
  ],
}

export const engineeringCategory: ServiceCategory = {
  title: 'Software Engineering',
  subtitletop: 'Building the Future, One Line at a Time',
  subtitlebottom: 'From web platforms to enterprise applications, our engineering team turns ideas into scalable digital solutions. Every product is crafted for reliability, performance and real-world impact.',
  accentImage: `/${accentImg}/ed_service.png`,
  textColor: 'text-white',
  bgColor: 'bg-linear-to-br from-[#0E3043] to-[#485861]',
  imagePosition: "top-0 right-0",
  href: "/services/softengineering/",
  services: [
    {
      label: "Custom Software Development",
      description: "Purpose-built software solutions designed around your business workflows, delivering scalability, reliability, and long-term competitive advantage.",
      slug: "custom-software-development"
    },
    {
      label: 'App Development (Mobile & Web)',
      description: "High-performance web and mobile applications engineered for usability, security, and seamless user experiences across platforms.",
      slug: "app-development"
    },
    {
      label: "App Modernization",
      description: "Upgrading legacy applications through refactoring, re-architecture, and technology upgrades to improve performance, security, and maintainability.",
      slug: "app-modernization"
    },
    {
      label: "Database Migration",
      description: "Secure and structured migration of data across platforms, ensuring data integrity, minimal downtime, and improved performance at scale.",
      slug: "database-migration"
    },
    {
      label: "Third-Party Integrations",
      description: "Seamless integration of external systems, APIs, and platforms to unify data, automate processes, and extend application capabilities.",
      slug: "third-party"
    }
  ],
}
export const cyberCategory: ServiceCategory = {
  title: 'Cybersecurity',
  // subtitletop: 'Smart Security That keeps Your Business Resilient',
  subtitlebottom: 'Smart Security That keeps Your Business Resilient',
  accentImage: `/${accentImg}/ed_service.png`,
  textColor: 'text-white',
  bgColor: 'bg-linear-to-br from-[#0E3043] to-[#485861]',
  imagePosition: "top-0 right-0",
  href: "/services/cybersecurity/",
  services: [
    {
      label: "Solution Deployment and Management",
      description: "Implement and manage security solutions to protect systems, networks and data from evolving cyber threats.",
      slug: "solution-deployment"
    },
    {
      label: 'Governance and Compliance',
      description: "Establish policies and controls ensuring IT security practices meet regulatory standards and organizational requirements.",
      slug: "governance-and-compliance"
    },
    {
      label: "Cyber Assessments",
      description: "Conduct comprehensive evaluations of systems, networks and processes to identify vulnerabilities and strengthen defenses.",
      slug: "cyber-assessments"
    },
    {
      label: "Managed Cybersecurity Service",
      description: "Provide continuous monitoring, threat detection and incident response to safeguard digital assets and maintain resilience.",
      slug: "managed-cybersecurity-service"
    },
    {
      label: "Risk Management & Governance",
      description:
        " A structured approach to identifying, prioritizing and mitigating cyber risks with the governance frameworks, policies and oversight needed to keep security aligned with business goals.",
      slug: "risk-management"
    }
  ],
}


// Services Page What Make Us Different? Section
const iconDifferent = "assets/Images/service"
export const differentCard: DifferentCardItem[] = [
  {
    icon: `/${iconDifferent}/different_success.png`,
    label: "Your Success",
    description: "We measure our success by the business results we drive for you."
  },
  {
    icon: `/${iconDifferent}/different_built.png`,
    label: "Built for Users",
    description: "We create intuitive experiences that feel natural from the very first click."
  },
  {
    icon: `/${iconDifferent}/different_proven.png`,
    label: "Proven Experts",
    description: "Your project is handled by our experts, ensuring quality and reliability."
  },
  {
    icon: `/${iconDifferent}/different_launch.png`,
    label: "Launch Faster",
    description: "Our agile process gets your product to market in weeks, not months."
  },
]

// Careers Page Collaboration Section
const iconCollab = "assets/Images/careers"
export const collabCard: CollabCardItem[] = [
  {
    icon: `/${iconCollab}/collab_app.png`,
    translate_y: "translate-0 lg:-translate-y-2",
    max_w: "max-w-2",
    label: "Application Review",
    description: "We review applications to find the best fit."
  },
  {
    translate_y: "translate-0 lg:translate-y-20",
    max_w: "max-w-2",
    icon: `/${iconCollab}/collab_first.png`,
    label: "First Interview",
    description: "We discuss experience, goals and introduce Virtuosoft."
  },
  {
    icon: `/${iconCollab}/collab_skill.png`,
    translate_y: "translate-y-0",
    label: "Skill / Technical Round",
    description: "We test technical skills through practical, role-specific challenges."
  },
  {
    icon: `/${iconCollab}/collab_final.png`,
    translate_y: "translate-0 lg:translate-y-20",
    label: "Final Culture Fit & Other",
    description: "We confirm cultural alignment and extend the offer."
  },
]
// FAQ Data for Home Page
export const Faq_Home: FaqItem[] = [
  {
    value: "item-1",
    question: "What makes Virtuosoft different from other agencies?",
    answer: "We combine deep technical expertise with business acumen, acting as your strategic partner to ensure measurable outcomes rather than just delivering technical solutions."
  },
  {
    value: "item-2",
    question: "What is your design process for web and mobile apps?",
    answer: "Our user-centered process involves discovery research, wireframing, interactive prototyping and usability testing to create designs that are both beautiful and functional across all devices."
  },
  {
    value: "item-3",
    question: "How can AI solutions benefit our specific business?",
    answer: "We begin with a discovery workshop to identify your highest-value AI opportunities, whether it's automating processes, predicting customer behavior or extracting insights from your data."
  },
  {
    value: "item-4",
    question: "What results can we expect from cloud migration?",
    answer: "Typical outcomes include 30-50% reduction in IT costs, improved scalability, enhanced security and greater business flexibility through our carefully planned migration approach."
  },
  {
    value: "item-5",
    question: "What is your software development methodology?",
    answer: "We use agile development with 2-week sprints, regular demos and transparent communication to ensure we're building exactly what you need while maintaining high code quality."
  },
  {
    value: "item-6",
    question: "How do you ensure your project's security?",
    answer: "We implement enterprise-grade security measures including encryption, access controls and continuous monitoring, tailored to your specific industry compliance requirements."
  },
  {
    value: "item-7",
    question: "What ongoing support do you provide after launch?",
    answer: "We offer 24/7 monitoring, emergency support with guaranteed response times and regular maintenance to keep your systems running optimally."
  },
  {
    value: "item-8",
    question: "How long do typical projects take to complete?",
    answer: "Most projects deliver initial results within 2-4 weeks, with full implementation typically completing in 8-16 weeks depending on complexity and requirements."
  },
  {
    value: "item-9",
    question: "How do you handle data privacy and compliance?",
    answer: "We build compliance into every project, following global standards like GDPR and HIPAA, with robust data protection protocols tailored to your industry."
  },
  {
    value: "item-10",
    question: "How do we get started working with Virtuosoft?",
    answer: "Begin with a complimentary discovery session where we analyze your needs and create a tailored proposal with clear timeline and investment details.",
  }
];

// Shared "AI Agent" FAQ set used by the Global and UK home page variants
export const Faq_AIAgent: FaqItem[] = [
  {
    value: "item-1",
    question: "What is an AI Agent?",
    answer: "An AI Agent is a smart system that operates independently to complete complex tasks. It analyzes situations, makes decisions and executes actions across business functions like customer service, operations and data management without constant human oversight.",
  },
  {
    value: "item-2",
    question: "How do AI Agents function?",
    answer: "AI Agents combine large language models with tool access and memory to perceive context, reason about the best next step and take action, looping until the task is complete or a human is needed to intervene.",
  },
  {
    value: "item-3",
    question: "What happens when my subscription expires?",
    answer: "Your workflows pause and data remains safely stored. Renewing your subscription resumes every automation exactly where it left off, with no reconfiguration required.",
  },
  {
    value: "item-4",
    question: "How do AI Agents differ from basic automation tools?",
    answer: "Basic automation follows fixed, pre-programmed rules. AI Agents reason over ambiguous inputs, adapt to changing conditions and make judgment calls, closer to how a skilled team member would handle the same task.",
  },
  {
    value: "item-5",
    question: "What business processes can AI Agents handle?",
    answer: "From document intelligence and customer support to data reconciliation and reporting, AI Agents can take on high-volume, rules-heavy processes across finance, operations and IT service management.",
  },
];

export const Faq_softwareeng_SoftwareDevelopment: FaqItem[] = [
  {
    value: "item-1",
    question: "What is Custom Software Development?",
    answer:
      "Custom Software Development is the process of designing, creating, deploying and maintaining software specifically for a set of users, functions or organizations, as opposed to off-the-shelf software."
  },
  {
    value: "item-2",
    question: "How can custom software transform my business operations?",
    answer:
      "It automates and streamlines your unique workflows, breaks down data silos, provides a competitive market advantage and scales precisely with your growth, driving efficiency and innovation."
  },
  {
    value: "item-3",
    question: "What is the typical timeline for a custom software project?",
    answer:
      "A minimum viable product (MVP) can often be delivered in 8-12 weeks. A comprehensive, enterprise-grade application typically takes 4-8 months, delivered iteratively in agile sprints."
  },
  {
    value: "item-4",
    question: "How do you ensure the software aligns perfectly with our business needs?",
    answer:
      "Our process begins with deep discovery and strategic planning. We involve your key stakeholders throughout, using prototypes and regular demos to ensure every feature delivers tangible business value."
  },
  {
    value: "item-5",
    question: "Can you integrate the new software with our existing systems?",
    answer:
      "Yes. Seamless integration is a core part of our service. We build custom APIs and middleware to ensure your new solution works in harmony with your current ERP, CRM, databases and other tools."
  },
  {
    value: "item-6",
    question: "Who owns the intellectual property of the custom software?",
    answer:
      "You retain 100% ownership of the source code, design and all intellectual property developed during the project, as stipulated in our contract."
  },
  {
    value: "item-7",
    question: "What about ongoing maintenance and support after launch?",
    answer:
      "We offer flexible support and maintenance plans that include performance monitoring, security updates, bug fixes and feature enhancements to ensure your software evolves with your business."
  },
  {
    value: "item-8",
    question: "Is custom software development cost-effective compared to SaaS subscriptions?",
    answer:
      "For core business operations, custom software offers superior long-term ROI. It eliminates recurring license fees, provides a competitive edge and avoids the limitations and cost escalations of generic SaaS platforms."
  },
];

export const Faq_softwareeng_ApplicationDevelopment: FaqItem[] = [
  {
    value: "item-1",
    question: "What is the application development process?",
    answer:
      "It's a process of designing, building and deploying custom web and mobile applications tailored to your specific business requirements and user needs, using agile methodologies."
  },
  {
    value: "item-2",
    question: "What types of applications do you develop?",
    answer:
      "We create web applications, native mobile apps (iOS/Android), cross-platform solutions and complex enterprise software systems for various industries."
  },
  {
    value: "item-3",
    question: "Do you develop for both iOS and Android platforms?",
    answer:
      "Yes, we build native applications using Swift and Kotlin, plus cross-platform solutions using Flutter and React Native for maximum market reach."
  },
  {
    value: "item-4",
    question: "Can you integrate with our existing systems?",
    answer:
      "Yes. We seamlessly connect new applications with your current CRM, ERP, payment gateways and other third-party services through secure APIs."
  },
  {
    value: "item-5",
    question: "What is your typical project pricing structure?",
    answer:
      "We offer fixed-price projects for defined scopes and time-and-materials arrangements for more flexible, evolving project requirements and timelines."
  },
  {
    value: "item-6",
    question: "Do you provide ongoing maintenance and support?",
    answer:
      "Yes, we offer comprehensive support packages including bug fixes, performance optimization, security updates and feature enhancements post-launch."
  },
  {
    value: "item-7",
    question: "How do you ensure application quality?",
    answer:
      "We implement rigorous testing protocols including unit testing, integration testing and user acceptance testing throughout the development lifecycle."
  },
  {
    value: "item-8",
    question: "What is your typical project timeline?",
    answer:
      "Most projects range from 8-20 weeks depending on complexity, with working prototypes delivered within the first 2-4 weeks of development."
  },
  {
    value: "item-9",
    question: "Who owns the intellectual property?",
    answer:
      "You retain full IP rights to all code, designs and deliverables created during our engagement, as specified in our contract agreement."
  },
  {
    value: "item-10",
    question: "How do we get started?",
    answer:
      "Begin with our discovery workshop to define your requirements, scope and timeline, followed by a detailed proposal and project plan."
  },
];

export const Faq_softwareeng_ApplicationModernization: FaqItem[] = [
  {
    value: "item-1",
    question: "What is application modernization?",
    answer:
      "Application modernization involves transforming your outdated software into modern, cloud-native applications that deliver better performance, security and user experience while reducing maintenance costs."
  },
  {
    value: "item-2",
    question: "Why should we modernize our applications?",
    answer:
      "Modernization boosts operational efficiency, enhances security compliance, improves customer experience and enables integration with new technologies and business platforms."
  },
  {
    value: "item-3",
    question: "How long does modernization typically take?",
    answer:
      "Projects typically range from 8-24 weeks, depending on application complexity and whether we're refactoring, replatforming or completely rebuilding your systems."
  },
  {
    value: "item-4",
    question: "What are the biggest modernization challenges?",
    answer:
      "Common challenges include legacy code dependencies, data migration complexity and ensuring business continuity during the transition, all areas where we have proven expertise."
  },
  {
    value: "item-5",
    question: "Can you migrate our on-premise applications to the cloud?",
    answer:
      "Yes, we specialize in secure cloud migration to AWS, Azure, or Google Cloud, ensuring optimal performance, scalability and cost-efficiency for your specific needs."
  },
  {
    value: "item-6",
    question: "What technologies do you use for modernization?",
    answer:
      "We leverage cloud-native architectures, microservices, containerization and modern frameworks to build scalable, maintainable solutions tailored to your technology stack."
  },
  {
    value: "item-7",
    question: "How do you ensure security during modernization?",
    answer:
      "We implement security-by-design principles, conduct regular vulnerability assessments and ensure compliance with industry regulations throughout the modernization lifecycle."
  },
  {
    value: "item-8",
    question: "Will our business operations be disrupted?",
    answer:
      "We use phased migration strategies and parallel testing to ensure zero business disruption, maintaining your existing operations while deploying modernized solutions."
  },
  {
    value: "item-9",
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer comprehensive support packages including performance monitoring, security updates and feature enhancements to keep your applications running optimally."
  },
  {
    value: "item-10",
    question: "How do you handle complex legacy systems?",
    answer:
      "We analyze your legacy architecture and business processes to create a tailored modernization roadmap that preserves business logic while enabling future growth."
  },
];

export const Faq_softwareeng_databaseMigration: FaqItem[] = [
  {
    value: "item-1",
    question: "What is database migration?",
    answer:
      "Database migration is the process of moving data from one database system to another while maintaining accuracy, security, and performance."
  },
  {
    value: "item-2",
    question: "Will my business experience downtime during migration?",
    answer:
      "We design migration strategies to minimize or completely eliminate downtime whenever possible."
  },
  {
    value: "item-3",
    question: "Can you migrate large and complex databases?",
    answer:
      "Yes. We specialize in handling high-volume, mission-critical databases with complex dependencies."
  },
  {
    value: "item-4",
    question: "Do you support cloud database migrations?",
    answer:
      "Absolutely. We migrate databases to AWS, Azure, Google Cloud, and hybrid environments."
  },
  {
    value: "item-5",
    question: "How do you ensure data security during migration?",
    answer:
      "We use encryption, secure transfer protocols, access controls, and audit logs throughout the process."
  },
  {
    value: "item-6",
    question: "What databases do you work with?",
    answer:
      "We support Oracle, MySQL, PostgreSQL, SQL Server, MongoDB, DynamoDB, and many more."
  },
  {
    value: "item-7",
    question: "How long does a database migration take?",
    answer:
      "Timelines vary based on data size and complexity, but most projects range from weeks to a few months."
  },
  {
    value: "item-8",
    question: "Do you offer post-migration support?",
    answer:
      "Yes. We provide optimization, monitoring, and ongoing maintenance after migration."
  },
  {
    value: "item-9",
    question: "Can you help modernize database architecture during migration?",
    answer:
      "Yes. We often re-architect databases for scalability, performance, and cloud readiness."
  },
  {
    value: "item-10",
    question: "How do we get started?",
    answer:
      "Begin with a database assessment to define scope, risks, and the optimal migration roadmap."
  },
];

export const Faq_softwareeng_thirdPartyIntegration: FaqItem[] = [
  {
    value: "item-1",
    question: "What is third-party integration?",
    answer:
      "It’s the process of connecting external systems, APIs or platforms with your application to enable data sharing and functionality."
  },
  {
    value: "item-2",
    question: "Which systems can you integrate with?",
    answer:
      "We integrate CRMs, ERPs, payment gateways, analytics tools, cloud platforms and custom APIs."
  },
  {
    value: "item-3",
    question: "Are integrations secure?",
    answer:
      "Yes. We follow industry best practices including encryption, authentication and access control."
  },
  {
    value: "item-4",
    question: "Can you integrate legacy systems?",
    answer:
      "Absolutely. We support both modern and legacy systems through APIs and middleware."
  },
  {
    value: "item-5",
    question: "How long does an integration project take?",
    answer:
      "Timelines vary by complexity but most integrations are completed within weeks."
  },
  {
    value: "item-6",
    question: "Do you support real-time integrations?",
    answer:
      "Yes. We build real-time and event-driven integrations using webhooks and messaging systems."
  },
  {
    value: "item-7",
    question: "What happens if an integration fails?",
    answer:
      "We implement error handling, retries, logging and alerts to ensure reliability."
  },
  {
    value: "item-8",
    question: "Can integrations scale with business growth?",
    answer:
      "Yes. Our integrations are designed to handle increased volume and complexity."
  },
  {
    value: "item-9",
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We offer monitoring, maintenance and optimization services post-deployment."
  },
  {
    value: "item-10",
    question: "How do we get started?",
    answer:
      "Start with an integration assessment to define scope, risks and the best architecture."
  },
];
export const Faq_cloudeng_cloudConsulting: FaqItem[] = [
  {
    value: "item-1",
    question: "What is cloud consulting?",
    answer:
      "Cloud consulting helps organizations plan, design and optimize cloud adoption aligned with business goals, security, and cost efficiency."
  },
  {
    value: "item-2",
    question: "Do you work with AWS, Azure, and Google Cloud?",
    answer:
      "Yes. We provide vendor-neutral consulting across AWS, Microsoft Azure and Google Cloud Platform."
  },
  {
    value: "item-3",
    question: "Is cloud consulting only for large enterprises?",
    answer:
      "No. Startups, mid-sized businesses and enterprises all benefit from a clear cloud strategy."
  },
  {
    value: "item-4",
    question: "Can you help us reduce our cloud costs?",
    answer:
      "Yes. Cost optimization and FinOps are core parts of our consulting approach."
  },
  {
    value: "item-5",
    question: "Do you handle implementation as well?",
    answer:
      "Yes. We can guide strategy only or support full implementation with our cloud engineering teams."
  },
  {
    value: "item-6",
    question: "How long does a cloud consulting engagement take?",
    answer:
      "Typically 2–6 weeks for assessments and strategy, depending on complexity."
  },
  {
    value: "item-7",
    question: "Will cloud consulting help with security and compliance?",
    answer:
      "Yes. We design cloud environments with security, governance and compliance built in."
  },
  {
    value: "item-8",
    question: "Can you help with multi-cloud or hybrid setups?",
    answer:
      "Yes. We specialize in designing and managing complex hybrid and multi-cloud strategies."
  },
  {
    value: "item-9",
    question: "How do you measure cloud success?",
    answer:
      "Through KPIs such as cost efficiency, performance, scalability, security posture and business outcomes."
  },
  {
    value: "item-10",
    question: "How do we get started?",
    answer:
      "Start with a cloud readiness assessment to define your current state and future roadmap."
  },
];

export const Faq_cloudeng_cloudMigration: FaqItem[] = [
  {
    value: "item-1",
    question: "What is cloud migration?",
    answer:
      "Cloud migration is the process of moving applications, data and infrastructure from on-premises or legacy environments to the cloud."
  },
  {
    value: "item-2",
    question: "Which cloud platforms do you support?",
    answer:
      "We support AWS, Microsoft Azure and Google Cloud Platform."
  },
  {
    value: "item-3",
    question: "Will there be downtime during migration?",
    answer:
      "We plan migrations carefully to minimize or eliminate downtime wherever possible."
  },
  {
    value: "item-4",
    question: "How long does a cloud migration take?",
    answer:
      "Timelines vary by complexity but typically range from a few weeks to a few months."
  },
  {
    value: "item-5",
    question: "Is cloud migration secure?",
    answer:
      "Yes. We implement encryption, access controls and compliance best practices throughout the process."
  },
  {
    value: "item-6",
    question: "Can you migrate legacy applications?",
    answer:
      "Yes. We specialize in migrating and modernizing legacy systems."
  },
  {
    value: "item-7",
    question: "Do you help reduce cloud costs after migration?",
    answer:
      "Yes. Post-migration optimization is a core part of our service."
  },
  {
    value: "item-8",
    question: "What migration approach do you recommend?",
    answer:
      "It depends on your goals. We assess whether rehosting, refactoring or rebuilding is best."
  },
  {
    value: "item-9",
    question: "Can you support hybrid cloud migrations?",
    answer:
      "Yes. We design phased hybrid strategies to ensure continuity and flexibility."
  },
  {
    value: "item-10",
    question: "How do we get started?",
    answer:
      "Begin with a cloud readiness assessment to define your migration roadmap."
  },
];

export const Faq_cloudeng_managedCloudServices: FaqItem[] = [
  {
    value: "item-1",
    question: "What are Managed Cloud Services?",
    answer:
      "Managed Cloud Services involve outsourcing cloud operations, monitoring, security and optimization to experts."
  },
  {
    value: "item-2",
    question: "Which cloud platforms do you manage?",
    answer:
      "We manage AWS, Microsoft Azure and Google Cloud environments."
  },
  {
    value: "item-3",
    question: "Do you provide 24/7 support?",
    answer:
      "Yes. We offer round-the-clock monitoring and incident response."
  },
  {
    value: "item-4",
    question: "Will we still have control over our cloud environment?",
    answer:
      "Absolutely. You retain full ownership and visibility while we handle operations."
  },
  {
    value: "item-5",
    question: "How do you help reduce cloud costs?",
    answer:
      "Through continuous monitoring, rightsizing and FinOps best practices."
  },
  {
    value: "item-6",
    question: "Is security included in managed services?",
    answer:
      "Yes. Security, compliance and threat monitoring are core components."
  },
  {
    value: "item-7",
    question: "Can you support hybrid or multi-cloud setups?",
    answer:
      "Yes. We manage hybrid and multi-cloud environments seamlessly."
  },
  {
    value: "item-8",
    question: "What SLAs do you offer?",
    answer:
      "We provide SLA-backed uptime, response and resolution commitments."
  },
  {
    value: "item-9",
    question: "Can services scale as our business grows?",
    answer:
      "Yes. Our managed services scale with your workloads and business needs."
  },
  {
    value: "item-10",
    question: "How do we get started?",
    answer:
      "Start with a cloud assessment to define the right managed service model for your environment."
  },
];

export const Faq_cloudeng_devOpsConsulting: FaqItem[] = [
  {
    value: "item-1",
    question: "What is DevOps consulting?",
    answer:
      "DevOps consulting helps organizations automate software delivery and align development and operations for faster, reliable releases."
  },
  {
    value: "item-2",
    question: "Which tools do you work with?",
    answer:
      "We work with Jenkins, GitHub Actions, GitLab, Azure DevOps, Terraform, Docker, Kubernetes and more."
  },
  {
    value: "item-3",
    question: "Do you support cloud-native DevOps?",
    answer:
      "Yes. We specialize in DevOps for AWS, Azure and GCP environments."
  },
  {
    value: "item-4",
    question: "Can you integrate security into DevOps?",
    answer:
      "Yes. We implement DevSecOps with automated security checks and compliance controls."
  },
  {
    value: "item-5",
    question: "How long does DevOps implementation take?",
    answer:
      "Initial pipelines can be live in weeks; maturity builds continuously over time."
  },
  {
    value: "item-6",
    question: "Will DevOps reduce deployment failures?",
    answer:
      "Yes. Automation and testing significantly reduce human error and failures."
  },
  {
    value: "item-7",
    question: "Do you train our internal teams?",
    answer:
      "Yes. We provide hands-on coaching and knowledge transfer."
  },
  {
    value: "item-8",
    question: "Can DevOps work with legacy systems?",
    answer:
      "Yes. We modernize workflows incrementally without disrupting operations."
  },
  {
    value: "item-9",
    question: "Is DevOps suitable for small teams?",
    answer:
      "Yes. DevOps improves efficiency regardless of team size."
  },
  {
    value: "item-10",
    question: "How do we start?",
    answer:
      "Begin with a DevOps readiness assessment to define the right roadmap."
  },
];

export const Faq_cloudeng_devsecops: FaqItem[] = [
  {
    value: "item-1",
    question: "What is DevSecOps?",
    answer:
      "DevSecOps integrates security into DevOps workflows, making security continuous, automated and proactive."
  },
  {
    value: "item-2",
    question: "How is DevSecOps different from DevOps?",
    answer:
      "DevOps focuses on speed and reliability; DevSecOps adds built-in security and compliance at every stage."
  },
  {
    value: "item-3",
    question: "Can DevSecOps slow down development?",
    answer:
      "No. Automation reduces manual checks and actually accelerates secure releases."
  },
  {
    value: "item-4",
    question: "Which compliance standards do you support?",
    answer:
      "We support ISO 27001, SOC 2, PCI DSS, GDPR, HIPAA and more."
  },
  {
    value: "item-5",
    question: "Do you support cloud-native security?",
    answer:
      "Yes. We specialize in securing AWS, Azure and GCP environments."
  },
  {
    value: "item-6",
    question: "Can DevSecOps work with existing pipelines?",
    answer:
      "Absolutely. We integrate security into your current CI/CD workflows."
  },
  {
    value: "item-7",
    question: "What security tools do you use?",
    answer:
      "We work with industry-leading SAST, DAST, IAM, CSPM and SIEM tools."
  },
  {
    value: "item-8",
    question: "How do you handle secrets management?",
    answer:
      "We implement secure vaults, encryption and access controls."
  },
  {
    value: "item-9",
    question: "Is DevSecOps suitable for regulated industries?",
    answer:
      "Yes. It’s ideal for finance, healthcare and enterprises with strict compliance needs."
  },
  {
    value: "item-10",
    question: "How do we get started?",
    answer:
      "Start with a DevSecOps maturity assessment to identify gaps and define a secure roadmap."
  },
];

//Custom Agent 
export const Faq_AI_CustomAgent: FaqItem[] = [
  {
    value: "item-1",
    question: "What is an AI Agent?",
    answer: "An AI Agent is a smart system that operates independently to complete complex tasks. It analyzes situations, makes decisions and executes actions across business functions like customer service, operations and data management without constant human oversight."
  },
  {
    value: "item-2",
    question: "How do AI Agents function?",
    answer: "These systems combine advanced language models with reasoning engines and specialized tools. They process information from their environment, evaluate options against set objectives and autonomously execute workflows, whether handling support tickets or optimizing supply chains."
  },
  {
    value: "item-3",
    question: "What capabilities do AI Agents possess?",
    answer: "Core capabilities include strategic planning for goal achievement, contextual understanding through data analysis, autonomous task execution, collaborative operation with human teams and continuous learning from interactions to improve performance over time."
  },
  {
    value: "item-4",
    question: "How do AI Agents differ from basic automation tools?",
    answer: "Unlike simple bots following rigid rules, AI Agents handle complex, multi-step processes requiring judgment. They adapt to new scenarios and make context-aware decisions, while traditional automation only repeats predefined actions without intelligence."
  },
  {
    value: "item-5",
    question: "What business processes can AI Agents handle?",
    answer: "They automate diverse operations including customer inquiry resolution, financial report generation, employee onboarding workflows, inventory management, content creation and data analysis, essentially any rule-based but complex workflow."
  },
  {
    value: "item-6",
    question: "Can multiple AI Agents coordinate together?",
    answer: "Yes. Multi-agent systems enable specialized AI Agents to collaborate on intricate processes. For instance, separate Agents can simultaneously manage order fulfillment, logistics coordination and customer communication while sharing relevant data."
  },
  {
    value: "item-7",
    question: "How secure is AI Agent implementation?",
    answer: "We implement rigorous security protocols including data encryption, access controls and approval workflows. Human oversight options ensure sensitive operations receive mandatory review, maintaining compliance and risk management throughout all automated processes."
  },
];


export const Faq_AI_GenerativeAI: FaqItem[] = [
  {
    value: "item-1",
    question: "What is Generative AI?",
    answer: "Generative AI is a branch of artificial intelligence that leverages advanced machine learning models such as GANs, VAEs and Transformers, to produce original content, including text, images, audio and other digital media."
  },
  {
    value: "item-2",
    question: "How does Generative AI create content?",
    answer: "It analyzes vast amounts of data to understand patterns and relationships, then generates new material that matches the style, structure and context of your original input and requirements."
  },
  {
    value: "item-3",
    question: "What business applications does Generative AI serve?",
    answer: "It powers marketing content creation, product design ideation, customer service automation, technical documentation and code generation, essentially any content-heavy business process."
  },
  {
    value: "item-4",
    question: "Does Generative AI possess true creativity?",
    answer: "No, it's an advanced pattern recognition engine that remixes learned information. It enhances human creativity by providing starting points and variations, but doesn't replace original thought."
  },
  {
    value: "item-5",
    question: "How does Generative AI differ from traditional AI?",
    answer: "While traditional AI analyzes and classifies existing data, Generative AI produces new content, writing documents, creating designs or developing code that didn't previously exist."
  },
  {
    value: "item-6",
    question: "Can Generative AI replace human creative teams?",
    answer: "It serves as a powerful collaborator that accelerates production, but strategic direction, emotional intelligence and final quality control still require human expertise and judgment."
  },
  {
    value: "item-7",
    question: "Who owns the content created by Generative AI?",
    answer: "You maintain full rights to all generated content created for your projects. We implement measures to ensure originality and protect against intellectual property infringement."
  },
  {
    value: "item-8",
    question: "What ethical safeguards do you implement?",
    answer: "We establish clear usage guidelines, bias detection protocols and human review processes to ensure responsible and ethical deployment that aligns with your brand values."
  },
  {
    value: "item-9",
    question: "How can businesses practically use Generative AI?",
    answer: "Applications include automated report generation, personalized marketing campaigns, product prototype designs, customer communication templates and internal documentation creation."
  },
  {
    value: "item-10",
    question: "What future capabilities are emerging?",
    answer: "We're moving toward industry-specific models that offer deeper domain expertise, multi-format content generation and more seamless integration into existing business workflows and platforms."
  },
];


export const Faq_AI_DataScience_MLOps: FaqItem[] = [
  {
    value: "item-1",
    question: "What’s the difference between Data Science and MLOps?",
    answer: "Data Science builds insights and models. MLOps deploys, manages, monitors and scales those models in production."
  },
  {
    value: "item-2",
    question: "Do we need both Data Science and MLOps?",
    answer: "Yes. Data Science creates value, MLOps ensures that value is delivered reliably and continuously."
  },
  {
    value: "item-3",
    question: "How long does an AI project typically take?",
    answer: "Initial insights: 4–8 weeks. Full deployment: 3–6 months depending on complexity."
  },
  {
    value: "item-4",
    question: "Can you integrate with our existing systems?",
    answer: "Yes, including cloud, on-prem, hybrid, ERP, CRM and legacy systems."
  },
  {
    value: "item-5",
    question: "How do you handle data privacy?",
    answer: "We follow strict governance protocols and comply with GDPR, HIPAA, PCI and other global standards."
  },
  {
    value: "item-6",
    question: "What do you monitor in production models?",
    answer: "Accuracy, drift, latency, resource usage, prediction errors, business KPIs and system health."
  },
  {
    value: "item-7",
    question: "Can you manage our entire ML lifecycle?",
    answer: "Yes. From data ingestion to long-term monitoring and retraining."
  },
  {
    value: "item-8",
    question: "What industries do you support?",
    answer: "Finance, healthcare, retail, logistics, manufacturing, SaaS, education and more."
  },
  {
    value: "item-9",
    question: "What tools and platforms do you use?",
    answer: "Azure, AWS, GCP, Kubernetes, Docker, MLflow, Spark, TensorFlow, PyTorch and other enterprise tooling."
  },
  {
    value: "item-10",
    question: "How do we get started?",
    answer: "Begin with a Data & AI Readiness Assessment to uncover high-impact opportunities."
  },
];


export const Faq_AI_ConversationalAI: FaqItem[] = [
  {
    value: "item-1",
    question: "What is Conversational AI?",
    answer: "It's technology that enables natural, human-like dialogue between computers and users. We build AI-powered chatbots and virtual assistants that understand intent and provide instant, intelligent responses."
  },
  {
    value: "item-2",
    question: "How can it benefit my business?",
    answer: "Our solutions deliver 24/7 customer service, significantly reduce support costs, accelerate response times and generate qualified leads, boosting both efficiency and customer satisfaction."
  },
  {
    value: "item-3",
    question: "Can it understand multiple languages?",
    answer: "Yes. Our platform is built with multi-language support from the start, allowing you to engage a global audience seamlessly."
  },
  {
    value: "item-4",
    question: "Is it difficult to integrate?",
    answer: "No. We specialize in seamless integration with your existing tools, including CRM, helpdesk and payment systems, for a hassle-free setup."
  },
  {
    value: "item-5",
    question: "How does it handle complex queries?",
    answer: "For sophisticated issues, our AI is designed to smoothly escalate the conversation to a human agent, ensuring no customer request goes unresolved."
  },
  {
    value: "item-6",
    question: "Can I customize it to match my brand?",
    answer: "Yes. We tailor the AI's personality, tone and knowledge to perfectly reflect your unique brand voice and guidelines."
  },
  {
    value: "item-7",
    question: "How secure is customer data?",
    answer: "Security is paramount. We adhere to strict data privacy protocols (like GDPR/CCPA) and ensure all customer interactions are handled with enterprise-grade security."
  },
  {
    value: "item-8",
    question: "What is the typical deployment time?",
    answer: "Most of our conversational AI solutions are up and running within a few weeks, depending on the complexity and integration scope."
  },
  {
    value: "item-9",
    question: "How do you keep the AI effective long-term?",
    answer: "We provide continuous performance monitoring and optimization based on real user interactions, ensuring the AI adapts and improves over time."
  },
  {
    value: "item-10",
    question: "Can it really drive sales?",
    answer: "Yes. By engaging users proactively, providing personalized product recommendations and guiding them through transactions, it directly increases conversions and revenue."
  },
];

export const Faq_AI_ComputerVision: FaqItem[] = [
  {
    value: "item-1",
    question: "What is Computer Vision?",
    answer: "Computer Vision is an AI technology that enables machines to interpret, analyze and make decisions based on visual data such as images and videos, just as the human visual system does, but at scale and speed."
  },
  {
    value: "item-2",
    question: "How can Computer Vision transform my business operations?",
    answer: "It automates visual inspection tasks, enhances security through real-time monitoring, enables advanced analytics from visual data and creates innovative user experiences, driving efficiency, safety and new revenue streams."
  },
  {
    value: "item-3",
    question: "What types of visual data can your Computer Vision solutions process?",
    answer: "Our solutions process images, live video feeds, thermal imaging, satellite imagery and medical scans, extracting meaningful insights for quality control, surveillance, diagnostics and more."
  },
  {
    value: "item-4",
    question: "How accurate are your Computer Vision models in real-world conditions?",
    answer: "We build robust models with accuracy often exceeding 95-98% in production, using techniques like synthetic data generation and continuous learning to perform reliably in varied lighting, angles and environmental conditions."
  },
  {
    value: "item-5",
    question: "Can Computer Vision integrate with our existing cameras and IoT infrastructure?",
    answer: "Yes. We design solutions that work with your current camera systems, drones and IoT sensors, providing easy integration through APIs and edge computing devices without requiring a full infrastructure overhaul."
  },
  {
    value: "item-6",
    question: "What about data privacy and security when processing visual data?",
    answer: "We implement privacy-by-design principles, including on-premise processing options, data anonymization, edge AI (processing on-device) and compliance with regulations to ensure sensitive visual data is fully protected."
  },
  {
    value: "item-7",
    question: "What is the typical development and deployment timeline?",
    answer: "A pilot or proof-of-concept can be delivered in 4-6 weeks. A full-scale, customized Computer Vision system typically takes 8-16 weeks, depending on complexity and integration needs."
  },
  {
    value: "item-8",
    question: "Do you offer ongoing model training and maintenance?",
    answer: "Yes, we provide continuous model improvement services. Our systems can be retrained on new data to adapt to changes, such as new product designs or evolving security threats, ensuring long-term accuracy and relevance."
  },
];

export const Faq_AI_OCR: FaqItem[] = [
  {
    value: "item-1",
    question: "What is Optical Character Recognition (OCR)?",
    answer: "OCR is an AI-powered technology that automatically extracts text and data from scanned documents, images and PDFs, converting it into editable, searchable and machine-readable digital content."
  },
  {
    value: "item-2",
    question: "How can OCR benefit my business processes?",
    answer: "OCR automates manual data entry from invoices, forms and reports, significantly reducing errors, speeding up processing times and freeing your team for higher-value strategic work."
  },
  {
    value: "item-3",
    question: "What types of documents can your OCR solution process?",
    answer: "Our advanced OCR handles structured forms (tax returns, applications), semi-structured documents (invoices, receipts) and unstructured text (contracts, letters), including handwritten notes with high accuracy."
  },
  {
    value: "item-4",
    question: "How accurate is your OCR technology, especially with poor-quality scans?",
    answer: "We utilize AI-enhanced OCR that achieves over 99% accuracy on clean documents and maintains high reliability on low-quality scans through pre-processing and contextual validation techniques."
  },
  {
    value: "item-5",
    question: "Can your OCR solution integrate with our existing systems?",
    answer: "Yes, we deliver OCR as an API or embed it directly into your existing workflow systems (like ERP, CRM or DMS), ensuring seamless data flow without disrupting your current operations."
  },
  {
    value: "item-6",
    question: "How do you handle sensitive or confidential documents?",
    answer: "We implement enterprise-grade security including encrypted data processing, secure cloud or on-premise deployment options and full compliance with data privacy regulations like GDPR and HIPAA."
  },
  {
    value: "item-7",
    question: "What is the typical implementation timeline for an OCR solution?",
    answer: "Most OCR integrations are operational within 2-4 weeks, including configuration, testing and training, allowing you to automate document processing rapidly."
  },
  {
    value: "item-8",
    question: "Do you provide post-deployment support and accuracy optimization?",
    answer: "Yes, we offer ongoing support, performance monitoring and model retraining services to continuously improve accuracy as you process new document types and formats."
  },
];

export const Faq_CyberSecurity_SecurityDeployment: FaqItem[] = [
  {
    value: "item-1",
    question: "What does your solution deployment service include?",
    answer:
      "We provide end-to-end deployment of security tools, from initial architecture and installation to configuration, integration and testing, ensuring each solution is optimized for your specific environment and threat landscape."
  },
  {
    value: "item-2",
    question: "How do you choose which security solutions to deploy?",
    answer:
      "We base recommendations on your compliance requirements, existing infrastructure, threat assessment results and business objectives, never pushing one-size-fits-all tools but architecting a layered defense that fits your needs."
  },
  {
    value: "item-3",
    question: "Do you handle both on-premise and cloud security deployments?",
    answer:
      "Yes. We specialize in hybrid environments, deploying and integrating solutions across on-premise data centers, private clouds and public cloud platforms (AWS, Azure, GCP) with consistent security policies."
  },
  {
    value: "item-4",
    question: "What is included in your ongoing management service?",
    answer:
      "Our management includes 24/7 monitoring, alert triage, regular patching and updates, performance tuning, policy review, threat intelligence integration and detailed reporting, all aligned with clear SLAs."
  },
  {
    value: "item-5",
    question: "How do you ensure new tools integrate with our existing systems?",
    answer:
      "Integration is a core phase of our process. We ensure seamless connectivity with your Active Directory, network infrastructure, existing security stack and business applications to create a unified security ecosystem."
  },
  {
    value: "item-6",
    question: "What’s the typical timeline for deploying a complete security stack?",
    answer:
      "While timelines vary by scope, a comprehensive deployment, including assessment, architecture, implementation and testing, typically takes 4-10 weeks, with critical controls prioritized for early deployment."
  },
  {
    value: "item-7",
    question: "How do you measure the effectiveness of deployed solutions?",
    answer:
      "We track key operational metrics like threat detection rate, mean time to respond (MTTR), system uptime, false positive rates and compliance status, providing you with clear visibility into ROI and performance."
  },
  {
    value: "item-8",
    question: "Do you provide training for our team during handover?",
    answer:
      "Yes. We include comprehensive documentation and hands-on training sessions for your IT and security staff, ensuring they are confident in daily operation, basic troubleshooting and understanding of security alerts."
  }
];


export const Faq_CyberSecurity_GovernanceCompliance: FaqItem[] = [
  {
    value: "item-1",
    question: "What is the difference between governance and compliance?",
    answer:
      "Governance is the framework of policies, roles and processes that guide how your organization manages security and risk. Compliance is the act of meeting specific external regulatory requirements (like GDPR or ISO 27001). Strong governance enables sustainable compliance."
  },
  {
    value: "item-2",
    question: "Which compliance frameworks do you specialize in?",
    answer:
      "We have deep expertise in major global standards, including ISO 27001, SOC 2, NIST CSF, GDPR, HIPAA and PCI DSS. We tailor our approach to your specific industry and regulatory landscape."
  },
  {
    value: "item-3",
    question: "How long does it typically take to achieve a certification like ISO 27001?",
    answer:
      "The timeline varies based on your organization's starting maturity but a typical journey from assessment to certification readiness takes 6-12 months. We focus on building a sustainable system, not just passing an audit."
  },
  {
    value: "item-4",
    question: "Do you help with both creating policies and implementing technical controls?",
    answer:
      "Yes. Our service is end-to-end. We develop the governance documentation (policies, procedures) and work alongside your team or our technical experts to implement the necessary security controls and monitoring tools."
  },
  {
    value: "item-5",
    question: "How do you ensure compliance remains ongoing and not just a one-time project?",
    answer:
      "We build continuous compliance into your operations through automated monitoring, scheduled internal audits, ongoing policy reviews and by establishing clear ownership and accountability within your teams."
  },
  {
    value: "item-6",
    question: "Can you help us manage third-party and vendor risk?",
    answer:
      "Yes. A key part of modern governance is extending control to your supply chain. We help you establish vendor risk assessment processes, contractual security requirements and ongoing monitoring protocols."
  },
  {
    value: "item-7",
    question: "What is your approach to audit readiness and support?",
    answer:
      "We prepare you throughout the process by conducting mock audits, helping assemble evidence and coaching your team. We can also act as a liaison with external auditors to ensure a smooth and successful certification audit."
  },
  {
    value: "item-8",
    question: "Do you provide training for our staff on new policies and procedures?",
    answer:
      "Yes. We develop and deliver role-specific training programs to ensure everyone understands their responsibilities within the new governance framework, which is critical for both adoption and audit success."
  }
];

export const Faq_CyberSecurity_CyberAssessment: FaqItem[] = [
  {
    value: "item-1",
    question: "What is the main goal of a cyber assessment?",
    answer:
      "The primary goal is to identify vulnerabilities and evaluate your overall security maturity before attackers do. We provide a clear, prioritized roadmap to strengthen your defenses and ensure your security program aligns with business risks and compliance requirements."
  },
  {
    value: "item-2",
    question: "What’s the difference between a vulnerability assessment and a penetration test?",
    answer:
      "A vulnerability assessment scans for known weaknesses across your systems. A penetration test (ethical hacking) actively exploits those weaknesses to simulate a real attack, demonstrating potential business impact and validating security controls."
  },
  {
    value: "item-3",
    question: "How often should we conduct these assessments?",
    answer:
      "We recommend at least annual comprehensive assessments. For high-risk environments or after major system changes, more frequent testing, such as quarterly vulnerability scans or bi-annual penetration tests is advisable."
  },
  {
    value: "item-4",
    question: "Which compliance frameworks do your assessments cover?",
    answer:
      "Our methodology is mapped to all major frameworks, including NIST CSF, ISO 27001, PCI DSS, SOC 2, HIPAA and GDPR. We can tailor the assessment to meet specific audit requirements you’re preparing for."
  },
  {
    value: "item-5",
    question: "What does your “SOC Maturity Assessment” involve?",
    answer:
      "We evaluate your Security Operations Center’s people, processes and technology. This includes reviewing monitoring coverage, alert quality, incident response playbooks, analyst skills and tool effectiveness to provide a maturity score and improvement plan."
  },
  {
    value: "item-6",
    question: "How do you ensure assessments don’t disrupt our operations?",
    answer:
      "We follow strict rules of engagement agreed upon upfront, schedule tests during maintenance windows if needed and use controlled, non-destructive techniques. Our goal is to provide insight without causing downtime."
  },
  {
    value: "item-7",
    question: "What will the final report include?",
    answer:
      "You’ll receive a clear, actionable report with an executive summary of risk posture, detailed technical findings prioritized by severity and business impact, evidence of vulnerabilities and a step-by-step remediation plan."
  },
  {
    value: "item-8",
    question: "Do you help fix the vulnerabilities you find?",
    answer:
      "While our core service is assessment and advisory, we offer remediation support services. We can provide detailed guidance to your IT team or work with our deployment specialists to implement the necessary patches, configurations or controls."
  }
];


export const Faq_CyberSecurityManagedCybersecurity: FaqItem[] = [
  {
    value: "item-1",
    question: "What exactly do your Managed Cybersecurity Services include?",
    answer:
      "Our service provides 24/7 Security Operations Center (SOC) monitoring, threat detection and response, vulnerability management, security tool management and compliance reporting. We act as an extension of your team, handling the day-to-day security operations so you can focus on your business."
  },
  {
    value: "item-2",
    question: "How does your 24/7 monitoring work?",
    answer:
      "Our SOC analysts use a combination of advanced SIEM/XDR platforms and global threat intelligence to monitor your networks, endpoints and cloud environments in real-time. We detect anomalies, investigate alerts and respond to incidents around the clock, 365 days a year."
  },
  {
    value: "item-3",
    question: "What is the difference between your service and just buying security software?",
    answer:
      "Software alone requires constant tuning, monitoring and expertise. We provide the expert analysts, processes and intelligence to operate that software effectively. We turn tools into a complete security outcome, managing everything from configuration to incident response."
  },
  {
    value: "item-4",
    question: "How quickly do you respond to a security incident?",
    answer:
      "Our SLA guarantees initial investigation and response initiation within 30 minutes of a validated high-severity alert. Our goal is containment within the first critical hour to minimize business impact."
  },
  {
    value: "item-5",
    question: "Can you manage our existing security tools or do we need to switch to yours?",
    answer:
      "We are tool-agnostic. We can onboard and manage your current stack (like CrowdStrike, SentinelOne, Microsoft Defender etc.) or recommend and deploy best-of-breed solutions as part of our service package."
  },
  {
    value: "item-6",
    question: "How do you keep us compliant with regulations like SOC 2 or ISO 27001?",
    answer:
      "Our service includes continuous monitoring and logging of required security controls. We provide the audit-ready reports, evidence collection and change management documentation you need to demonstrate compliance during audits."
  },
  {
    value: "item-7",
    question: "What kind of reporting will we receive?",
    answer:
      "You’ll get regular executive summaries with high-level risk posture, detailed technical reports on incidents and vulnerabilities and compliance-specific dashboards, all designed to provide clear visibility for both leadership and IT teams."
  },
  {
    value: "item-8",
    question: "How do we get started, and what’s the onboarding process like?",
    answer:
      "We begin with a Security Posture Assessment to understand your environment. Then, we establish secure data feeds, configure monitoring, define escalation protocols and integrate with your team, typically transitioning to full management within 2-4 weeks."
  }
];

export const Faq_CyberSecurity_RiskManagement: FaqItem[] = [
  {
    value: "item-1",
    question: "What is cybersecurity risk management?",
    answer:
      "It is the process of identifying, assessing, prioritizing and mitigating cyber risks that could impact business operations, data or reputation."
  },
  {
    value: "item-2",
    question: "How is governance different from compliance?",
    answer:
      "Governance defines how security decisions are made and owned, while compliance ensures adherence to regulations and standards."
  },
  {
    value: "item-3",
    question: "Which frameworks do you work with?",
    answer:
      "We support ISO 27001, NIST CSF, NIST 800-53, PCI DSS, HIPAA, GDPR, SOC and custom governance models."
  },
  {
    value: "item-4",
    question: "Do we need governance if we already have security tools?",
    answer:
      "Yes. Tools alone don’t define ownership, accountability or decision-making, governance ensures tools are used effectively."
  },
  {
    value: "item-5",
    question: "How long does it take to establish a governance framework?",
    answer:
      "Initial governance and risk frameworks typically take 4–8 weeks, depending on organization size and complexity."
  },
  {
    value: "item-6",
    question: "Can you help us prepare for audits?",
    answer:
      "Yes. We provide audit readiness, evidence preparation, control mapping and remediation support."
  },
  {
    value: "item-7",
    question: "How do you measure cyber risk?",
    answer:
      "We assess likelihood, impact, asset criticality and threat exposure using qualitative and quantitative methods."
  },
  {
    value: "item-8",
    question: "Is risk management only for large enterprises?",
    answer:
      "No. Scalable governance and risk frameworks benefit organizations of all sizes, especially growing businesses."
  },
  {
    value: "item-9",
    question: "How often should cyber risks be reviewed?",
    answer:
      "Continuously. We recommend ongoing monitoring with formal reviews quarterly or after major changes."
  },
  {
    value: "item-10",
    question: "How does governance support business growth?",
    answer:
      "Strong governance reduces uncertainty, enables faster decisions and builds trust with customers, partners and regulators."
  }
];

export const Faq_Advisory_ProductStrategy: FaqItem[] = [
  {
    value: "item-1",
    question: "What is product strategy?",
    answer:
      "It's your product's master plan. We define how your product will achieve key business objectives, align with market needs and deliver lasting competitive advantage."
  },
  {
    value: "item-2",
    question: "Why is it crucial?",
    answer:
      "Without a clear strategy, products often fail to find market fit. A strong strategy aligns your team, optimizes resources and directly fuels sustainable growth."
  },
  {
    value: "item-3",
    question: "How does it differ from product management?",
    answer:
      "Strategy sets the long-term vision, goals and \"why.\" Product management focuses on the tactical execution and \"how\" of building and shipping the product."
  },
  {
    value: "item-4",
    question: "What are the key components?",
    answer:
      "We focus on a core foundation: market and user research, competitive analysis, clear value propositions, measurable business goals and a pragmatic roadmap."
  },
  {
    value: "item-5",
    question: "Is it important for both startups and enterprises?",
    answer:
      "Yes. For startups, it's about finding product-market fit. For enterprises, it's about sustaining innovation and defending market position."
  },
  {
    value: "item-6",
    question: "How do you ensure the strategy stays relevant?",
    answer:
      "We build adaptability from the start. Our process includes continuous market analysis and user feedback loops to ensure your strategy evolves with the market."
  },
  {
    value: "item-7",
    question: "How do you collaborate with our team?",
    answer:
      "We integrate as a partner, facilitating workshops and maintaining transparent communication to ensure alignment and a unified vision across all stakeholders."
  },
  {
    value: "item-8",
    question: "What frameworks do you use?",
    answer:
      "We leverage proven frameworks like Lean Canvas and Jobs-to-be-Done, but tailor our approach specifically to your industry, company size and unique challenges."
  }
];


export const Faq_Advisory_DigitalTransformation: FaqItem[] = [
  {
    value: "item-1",
    question: "What is digital transformation?",
    answer:
      "Digital transformation integrates modern technology such as cloud computing, ERP systems, and AI-driven tools, into all business areas, fundamentally changing how you operate and deliver value to customers in the digital economy."
  },
  {
    value: "item-2",
    question: "Why is digital transformation essential for my business?",
    answer:
      "Digital transformation is essential for your business as it drives productivity through automated workflows, reduces costs with efficient cloud solutions, enhances customer engagement with personalized experiences, delivers real-time insights, and enables agile adaptation to changing market trends and needs."
  },
  {
    value: "item-3",
    question: "What services do you provide?",
    answer:
      "We offer strategic roadmap development, cloud migration, process automation, data analytics implementation, and change management to ensure successful adoption."
  },
  {
    value: "item-4",
    question: "How long does transformation typically take?",
    answer:
      "Transformation is an ongoing journey, but most organizations see significant initial results within 6-12 months of starting their strategic implementation."
  },
  {
    value: "item-5",
    question: "Can you create industry-specific solutions?",
    answer:
      "Absolutely. We develop tailored strategies for healthcare, manufacturing, retail, and financial services that address your sector's unique challenges and opportunities."
  },
  {
    value: "item-6",
    question: "How important is data in transformation?",
    answer:
      "Data is the foundation. We help you collect, analyze, and leverage data to drive decisions, predict trends, and create personalized customer experiences."
  },
  {
    value: "item-7",
    question: "What security measures do you implement?",
    answer:
      "We embed security throughout the process with encryption, access controls, compliance frameworks, and continuous monitoring to protect your digital assets."
  },
  {
    value: "item-8",
    question: "What support do you provide after implementation?",
    answer:
      "We offer ongoing optimization, performance monitoring, and innovation consulting to ensure your digital capabilities continue evolving with your business needs."
  },
  {
    value: "item-9",
    question: "How do we begin our transformation journey?",
    answer:
      "Start with our strategic assessment to evaluate your current state and co-create a phased transformation roadmap aligned with your business objectives."
  }
];


export const Faq_DataServices_DataStrategy: FaqItem[] = [
  {
    value: "item-1",
    question: "What makes your data strategy consulting different?",
    answer:
      "We bridge the gap between business leadership and technical execution. Our consultants are fluent in both boardroom priorities and data engineering realities, ensuring the strategy we create is both strategically sound and technically feasible to implement."
  },
  {
    value: "item-2",
    question: "We already have some data tools and a team. Do we still need a strategy?",
    answer:
      "Yes. A strategy ensures your existing investments and team efforts are aligned and directed toward the highest-priority business outcomes. It’s about optimizing and focusing on what you have, not just buying new things."
  },
  {
    value: "item-3",
    question: "How long does it take to develop a data strategy?",
    answer:
      "A comprehensive, enterprise-wide data strategy engagement typically takes 6 to 10 weeks. This allows for thorough discovery, collaborative workshops and the development of a detailed, actionable roadmap."
  },
  {
    value: "item-4",
    question: "What is the deliverable at the end of the engagement?",
    answer:
      "You will receive a complete Data Strategy Playbook. This is an actionable document containing your current state assessment, future state vision, architectural blueprint, governance model, prioritized roadmap and a detailed business case for investment."
  },
  {
    value: "item-5",
    question: "Do you help implement the strategy, or is it just a plan?",
    answer:
      "While our core consulting service delivers the strategic blueprint, we offer follow-on implementation advisory services. We can guide your team, help select partners and provide oversight to ensure successful execution of the roadmap we design together."
  },
  {
    value: "item-6",
    question: "How do you ensure the strategy accounts for data security and privacy?",
    answer:
      "Governance, security and privacy are foundational pillars of our strategy framework. We bake in compliance requirements (like GDPR, HIPAA) from the start, designing controls for data classification, access and protection as a core part of the architecture and operating model."
  },
  {
    value: "item-7",
    question: "Is this service relevant for mid-sized companies, or just large enterprises?",
    answer:
      "Data strategy is critical for any organization where data is an asset. For mid-sized companies, we focus on pragmatic, scalable approaches that deliver quick wins while laying a foundation for growth, ensuring the strategy is proportionate to your size and ambition."
  }
];


export const Faq_DataServices_DataWarehouse: FaqItem[] = [
  {
    value: "item-1",
    question: "What makes your data warehouse implementation approach unique?",
    answer:
      "We focus on building a business-ready analytics platform, not just a database in the cloud. Our methodology ensures the warehouse is optimized for end-user consumption, with strong governance, performance and clear data models from the outset, accelerating time-to-value."
  },
  {
    value: "item-2",
    question: "Which cloud data warehouse platform do you recommend?",
    answer:
      "We are platform-agnostic. Our recommendation is based on your specific needs, Snowflake for ease-of-use and concurrency, BigQuery for serverless power, Redshift for deep AWS integration. We conduct a thorough analysis to determine the best technical and financial fit."
  },
  {
    value: "item-3",
    question: "How long does a typical data warehouse implementation take?",
    answer:
      "A greenfield implementation for a mid-sized company typically takes 8 to 14 weeks. A complex migration or large enterprise project can take 4 to 6 months. We work in agile phases to deliver incremental value quickly."
  },
  {
    value: "item-4",
    question: "What is the ballpark cost for a project like this?",
    answer:
      "Costs vary significantly by scope, data volume and platform choice. We provide transparent pricing with two main components: implementation services (project-based or time & materials) and the ongoing cloud platform consumption costs, which we help you model and optimize."
  },
  {
    value: "item-5",
    question: "How do you handle data security and compliance in the cloud?",
    answer:
      "Security is foundational. We implement enterprise-grade measures: encryption (at rest and in transit), private networking (VPCs), granular role-based access controls (RBAC), and audit logging. We design the warehouse to help meet compliance standards like SOC 2, HIPAA and GDPR."
  },
  {
    value: "item-6",
    question: "Will our existing BI tools (like Tableau) still work?",
    answer:
      "Yes. A core goal of the modern data warehouse is to be the high-performance engine for your existing BI tools. We ensure seamless, optimized connectivity so your analysts can work faster and more effectively with the new platform."
  },
  {
    value: "item-7",
    question: "Do you provide training and ongoing support?",
    answer:
      "Yes. We include comprehensive knowledge transfer and user/admin training as part of the project. We also offer managed services for ongoing performance tuning, monitoring and support to ensure your investment continues to deliver maximum ROI."
  }
];


export const Faq_DataServices_AnalyticsBI: FaqItem[] = [
  {
    value: "item-1",
    question: "What makes your analytics and BI services different?",
    answer:
      "We focus on business adoption and action, not just dashboard delivery. Our process starts with the business question, involves users throughout design and ensures the final solution is intuitive and drives actual decisions, leading to measurable ROI."
  },
  {
    value: "item-2",
    question: "Which BI platform do you recommend (Power BI, Tableau, etc.)?",
    answer:
      "We are certified partners with all major platforms. Our recommendation is unbiased and based on your ecosystem, user skill levels and specific needs. We often recommend Microsoft Power BI for deep integration with Office 365 and cost-effectiveness or Tableau for superior visual design flexibility."
  },
  {
    value: "item-3",
    question: "How long does it take to build a set of dashboards?",
    answer:
      "A pilot dashboard for a key business area can be delivered in 2-3 weeks. A department-wide rollout with 5-10 core dashboards typically takes 6-10 weeks. We work iteratively to deliver quick wins and expand based on feedback."
  },
  {
    value: "item-4",
    question: "Do you need a data warehouse to start with analytics?",
    answer:
      "It is highly recommended for scalability and performance, but it's not always a prerequisite. We can often start by connecting directly to your core operational databases to deliver initial value while concurrently planning a longer-term data warehouse strategy."
  },
  {
    value: "item-5",
    question: "How do you ensure data security and governance in self-service BI?",
    answer:
      "Governance is key. We implement a layered security model with role-based permissions at the data source, semantic layer and dashboard level. We establish clear ownership and usage policies to enable exploration without compromising data integrity or security."
  },
  {
    value: "item-6",
    question: "Can you train our team to use and maintain the dashboards?",
    answer:
      "Yes. We provide role-specific training for end-users, report consumers and power users/administrators. We also deliver full technical documentation to empower your team to build new content and manage the environment."
  },
  {
    value: "item-7",
    question: "Do you offer ongoing support and enhancement services?",
    answer:
      "Yes. We offer analytics managed services that include performance monitoring, dashboard optimization and incremental development of new reports and features as your business needs evolve."
  }
];

export const Faq_ITGovernance_RegulatoryCompliance: FaqItem[] = [
  {
    value: "item-1",
    question: "What is your regulatory compliance service?",
    answer:
      "We provide end-to-end compliance management, helping you navigate complex legal requirements, implement necessary controls and maintain ongoing adherence to relevant regulations."
  },
  {
    value: "item-2",
    question: "Why is proactive compliance management important?",
    answer:
      "It prevents costly fines and legal issues, builds customer trust and creates a framework for secure, ethical operations that support business growth."
  },
  {
    value: "item-3",
    question: "How do you stay updated on changing regulations?",
    answer:
      "Our team continuously monitors regulatory changes across jurisdictions and industries, ensuring your compliance strategies remain current and effective."
  },
  {
    value: "item-4",
    question: "What industries do you specialize in?",
    answer:
      "We have deep expertise in technology, healthcare, finance and e-commerce sectors, with specific knowledge of GDPR, HIPAA, SOC 2 and other key frameworks."
  },
  {
    value: "item-5",
    question: "How do you handle data privacy compliance?",
    answer:
      "We implement comprehensive data protection measures, privacy-by-design principles, and ensure proper documentation for regulations like GDPR, CCPA, and emerging privacy laws."
  },
  {
    value: "item-6",
    question: "What's your implementation process?",
    answer:
      "We follow a structured approach: assessment of current state, gap analysis, control implementation and ongoing monitoring with regular compliance audits."
  },
  {
    value: "item-7",
    question: "Can you help with certification processes?",
    answer:
      "Yes, we guide you through entire certification processes for standards like SOC 2, ISO 27001 and others, from preparation to audit completion."
  },
  {
    value: "item-8",
    question: "How do you ensure ongoing compliance?",
    answer:
      "We establish continuous monitoring systems, conduct regular assessments and provide updates on regulatory changes to maintain compliance over time."
  }
];


export const Faq_ITGovernance_GovernanceFrameworkDev: FaqItem[] = [
  {
    value: "item-1",
    question: "What is an IT governance framework and why do we need one?",
    answer:
      "An IT governance framework is a formal structure that aligns your technology strategy with business goals. It establishes clear decision-making authority, accountability and processes to ensure your technology investments are secure, compliant and deliver measurable value."
  },
  {
    value: "item-2",
    question: "How is this different from our existing IT policies?",
    answer:
      "Policies are individual rules. A governance framework is the overarching system that connects all your policies, standards and procedures into a cohesive strategy, ensuring they work together to support business objectives and manage risk effectively."
  },
  {
    value: "item-3",
    question: "What are the key components of a successful framework?",
    answer:
      "We focus on five core components: strategic alignment with business goals, a defined value delivery model, robust risk management, clear resource management and performance measurement with relevant metrics."
  },
  {
    value: "item-4",
    question: "Which industry standards do you incorporate?",
    answer:
      "We tailor frameworks based on proven standards like COBIT, ITIL and ISO/IEC 38500, adapting them to fit your specific industry, company size and strategic objectives rather than applying a one-size-fits-all model."
  },
  {
    value: "item-5",
    question: "How long does it typically take to develop and implement a framework?",
    answer:
      "The timeline varies by organizational complexity, but most initial frameworks are developed and ready for phased implementation within 4-8 weeks."
  },
  {
    value: "item-6",
    question: "How do you ensure the framework remains relevant as our business evolves?",
    answer:
      "We build adaptability into the framework's design, establishing regular review cycles and governance committees to ensure it evolves with your business strategy and the changing technology landscape."
  },
  {
    value: "item-7",
    question: "What is our team's involvement in the development process?",
    answer:
      "We act as facilitators and experts. Your key stakeholders are actively involved through workshops and reviews to ensure the framework reflects your business reality and gains company-wide buy-in."
  },
  {
    value: "item-8",
    question: "Can you help us demonstrate the ROI of good governance?",
    answer:
      "Yes. We help you establish key performance indicators (KPIs) that link governance activities to business outcomes like reduced operational costs, faster project delivery, improved compliance scores and lower audit findings."
  }
];

export const Faq_ITGovernance_ResourceAugmentation: FaqItem[] = [
  {
    value: "item-1",
    question: "What is resource augmentation?",
    answer:
      "Resource augmentation is a flexible hiring model where you extend your team with pre-vetted external experts who work as part of your in-house staff, without long hiring cycles or long-term commitments."
  },
  {
    value: "item-2",
    question: "How quickly can we onboard a resource?",
    answer:
      "In most cases, we can match and place a qualified expert within 48–72 hours, depending on the skill set and project requirements."
  },
  {
    value: "item-3",
    question: "Will the augmented resource work in our timezone?",
    answer:
      "Yes. We provide talent across multiple regions and ensure they align with your preferred work hours for smooth collaboration."
  },
  {
    value: "item-4",
    question: "Do the augmented team members follow our processes?",
    answer:
      "Yes. They integrate into your tools, sprints, meetings and workflows exactly like your internal team, no disruption, only support."
  },
  {
    value: "item-5",
    question: "Is this model cost-effective?",
    answer:
      "Yes. You save on recruitment, training, infrastructure, employee benefits and long-term commitments, while still getting senior-level expertise."
  },
  {
    value: "item-6",
    question: "How do you ensure the quality of talent?",
    answer:
      "Each candidate goes through a multi-stage vetting process including technical assessments, communication evaluation and problem-solving tests. Only the top 2% are shortlisted for your review."
  },
  {
    value: "item-7",
    question: "Can we scale the team up or down as needed?",
    answer:
      "Yes. You can increase or reduce resources anytime based on project phases, no penalties, no long-term lock-ins."
  },
  {
    value: "item-8",
    question: "How do you handle confidentiality and IP protection?",
    answer:
      "All resources sign strict NDAs and we enforce secure processes to ensure your data, code and intellectual property stay fully protected."
  },
  {
    value: "item-9",
    question: "What if the resource isn’t the right fit?",
    answer:
      "We replace them immediately at no extra cost. Our talent success team stays involved to ensure you always have the perfect match for your project."
  }
];

export const Faq_Expertise_RPA: FaqItem[] = [
  {
    value: "item-1",
    question: "What is Robotic Process Automation?",
    answer:
      "RPA is a technology that uses software robots to automate repetitive, rule-based digital tasks, allowing your team to focus on strategic work while improving accuracy and efficiency."
  },
  {
    value: "item-2",
    question: "How does RPA differ from traditional automation?",
    answer:
      "RPA mimics human actions at the interface level without complex coding, making it faster to deploy and easier to modify than traditional system-integrated automation."
  },
  {
    value: "item-3",
    question: "What processes are ideal for RPA automation?",
    answer:
      "Ideal processes include data entry, report generation, invoice processing, CRM updates and any high-volume repetitive computer-based tasks prone to human error."
  },
  {
    value: "item-4",
    question: "How long does typical RPA implementation take?",
    answer:
      "Most processes can be automated within 2-6 weeks, from initial assessment to full deployment and user training for your team."
  },
  {
    value: "item-5",
    question: "Will RPA work with our current software systems?",
    answer:
      "Yes. RPA integrates at the user interface level, working seamlessly with your existing ERP, CRM and other applications without requiring system modifications."
  },
  {
    value: "item-6",
    question: "What ROI can we expect from RPA implementation?",
    answer:
      "Businesses typically see 30-50% cost reduction in automated processes with full ROI achieved within 6-12 months through increased productivity and error reduction."
  },
  {
    value: "item-7",
    question: "How do you ensure RPA security?",
    answer:
      "We implement role-based access controls, comprehensive audit trails and data encryption to ensure your automated processes meet strict security standards."
  },
  {
    value: "item-8",
    question: "Can RPA scale with our business needs?",
    answer:
      "Yes, our RPA solutions are designed for easy scaling, allowing you to add new processes or increase bot capacity as your business requirements evolve."
  },
  {
    value: "item-9",
    question: "How does RPA benefit our employees?",
    answer:
      "RPA eliminates mundane tasks, enabling your staff to focus on higher-value activities like customer service, analysis and strategic initiatives that drive growth."
  },
  {
    value: "item-10",
    question: "What ongoing support do you provide?",
    answer:
      "We offer continuous monitoring, performance optimization and process updates to ensure your RPA solutions remain effective as your business evolves."
  }
];
export const Faq_Expertise_DEVOPs: FaqItem[] = [
  {
    value: "item-1",
    question: "What is DevOps?",
    answer:
      "DevOps combines development and operations to accelerate software delivery through automation, collaboration and continuous improvement throughout the application lifecycle."
  },
  {
    value: "item-2",
    question: "How does DevOps benefit our organization?",
    answer:
      "DevOps increases deployment frequency by up to 200%, reduces failure rates and accelerates time-to-market while maintaining superior code quality and system reliability."
  },
  {
    value: "item-3",
    question: "What's the difference between Agile and DevOps?",
    answer:
      "Agile focuses on development methodology, while DevOps extends this to include operations, creating a continuous delivery pipeline from code to customer."
  },
  {
    value: "item-4",
    question: "What tools and technologies do you implement?",
    answer:
      "We specialize in Jenkins for CI/CD, Docker for containerization, Kubernetes for orchestration, Terraform for infrastructure and comprehensive monitoring solutions."
  },
  {
    value: "item-5",
    question: "How does DevOps improve deployment reliability?",
    answer:
      "Our automated CI/CD pipelines ensure consistent, repeatable deployments with built-in testing and rollback capabilities that dramatically reduce human error."
  },
  {
    value: "item-6",
    question: "What is CI/CD and why is it crucial?",
    answer:
      "Continuous Integration and Continuous Deployment automate building, testing and releasing software, enabling frequent, reliable updates with minimal manual intervention."
  },
  {
    value: "item-7",
    question: "How do you help transform our team culture?",
    answer:
      "We foster collaboration between development and operations through shared goals, automated processes and blameless post-mortems that encourage continuous learning."
  },
  {
    value: "item-8",
    question: "What is Infrastructure as Code (IaC)?",
    answer:
      "IaC manages your infrastructure through machine-readable configuration files, enabling version control, repeatability and disaster recovery in minutes instead of days."
  },
  {
    value: "item-9",
    question: "How does DevOps optimize cloud costs?",
    answer:
      "Through automated scaling, resource optimization and continuous monitoring, we typically reduce cloud spending by 20-35% while improving performance."
  },
  {
    value: "item-10",
    question: "What security practices do you implement?",
    answer:
      "We embed security throughout the pipeline (DevSecOps) with automated scanning, compliance checks and security testing at every stage of development."
  },
  {
    value: "item-11",
    question: "Can DevOps work for our non-technical teams?",
    answer:
      "Yes, DevOps principles of automation, measurement and continuous improvement can transform any operational process, not just software development."
  },
  {
    value: "item-12",
    question: "How do you measure DevOps success?",
    answer:
      "We track key metrics including deployment frequency, lead time for changes, mean time to recovery and change failure rate to demonstrate clear ROI."
  },
  {
    value: "item-13",
    question: "What's your implementation approach?",
    answer:
      "We begin with an assessment, then implement in phases starting with CI/CD, followed by infrastructure automation and ongoing optimization based on your goals."
  }
];
export const Faq_Dynamics: FaqItem[] = [
  {
    value: "item-1",
    question: "What is Microsoft Dynamics?",
    answer:
      "Microsoft Dynamics is an integrated business platform that unifies your CRM and ERP systems to manage customers, operations, finance and sales in one intelligent solution.",
  },
  {
    value: "item-2",
    question: "How can Dynamics transform our business?",
    answer:
      "It streamlines operations, provides real-time customer insights, automates sales processes and delivers actionable analytics that drive growth and operational excellence.",
  },
  {
    value: "item-3",
    question: "Will Dynamics integrate with our current tools?",
    answer:
      "Yes, Dynamics seamlessly connects with Office 365, Power BI and your existing business applications through robust APIs and pre-built connectors.",
  },
  {
    value: "item-4",
    question: "Is Dynamics suitable for growing businesses?",
    answer:
      "Yes. Dynamics scales perfectly from startups to enterprises with flexible modules that grow with your evolving business needs and complexity.",
  },
  {
    value: "item-5",
    question: "How secure is our data in Dynamics?",
    answer:
      "Microsoft's enterprise-grade security protects your data with advanced encryption, compliance certifications and granular access controls that meet global standards.",
  },
  {
    value: "item-6",
    question: "What training and support do you provide?",
    answer:
      "We offer comprehensive training, detailed documentation and ongoing technical support to ensure your team maximizes value from day one.",
  },
  {
    value: "item-7",
    question: "What's the typical implementation timeline?",
    answer:
      "Most implementations complete within 8-16 weeks, with phased rollouts that deliver value quickly while minimizing business disruption.",
  },
  {
    value: "item-8",
    question: "Can we customize Dynamics for our industry?",
    answer:
      "Yes, we tailor industry-specific solutions for manufacturing, retail, healthcare and professional services with customized workflows and reporting.",
  },
  {
    value: "item-9",
    question: "How does Dynamics support remote teams?",
    answer:
      "The cloud-based platform enables secure access from anywhere, with mobile apps and collaboration tools that keep distributed teams connected and productive.",
  },
  {
    value: "item-10",
    question: "How do we start our Dynamics journey?",
    answer:
      "Begin with our discovery workshop to identify your key requirements and develop a phased implementation roadmap tailored to your business goals.",
  },
];

export const Faq_Helix: FaqItem[] = [
  {
    value: "item-1",
    question: "How long does a Helix implementation take?",
    answer:
      "Timelines depend on the scope of your environment, the number of modules involved and whether you're implementing fresh or migrating from legacy Remedy.",
  },
  {
    value: "item-2",
    question: "Will migrating to Helix disrupt our service desk operations?",
    answer:
      "No. Our migration approach is built to preserve historical data and minimize disruption to your service desk. Your teams continue operating while the transition happens in the background.",
  },
  {
    value: "item-3",
    question:
      "Do we have to change our workflows to fit Helix, or can it be configured to match ours?",
    answer:
      "We configure Helix and Remedy to match your organization's workflows, not the other way around. Custom workflows, business rules and automations are built specifically around how your teams already operate.",
  },
  {
    value: "item-4",
    question:
      "Can Helix and Remedy integrate with the other tools in our technology stack?",
    answer:
      "Helix and Remedy can be integrated with third-party systems across monitoring, DevOps, cloud platforms and HR. If your organization runs a mixed technology stack, we connect it rather than asking you to replace it.",
  },
  {
    value: "item-5",
    question: "Do you provide ongoing support after go-live?",
    answer:
      "Yes. We offer managed support and maintenance, including ongoing administration, patching and troubleshooting, so your platform continues to perform without requiring your internal team to manage it alone.",
  },
  {
    value: "item-6",
    question: "Can you help reduce our BMC licensing costs?",
    answer:
      "Yes. We audit your existing BMC environment and right-size your licensing to match actual usage, reducing cost without reducing the capability your teams rely on.",
  },
  {
    value: "item-7",
    question:
      "If our CMDB data is inaccurate, can it be fixed without starting over?",
    answer:
      "In most cases, yes. We reconfigure Discovery and CMDB to accurately map your infrastructure, correcting inaccurate asset data rather than requiring a full rebuild from scratch.",
  },
  {
    value: "item-8",
    question: "Is training included as part of the engagement?",
    answer:
      "We include hands-on administrator and end-user training as part of every engagement, so adoption doesn't become a second project after go-live.",
  },
];

export const Faq_ERP: FaqItem[] = [
  {
    value: "item-1",
    question: "What is an ERP system?",
    answer:
      "An ERP system helps manage all major business operations, like finance, HR, sales and inventory, in one single platform.",
  },
  {
    value: "item-2",
    question: "How do I know if my business needs an ERP?",
    answer:
      "If you're using multiple tools, facing data inconsistencies or dealing with manual processes, it might be time for an ERP.",
  },
  {
    value: "item-3",
    question: "How long does an ERP implementation take?",
    answer:
      "Typically 3–9 months depending on business size, number of modules and customization needed.",
  },
  {
    value: "item-4",
    question: "Can ERP work for small businesses too?",
    answer:
      "Yes. Modern ERP systems are scalable and flexible, making them ideal for small and midsize companies.",
  },
  {
    value: "item-5",
    question: "Will ERP replace all my existing software?",
    answer:
      "Not necessarily. ERP can integrate with many tools you already use, eliminating the need for complete replacement.",
  },
  {
    value: "item-6",
    question: "What kind of ERP systems do you work with?",
    answer:
      "We support a range of ERP platforms including cloud, on-premise and custom-built ERP systems.",
  },
  {
    value: "item-7",
    question: "Is training included in the implementation process?",
    answer:
      "Yes, we provide full training and documentation to ensure your team is confident using the system.",
  },
  {
    value: "item-8",
    question: "What happens after ERP goes live?",
    answer:
      "We offer continuous support, updates and improvements to keep your ERP running smoothly.",
  },
  {
    value: "item-9",
    question: "Will ERP help improve reporting and analytics?",
    answer:
      "Yes. ERP consolidates data and provides real-time dashboards for faster, more accurate decisions.",
  },
  {
    value: "item-10",
    question: "Is security a concern with ERP systems?",
    answer:
      "We implement strict access controls, encryption and monitoring to keep your data protected and compliant.",
  },
];

export const Faq_ManageEngine: FaqItem[] = [
  {
    value: "item-1",
    question: "What is ManageEngine used for?",
    answer:
      "ManageEngine is a suite of IT management tools for service management, security, identity governance, endpoint control, monitoring and automation.",
  },
  {
    value: "item-2",
    question: "Is ManageEngine suitable for small businesses?",
    answer:
      "Yes, it scales from small businesses to large enterprises with flexible modules.",
  },
  {
    value: "item-3",
    question: "Can ManageEngine integrate with our existing IT tools?",
    answer:
      "Yes, ManageEngine integrates with Active Directory, HR systems, monitoring tools, cloud apps and third-party platforms.",
  },
  {
    value: "item-4",
    question: "Can you customize ManageEngine to fit our workflows?",
    answer:
      "Yes. We tailor automation, forms, SLAs, permissions, templates and dashboards to match your exact processes.",
  },
  {
    value: "item-5",
    question: "Does ManageEngine work for remote teams?",
    answer:
      "Yes. Endpoint Central, MDM and remote access tools support distributed devices and users.",
  },
  {
    value: "item-6",
    question: "Is ManageEngine secure?",
    answer:
      "Yes, it offers encryption, auditing, access controls, MFA and compliance-ready logging.",
  },
  {
    value: "item-7",
    question: "How long does implementation take?",
    answer:
      "Typically 2–10 weeks depending on the modules and complexity.",
  },
  {
    value: "item-8",
    question: "Can you help with compliance requirements?",
    answer:
      "Yes, we set up auditing, reporting and access controls for ISO, GDPR, HIPAA, SOC and other standards.",
  },
  {
    value: "item-9",
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer managed services, optimization, monitoring and extended technical support.",
  },
];

export const Faq_Ibm: FaqItem[] = [
  {
    value: "item-1",
    question:
      "Do you handle new WebSphere implementations, ongoing support, or both?",
    answer:
      "Both. We handle new WebSphere implementations as well as ongoing administration, performance tuning and troubleshooting for environments you already have in production.",
  },
  {
    value: "item-2",
    question:
      "Can you design highly available WebSphere Network Deployment environments?",
    answer:
      "Yes. We design and implement clustered, scalable WebSphere Network Deployment environments built for production availability requirements.",
  },
  {
    value: "item-3",
    question:
      "Can you help with WebSphere Commerce integration and version upgrades?",
    answer:
      "Yes. We handle WebSphere Commerce integration and migration, including full version upgrades such as Commerce V7 to V9 on AWS EKS.",
  },
  {
    value: "item-4",
    question:
      "How does IBM Business Automation Workflow improve our processes?",
    answer:
      "It automates the process steps and approvals your teams currently handle manually, so requests move through your organization without waiting on individual handoffs.",
  },
  {
    value: "item-5",
    question:
      "Why use QRadar SIEM instead of a general monitoring tool?",
    answer:
      "QRadar SIEM is purpose-built for security event correlation, log-source integration and incident detection, which general monitoring tools typically aren't designed to handle at the same depth.",
  },
  {
    value: "item-6",
    question:
      "How do you handle patch management for WebSphere and related platforms?",
    answer:
      "We manage patch cycles, including iFixes, Fix Packs and Feature Packs, on a planned schedule across WAS, WCS, Jazz and BPM, so updates happen without unplanned downtime.",
  },
  {
    value: "item-7",
    question:
      "Do you support IBM Cloud Private installation and ongoing administration?",
    answer:
      "We support both. IBM Cloud Private installation, configuration and ongoing administration is part of our core service offering.",
  },
  {
    value: "item-8",
    question: "Do you provide support after go-live?",
    answer:
      "Yes. We provide continued administration, troubleshooting and performance tuning after go-live, so your middleware environment stays reliable over time.",
  },
];
// Add/Update this in /app/_constant/index.js

export const careersHeader: CareersHeader = {
  title: "Opportunities At",
  company: "Virtuosoft",
};

export const jobListings: JobListing[] = [
  {
    id: "junior-data-engineer",
    title: "Junior Data Engineer",
    department: "Data Science",
    type: "Full-time",
    location: "On-Site",
    fullDescription: "We are looking for a Junior Data Engineer with strong logical thinking and fast query-writing ability to support the development of data pipelines, ETL processes and reporting systems. This role is ideal for someone passionate about data engineering, SQL optimization and cloud-based data platforms.",
    requirements: [
      "6 to 18 months of experience in Data Engineering or a related role",
      "Fast and efficient SQL query writing ability",
      "Basic to intermediate Python programming skills",
      "Understanding of data warehousing principles",
      "Knowledge of ETL/ELT processes and data pipelines",
      "Familiarity with Power BI for reporting and dashboards",
      "Basic knowledge of AWS services (EC2, Lambda, Redshift) or GCP"
    ],
    benefits: ["Market Competitive Salary", "Growth Opportunities", "Data Systems Training", "9:30 AM to 6:30 PM shift"]
  },
  {
    id: "frontend-developer-angularjs",
    title: "Frontend Developer (Angular-JS)",
    department: "Engineering",
    type: "Evening Shift",
    location: "Remote",
    fullDescription: "We are looking for a skilled Frontend Developer with strong expertise in AngularJS (1.x) to develop and maintain dynamic web applications. The ideal candidate has deep JavaScript knowledge, strong UI development skills, and the ability to optimize performance across browsers and devices.",
    requirements: [
      "4+ years of relevant professional experience required",
      "Strong hands-on experience with AngularJS (1.x)",
      "Proficiency in JavaScript, jQuery, HTML5, CSS3, JSON",
      "Experience with responsive frameworks like Bootstrap",
      "Effective use of $httpProvider, promises, and deferred objects",
      "Strong understanding of frontend security and session handling",
      "Ability to work in an evening shift"
    ],
    benefits: ["Remote Work Mode", "Evening Shift", "Market Competitive Salary", "Scalable Product Environment"]
  },
  {
    id: "creative-graphic-designer",
    title: "Creative Graphic Designer",
    department: "Creative & Design",
    type: "Full-time",
    location: "On-Site",
    fullDescription: "We are looking for a proactive Creative Generalist who can design for brands, build UX-focused web layouts and support video production workflows. This role blends visual design, UX/UI thinking and video editing support, with a strong emphasis on ownership and delivery discipline.",
    requirements: [
      "2 to 3 years of relevant professional experience",
      "Ability to design across multiple brands and platforms",
      "Experience in UX/UI thinking for web layouts",
      "Support for video production and editing workflows",
      "Strong emphasis on ownership and communication",
      "Design, Media or related degree preferred"
    ],
    benefits: ["Market Competitive Salary", "Professional Creative Team", "On-site Perks", "9:30 AM to 6:30 PM shift"]
  },
  {
    id: "microsoft-dynamics-365-crm",
    title: "Microsoft Dynamics 365 CRM",
    department: "IT Services",
    type: "Full-time (EST Shift)",
    location: "Remote",
    fullDescription: "We are looking for a skilled Microsoft Dynamics 365 CRM & Power Apps Developer to design, customize and implement high-impact CRM solutions. The ideal candidate excels in Dynamics 365 integrations, Power Platform tools and scalable enterprise solutions.",
    requirements: [
      "Strong experience in Dynamics 365 CRM customization and integration",
      "Proficiency in .NET, C#, JavaScript and Microsoft technologies",
      "Hands-on expertise with Power Platform tools (Power Automate, Power BI)",
      "Experience in data migration (SSIS, KingswaySoft or equivalent)",
      "Understanding of Azure services, APIs and cloud integrations",
      "Willingness to work in EST Time Zone (6 PM to 2:30 AM)"
    ],
    benefits: ["Remote Work", "Cutting-edge Microsoft Tech", "Enterprise IT exposure", "Competitive Salary"]
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "IT Services",
    type: "Full-time",
    location: "On-site",
    fullDescription: "As a DevOps Engineer at Virtuosoft, you'll design, deploy and maintain robust cloud infrastructure using modern DevOps practices. You'll collaborate with development teams to implement secure, scalable and highly available systems.",
    requirements: [
      "3+ years of professional experience in DevOps",
      "Architect and manage AWS/OCI infrastructure using Terraform",
      "Manage Kubernetes, Docker and CI/CD pipelines (GitHub Actions)",
      "Configure networking, VPNs and security settings",
      "Monitor systems using Prometheus, Datadog and ELK Stack",
      "Automation skills with Bash/Python"
    ],
    benefits: ["Market Competitive Salary", "Kubernetes Environment", "Security Hardening exposure", "Cloud Certifications support"]
  },
  {
    id: "dotnet-developer",
    title: ".NET Developer",
    department: "Engineering",
    type: "Contract (1 Year)",
    location: "Karachi (Remote/On-site)",
    fullDescription: "As a .NET Developer at Virtuosoft, you’ll design, develop and maintain enterprise-grade applications using modern Microsoft technologies. You’ll collaborate with cross-functional teams to deliver secure, scalable and high-quality software solutions.",
    requirements: [
      "5+ years of relevant professional experience",
      "Expertise in .NET / .NET Core, ASP.NET, C#, MVC, and MVVM",
      "Build and integrate RESTful APIs and OData services",
      "Design and optimize SQL Server queries and stored procedures",
      "Implement Identity Management using Active Directory/ADFS",
      "Source control management using TFS"
    ],
    benefits: ["1 Year Renewable Contract", "Enterprise-level projects", "Evening Shift (6 PM – 2:30 AM)", "Modern Microsoft Stack"]
  }
];

export const openApp: OpenApplication = {
  title: "Open application",
  type: "Full-time",
  location: "Karachi",
  shortDesc: "Don't see your role available? Apply for an open application!"
};

export const Faq_Products_Certus: FaqItem[] = [
  {
    value: "item-1",
    question: "Our invoices are too messy for OCR tools. How is this different?",
    answer: "That is exactly the problem this was built to solve. The system preprocesses every document straightening, sharpening, and cleaning before extraction begins. Then it runs three independent review layers rather than relying on a single pass. It handles ten different supplier formats in production with a 99.2% success rate, including the messy ones."
  },
  {
    value: "item-2",
    question: "We are not on SAP. Does this work with other systems?",
    answer: "Yes. Certus posts to the ERP or accounting software you already run — SAP, Oracle NetSuite, Microsoft Dynamics 365, Odoo, QuickBooks, Xero and Sage are all supported, with a REST API available for anything custom."
  },
  {
    value: "item-3",
    question: "What happens when the system gets something wrong?",
    answer: "Every document runs through three independent checks before anything touches your books. Anything that fails validation is routed to a human reviewer with the exact discrepancy flagged, so nothing incorrect gets posted automatically."
  },
  {
    value: "item-4",
    question: "Our suppliers send orders through WhatsApp and email, not just PDFs.",
    answer: "Certus reads documents however they arrive — PDFs, scanned images, email attachments and text messages are all ingested through the same pipeline, so a photo sent over WhatsApp is processed the same way as a formal PDF invoice."
  },
  {
    value: "item-5",
    question: "Can this handle documents beyond invoices and purchase orders?",
    answer: "Yes. Beyond invoices and purchase orders, Certus processes receipts, delivery notes, bank statements, contracts and tax documents across the same validation pipeline."
  },
  {
    value: "item-6",
    question: "Can this handle documents beyond invoices and purchase orders?",
    answer: "Yes. Beyond invoices and purchase orders, Certus processes receipts, delivery notes, bank statements, contracts and tax documents across the same validation pipeline."
  }
];

// Global Home Page

export interface GlobalSolutionItem {
  id: string;
  index: string;
  title: string;
  description?: string;
  tags?: string[];
}

export const global_Solutions: GlobalSolutionItem[] = [
  {
    id: "ai",
    index: "01",
    title: "Artificial Intelligence",
    description: "AI Solution That Automate And Innovate.",
    tags: ["Custom Agent Development", "AI PoC & MVP", "AI agents", "Gen AI"],
  },
  {
    id: "software-engineering",
    index: "02",
    title: "Software Engineering",
    description: "Building Robust And Future Ready Digital Solution.",
    tags: ["App development", "App Modernization", "PoC Development", "Cloud Engineering"],
  },
  {
    id: "advisory-strategy",
    index: "03",
    title: "Advisory & Strategy",
    description:"Expert guidance to drive digital growth.",
    tags:["Discovery Workshop", "Technical Feasibility", "UI/UX Consulting", "Digital Transformation"]
  },
  {
    id: "it-governance",
    index: "04",
    title: "IT Governance",
    description:"Structured Governance That Strengthens Control And Accountability.",
    tags:["Regulatory Compliance","Risk Management", "Resource Augmentation", "ITIL"]
  },
];

export interface GlobalCaseStudy {
  title: string;
  description: string;
  industry: string;
  bgImage: string;
  logo: string;
}

export const global_CaseStudies: GlobalCaseStudy[] = [
  {
    title: "Industrial Grade Service management for GASCO",
    description:
      "GASCO partnered with us to implement and manage IT Service management on BMC Helix across its Riyadh operation, replacing fragmented request handling with a single, measured service desk aligned to ITIL and ISO/IEC 20000.",
    industry: "Oil & Gas",
    bgImage: "/assets/Images/home/global/case-alwatania-bg.png",
    logo: "/assets/Images/home/global/case-alwatania-logo.svg",
  },
  {
    title: "Advancing Cyber Resilience",
    description:
      "We engaged with Tawal Telecom as a third-party cybersecurity vendor to perform advanced Red Teaming assessments. The engagement focused on simulating real-world attacks to test detection and response security controls.",
    industry: "Holding & Investment",
    bgImage: "/assets/Images/home/global/case-tarabut-bg.png",
    logo: "/assets/Images/home/global/case-tarabut-logo.svg",
  },
];

export interface GlobalTestimonial {
  rating: number;
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const global_Testimonials: GlobalTestimonial[] = [
  {
    rating: 4,
    quote:
      "Virtuosoft cut through the noise and delivered a system that actually works the way our teams operate day to day.",
    name: "Maxin Will",
    role: "Product Manager",
    initials: "MW",
  },
  {
    rating: 4,
    quote:
      "From discovery to launch, their engineers understood the complexity of our enterprise stack better than teams three times their size.",
    name: "Maxin Will",
    role: "Product Manager",
    initials: "MW",
  },
  {
    rating: 5,
    quote:
      "The results were measurable within weeks, not quarters. That pace of delivery changed how we plan technology investment.",
    name: "Maxin Will",
    role: "Product Manager",
    initials: "MW",
  },
  {
    rating: 5,
    quote:
      "Reliable, transparent and genuinely invested in our success, Virtuosoft feels like an extension of our own team.",
    name: "Maxin Will",
    role: "Product Manager",
    initials: "MW",
  },
  {
    rating: 5,
    quote:
      "Reliable, transparent and genuinely invested in our success, Virtuosoft feels like an extension of our own team.",
    name: "Maxin Will",
    role: "Product Manager",
    initials: "MW",
  },
];

export interface GlobalCtaStat {
  value: string;
  label: string;
}

export const global_CtaStats: GlobalCtaStat[] = [
  { value: "16+", label: "Years in Production" },
  { value: "50+", label: "Enterprises Scaled" },
  { value: "50K+", label: "Users Impacted" },
];

// KSA Home Page

// "Innovative Solution Real Results" accordion — reuses the GlobalSolutionItem
// shape since the card component pattern is identical, but KSA's Figma frame
// (node 2005:33134) specifies its own category set and AI copy.
export const ksa_Solutions: GlobalSolutionItem[] = [
  {
    id: "ai",
    index: "01",
    title: "Artificial Intelligence",
    description: "Identify high-ROI use cases and define a realistic, measurable AI roadmap.",
    tags: ["Stakeholder discovery", "Value model & KPI definition", "Data readiness assessment"],
  },
  {
    id: "software-engineering",
    index: "02",
    title: "Software Engineering",
  },
  {
    id: "advisory-strategy",
    index: "03",
    title: "Advisory & Strategy",
  },
  {
    id: "it-governance",
    index: "04",
    title: "IT Governance",
  },
];

export interface KsaWhyChooseUsItem {
  index: string;
  title: string;
  description: string;
  icon: string;
}

// "Why Choose Us? Technology With Purpose" connected card row (node 2005:38517).
// Uses the concise Figma copy — distinct from the longer-form `values_Section`
// copy written for the About page — so it lives as its own KSA-scoped export.
export const ksa_WhyChooseUs: KsaWhyChooseUsItem[] = [
  {
    index: "01",
    title: "Transparency",
    description: "We believe in openness at every level, with our clients, partners and teams. Every action and decision is guided by honesty and clarity.",
    icon: "/assets/Images/home/ksa/icon-transparency.svg",
  },
  {
    index: "02",
    title: "Teamwork",
    description: "Our strength lies in the way we work together, across teams and disciplines. Everyone contributes, challenges and supports one another.",
    icon: "/assets/Images/home/ksa/icon-teamwork.svg",
  },
  {
    index: "03",
    title: "Integrity",
    description: "Integrity guides our choices and shapes our culture. We stand by our word and always choose fairness, even when no one is watching.",
    icon: "/assets/Images/home/ksa/icon-integrity.svg",
  },
  {
    index: "04",
    title: "Reliability",
    description: "We stand for consistency, precision and accountability, from the smallest task to the most complex project, every time.",
    icon: "/assets/Images/home/ksa/icon-reliability.svg",
  },
];

export interface GlobalWhyChooseUsItem {
  index: string;
  title: string;
  description: string;
  imageSrc: string;
}

// Short-copy "Why Choose Us" card set matching the Global home page Figma (card copy is
// intentionally condensed vs. the longer `values_Section` copy used elsewhere).
export const global_WhyChooseUs: GlobalWhyChooseUsItem[] = [
  {
    index: "01",
    title: "Transparency",
    description:
      "We believe in openness at every level, with our clients, partners and teams. Every action and decision is guided by honesty and clarity.",
    imageSrc: "/assets/Images/home/global/whychoose-icon-transparency.svg",
  },
  {
    index: "02",
    title: "Teamwork",
    description:
      "Our strength lies in the way we work together, across teams and disciplines. Everyone contributes, challenges and supports one another.",
    imageSrc: "/assets/Images/home/global/whychoose-icon-teamwork.svg",
  },
  {
    index: "03",
    title: "Integrity",
    description:
      "Integrity guides our choices and shapes our culture. We stand by our word and always choose fairness, even when no one is watching.",
    imageSrc: "/assets/Images/home/global/whychoose-icon-integrity.svg",
  },
  {
    index: "04",
    title: "Reliability",
    description:
      "We stand for consistency, precision and accountability, from the smallest task to the most complex project, every time.",
    imageSrc: "/assets/Images/home/global/whychoose-icon-reliability.svg",
  },
];

// White Paper page — the paper itself plus any localized editions. `href` must
// point at a real destination; until a hosted PDF exists these route to the
// contact page, where the paper can be requested.
export interface WhitePaperTranslation {
  language: string;
  linkLabel: string;
  href: string;
}

export const whitePaper_Translations: WhitePaperTranslation[] = [
  {
    language: "English (Original)",
    linkLabel: "Download Paper",
    href: "#",
  },
];

// Case-study content now lives in the database (Prisma `CaseStudy` model) —
// see app/api/lib/case-study/types.ts and prisma/seed.ts.
