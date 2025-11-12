"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Mail, Phone, MapPin, Send } from "lucide-react";

// Lazy load motion
const MotionDiv = dynamic(() =>
  import("framer-motion").then((mod) => mod.motion.div)
);

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
      className="text-gray-900 max-w-6xl mx-auto px-6 py-20 rounded-2xl"
    >
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
      >
        {/* Left Contact Info */}
        <div>
          <h3 className="text-teal-500 font-semibold uppercase tracking-wide mb-3">
            Contact Me
          </h3>
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-6">
            Have a <span className="text-teal-600">Project</span> in Mind?
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            I'm available for freelance and full-time roles. Usually reply within 24 hours.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3 hover:text-teal-500 transition-colors">
              <Mail className="text-teal-500" /> jawadc226@gmail.com
            </li>
            <li className="flex items-center gap-3 hover:text-teal-500 transition-colors">
              <Phone className="text-teal-500" /> +92 319 0412258
            </li>
            <li className="flex items-center gap-3 hover:text-teal-500 transition-colors">
              <MapPin className="text-teal-500" /> Lahore, Pakistan
            </li>
          </ul>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-teal-200/50 transition-all duration-300"
        >
          <div className="grid grid-cols-1 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition"
              required
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition"
              required
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-all duration-300"
            >
              Send Message <Send className="w-4 h-4" />
            </button>

            {status && (
              <p className="text-sm text-gray-600 mt-2">{status}</p>
            )}
          </div>
        </form>
      </MotionDiv>

      {/* Call to Action Section */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-20 bg-[#009689] text-white py-10 px-8 rounded-3xl shadow-lg max-w-6xl mx-auto text-center"
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
      </MotionDiv>
    </section>
  );
}

