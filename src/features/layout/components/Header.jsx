import logo from "@/assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Users, GitBranch } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center cursor-pointer">
          <img src={logo} alt="Reboo8" className="h-6 w-auto" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-[#056FD4] font-medium"
                  : "text-[#14212A] hover:text-[#056FD4]"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/solutions"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-[#056FD4] font-medium"
                  : "text-[#14212A] hover:text-[#056FD4]"
              }`
            }
          >
            Solutions
          </NavLink>
          
          {/* Community Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsCommunityOpen(true)}
            onMouseLeave={() => setIsCommunityOpen(false)}
          >
            <button
              className={`flex items-center gap-1.5 transition-colors ${
                isCommunityOpen
                  ? "text-[#056FD4] font-medium"
                  : "text-[#14212A] hover:text-[#056FD4]"
              }`}
            >
              Community
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isCommunityOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isCommunityOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                >
                  <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden min-w-[240px]">
                    <div className="p-2">
                      <Link
                        to="/community/talents"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#F0F6FF] transition-colors group"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-[#14212A] font-semibold text-sm">For Talents & Agents</p>
                          <p className="text-[#14212A]/60 text-xs">Perks & life at Reboo8</p>
                        </div>
                      </Link>
                      
                      <Link
                        to="/community/contributors"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#F0F6FF] transition-colors group"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-[#056FD4] to-[#0456a8] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                          <GitBranch className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-[#14212A] font-semibold text-sm">For Contributors</p>
                          <p className="text-[#14212A]/60 text-xs">Help build Reboo8</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-[#056FD4] font-medium"
                  : "text-[#14212A] hover:text-[#056FD4]"
              }`
            }
          >
            About Us
          </NavLink>
        </nav>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="bg-[#056FD4] text-white px-6 py-2.5 rounded-md hover:bg-[#0456a8] transition-colors font-semibold"
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}
