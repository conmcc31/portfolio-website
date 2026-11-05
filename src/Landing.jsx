import { Link } from "react-router";

const work = [
  {
    number: "01",
    category: "FIDELITY LABS · BACKEND & DATA",
    title: "More dependable crypto pricing.",
    description:
      "Built an approximately eight-year pricing backfill and hourly updates for the top 200 crypto assets, plus a secondary provider integration to support reliability and broader coverage.",
    tags: ["TypeScript", "NestJS", "PostgreSQL", "AWS"],
  },
  {
    number: "02",
    category: "NIQ · FRONTEND & VISUALIZATION",
    title: "Making complex data useful.",
    description:
      "Built reusable Angular components and D3 visualizations that helped turn consumer research into interactive reports for global CPG clients.",
    tags: ["Angular", "D3.js", "Data visualization"],
  },
  {
    number: "03",
    category: "NIQ · PLATFORM MODERNIZATION",
    title: "Bringing a legacy product forward.",
    description:
      "Independently migrated the final approximately six legacy features into Angular, enabling retirement of the older product. Built configurable functionality that could be reused across products.",
    tags: ["Angular", "TypeScript", "Application modernization"],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Landing() {
  return (
    <>
      <section className="hero page-width" aria-labelledby="intro-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> CONOR MCCARTHY / SOFTWARE ENGINEER
          </p>
          <h1 id="intro-title">
            Thoughtful interfaces.
            <br />
            Dependable systems.
            <br />
            <span>End to end.</span>
          </h1>
          <p className="hero-description">
            I’m Conor, a full-stack engineer working across the interface, API,
            and data layer. I build web applications that make complex
            information useful.
          </p>
          <p className="hero-role">
            Currently Principal Software Engineer at Fidelity Labs.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#selected-work">
              Explore my work <Arrow />
            </a>
            <Link className="text-link" to="/experience">
              View experience <Arrow />
            </Link>
          </div>
        </div>
        <div
          className="engineering-panel"
          aria-label="Engineering focus: interfaces, services, and data"
        >
          <div className="panel-heading">
            <span>THE FULL PICTURE</span>
            <span aria-hidden="true">↙</span>
          </div>
          <div className="system-layer">
            <span className="layer-number">01 /</span>
            <div>
              <h2>Interface</h2>
              <p>React · Angular · TypeScript</p>
            </div>
            <span className="layer-symbol" aria-hidden="true">
              &lt;/&gt;
            </span>
          </div>
          <div className="layer-connector" aria-hidden="true">
            <span />↓
          </div>
          <div className="system-layer">
            <span className="layer-number">02 /</span>
            <div>
              <h2>Services</h2>
              <p>Node.js · NestJS · APIs</p>
            </div>
            <span className="layer-symbol" aria-hidden="true">
              {"{ }"}
            </span>
          </div>
          <div className="layer-connector" aria-hidden="true">
            <span />↓
          </div>
          <div className="system-layer">
            <span className="layer-number">03 /</span>
            <div>
              <h2>Data & infrastructure</h2>
              <p>PostgreSQL · AWS · Azure</p>
            </div>
            <span className="layer-symbol" aria-hidden="true">
              ≡
            </span>
          </div>
          <div className="panel-footnote">
            <span className="status-dot" /> BUILT TO WORK TOGETHER
          </div>
        </div>
      </section>

      <div className="career-strip page-width" aria-label="Career overview">
        <span className="eyebrow">EXPERIENCE ACROSS</span>
        <span>
          Fidelity <small>Labs</small>
        </span>
        <span>
          NIQ <small>BASES</small>
        </span>
        <span>
          IBM <small>Maximo</small>
        </span>
      </div>

      <section
        className="work-section page-width"
        id="selected-work"
        aria-labelledby="work-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED CONTRIBUTIONS</p>
            <h2 id="work-title">A few things I’ve worked on.</h2>
          </div>
          <p>
            Real product work, from the data behind the scenes to the experience
            on screen.
          </p>
        </div>
        <div className="work-grid">
          {work.map((item) => (
            <article className="work-card" key={item.number}>
              <div className="work-card-top">
                <span>{item.number}</span>
                <span aria-hidden="true">—</span>
              </div>
              <p className="eyebrow work-category">{item.category}</p>
              <h3>{item.title}</h3>
              <p className="work-description">{item.description}</p>
              <ul className="tag-list" aria-label="Technologies">
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <Link className="text-link work-more" to="/experience">
          Explore my full experience <Arrow />
        </Link>
      </section>

      <section
        className="about-preview page-width"
        aria-labelledby="about-title"
      >
        <div>
          <p className="eyebrow">A LITTLE CONTEXT</p>
          <h2 id="about-title">
            An engineer who enjoys
            <br />
            the whole problem.
          </h2>
        </div>
        <div className="about-preview-copy">
          <p>
            My career has taken me from enterprise systems at IBM to analytics
            products at NIQ and crypto infrastructure at Fidelity Labs. That
            range shapes how I approach software: understand the system, connect
            the pieces, and make it useful.
          </p>
          <p>
            Away from the keyboard, you’ll often find me skiing, hiking, or rock
            climbing.
          </p>
          <Link className="text-link" to="/about">
            More about me <Arrow />
          </Link>
        </div>
      </section>
      <section
        className="contact-section page-width"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div>
          <p className="eyebrow">GET IN TOUCH</p>
          <h2 id="contact-title">Have a role in mind? Let’s talk.</h2>
          <p className="contact-description">
            I’m interested in senior and principal full-stack engineering roles
            where I can stay hands-on building useful software.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:conmcc31@gmail.com">
            Email me <Arrow />
          </a>
          <a className="button button-secondary" href="https://github.com/conmcc31">
            GitHub <Arrow />
          </a>
        </div>
      </section>
    </>
  );
}
export default Landing;
