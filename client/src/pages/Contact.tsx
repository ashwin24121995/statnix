import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

/**
 * Design Philosophy: Modern Sports Analytics
 * - Contact form with clear visual hierarchy
 * - Company information prominently displayed
 * - Professional and accessible design
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

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-card border-b border-border">
          <div className="container">
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6 text-foreground">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Have questions, feedback, or need support? We'd love to hear from you. Reach out to our team anytime.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <Card className="bg-card border-border p-8 h-full">
                  <h2 className="font-display font-bold text-2xl mb-8 text-foreground">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex gap-4">
                      <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-display font-bold text-foreground mb-1">
                          Email
                        </h3>
                        <p className="text-muted-foreground">
                          <a href="mailto:support@playbystats.com" className="hover:text-accent transition-colors">
                            support@playbystats.com
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex gap-4">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-display font-bold text-foreground mb-1">
                          Address
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          C/O N K SHARMA SEC 9 TYPE, BT QR NO 463, HEC, Dhurwa, Ranchi, Ranchi-834004, Jharkhand
                        </p>
                      </div>
                    </div>

                    {/* Company Info */}
                    <div className="pt-6 border-t border-border">
                      <h3 className="font-display font-bold text-foreground mb-3">
                        Company Details
                      </h3>
                      <div className="text-sm text-muted-foreground space-y-2">
                        <p><strong>Company:</strong> CC INNOVATIONS (OPC) PRIVATE LIMITED</p>
                        <p><strong>CIN:</strong> U78100JH2023OPC021360</p>
                        <p><strong>PAN:</strong> AALCC3673P</p>
                        <p><strong>GST:</strong> 20AALCC3673P1ZB</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="bg-card border-border p-8">
                  <h2 className="font-display font-bold text-2xl mb-6 text-foreground">
                    Send us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-foreground font-semibold mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-foreground font-semibold mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-foreground font-semibold mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this about?"
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-foreground font-semibold mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what's on your mind..."
                        rows={6}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Card>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="font-display font-bold text-2xl mb-8 text-foreground">
                Frequently Asked Questions
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
                  <div key={idx} className="border-b border-border pb-6 last:border-b-0">
                    <h3 className="font-display font-bold text-foreground mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-muted-foreground">
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
