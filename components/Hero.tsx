"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Shree Krishna Studio"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Green Glow */}
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-green-900/20 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-5xl text-center">

          <motion.span
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-block rounded-full border border-green-500 px-5 py-2 text-sm uppercase tracking-[4px] text-green-400"
          >
            Wedding • Cinematic • Photography
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="text-5xl font-black leading-tight text-white md:text-7xl"
          >
            SHREE KRISHNA
            <br />
            <span className="text-green-400">
              STUDIO
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl"
          >
            Capturing timeless love stories with cinematic wedding
            photography and films. Every frame is crafted to become
            a memory you&apos;ll cherish forever.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .7 }}
            className="mt-12 flex flex-col justify-center gap-5 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-green-600"
            >
              <Camera size={22} />
              Book Your Shoot
            </a>

            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              <Play size={20} />
              View Gallery
            </a>
          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 grid grid-cols-2 gap-8 text-white md:grid-cols-4"
          >
            <div>
              <h2 className="text-4xl font-bold text-green-400">500+</h2>
              <p className="mt-2 text-gray-300">Happy Clients</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-green-400">1000+</h2>
              <p className="mt-2 text-gray-300">Events Covered</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-green-400">8+</h2>
              <p className="mt-2 text-gray-300">Years Experience</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-green-400">100%</h2>
              <p className="mt-2 text-gray-300">Client Satisfaction</p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down */}

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-12 w-7 rounded-full border-2 border-white flex justify-center">
          <div className="mt-2 h-3 w-1 rounded-full bg-green-400"></div>
        </div>
      </motion.div>
    </section>
  );
}
