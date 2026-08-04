"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="text-center max-w-2xl">

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Camera
            size={70}
            className="mx-auto text-green-400"
          />
        </motion.div>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-7xl md:text-8xl font-black text-green-400"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-3xl md:text-5xl font-bold text-white"
        >
          Oops! Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-gray-400 leading-8"
        >
          The page you are looking for doesn't exist or has been moved.
          Let's get you back to capturing beautiful memories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10"
        >
          <Link
            href="/"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-green-500
              px-8
              py-4
              font-semibold
              text-white
              hover:bg-green-600
              transition
            "
          >
            <Camera size={20} />
            Back to Home
          </Link>
        </motion.div>

        <p className="mt-12 text-sm tracking-[4px] uppercase text-green-400">
          Shree Krishna Studio
        </p>

        <p className="mt-2 text-gray-500">
          Capturing Forever
        </p>

      </div>

    </main>
  );
}