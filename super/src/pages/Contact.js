import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }
  
    const phone = "254701620732"; 
    const encodedMessage = encodeURIComponent(
      `Hello, my name is ${name}. My email is ${email}. Here is my message: ${message}`
    );
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
  
    if (window.confirm("You are about to send this message via WhatsApp. Continue?")) {
      window.open(whatsappUrl, "_blank");
  
      // Show success message
      alert("Message sent to Ivy successfully!");
  
      // Clear form fields
      setFormData({ name: "", email: "", message: "" });
  
      // Redirect to the homepage after 2 seconds
      setTimeout(() => {
        window.location.href = "/"; // Change this if your portfolio homepage URL is different
      }, 2000);
    }
  };
  

  return (
    <motion.section
      className="contact py-12 px-6 bg-gray-800 text-white mt-20 lg:mt-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start">
        {/* Left side */}
        <div className="contact-details w-full lg:w-1/2">
          <motion.h2
            className="text-3xl font-semibold text-center mb-6 text-sky-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-lg text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Looking for an experienced accountant? Let’s connect!
          </motion.p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-sky-400" />
              <a href="mailto:mugoivy@gmail.com" className="text-lg text-white hover:underline">
                mugoivy@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhone className="text-2xl text-sky-400" />
              <a href="tel:+254701629732" className="text-lg text-white hover:underline">
                +254701620732
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-sky-400" />
              <p className="text-lg text-white">Nairobi, Kenya</p>
            </div>

            <div className="flex items-center space-x-4">
              <FaLinkedin className="text-2xl text-sky-400" />
              <a
                href="https://www.linkedin.com/in/ivy-mugo-a33b132a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-white hover:underline"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right side: Form */}
        <div className="contact-form w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold text-center mb-6 text-sky-400">Send a Message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mb-4 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mb-4 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 mb-4 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full bg-green-500 text-black font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-600 transition-all duration-300"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Send via WhatsApp</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
