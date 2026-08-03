"use client";

import { motion } from "framer-motion";
import {
  Check,
  Crown,
  Sparkles,
  Gem,
} from "lucide-react";

const packages = [
  {
    icon: Sparkles,
    title: "Silver",
    price: "₹24,999",
    color: "from-zinc-700 to-zinc-900",
    badge: "",
    features: [
      "Wedding Photography",
      "Traditional Videography",
      "250+ Edited Photos",
      "Premium Album",
      "Basic Reel",
    ],
  },
  {
    icon: Crown,
    title: "Gold",
    price: "₹44,999",
    color: "from-green-500 to-emerald-700",
    badge: "Most Popular",
    features: [
      "Wedding Photography",
      "Cinematic Videography",
      "Drone Coverage",
      "500+ Edited Photos",
      "Luxury Album",
      "2 Premium Reels",
    ],
  },
  {
    icon: Gem,
    title: "Platinum",
    price: "₹74,999",
    color: "from-yellow-500 via-amber-500 to-orange-500",
    badge: "Luxury",
    features: [
      "Wedding Photography",
      "Cinematic Film",
      "Drone Coverage",
      "Pre Wedding Shoot",
      "1000+ Edited Photos",
      "Luxury Album",
      "Instagram Reel",
      "Highlight Film",
    ],
  },
];

export default function Packages() {
  return (
    <section
      id="packages"
      className="py-28 bg-gradient-to-b from-black via-zinc-950 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <span className="uppercase tracking-[5px] text-green-400 font-semibold">
            Wedding Packages
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Choose Your Perfect Package
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Affordable luxury wedding photography packages
            crafted specially for your unforgettable memories.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">

          {packages.map((pkg, index) => {

            const Icon = pkg.icon;

            return (

              <motion.div
                key={pkg.title}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                transition={{
                  duration: .6,
                  delay: index * .15,
                }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-[35px] border border-white/10 bg-zinc-900"
              >

                {pkg.badge && (

                  <div className="absolute top-6 right-6 bg-green-500 text-white text-xs px-4 py-2 rounded-full font-semibold z-20">

                    {pkg.badge}

                  </div>

                )}

                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-10 group-hover:opacity-20 transition duration-500`} />

                <div className="relative z-10 p-10">

                  <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-8 shadow-xl">

                    <Icon size={36} />

                  </div>

                  <h3 className="text-3xl font-bold">

                    {pkg.title}

                  </h3>

                  <h4 className="text-5xl font-extrabold mt-6">

                    {pkg.price}

                  </h4>

                  <div className="mt-10 space-y-5">

                    {pkg.features.map((feature) => (

                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >

                        <Check
                          size={20}
                          className="text-green-400"
                        />

                        <span className="text-gray-300">

                          {feature}

                        </span>

                      </div>

                    ))}

                  </div>

                  <button className="mt-12 w-full rounded-full bg-green-500 py-4 font-semibold text-lg hover:bg-green-400 transition duration-300">

                    Book Now

                  </button>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}