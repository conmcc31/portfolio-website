import { experience } from "./data/experience";
import ResumeLink from "./components/ResumeLink";

function Experience() {
  return (
    <div className="experience-page page-width">
      <section className="experience-intro" aria-labelledby="experience-title">
        <div>
          <p className="eyebrow">PROFESSIONAL EXPERIENCE / 2019–PRESENT</p>
          <h1 id="experience-title" className="page-header">Full-stack work.<br /><span>Systems perspective.</span></h1>
          <p className="experience-lede">
            From enterprise systems to analytics products and digital-asset APIs,
            I’ve worked across the stack to build features, modernize applications,
            and connect complex data with useful interfaces.
          </p>
          <ResumeLink />
        </div>
        <aside className="experience-index" aria-label="Jump to employer">
          <p className="eyebrow">THE PATH SO FAR</p>
          <a href="#fidelity"><span>2026 — Present</span>Fidelity Labs <span aria-hidden="true">↓</span></a>
          <a href="#niq"><span>2022 — 2026</span>NIQ <span aria-hidden="true">↓</span></a>
          <a href="#ibm-engineer"><span>2019 — 2022</span>IBM <span aria-hidden="true">↓</span></a>
        </aside>
      </section>

      <section className="experience-history" aria-label="Employment history">
        {experience.map((job) => (
          <article className="experience-entry" id={job.id} key={job.id} aria-labelledby={`${job.id}-title`}>
            <div className="experience-meta">
              <p className="eyebrow">{job.start} — {job.end}</p>
              <p className="experience-company">{job.company}</p>
              <p className="experience-product">{job.product}</p>
            </div>
            <div className="experience-detail">
              <h2 id={`${job.id}-title`}>{job.role}</h2>
              <p className="experience-summary">{job.summary}</p>
              <ul className="contribution-list">
                {job.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
              </ul>
              <ul className="tag-list" aria-label={`${job.company} technologies`}>
                {job.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Experience;
