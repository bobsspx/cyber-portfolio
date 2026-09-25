import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SecureFactory Case Study",

  description:
    "SecureFactory v1.0.0 case study covering JWT authentication, RBAC, session revocation, PostgreSQL audit logging, rate limiting, production management and application security.",

  openGraph: {
    title:
      "SecureFactory v1.0.0 — Application Security Case Study",

    description:
      "A security-focused industrial operations platform demonstrating secure full-stack development and application security.",

    type: "article",
  },
};

export default function SecureFactoryCaseStudy() {
  const securityFeatures = [
    {
      title: "Authentication",
      description:
        "JWT authentication with bcrypt password hashing, HttpOnly secure cookies, issuer/audience validation and server-side session verification.",
    },
    {
      title: "Role-Based Access Control",
      description:
        "Admin, Operator and Viewer permissions are enforced by protected server-side APIs rather than UI visibility alone.",
    },
    {
      title: "Session Revocation",
      description:
        "Database-backed session versioning invalidates existing sessions after account disablement or role changes.",
    },
    {
      title: "Login Protection",
      description:
        "Persistent PostgreSQL rate limiting uses HMAC-SHA256 identifiers instead of raw email and IP combinations.",
    },
    {
      title: "Audit Logging",
      description:
        "Authentication, authorization, user-management and production events are recorded with masked identity and IP data.",
    },
    {
      title: "Production Security",
      description:
        "Production writes require server-side permissions, application validation, parameterized SQL and database constraints.",
    },
  ];

  return (
    <main className="caseStudyPage">
      <nav className="caseStudyNav">
        <Link href="/" className="caseBackLink">
          ← Bob / DEV
        </Link>

        <div className="caseNavLinks">
          <a
            href="https://github.com/bobsspx/securefactory-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://securefactory-demo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo ↗
          </a>
        </div>
      </nav>

      <section className="caseHero">
        <div className="caseBadges">
          <span>FEATURED PROJECT</span>
          <span className="caseRelease">
            v1.0.0 • PRODUCTION DEPLOYED
          </span>
        </div>

        <p className="caseEyebrow">
          APPLICATION SECURITY • SECURE FULL-STACK DEVELOPMENT
        </p>

        <h1>SecureFactory</h1>

        <p className="caseLead">
          A security-focused industrial operations platform designed to
          demonstrate secure authentication, server-side authorization,
          auditability, production data management and defensive web
          security in a real full-stack application.
        </p>

        <div className="caseActions">
          <a
            className="primaryButton"
            href="https://securefactory-demo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Live Demo ↗
          </a>

          <a
            className="secondaryButton"
            href="https://github.com/bobsspx/securefactory-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub ↗
          </a>
        </div>
      </section>

      <section className="caseMetrics">
        <article>
          <strong>45 / 45</strong>
          <span>Automated tests passed</span>
        </article>

        <article>
          <strong>0</strong>
          <span>Known npm vulnerabilities at v1.0 audit</span>
        </article>

        <article>
          <strong>3</strong>
          <span>Application roles</span>
        </article>

        <article>
          <strong>v1.0.0</strong>
          <span>Production release</span>
        </article>
      </section>

      <section className="caseSection caseTwoColumns">
        <div>
          <p className="caseSectionNumber">
            01 / THE PROBLEM
          </p>

          <h2>
            Operational access without losing security.
          </h2>
        </div>

        <div className="caseBody">
          <p>
            Industrial and business applications often expose operational
            information to users with very different responsibilities.
            Simply hiding administrative controls in the interface is not
            sufficient protection.
          </p>

          <p>
            SecureFactory was designed to demonstrate how authentication,
            authorization, production data and security monitoring can be
            integrated into one application with security enforced at the
            server boundary.
          </p>
        </div>
      </section>

      <section className="caseSection">
        <p className="caseSectionNumber">
          02 / SOLUTION
        </p>

        <h2>Defense in depth.</h2>

        <div className="securityFeatureGrid">
          {securityFeatures.map((feature) => (
            <article
              className="securityFeatureCard"
              key={feature.title}
            >
              <span>SECURITY CONTROL</span>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="caseSection">
        <p className="caseSectionNumber">
          03 / AUTHORIZATION
        </p>

        <h2>Three roles. Server-side enforcement.</h2>

        <div className="roleMatrix">
          <div className="roleHeader">
            <span>CAPABILITY</span>
            <span>ADMIN</span>
            <span>OPERATOR</span>
            <span>VIEWER</span>
          </div>

          {[
            ["View dashboard", "✓", "✓", "✓"],
            ["View production", "✓", "✓", "✓"],
            ["Write production", "✓", "✓", "—"],
            ["View security", "✓", "✓", "—"],
            ["View audit logs", "✓", "—", "—"],
            ["Manage users", "✓", "—", "—"],
          ].map((row) => (
            <div className="roleRow" key={row[0]}>
              {row.map((cell, index) => (
                <span
                  key={`${row[0]}-${index}`}
                  className={
                    cell === "✓"
                      ? "roleAllowed"
                      : cell === "—"
                        ? "roleDenied"
                        : ""
                  }
                >
                  {cell}
                </span>
              ))}
            </div>
          ))}
        </div>

        <p className="caseNote">
          Viewer accounts can read production records but direct write
          requests are rejected with HTTP 403 and recorded as
          AUTHORIZATION_DENIED events.
        </p>
      </section>

      <section className="caseSection">
        <p className="caseSectionNumber">
          04 / ARCHITECTURE
        </p>

        <h2>Secure request flow.</h2>

        <div className="architectureFlow">
          <div>
            <span>01</span>
            <strong>Browser</strong>
            <p>HTTPS + secure cookies</p>
          </div>

          <b>→</b>

          <div>
            <span>02</span>
            <strong>Next.js</strong>
            <p>UI + Route Handlers</p>
          </div>

          <b>→</b>

          <div>
            <span>03</span>
            <strong>Authorization</strong>
            <p>JWT + RBAC + validation</p>
          </div>

          <b>→</b>

          <div>
            <span>04</span>
            <strong>PostgreSQL</strong>
            <p>Neon persistence</p>
          </div>
        </div>

        <div className="architectureDetails">
          <article>
            <span>SESSION</span>
            <h3>JWT + Database State</h3>
            <p>
              Protected requests validate both signed session claims and
              the current database user state.
            </p>
          </article>

          <article>
            <span>DATA</span>
            <h3>PostgreSQL Source of Truth</h3>
            <p>
              Users, rate limits, audit events and production records are
              persisted in PostgreSQL.
            </p>
          </article>

          <article>
            <span>SECURITY</span>
            <h3>Authorization Boundary</h3>
            <p>
              Authentication does not automatically grant permission.
              Every protected action performs server-side authorization.
            </p>
          </article>
        </div>
      </section>

      <section className="caseSection caseTwoColumns">
        <div>
          <p className="caseSectionNumber">
            05 / PRODUCTION MODULE
          </p>

          <h2>Real operational data.</h2>
        </div>

        <div className="caseBody">
          <p>
            Admin and Operator accounts can create and update production
            records while Viewer accounts receive read-only access.
          </p>

          <p>
            Dashboard values are calculated from PostgreSQL rather than
            hard-coded values, including produced units, efficiency,
            active production lines and reject rate.
          </p>

          <div className="caseMiniGrid">
            <span>Input validation</span>
            <span>Database constraints</span>
            <span>Parameterized SQL</span>
            <span>Audit events</span>
          </div>
        </div>
      </section>

      <section className="caseSection">
        <p className="caseSectionNumber">
          06 / SECURITY HARDENING
        </p>

        <h2>Production security controls.</h2>

        <div className="hardeningList">
          {[
            "Content Security Policy",
            "HTTP Strict Transport Security",
            "Clickjacking protection",
            "MIME sniffing protection",
            "Referrer Policy",
            "Permissions Policy",
            "Same-origin write protection",
            "Secure environment validation",
            "Admin/API no-index headers",
          ].map((item) => (
            <div key={item}>
              <span>✓</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="caseSection">
        <p className="caseSectionNumber">
          07 / VERIFICATION
        </p>

        <h2>Tested before release.</h2>

        <div className="verificationGrid">
          <article>
            <strong>45</strong>
            <p>
              Automated tests covering authentication, RBAC, session
              validation, rate limiting, production logic and audit
              logging.
            </p>
          </article>

          <article>
            <strong>0</strong>
            <p>
              Known npm vulnerabilities reported during the v1.0
              dependency audit.
            </p>
          </article>

          <article>
            <strong>401 / 403</strong>
            <p>
              Authentication and authorization boundaries manually
              verified in production.
            </p>
          </article>
        </div>
      </section>

      <section className="caseSection">
        <p className="caseSectionNumber">
          08 / TECHNOLOGY
        </p>

        <h2>Technology stack.</h2>

        <div className="technologyTags">
          {[
            "Next.js 16",
            "React",
            "TypeScript",
            "PostgreSQL",
            "Neon",
            "JWT",
            "JOSE",
            "bcrypt",
            "Vitest",
            "Vercel",
            "GitHub",
          ].map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </section>

      <section className="caseFinal">
        <p className="caseSectionNumber">
          SECUREFACTORY / v1.0.0
        </p>

        <h2>
          From industrial website to secure full-stack application.
        </h2>

        <p>
          SecureFactory demonstrates how application security,
          backend engineering, database design and production
          deployment can be combined in one practical portfolio project.
        </p>

        <div className="caseActions">
          <a
            className="primaryButton"
            href="https://securefactory-demo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo ↗
          </a>

          <a
            className="secondaryButton"
            href="https://github.com/bobsspx/securefactory-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code ↗
          </a>

          <Link
            className="secondaryButton"
            href="/"
          >
            Back to Portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}