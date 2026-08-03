"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Professional Wedding Photography",
  "Cinematic Wedding Films",
  "Pre Wedding Shoot",
  "Drone Coverage",
  "Premium Album Design",
  "Professional Editing",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0b0b0b] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="relative w-full aspect-[13/15] overflow-hidden rounded-3xl shadow-2xl">

            <Image
              src="/images/about.jpg"
              alt="About Shree Krishna Studio"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

          </div>


          <div className="absolute -bottom-6 -right-6 bg-green-600 rounded-2xl px-8 py-6 shadow-xl">

            <h2 className="text-4xl font-bold">
              8+
            </h2>

            <p className="text-sm">
              Years Experience
            </p>

          </div>

        </motion.div>


        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="text-green-400 uppercase tracking-widest font-semibold">
            About Us
          </span>


          <h2 className="text-5xl font-bold mt-5 leading-tight">
            We Capture
            <span className="text-green-400">
              {" "}Your Beautiful Story
            </span>
          </h2>


          <p className="text-gray-300 mt-8 leading-8 text-lg">
            Shree Krishna Studio specializes in luxury wedding
            photography, cinematic films, pre wedding shoots,
            drone coverage and premium editing.
            Our goal is to preserve your most precious memories
            with creativity and perfection.
          </p>


          <div className="grid sm:grid-cols-2 gap-5 mt-10">

            {features.map((item) => (

              <div
                key={item}
                className="flex items-center gap-3"
              >

                <CheckCircle className="text-green-400" />

                <span>
                  {item}
                </span>

              </div>

            ))}

          </div>


          <a
            href="#contact"
            className="inline-block mt-10 bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-xl font-semibold"
          >
            Book Your Shoot
          </a>


        </motion.div>

      </div>
    </section>
  );
}