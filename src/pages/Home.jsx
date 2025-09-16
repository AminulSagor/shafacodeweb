import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="container hero-content">
            <h1 id="hero-heading">Empowering Innovation with Transparent Code</h1>

            <p className="hero-sub">
              At <strong>ShafaCode</strong>, we believe in the <em>Win-Win Paradigm</em> —
              your success fuels our success. We build with <strong>full transparency</strong>,
              so every milestone and decision is clear and accountable.
              Backed by a <strong>proactive work culture</strong>, we anticipate challenges,
              innovate ahead of time, and deliver solutions that grow with you.
            </p>

            <div className="hero-cta">
              <a
                href="https://wa.me/8801234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="Chat with ShafaCode on WhatsApp"
              >
                Let’s Build Together
              </a>
            </div>

            <ul className="hero-metrics" aria-label="Company highlights">
              <li><strong>3</strong> projects ongoing</li>
              <li><strong>1</strong> project delivered</li>
              <li><strong>5★</strong> client satisfaction</li>
            </ul>
          </div>
        </section>



        {/* Logos / Social Proof (optional placeholders) */}
        <section className="logos" aria-label="Featured clients and partners">
          <div className="container logos-row">
            <span className="logo-pill">Flutter</span>
            <span className="logo-pill">Firebase</span>
            <span className="logo-pill">Google Play</span>
            <span className="logo-pill">Website</span>
            <span className="logo-pill">ESP32</span>
            <span className="logo-pill">Raspberry Pi</span>
          </div>
        </section>

        {/* Portfolio */}
        {/* Portfolio */}
        <section id="portfolio" className="portfolio" aria-labelledby="portfolio-title">
          <div className="container">
            <h2 id="portfolio-title" className="section-title">Our Portfolio</h2>

            <div className="portfolio-grid">
              {/* Delivered Project */}
              <article className="portfolio-card highlight">
                <h3>Chorki – Allen Swapon Web Game</h3>
                <p className="description">
                  Delivered an interactive web-based game inspired by the popular Chorki series <em>Allen Swapon</em>.
                  Focused on immersive storytelling, gamification, and seamless cross-device play.
                </p>
                <p className="client-contact">
                  <strong>Client:</strong> Chorki<br />
                  <strong>Status:</strong> ✅ Delivered<br />
                  <strong>Contact:</strong> <a href="mailto:shaikh.dine@chorki.com">shaikh.dine@chorki.com</a>
                </p>
              </article>

              {/* Ongoing Project 1 */}
              <article className="portfolio-card">
                <h3>Tri Gardening – Website UI/UX</h3>
                <p className="description">
                  Redesigning the Tri Gardening website with a modern, responsive, and conversion-focused
                  UI/UX to improve customer journey and online sales.
                </p>
                <p className="client-contact">
                  <strong>Client:</strong> Tri Gardening<br />
                  <strong>Status:</strong> 🚧 Ongoing<br />
                  <strong>Contact:</strong> <a href="https://www.facebook.com/gardening.tri">Tri Gardening Facebook page</a>
                </p>
              </article>

              {/* Ongoing Project 2 */}
              <article className="portfolio-card">
                <h3>Meghswar Courier – UI/UX Design</h3>
                <p className="description">
                  Crafting a sleek, user-friendly courier service interface for
                  <a href="https://meghswarcourier.com/" target="_blank" rel="noopener noreferrer">
                    MeghswarCourier
                  </a>,
                  focusing on easy parcel booking, tracking, and smooth user flow.
                </p>
                <p className="client-contact">
                  <strong>Client:</strong> Meghswar Courier<br />
                  <strong>Status:</strong> 🚧 Ongoing<br />
                  <strong>Contact:</strong> <a href="mailto:meghswarcourier@gmail.com">meghswarcourier@gmail.com</a>
                </p>
              </article>

              {/* Ongoing Project 3 */}
              <article className="portfolio-card">
                <h3>Meghswar Courier – Backend Development</h3>
                <p className="description">
                  Developing a robust backend system for
                  <a href="https://meghswarcourier.com/" target="_blank" rel="noopener noreferrer">
                    MeghswarCourier
                  </a>,
                  including APIs for parcel management, user authentication, and real-time notifications.
                </p>
                <p className="client-contact">
                  <strong>Client:</strong> Meghswar Courier<br />
                  <strong>Status:</strong> 🚧 Ongoing<br />
                  <strong>Contact:</strong> <a href="mailto:meghswarcourier@gmail.com">meghswarcourier@gmail.com</a>
                </p>
              </article>
            </div>
          </div>
        </section>




        {/* Services */}
        <section id="services" className="features" aria-labelledby="services-title">
          <div className="container">
            <h2 id="services-title" className="section-title">What We Offer</h2>

            <div className="features-grid">
              <article className="feature-card">
                <h3>Custom Software</h3>
                <p>Tailor-made applications built for your business — fast, secure, and scalable.</p>
              </article>

              <article className="feature-card">
                <h3>SaaS Development</h3>
                <p>From subscription billing to multi-tenant platforms, we build full SaaS stacks.</p>
              </article>

              <article className="feature-card">
                <h3>Android Apps</h3>
                <p>Flutter or native (Kotlin/Java) with Firebase or REST — optimized and shipped to Google Play.</p>
              </article>

              <article className="feature-card">
                <h3>Web Applications</h3>
                <p>Modern, accessible SPAs with React/Next.js + robust CI/CD and observability.</p>
              </article>

              <article className="feature-card">
                <h3>WordPress Solutions</h3>
                <p>Custom themes, plugins, and integrations for high-performance content & commerce.</p>
              </article>

              <article className="feature-card">
                <h3>UI/UX & Branding</h3>
                <p>Figma prototypes, design systems, and brand kits that convert and scale.</p>
              </article>

              <article className="feature-card highlight">
                <h3>IoT & Embedded Systems</h3>
                <p>
                  End-to-end IoT: firmware (Arduino/ESP32), gateways (Raspberry Pi), MQTT/HTTP ingestion.
                </p>

              </article>
            </div>
          </div>
        </section>



        {/* Why Us */}
        <section id="why-us" className="why-us" aria-labelledby="why-title">
          <div className="container">
            <h2 id="why-title" className="section-title">Why Choose ShafaCode?</h2>
            <ul className="why-list">
              <li>🔐 Transparent development from planning to delivery</li>
              <li>🚀 Cloud-native architecture that scales with your users</li>
              <li>🧠 Product-minded engineers & designers</li>
              <li>📱 Deep expertise across mobile, web & backend</li>
              <li>🌐 SEO, performance & accessibility best practices</li>
              <li>⚡ <strong>Proactive work culture</strong> — anticipating challenges before they arise</li>
              <li>🤝 <strong>Win-Win Paradigm</strong> — your growth is our growth</li>
              <li>🧭 <strong>Ethical practices</strong> in every engagement</li>
              <li>🪴 <strong>Stewardship delegation</strong> — empowering ownership and responsibility</li>
              <li>✨ <strong>Radical transparency</strong> in communication and delivery</li>
            </ul>
          </div>
        </section>


        {/* ...above sections... */}

        <section id="contact" className="contact" aria-labelledby="contact-title">
          <div className="container contact-inner">
            <h2 id="contact-title" className="section-title">Contact</h2>

            <div className="contact-grid">
              {/* Contact Info */}
              <div className="contact-info">

                <p>
                  <strong>Email:</strong>
                  <a href="mailto:aminulislamsagor@shafacode.com"> aminulislamsagor@shafacode.com</a>
                </p>
                <p>
                  <strong>WhatsApp:</strong>
                  <a href="https://wa.me/8801540233587" target="_blank" rel="noopener noreferrer"> Chat on WhatsApp
                  </a>
                </p>
                <p>
                  <strong>LinkedIn:</strong>
                  <a href="https://www.linkedin.com/company/108744292" target="_blank" rel="noopener noreferrer"> Linkedin
                  </a>
                </p>
                <p>
                  <strong>Facebook:</strong>
                  <a
                    href="https://web.facebook.com/profile.php?id=61580938442647"
                    target="_blank"
                    rel="noopener noreferrer"
                  > Facebook
                  </a>
                </p>

                <p className="contact-note">
                  📍 We don’t have a physical office right now, but our team members are located across major cities.
                  We can arrange project meetings almost anywhere that’s convenient for you.
                </p>
              </div>

              {/* Contact Form */}
              {/* Contact Form */}
              <form
                className="contact-form"
                aria-label="Contact form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const name = form.name.value.trim();
                  const message = form.message.value.trim();

                  if (!name || !message) return;

                  try {
                    const res = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ name, message }),
                    });
                    const data = await res.json();
                    alert(data.ok ? "Thanks! We’ll contact you shortly." : "Failed to send. Please try again.");
                    if (data.ok) form.reset();
                  } catch {
                    alert("Network error. Please try again.");
                  }
                }}
              >
                {/* Honeypot: hidden anti-bot field */}
                <input
                  type="text"
                  name="company"
                  autoComplete="off"
                  tabIndex="-1"
                  style={{ display: "none" }}
                />

                <label>
                  Name
                  <input type="text" name="name" placeholder="Your name" required />
                </label>

                <label>
                  Message
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us about your project..."
                    required
                  />
                </label>

                <button className="btn btn-primary" type="submit">
                  Send Message
                </button>
              </form>

            </div>
          </div>
        </section>


        {/* CTA band or Footer below */}


        {/* CTA Band */}
        <section className="cta-band" aria-labelledby="cta-title">
          <div className="container cta-band-inner">
            <h2 id="cta-title">Have an idea? Let’s build it—beautifully and reliably.</h2>
            <a
              href="https://wa.me/8801540233587"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="Chat with ShafaCode on WhatsApp"
            >
              Start a Project
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
