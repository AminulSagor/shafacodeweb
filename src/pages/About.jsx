import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="about-hero" aria-labelledby="about-heading">
          <div className="container">
            <h1 id="about-heading">About ShafaCode</h1>
            <p className="about-sub">
              We build transparent, reliable software that powers businesses—web, mobile, SaaS, and IoT.
              Our promise is simple: ship fast, scale smoothly, and keep you in the loop.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mv" aria-labelledby="mv-heading">
          <div className="container mv-grid">
            <article className="mv-card">
              <h2 id="mv-heading" className="section-title sr-only">Mission & Vision</h2>
              <h3>Our Mission</h3>
              <p>
                Empower teams with transparent engineering and product thinking—delivering
                scalable, secure software with clear communication and measurable outcomes.
              </p>
            </article>
            <article className="mv-card">
              <h3>Our Vision</h3>
              <p>
                A world where great software is built openly—where clients see progress in real-time
                and users feel the impact through speed, reliability, and design.
              </p>
            </article>
          </div>
        </section>

        {/* Core Values */}
        <section className="values" aria-labelledby="values-title">
          <div className="container">
            <h2 id="values-title" className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Transparency</h3>
                <p>Open roadmaps, frequent demos, and honest timelines—no black boxes.</p>
              </div>
              <div className="value-card">
                <h3>Craft</h3>
                <p>Clean code, thoughtful UX, and testing that earns trust in production.</p>
              </div>
              <div className="value-card">
                <h3>Velocity</h3>
                <p>Short feedback loops, CI/CD, and incremental releases that de-risk delivery.</p>
              </div>
              <div className="value-card">
                <h3>Reliability</h3>
                <p>Monitoring, alerting, and SLAs—because uptime and data integrity matter.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Story / Timeline */}
        <section className="story" aria-labelledby="story-title">
          <div className="container">
            <h2 id="story-title" className="section-title">Our Story</h2>
            <ol className="timeline" aria-label="Company milestones">
              <li>
                <span className="time">2023</span>
                <div className="event">
                  <h4>Founding</h4>
                  <p>ShafaCode started with a principle: transparent code and measurable outcomes.</p>
                </div>
              </li>
              <li>
                <span className="time">2024</span>
                <div className="event">
                  <h4>First SaaS Launch</h4>
                  <p>Shipped our first multi-tenant SaaS with 99.9% uptime and automated billing.</p>
                </div>
              </li>
              <li>
                <span className="time">2025</span>
                <div className="event">
                  <h4>IoT Expansion</h4>
                  <p>Built device firmware + cloud dashboards for real-time telemetry and alerts.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Team */}
        <section className="team" aria-labelledby="team-title">
          <div className="container">
            <h2 id="team-title" className="section-title">Team & Leadership</h2>
            <p className="team-sub">
              A small, senior team of product-minded engineers, designers, and DevOps specialists.
            </p>

            <div className="team-grid">
              {/* Replace placeholders with real images/names/roles */}
              <article className="member">
                <div className="avatar" aria-hidden="true">SC</div>
                <h3 className="name">Aminul Islam Sagor</h3>
                <p className="role">Founder • Full-Stack & Mobile</p>
              </article>

              <article className="member">
                <div className="avatar" aria-hidden="true">UX</div>
                <h3 className="name">Lead Designer</h3>
                <p className="role">UI/UX & Design Systems</p>
              </article>

              <article className="member">
                <div className="avatar" aria-hidden="true">DV</div>
                <h3 className="name">DevOps Engineer</h3>
                <p className="role">Cloud • CI/CD • Observability</p>
              </article>

              <article className="member">
                <div className="avatar" aria-hidden="true">IOT</div>
                <h3 className="name">IoT Specialist</h3>
                <p className="role">Firmware • MQTT • Edge</p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta" aria-labelledby="about-cta-title">
          <div className="container about-cta-inner">
            <h2 id="about-cta-title">Let’s build something transparent—and powerful.</h2>
            <Link to="/contact" className="btn btn-primary">Talk to Us</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
