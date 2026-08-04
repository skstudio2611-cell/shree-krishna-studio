"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const images = [
  "/images/instagram/1.jpg",
  "/images/instagram/2.jpg",
  "/images/instagram/3.jpg",
  "/images/instagram/4.jpg",
  "/images/instagram/5.jpg",
  "/images/instagram/6.jpg",
];

export default function InstagramShowcase() {
  return (
    <section
      id="instagram"
      className="bg-zinc-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="uppercase tracking-[5px] text-green-400 font-semibold">
            Instagram
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
            Follow Our Journey
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Explore our latest wedding stories, cinematic moments
            and premium photography captured across Surat & Gujarat.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/mk_edits_2611/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.04,
              }}
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              aspect-square
              "
            >
             <Image
  src={image}
  alt={`Instagram ${index + 1}`}
  fill
  sizes="(max-width:768px) 50vw, 33vw"
  loading="lazy"
  className="
    object-cover
    transition-transform
    duration-500
    group-hover:scale-110
  "
/>
              <div
                className="
                absolute
                inset-0
                bg-black/50
                opacity-0
                group-hover:opacity-100
                transition
                flex
                items-center
                justify-center
                "
              >
                < FaInstagram 
                  size={44}
                  className="text-white"
                />
              </div>
            </motion.a>
          ))}
        </div>
                <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >

          <div
            className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-green-500/30
            bg-white/5
            backdrop-blur-md
            px-6
            py-3
            "
          >

            < FaInstagram 
              size={22}
              className="text-green-400"
            />

            <span
              className="
              text-lg
              font-semibold
              text-white
              "
            >
              @MK_edits_2611
            </span>

          </div>

          <p
            className="
            mt-5
            text-gray-400
            "
          >
            Follow us on Instagram for daily wedding inspiration,
            cinematic reels and behind-the-scenes moments.
          </p>

          <motion.a
            href="https://www.instagram.com/mk_edits_2611/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
            inline-flex
            items-center
            gap-3
            mt-8
            rounded-full
            bg-green-500
            px-8
            py-4
            font-semibold
            text-white
            shadow-lg
            shadow-green-500/30
            transition
            hover:bg-green-600
            "
          >

            < FaInstagram size={22} />

            Follow on Instagram

          </motion.a>

        </motion.div>

      </div>

    </section>

  );

}