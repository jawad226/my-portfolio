"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("https://jawadj.vercel.app/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <section
      id="contact"
      className="via-white to-gray-100 text-gray-900 max-w-6xl mx-auto px-6 py-20 rounded-2xl "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-teal-500 font-semibold uppercase tracking-wide mb-3">
            Contact Me
          </h3>
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-6">
            Have a <span className="text-teal-600">Project</span> in Mind?
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            I'm available for both freelance and full-time roles. Feel free to
            reach out I usually respond within 24 hours.
          </p>

          <ul className="space-y-4">
            <motion.li
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center gap-3"
            >
              <Mail className="text-teal-500" />
              <span>jawadc226@gmail.com</span>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center gap-3"
            >
              <Phone className="text-teal-500" />
              <span>+92 319 0412258</span>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center gap-3"
            >
              <MapPin className="text-teal-500" />
              <span>Lahore, Pakistan</span>
            </motion.li>
          </ul>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-teal-200/50 transition-all duration-500"
        >
          <div className="grid grid-cols-1 gap-6">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
              required
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
              required
            />
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              name="message"
              rows={4}
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
              required
            ></motion.textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="flex items-center justify-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-all duration-300"
            >
              Send Message <Send className="w-4 h-4" />
            </motion.button>

            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-gray-600 mt-2"
              >
                {status}
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-27 bg-[#009689] text-white py-5 px-8 rounded-4xl shadow-lg max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Let’s bring your ideas to life with modern web technologies.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:jawadc226@gmail.com"
            className="bg-white text-[#009689] px-6 py-3 rounded-full font-semibold text-sm md:text-base shadow-md hover:bg-gray-100 transition-all duration-300"
          >
            Email Me
          </a>
          <a
            href="tel:+923190412258"
            className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base hover:bg-white hover:text-[#009689] transition-all duration-300"
          >
            Call Now
          </a>
        </div>
      </motion.section>
    </section>
  );
}
