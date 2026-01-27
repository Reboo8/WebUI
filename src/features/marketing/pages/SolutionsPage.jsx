import { Header } from "../../layout/components/Header.jsx";
import { Footer } from "../../layout/components/Footer.jsx";
import { useState } from "react";
import {
  Zap,
  Target,
  BarChart3,
  Users,
  Shield,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Building2,
  Cpu,
  ShoppingCart,
  Landmark,
  Car,
  Film,
  TrendingUp,
  Clock,
  Globe,
  Lock,
  LayoutGrid,
  Settings,
  LineChart,
  Boxes,
  HeadphonesIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Solutions() {
  const [activeTab, setActiveTab] = useState("industries");

  const tabs = [
    { id: "industries", label: "By Industries" },
    { id: "outcomes", label: "By Outcomes" },
    { id: "features", label: "By Features" },
  ];

  const industries = [
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Data annotation, model training, RLHF, and human-in-the-loop solutions for cutting-edge AI systems.",
      stats: "500K+ annotations/day",
    },
    {
      icon: Building2,
      title: "Healthcare",
      description: "Medical data labeling, clinical documentation, and HIPAA-compliant data processing workflows.",
      stats: "99.2% accuracy",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce & Retail",
      description: "Product cataloging, inventory management, content moderation, and customer support at scale.",
      stats: "2M+ products managed",
    },
    {
      icon: Landmark,
      title: "Finance & Banking",
      description: "Document processing, KYC/AML workflows, fraud detection support, and secure data handling.",
      stats: "Enterprise-grade security",
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Autonomous vehicle data labeling, sensor fusion annotation, and quality validation for ADAS systems.",
      stats: "100+ terabytes labeled",
    },
    {
      icon: Film,
      title: "Media & Entertainment",
      description: "Content moderation, metadata tagging, subtitle generation, and audience safety workflows.",
      stats: "24/7 coverage",
    },
  ];

  const outcomes = [
    {
      icon: TrendingUp,
      title: "Scale Operations",
      description: "Deploy capacity in hours, not weeks. Expand or contract your workforce based on real-time demand.",
      metric: "10x faster scaling",
    },
    {
      icon: Target,
      title: "Reduce Costs",
      description: "Pay for performance, not empty seats. Our model reduces operational costs significantly.",
      metric: "40% cost reduction",
    },
    {
      icon: Sparkles,
      title: "Improve Quality",
      description: "Multi-tier review workflows and continuous quality monitoring ensure exceptional output.",
      metric: "98.5% task completion",
    },
    {
      icon: Clock,
      title: "Accelerate Time-to-Market",
      description: "Get your products and services to market faster with on-demand workforce deployment.",
      metric: "3x faster delivery",
    },
    {
      icon: Globe,
      title: "24/7 Global Coverage",
      description: "Access a global workforce across time zones for round-the-clock operations.",
      metric: "30+ countries",
    },
    {
      icon: Lock,
      title: "Compliance & Security",
      description: "Enterprise-grade data protection, SOC 2 compliance, and industry-specific certifications.",
      metric: "99.9% uptime SLA",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Intelligent Task Routing",
      description: "AI-powered matching connects the right talent with the right tasks based on skills, performance, and availability.",
    },
    {
      icon: CheckCircle2,
      title: "Quality Assurance",
      description: "Built-in multi-tier review workflows, automated checks, and human oversight for consistent quality.",
    },
    {
      icon: LineChart,
      title: "Real-time Analytics",
      description: "Live dashboards, performance metrics, and customizable reporting to track every aspect of your operations.",
    },
    {
      icon: Settings,
      title: "API Integration",
      description: "Seamlessly connect with your existing tools and workflows through our robust REST APIs and webhooks.",
    },
    {
      icon: Boxes,
      title: "Scalable Infrastructure",
      description: "Handle demand spikes without friction. Our platform auto-scales to meet your needs instantly.",
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "Project managers and account executives to guide your success from onboarding to optimization.",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "industries":
        return (
          <motion.div
            key="industries"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industries.map((item, index) => (
              <motion.div
                key={item.title}
                className="group bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_12px_48px_rgba(5,111,212,0.12)] hover:border-[#056FD4]/20 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-xl mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-[#14212A] mb-3" style={{ fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p className="text-[#14212A]/70 leading-[1.7] mb-4">{item.description}</p>
                <p className="text-sm text-[#056FD4]" style={{ fontWeight: 600 }}>{item.stats}</p>
              </motion.div>
            ))}
          </motion.div>
        );
      case "outcomes":
        return (
          <motion.div
            key="outcomes"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {outcomes.map((item, index) => (
              <motion.div
                key={item.title}
                className="group bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_12px_48px_rgba(5,111,212,0.12)] hover:border-[#056FD4]/20 transition-all duration-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#056FD4] rounded-full opacity-[0.04] blur-2xl group-hover:opacity-[0.08] transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#F0F6FF] rounded-xl group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="w-6 h-6 text-[#056FD4]" />
                    </div>
                    <span className="px-3 py-1.5 bg-[#056FD4]/10 text-[#056FD4] text-sm rounded-full" style={{ fontWeight: 600 }}>
                      {item.metric}
                    </span>
                  </div>
                  <h3 className="text-xl text-[#14212A] mb-3" style={{ fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p className="text-[#14212A]/70 leading-[1.7]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      case "features":
        return (
          <motion.div
            key="features"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                className="group flex items-start gap-5 bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_12px_48px_rgba(5,111,212,0.12)] hover:border-[#056FD4]/20 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-[#14212A] mb-2" style={{ fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p className="text-[#14212A]/70 leading-[1.7]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-56 pb-32 px-6 overflow-hidden bg-gradient-to-b from-white via-[#FAFBFF] to-white">
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
              background: "radial-gradient(circle, rgba(5, 111, 212, 0.7), rgba(4, 97, 196, 0.4))",
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
              background: "radial-gradient(circle, rgba(5, 111, 212, 0.6), rgba(4, 86, 168, 0.4))",
            }}
          />
        </div>

        <div className="relative max-w-[900px] mx-auto text-center">
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#F0F6FF] border border-[#056FD4]/10 rounded-full px-6 py-2.5">
              <p className="text-sm tracking-[0.15em] text-[#056FD4] uppercase" style={{ fontWeight: 600 }}>
                Business Solutions
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
            Enterprise-Grade Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#056FD4] to-[#0456a8]">
              Every Industry
            </span>
          </motion.h1>

          <motion.p
            className="text-[1.375rem] text-[#14212A]/75 mb-12 max-w-[680px] mx-auto leading-[1.7]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Discover how Reboo8 delivers intelligent, human-centered workflows 
            that scale with your business needs.
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
                Get Started
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
              Schedule a Demo
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Tabbed Solutions Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white via-[#F8FAFC] to-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              className="text-[3rem] text-[#14212A] mb-5 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ fontWeight: 800 }}
            >
              Explore Our Solutions
            </motion.h2>
            <motion.p
              className="text-xl text-[#14212A]/70 max-w-[600px] mx-auto leading-[1.6]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Choose how you want to discover what Reboo8 can do for your business.
            </motion.p>
          </div>

          {/* Tab Navigation */}
          <motion.div
            className="flex items-center justify-center gap-2 mb-12 p-1.5 bg-[#F0F6FF] rounded-full max-w-fit mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 py-3 rounded-full text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#056FD4] text-white shadow-lg shadow-[#056FD4]/25"
                    : "text-[#14212A]/70 hover:text-[#056FD4]"
                }`}
                style={{ fontWeight: 600 }}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {renderTabContent()}
          </AnimatePresence>
        </div>
      </section>

      {/* How Reboo8 Works Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-[10%] w-80 h-80 bg-blue-100 rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
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
                <p className="text-sm tracking-[0.15em] text-[#056FD4] uppercase" style={{ fontWeight: 600 }}>
                  Our Process
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
              How Reboo8 Works
            </motion.h2>

            <motion.p
              className="text-xl text-[#14212A]/70 max-w-[720px] mx-auto leading-[1.6]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A rigorous, multi-step process ensures only the best talent works on your projects.
            </motion.p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-[60px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-[#F0F6FF] via-[#056FD4] to-[#F0F6FF] rounded-full hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                {
                  step: "01",
                  title: "Application & Screening",
                  description: "Candidates apply and undergo initial screening based on skills, experience, and domain expertise.",
                  icon: "📝",
                },
                {
                  step: "02",
                  title: "Skills Assessment",
                  description: "Rigorous testing evaluates technical skills, attention to detail, and task-specific competencies.",
                  icon: "✅",
                },
                {
                  step: "03",
                  title: "Background Verification",
                  description: "Comprehensive identity verification, work history checks, and reference validation.",
                  icon: "🔒",
                },
                {
                  step: "04",
                  title: "Training & Onboarding",
                  description: "Project-specific training, platform orientation, and quality standards certification.",
                  icon: "🎓",
                },
                {
                  step: "05",
                  title: "Continuous Monitoring",
                  description: "Ongoing performance tracking, quality audits, and regular feedback loops.",
                  icon: "📊",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                >
                  {/* Step Number Circle */}
                  <div className="relative inline-flex items-center justify-center w-[120px] h-[120px] bg-gradient-to-br from-white to-[#F8FAFC] rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 mb-6 mx-auto">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-full flex items-center justify-center shadow-lg shadow-[#056FD4]/25">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-[#056FD4] rounded-full flex items-center justify-center text-white text-sm" style={{ fontWeight: 700 }}>
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg text-[#14212A] mb-2" style={{ fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p className="text-[#14212A]/70 text-sm leading-[1.6]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { icon: Shield, label: "SOC 2 Compliant" },
              { icon: Lock, label: "Enterprise Security" },
              { icon: CheckCircle2, label: "Verified Talent" },
              { icon: Users, label: "Dedicated Account Manager" },
            ].map((badge, index) => (
              <div key={badge.label} className="flex items-center gap-3 px-6 py-3 bg-[#F8FAFC] rounded-full border border-gray-100">
                <badge.icon className="w-5 h-5 text-[#056FD4]" />
                <span className="text-sm text-[#14212A]" style={{ fontWeight: 600 }}>{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "98.5%", label: "Task Completion Rate" },
              { value: "50K+", label: "Active Contributors" },
              { value: "30+", label: "Countries Served" },
              { value: "40%", label: "Cost Reduction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <p className="text-[3rem] text-[#056FD4] mb-2" style={{ fontWeight: 800 }}>
                  {stat.value}
                </p>
                <p className="text-[#14212A]/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-[#F8FAFC] via-[#F0F6FF] to-white overflow-hidden">
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
            Ready to Transform Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#056FD4] to-[#0456a8]">
              Operations
            </span>?
          </motion.h2>

          <motion.p
            className="text-xl text-[#14212A]/70 mb-12 leading-[1.7] max-w-[720px] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss how Reboo8 can help scale your business with 
            intelligent, human-powered solutions.
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
                Contact Sales
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
              View Case Studies
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
