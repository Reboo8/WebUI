import { Header } from "../../layout/components/Header.jsx";
import { Footer } from "../../layout/components/Footer.jsx";
import {
  Target,
  Compass,
  Users,
  Lightbulb,
  Heart,
  Shield,
  Sprout,
  Globe2,
} from "lucide-react";
import { motion } from "motion/react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Who We Are */}
      <section className="relative pt-56 pb-40 px-6 overflow-hidden bg-gradient-to-b from-white via-[#FAFBFF] to-white">
        {/* Creative blue gradient background layers */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-[100px]"
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
            className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full opacity-[0.06] blur-[120px]"
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

        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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
                <div className="bg-[#F0F6FF] border border-[#056FD4]/10 rounded-full px-6 py-2.5">
                  <p
                    className="text-sm tracking-[0.15em] text-[#056FD4] uppercase"
                    style={{ fontWeight: 600 }}
                  >
                    About Reboo8
                  </p>
                </div>
              </motion.div>

              <h1
                className="text-[4.5rem] text-[#14212A] mb-6 leading-[1.05]"
                style={{ fontWeight: 800 }}
              >
                Who We Are.
              </h1>

              <p className="text-xl text-[#14212A]/80 leading-[1.7] mb-8">
                Reboo8 is a platform built to transform how humans and
                technology collaborate. We bridge talent, tasks, and intelligent
                systems to create work that's flexible, fair, and designed for
                real people.
              </p>

              <p className="text-lg text-[#14212A]/70 leading-[1.7]">
                We believe the future of work isn't just about efficiency — it's
                about empowerment, growth, and building systems that put people
                first.
              </p>
            </motion.div>

            {/* Right - Visual Element */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative bg-gradient-to-br from-[#F0F6FF] to-[#E8F2FF] rounded-3xl p-12 shadow-[0_20px_60px_rgba(5,111,212,0.15)] border border-[#056FD4]/10">
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-[#056FD4] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#056FD4]/25">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3
                        className="text-lg text-[#14212A] mb-2"
                        style={{ fontWeight: 700 }}
                      >
                        Purpose-Driven
                      </h3>
                      <p className="text-[#14212A]/70 leading-[1.6]">
                        Every decision centers on human potential and meaningful
                        impact.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-[#056FD4] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#056FD4]/25">
                      <Lightbulb className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3
                        className="text-lg text-[#14212A] mb-2"
                        style={{ fontWeight: 700 }}
                      >
                        Innovation-Led
                      </h3>
                      <p className="text-[#14212A]/70 leading-[1.6]">
                        We blend cutting-edge AI with human insight to reimagine
                        work.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-[#056FD4] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#056FD4]/25">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3
                        className="text-lg text-[#14212A] mb-2"
                        style={{ fontWeight: 700 }}
                      >
                        People-First
                      </h3>
                      <p className="text-[#14212A]/70 leading-[1.6]">
                        Technology serves humanity, not the other way around.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent element */}
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

      {/* Mission Statement Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-white via-[#F8FAFC] to-white overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-[8%] w-80 h-80 bg-blue-100 rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-[1000px] mx-auto text-center">
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

          <motion.h2
            className="text-[3.5rem] text-[#14212A] mb-8 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontWeight: 800 }}
          >
            A Platform That Transforms How Humans and Technology Collaborate
          </motion.h2>

          <motion.p
            className="text-xl text-[#14212A]/75 leading-[1.75] max-w-[820px] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're building a future where intelligent systems amplify human
            capability, where work is flexible and meaningful, and where every
            person has the opportunity to grow, contribute, and thrive on their
            own terms.
          </motion.p>
        </div>
      </section>

      {/* Guiding Principles Section */}
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
                  Guiding Principles
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
              Building the Future of Work
            </motion.h2>

            <motion.p
              className="text-xl text-[#14212A]/70 max-w-[680px] mx-auto leading-[1.6]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Four core principles guide everything we create and every decision
              we make.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Principle 1 */}
            <motion.div
              className="group relative bg-gradient-to-br from-white to-[#FAFBFF] rounded-2xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_8px_40px_rgba(5,111,212,0.12)] hover:border-[#056FD4]/20 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#056FD4] rounded-full opacity-[0.02] blur-3xl group-hover:opacity-[0.05] transition-opacity duration-500"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                  <Users className="w-8 h-8 text-white" />
                </div>

                <h3
                  className="text-[1.75rem] text-[#14212A] mb-4 leading-[1.2]"
                  style={{ fontWeight: 700 }}
                >
                  Human-Centric Design
                </h3>

                <p className="text-[#14212A]/75 leading-[1.7] text-[1.0625rem]">
                  Technology should adapt to people, not the other way around.
                  We design every feature with empathy, accessibility, and real
                  human needs at the center.
                </p>
              </div>
            </motion.div>

            {/* Principle 2 */}
            <motion.div
              className="group relative bg-gradient-to-br from-white to-[#FAFBFF] rounded-2xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_8px_40px_rgba(5,111,212,0.12)] hover:border-[#056FD4]/20 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#056FD4] rounded-full opacity-[0.02] blur-3xl group-hover:opacity-[0.05] transition-opacity duration-500"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                  <Shield className="w-8 h-8 text-white" />
                </div>

                <h3
                  className="text-[1.75rem] text-[#14212A] mb-4 leading-[1.2]"
                  style={{ fontWeight: 700 }}
                >
                  Transparency & Trust
                </h3>

                <p className="text-[#14212A]/75 leading-[1.7] text-[1.0625rem]">
                  Clear communication, fair practices, and ethical operations
                  build the foundation for lasting relationships with our
                  community.
                </p>
              </div>
            </motion.div>

            {/* Principle 3 */}
            <motion.div
              className="group relative bg-gradient-to-br from-white to-[#FAFBFF] rounded-2xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_8px_40px_rgba(5,111,212,0.12)] hover:border-[#056FD4]/20 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#056FD4] rounded-full opacity-[0.02] blur-3xl group-hover:opacity-[0.05] transition-opacity duration-500"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                  <Sprout className="w-8 h-8 text-white" />
                </div>

                <h3
                  className="text-[1.75rem] text-[#14212A] mb-4 leading-[1.2]"
                  style={{ fontWeight: 700 }}
                >
                  Continuous Growth
                </h3>

                <p className="text-[#14212A]/75 leading-[1.7] text-[1.0625rem]">
                  We invest in learning, iteration, and improvement — for our
                  platform, our team, and the people who rely on us every day.
                </p>
              </div>
            </motion.div>

            {/* Principle 4 */}
            <motion.div
              className="group relative bg-gradient-to-br from-white to-[#FAFBFF] rounded-2xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:shadow-[0_8px_40px_rgba(5,111,212,0.12)] hover:border-[#056FD4]/20 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#056FD4] rounded-full opacity-[0.02] blur-3xl group-hover:opacity-[0.05] transition-opacity duration-500"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                  <Globe2 className="w-8 h-8 text-white" />
                </div>

                <h3
                  className="text-[1.75rem] text-[#14212A] mb-4 leading-[1.2]"
                  style={{ fontWeight: 700 }}
                >
                  Global Impact
                </h3>

                <p className="text-[#14212A]/75 leading-[1.7] text-[1.0625rem]">
                  We're building for everyone, everywhere. Diversity, inclusion,
                  and accessibility aren't just goals — they're our foundation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A Future Built Differently Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-white via-[#F8FAFC] to-white overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-[5%] w-96 h-96 bg-blue-100 rounded-full opacity-[0.08] blur-[120px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left - Image */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.15)]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjUzMTU0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Team collaboration"
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

            {/* Right - Content */}
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
                    Our Vision
                  </p>
                </div>
              </motion.div>

              <h2
                className="text-[3.25rem] text-[#14212A] mb-6 leading-[1.15]"
                style={{ fontWeight: 800 }}
              >
                A Future Built for Humans — Not the Other Way Around
              </h2>

              <p className="text-lg text-[#14212A]/80 leading-[1.7] mb-8">
                Traditional work models were designed for a different era —
                rigid structures, one-size-fits-all approaches, and systems that
                prioritized efficiency over humanity.
              </p>

              <p className="text-lg text-[#14212A]/80 leading-[1.7] mb-8">
                We're reimagining what work can be: flexible, inclusive,
                transparent, and built to unlock real human potential. Through
                intelligent workflows and a global talent network, we create
                opportunities that adapt to people's lives, not the other way
                around.
              </p>

              <p className="text-lg text-[#14212A]/75 leading-[1.7]">
                This is work that grows with you. This is the future we're
                building together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Building for Purpose Section */}
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
                  Our Values
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
              Building for Purpose, Not Just Profit
            </motion.h2>

            <motion.p
              className="text-xl text-[#14212A]/70 max-w-[720px] mx-auto leading-[1.6]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our commitment goes beyond business metrics — we measure success
              by the lives we impact and the futures we help create.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <motion.div
              className="group text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                <Heart className="w-10 h-10 text-white" />
              </div>

              <h3
                className="text-xl text-[#14212A] mb-3"
                style={{ fontWeight: 700 }}
              >
                Empathy First
              </h3>

              <p className="text-[#14212A]/70 leading-[1.7]">
                Understanding and addressing real human needs drives every
                decision.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              className="group text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                <Shield className="w-10 h-10 text-white" />
              </div>

              <h3
                className="text-xl text-[#14212A] mb-3"
                style={{ fontWeight: 700 }}
              >
                Ethical AI
              </h3>

              <p className="text-[#14212A]/70 leading-[1.7]">
                Technology that enhances human capability without replacing
                human judgment.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              className="group text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                <Compass className="w-10 h-10 text-white" />
              </div>

              <h3
                className="text-xl text-[#14212A] mb-3"
                style={{ fontWeight: 700 }}
              >
                Fair Access
              </h3>

              <p className="text-[#14212A]/70 leading-[1.7]">
                Equal opportunities for growth, regardless of background or
                location.
              </p>
            </motion.div>

            {/* Value 4 */}
            <motion.div
              className="group text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#056FD4]/20">
                <Sprout className="w-10 h-10 text-white" />
              </div>

              <h3
                className="text-xl text-[#14212A] mb-3"
                style={{ fontWeight: 700 }}
              >
                Sustainable Growth
              </h3>

              <p className="text-[#14212A]/70 leading-[1.7]">
                Long-term value creation for people, partners, and the planet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-white">
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
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#F0F6FF] border border-[#056FD4]/10 rounded-full px-6 py-2.5">
              <p
                className="text-sm tracking-[0.2em] text-[#056FD4] uppercase"
                style={{ fontWeight: 600 }}
              >
                Join Us
              </p>
            </div>
          </motion.div>

          <motion.h2
            className="text-[4rem] text-[#14212A] mb-7 leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ fontWeight: 800 }}
          >
            Join Us in Reimagining Work
          </motion.h2>

          <motion.p
            className="text-xl text-[#14212A]/75 mb-14 leading-[1.7] max-w-[720px] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Whether you're seeking opportunity, looking to scale your team, or
            want to be part of building a better future of work — let's create
            it together.
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
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: "0 0 0 0 rgba(5, 111, 212, 0.4)",
                }}
                whileHover={{
                  boxShadow: "0 0 0 12px rgba(5, 111, 212, 0.15)",
                }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0456a8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              className="relative bg-transparent text-[#14212A] px-14 py-5 rounded-full border-2 border-[#14212A]/15 hover:border-[#14212A] transition-all duration-300 overflow-hidden group"
              style={{ fontWeight: 600, fontSize: "1.125rem" }}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: "0 0 0 0 rgba(20, 33, 42, 0.2)",
                }}
                whileHover={{
                  boxShadow: "0 0 0 8px rgba(20, 33, 42, 0.08)",
                }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Contact Us
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
