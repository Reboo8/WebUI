import { Header } from "../../layout/components/Header.jsx";
import { Footer } from "../../layout/components/Footer.jsx";
import {
  Briefcase,
  Globe,
  Clock,
  DollarSign,
  TrendingUp,
  Heart,
  Users,
  Zap,
  Coffee,
  Laptop,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion } from "motion/react";

export default function TalentsPage() {
  const perks = [
    {
      icon: Globe,
      title: "Work From Anywhere",
      description: "Join projects from any corner of the world. No commute, no office politics—just meaningful work.",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Choose when you work. Early bird or night owl, we accommodate your peak productivity hours.",
    },
    {
      icon: DollarSign,
      title: "Competitive Pay",
      description: "Fair compensation that respects your skills. Get paid what you deserve, on time, every time.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Access to learning resources, mentorship, and opportunities to upskill continuously.",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "We believe work should adapt to life, not the other way around. Your wellbeing matters.",
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Connect with talented professionals from 30+ countries. Learn, share, and grow together.",
    },
  ];

  const lifeAtReboo8 = [
    {
      icon: Coffee,
      title: "Collaborative Culture",
      description: "Work alongside passionate individuals who share your drive to make an impact.",
    },
    {
      icon: Laptop,
      title: "Cutting-Edge Projects",
      description: "Get hands-on experience with AI, data labeling, and future-shaping technologies.",
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Your contributions are celebrated. Top performers unlock bonuses and exclusive opportunities.",
    },
    {
      icon: Zap,
      title: "Fast-Paced Environment",
      description: "Thrive in a dynamic setting where innovation happens daily and ideas become reality.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-56 pb-40 px-6 overflow-hidden bg-gradient-to-b from-white via-[#FAFBFF] to-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[900px] h-[900px] rounded-full opacity-[0.08] blur-[100px]"
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
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[120px]"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.06, 0.1, 0.06],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            style={{
              background:
                "radial-gradient(circle, rgba(5, 111, 212, 0.6), rgba(4, 86, 168, 0.4))",
            }}
          />
        </div>

        <div className="relative max-w-[1000px] mx-auto text-center">
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#F0F6FF] border border-[#056FD4]/10 rounded-full px-6 py-2.5">
              <p
                className="text-sm tracking-[0.15em] text-[#056FD4] uppercase"
                style={{ fontWeight: 600 }}
              >
                For Talents & Agents
              </p>
            </div>
          </motion.div>

          <motion.h1
            className="text-[4.5rem] text-[#14212A] mb-8 leading-[1.05] tracking-[-0.04em]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ fontWeight: 800 }}
          >
            Your Skills Deserve{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#056FD4] to-[#0456a8]">
              Global Opportunities
            </span>
          </motion.h1>

          <motion.p
            className="text-[1.375rem] text-[#14212A]/75 mb-12 max-w-[730px] mx-auto leading-[1.7]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Join Reboo8 as a talent or agent and unlock access to meaningful work, 
            fair pay, and a community that values what you bring to the table.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-5 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <motion.button
              className="relative bg-[#056FD4] text-white px-12 py-4 rounded-full transition-all duration-300 overflow-hidden shadow-[0_8px_30px_rgba(5,111,212,0.25)] group"
              style={{ fontWeight: 600, fontSize: "1.0625rem" }}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 12px 40px rgba(5,111,212,0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Apply as Talent
                <ArrowRight className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0456a8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              className="relative bg-white text-[#14212A] px-12 py-4 rounded-full border-2 border-gray-200 hover:border-[#056FD4] transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ fontWeight: 600, fontSize: "1.0625rem" }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Become an Agent
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white via-[#F8FAFC] to-white">
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
                  Why Join Us
                </p>
              </div>
            </motion.div>

            <motion.h2
              className="text-[3.5rem] text-[#14212A] mb-5 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontWeight: 800 }}
            >
              Perks of Working at Reboo8
            </motion.h2>

            <motion.p
              className="text-xl text-[#14212A]/70 max-w-[720px] mx-auto leading-[1.6]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We believe in treating our people right. Here's what you get when you join our talent network.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                className="group bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_12px_48px_rgba(5,111,212,0.12)] hover:border-[#056FD4]/20 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-xl mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                  <perk.icon className="w-7 h-7 text-white" />
                </div>

                <h3
                  className="text-xl text-[#14212A] mb-3"
                  style={{ fontWeight: 700 }}
                >
                  {perk.title}
                </h3>

                <p className="text-[#14212A]/70 leading-[1.7]">
                  {perk.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Reboo8 Section */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-[8%] w-80 h-80 bg-blue-100 rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
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
                    Our Culture
                  </p>
                </div>
              </motion.div>

              <h2
                className="text-[3.5rem] text-[#14212A] mb-6 leading-[1.1]"
                style={{ fontWeight: 800 }}
              >
                Life at Reboo8
              </h2>

              <p className="text-lg text-[#14212A]/80 leading-[1.7] mb-8">
                Being part of Reboo8 means more than just completing tasks. 
                It's about being part of a movement that's reshaping how work happens globally.
              </p>

              <div className="space-y-5">
                {lifeAtReboo8.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  >
                    <div className="w-12 h-12 bg-[#F0F6FF] rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#056FD4]" />
                    </div>
                    <div>
                      <h4 className="text-lg text-[#14212A] mb-1" style={{ fontWeight: 700 }}>
                        {item.title}
                      </h4>
                      <p className="text-[#14212A]/70 leading-[1.6]">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.15)]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration at Reboo8"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14212A]/20 to-transparent pointer-events-none" />
              </div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-xl flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl text-[#14212A]" style={{ fontWeight: 800 }}>15K+</p>
                    <p className="text-[#14212A]/60 text-sm">Active Talents</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-[3rem] text-[#14212A] mb-5 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ fontWeight: 800 }}
            >
              What Our Talents Say
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Reboo8 gave me the freedom to work on my terms while earning fairly. It's changed my life.",
                name: "Sarah M.",
                role: "Data Annotator",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
              },
              {
                quote: "The community here is incredible. I've learned so much from fellow talents around the world.",
                name: "James K.",
                role: "Quality Reviewer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
              },
              {
                quote: "Flexible hours, great pay, and the opportunity to work on cutting-edge AI projects. What more could I ask for?",
                name: "Priya S.",
                role: "Project Lead",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <p className="text-[#14212A]/80 leading-[1.75] mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[#14212A] font-semibold">{testimonial.name}</p>
                    <p className="text-[#056FD4] text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-white via-[#F0F6FF] to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.08] blur-[120px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.12, 0.08] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            style={{ background: "radial-gradient(circle, rgba(5, 111, 212, 0.6), rgba(4, 97, 196, 0.3))" }}
          />
        </div>

        <div className="relative max-w-[880px] mx-auto text-center">
          <motion.h2
            className="text-[3.5rem] text-[#14212A] mb-7 leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ fontWeight: 800 }}
          >
            Ready to Start Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#056FD4] to-[#0456a8]">
              Journey
            </span>?
          </motion.h2>

          <motion.p
            className="text-xl text-[#14212A]/70 mb-12 leading-[1.7] max-w-[720px] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join thousands of talents who are already building their futures with Reboo8. 
            Your skills, your schedule, your success.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-5 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="relative bg-[#056FD4] text-white px-12 py-5 rounded-full transition-all duration-300 overflow-hidden group shadow-lg shadow-[#056FD4]/25"
              style={{ fontWeight: 600, fontSize: "1.125rem" }}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Join as Talent
                <ArrowRight className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0456a8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              className="relative bg-white text-[#056FD4] px-12 py-5 rounded-full border-2 border-[#056FD4]/20 hover:border-[#056FD4] hover:bg-[#F0F6FF] transition-all duration-300 shadow-sm"
              style={{ fontWeight: 600, fontSize: "1.125rem" }}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
