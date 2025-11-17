// src/AdminDashboard.jsx
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "../../context/AdminAuthContext";

function AdminDashboard() {
  const navigate = useNavigate();
  const { logout } = useAdminAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    id: null,
    title: "",
    summary: "",
    description: "",
    client: "",
    contactEmail: "",
    status: "delivered",
  });

  const projectsRef = collection(db, "projects");

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const snapshot = await getDocs(projectsRef);
      const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setProjects(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm({
      id: null,
      title: "",
      summary: "",
      description: "",
      client: "",
      contactEmail: "",
      status: "delivered",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      setError("Title is required.");
      return;
    }
    setSaving(true);
    setError("");

    try {
      if (form.id) {
        // update
        const docRef = doc(db, "projects", form.id);
        await updateDoc(docRef, {
          title: form.title,
          summary: form.summary,
          description: form.description,
          client: form.client,
          contactEmail: form.contactEmail,
          status: form.status,
          updatedAt: serverTimestamp(),
        });
      } else {
        // create
        await addDoc(projectsRef, {
          title: form.title,
          summary: form.summary,
          description: form.description,
          client: form.client,
          contactEmail: form.contactEmail,
          status: form.status,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      }

      resetForm();
      await fetchProjects();
    } catch (err) {
      console.error(err);
      setError("Failed to save project.");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (project) => {
    setForm({
      id: project.id,
      title: project.title || "",
      summary: project.summary || "",
      description: project.description || "",
      client: project.client || "",
      contactEmail: project.contactEmail || "",
      status: project.status || "delivered",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?"))
      return;
    try {
      const docRef = doc(db, "projects", id);
      await deleteDoc(docRef);
      await fetchProjects();
    } catch (err) {
      console.error(err);
      setError("Failed to delete project.");
    }
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div>
          <h1>Projects Admin</h1>
          <p>Manage your portfolio entries (e.g., Allen Swapon Web Game).</p>
        </div>
        <span
          style={{ cursor: "pointer" }}
          className="admin-badge"
          onClick={() => navigate("/")}
        >
          ShafaCode
        </span>
        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
        </button>
      </header>

      <main className="admin-main">
        <section className="admin-card admin-form-card">
          <div className="admin-card-header">
            <h2>{form.id ? "Edit Project" : "Add New Project"}</h2>
            {form.id && (
              <button
                type="button"
                className="btn-secondary"
                onClick={resetForm}
              >
                + New
              </button>
            )}
          </div>

          {error && <div className="admin-alert">{error}</div>}

          <form className="admin-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Title *</label>
              <input
                type="text"
                name="title"
                placeholder="Chorki – Allen Swapon Web Game"
                value={form.title}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label>Summary</label>
              <input
                type="text"
                name="summary"
                placeholder="Immersive web-based game with storytelling & gamification."
                value={form.summary}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label>Description</label>
              <textarea
                name="description"
                rows={4}
                placeholder="Full detailed description of the project..."
                value={form.description}
                onChange={handleChange}
              />
            </div>

            <div className="form-view">
              <div className="form-row">
                <label>Client</label>
                <input
                  type="text"
                  name="client"
                  placeholder="Chorki"
                  value={form.client}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label>Contact Email</label>
                <input
                  type="text"
                  name="contactEmail"
                  placeholder="shaikh.dine@chorki.com"
                  value={form.contactEmail}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label>Status</label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option value="draft">Draft</option>
                  <option value="in-progress">In Progress</option>
                  <option value="delivered">Delivered</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>

            <button className="btn-primary" type="submit" disabled={saving}>
              {saving
                ? "Saving..."
                : form.id
                  ? "Update Project"
                  : "Create Project"}
            </button>
          </form>
        </section>

        <section className="admin-card">
          <div className="admin-card-header">
            <h2>Projects List</h2>
            {loading && <span className="pill pill-muted">Loading...</span>}
          </div>

          {projects.length === 0 && !loading ? (
            <p className="empty-text">
              No projects yet. Add your first one above.
            </p>
          ) : (
            <div className="projects-grid">
              {projects.map((project) => (
                <article key={project.id} className="project-card">
                  <div className="project-card-header">
                    <h3>{project.title}</h3>
                    <span className={`pill pill-${project.status || "draft"}`}>
                      {project.status || "draft"}
                    </span>
                  </div>
                  {project.client && (
                    <p className="project-client">Client: {project.client}</p>
                  )}
                  {project.summary && (
                    <p className="project-summary">{project.summary}</p>
                  )}
                  {project.contactEmail && (
                    <p className="project-contact">
                      Contact: {project.contactEmail}
                    </p>
                  )}

                  <div className="project-actions">
                    <button
                      className="btn-ghost"
                      type="button"
                      onClick={() => handleEdit(project)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-danger"
                      type="button"
                      onClick={() => handleDelete(project.id)}
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
