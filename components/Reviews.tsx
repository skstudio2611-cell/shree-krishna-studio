"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul & Priya",
    review:
      "Amazing wedding photography! Every moment was captured beautifully. Highly recommended.",
  },
  {
    name: "Amit Patel",
    review:
      "Professional team, cinematic video quality and excellent service from start to finish.",
  },
  {
    name: "Jay & Hetal",
    review:
      "Beautiful editing, premium album quality and unforgettable memories. Thank you!",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-black py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold text-white"
        >
          Google <span className="text-green-400">Reviews</span>
        </motion.h2>

        <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
          See what our happy couples say about their experience with
          Shree Krishna Studio.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {reviews.map((review, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
              rounded-3xl
              border
              border-green-500/20
              bg-white/5
              backdrop-blur-xl
              p-8
              shadow-xl
              "
            >
              <div className="flex gap-1 mb-5">
                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    size={20}
                    fill="#22c55e"
                    color="#22c55e"
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-8">
                "{review.review}"
              </p>

              <h3 className="mt-6 font-bold text-green-400">
                {review.name}
              </h3>

            </motion.div>

          ))}

        </div>

        <div className="text-center mt-14">

          <p className="text-2xl font-bold text-white">

            ⭐ 5.0 / 5

          </p>

          <p className="text-gray-400 mt-2">

            Based on Happy Clients

          </p>

          <a
            href="https://g.page/r/CfXXXXXXXX/review"
            target="_blank"
            className="
            inline-block
            mt-8
            rounded-full
            bg-green-500
            px-8
            py-4
            font-semibold
            text-white
            transition
            hover:bg-green-600
            "
          >
            Leave a Google Review
          </a>

        </div>

      </div>
    </section>
  );
}