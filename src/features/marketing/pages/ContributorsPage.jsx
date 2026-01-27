import { Header } from "../../layout/components/Header.jsx";
import { Footer } from "../../layout/components/Footer.jsx";
import {
  Code,
  GitPullRequest,
  MessageSquare,
  FileText,
  Award,
  Star,
  Users,
  Rocket,
  Database,
  Cpu,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Gift,
} from "lucide-react";
import { motion } from "motion/react";

export default function ContributorsPage() {
  const contributionWays = [
    {
      icon: Code,
      title: "Code Contributions",
      description: "Help build and improve our platform. From bug fixes to new features, every line counts.",
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Make our platform more accessible by improving docs, tutorials, and guides.",
    },
    {
      icon: MessageSquare,
      title: "Community Support",
      description: "Help fellow contributors and users by answering questions and sharing knowledge.",
    },
    {
      icon: GitPullRequest,
      title: "Testing & QA",
      description: "Identify bugs, test new features, and ensure quality across our platform.",
    },
  ];

  const benefits = [
    {
      icon: Star,
      title: "Recognition & Visibility",
      description: "Get featured in our contributor spotlights and build your professional reputation.",
    },
    {
      icon: Award,
      title: "Exclusive Rewards",
      description: "Earn badges, swag, and exclusive access to new features and events.",
    },
    {
      icon: Rocket,
      title: "Career Growth",
      description: "Gain real-world experience working on production AI systems and expand your skills.",
    },
    {
      icon: Users,
      title: "Network & Connect",
      description: "Join a global community of builders, innovators, and industry leaders.",
    },
    {
      icon: Gift,
      title: "Bounty Programs",
      description: "Earn rewards for completing specific tasks, finding bugs, or building features.",
    },
    {
      icon: Sparkles,
      title: "Early Access",
      description: "Be the first to try new features and shape the future direction of Reboo8.",
    },
  ];

  const dataOpsRoles = [
    {
      title: "Data Annotation Specialists",
      description: "Label and annotate data to train AI models with precision and accuracy.",
      skills: ["Attention to Detail", "Domain Expertise", "Quality Focus"],
    },
    {
      title: "Quality Reviewers",
      description: "Ensure data quality meets our high standards through rigorous review processes.",
      skills: ["Critical Thinking", "Pattern Recognition", "Consistency"],
    },
    {
      title: "Project Coordinators",
      description: "Lead and manage data projects, coordinating between teams and stakeholders.",
      skills: ["Leadership", "Communication", "Project Management"],
    },
    {
      title: "Domain Experts",
      description: "Bring specialized knowledge in areas like healthcare, legal, finance, or tech.",
      skills: ["Industry Knowledge", "Analytical Skills", "Documentation"],
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
                For Contributors
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
            Help Us Build the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#056FD4] to-[#0456a8]">
              Future of Work
            </span>
          </motion.h1>

          <motion.p
            className="text-[1.375rem] text-[#14212A]/75 mb-12 max-w-[730px] mx-auto leading-[1.7]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Join our contributor community and help shape Reboo8. Whether you code, write, 
            test, or support—your contribution matters.
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
                Start Contributing
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
              View Open Projects
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* How to Contribute Section */}
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
                  Ways to Contribute
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
              How You Can Help Build Reboo8
            </motion.h2>

            <motion.p
              className="text-xl text-[#14212A]/70 max-w-[720px] mx-auto leading-[1.6]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Every contribution, big or small, helps us build a better platform for everyone.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contributionWays.map((way, index) => (
              <motion.div
                key={way.title}
                className="group bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_12px_48px_rgba(5,111,212,0.12)] hover:border-[#056FD4]/20 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <div className="flex items-start gap-5">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-xl group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20 flex-shrink-0">
                    <way.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-xl text-[#14212A] mb-2"
                      style={{ fontWeight: 700 }}
                    >
                      {way.title}
                    </h3>
                    <p className="text-[#14212A]/70 leading-[1.7]">
                      {way.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-[5%] w-96 h-96 bg-blue-100 rounded-full opacity-[0.08] blur-[120px] pointer-events-none"
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
                  Contributor Benefits
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
              What You Get in Return
            </motion.h2>

            <motion.p
              className="text-xl text-[#14212A]/70 max-w-[720px] mx-auto leading-[1.6]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Contributing to Reboo8 comes with meaningful rewards and opportunities.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="group text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-xl text-[#14212A] mb-2"
                  style={{ fontWeight: 700 }}
                >
                  {benefit.title}
                </h3>
                <p className="text-[#14212A]/70 leading-[1.65]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.15)]">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"
                  alt="Community collaboration"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14212A]/20 to-transparent pointer-events-none" />
              </div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-xl flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl text-[#14212A]" style={{ fontWeight: 800 }}>500+</p>
                    <p className="text-[#14212A]/60 text-sm">Active Contributors</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

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
                    Join Our Community
                  </p>
                </div>
              </motion.div>

              <h2
                className="text-[3rem] text-[#14212A] mb-6 leading-[1.1]"
                style={{ fontWeight: 800 }}
              >
                Become Part of Something Bigger
              </h2>

              <p className="text-lg text-[#14212A]/80 leading-[1.7] mb-8">
                Our contributor community is a vibrant space where ideas flourish, 
                collaboration thrives, and impact is made. Connect with builders from around the world.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Weekly community calls and workshops",
                  "Private Discord server for contributors",
                  "Mentorship from experienced team members",
                  "First access to new features and roadmap",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#056FD4] flex-shrink-0" />
                    <p className="text-[#14212A]/80">{item}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="relative bg-[#056FD4] text-white px-10 py-4 rounded-full transition-all duration-300 overflow-hidden shadow-[0_8px_30px_rgba(5,111,212,0.25)] group"
                style={{ fontWeight: 600, fontSize: "1.0625rem" }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 12px 40px rgba(5,111,212,0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Join the Community
                  <ArrowRight className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0456a8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DataOps Talent Section */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-[10%] w-80 h-80 bg-blue-100 rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
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
              <div className="bg-gradient-to-r from-[#056FD4] to-[#0456a8] rounded-full px-6 py-2.5">
                <p
                  className="text-sm tracking-[0.15em] text-white uppercase"
                  style={{ fontWeight: 600 }}
                >
                  DataOps Opportunities
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
              Join Our DataOps Platform
            </motion.h2>

            <motion.p
              className="text-xl text-[#14212A]/70 max-w-[720px] mx-auto leading-[1.6]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We're looking for talented individuals to help power the AI revolution through high-quality data operations.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataOpsRoles.map((role, index) => (
              <motion.div
                key={role.title}
                className="group bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_12px_48px_rgba(5,111,212,0.12)] hover:border-[#056FD4]/20 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-xl text-[#14212A] mb-2"
                      style={{ fontWeight: 700 }}
                    >
                      {role.title}
                    </h3>
                    <p className="text-[#14212A]/70 leading-[1.65]">
                      {role.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 ml-[68px]">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-[#F0F6FF] text-[#056FD4] text-sm rounded-full"
                      style={{ fontWeight: 500 }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              className="relative bg-[#056FD4] text-white px-10 py-4 rounded-full transition-all duration-300 overflow-hidden shadow-[0_8px_30px_rgba(5,111,212,0.25)] group"
              style={{ fontWeight: 600, fontSize: "1.0625rem" }}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 12px 40px rgba(5,111,212,0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Apply for DataOps Roles
                <ArrowRight className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0456a8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
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
            Ready to Make an{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#056FD4] to-[#0456a8]">
              Impact
            </span>?
          </motion.h2>

          <motion.p
            className="text-xl text-[#14212A]/70 mb-12 leading-[1.7] max-w-[720px] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join our global community of contributors and help shape the future of work. 
            Your skills can make a real difference.
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
                Start Contributing Today
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
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
