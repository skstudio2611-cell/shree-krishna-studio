"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Camera,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">

                <Camera size={26} />

              </div>

              <h2 className="text-2xl font-bold">
                Shree Krishna Studio
              </h2>

            </div>

            <p className="mt-6 text-gray-400 leading-8">
              Capturing your most beautiful moments with creativity,
              emotions and cinematic quality.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="space-y-4">

              <Link href="/" className="block hover:text-green-400 transition">
                Home
              </Link>

              <Link href="#about" className="block hover:text-green-400 transition">
                About
              </Link>

              <Link href="#services" className="block hover:text-green-400 transition">
                Services
              </Link>

              <Link href="#gallery" className="block hover:text-green-400 transition">
                Gallery
              </Link>

              <Link href="#contact" className="block hover:text-green-400 transition">
                Contact
              </Link>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Services
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>Wedding Photography</p>
              <p>Pre Wedding Shoot</p>
              <p>Cinematography</p>
              <p>Drone Shoot</p>
              <p>Video Editing</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <Phone size={20} className="text-green-400" />

                <span>+91 8849684475</span>

              </div>

              <div className="flex items-center gap-3">

                <Camera size={20} className="text-green-400" />

                <span>@MK_edits_2611</span>

              </div>

              <div className="flex items-center gap-3">

                <Mail size={20} className="text-green-400" />

                <span>your@email.com</span>

              </div>

              <div className="flex items-center gap-3">

                <MapPin size={20} className="text-green-400" />

                <span>Gujarat, India</span>

              </div>

            </div>

          </div>

        </div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="border-t border-white/10 py-6 text-center text-gray-500"
      >
        © {new Date().getFullYear()} Shree Krishna Studio. All Rights Reserved.
      </motion.div>

    </footer>
  );
}