import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Email sending logic would go here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-300 via-slate-50 to-emerald-200 pt-24 pb-12">
      <div className="max-w-2xl mx-auto px-6">
        <div className="relative">
          <div className="absolute inset-0 bg-white/40 blur-3xl rounded-full opacity-30" />

          <div className="relative z-10 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-black text-slate-700 mb-2">
              Get In Touch
            </h1>
            <p className="text-slate-600 text-lg mb-8">
              Have a question or want to work together? I'd love to hear from you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-400 focus:outline-none transition-colors bg-white/50"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-400 focus:outline-none transition-colors bg-white/50"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-400 focus:outline-none transition-colors bg-white/50"
                  placeholder="What is this about?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-400 focus:outline-none transition-colors bg-white/50 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h2 className="text-lg font-bold text-slate-700 mb-4">
                Other Ways to Reach Me
              </h2>
              <div className="space-y-2 text-slate-600">
                <p>Email: rohitshr98@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
