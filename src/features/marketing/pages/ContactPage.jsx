import { Header } from "../../layout/components/Header.jsx";
import { Footer } from "../../layout/components/Footer.jsx";
import {
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ChevronDown,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-56 pb-20 px-6 overflow-hidden bg-gradient-to-b from-white via-[#FAFBFF] to-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-20 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-[100px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.12, 0.08],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background:
                "radial-gradient(circle, rgba(5, 111, 212, 0.7), rgba(4, 97, 196, 0.4))",
            }}
          />
        </div>

        <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-start mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#F0F6FF] border border-[#056FD4]/10 rounded-full px-6 py-2.5">
                <p
                  className="text-sm tracking-[0.15em] text-[#056FD4] uppercase"
                  style={{ fontWeight: 600 }}
                >
                  Get in Touch
                </p>
              </div>
            </motion.div>

            <motion.div className="mb-5">
              <div className="w-16 h-1 bg-[#056FD4] rounded-full"></div>
            </motion.div>

            <motion.h1
              className="text-[5.5rem] text-[#14212A] mb-8 leading-[1.05] tracking-[-0.04em]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ fontWeight: 800 }}
            >
              Let&apos;s start a conversation.
            </motion.h1>

            <motion.p
              className="text-[1.25rem] text-[#14212A]/75 leading-[1.7] max-w-[640px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              Whether you have a question, want to explore opportunities, or are
              curious about how Reboo8 works — we&apos;re here to help.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)] bg-gradient-to-br from-[#E8F2FF] to-[#D4E8FF] h-[400px]">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoNSwxMTEsMjEyLDAuMSkiLz48L3N2Zz4=')] opacity-30"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-48 h-48 bg-white rounded-3xl shadow-2xl flex items-center justify-center"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <MessageCircle className="w-20 h-20 text-[#056FD4]" />
                </motion.div>
              </div>

              <motion.div
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#056FD4] rounded-full opacity-10 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Us Card */}
            <motion.div
              className="group bg-white rounded-3xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_12px_48px_rgba(5,111,212,0.15)] hover:border-[#056FD4]/20 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#056FD4] rounded-full opacity-[0.02] blur-3xl group-hover:opacity-[0.06] transition-opacity duration-500"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                  <Mail className="w-8 h-8 text-white" />
                </div>

                <h3
                  className="text-2xl text-[#14212A] mb-3"
                  style={{ fontWeight: 700 }}
                >
                  Email Us
                </h3>

                <p className="text-[#14212A]/70 leading-[1.6] mb-6">
                  For general inquiries and support.
                </p>

                <a
                  href="mailto:hello@reboo8.com"
                  className="text-[#056FD4] text-lg hover:underline"
                  style={{ fontWeight: 600 }}
                >
                  hello@reboo8.com
                </a>
              </div>
            </motion.div>

            {/* Meet Us Card */}
            <motion.div
              className="group bg-white rounded-3xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_12px_48px_rgba(5,111,212,0.15)] hover:border-[#056FD4]/20 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#056FD4] rounded-full opacity-[0.02] blur-3xl group-hover:opacity-[0.06] transition-opacity duration-500"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                  <MapPin className="w-8 h-8 text-white" />
                </div>

                <h3
                  className="text-2xl text-[#14212A] mb-3"
                  style={{ fontWeight: 700 }}
                >
                  Meet Us
                </h3>

                <p className="text-[#14212A]/70 leading-[1.6] mb-2">
                  123 Innovation Street
                </p>
                <p className="text-[#14212A]/70 leading-[1.6] mb-2">
                  San Francisco, CA 94105
                </p>
                <p className="text-[#14212A]/70 leading-[1.6]">United States</p>
              </div>
            </motion.div>

            {/* Social Card */}
            <motion.div
              className="group bg-white rounded-3xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_12px_48px_rgba(5,111,212,0.15)] hover:border-[#056FD4]/20 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#056FD4] rounded-full opacity-[0.02] blur-3xl group-hover:opacity-[0.06] transition-opacity duration-500"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>

                <h3
                  className="text-2xl text-[#14212A] mb-3"
                  style={{ fontWeight: 700 }}
                >
                  Social
                </h3>

                <p className="text-[#14212A]/70 leading-[1.6] mb-6">
                  Follow us on social media.
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-200 hover:bg-[#056FD4] rounded-full flex items-center justify-center transition-colors duration-300 group/icon"
                  >
                    <Twitter className="w-5 h-5 text-[#14212A] group-hover/icon:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-200 hover:bg-[#056FD4] rounded-full flex items-center justify-center transition-colors duration-300 group/icon"
                  >
                    <Linkedin className="w-5 h-5 text-[#14212A] group-hover/icon:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-200 hover:bg-[#056FD4] rounded-full flex items-center justify-center transition-colors duration-300 group/icon"
                  >
                    <Instagram className="w-5 h-5 text-[#14212A] group-hover/icon:text-white transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Send a Message Form Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-[#F8FAFC] via-white to-white overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-[5%] w-96 h-96 bg-blue-100 rounded-full opacity-[0.08] blur-[120px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-[850px] mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              className="text-[3rem] text-[#14212A] mb-3 leading-[1.1] tracking-[-0.02em]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ fontWeight: 800 }}
            >
              Send a Message
            </motion.h2>

            <motion.p
              className="text-[#14212A]/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We typically respond within 24 hours.
            </motion.p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-12 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  className="block text-[#14212A] mb-2.5"
                  style={{ fontWeight: 600 }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-5 py-4 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#056FD4] focus:ring-2 focus:ring-[#056FD4]/10 transition-all duration-300"
                />
              </div>

              <div>
                <label
                  className="block text-[#14212A] mb-2.5"
                  style={{ fontWeight: 600 }}
                >
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full px-5 py-4 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#056FD4] focus:ring-2 focus:ring-[#056FD4]/10 transition-all duration-300"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                className="block text-[#14212A] mb-2.5"
                style={{ fontWeight: 600 }}
              >
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-5 py-4 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#056FD4] focus:ring-2 focus:ring-[#056FD4]/10 transition-all duration-300"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-[#14212A] mb-2.5"
                style={{ fontWeight: 600 }}
              >
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this regarding?"
                className="w-full px-5 py-4 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#056FD4] focus:ring-2 focus:ring-[#056FD4]/10 transition-all duration-300"
              />
            </div>

            <div className="mb-8">
              <label
                className="block text-[#14212A] mb-2.5"
                style={{ fontWeight: 600 }}
              >
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell us more about your inquiry..."
                className="w-full px-5 py-4 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#056FD4] focus:ring-2 focus:ring-[#056FD4]/10 transition-all duration-300 resize-none"
              />
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                className="relative bg-[#14212A] text-white px-12 py-4 rounded-full transition-all duration-300 overflow-hidden group"
                style={{ fontWeight: 600, fontSize: "1.0625rem" }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <Send className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-[#056FD4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center justify-center mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#F0F6FF] border border-[#056FD4]/10 rounded-full px-6 py-2.5">
                <p
                  className="text-sm tracking-[0.15em] text-[#056FD4] uppercase"
                  style={{ fontWeight: 600 }}
                >
                  Questions?
                </p>
              </div>
            </motion.div>

            <motion.h2
              className="text-[3rem] text-[#14212A] mb-5 leading-[1.1] tracking-[-0.025em]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontWeight: 800 }}
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <div className="max-w-[900px] mx-auto space-y-4">
            {[
              {
                question: "How do I become a Reboo8 contributor?",
                answer:
                  "Getting started is simple. Visit our sign-up page, complete your profile, and pass a short skills assessment. Once verified, you'll gain immediate access to available tasks and projects. The entire process typically takes under 30 minutes.",
              },
              {
                question: "What kind of work is available on Reboo8?",
                answer:
                  "We offer diverse opportunities across customer support, content moderation, data annotation, quality assurance, and more. Tasks range from short micro-tasks to longer-term project work, all designed to fit flexible schedules and skill levels.",
              },
              {
                question: "How does compensation work?",
                answer:
                  "You're paid per task or project completed, with transparent rates displayed upfront. Payments are processed weekly via your preferred method. Top performers also qualify for bonuses and priority access to premium opportunities.",
              },
              {
                question: "Can I work from anywhere?",
                answer:
                  "Absolutely. Reboo8 is a fully remote platform. As long have a reliable internet connection and meet task-specific requirements, you can work from anywhere in the world.",
              },
              {
                question: "What support does Reboo8 provide?",
                answer:
                  "We offer 24/7 technical support, detailed task guidelines, training resources, and a community forum. Our team is committed to helping you succeed, with regular feedback and growth opportunities.",
              },
              {
                question: "How do businesses benefit from Reboo8?",
                answer:
                  "Businesses gain on-demand access to vetted talent, scalable operations, and flexible capacity. Our intelligent workflows ensure high-quality output, fast turnaround times, and significant cost savings compared to traditional models.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-[#056FD4]/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#F8FAFC] transition-colors duration-300"
                >
                  <span
                    className="text-lg text-[#14212A] pr-4"
                    style={{ fontWeight: 600 }}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-[#056FD4]" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-[#14212A]/75 leading-[1.7]">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      {/* <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(5, 111, 212, 0.04), transparent)",
          }}
          animate={{
            opacity: [0.04, 0.06, 0.04],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative max-w-[880px] mx-auto text-center">
          <motion.h2
            className="text-[4rem] text-[#14212A] mb-7 leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ fontWeight: 800 }}
          >
            Let&apos;s Build the Future of Work — Together.
          </motion.h2>

          <motion.p
            className="text-xl text-[#14212A]/75 mb-14 leading-[1.7] max-w-[680px] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have a project in mind? Looking for partnership opportunities? Let's
            connect.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-5 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="relative bg-[#056FD4] text-white px-14 py-5 rounded-full transition-all duration-300 overflow-hidden group"
              style={{ fontWeight: 600, fontSize: "1.125rem" }}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Schedule a Call</span>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0456a8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              className="relative bg-transparent text-[#14212A] px-14 py-5 rounded-full border-2 border-[#14212A]/15 hover:border-[#14212A] transition-all duration-300 overflow-hidden group"
              style={{ fontWeight: 600, fontSize: "1.125rem" }}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                View FAQs
              </span>
              <div className="absolute inset-0 bg-[#14212A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </motion.button>
          </motion.div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
