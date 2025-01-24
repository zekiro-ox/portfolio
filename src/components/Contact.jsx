import React, { useState } from "react";

const Contact = () => {
  const contactDetails = {
    email: "contact@mywebsite.com",
    phone: "+1234567890",
    address: "123 My Street, My City, My Country",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(""); // To show success or error message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation (you can expand this)
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill in all fields.");
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    }, 1000);
  };

  return (
    <div className="relative min-h-screen bg-[#12151c] flex flex-col items-center justify-center py-10 px-5">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#661b1c] rounded-full opacity-30 transform -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#1b222c] rounded-full opacity-20 transform translate-x-20 translate-y-20"></div>

      <h1 className="text-4xl font-bold text-center text-white mb-10 relative z-10">
        Contact Me
      </h1>

      {/* Contact Details Section */}
      <section className="relative z-10 mb-10 text-center">
        <div className="space-y-4">
          <p className="text-gray-400">Email: {contactDetails.email}</p>
          <p className="text-gray-400">Phone: {contactDetails.phone}</p>
          <p className="text-gray-400">Address: {contactDetails.address}</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">
          Send an Inquiry
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-400">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-700 rounded-md shadow-sm text-gray-300 bg-[#191d26] focus:outline-none focus:ring-2 focus:ring-[#661b1c]"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-400">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-700 rounded-md shadow-sm text-gray-300 bg-[#191d26] focus:outline-none focus:ring-2 focus:ring-[#661b1c]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-400">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-700 rounded-md shadow-sm text-gray-300 bg-[#191d26] focus:outline-none focus:ring-2 focus:ring-[#661b1c]"
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </div>

          {formStatus && (
            <p
              className={`text-center ${
                formStatus.includes("Thank") ? "text-green-500" : "text-red-500"
              }`}
            >
              {formStatus}
            </p>
          )}

          <button
            type="submit"
            className="w-full p-3 bg-[#661b1c] text-white font-semibold rounded-md shadow-md hover:bg-[#531516] transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-[#661b1c] rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-[#1b222c] rounded-full opacity-50 animate-bounce"></div>
    </div>
  );
};

export default Contact;
