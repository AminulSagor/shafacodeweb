import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import "./Affiliate.css";

export default function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    about: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formValues.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formValues.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formValues.phone.trim()) {
      newErrors.phone = "Phone is required.";
    } else if (!/^\+?\d{7,15}$/.test(formValues.phone.trim())) {
      newErrors.phone =
        "Please enter a valid phone number (7–15 digits, optional +).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    try {
      const payload = {
        ...formValues,
        createdAt: serverTimestamp(),
      };

      console.log("Affiliate form payload (to Firestore):", payload);

      // Save to Firestore – choose your collection name
      await addDoc(collection(db, "affiliate_leads"), payload);

      alert("Form submitted! Check console for payload.");

      // reset form
      setFormValues({
        name: "",
        email: "",
        phone: "",
        about: "",
      });
      setErrors({});
    } catch (err) {
      console.error("Error submitting affiliate form:", err);
      alert("Something went wrong while submitting. Check console.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="affiliate-right">
      <div className="affiliate-form-card">
        <h2 className="affiliate-form-title">Join as an affiliate</h2>
        <p className="affiliate-form-sub">
          Share your details and we’ll get back to you with how to track your
          referrals and receive your 4–6% commission.
        </p>

        <form
          className="affiliate-form contact-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <label>
            Full Name
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formValues.name}
              onChange={handleChange}
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formValues.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="field-error">{errors.email}</span>
            )}
          </label>

          <label>
            Phone
            <input
              type="tel"
              name="phone"
              placeholder="+8801XXXXXXXXX"
              value={formValues.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <span className="field-error">{errors.phone}</span>
            )}
          </label>

          <label>
            Tell us about your network (optional)
            <textarea
              name="about"
              rows={4}
              placeholder="Where will you get clients from? (e.g. friends, business network, social media, agency, etc.)"
              value={formValues.about}
              onChange={handleChange}
            />
          </label>

          <button
            type="submit"
            className="btn btn-primary affiliate-submit"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>

          <p className="affiliate-form-footnote">
            We’ll contact you by email or phone with next steps for the
            affiliate program and commission details.
          </p>
        </form>
      </div>
    </div>
  );
}
