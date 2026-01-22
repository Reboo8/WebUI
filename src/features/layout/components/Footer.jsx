import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E4E7EB] py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Logo & Description */}
          <div className="col-span-1">
            <img src={logo} alt="Reboo8" className="h-6 w-auto" />
            <p className="mt-4 text-[#14212A] opacity-70">
              Designing the future of work for everyone.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-[#14212A] mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/solutions"
                  className="text-[#14212A] opacity-70 hover:opacity-100 transition-opacity"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-[#14212A] opacity-70 hover:opacity-100 transition-opacity"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#14212A] opacity-70 hover:opacity-100 transition-opacity"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-[#14212A] mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-[#14212A] opacity-70 hover:opacity-100 transition-opacity"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="text-[#14212A] opacity-70 hover:opacity-100 transition-opacity"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#14212A] opacity-70 hover:opacity-100 transition-opacity"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-[#14212A] mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/impact"
                  className="text-[#14212A] opacity-70 hover:opacity-100 transition-opacity"
                >
                  Impact
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#14212A] opacity-70 hover:opacity-100 transition-opacity"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#14212A] opacity-70 hover:opacity-100 transition-opacity"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#14212A] opacity-60 leading-relaxed">
            © 2025 Reboo8. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-[#14212A] hover:bg-[#056FD4] hover:text-white transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-[#14212A] hover:bg-[#056FD4] hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-[#14212A] hover:bg-[#056FD4] hover:text-white transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-[#14212A] hover:bg-[#056FD4] hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
