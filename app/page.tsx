const projects = [
  {
    title: "BankGuard AI",
    category: "AI • FinTech • Cybersecurity",
    description:
      "AI Banking Fraud and Cybersecurity Platform for transaction monitoring, fraud detection, login risk and security analytics.",
    tech: "Next.js • FastAPI • PostgreSQL • Python • Machine Learning",
  },
  {
    title: "SecureFactory Demo",
    category: "Web Development • Cybersecurity",
    description:
      "Secure business website designed for factories and SMEs with security-focused configuration and responsive design.",
    tech: "Next.js • TypeScript • Web Security",
  },
  {
    title: "Business Dashboard",
    category: "Programming • Automation",
    description:
      "Business dashboard that transforms operational data into clear reports and reduces repetitive manual work.",
    tech: "Python • SQL • Dashboard • Automation",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div className="logo">DEV.SEC</div>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">WEB DEVELOPMENT • PROGRAMMING • CYBERSECURITY</p>

        <h1>
          Building secure
          <br />
          digital solutions.
        </h1>

        <p className="heroText">
          Fourth-year student and developer focused on building secure websites,
          business systems, automation and cybersecurity solutions.
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
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript, TypeScript, React and Next.js</p>
          </div>

          <div className="card">
            <h3>Backend</h3>
            <p>Python, FastAPI, REST API, PostgreSQL and SQL</p>
          </div>

          <div className="card">
            <h3>Cybersecurity</h3>
            <p>
              Web Security, Vulnerability Assessment, Security Configuration
              and Authentication Security
            </p>
          </div>

          <div className="card">
            <h3>Automation</h3>
            <p>
              Python automation, data processing, Excel/CSV automation and
              business workflows
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="sectionNumber">03 / PROJECTS</p>

        <h2>Selected Projects</h2>

        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <span>{project.category}</span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <small>{project.tech}</small>
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

        <h2>Let's work together.</h2>

        <p>
          Available for freelance projects, internships and collaboration.
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
        </div>
      </section>

      <footer>
        <p>© 2026 Bob Sosamphanxay</p>

        <p>Web Developer • Programmer • Cybersecurity</p>
      </footer>
    </main>
  );
}