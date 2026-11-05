function AboutMe() {
  return (
    <div className="about-page page-width">
      <section aria-labelledby="about-page-title">
        <p className="eyebrow">ABOUT ME</p>
        <h1 id="about-page-title" className="page-header">Curiosity across the stack.</h1>
        <div className="about-body">
          <p>I’m Conor McCarthy, a full-stack software engineer based in Massachusetts, currently working as a Principal Software Engineer at Fidelity Labs.</p>
          <p>I enjoy hands-on engineering across the whole application: building React and Angular interfaces, designing backend APIs, modeling data, and working through deployment and production issues. My experience at IBM, NIQ, and Fidelity has given me a perspective that spans enterprise systems, consumer analytics, and digital-asset platforms.</p>
          <p>Recently, I’ve also been exploring how clear specifications can make AI-assisted development more useful. At Fidelity, I piloted a workflow that connects business requirements and architecture to detailed implementation specifications, with engineering review throughout.</p>
          <p>Outside of software, I enjoy skiing, hiking, and rock climbing.</p>
        </div>
      </section>
      <section className="education-section" aria-labelledby="education-title">
        <p className="eyebrow">EDUCATION</p>
        <h2 id="education-title">Worcester State University</h2>
        <p>Bachelor’s Degree in Computer Science</p>
        <p className="education-detail">Concentrations in Big Data Analytics and Bioinformatics. Study abroad at the National University of Ireland, Galway.</p>
      </section>
    </div>
  );
}
export default AboutMe;
