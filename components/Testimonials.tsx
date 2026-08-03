"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul & Priya",
    location: "Surat",
    review:
      "Amazing experience! Every photo looked cinematic. Thank you Shree Krishna Studio for making our wedding unforgettable.",
  },
  {
    name: "Amit & Neha",
    location: "Rajkot",
    review:
      "Professional team with premium editing. Album quality and cinematic video were beyond our expectations.",
  },
  {
    name: "Harsh & Khushi",
    location: "Ahmedabad",
    review:
      "Best wedding photographers. Friendly team, creative poses and beautiful memories captured forever.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28 bg-black text-white"
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
            Testimonials
          </span>

          <h2 className="text-5xl font-bold mt-5">
            What Our Clients Say
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Hundreds of happy couples trusted
            Shree Krishna Studio to capture
            their most precious moments.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity:0, y:80 }}
              whileInView={{ opacity:1, y:0 }}
              whileHover={{
                y:-10,
                scale:1.03,
              }}
              transition={{
                duration:.6,
                delay:index*0.15,
              }}
              viewport={{ once:true }}
              className="relative overflow-hidden rounded-[30px] border border-white/10 bg-zinc-900 p-8 group"
            >

              <Quote
                size={42}
                className="text-green-500 mb-6"
              />

              <p className="text-gray-300 leading-8">
                {item.review}
              </p>

              <div className="flex gap-1 mt-8">

                {[...Array(5)].map((_, i)=>(

                  <Star
                    key={i}
                    size={18}
                    className="fill-green-400 text-green-400"
                  />

                ))}

              </div>

              <div className="mt-8">

                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-green-400">
                  {item.location}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}