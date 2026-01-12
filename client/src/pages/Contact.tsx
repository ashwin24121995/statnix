import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

/**
 * Contact Page - Casinous Template Design
 * Deep purple background (#1a0a2e) with golden yellow (#f7a600) accents
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1a0a2e' }}>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative min-h-[40vh] flex items-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/contact-hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26, 10, 46, 0.95), rgba(26, 10, 46, 0.7))' }} />
          <div className="container relative z-10 py-16">
            <h1 className="heading-casino text-5xl md:text-6xl mb-6 text-white">
              Get in <span style={{ color: '#f7a600' }}>Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Have questions, feedback, or need support? We'd love to hear from you. Reach out to our team anytime.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16" style={{ backgroundColor: '#1a0a2e' }}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="card-casino p-8 h-full">
                  <h2 className="heading-casino text-2xl mb-8 text-white">
                    Contact <span style={{ color: '#f7a600' }}>Information</span>
                  </h2>

                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(247, 166, 0, 0.2)' }}>
                        <Mail className="w-6 h-6" style={{ color: '#f7a600' }} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-white mb-1">
                          Email
                        </h3>
                        <p className="text-gray-400">
                          <a href="mailto:support@playbystats.com" className="hover:text-[#f7a600] transition-colors">
                            support@playbystats.com
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(247, 166, 0, 0.2)' }}>
                        <MapPin className="w-6 h-6" style={{ color: '#f7a600' }} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-white mb-1">
                          Address
                        </h3>
                        <p className="text-gray-400 text-sm">
                          C/O N K SHARMA SEC 9 TYPE, BT QR NO 463, HEC, Dhurwa, Ranchi, Ranchi-834004, Jharkhand
                        </p>
                      </div>
                    </div>

                    {/* Company Info */}
                    <div className="pt-6" style={{ borderTop: '1px solid rgba(247, 166, 0, 0.3)' }}>
                      <h3 className="font-display font-bold text-white mb-3">
                        Company Details
                      </h3>
                      <div className="text-sm text-gray-400 space-y-2">
                        <p><strong className="text-white">Company:</strong> CC INNOVATIONS (OPC) PRIVATE LIMITED</p>
                        <p><strong className="text-white">CIN:</strong> U78100JH2023OPC021360</p>
                        <p><strong className="text-white">PAN:</strong> AALCC3673P</p>
                        <p><strong className="text-white">GST:</strong> 20AALCC3673P1ZB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="card-casino p-8">
                  <h2 className="heading-casino text-2xl mb-6 text-white">
                    Send us a <span style={{ color: '#f7a600' }}>Message</span>
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors"
                        style={{ backgroundColor: '#1a0a2e', border: '2px dashed rgba(247, 166, 0, 0.3)' }}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors"
                        style={{ backgroundColor: '#1a0a2e', border: '2px dashed rgba(247, 166, 0, 0.3)' }}
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this about?"
                        className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors"
                        style={{ backgroundColor: '#1a0a2e', border: '2px dashed rgba(247, 166, 0, 0.3)' }}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what's on your mind..."
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
                        style={{ backgroundColor: '#1a0a2e', border: '2px dashed rgba(247, 166, 0, 0.3)' }}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-casino py-4 disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="card-casino p-8">
              <h2 className="heading-casino text-2xl mb-8 text-white">
                Frequently Asked <span style={{ color: '#f7a600' }}>Questions</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "How do I report a bug or issue?",
                    a: "Please use the contact form above or email us at support@playbystats.com with details about the issue. Our team will investigate and get back to you promptly.",
                  },
                  {
                    q: "What should I do if I encounter inappropriate behavior?",
                    a: "Report it immediately through the in-game reporting system or contact our moderation team at support@playbystats.com with details and screenshots if possible.",
                  },
                  {
                    q: "How can I provide feedback or suggestions?",
                    a: "We love hearing from our community! Send us your ideas via the contact form or email. Your feedback helps us improve the platform.",
                  },
                  {
                    q: "Is my personal information safe?",
                    a: "Yes, we take privacy and security very seriously. Please review our Privacy Policy for detailed information about how we handle your data.",
                  },
                ].map((faq, idx) => (
                  <div key={idx} className="pb-6 last:pb-0" style={{ borderBottom: idx < 3 ? '1px solid rgba(247, 166, 0, 0.3)' : 'none' }}>
                    <h3 className="font-display font-bold text-white mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-gray-400">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
