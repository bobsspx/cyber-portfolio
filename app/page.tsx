const projects = [
  {
    title: "SecureFactory",
    category: "APPLICATION SECURITY • CYBERSECURITY",
    description:
      "Security-focused industrial operations platform with server-side RBAC, JWT authentication, session revocation, persistent login rate limiting, audit logging, production management and PostgreSQL-backed metrics.",
    tech:
      "Next.js 16 • TypeScript • PostgreSQL • Neon • JWT • Vitest • Vercel",
    github:
      "https://github.com/bobsspx/securefactory-demo",
    demo:
      "https://securefactory-demo.vercel.app",
    caseStudy:
      "/projects/securefactory",

    featured: true,
    version: "v1.0.0",
    releaseStatus: "PRODUCTION DEPLOYED",

    highlights: [
      "45 automated tests",
      "0 known npm vulnerabilities at v1.0 audit",
      "RBAC + session revocation",
      "PostgreSQL audit logging",
    ],
  },

  {
    title: "BankGuard AI",
    category: "AI • FINTECH • CYBERSECURITY",
    description:
      "AI-powered banking fraud and cybersecurity platform for transaction monitoring, fraud detection, login risk analysis and security operations.",
    tech:
      "Next.js • FastAPI • PostgreSQL • Python • Machine Learning",
    github:
      "https://github.com/bobsspx/bankguard-ai",
    demo: "#",
  },

  {
    title: "Business Dashboard",
    category: "AUTOMATION • DATA",
    description:
      "Business dashboard for converting operational data into useful reports while reducing repetitive manual workflows.",
    tech:
      "Python • SQL • Data Processing • Automation",
    github:
      "https://github.com/bobsspx/business-dashboard",
    demo: "#",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div className="logo">Bob / DEV</div>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">APPLICATION SECURITY • CYBERSECURITY • SECURE FULL-STACK DEVELOPMENT</p>

        <h1>
          Building secure
          <br />
          software systems.
        </h1>

        <p className="heroText">
            I build secure web applications and backend systems with a focus on
            application security, access control, authentication and real-world
            business systems. My projects combine software engineering,
            cybersecurity, databases and production deployment.
        </p>

        <div className="buttons">
          <a className="primaryButton" href="#projects">
            View Projects
          </a>

          <a className="secondaryButton" href="#contact">
            Contact Me
          </a>
        </div>
      </section>

      <section id="about" className="section">
        <p className="sectionNumber">01 / ABOUT</p>

        <h2>About Me</h2>

        <p className="largeText">
          I am a developer interested in web development, programming and
          cybersecurity. I enjoy building secure systems that solve real
          business problems.
        </p>
      </section>

      <section id="skills" className="section">
        <p className="sectionNumber">02 / SKILLS</p>

        <h2>Technical Skills</h2>
        <div className="grid">
        <div className="card">
          <h3>Application Security</h3>
          <p>
            Authentication, RBAC, session security, rate limiting,
            audit logging, security headers and secure API design.
          </p>
        </div>

        <div className="card">
          <h3>Full-Stack Development</h3>
          <p>
            Next.js, React, TypeScript, JavaScript,
            REST APIs and responsive web applications.
          </p>
        </div>

        <div className="card">
          <h3>Backend & Database</h3>
          <p>
            Python, FastAPI, PostgreSQL, SQL,
            data validation and server-side business logic.
          </p>
        </div>

        <div className="card">
          <h3>Testing & Deployment</h3>
          <p>
            Vitest, ESLint, production builds, Git,
            GitHub, Vercel and Neon PostgreSQL.
          </p>
        </div>
      </div>
        
      </section>

      <section id="projects" className="section">
        <p className="sectionNumber">03 / PROJECTS</p>

        <h2>Selected Projects</h2>

        <div className="projectGrid">
          {projects.map((project) => (
            <article
              className={`projectCard ${
                project.featured
                  ? "featuredProject"
                  : ""
              }`}
              key={project.title}
            >
              {project.featured && (
                <div className="featuredMeta">
                  <span className="featuredBadge">
                    FEATURED PROJECT
                  </span>

                  <span className="releaseBadge">
                    {project.version} •{" "}
                    {project.releaseStatus}
                  </span>
                </div>
              )}

              <span className="projectCategory">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <small>{project.tech}</small>

              {project.highlights && (
                <div className="projectHighlights">
                  {project.highlights.map(
                    (highlight) => (
                      <span key={highlight}>
                        {highlight}
                      </span>
                    )
                  )}
                </div>
              )}

              <div className="projectLinks">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>

                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}

                {project.caseStudy && (
                  <a href={project.caseStudy}>
                    Case Study →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section">
        <p className="sectionNumber">04 / SERVICES</p>

        <h2>Services</h2>

        <div className="grid">
          <div className="card">
            <h3>Secure Business Website</h3>
            <p>
              Professional responsive websites with security-focused
              configuration.
            </p>

            <strong>Starting ฿7,500</strong>
          </div>

          <div className="card">
            <h3>Website Security Check</h3>

            <p>
              Basic website security assessment with findings and
              recommendations.
            </p>

            <strong>Starting ฿3,500</strong>
          </div>

          <div className="card">
            <h3>Dashboard & Automation</h3>

            <p>
              Reduce repetitive business tasks using dashboards and
              automation.
            </p>

            <strong>Starting ฿5,000</strong>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="sectionNumber">05 / CONTACT</p>

        <h2>Let&apos;s work together.</h2>

        <p>
            Open to internships, junior software engineering,
            application security and cybersecurity opportunities.
        </p>

        <div className="buttons">
          <a
            className="primaryButton"
            href="mailto:thvasawinter@gmail.com"
          >
            Email Me
          </a>

          <a
            className="secondaryButton"
            href="https://github.com/bobsspx"
            target="_blank"
          >
            GitHub
          </a>

          <a
            className="secondaryButton"
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Bob Sosamphanxay</p>

        <p>Application Security • Full-Stack Development • Cybersecurity</p>
      </footer>
    </main>
  );
}