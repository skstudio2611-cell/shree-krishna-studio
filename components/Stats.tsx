"use client";

import { motion } from "framer-motion";
import { Camera, Heart, Users, Award } from "lucide-react";

const stats = [
  {
    icon: Camera,
    number: "500+",
    title: "Weddings Covered",
  },
  {
    icon: Heart,
    number: "1000+",
    title: "Happy Clients",
  },
  {
    icon: Users,
    number: "8+",
    title: "Years Experience",
  },
  {
    icon: Award,
    number: "100%",
    title: "Client Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[5px] text-green-400 font-semibold">
            Our Journey
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Numbers That Speak
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{
                  duration: .5,
                  delay: index * .15,
                }}
                viewport={{ once: true }}
                className="rounded-[30px] border border-white/10 bg-zinc-900 p-10 text-center group hover:border-green-500/40 transition-all"
              >

                <div className="mx-auto w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-6 group-hover:rotate-12 transition">

                  <Icon size={36} />

                </div>

                <h3 className="text-5xl font-extrabold text-green-400">

                  {item.number}

                </h3>

                <p className="mt-4 text-gray-300 text-lg">

                  {item.title}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}