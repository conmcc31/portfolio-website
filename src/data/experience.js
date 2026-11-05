export const experience = [
  {
    id: "fidelity",
    company: "Fidelity Investments",
    product: "Labs · Digital-asset platform",
    role: "Principal Software Engineer",
    start: "February 2026",
    end: "Present",
    summary:
      "Building an early-stage B2B platform for crypto asset aggregation, wallet and account tracking, compliance, and financial planning.",
    contributions: [
      "Designed and implemented historical pricing ingestion, storage, and internal APIs using TypeScript, NestJS, Prisma, and PostgreSQL.",
      "Built an approximately eight-year historical backfill and hourly price-bar updates for the top 200 crypto assets, with allowlisting for additional assets.",
      "Designed and implemented CoinGecko as a secondary pricing provider to broaden coverage and support pricing reliability.",
      "Worked across database models and migrations, Aurora PostgreSQL, ECS/CDK deployment, IAM database authentication, and Datadog and APIDog configuration.",
      "Contributed React/Vite dashboard features for viewing digital-asset holdings and supporting compliance-oriented portfolio review.",
      "Piloted specification-driven, AI-assisted development: translated business logic, architecture, and API contracts into detailed implementation specifications, with engineering review and direction.",
    ],
    technologies: ["TypeScript", "React", "NestJS", "Prisma", "PostgreSQL", "AWS", "ECS / CDK"],
  },
  {
    id: "niq",
    company: "NIQ (NielsenIQ)",
    product: "BASES · Consumer research & analytics",
    role: "Software Engineer",
    start: "April 2022",
    end: "February 2026",
    summary:
      "Developed full-stack features for consumer research, product testing, and survey analytics used by global consumer packaged goods customers.",
    contributions: [
      "Independently migrated the final approximately six features from a legacy application into Angular, enabling the team to sunset the legacy product.",
      "Built reusable Angular components and configurable, product-agnostic features, reducing hard-coded boundaries and supporting reuse across products.",
      "Created interactive D3.js visualizations and reporting experiences to help users explore consumer research results.",
      "Modernized Groovy/Spring Boot APIs and optimized complex data access across MongoDB and Microsoft SQL Server.",
      "Supported SaaS microservice migration to Azure, including Docker containerization and CI/CD configuration for automated deployments.",
      "Delivered features and resolved production issues with product, QA, and engineering colleagues across the US, Portugal, and India.",
    ],
    technologies: ["Angular", "TypeScript", "D3.js", "Groovy", "Spring Boot", "MongoDB", "SQL Server", "Azure", "Docker"],
  },
  {
    id: "ibm-engineer",
    company: "IBM",
    product: "Maximo · Enterprise asset management",
    role: "Systems Engineer",
    start: "June 2020",
    end: "April 2022",
    summary:
      "Investigated enterprise application and integration issues, connecting customer environments with product engineering.",
    contributions: [
      "Diagnosed complex application, data, configuration, and integration issues affecting IBM Maximo customers.",
      "Partnered with product engineers to reproduce critical bugs, trace application behavior, and identify code-level patch requirements.",
      "Automated repeatable support and data-repair tasks using SQL and shell scripting, and documented investigation and resolution workflows.",
      "Supported private-sector, government, and defense environments with stringent data-handling requirements.",
    ],
    technologies: ["SQL", "Shell scripting", "Db2", "Oracle", "WebSphere", "OpenShift", "Kafka"],
  },
  {
    id: "ibm-admin",
    company: "IBM",
    product: "Maximo · Test & deployment environments",
    role: "Systems Administrator",
    start: "June 2019",
    end: "June 2020",
    summary:
      "Built the systems foundation for multiple Maximo teams through database work, virtualization, and controlled deployments.",
    contributions: [
      "Wrote and tuned complex SQL across enterprise Db2 and Oracle schemas containing hundreds of tables.",
      "Provisioned and maintained virtualized test environments, using standardized VM templates to streamline cross-platform setup.",
      "Customized Maximo builds for customer requirements and deployed them through controlled test and production environments.",
    ],
    technologies: ["Db2", "Oracle", "SQL Server", "VMware", "Linux", "Windows"],
  },
];
