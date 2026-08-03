"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Heart,
  Plane,
  Image as ImageIcon,
  Clapperboard,
} from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Wedding Photography",
    desc: "Capture every beautiful wedding moment with creative photography.",
  },
  {
    icon: Video,
    title: "Cinematic Videography",
    desc: "Luxury cinematic wedding films with professional storytelling.",
  },
  {
    icon: Heart,
    title: "Pre Wedding Shoot",
    desc: "Romantic and creative pre wedding photoshoots at beautiful locations.",
  },
  {
    icon: Plane,
    title: "Drone Coverage",
    desc: "Amazing aerial shots that make your wedding film unforgettable.",
  },
  {
    icon: ImageIcon,
    title: "Premium Album",
    desc: "High quality designer albums with elegant finishing.",
  },
  {
    icon: Clapperboard,
    title: "Professional Editing",
    desc: "Creative photo retouching and cinematic video editing.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-green-400 uppercase tracking-[4px] font-semibold">
            Our Services
          </span>

          <h2 className="text-5xl font-bold mt-4">
            What We Offer
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            We provide complete wedding photography and cinematography
            solutions with premium quality and creative storytelling.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .6,
                  delay: index * .1,
                }}
                viewport={{ once: true }}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center mb-6">

                  <Icon size={30} />

                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {service.desc}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}