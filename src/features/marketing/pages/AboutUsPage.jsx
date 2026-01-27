import { Header } from "../../layout/components/Header.jsx";
import { Footer } from "../../layout/components/Footer.jsx";
import {
  Target,
  Compass,
  Heart,
  Shield,
  Sprout,
  Globe2,
  Lightbulb,
  Users,
  Quote,
  Linkedin,
  AlertTriangle,
  Eye,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

// Team data - replace with actual team member details
const teamMembers = [
  {
    name: "Rajeev Kumar",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
  },
  {
    name: "Team Member",
    role: "Co-Founder & CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
  },
  {
    name: "Team Member",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
  },
  {
    name: "Team Member",
    role: "Lead Engineer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
  },
];

const values = [
  {
    icon: Heart,
    title: "Empathy First",
    description: "Understanding and addressing real human needs drives every decision we make.",
  },
  {
    icon: Shield,
    title: "Ethical AI",
    description: "Technology that enhances human capability without replacing human judgment.",
  },
  {
    icon: Compass,
    title: "Fair Access",
    description: "Equal opportunities for growth, regardless of background or location.",
  },
  {
    icon: Sprout,
    title: "Sustainable Growth",
    description: "Long-term value creation for people, partners, and the planet.",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - We Found a Problem */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden bg-gradient-to-b from-white via-[#FAFBFF] to-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ background: "radial-gradient(circle, rgba(5, 111, 212, 0.7), rgba(4, 97, 196, 0.4))" }}
          />
        </div>

        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center justify-center mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-[#F0F6FF] border border-[#056FD4]/10 rounded-full px-5 py-2.5 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#056FD4]" />
                  <p className="text-sm tracking-[0.1em] text-[#056FD4] uppercase" style={{ fontWeight: 600 }}>
                    We Found a Problem
                  </p>
                </div>
              </motion.div>

              <h1
                className="text-[3.5rem] lg:text-[4rem] text-[#14212A] mb-6 leading-[1.1]"
                style={{ fontWeight: 800 }}
              >
                The Backbone of AI is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#056FD4] to-[#0456a8]">
                  Undervalued
                </span>
              </h1>

              <p className="text-lg text-[#14212A]/80 leading-[1.75] mb-6">
                In a world where AI is reshaping industries, the human elements that make AI truly 
                intelligent are often overlooked. Data labelers, annotators, and evaluators work in 
                fragmented systems with limited growth opportunities.
              </p>

              <p className="text-lg text-[#14212A]/70 leading-[1.7]">
                Businesses struggle to find consistent, quality human input at scale. 
                Talented people around the world are locked out of opportunities simply 
                because of where they live.{" "}
                <span className="text-[#056FD4] font-semibold">We're here to change that.</span>
              </p>
            </motion.div>

            {/* Right - Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(5,111,212,0.2)]">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14212A]/20 to-transparent" />
                </div>
                
                {/* Floating Card */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl text-[#14212A]" style={{ fontWeight: 800 }}>50K+</p>
                      <p className="text-sm text-[#14212A]/60">Global Contributors</p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-[#056FD4] rounded-2xl opacity-10 blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section with Image */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.1, 0.06] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{ background: "radial-gradient(circle, rgba(5, 111, 212, 0.7), rgba(4, 97, 196, 0.4))" }}
          />
        </div>

        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(5,111,212,0.15)]">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=500&fit=crop"
                  alt="Team working together"
                  className="w-full h-[380px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#056FD4]/20 to-transparent" />
              </div>
              
              {/* Stats overlay */}
              <motion.div
                className="absolute -bottom-5 -right-5 bg-[#056FD4] rounded-2xl p-6 text-white shadow-lg shadow-[#056FD4]/30"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-3xl" style={{ fontWeight: 800 }}>30+</p>
                <p className="text-white/80 text-sm">Countries</p>
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#F0F6FF] border border-[#056FD4]/10 rounded-full px-5 py-2.5 inline-flex items-center gap-2 mb-6">
                <Eye className="w-4 h-4 text-[#056FD4]" />
                <p className="text-sm tracking-[0.15em] text-[#056FD4] uppercase" style={{ fontWeight: 600 }}>
                  Our Vision
                </p>
              </div>

              <h2
                className="text-[3rem] text-[#14212A] mb-6 leading-[1.15]"
                style={{ fontWeight: 800 }}
              >
                A World Where{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#056FD4] to-[#0456a8]">
                  Human Intelligence
                </span>{" "}
                Powers AI Progress
              </h2>

              <p className="text-lg text-[#14212A]/70 leading-[1.75]">
                We envision a future where every person with valuable skills can contribute to 
                building the AI systems of tomorrow — regardless of their location, background, 
                or circumstances. Where technology serves humanity, and work adapts to life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section with Images */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-white via-[#F8FAFC] to-white overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#F0F6FF] border border-[#056FD4]/10 rounded-full px-5 py-2.5 inline-flex items-center gap-2 mb-6">
                <Rocket className="w-4 h-4 text-[#056FD4]" />
                <p className="text-sm tracking-[0.15em] text-[#056FD4] uppercase" style={{ fontWeight: 600 }}>
                  Our Mission
                </p>
              </div>

              <h2
                className="text-[3rem] text-[#14212A] mb-6 leading-[1.1]"
                style={{ fontWeight: 800 }}
              >
                Scaling Data Operations Through{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#056FD4] to-[#0456a8]">
                  Human-in-the-Loop
                </span>{" "}
                Workflows
              </h2>

              <p className="text-lg text-[#14212A]/70 leading-[1.7] mb-8">
                We bridge talent, tasks, and intelligent systems to create work that's flexible, 
                fair, and designed for real people.
              </p>

              <motion.button
                className="group flex items-center gap-2 text-[#056FD4] font-semibold"
                whileHover={{ x: 5 }}
              >
                Learn how it works <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Right - Image Grid */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
                      alt="Professional working"
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=350&fit=crop"
                      alt="Team collaboration"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=350&fit=crop"
                      alt="Meeting"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop"
                      alt="Workspace"
                      className="w-full h-40 object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Empowering Global Workforce", desc: "Creating meaningful opportunities for talented people everywhere, breaking down geographic barriers.", img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=200&fit=crop" },
              { icon: Globe2, title: "Scaling Ethically", desc: "Building data operations that respect human contribution and ensure fair compensation.", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=200&fit=crop" },
              { icon: Lightbulb, title: "Driving Innovation", desc: "Combining human judgment with AI capabilities to deliver exceptional quality at scale.", img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=200&fit=crop" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_12px_40px_rgba(5,111,212,0.12)] transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-xl flex items-center justify-center mb-4 -mt-12 relative z-10 shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-[#14212A] mb-3" style={{ fontWeight: 700 }}>{item.title}</h3>
                  <p className="text-[#14212A]/70 leading-[1.6] text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section with Background Image */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#056FD4]/5 via-white to-[#F8FAFC]" />
        </div>
        
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
                <p className="text-sm tracking-[0.15em] text-[#056FD4] uppercase" style={{ fontWeight: 600 }}>
                  Our Values
                </p>
              </div>
            </motion.div>

            <motion.h2
              className="text-[3rem] text-[#14212A] mb-5 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontWeight: 800 }}
            >
              Building for Purpose, Not Just Profit
            </motion.h2>

            <motion.p
              className="text-xl text-[#14212A]/70 max-w-[720px] mx-auto leading-[1.6]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our commitment goes beyond business metrics — we measure success by the lives 
              we impact and the futures we help create.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(5,111,212,0.12)] transition-all duration-500 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                whileHover={{ y: -8 }}
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg text-[#14212A] mb-3" style={{ fontWeight: 700 }}>{value.title}</h3>
                <p className="text-[#14212A]/70 leading-[1.6] text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]">
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
                <p className="text-sm tracking-[0.15em] text-[#056FD4] uppercase" style={{ fontWeight: 600 }}>
                  Our Team
                </p>
              </div>
            </motion.div>

            <motion.h2
              className="text-[3rem] text-[#14212A] mb-5 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontWeight: 800 }}
            >
              Meet the People Building Reboo8
            </motion.h2>

            <motion.p
              className="text-xl text-[#14212A]/70 max-w-[680px] mx-auto leading-[1.6]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A passionate team committed to transforming the future of work.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_12px_40px_rgba(5,111,212,0.15)] transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14212A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-[#056FD4] hover:text-white"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-lg text-[#14212A] mb-1" style={{ fontWeight: 700 }}>{member.name}</h3>
                  <p className="text-[#056FD4] text-sm" style={{ fontWeight: 500 }}>{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-[0.06] blur-[120px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                    alt="Founder"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14212A]/30 to-transparent" />
                </div>
                <motion.div
                  className="absolute -bottom-6 -right-6 w-28 h-28 bg-[#056FD4] rounded-2xl opacity-20 blur-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <Quote className="w-16 h-16 text-[#056FD4]/20 mb-6" />
                
                <motion.div
                  className="inline-flex items-center justify-center mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-[#F0F6FF] border border-[#056FD4]/10 rounded-full px-6 py-2.5">
                    <p className="text-sm tracking-[0.15em] text-[#056FD4] uppercase" style={{ fontWeight: 600 }}>
                      Founder's Message
                    </p>
                  </div>
                </motion.div>

                <p className="text-2xl text-[#14212A] leading-[1.7] mb-8" style={{ fontWeight: 500 }}>
                  "I started Reboo8 because I believe in a world where talent shouldn't be 
                  limited by geography. Every day, millions of skilled individuals around 
                  the globe are ready to contribute to the AI revolution — they just need 
                  the right platform to do so.
                </p>

                <p className="text-lg text-[#14212A]/75 leading-[1.7] mb-10">
                  Our mission is to create that bridge — connecting human intelligence 
                  with the companies building the future, while ensuring every contributor 
                  is valued, fairly compensated, and given opportunities to grow."
                </p>

                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-[#14212A] text-lg" style={{ fontWeight: 700 }}>Rajeev Kumar</p>
                    <p className="text-[#056FD4]" style={{ fontWeight: 500 }}>Founder & CEO, Reboo8</p>
                  </div>
                </div>
              </div>
            </motion.div>
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
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#F0F6FF] border border-[#056FD4]/10 rounded-full px-6 py-2.5">
              <p className="text-sm tracking-[0.2em] text-[#056FD4] uppercase" style={{ fontWeight: 600 }}>
                Join Us
              </p>
            </div>
          </motion.div>

          <motion.h2
            className="text-[3rem] text-[#14212A] mb-7 leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ fontWeight: 800 }}
          >
            Ready to Build the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#056FD4] to-[#0456a8]">
              Future Together
            </span>?
          </motion.h2>

          <motion.p
            className="text-xl text-[#14212A]/70 mb-12 leading-[1.7] max-w-[720px] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Whether you're seeking opportunity, looking to scale your team, or want to 
            be part of building a better future of work — let's create it together.
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
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0456a8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              className="relative bg-white text-[#056FD4] px-12 py-5 rounded-full border-2 border-[#056FD4]/20 hover:border-[#056FD4] hover:bg-[#F0F6FF] transition-all duration-300 shadow-sm"
              style={{ fontWeight: 600, fontSize: "1.125rem" }}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
