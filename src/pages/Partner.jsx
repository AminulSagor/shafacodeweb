import { useState } from "react";
import ToggleButton from "../components/ToggleButton";
import "./Partner.css";
import { FaWhatsapp, FaLinkedinIn, FaFacebookF, FaEnvelope } from "react-icons/fa";
import { supabase } from "../supabaseClient";

export default function Partner() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
    file: null,
  });

  const [showPopup, setShowPopup] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false); // ✅ added toast state

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let filePath = null;

      if (formData.file) {
        const fileName = `${Date.now()}_${formData.file.name}`;
        const { data, error } = await supabase.storage
          .from("uploads")
          .upload(fileName, formData.file);

        if (error) throw error;
        filePath = data.path;
      }

      const { data: partnerData, error: insertError } = await supabase
        .from("partners")
        .insert([
          {
            name: formData.name,
            number: formData.number,
            email: formData.email,
            message: formData.message,
            file_name: formData.file ? formData.file.name : null,
            file_url: filePath
              ? supabase.storage.from("uploads").getPublicUrl(filePath).data.publicUrl
              : null,
          },
        ]);

      if (insertError) throw insertError;

      // ✅ Show toast
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);

      setFormData({
        name: "",
        number: "",
        email: "",
        message: "",
        file: null,
      });
    } catch (error) {
      console.error("❌ Submit error:", error);
      alert("Failed to submit form. Check console for details.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMuteChoice = (mute) => {
    setIsMuted(mute);
    setShowPopup(false);
  };

  return (
    <section className="partner-section">
      {/* ===== POPUP MODAL ===== */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-modal">
            <h2>Video Settings</h2>
            <p>Do you want to keep videos muted or unmute them?</p>
            <div className="popup-buttons">
              <button onClick={() => handleMuteChoice(true)}>Keep Muted</button>
              <button onClick={() => handleMuteChoice(false)}>Unmute</button>
            </div>
          </div>
        </div>
      )}

      <h1 className="partner-title">
        Refer a Client to Us and Get 4–6% Bonus for Free!
      </h1>

      <ToggleButton isMuted={isMuted} />

      <div className="partner">
        <p className="partner-subtitle">
          When you bring a new client to ShafaCode, you’ll receive a{" "}
          <span className="highlight">4–6%</span> commission from their project’s
          value. It’s our simple way of rewarding you for helping us grow through
          your referrals.
        </p>

        <form className="partner-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="number"
            placeholder="Your Phone Number"
            value={formData.number}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Write your message or project details..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <div className="file-input-wrapper">
            <label htmlFor="fileUpload" className="file-label">
              📎Attach a file (pdf/docx)
            </label>
            <input
              type="file"
              id="fileUpload"
              name="file"
              className="file-input"
              onChange={handleChange}
              accept=".pdf,.doc,.docx"
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      <div className="contact-info">
        <h2 className="contact-heading">📞 Get in Touch</h2>
        <p className="contact-note">
          Have a question or want to discuss your referral? Reach out to us
          through any of the following platforms — we’ll get back to you within
          24 hours!
        </p>

        <div className="social-links">
          <a href="mailto:aminulislamsagor@shafacode.com" aria-label="Email" title="Send us an email">
            <FaEnvelope className="contact-icon" />
          </a>
          <a
            href="https://wa.me/8801540233587"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="Message us on WhatsApp"
          >
            <FaWhatsapp className="contact-icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/108744292"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="Connect with us on LinkedIn"
          >
            <FaLinkedinIn className="contact-icon" />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=61580938442647"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Message us on our Facebook page"
          >
            <FaFacebookF className="contact-icon" />
          </a>
        </div>

        <p className="contact-email">
          ✉️ Email us directly at{" "}
          <a href="mailto:aminulislamsagor@shafacode.com">
            aminulislamsagor@shafacode.com
          </a>
        </p>
      </div>

      {/* ✅ Green Toast */}
      {showToast && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "green",
            color: "white",
            padding: "12px 22px",
            borderRadius: "8px",
            boxShadow: "0 3px 8px rgba(0,0,0,0.25)",
            fontWeight: "500",
            zIndex: 9999,
          }}
        >
          Message sent successfully!
        </div>
      )}
    </section>
  );
}
