import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactForm() {
  const [form, setForm] = useState({ email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");

  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      setStatus("Message sent successfully ✅");
      setForm({ email: "", phone: "", message: "" });
    } else {
      setStatus("Failed to send ❌");
    }
  } catch (err) {
    console.error(err);
    setStatus("Server error ❌");
  }

  // Clear the status after 3 seconds
  setTimeout(() => setStatus(""), 3000);
};


  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col md:flex-row px-6 md:px-20 py-16 md:py-24"
    >
      {/* Left Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 mb-10 md:mb-0 flex flex-col justify-center"
      >
        <h2 className="text-5xl font-extrabold mb-6 text-gradient bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Contact
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-md leading-relaxed">
          Love to connect with full-stack enthusiasts and creative minds like you! Let's build something amazing together.
        </p>
        <div className="space-y-5 text-gray-300">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-purple-500" />
            <span className="text-lg">+91 6363600562</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-purple-500" />
            <span className="text-lg">vadirajbetageri1234@gmail.com</span>
          </div>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-purple-500 mt-1" />
            <span className="text-lg">Belagavi, Karnataka, India - 590006</span>
          </div>
        </div>
      </motion.div>

      {/* Right Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 bg-black p-8 md:p-12 rounded-xl border border-white/10"
      >
        <h3 className="text-2xl font-bold text-white mb-6">Let’s Connect</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="youremail@domain.com"
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">Phone number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 xxxxxxxxx"
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message..."
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 px-6 py-3 rounded-lg text-white font-semibold transition"
          >
            Send Message
          </button>
          {status && <p className="text-sm text-gray-400 mt-4">{status}</p>}
        </form>
      </motion.div>
    </section>
  );
}