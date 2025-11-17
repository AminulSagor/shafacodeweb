// src/PortfolioSection.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

function ProjectSection() {
  const [projects, setProjects] = useState([]);

  const deliveredEmoji = "✅";
  const ongoingEmoji = "⏳";

  useEffect(() => {
    const ref = collection(db, "projects");
    const unsub = onSnapshot(ref, (snapshot) => {
      const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      // optional: highlight first
      list.sort((a, b) => (b.highlight === true) - (a.highlight === true));
      setProjects(list);
    });

    return () => unsub();
  }, []);

  console.log(projects);

  return (
    <section
      id="portfolio"
      className="portfolio"
      aria-labelledby="portfolio-title"
    >
      <div className="container">
        <h2 id="portfolio-title" className="section-title">
          Our Portfolio
        </h2>

        <div className="portfolio-grid">
          {projects.map((project) => {
            console.log(project, "pp");
            return (
              <article
                key={project.id}
                className={`portfolio-card ${
                  project.status === "delivered" ? "highlight" : ""
                }`}
              >
                <h3>{project.title}</h3>
                <p className="description">{project.description}</p>
                <p className="client-contact">
                  <strong>Client:</strong> {project.client}
                  <br />
                  <strong>Status:</strong>{" "}
                  {project.status === "delivered"
                    ? deliveredEmoji
                    : ongoingEmoji}{" "}
                  {project.status === "delivered" ? "Delivered" : "Ongoing"}
                  <br />
                  {project.contactEmail && (
                    <>
                      <strong>Contact:</strong>{" "}
                      {project.contactEmail.includes("@") ? (
                        <a href={`mailto:${project.contactEmail}`}>
                          {project.contactEmail}
                        </a>
                      ) : (
                        <a
                          href={project.contactEmail}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.contactEmail}
                        </a>
                      )}
                    </>
                  )}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
