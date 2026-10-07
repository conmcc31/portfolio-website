function Experience() {
  return (
    <div className="px-12 py-10">
      <h1 className="page-header">Experience</h1>
      <div className="mt-10 flex flex-col">
        <h2 className="text-3xl font-bold">Principal Software Engineer</h2>
        <h3 className="text-xl">Fidelity Investments | Labs</h3>
        <h3 className="text-xl">February 2026 - Present</h3>
        <ul className="list-disc">
          <li>
            Build backend APIs and data-layer functionality with TypeScript,
            NestJS, Prisma, and PostgreSQL, supported by AWS cloud services and
            deployment workflows.
          </li>
          <li>
            Led delivery of a historical pricing API endpoint for the top 200
            crypto assets, including work shaping, task breakdown, and timeline
            planning.
          </li>
          <li>
            Led design and implementation of a secondary CoinGecko pricing
            integration, improving pricing reliability and supporting broader
            crypto asset coverage.
          </li>
          <li>
            Serve as a Principal Engineer on a B2B crypto asset connectivity
            platform supporting wallet/account tracking, compliance, financial
            planning, and asset verification.
          </li>
          <li>
            Collaborate within Fidelity Labs on an early-stage product with
            active clients, balancing product development with enterprise
            engineering standards.
          </li>
          <li>
            Contributed to React dashboard features that give account managers a
            centralized view of member crypto holdings and investment data.
          </li>
        </ul>
      </div>
      <div className="mt-10 flex flex-col">
        <h2 className="text-3xl font-bold">Software Engineer</h2>
        <h3 className="text-xl">NielsenIQ (NIQ) | BASES Platform</h3>
        <h3 className="text-xl">April 2022 - February 2026</h3>
        <ul className="list-disc">
          <li>
            Modernized legacy Groovy-based backend APIs and optimized query
            logic in MongoDB and SQL Server.
          </li>
          <li>
            Supported the cloud migration of multiple microservices to Microsoft
            Azure, including Dockerization and CI/CD setup for automated
            deployments.
          </li>
          <li>
            Led development of new deliverables that translate consumer trial
            and survey data into actionable insights used by global CPG clients.
          </li>
          <li>
            Collaborated with global, cross-functional teams in the US,
            Portugal, and India in an Agile environment, supporting concurrent
            feature releases.
          </li>
          <li>
            Managed feature and defect lifecycles in Jira, coordinating with
            product owners and QA to prioritize and deliver enhancements on
            schedule.
          </li>
          <li>
            Engineered reusable Angular components and D3-powered data
            visualizations to improve report interactivity and UX consistency
            across the platform.
          </li>
          <li>
            Drove UI/UX modernization initiatives to align legacy Ember modules
            with new Angular front-end architecture.
          </li>
        </ul>
      </div>
      <div className="mt-10 flex flex-col">
        <h2 className="text-3xl font-bold">Systems Engineer</h2>
        <h3 className="text-xl">IBM Mass Lab | Maximo</h3>
        <h3 className="text-xl">June 2020 - April 2022</h3>
        <ul className="list-disc">
          <li>
            Diagnosed and resolved complex configuration and integration issues
            for enterprise clients running IBM Maximo.
          </li>
          <li>
            Tracked and resolved production incidents via Salesforce Service
            Cloud, maintaining accurate documentation and timely client
            communication.
          </li>
          <li>
            Partnered with product engineering to reproduce critical client bugs
            and identify code-level patch requirements.
          </li>
          <li>
            Automated recurring support and data-repair workflows using SQL and
            shell scripting, cutting issue resolution times.
          </li>
          <li>
            Authored internal and client-facing documentation improving
            knowledge transfer and product reliability.
          </li>
          <li>
            Supported sensitive client environments across private, government,
            and defence sectors with strict data-handling standards.
          </li>
        </ul>
      </div>
      <div className="mt-10 flex flex-col">
        <h2 className="text-3xl font-bold">Systems Administrator</h2>
        <h3 className="text-xl">IBM Mass Lab | Maximo</h3>
        <h3 className="text-xl">June 2019 - June 2020</h3>
        <ul className="list-disc">
          <li>
            Built and maintained virtual environments supporting multiple Maximo
            product teams.
          </li>
          <li>
            Developed and tuned SQL queries across large DB2 and Oracle schemas
            containing hundreds of tables.
          </li>
          <li>
            Customized Maximo builds per client specifications and deployed
            through controlled test and production environments.
          </li>
          <li>
            Streamlined server provisioning by introducing standardized VM
            templates for multi-platform testing.
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Experience;
