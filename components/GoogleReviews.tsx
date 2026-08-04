"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul & Priya",
    text: "Amazing wedding photography. Every moment was captured beautifully.",
  },
  {
    name: "Amit & Neha",
    text: "Professional team and cinematic wedding films. Highly recommended.",
  },
  {
    name: "Harsh & Khushi",
    text: "Outstanding service, premium editing and unforgettable memories.",
  },
];

export default function GoogleReviews() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Google <span className="text-green-400">Reviews</span>
          </h2>

          <div className="flex justify-center items-center gap-2 mt-6">

            {[1,2,3,4,5].map((i)=>(
              <Star
                key={i}
                size={22}
                fill="#22c55e"
                color="#22c55e"
              />
            ))}

            <span className="text-white text-xl font-bold">
              5.0
            </span>

          </div>

          <p className="text-gray-400 mt-3">
            Loved by Happy Couples
          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {reviews.map((review,index)=>(

            <motion.div
              key={index}
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay:index*0.15 }}
              whileHover={{ y:-10 }}
              className="rounded-3xl border border-green-500/20 bg-white/5 backdrop-blur-xl p-8"
            >

              <div className="flex gap-1 mb-5">
                {[1,2,3,4,5].map((i)=>(
                  <Star
                    key={i}
                    size={18}
                    fill="#22c55e"
                    color="#22c55e"
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-8">
                {review.text}
              </p>

              <h3 className="mt-6 font-bold text-white">
                {review.name}
              </h3>

              <p className="text-green-400 text-sm mt-1">
                Reviewed on Google
              </p>

            </motion.div>

          ))}

        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-14">

          <a
            href="https://g.page/r/Ce6IaqEa6EewEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 px-8 py-4 text-white font-semibold hover:bg-green-600 transition"
          >
            ⭐ Leave a Google Review
          </a>

          <a
            href="https://www.google.com/search?q=Shree+Krishna+Studio"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-green-500 px-8 py-4 text-green-400 font-semibold hover:bg-green-500 hover:text-white transition"
          >
            View Google Profile
          </a>

        </div>

      </div>
    </section>
  );
}