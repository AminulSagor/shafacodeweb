import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Portfolio.css";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Dealzy — E-commerce App",
      description:
        "Cross-platform shopping app using Flutter & Firebase. Payment integration with Stripe. Deployed to Google Play.",
      image: "/assets/portfolio/dealzy.png",
      tags: ["Flutter", "Firebase", "Stripe"],
    },
    {
      id: 2,
      title: "Seller Loop — Admin Tool",
      description:
        "Flutter-based seller dashboard with secure login, product listing, and real-time analytics.",
      image: "/assets/portfolio/sellerloop.png",
      tags: ["Flutter", "REST API", "Cloud Functions"],
    },
    {
      id: 3,
      title: "Tri Gardening Shop",
      description:
        "Local plant shop website with custom WordPress plugin, online orders, and delivery tracking.",
      image: "/assets/portfolio/tri.png",
      tags: ["WordPress", "WooCommerce", "PHP"],
    },
    {
      id: 4,
      title: "Parcel Dash — Courier Platform",
      description:
        "React dashboard for managing parcels, couriers, and branches. Built with Tailwind and Firebase.",
      image: "/assets/portfolio/parcel.png",
      tags: ["React", "Tailwind", "Firebase"],
    },
    {
      id: 5,
      title: "TransparentCode SaaS",
      description:
        "Software code transparency platform with user roles, subscriptions, and in-app updates.",
      image: "/assets/portfolio/transparentcode.png",
      tags: ["React", "Firebase", "Stripe"],
    },
    {
      id: 6,
      title: "Payroll Automation — Beyond Venture",
      description:
        "Google Apps Script + Firebase system to manage agents, calculate payrolls, and generate PDF reports.",
      image: "/assets/portfolio/payroll.png",
      tags: ["Apps Script", "Firebase", "Google Sheets"],
    },
  ];

  return (
    <>
      <Header />

      <section className="portfolio-hero">
        <div className="container">
          <h1>Our Work</h1>
          <p>
            Explore the software solutions we’ve crafted across mobile, web,
            SaaS, automation, and e-commerce.
          </p>
        </div>
      </section>

      <section className="portfolio-grid container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="portfolio-cta">
        <div className="container">
          <h2>Want to Build Something Like This?</h2>
          <p>Tell us your idea — we’ll turn it into reality.</p>
          <a href="/contact" className="cta-btn">
            Start Your Project
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
