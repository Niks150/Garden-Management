"use client";
import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageSquare
} from "lucide-react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "(555) 123-4567",
      link: "tel:5551234567"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "info@thegardencompany.com",
      link: "mailto:info@thegardencompany.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: "123 Garden Way, Greenville, CA 90210",
      link: "https://maps.google.com"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "Mon-Fri: 8AM-6PM, Sat: 9AM-2PM",
      link: null
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Get In <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you! Reach out to us for any inquiries about our garden services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-full mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-emerald-600 transition-colors duration-300"
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="h-8 w-8 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
              </div>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                  <p className="text-gray-600 text-lg">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 hover:border-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 hover:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 hover:border-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 hover:border-emerald-400"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="quote">Request Quote</option>
                        <option value="service">Service Information</option>
                        <option value="feedback">Feedback</option>
                        <option value="complaint">Complaint</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Tell us about your garden project or inquiry..."
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 hover:border-emerald-400"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="group w-full relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 px-6 py-4 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    <span>Send Message</span>
                  </button>
                </div>
              )}
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                    <p className="text-gray-700 font-medium">Map Integration</p>
                    <p className="text-gray-500 text-sm">123 Garden Way, Greenville, CA</p>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  {[
                    { title: "Fast Response", desc: "We respond to all inquiries within 24 hours" },
                    { title: "Expert Team", desc: "15+ years of gardening experience" },
                    { title: "Free Consultation", desc: "Get a free quote and site evaluation" },
                    { title: "Quality Service", desc: "100% satisfaction guaranteed" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group hover:bg-emerald-50 p-3 rounded-lg transition-all duration-300">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-full flex items-center justify-center font-bold group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp Quick Contact */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Prefer to Chat?</h3>
                <p className="mb-6 opacity-90">Get instant responses via WhatsApp</p>
                <a
                  href="https://wa.me/9016372258?text=Hello! I'm interested in your gardening services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}