import { Header } from "../../layout/components/Header.jsx";
import { Footer } from "../../layout/components/Footer.jsx";
import logo from "@/assets/logo.svg";
import {
  Workflow,
  Network,
  Layers,
  Globe,
  LineChart,
  CheckCircle,
  Quote,
  Shield,
  Zap,
  TrendingUp,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import { motion } from "motion/react";
import { useNavigation } from "../../../shared/hooks/useNavigation";

export default function Home() {
  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Premium Cinematic with Floating Elements */}
      <section className="relative pt-36 pb-32 px-6 overflow-hidden bg-gradient-to-b from-white via-[#FAFBFF] to-white">
        {/* Creative blue gradient background layers - brand aligned */}
        {/* Creative Background Elements */}
        {/* Creative Background Elements - Clean & Professional */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[#FAFBFF]">
          {/* Subtle Grid texture for structure */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#056FD4 1px, transparent 1px), linear-gradient(90deg, #056FD4 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Soft Blur - Top Right */}
          <div className="absolute -top-[10%] -right-[5%] w-[800px] h-[800px] bg-blue-50/80 rounded-full blur-[100px] -z-10" />

          {/* Soft Blur - Bottom Left */}
          <div className="absolute -bottom-[10%] -left-[5%] w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-[100px] -z-10" />
        </div>

        {/* Main Hero Content */}
        <div
          className="relative max-w-[1200px] mx-auto text-center"
          style={{ zIndex: 5 }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-10 overflow-hidden max-w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-[#EFF6FF] px-1 py-2 rounded-full border border-[#DBEAFE] shadow-sm max-w-[90vw] md:max-w-[700px] overflow-hidden whitespace-nowrap relative">
              <div className="flex items-center gap-8">
                {/* Scrolling Marquee */}
                <motion.div
                  className="flex items-center gap-8 text-[#056FD4] text-xs font-bold tracking-[0.1em] uppercase"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 25,
                  }}
                >
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center gap-8 shrink-0">
                      <span>Data labelling</span>
                      <span>•</span>
                      <span>Annotation</span>
                      <span>•</span>
                      <span>Model Evaluation</span>
                      <span>•</span>
                      <span>
                        RLHF (reinforcement learning from human feedback)
                      </span>
                      <span>•</span>
                      <span>Reinforcement scoring</span>
                      <span>•</span>
                      <span>Content, safety, and accuracy assessments</span>
                      <span>•</span>
                      <span>Fine-tuning support</span>
                      <span>•</span>
                      <span>Training data pipelines</span>
                      <span>•</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Fade Edges for Marquee */}
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#EFF6FF] to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#EFF6FF] to-transparent pointer-events-none" />
            </div>
          </motion.div>

          <motion.h1
            className="relative mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ fontWeight: 800 }}
          >
            <span className="block text-[4rem] leading-[1.05] text-[#14212A]">
              Scaling Data Operations through
            </span>
            <span className="block text-[4rem] leading-[1.05] mt-2">
              <span className="text-[#14212A] bg-gradient-to-r from-[#056FD4] to-[#0456a8] bg-clip-text text-transparent">
                Human in the Loop
              </span>
              <span className="text-[#14212A]"> Workflows</span>
            </span>
          </motion.h1>

          {/* <motion.p
            className="text-[1.625rem] text-[#14212A] opacity-70 mb-7 max-w-[740px] mx-auto leading-[1.35]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            style={{ fontWeight: 600 }}
          >
            Where people lead — and intelligent systems support.
          </motion.p> */}

          <motion.p
            className="text-[1.125rem] text-[#14212A] opacity-55 mb-14 max-w-[760px] mx-auto leading-[1.65]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.55 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            The backbone behind AI training, where human judgment supports Data
            Operations as a stable system without tying opportunities to
            location.
          </motion.p>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            <motion.button
              className="relative bg-[#056FD4] text-white px-12 py-[1.125rem] rounded-full transition-all duration-300 overflow-hidden shadow-[0_8px_30px_rgba(5,111,212,0.25)]"
              style={{ fontWeight: 600 }}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 12px 40px rgba(5,111,212,0.3)",
                backgroundColor: "#0461c4",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Journey <ArrowRight className="w-5 h-5" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-white via-[#F5F8FF] to-white overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-200 rounded-full opacity-[0.08] blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-[0.08] blur-[90px] pointer-events-none"></div>

        <motion.div
          className="absolute top-32 left-[15%] w-16 h-16 border-2 border-purple-300 rounded-lg opacity-20 pointer-events-none"
          animate={{ rotate: [0, 90, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-[20%] w-12 h-12 border-2 border-blue-300 rounded-full opacity-20 pointer-events-none"
          animate={{ y: [0, -25, 0], scale: [1, 1.1, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
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
              {/* <div className="bg-[#F0F6FF] border border-[#056FD4]/10 rounded-full px-6 py-2.5">
                <p
                  className="text-sm tracking-[0.15em] text-[#056FD4] uppercase"
                  style={{ fontWeight: 600 }}
                >
                  PROVEN AT SCALE
                </p>
              </div> */}
            </motion.div>
            <motion.h2
              className="text-[3rem] text-[#14212A] mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontWeight: 800 }}
            >
              <div className="flex items-center justify-center gap-2">
                <span>Teams building with</span>
                <img src={logo} alt="Reboo8" className="h-10 w-auto" />
              </div>
            </motion.h2>
            <motion.p
              className="text-lg text-[#14212A]/75 max-w-[600px] mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontWeight: 500 }}
            >
              Forward-thinking organizations using Reboo8 to reimagine work
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-10 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex justify-center">
              <div
                className="text-2xl tracking-wider text-[#14212A]/50 hover:text-[#056FD4] transition-colors cursor-pointer"
                style={{ fontWeight: 700 }}
              >
                ACME
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className="text-2xl tracking-wider text-[#14212A]/50 hover:text-[#056FD4] transition-colors cursor-pointer"
                style={{ fontWeight: 700 }}
              >
                VERTEX
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className="text-2xl tracking-wider text-[#14212A]/50 hover:text-[#056FD4] transition-colors cursor-pointer"
                style={{ fontWeight: 700 }}
              >
                PRISM
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className="text-2xl tracking-wider text-[#14212A]/50 hover:text-[#056FD4] transition-colors cursor-pointer"
                style={{ fontWeight: 700 }}
              >
                NEXUS
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className="text-2xl tracking-wider text-[#14212A]/50 hover:text-[#056FD4] transition-colors cursor-pointer"
                style={{ fontWeight: 700 }}
              >
                APEX
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className="text-2xl tracking-wider text-[#14212A]/50 hover:text-[#056FD4] transition-colors cursor-pointer"
                style={{ fontWeight: 700 }}
              >
                ZENITH
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Reboo8 Section */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Image Column */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] group">
                <img
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
                  alt="AI and Human Synergy"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14212A]/40 to-transparent pointer-events-none"></div>

                {/* Floating AI Element */}
                <div className="absolute center inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#056FD4] rounded-full opacity-80 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Decorative Backdrop */}
              <motion.div
                className="absolute -top-10 -left-10 w-full h-full border-2 border-[#056FD4]/10 rounded-2xl -z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </motion.div>

            {/* Content Column */}
            <motion.div
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
                    Who We Are
                  </p>
                </div>
              </motion.div>

              <h2
                className="text-[3rem] text-[#14212A] mb-8 leading-[1.1]"
                style={{ fontWeight: 800 }}
              >
                Redefining Work with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#056FD4] to-[#0456a8]">
                  AI-Human Synergy
                </span>
              </h2>

              <p className="text-lg text-[#14212A]/70 leading-[1.8] mb-10">
                Reboo8 isn't just a platform; it's a new operating system for
                the global workforce. We combine the creativity and judgment of
                expert human talent with the speed and scalability of advanced
                AI, delivering results that neither could achieve alone.
              </p>

              <button
                onClick={() => navigateTo("about")}
                className="group flex items-center gap-2 text-[#056FD4] text-lg font-semibold hover:text-[#0456a8] transition-colors"
              >
                <span>Learn more about Reboo8</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      {/* <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-white">
        <motion.div
          className="absolute top-1/4 left-[5%] w-96 h-96 bg-blue-100 rounded-full opacity-[0.08] blur-[120px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-[8%] w-80 h-80 bg-purple-100 rounded-full opacity-[0.06] blur-[100px] pointer-events-none"
          animate={{ scale: [1, 1.2, 1], y: [0, 30, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute top-20 right-[15%] w-20 h-20 border-2 border-blue-200 rounded-2xl opacity-20 pointer-events-none"
          animate={{ rotate: [0, 180, 360], y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
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
                    Our Impact
                  </p>
                </div>
              </motion.div>

              <motion.h2
                className="text-[3.25rem] text-[#14212A] mb-6 leading-[1.15]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{ fontWeight: 800 }}
              >
                Empowering Talent &<br />
                Transforming Work
              </motion.h2>

              <motion.p
                className="text-lg text-[#14212A]/70 mb-10 leading-[1.7] max-w-[480px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We help you unlock human potential through intelligent systems
                designed for real growth and meaningful impact.
              </motion.p>

              <motion.button
                className="relative bg-[#056FD4] text-white px-10 py-4 rounded-full transition-all duration-300 overflow-hidden group shadow-lg shadow-[#056FD4]/20"
                style={{ fontWeight: 600, fontSize: "1.0625rem" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 16px 40px rgba(5,111,212,0.25)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0456a8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_8px_40px_rgba(5,111,212,0.12)] hover:border-[#056FD4]/20 transition-all duration-500 group overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#056FD4] rounded-full opacity-[0.03] blur-2xl group-hover:opacity-[0.06] transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span
                      className="text-[3.5rem] text-[#14212A] leading-none"
                      style={{ fontWeight: 800 }}
                    >
                      50
                    </span>
                    <span
                      className="text-[2.5rem] text-[#056FD4] leading-none"
                      style={{ fontWeight: 800 }}
                    >
                      k+
                    </span>
                  </div>
                  <p
                    className="text-[#14212A]/70 text-sm leading-relaxed"
                    style={{ fontWeight: 500 }}
                  >
                    Active Talent Network
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_8px_40px_rgba(5,111,212,0.12)] hover:border-[#056FD4]/20 transition-all duration-500 group overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#056FD4] rounded-full opacity-[0.03] blur-2xl group-hover:opacity-[0.06] transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span
                      className="text-[3.5rem] text-[#14212A] leading-none"
                      style={{ fontWeight: 800 }}
                    >
                      200
                    </span>
                    <span
                      className="text-[2.5rem] text-[#056FD4] leading-none"
                      style={{ fontWeight: 800 }}
                    >
                      +
                    </span>
                  </div>
                  <p
                    className="text-[#14212A]/70 text-sm leading-relaxed"
                    style={{ fontWeight: 500 }}
                  >
                    Partner Organizations
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_8px_40px_rgba(5,111,212,0.12)] hover:border-[#056FD4]/20 transition-all duration-500 group overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#056FD4] rounded-full opacity-[0.03] blur-2xl group-hover:opacity-[0.06] transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span
                      className="text-[3.5rem] text-[#14212A] leading-none"
                      style={{ fontWeight: 800 }}
                    >
                      1.2
                    </span>
                    <span
                      className="text-[2.5rem] text-[#056FD4] leading-none"
                      style={{ fontWeight: 800 }}
                    >
                      M+
                    </span>
                  </div>
                  <p
                    className="text-[#14212A]/70 text-sm leading-relaxed"
                    style={{ fontWeight: 500 }}
                  >
                    Tasks Completed
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_8px_40px_rgba(5,111,212,0.12)] hover:border-[#056FD4]/20 transition-all duration-500 group overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#056FD4] rounded-full opacity-[0.03] blur-2xl group-hover:opacity-[0.06] transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span
                      className="text-[3.5rem] text-[#14212A] leading-none"
                      style={{ fontWeight: 800 }}
                    >
                      30
                    </span>
                    <span
                      className="text-[2.5rem] text-[#056FD4] leading-none"
                      style={{ fontWeight: 800 }}
                    >
                      +
                    </span>
                  </div>
                  <p
                    className="text-[#14212A]/70 text-sm leading-relaxed"
                    style={{ fontWeight: 500 }}
                  >
                    Countries Worldwide
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Our Approach Framework */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
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
                  Our Framework
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
              How We Help Work Flow Better
            </motion.h2>
            <motion.p
              className="text-xl text-[#14212A] opacity-70 max-w-[700px] mx-auto leading-[1.6]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A simple, scalable framework designed for people, powered by
              intelligence.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              className="group bg-white rounded-2xl p-10 shadow-[0_2px_24px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_8px_40px_rgba(5,111,212,0.12)] hover:border-[#056FD4]/20 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-xl flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-500">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-[1.75rem] text-[#14212A] mb-4"
                style={{ fontWeight: 700 }}
              >
                Intelligent Workflows
              </h3>
              <p className="text-[#14212A] opacity-70 leading-[1.7] text-[1.0625rem]">
                Smart, adaptable processes powered by human judgment and
                technical precision.
              </p>
            </motion.div>

            <motion.div
              className="group bg-white rounded-2xl p-10 shadow-[0_2px_24px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_8px_40px_rgba(5,111,212,0.12)] hover:border-[#056FD4]/20 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-xl flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-500">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-[1.75rem] text-[#14212A] mb-4"
                style={{ fontWeight: 700 }}
              >
                Agility Network
              </h3>
              <p className="text-[#14212A] opacity-70 leading-[1.7] text-[1.0625rem]">
                A flexible, diverse talent ecosystem ready for modern work
                demands.
              </p>
            </motion.div>

            <motion.div
              className="group bg-white rounded-2xl p-10 shadow-[0_2px_24px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_8px_40px_rgba(5,111,212,0.12)] hover:border-[#056FD4]/20 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-xl flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-500">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-[1.75rem] text-[#14212A] mb-4"
                style={{ fontWeight: 700 }}
              >
                Elastic Infrastructure
              </h3>
              <p className="text-[#14212A] opacity-70 leading-[1.7] text-[1.0625rem]">
                Scalable systems that expand or contract workflow needs evolve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features with Human Imagery */}
      <section className="relative pt-20 pb-0 px-6 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#F5F8FF] to-transparent opacity-50 pointer-events-none"></div>
        <motion.div
          className="absolute top-1/4 right-[5%] w-96 h-96 bg-purple-100 rounded-full opacity-[0.12] blur-[120px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-[8%] w-80 h-80 bg-blue-100 rounded-full opacity-[0.1] blur-[100px] pointer-events-none"
          animate={{ scale: [1, 1.2, 1], y: [0, 30, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute top-1/3 left-[12%] w-20 h-20 border-2 border-purple-200 rounded-2xl opacity-30 pointer-events-none"
          animate={{ rotate: [0, 180, 360], y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-[18%] w-14 h-14 bg-blue-200/30 rounded-full pointer-events-none"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <div className="relative max-w-[1200px] mx-auto">
          {/* Two-Way Ecosystem Header (Merged) */}
          <div className="text-center mb-24">
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
                  The Reboo8 Ecosystem
                </p>
              </div>
            </motion.div>
            <motion.h2
              className="text-[4rem] text-[#14212A] mb-6 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontWeight: 800 }}
            >
              Bridging the Gap Between
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#056FD4] to-[#0456a8]">
                Ambition & Achievement
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-[#14212A] opacity-70 max-w-[800px] mx-auto leading-[1.6]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We’ve built a dual-sided platform where skilled professionals find
              meaningful work and businesses find scalable, high-quality
              operations.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center justify-center mb-5"
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
                Opportunities That Grow With You
              </h2>
              <p className="text-lg text-[#14212A]/80 leading-[1.7] mb-10">
                Whether you're seeking flexibility, purpose, or a clearer path
                forward, Reboo8 helps you work in ways that fit your life — not
                the other way around.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#056FD4] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#056FD4]/20">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4
                      className="text-lg text-[#14212A] mb-2"
                      style={{ fontWeight: 700 }}
                    >
                      Access from Anywhere
                    </h4>
                    <p className="text-[#14212A]/70 leading-[1.6]">
                      Work that adapts to your schedule and environment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#056FD4] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#056FD4]/20">
                    <LineChart className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4
                      className="text-lg text-[#14212A] mb-2"
                      style={{ fontWeight: 700 }}
                    >
                      Growth Through Real Work
                    </h4>
                    <p className="text-[#14212A]/70 leading-[1.6]">
                      Opportunities designed to build skills and confidence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#056FD4] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#056FD4]/20">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4
                      className="text-lg text-[#14212A] mb-2"
                      style={{ fontWeight: 700 }}
                    >
                      Fair & Transparent Systems
                    </h4>
                    <p className="text-[#14212A]/70 leading-[1.6]">
                      Clear tasks, clear expectations, no guesswork.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button
                  onClick={() => navigateTo("community")}
                  className="group flex items-center gap-2 text-[#056FD4] text-lg font-semibold hover:text-[#0456a8] transition-colors"
                >
                  <span>Join the Community</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                <img
                  src="https://images.unsplash.com/photo-1743865318581-2e0e59e7292e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHdvcmtpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzY1MzE1NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional working"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14212A]/10 to-transparent pointer-events-none"></div>
              </div>

              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#056FD4] rounded-full opacity-10 blur-2xl"
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

      {/* Features for Business */}
      <section className="relative pt-0 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Image Column (Left) */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHw2fHxkYXRhJTIwYW5hbHlzdCUyMHRlYW0lMjB3b3JraW5nfGVufDF8fHx8MTc2NTM5NDg3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Business Team"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14212A]/10 to-transparent pointer-events-none"></div>
              </div>

              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 bg-[#056FD4] rounded-full opacity-10 blur-2xl"
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

            {/* Content Column (Right) */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center justify-center mb-5"
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
                Scale Operations With Confidence
              </h2>
              <p className="text-lg text-[#14212A]/80 leading-[1.7] mb-10">
                Leverage our elastic workforce to handle complex data
                operations, ensuring speed and accuracy without the overhead.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#056FD4] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#056FD4]/20">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4
                      className="text-lg text-[#14212A] mb-2"
                      style={{ fontWeight: 700 }}
                    >
                      On-Demand Scalability
                    </h4>
                    <p className="text-[#14212A]/70 leading-[1.6]">
                      Scale your team up or down instantly based on project
                      needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#056FD4] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#056FD4]/20">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4
                      className="text-lg text-[#14212A] mb-2"
                      style={{ fontWeight: 700 }}
                    >
                      Enterprise Security
                    </h4>
                    <p className="text-[#14212A]/70 leading-[1.6]">
                      Rigorous data protection standards you can trust.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#056FD4] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#056FD4]/20">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4
                      className="text-lg text-[#14212A] mb-2"
                      style={{ fontWeight: 700 }}
                    >
                      Rapid Execution
                    </h4>
                    <p className="text-[#14212A]/70 leading-[1.6]">
                      Accelerate timelines with our always-on global workforce.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button
                  onClick={() => navigateTo("solutions")}
                  className="group flex items-center gap-2 text-[#056FD4] text-lg font-semibold hover:text-[#0456a8] transition-colors"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-white">
        <motion.div
          className="absolute top-20 left-[5%] w-72 h-72 bg-purple-100 rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
          animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-[8%] w-64 h-64 bg-blue-100 rounded-full opacity-[0.08] blur-[90px] pointer-events-none"
          animate={{ y: [0, 35, 0], scale: [1, 1.15, 1] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="relative max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
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
              What People Are Saying
            </motion.h2>
            <motion.p
              className="text-xl text-[#14212A]/75 leading-[1.6] max-w-[680px] mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Real experiences from people growing their careers with Reboo8.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <motion.div
              className="group bg-gradient-to-b from-white to-[#F8FAFC] rounded-3xl p-10 shadow-[0_4px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_48px_rgba(5,111,212,0.12)] transition-all duration-500 border border-gray-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#056FD4] to-[#0456a8] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative mb-8">
                <img
                  src="https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTI3MDIwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Priya"
                  className="w-20 h-20 rounded-2xl object-cover mb-5 ring-2 ring-[#056FD4]/10 group-hover:ring-[#056FD4]/30 transition-all duration-500"
                />
                <div>
                  <p
                    className="text-[#14212A] mb-1"
                    style={{ fontWeight: 700, fontSize: "1.125rem" }}
                  >
                    Priya
                  </p>
                  <p className="text-sm text-[#14212A]/60">
                    Support Specialist
                  </p>
                </div>
              </div>

              <Quote className="w-10 h-10 text-[#056FD4] opacity-15 mb-5" />

              <p className="text-[#14212A]/85 leading-[1.75] text-[1.0625rem]">
                "Reboo8 helped me find meaningful work in weeks, not months. The
                platform truly understands what flexibility means for real
                people."
              </p>
            </motion.div>

            <motion.div
              className="group bg-gradient-to-b from-white to-[#F8FAFC] rounded-3xl p-10 shadow-[0_4px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_48px_rgba(5,111,212,0.12)] transition-all duration-500 border border-gray-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#056FD4] to-[#0456a8] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative mb-8">
                <img
                  src="https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTMxNTQ5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Aditya"
                  className="w-20 h-20 rounded-2xl object-cover mb-5 ring-2 ring-[#056FD4]/10 group-hover:ring-[#056FD4]/30 transition-all duration-500"
                />
                <div>
                  <p
                    className="text-[#14212A] mb-1"
                    style={{ fontWeight: 700, fontSize: "1.125rem" }}
                  >
                    Aditya
                  </p>
                  <p className="text-sm text-[#14212A]/60">
                    Operations Assistant
                  </p>
                </div>
              </div>

              <Quote className="w-10 h-10 text-[#056FD4] opacity-15 mb-5" />

              <p className="text-[#14212A]/85 leading-[1.75] text-[1.0625rem]">
                "The flexibility helped me learn, grow, and earn on my terms.
                Every task feels intentional and designed for growth."
              </p>
            </motion.div>

            <motion.div
              className="group bg-gradient-to-b from-white to-[#F8FAFC] rounded-3xl p-10 shadow-[0_4px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_48px_rgba(5,111,212,0.12)] transition-all duration-500 border border-gray-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#056FD4] to-[#0456a8] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative mb-8">
                <img
                  src="https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFufGVufDF8fHx8MTc2NTE5NzY3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Kavya"
                  className="w-20 h-20 rounded-2xl object-cover mb-5 ring-2 ring-[#056FD4]/10 group-hover:ring-[#056FD4]/30 transition-all duration-500"
                />
                <div>
                  <p
                    className="text-[#14212A] mb-1"
                    style={{ fontWeight: 700, fontSize: "1.125rem" }}
                  >
                    Kavya
                  </p>
                  <p className="text-sm text-[#14212A]/60">CX Manager</p>
                </div>
              </div>

              <Quote className="w-10 h-10 text-[#056FD4] opacity-15 mb-5" />

              <p className="text-[#14212A]/85 leading-[1.75] text-[1.0625rem]">
                "Our team scaled seamlessly. The experience was refreshing —
                human-first, intelligent, and genuinely supportive."
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Business CTA Section */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-[#14212A] px-6 py-24 md:px-20 text-center shadow-2xl shadow-[#14212A]/10">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#056FD4] rounded-full opacity-[0.15] blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#056FD4] rounded-full opacity-[0.1] blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

            {/* Animated Particles/Grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />

            <div className="relative max-w-[900px] mx-auto">
              <motion.div
                className="inline-flex items-center justify-center mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-3">
                  <p
                    className="text-sm tracking-[0.2em] text-white uppercase"
                    style={{ fontWeight: 600 }}
                  >
                    For Enterprise
                  </p>
                </div>
              </motion.div>

              <motion.h2
                className="text-[3.5rem] md:text-[4.5rem] text-white mb-8 leading-[1.05]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{ fontWeight: 800 }}
              >
                Ready to Scale Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#056FD4] to-[#4fa1f0]">
                  Data Operations?
                </span>
              </motion.h2>

              <motion.p
                className="text-xl text-white/70 mb-12 leading-[1.7] max-w-[720px] mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Partner with Reboo8 to access a global, elastic workforce that
                integrates seamlessly with your existing workflows. Quality,
                speed, and security — at scale.
              </motion.p>

              <motion.div
                className="flex items-center justify-center gap-6 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.button
                  onClick={() => navigateTo("contact")}
                  className="group relative bg-[#056FD4] text-white px-12 py-5 rounded-full overflow-hidden shadow-[0_0_40px_rgba(5,111,212,0.4)] hover:shadow-[0_0_60px_rgba(5,111,212,0.6)] transition-shadow duration-300"
                  style={{ fontWeight: 600, fontSize: "1.125rem" }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#056FD4] to-[#0456a8] transition-all duration-300 group-hover:scale-110" />
                  <span className="relative z-10 flex items-center gap-3">
                    Contact Sales
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
