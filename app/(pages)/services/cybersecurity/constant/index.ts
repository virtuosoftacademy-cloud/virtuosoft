  import Src from '@/public/assets/Images/service/ed_service.png';
  import type { HeroVariant, HeroStyle } from '../../common/Hero';

  // ────────────────────────────────────────────────
  //  Shared shapes for this vertical's service data
  // ────────────────────────────────────────────────
  export type TitlePart = string | { text: string; bold?: boolean };

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

  export interface EmpowerItem {
    title: string;
    description: string;
  }

  export interface EmpowerData {
    title: string;
    items: EmpowerItem[];
  }

  // Cybersecurity Solution Deployment & Management
  // Hero
  export const CyberSecurityDeploymentHero: HeroVariant = {
    title: 'Solution Deployment & Management',
    topDescription: 'Cybersecurity',
    bottomDescription:
      'At Virtuosoft, we help organizations strengthen their security posture with expertly deployed on-premise, ' +
      'hybrid and cloud-based cybersecurity solutions. From firewalls and endpoint security to SIEM, identity management ' +
      'and policy enforcement, we ensure every security tool is deployed, configured and continuously managed for ' +
      'maximum protection and performance.',
    btnTitle: 'Secure Your Infrastructure',
    ...heroStyle,
  };

  // When Is It Time to Strengthen Cybersecurity...?
  const valueImg = 'assets/Images/service/ai'; // ← adjust if you have a different folder
  export const valueDataCyberSecurityDeployment: ValueSectionData[] = [
    {
      titleParts: [
        "When Is It Time to Strengthen Cybersecurity Through ",
        { text: "Expert Deployment & Management", bold: true }
      ],
      valueItems: [
        {
          title: "Expanding Attack Surface Across Infrastructure",
          description:
            "As operations scale, so do vulnerabilities. We deploy integrated security solutions that protect networks, " +
            "endpoints, applications and cloud environments holistically.",
          image: `/${valueImg}/automate.svg`,
        },
        {
          title: "Lack of Centralized Monitoring & Unified Security Controls",
          description:
            "Most organizations struggle with disconnected security tools. We streamline deployment, centralize logging " +
            "and unify monitoring to eliminate blind spots.",
          image: `/${valueImg}/scale.svg`,
        },
        {
          title: "Compliance & Regulatory Pressures",
          description:
            "From ISO 27001 and SOC2 to PCI-DSS, we deploy security systems aligned with your compliance obligations, " +
            "ensuring audit readiness and zero gaps.",
          image: `/${valueImg}/enhance.svg`,
        },
        {
          title: "Outdated or Misconfigured Security Tools",
          description:
            "Misconfigured firewalls or outdated antivirus tools invite breaches. We modernize, upgrade and properly " +
            "configure all security components for full protection.",
          image: `/${valueImg}/solve.svg`,
        },
        {
          title: "Limited In-House Cybersecurity Expertise",
          description:
            "Security teams often lack bandwidth or specialization. Virtuosoft fills the skill gap with certified " +
            "experts who handle deployment, tuning and ongoing management.",
          image: `/${valueImg}/mitigate.svg`,
        },
        {
          title: "Rising Threats & Need for Proactive Defense",
          description:
            "With advanced threats evolving daily, we deploy solutions like SIEM, EDR/XDR and threat intelligence tools " +
            "that provide proactive and predictive defense.",
          image: `/${valueImg}/enable.svg`,
        },
      ]
    }
  ];

  // TimeLine 
  // A Structured Path to Resilient Cybersecurity
  export const stepsDataCyberSecurityDeployment: TimeLineData[] = [
    {
      titleParts: [
        "A Structured Path to ",
        { text: "Resilient Cybersecurity", bold: true }
      ],
      timeLineItems: [
        {
          title: "Security Assessment & Environment Review",
          description:
            "We begin by analyzing your infrastructure, identifying vulnerabilities and assessing existing security controls.",
        },
        {
          title: "Solution Architecture & Planning",
          description:
            "Based on threat exposure and compliance requirements, we design the optimal security architecture and " +
            "prepare deployment blueprints.",
        },
        {
          title: "Tool Deployment & Configuration",
          description:
            "Our experts deploy firewalls, SIEM, EDR/XDR, DLP, IAM and other tools, configuring each to industry best " +
            "practices and your operational needs.",
        },
        {
          title: "Policy & Rule-Set Implementation",
          description:
            "We apply robust security policies, access controls, threat detection rules and automated workflows tailored " +
            "to your risk profile.",
        },
        {
          title: "Integration with Existing Systems",
          description:
            "All solutions are integrated with your IT environment, servers, applications, Active Directory, cloud " +
            "platforms and third-party tools.",
        },
        {
          title: "Testing & Validation",
          description:
            "We validate functionality through penetration testing, rule testing, performance checks and risk simulations.",
        },
        {
          title: "24/7 Monitoring & Continuous Management",
          description:
            "Our managed services include monitoring, threat detection, patching, tuning and incident response aligned " +
            "with agreed SLAs.",
        },
        {
          title: "Continuous Improvement & Optimization",
          description:
            "We refine configurations, update threat feeds and provide regular reports to ensure your security posture " +
            "evolves with emerging threats.",
        },
      ],
      businessOutComes: [
        { point: "Stronger, more resilient security posture" },
        { point: "Reduced breach risk & faster incident response" },
        { point: "Fully compliant deployments aligned with global standards" },
        { point: "Continuous visibility into threats & vulnerabilities" },
        { point: "Optimized performance of all deployed security tools" }
      ]
    }
  ];

  // Empower
  // Comprehensive Cybersecurity Deployment & Management Solutions
  export const CyberSecurityDeploymentEmpower: EmpowerData[] = [
    {
      title: "Comprehensive Cybersecurity Deployment & Management Solutions",
      items: [
        {
          title: "Cybersecurity Infrastructure Deployment",
          description:
            "End-to-end deployment of on-premise and hybrid solutions, firewalls, intrusion prevention systems, " +
            "secure gateways and more."
        },
        {
          title: "Endpoint, EDR & XDR Deployment",
          description:
            "We implement advanced endpoint detection and response solutions for real-time threat prevention and " +
            "automated remediation."
        },
        {
          title: "SIEM & Log Management Implementation",
          description:
            "Deploy and configure SIEM platforms to centralize logs, detect anomalies and automate SOC workflows."
        },
        {
          title: "Identity & Access Management (IAM)",
          description:
            "We set up role-based access, MFA, SSO, privileged access management and identity governance frameworks."
        },
        {
          title: "Network Security Deployment",
          description:
            "Firewalls, VLAN segmentation, VPNs, zero-trust network access and continuous monitoring for maximum protection."
        },
        {
          title: "Data Loss Prevention (DLP) Setup",
          description:
            "Deploy DLP policies, monitoring rules and data classification frameworks to prevent unauthorized access or leakage."
        },
        {
          title: "Cloud Security Deployment",
          description:
            "Secure AWS, Azure and GCP environments with CSPM, CIEM, cloud firewalls, workload protection and encryption."
        },
        {
          title: "Threat Intelligence Integration",
          description:
            "Integrate global threat feeds, IOC updates and automated detection tools to stay ahead of emerging risks."
        },
        {
          title: "Backup, Recovery & Business Continuity",
          description:
            "We deploy secure backup solutions, disaster recovery plans and failover strategies to ensure uninterrupted operations."
        },
        {
          title: "Ongoing Management & SOC Support",
          description:
            "Our team manages and maintains all deployed tools with continuous tuning, monitoring, alert triage and incident response."
        }
      ]
    }
  ];

  // Governance & Compliance Services
  // Hero
  export const GovernanceComplianceHero: HeroVariant = {
    title: 'Governance & Compliance Services',
    topDescription: 'Cybersecurity',
    bottomDescription:
      'At Virtuosoft, we help organizations build strong governance frameworks and achieve compliance across international cybersecurity standards. ' +
      'From policy development and risk management to ISO, NIST, HIPAA and PCI audits, we ensure your security program is aligned, ' +
      'accountable and fully compliant, turning cybersecurity into a business-wide priority rather than an IT function.',
    btnTitle: 'Strengthen Governance',
    ...heroStyle,
  };

  // When Is Strong Governance & Compliance Essential...?
  export const valueDataGovernanceCompliance: ValueSectionData[] = [
    {
      titleParts: [
        "When Is Strong",
        { text: " Governance & Compliance ", bold: true },
        "Essential for Your Organization"
      ],
      valueItems: [
        {
          title: "Lack of Clear Security Policies or Roles",
          description:
            "Disconnected teams and undefined responsibilities increase risk. Our governance frameworks establish clear policies, " +
            "roles and accountability, bringing structure and consistency across departments.",
          image: `/${valueImg}/automate.svg`,
        },
        {
          title: "Preparing for Industry Certifications or Regulatory Audits",
          description:
            "Whether it’s ISO 27001, HIPAA, GDPR, PCI DSS v4 or NIST, we guide you through compliance steps to ensure audit readiness " +
            "and zero gaps.",
          image: `/${valueImg}/scale.svg`,
        },
        {
          title: "Rapid Organizational Growth & Increasing Complexity",
          description:
            "As organizations expand, governance becomes critical. We help scale your security program with structured processes, " +
            "documented controls and automated compliance.",
          image: `/${valueImg}/enhance.svg`,
        },
        {
          title: "Struggle to Keep Up with Evolving Regulations",
          description:
            "Regulatory mandates shift constantly. Our experts track updates and adjust your policies, procedures and controls " +
            "to ensure continuous compliance.",
          image: `/${valueImg}/solve.svg`,
        },
        {
          title: "Need for Better Risk Visibility & Decision-Making",
          description:
            "Without governance, risks go unnoticed. We build risk management frameworks that help leadership prioritize threats, " +
            "allocate resources and make informed decisions.",
          image: `/${valueImg}/mitigate.svg`,
        },
        {
          title: "Need to Embed Security into Everyday Workflows",
          description:
            "Compliance is not a one-time task. We design integrated, automated workflows so compliance becomes part of daily operations, " +
            "simple, sustainable and repeatable.",
          image: `/${valueImg}/enable.svg`,
        },
      ]
    }
  ];

  // TimeLine 
  // A Framework for Security Accountability & Regulatory Confidence
  export const stepsDataGovernanceCompliance: TimeLineData[] = [
    {
      titleParts: [
        "A Framework for ",
        { text: "Security Accountability & Regulatory Confidence", bold: true }
      ],
      timeLineItems: [
        {
          title: "Organization & Policy Assessment",
          description:
            "We review existing policies, role definitions and processes to identify gaps across governance, security and compliance.",
        },
        {
          title: "Compliance Requirement Mapping",
          description:
            "Our team maps your environment to relevant frameworks—ISO, NIST CSF, PCI, SOC, GDPR, HIPAA, NYDFS " +
            "and industry-specific regulations.",
        },
        {
          title: "Governance Framework Design",
          description:
            "We build or refine governance models, including policy structure, decision-making processes, " +
            "access controls and accountability mechanisms.",
        },
        {
          title: "Policy Development & Documentation",
          description:
            "Our specialists craft or update all necessary policies and procedures, from security and privacy policies " +
            "to incident response and vendor management.",
        },
        {
          title: "Control Implementation & Automation",
          description:
            "We implement technical and administrative controls, automated monitoring and workflow tools " +
            "to enforce governance and compliance in real time.",
        },
        {
          title: "Compliance Monitoring & Auditing",
          description:
            "We conduct internal audits, gap analyses, risk assessments and readiness checks to prepare for " +
            "external certification or regulatory audits.",
        },
        {
          title: "Training & Awareness",
          description:
            "We train teams on compliance requirements, governance responsibilities and secure behavior, " +
            "ensuring organization-wide alignment.",
        },
        {
          title: "Continuous Governance & Improvement",
          description:
            "Governance evolves. We provide ongoing updates, audit support, maturity assessments and optimization " +
            "of frameworks as your organization grows.",
        },
      ],
      businessOutComes: [
        { point: "Unified governance aligned with business strategy" },
        { point: "Demonstrated compliance with global security standards" },
        { point: "Strong accountability & reduced risk exposure" },
        { point: "Audit-ready documentation and processes" },
        { point: "Automated, sustainable compliance workflows" }
      ]
    }
  ];

  // Empower
  // Build Trust, Strengthen Control & Stay Audit-Ready
  export const GovernanceComplianceEmpower: EmpowerData[] = [
    {
      title: "Build Trust, Strengthen Control & Stay Audit-Ready",
      items: [
        {
          title: "Governance Framework Development",
          description:
            "Design and implement governance structures that define roles, policies and oversight mechanisms across your organization."
        },
        {
          title: "Policy Creation & Documentation",
          description:
            "Clear, compliant documentation covering security, privacy, user access, vendor management, incident handling and more."
        },
        {
          title: "ISO Compliance Services",
          description:
            "End-to-end support for certifications including: ISO 20000 (ITSM), BC-ISOBCMS"
        },
        {
          title: "Compliance with Global Regulations",
          description:
            "Guidance and implementation for: GDPR, HIPAA, NYDFS, SOC 2"
        },
        {
          title: "NIST Cybersecurity Framework Implementation",
          description:
            "Align processes with NIST CSF for risk-based, measurable cybersecurity improvement."
        },
        {
          title: "Risk & Control Assessments",
          description:
            "Comprehensive evaluation of operational, technical and organizational risks with prioritized remediation steps."
        },
        {
          title: "Audit Readiness & Support",
          description:
            "Internal audits, gap assessments, evidence collection and support throughout external audits."
        },
        {
          title: "Governance Automation & Monitoring",
          description:
            "Automated alerts, continuous compliance dashboards and real-time governance tracking for sustained oversight."
        },
        {
          title: "Training & Awareness Programs",
          description:
            "Organization-wide training to instill secure behavior and reinforce governance culture."
        },
        {
          title: "Third-Party Risk & Vendor Compliance",
          description:
            "Assess vendor risk, implement controls and ensure third-party compliance with policies and regulations."
        },
        {
          title: "Business Continuity & Disaster Recovery Governance",
          description:
            "Ensure resilient operations with structured plans, documentation and governance-level oversight."
        }
      ]
    }
  ];



  // Cyber Assessments
  // Hero
  export const CyberAssessmentsHero: HeroVariant = {
    title: 'Vulnerability Assessments & Penetration Testing',
    topDescription: 'Cybersecurity',
    bottomDescription:
      'At Virtuosoft, our Cyber Assessment Services provide deep visibility into your security posture, ' +
      'identifying vulnerabilities, evaluating maturity and uncovering hidden risks before attackers do. ' +
      'Through comprehensive testing, analysis and strategic recommendations, we strengthen your defenses ' +
      'and ensure your organization stays resilient, compliant and threat-ready.',
    btnTitle: 'Request a Risk Evaluation',
    ...heroStyle,
  };

  // When Are Cyber Assessments Critical for Business Security?
  export const valueDataCyberAssessments: ValueSectionData[] = [
    {
      titleParts: [
        "When Are Cyber Assessments ",
        { text: "Critical for Business Security", bold: true }
      ],
      valueItems: [
        {
          title: "Uncertainty About Your Security Weaknesses",
          description:
            "If you lack clarity on where your vulnerabilities lie, assessments provide the visibility needed " +
            "to strengthen your attack surface. We help identify gaps across your networks, endpoints, cloud and applications.",
          image: `/${valueImg}/automate.svg`,
        },
        {
          title: "Preparing for Regulatory or Industry Audits",
          description:
            "Compliance standards like ISO 27001, NIST, PCI DSS, SOC 2 and HIPAA require periodic assessments. " +
            "Our team ensures you meet all technical, procedural and documentation requirements.",
          image: `/${valueImg}/scale.svg`,
        },
        {
          title: "Experiencing Rapid Growth or Infrastructure Changes",
          description:
            "New systems, environments and integrations introduce risks. We perform assessments to ensure " +
            "your expanding infrastructure remains secure and compliant.",
          image: `/${valueImg}/enhance.svg`,
        },
        {
          title: "Increasing Cyber Threats & Sophisticated Attacks",
          description:
            "From ransomware to zero-day exploits, attacks are evolving. Our assessments help you understand " +
            "exposure levels and implement targeted defenses.",
          image: `/${valueImg}/solve.svg`,
        },
        {
          title: "Low Confidence in Existing Security Controls",
          description:
            "If controls aren’t tested, they’re not reliable. We evaluate the effectiveness of firewalls, IAM, " +
            "encryption, logging, SIEM, incident response and more.",
          image: `/${valueImg}/mitigate.svg`,
        },
        {
          title: "Need to Strengthen Incident Response & SOC Maturity",
          description:
            "A strong SOC requires visibility, metrics and maturity benchmarking. We assess SOC capabilities, " +
            "tools, workflows and readiness for real-world threats.",
          image: `/${valueImg}/enable.svg`,
        },
      ]
    }
  ];

  // TimeLine 
  // A Comprehensive Approach to Risk Visibility & Security Validation
  export const stepsDataCyberAssessments: TimeLineData[] = [
    {
      titleParts: [
        "A Comprehensive Approach to ",
        { text: "Risk Visibility & Security Validation", bold: true }
      ],
      timeLineItems: [
        {
          title: "Discovery & Scoping",
          description:
            "We define assessment goals, assets in scope and the depth of analysis required, " +
            "from networks to cloud, endpoints or applications.",
        },
        {
          title: "Data Collection & Environment Mapping",
          description:
            "Our team gathers system data, architecture diagrams, configurations and user access details " +
            "for full visibility.",
        },
        {
          title: "Vulnerability Identification",
          description:
            "Using automated scanning tools and manual validation, we detect vulnerabilities across systems, " +
            "applications and networks.",
        },
        {
          title: "Penetration Testing & Exploitation",
          description:
            "We simulate real-world attack techniques to understand actual exposure and validate exploitability.",
        },
        {
          title: "Risk Scoring & Impact Analysis",
          description:
            "Each finding is evaluated based on likelihood, severity and business impact, " +
            "aligned with frameworks like CVSS, NIST and ISO.",
        },
        {
          title: "SOC Maturity Assessment",
          description:
            "We review monitoring tools, alert rules, response processes, SOPs and incident logs " +
            "to measure SOC readiness and maturity.",
        },
        {
          title: "Reporting & Remediation Planning",
          description:
            "We deliver clear, actionable reports with prioritized recommendations, " +
            "providing both technical and executive-level insights.",
        },
        {
          title: "Validation & Continuous Improvement",
          description:
            "After remediation, we re-test controls, confirm fixes and propose long-term strategies " +
            "for sustained security maturity.",
        },
      ],
      businessOutComes: [
        { point: "Full visibility into vulnerabilities & misconfigurations" },
        { point: "Prioritized remediation backed by risk scoring" },
        { point: "Audit readiness across major compliance frameworks" },
        { point: "Enhanced SOC maturity & incident response capability" },
        { point: "Stronger resilience against real-world attacks" }
      ]
    }
  ];

  // Empower
  // Comprehensive Cyber Assessments for a Secure, Resilient Enterprise
  export const CyberAssessmentsEmpower: EmpowerData[] = [
    {
      title: "Comprehensive Cyber Assessments for a Secure, Resilient Enterprise",
      items: [
        {
          title: "Vulnerability Assessment",
          description:
            "Identify weaknesses across networks, servers, endpoints and cloud environments with automated " +
            "and manual testing for complete coverage."
        },
        {
          title: "Penetration Testing (Web, Network, Cloud, Mobile)",
          description:
            "Simulate targeted attacks to measure true exploitability and risk exposure using real-world " +
            "offensive techniques."
        },
        {
          title: "SOC Maturity Assessment",
          description:
            "Evaluate the strength of your monitoring, alerting and incident response processes to benchmark " +
            "SOC capability and effectiveness."
        },
        {
          title: "Network Security Assessment",
          description:
            "Review configurations, segmentation, firewall policies, access controls and network design " +
            "to ensure robust perimeter and internal defense."
        },
        {
          title: "Cloud Security Assessment",
          description:
            "Analyze cloud environments (AWS, Azure, GCP) for misconfigurations, IAM flaws and vulnerable " +
            "cloud-native services."
        },
        {
          title: "Endpoint & Device Security Review",
          description:
            "Assess endpoint protection tools, patching, configurations and user access controls " +
            "for endpoint hardening."
        },
        {
          title: "Access Control & Identity Assessment",
          description:
            "Evaluate IAM setup, MFA coverage, privilege escalation risks and identity misconfigurations."
        },
        {
          title: "Application Security Review",
          description:
            "Perform static, dynamic and manual app security testing to detect code vulnerabilities " +
            "and logic gaps."
        },
        {
          title: "Compliance Gap Assessments",
          description:
            "Identify compliance gaps for ISO 27001, PCI DSS, SOC 2, HIPAA, GDPR, NIST CSF " +
            "and regulatory mandates."
        },
        {
          title: "Threat Modeling & Attack Surface Analysis",
          description:
            "Identify high-risk assets, potential attack paths and exploitable vectors " +
            "to strengthen defensive strategy."
        },
        {
          title: "Configuration & Policy Reviews",
          description:
            "Assess configurations of servers, devices, cloud services, firewalls and security tools " +
            "against best practices."
        },
        {
          title: "Executive Risk Reporting",
          description:
            "Provide leadership with concise, actionable and business-aligned insights into risk posture " +
            "and remediation priorities."
        }
      ]
    }
  ];


  // Managed Cybersecurity Services
  // Hero
  export const ManagedCyberSecurityHero: HeroVariant = {
    title: 'Managed Cybersecurity Services',
    topDescription: 'Cybersecurity',
    bottomDescription:
      'At Virtuosoft, our Managed Cybersecurity Services protect your business around the clock, ' +
      'combining proactive monitoring, real-time threat detection and rapid incident response. ' +
      'With advanced security operations, automated defenses and expert-led oversight, ' +
      'we ensure your systems, data and workflows stay safeguarded from emerging cyber risks.',
    btnTitle: 'Secure Your Business Today',
    ...heroStyle,
  };

  // When Are Managed Cybersecurity Services Essential...?
  export const valueDataManagedCyberSecurity: ValueSectionData[] = [
    {
      titleParts: [
        "When Are Managed Cybersecurity Services ",
        { text: "Essential for Your Organization", bold: true }
      ],
      valueItems: [
        {
          title: "Rising Cyber Threats & Limited In-House Resources",
          description:
            "If your team struggles to keep up with evolving threats, our managed services provide continuous " +
            "protection with expert oversight, reducing workload and strengthening resilience.",
          image: `/${valueImg}/automate.svg`,
        },
        {
          title: "Need for 24/7 Monitoring & Automated Response",
          description:
            "Cyberattacks can occur anytime. We deliver round-the-clock SOC monitoring, threat detection, " +
            "incident triage and rapid containment to minimize damage.",
          image: `/${valueImg}/scale.svg`,
        },
        {
          title: "Complex Infrastructure & Fragmented Tools",
          description:
            "When multiple systems, cloud platforms and endpoints lack unified security, we consolidate defenses " +
            "into a seamless, cohesive security framework.",
          image: `/${valueImg}/enhance.svg`,
        },
        {
          title: "Compliance Pressure & Audit Requirements",
          description:
            "If you're managing standards like ISO 27001, NIST, HIPAA, SOC 2 or PCI DSS, our services help maintain " +
            "compliance through continuous monitoring, reporting and risk management.",
          image: `/${valueImg}/solve.svg`,
        },
        {
          title: "Frequent Security Incidents or False Positives",
          description:
            "Too many alerts and not enough real insight? We streamline detection, eliminate noise and ensure accurate " +
            "threat intelligence feeds your response plan.",
          image: `/${valueImg}/mitigate.svg`,
        },
        {
          title: "Growing Attack Surface from Remote or Hybrid Work",
          description:
            "Distributed teams increase exposure. We secure every device, endpoint, user and network to maintain " +
            "strong protection across locations.",
          image: `/${valueImg}/enable.svg`,
        },
      ]
    }
  ];

  // TimeLine 
  // A Structured, End-to-End Security Framework
  export const stepsDataManagedCyberSecurity: TimeLineData[] = [
    {
      titleParts: [
        "A Structured, ",
        { text: "End-to-End Security Framework", bold: true }
      ],
      timeLineItems: [
        {
          title: "Security Posture Evaluation",
          description:
            "We begin with a complete assessment of your environment, identifying gaps, risks and areas for improvement.",
        },
        {
          title: "Technology & Tool Deployment",
          description:
            "Our team deploys endpoint protection, SIEM, MDR, firewalls, monitoring tools and security configurations " +
            "tailored to your business.",
        },
        {
          title: "24/7 SOC Monitoring",
          description:
            "We continuously monitor logs, alerts, behaviors and network activity for suspicious actions or threats.",
        },
        {
          title: "Threat Detection & Correlation",
          description:
            "Using advanced analytics and threat intelligence, we correlate events to identify real attacks " +
            "and reduce false positives.",
        },
        {
          title: "Incident Response & Containment",
          description:
            "Our experts take immediate action to isolate, contain and mitigate threats, minimizing disruption " +
            "and preventing escalation.",
        },
        {
          title: "Continuous Vulnerability Monitoring",
          description:
            "We scan and evaluate systems regularly to uncover new vulnerabilities and potential attack vectors.",
        },
        {
          title: "Reporting & Compliance Support",
          description:
            "We provide detailed reports on incidents, vulnerabilities, system health and compliance metrics " +
            "for regulatory alignment.",
        },
        {
          title: "Ongoing Optimization & Security Hardening",
          description:
            "As threats evolve, we update policies, tools, workflows and configurations to keep your environment " +
            "continuously fortified.",
        },
      ],
      businessOutComes: [
        { point: "Continuous protection against evolving threats" },
        { point: "Faster detection and response to security incidents" },
        { point: "Reduced operational burden on internal teams" },
        { point: "Stronger compliance and audit readiness" },
        { point: "A resilient security posture built for long-term growth" }
      ]
    }
  ];

  // Empower
  // Comprehensive Managed Security Solutions for End-to-End Protection
  export const ManagedCyberSecurityEmpower: EmpowerData[] = [
    {
      title: "Comprehensive Managed Security Solutions for End-to-End Protection",
      items: [
        {
          title: "Managed SOC (Security Operations Center)",
          description:
            "Get comprehensive 24/7 monitoring, alert triage, threat detection and rapid containment powered by expert analysts."
        },
        {
          title: "Endpoint Security / EDR / XDR Monitoring",
          description:
            "We monitor and manage endpoint security tools, ensuring proactive detection of malware, ransomware " +
            "and suspicious behavior."
        },
        {
          title: "Network & Application Log Monitoring",
          description:
            "Our team oversees logs from firewalls, servers, applications and databases, leveraging SIEM intelligence " +
            "for correlation and detection."
        },
        {
          title: "Incident Response & Threat Containment",
          description:
            "We provide immediate containment, technical investigation, root-cause analysis and recovery assistance " +
            "during cyber events."
        },
        {
          title: "Threat Intelligence Services",
          description:
            "Stay ahead of attackers with real-time global threat intelligence, IOCs, behavior patterns " +
            "and predictive analytics."
        },
        {
          title: "Vulnerability Monitoring & Alerting",
          description:
            "Continuous scans detect weaknesses across systems, networks and cloud assets, prioritized for fast remediation."
        },
        {
          title: "Data Loss Prevention (DLP) Monitoring",
          description:
            "We monitor file movement, user activity and potential data leakage across endpoints, cloud and email."
        },
        {
          title: "Identity & Access Monitoring",
          description:
            "We secure access by monitoring MFA, privilege misuse, account breaches and abnormal user behavior."
        },
        {
          title: "SIEM Management",
          description:
            "Our experts configure, tune and manage SIEM solutions to enhance detection accuracy and reduce noise."
        },
        {
          title: "Managed Firewall & Network Security",
          description:
            "We manage firewall rules, segmentation, VPNs and intrusion prevention systems for robust network defense."
        },
        {
          title: "Email Security & Anti-Phishing Defense",
          description:
            "Our team monitors email channels for phishing attempts, spoofing, malware payloads " +
            "and compromised inbox activity."
        },
        {
          title: "Cloud Security Management",
          description:
            "We manage cloud threat detection, misconfiguration alerts, IAM policies and compliance " +
            "for AWS, Azure and GCP."
        },
        {
          title: "Security Policy & Configuration Management",
          description:
            "We continuously refine your cybersecurity policies, standards and procedures to ensure alignment " +
            "with best practices."
        },
        {
          title: "Compliance-Ready Reporting",
          description:
            "Detailed, audit-quality reports for ISO 27001, SOC 2, PCI DSS, NIST, HIPAA, GDPR and other frameworks."
        }
      ]
    }
  ];

  // Cybersecurity Solution Deployment & Management
  // Hero
  export const CyberRiskManagementHero: HeroVariant = {
    title: 'Risk Management & Governance',
    topDescription: 'Cybersecurity',
    bottomDescription:
      'At Virtuosoft, we help organizations manage cyber risk with clarity and control. ' +
      'Our Risk Management & Governance services align security programs with business objectives, ' +
      'regulatory requirements and industry best practices, transforming cybersecurity from a technical ' +
      'function into a strategic business enabler.',
    btnTitle: 'Strengthen Your Security Governance',
    ...heroStyle,
  };

  // When Do You Need Risk Management & Governance?
  // const valueImg = 'assets/Images/service/ai';

  export const valueRiskManagement: ValueSectionData[] = [
    {
      titleParts: [
        "When Do You Need ",
        { text: "Risk Management & Governance", bold: true }
      ],
      valueItems: [
        {
          title: "Unclear Security Ownership and Accountability",
          description:
            "Without defined roles, policies and oversight, security efforts become fragmented. " +
            "We establish governance structures that create clarity, accountability and executive visibility.",
          image: `/${valueImg}/automate.svg`,
        },
        {
          title: "Rising Regulatory and Compliance Pressure",
          description:
            "Struggling to keep up with GDPR, HIPAA, PCI DSS, NIST or ISO standards? " +
            "We help you interpret, implement and sustain compliance without slowing the business.",
          image: `/${valueImg}/scale.svg`,
        },
        {
          title: "Growing Cyber Risk Exposure",
          description:
            "As digital ecosystems expand, so do risks. Our risk-based approach identifies, prioritizes " +
            "and mitigates threats before they impact operations or reputation.",
          image: `/${valueImg}/enhance.svg`,
        },
        {
          title: "Inconsistent Security Policies Across Teams",
          description:
            "Disparate practices increase exposure. We standardize policies, controls and procedures " +
            "across departments for consistent, enforceable security.",
          image: `/${valueImg}/solve.svg`,
        },
        {
          title: "Limited Visibility into Security Posture",
          description:
            "If leadership lacks insight into risk levels, decisions suffer. We provide measurable risk " +
            "metrics and dashboards that support informed decision-making.",
          image: `/${valueImg}/mitigate.svg`,
        },
        {
          title: "Need to Align Security with Business Strategy",
          description:
            "Security should enable growth, not block it. We align governance frameworks with business " +
            "goals, ensuring protection supports innovation and scalability.",
          image: `/${valueImg}/enable.svg`,
        },
      ]
    }
  ];

  // TimeLine
  // Our Structured Approach to Risk & Governance Excellence
  export const stepsDataRiskManagement: TimeLineData[] = [
    {
      titleParts: [
        "Our Structured Approach to ",
        { text: "Risk & Governance Excellence", bold: true }
      ],
      timeLineItems: [
        {
          title: "Governance Assessment",
          description:
            "Evaluate current policies, roles, decision structures and overall security maturity.",
        },
        {
          title: "Risk Identification & Classification",
          description:
            "Identify assets, threats, vulnerabilities and business impacts across the organization.",
        },
        {
          title: "Risk Analysis & Prioritization",
          description:
            "Quantify and rank risks using industry frameworks and business impact analysis.",
        },
        {
          title: "Policy & Control Framework Design",
          description:
            "Develop security policies, standards and controls aligned with ISO, NIST and regulatory requirements.",
        },
        {
          title: "Compliance Mapping & Readiness",
          description:
            "Map controls to regulatory frameworks and prepare for audits and assessments.",
        },
        {
          title: "Implementation & Enablement",
          description:
            "Operationalize governance through workflows, training and enforcement mechanisms.",
        },
        {
          title: "Monitoring & Reporting",
          description:
            "Track risk posture, compliance status and control effectiveness with ongoing reporting.",
        },
        {
          title: "Continuous Improvement",
          description:
            "Adapt governance and risk controls as threats, regulations and business needs evolve.",
        },
      ],
      businessOutComes: [
        { point: "Reduced Cyber and Compliance Risk" },
        { point: "Clear Security Ownership & Accountability" },
        { point: "Audit-Ready Governance Frameworks" },
        { point: "Improved Executive Visibility into Risk" },
        { point: "Security Aligned with Business Growth" }
      ]
    }
  ];

  // Empower
  // Core Risk Management & Governance Capabilities
  export const CyberRiskManagementEmpower: EmpowerData[] = [
    {
      title: "Core Risk Management & Governance Capabilities",
      items: [
        {
          title: "Cyber Risk Assessment & Management",
          description:
            "Identify, analyze and prioritize cyber risks using structured, risk-based methodologies aligned with business impact."
        },
        {
          title: "Governance Framework Design",
          description:
            "Establish roles, policies, decision models and oversight structures that align security with organizational strategy."
        },
        {
          title: "Regulatory Compliance Management",
          description:
            "Support compliance with GDPR, HIPAA, PCI DSS, ISO 27001, NIST CSF, SOC and industry-specific mandates."
        },
        {
          title: "Policy & Control Development",
          description:
            "Design and maintain security policies, procedures and control frameworks that are practical, enforceable and auditable."
        },
        {
          title: "Third-Party & Vendor Risk Management",
          description:
            "Assess and manage risks introduced by vendors, partners and supply chains."
        },
        {
          title: "Risk Monitoring & Reporting",
          description:
            "Provide dashboards, metrics and executive-level reporting for continuous risk visibility."
        },
        {
          title: "Audit & Assurance Support",
          description:
            "Prepare organizations for internal and external audits with documented controls and evidence-ready processes."
        },
        {
          title: "Security Awareness & Governance Training",
          description:
            "Enable teams and leadership to understand their roles in managing risk and maintaining compliance."
        }
      ]
    }
  ];
