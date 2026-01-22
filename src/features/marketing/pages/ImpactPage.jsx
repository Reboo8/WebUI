import { Header } from "../../layout/components/Header.jsx";
import { Footer } from "../../layout/components/Footer.jsx";
import {
  Heart,
  TrendingUp,
  Users,
  Globe2,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

export default function Impact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-56 pb-40 px-6 overflow-hidden bg-gradient-to-b from-white via-[#FAFBFF] to-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.08] blur-[100px]"
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

        <div className="relative max-w-[950px] mx-auto text-center">
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
                Our Impact
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
            Impact Isn&apos;t What We Say. It&apos;s What People Feel.
          </motion.h1>

          <motion.p
            className="text-[1.375rem] text-[#14212A]/75 mb-12 max-w-[680px] mx-auto leading-[1.7]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Reboo8 exists to expand opportunity, uplift individuals, empower
            communities, and enable equitable access to meaningful, flexible,
            tech-enabled work.
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
                View Impact Stories
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
              Explore Our Work
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Logo Grid */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-white via-[#F5F8FF] to-white overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-16 gap-y-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {["ACME", "VERTEX", "PRISM", "NEXUS", "APEX"].map((logo, index) => (
              <motion.div
                key={logo}
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div
                  className="text-2xl tracking-wider text-[#14212A]/50 hover:text-[#056FD4] transition-colors cursor-pointer"
                  style={{ fontWeight: 700 }}
                >
                  {logo}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The World of Work Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
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
                    The Problem
                  </p>
                </div>
              </motion.div>

              <h2
                className="text-[3.5rem] text-[#14212A] mb-6 leading-[1.1]"
                style={{ fontWeight: 800 }}
              >
                The World of Work Is Unequal. We're Changing That.
              </h2>

              <p className="text-lg text-[#14212A]/80 leading-[1.7] mb-6">
                Billions of people lack access to meaningful, flexible work.
                Outdated systems favor the few, while leaving most behind.
              </p>

              <p className="text-lg text-[#14212A]/80 leading-[1.7]">
                Reboo8 is rewriting the rules — creating a more accessible,
                equitable, human-centered future for work.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-[#F0F6FF] to-[#E8F2FF] rounded-2xl p-8 border border-[#056FD4]/10">
                <h3
                  className="text-2xl text-[#14212A] mb-3"
                  style={{ fontWeight: 700 }}
                >
                  Unequal Access
                </h3>
                <p className="text-[#14212A]/75 leading-[1.7]">
                  Geographic, economic, and educational barriers lock people out
                  of opportunities.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#F0F6FF] to-[#E8F2FF] rounded-2xl p-8 border border-[#056FD4]/10">
                <h3
                  className="text-2xl text-[#14212A] mb-3"
                  style={{ fontWeight: 700 }}
                >
                  Rigid Structures
                </h3>
                <p className="text-[#14212A]/75 leading-[1.7]">
                  Traditional work models don't flex with real life — families,
                  responsibilities, or individual needs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#F0F6FF] to-[#E8F2FF] rounded-2xl p-8 border border-[#056FD4]/10">
                <h3
                  className="text-2xl text-[#14212A] mb-3"
                  style={{ fontWeight: 700 }}
                >
                  Limited Growth Pathways
                </h3>
                <p className="text-[#14212A]/75 leading-[1.7]">
                  Few platforms invest in upskilling, mentorship, or career
                  advancement for contributors.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Metrics Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-[#F8FAFC] via-white to-white overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-[8%] w-96 h-96 bg-blue-100 rounded-full opacity-[0.08] blur-[120px] pointer-events-none"
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
                  By The Numbers
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
              The Reach of Our Impact
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "10,000+",
                label: "New Opportunities Created Monthly",
                icon: TrendingUp,
                delay: 0.1,
              },
              {
                number: "250K+",
                label: "Active Contributors Worldwide",
                icon: Users,
                delay: 0.2,
              },
              {
                number: "500+",
                label: "Partner Organizations",
                icon: Globe2,
                delay: 0.3,
              },
              {
                number: "25+",
                label: "Countries With Active Talent",
                icon: Award,
                delay: 0.4,
              },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="group bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_8px_40px_rgba(5,111,212,0.12)] hover:border-[#056FD4]/20 transition-all duration-500 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: stat.delay }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <h3
                  className="text-[2.75rem] text-[#14212A] mb-2 leading-none"
                  style={{ fontWeight: 800 }}
                >
                  {stat.number}
                </h3>

                <p
                  className="text-[#14212A]/70 leading-[1.6]"
                  style={{ fontWeight: 500 }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real People, Real Progress Section */}
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
                  Real Stories
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
              Real People. Real Progress.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                name: "Arjun",
                location: "Mumbai, India",
                quote:
                  "I was stuck in rigid 9-to-5 roles that didn't fit my life. Reboo8 gave me flexibility, growth, and real income — all on my terms.",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjUzMTU0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
                delay: 0.1,
              },
              {
                name: "Sofia",
                location: "São Paulo, Brazil",
                quote:
                  "As a single parent, traditional work never fit. Reboo8 let me earn while being present for my family. It changed everything.",
                image:
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTMxNTQ5MHww&ixlib=rb-4.1.0&q=80&w=1080",
                delay: 0.2,
              },
              {
                name: "Amara",
                location: "Lagos, Nigeria",
                quote:
                  "I went from limited local opportunities to working with global brands. Reboo8 gave me access I never thought possible.",
                image:
                  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTMxNTQ5MHww&ixlib=rb-4.1.0&q=80&w=1080",
                delay: 0.3,
              },
              {
                name: "Liam",
                location: "Sydney, Australia",
                quote:
                  "Reboo8 helped me transition careers without starting from scratch. Real work, real learning, real opportunity.",
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
                      {story.location}
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

      {/* Building Connections Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-[#F8FAFC] via-white to-white overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-[5%] w-96 h-96 bg-purple-100 rounded-full opacity-[0.08] blur-[120px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
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
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#056FD4] rounded-full opacity-10 blur-3xl"
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

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
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
                    Our Commitment
                  </p>
                </div>
              </motion.div>

              <h2
                className="text-[3.25rem] text-[#14212A] mb-6 leading-[1.15]"
                style={{ fontWeight: 800 }}
              >
                Building Connections That Change Lives
              </h2>

              <p className="text-lg text-[#14212A]/80 leading-[1.7] mb-8">
                We're not just building a platform — we're creating pathways to
                economic empowerment, personal growth, and meaningful impact.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#056FD4] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4
                      className="text-lg text-[#14212A] mb-2"
                      style={{ fontWeight: 700 }}
                    >
                      Human-Centered Design
                    </h4>
                    <p className="text-[#14212A]/70 leading-[1.6]">
                      Every feature is built with empathy, accessibility, and
                      dignity at the center.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#056FD4] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4
                      className="text-lg text-[#14212A] mb-2"
                      style={{ fontWeight: 700 }}
                    >
                      Continuous Learning
                    </h4>
                    <p className="text-[#14212A]/70 leading-[1.6]">
                      Opportunities to grow, upskill, and advance with every
                      task completed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#056FD4] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4
                      className="text-lg text-[#14212A] mb-2"
                      style={{ fontWeight: 700 }}
                    >
                      Global Accessibility
                    </h4>
                    <p className="text-[#14212A]/70 leading-[1.6]">
                      Breaking down geographic and economic barriers to
                      meaningful work.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
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
            Ready to Make an Impact?
          </motion.h2>

          <motion.p
            className="text-xl text-[#14212A]/75 mb-14 leading-[1.7] max-w-[680px] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Whether you're seeking opportunity or looking to create it — let's
            build something meaningful together.
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
              <span className="relative z-10">Join Reboo8</span>
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
