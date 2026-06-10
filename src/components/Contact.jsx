import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_KEY
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white border-t border-purple-900/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-300 mb-3">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-10 text-sm sm:text-base">
          Let’s connect and build something amazing 🚀
        </p>

        {/* SOCIAL LINKS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">

          <a
            href="https://wa.me/923262734882"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          <a
            href="https://www.linkedin.com/in/pakeeza-rubab-950568406/"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://github.com/rubabpakeeza436-ux"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-lg"
          >
            <FaGithub /> GitHub
          </a>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl shadow-lg flex flex-col gap-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded bg-black/40 border border-white/10 outline-none focus:border-purple-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded bg-black/40 border border-white/10 outline-none focus:border-purple-400"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="p-3 rounded bg-black/40 border border-white/10 outline-none focus:border-purple-400"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-purple-500 hover:bg-purple-600 transition p-3 rounded font-medium"
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm">
              ✅ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm">
              ❌ Failed to send message
            </p>
          )}

        </form>

      </div>
    </section>
  );
}

export default Contact;