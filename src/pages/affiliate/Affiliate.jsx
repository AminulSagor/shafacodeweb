import Header from "../../components/Header";
import "./Affiliate.css";
import ContactForm from "./ContactForm";

export default function Affiliate() {
  const videoId = "qrqlHdevfOc"; // replace this with your real YouTube id
  const autoplayUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&rel=0&modestbranding=1`;

  return (
    <>
      <Header />
      <main className="affiliate">
        {/* HERO */}
        <section className="hero affiliate-hero">
          <div className="container hero-content">
            <h1>Earn 4–6% by Referring Software Projects</h1>
            <p className="hero-sub">
              Share projects with ShafaCode and earn affiliate commission on
              every successful deal. We handle the work; you get a share of the
              project value.
            </p>

            <ul className="hero-metrics affiliate-metrics">
              <li>
                Commission: <strong>4–6% per project</strong>
              </li>
              <li>
                Example: <strong>৳1,00,000</strong> project →{" "}
                <strong>৳4,000 – ৳6,000</strong> commission for you
              </li>
              <li>
                Transparent process, on-time payouts, long-term partnership
              </li>
            </ul>
          </div>
        </section>

        {/* BODY */}
        <section className="affiliate-body">
          <div className="container affiliate-grid">
            {/* LEFT: VIDEO + TRANSCRIPT */}
            <div className="affiliate-left">
              <div className="affiliate-video-card">
                <h2
                  className="section-title affiliate-section-title"
                  style={{
                    textAlign: "left",
                    // paddingTop: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  See how the affiliate program works
                </h2>
                {/* <p className="affiliate-video-note">
                  The video starts automatically when you open this page, with
                  sound on.
                </p>*/}

                <div className="affiliate-video-wrapper">
                  <iframe
                    src={autoplayUrl}
                    title="ShafaCode Affiliate Program – How You Earn"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="affiliate-transcript">
                <h3>Brief Overview</h3>
                <div className="affiliate-transcript-body">
                  <p>
                    Welcome to the ShafaCode affiliate program. In this program,
                    you earn a commission whenever you refer a client who
                    confirms a project with us.
                  </p>
                  <p>
                    You can earn <strong>4–6% affiliate commission</strong>{" "}
                    based on the total project value. For example, if a client
                    signs a <strong>৳1,00,000</strong> project through your
                    reference, you can earn between <strong>৳4,000</strong> and{" "}
                    <strong>৳6,000</strong> as commission.
                  </p>
                  <p>
                    Your work is simple: connect potential clients with us,
                    share their project details, and we will handle all
                    requirements, design, development, and deployment. Once the
                    project is closed and payment is received, we calculate your
                    commission and pay you within the agreed timeframe.
                  </p>
                  <p>
                    You can refer multiple clients and build a steady side
                    income without handling any technical work yourself. Just
                    submit your details through the form on this page, and we
                    will contact you with the next steps and your affiliate
                    tracking process.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: CONTACT FORM */}
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
