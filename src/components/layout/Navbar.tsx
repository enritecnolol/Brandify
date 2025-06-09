"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
  dropdownItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Pages",
    href: "#",
    dropdownItems: [
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Team", href: "/team" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              Brandify MCO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdownItems ? (
                  // Dropdown Menu
                  <div>
                    <button className="text-gray-700 hover:text-purple-600 flex items-center transition-colors">
                      {item.label} <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-xl mt-2 py-2 transition-all duration-200">
                      {item.dropdownItems.map((dropdownItem, dropIndex) => (
                        <Link
                          key={dropIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-gray-600 hover:bg-purple-50"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Regular Menu Item
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Contact Number & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="tel:+00869748970"
              className="text-gray-700 hover:text-purple-600 flex items-center transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              +00 869 748 970
            </a>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-opacity text-white px-6">
              Get in touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.dropdownItems ? (
                    // Mobile Dropdown
                    <div className="space-y-2">
                      <div className="text-gray-600 font-medium">
                        {item.label}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.dropdownItems.map((dropdownItem, dropIndex) => (
                          <Link
                            key={dropIndex}
                            href={dropdownItem.href}
                            className="block text-gray-500 hover:text-purple-600"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Mobile Regular Item
                    <Link
                      href={item.href}
                      className="block text-gray-600 hover:text-purple-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90">
                Get in touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
