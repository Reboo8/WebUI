import { Header } from "../../layout/components/Header.jsx";
import { Footer } from "../../layout/components/Footer.jsx";
import {
  Heart,
  Users,
  Lightbulb,
  Target,
  MessageCircle,
  Rocket,
  Award,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

export default function Community() {
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
                Community
              </p>
            </div>
          </motion.div>

          <motion.h1
            className="text-[5.5rem] text-[#14212A] mb-8 leading-[1.05] tracking-[-0.04em]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ fontWeight: 800 }}
          >
            A Community of Doers, Dreamers, and Re-Inventors.
          </motion.h1>

          <motion.p
            className="text-[1.375rem] text-[#14212A]/75 mb-12 max-w-[730px] mx-auto leading-[1.7]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Reboo8 is more than a platform — it&apos;s a movement. A space where
            individuals expand their potential, access meaningful work, and
            contribute to something bigger.
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
                Join Our Community
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
              Explore Events
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Reimagining Opportunity Section */}
      <section className="relative py-20 px-6 bg-white overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-[8%] w-80 h-80 bg-blue-100 rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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
                    Our Mission
                  </p>
                </div>
              </motion.div>

              <h2
                className="text-[3.5rem] text-[#14212A] mb-6 leading-[1.1]"
                style={{ fontWeight: 800 }}
              >
                Reimagining Opportunity for Billions of People
              </h2>

              <p className="text-lg text-[#14212A]/80 leading-[1.7] mb-8">
                We believe work should be accessible, flexible, and meaningful.
                For too long, rigid systems have locked people out. We're
                changing that — one person, one task, one opportunity at a time.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#056FD4] rounded-full"></div>
                  <p className="text-[#14212A]/80 leading-[1.6]">
                    A platform that values people over productivity
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#056FD4] rounded-full"></div>
                  <p className="text-[#14212A]/80 leading-[1.6]">
                    Opportunities that grow with your ambitions
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#056FD4] rounded-full"></div>
                  <p className="text-[#14212A]/80 leading-[1.6]">
                    Work that adapts to your life, not the other way around
                  </p>
                </div>
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
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjUzMTU0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Community collaboration"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14212A]/10 to-transparent pointer-events-none"></div>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grow, Connect, Thrive Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#F8FAFC] via-white to-white">
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
                  Community Values
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
              Grow, Connect, and Thrive Together
            </motion.h2>

            <motion.p
              className="text-xl text-[#14212A]/70 max-w-[720px] mx-auto leading-[1.6]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our community is built on three pillars that define who we are and
              what we stand for.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              className="group bg-white rounded-3xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_12px_48px_rgba(5,111,212,0.15)] hover:border-[#056FD4]/20 transition-all duration-500 relative overflow-hidden text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#056FD4] rounded-full opacity-[0.02] blur-3xl group-hover:opacity-[0.06] transition-opacity duration-500"></div>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                  <Users className="w-8 h-8 text-white" />
                </div>

                <h3
                  className="text-[1.75rem] text-[#14212A] mb-4 leading-[1.2]"
                  style={{ fontWeight: 700 }}
                >
                  Learn + Collaborate
                </h3>

                <p className="text-[#14212A]/75 leading-[1.7] text-[1.0625rem]">
                  Share knowledge, best practices, and insights with a global
                  network of like-minded contributors.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group bg-white rounded-3xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_12px_48px_rgba(5,111,212,0.15)] hover:border-[#056FD4]/20 transition-all duration-500 relative overflow-hidden text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#056FD4] rounded-full opacity-[0.02] blur-3xl group-hover:opacity-[0.06] transition-opacity duration-500"></div>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>

                <h3
                  className="text-[1.75rem] text-[#14212A] mb-4 leading-[1.2]"
                  style={{ fontWeight: 700 }}
                >
                  Innovate + Reimagine
                </h3>

                <p className="text-[#14212A]/75 leading-[1.7] text-[1.0625rem]">
                  Challenge the status quo, experiment with new approaches, and
                  co-create the future of work.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group bg-white rounded-3xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_12px_48px_rgba(5,111,212,0.15)] hover:border-[#056FD4]/20 transition-all duration-500 relative overflow-hidden text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#056FD4] rounded-full opacity-[0.02] blur-3xl group-hover:opacity-[0.06] transition-opacity duration-500"></div>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                  <Target className="w-8 h-8 text-white" />
                </div>

                <h3
                  className="text-[1.75rem] text-[#14212A] mb-4 leading-[1.2]"
                  style={{ fontWeight: 700 }}
                >
                  Support + Rise Together
                </h3>

                <p className="text-[#14212A]/75 leading-[1.7] text-[1.0625rem]">
                  Celebrate wins, support each other through challenges, and
                  lift one another toward shared success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Community Section */}
      <section className="relative py-20 px-6 bg-white overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-[5%] w-96 h-96 bg-purple-100 rounded-full opacity-[0.08] blur-[120px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-[1200px] mx-auto">
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
                  Get Involved
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
              Real People. Real Journeys.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                name: "Maya",
                quote:
                  "I went from feeling stuck to building skills I never thought I'd have. The community made all the difference.",
                image:
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTMxNTQ5MHww&ixlib=rb-4.1.0&q=80&w=1080",
                delay: 0.1,
              },
              {
                name: "Carlos",
                quote:
                  "Reboo8 didn't just give me work — it gave me purpose, growth, and a global network I never knew I needed.",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjUzMTU0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
                delay: 0.2,
              },
              {
                name: "Nia",
                quote:
                  "The mentorship and learning opportunities here are unmatched. I feel like I'm part of something bigger.",
                image:
                  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTMxNTQ5MHww&ixlib=rb-4.1.0&q=80&w=1080",
                delay: 0.3,
              },
              {
                name: "Kenji",
                quote:
                  "Flexible work that respects my time, my goals, and my life. That's what Reboo8 delivered — and more.",
                image:
                  "https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjUzMTU0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
                delay: 0.4,
              },
            ].map((story) => (
              <motion.div
                key={story.name}
                className="group bg-gradient-to-br from-white to-[#F8FAFC] rounded-3xl p-8 shadow-[0_4px_32px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_48px_rgba(5,111,212,0.12)] transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: story.delay }}
              >
                <div className="flex items-start gap-5 mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-xl object-cover ring-2 ring-[#056FD4]/10 group-hover:ring-[#056FD4]/30 transition-all duration-500"
                  />
                  <div>
                    <p
                      className="text-lg text-[#14212A] mb-1"
                      style={{ fontWeight: 700 }}
                    >
                      {story.name}
                    </p>
                    <p className="text-sm text-[#14212A]/60">
                      Community Member
                    </p>
                  </div>
                </div>

                <p className="text-[#14212A]/85 leading-[1.75] text-[1.0625rem] italic">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* This is More Than Work Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-[#F8FAFC] to-[#E8F2FF] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full opacity-[0.1] blur-[120px]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background:
                "radial-gradient(ellipse, rgba(5, 111, 212, 0.8), rgba(4, 97, 196, 0.4))",
            }}
          />
        </div>

        <div className="relative max-w-[1000px] mx-auto text-center">
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white border border-[#056FD4]/20 rounded-full px-6 py-2.5">
              <p
                className="text-sm tracking-[0.15em] text-[#056FD4] uppercase"
                style={{ fontWeight: 600 }}
              >
                The Movement
              </p>
            </div>
          </motion.div>

          <motion.h2
            className="text-[3.5rem] text-[#14212A] mb-8 leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ fontWeight: 800 }}
          >
            This Is More Than Work. It&apos;s a Transformation.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Heart, label: "5,000+ Mentorship Hours" },
              { icon: MessageCircle, label: "Global Community" },
              { icon: Rocket, label: "Continuous Learning" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <item.icon className="w-7 h-7 text-[#056FD4]" />
                </div>
                <p className="text-[#14212A]" style={{ fontWeight: 600 }}>
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-white to-[#F8FAFC]">
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
            Ready to Join the Movement?
          </motion.h2>

          <motion.p
            className="text-xl text-[#14212A]/75 mb-14 leading-[1.7] max-w-[680px] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Be part of a community that's reimagining work, expanding
            opportunity, and building a better future together.
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
              <span className="relative z-10">Become a Member</span>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0456a8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              className="relative bg-transparent text-[#14212A] px-14 py-5 rounded-full border-2 border-[#14212A]/15 hover:border-[#14212A] transition-all duration-300 overflow-hidden group"
              style={{ fontWeight: 600, fontSize: "1.125rem" }}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Learn More
              </span>
              <div className="absolute inset-0 bg-[#14212A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
