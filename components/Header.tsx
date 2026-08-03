"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Packages", href: "#packages" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">

            <Image
  src="/images/logo.png"
  alt="Shree Krishna Studio"
  width={55}
  height={55}
  loading="eager"
  className="rounded-full object-cover"
/>

            <div>

              <h1 className="text-white font-bold text-xl leading-none">
                SHREE KRISHNA
              </h1>

              <p className="text-green-400 text-sm">
                STUDIO
              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-green-400 transition font-medium"
              >
                {item.name}
              </a>
            ))}

          </nav>

          {/* Book Now */}

          <div className="hidden lg:block">

            <a
              href="#contact"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition"
            >
              Book Now
            </a>

          </div>

          {/* Mobile Button */}

          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-black/95 backdrop-blur-xl">

          <div className="flex flex-col p-6 space-y-5">

            {navItems.map((item) => (

              <a
                key={item.name}
                href={item.href}
                className="text-white text-lg hover:text-green-400"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>

            ))}

            <a
              href="#contact"
              className="bg-green-600 text-center text-white py-3 rounded-xl mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </a>

          </div>

        </div>

      )}

    </header>
  );
}