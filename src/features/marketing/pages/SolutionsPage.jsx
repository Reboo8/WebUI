import { Header } from "../../layout/components/Header.jsx";
import { Footer } from "../../layout/components/Footer.jsx";
import {
  Zap,
  Target,
  BarChart3,
  Users,
  Shield,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-56 pb-40 px-6 overflow-hidden bg-gradient-to-b from-white via-[#FAFBFF] to-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-40 right-1/4 w-[700px] h-[700px] rounded-full opacity-[0.08] blur-[100px]"
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
            className="absolute -bottom-20 left-0 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[120px]"
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

        <div className="relative max-w-[900px] mx-auto">
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
                Solutions
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
            Tools and Workflows for the Future of Work.
          </motion.h1>

          <motion.p
            className="text-[1.375rem] text-[#14212A]/75 mb-12 max-w-[680px] leading-[1.7]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Reboo8 delivers intelligent, human-centered workflows that blend
            capability, agility, and AI-driven insight.
          </motion.p>

          <motion.div
            className="flex items-center gap-5 flex-wrap"
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
                Start Using Reboo8
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
              See It in Action
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars Section */}
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
                  Our Approach
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
              Three Pillars Powering Modern Work
            </motion.h2>

            <motion.p
              className="text-xl text-[#14212A]/70 max-w-[700px] mx-auto leading-[1.6]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A comprehensive framework that combines people, processes, and
              intelligence.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="group bg-gradient-to-br from-white to-[#F8FAFC] rounded-3xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_12px_48px_rgba(5,111,212,0.15)] hover:border-[#056FD4]/20 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#056FD4] rounded-full opacity-[0.02] blur-3xl group-hover:opacity-[0.06] transition-opacity duration-500"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                  <Zap className="w-8 h-8 text-white" />
                </div>

                <h3
                  className="text-[1.75rem] text-[#14212A] mb-4 leading-[1.2]"
                  style={{ fontWeight: 700 }}
                >
                  Intelligent Tasking
                </h3>

                <p className="text-[#14212A]/75 leading-[1.7] text-[1.0625rem]">
                  Smart routing and workflows powered by adaptive AI —
                  connecting the right talent with the right tasks at scale.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group bg-gradient-to-br from-white to-[#F8FAFC] rounded-3xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_12px_48px_rgba(5,111,212,0.15)] hover:border-[#056FD4]/20 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#056FD4] rounded-full opacity-[0.02] blur-3xl group-hover:opacity-[0.06] transition-opacity duration-500"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                  <Users className="w-8 h-8 text-white" />
                </div>

                <h3
                  className="text-[1.75rem] text-[#14212A] mb-4 leading-[1.2]"
                  style={{ fontWeight: 700 }}
                >
                  Agile Workforce
                </h3>

                <p className="text-[#14212A]/75 leading-[1.7] text-[1.0625rem]">
                  A vetted, diverse talent network ready to scale your
                  operations with speed, quality, and precision.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group bg-gradient-to-br from-white to-[#F8FAFC] rounded-3xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_12px_48px_rgba(5,111,212,0.15)] hover:border-[#056FD4]/20 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#056FD4] rounded-full opacity-[0.02] blur-3xl group-hover:opacity-[0.06] transition-opacity duration-500"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>

                <h3
                  className="text-[1.75rem] text-[#14212A] mb-4 leading-[1.2]"
                  style={{ fontWeight: 700 }}
                >
                  Elastic Systems
                </h3>

                <p className="text-[#14212A]/75 leading-[1.7] text-[1.0625rem]">
                  Infrastructure that expands or contracts with your needs —
                  designed to handle spikes without friction.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smarter Systems Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-[#F8FAFC] via-white to-white overflow-hidden">
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
                    For Business
                  </p>
                </div>
              </motion.div>

              <h2
                className="text-[3.25rem] text-[#14212A] mb-6 leading-[1.15]"
                style={{ fontWeight: 800 }}
              >
                Smarter Systems That Scale With Your Business
              </h2>

              <p className="text-lg text-[#14212A]/80 leading-[1.7] mb-10">
                Build operations that flex with demand, reduce overhead, and
                maintain quality — without compromising on human capability.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#056FD4] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4
                      className="text-lg text-[#14212A] mb-1.5"
                      style={{ fontWeight: 700 }}
                    >
                      Deploy Instant Capacity
                    </h4>
                    <p className="text-[#14212A]/70 leading-[1.6]">
                      Scale up or down in hours, not weeks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#056FD4] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4
                      className="text-lg text-[#14212A] mb-1.5"
                      style={{ fontWeight: 700 }}
                    >
                      Access Pre-Vetted Talent
                    </h4>
                    <p className="text-[#14212A]/70 leading-[1.6]">
                      Quality assurance built into every match.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#056FD4] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4
                      className="text-lg text-[#14212A] mb-1.5"
                      style={{ fontWeight: 700 }}
                    >
                      Reduce Fixed Overhead
                    </h4>
                    <p className="text-[#14212A]/70 leading-[1.6]">
                      Pay for performance, not empty seats.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#056FD4] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4
                      className="text-lg text-[#14212A] mb-1.5"
                      style={{ fontWeight: 700 }}
                    >
                      Integrate Seamlessly
                    </h4>
                    <p className="text-[#14212A]/70 leading-[1.6]">
                      Plug into your existing tools and workflows.
                    </p>
                  </div>
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
              <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.15)] bg-gradient-to-br from-[#F0F6FF] to-[#E8F2FF] p-12 border border-[#056FD4]/10">
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-[#056FD4] rounded-xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#14212A]/60">
                          Task Completion
                        </p>
                        <p
                          className="text-2xl text-[#14212A]"
                          style={{ fontWeight: 800 }}
                        >
                          98.5%
                        </p>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#056FD4] to-[#0456a8]"
                        initial={{ width: 0 }}
                        whileInView={{ width: "98.5%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-[#056FD4] rounded-xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#14212A]/60">
                          Quality Score
                        </p>
                        <p
                          className="text-2xl text-[#14212A]"
                          style={{ fontWeight: 800 }}
                        >
                          9.4/10
                        </p>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#056FD4] to-[#0456a8]"
                        initial={{ width: 0 }}
                        whileInView={{ width: "94%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.7 }}
                      />
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-[#056FD4] rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#14212A]/60">Reliability</p>
                        <p
                          className="text-2xl text-[#14212A]"
                          style={{ fontWeight: 800 }}
                        >
                          99.2%
                        </p>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#056FD4] to-[#0456a8]"
                        initial={{ width: 0 }}
                        whileInView={{ width: "99.2%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.9 }}
                      />
                    </div>
                  </div>
                </div>
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

      {/* Flexible Talent Network Section */}
      <section className="relative py-20 px-6 bg-white overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-[5%] w-96 h-96 bg-purple-100 rounded-full opacity-[0.08] blur-[120px] pointer-events-none"
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
                  alt="Diverse team collaboration"
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
                    For Talent
                  </p>
                </div>
              </motion.div>

              <h2
                className="text-[3.25rem] text-[#14212A] mb-6 leading-[1.15]"
                style={{ fontWeight: 800 }}
              >
                A Diverse, Flexible, Ready Talent Network
              </h2>

              <p className="text-lg text-[#14212A]/80 leading-[1.7] mb-8">
                Access meaningful work that grows with you. Work when it fits
                your life — not the other way around.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#056FD4] rounded-full"></div>
                  <p className="text-[#14212A]/80 leading-[1.6]">
                    50,000+ active contributors worldwide
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#056FD4] rounded-full"></div>
                  <p className="text-[#14212A]/80 leading-[1.6]">
                    Work from anywhere, on your schedule
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#056FD4] rounded-full"></div>
                  <p className="text-[#14212A]/80 leading-[1.6]">
                    Fair compensation and transparent processes
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#056FD4] rounded-full"></div>
                  <p className="text-[#14212A]/80 leading-[1.6]">
                    Growth opportunities through real work
                  </p>
                </div>
              </div>

              <motion.button
                className="relative bg-[#056FD4] text-white px-10 py-4 rounded-full transition-all duration-300 overflow-hidden group shadow-lg shadow-[#056FD4]/20"
                style={{ fontWeight: 600, fontSize: "1.0625rem" }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 16px 40px rgba(5,111,212,0.25)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Join</span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0456a8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scalable Operations Section */}
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
                  Key Features
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
              Scalable Operations Across Industries
            </motion.h2>

            <motion.p
              className="text-xl text-[#14212A]/70 max-w-[720px] mx-auto leading-[1.6]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From e-commerce to customer support — we power workflows at every
              scale.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Customer Experience",
                desc: "Human-first support that scales with demand — chat, email, voice, and beyond.",
                delay: 0.1,
              },
              {
                title: "Content Operations",
                desc: "Moderation, tagging, metadata enrichment — intelligent and accurate at scale.",
                delay: 0.2,
              },
              {
                title: "E-Commerce & Retail",
                desc: "Product listings, catalog management, and inventory operations — done right.",
                delay: 0.3,
              },
              {
                title: "Data Intelligence",
                desc: "Annotation, labeling, validation — powering machine learning and AI systems.",
                delay: 0.4,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_8px_40px_rgba(5,111,212,0.12)] hover:border-[#056FD4]/20 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                <h3
                  className="text-xl text-[#14212A] mb-3"
                  style={{ fontWeight: 700 }}
                >
                  {item.title}
                </h3>
                <p className="text-[#14212A]/70 leading-[1.7]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Solutions Matter Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
                  Why It Matters
                </p>
              </div>
            </motion.div>

            <h2
              className="text-[3.5rem] text-[#14212A] mb-6 leading-[1.1]"
              style={{ fontWeight: 800 }}
            >
              Why These Solutions Matter
            </h2>

            <p className="text-xl text-[#14212A]/75 leading-[1.7] max-w-[760px] mx-auto">
              Traditional work models weren't built for this moment. Reboo8 is —
              flexible, intelligent, and designed to scale with real human
              capability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h3
                  className="text-2xl text-[#14212A] mb-3"
                  style={{ fontWeight: 700 }}
                >
                  50M+
                </h3>
                <p className="text-[#14212A]/70 leading-[1.7]">
                  Global workers seeking flexible, tech-enabled opportunities
                </p>
              </div>

              <div>
                <h3
                  className="text-2xl text-[#14212A] mb-3"
                  style={{ fontWeight: 700 }}
                >
                  3x Faster
                </h3>
                <p className="text-[#14212A]/70 leading-[1.7]">
                  Time-to-deploy vs traditional hiring models
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h3
                  className="text-2xl text-[#14212A] mb-3"
                  style={{ fontWeight: 700 }}
                >
                  40% Lower
                </h3>
                <p className="text-[#14212A]/70 leading-[1.7]">
                  Operational costs compared to fixed workforce models
                </p>
              </div>

              <div>
                <h3
                  className="text-2xl text-[#14212A] mb-3"
                  style={{ fontWeight: 700 }}
                >
                  98.5%
                </h3>
                <p className="text-[#14212A]/70 leading-[1.7]">
                  Average task completion rate across all operations
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Organizations Using Reboo8 Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-[#F8FAFC] to-white overflow-hidden">
        <motion.div
          className="absolute top-20 right-[10%] w-72 h-72 bg-purple-100 rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-[3rem] text-[#14212A] mb-8 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ fontWeight: 800 }}
            >
              See How Organizations Use Reboo8
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                desc: "Scaled product listing operations by 300% during peak season — maintaining 99% accuracy.",
              },
              {
                title: "Tech Startup",
                desc: "Launched multilingual customer support across 12 markets in under 3 weeks.",
              },
              {
                title: "Media & Entertainment",
                desc: "Processed 2M+ content moderation tasks monthly with 98% quality scores.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-10 shadow-[0_4px_32px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_48px_rgba(5,111,212,0.12)] transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <h3
                  className="text-xl text-[#14212A] mb-4"
                  style={{ fontWeight: 700 }}
                >
                  {item.title}
                </h3>
                <p className="text-[#14212A]/75 leading-[1.7]">{item.desc}</p>
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
            Ready to Upgrade Your Workflows?
          </motion.h2>

          <motion.p
            className="text-xl text-[#14212A]/75 mb-14 leading-[1.7] max-w-[680px] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            See how Reboo8 can transform your operations — flexible,
            intelligent, and human-centered.
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
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0456a8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              className="relative bg-transparent text-[#14212A] px-14 py-5 rounded-full border-2 border-[#14212A]/15 hover:border-[#14212A] transition-all duration-300 overflow-hidden group"
              style={{ fontWeight: 600, fontSize: "1.125rem" }}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Book a Demo
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
