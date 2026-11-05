function ResumeLink({ className = "text-link" }) {
  return (
    <a
      className={className}
      href="/resume/conor-mccarthy-resume.pdf"
      download="Conor-McCarthy-Resume.pdf"
    >
      Download résumé <span aria-hidden="true">↓</span>
    </a>
  );
}

export default ResumeLink;
