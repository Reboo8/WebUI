import logo from "@/assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

export function Header() {
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
          <NavLink
            to="/community"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-[#056FD4] font-medium"
                  : "text-[#14212A] hover:text-[#056FD4]"
              }`
            }
          >
            Community
          </NavLink>
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
