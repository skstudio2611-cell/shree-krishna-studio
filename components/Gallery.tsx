"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const categories = [
  "All",
  "Wedding",
  "Pre Wedding",
  "Engagement",
  "Haldi",
  "Reception",
  "Cinematic",
];

const images = [
  // Wedding
  { src: "/images/gallery/wedding/wedding1.jpg", category: "Wedding" },
  { src: "/images/gallery/wedding/wedding2.jpg", category: "Wedding" },
  { src: "/images/gallery/wedding/wedding3.jpg", category: "Wedding" },
  { src: "/images/gallery/wedding/wedding4.jpg", category: "Wedding" },
  { src: "/images/gallery/wedding/wedding5.jpg", category: "Wedding" },
  { src: "/images/gallery/wedding/wedding6.jpg", category: "Wedding" },

  // Pre Wedding
  { src: "/images/gallery/prewedding/pre-wedding1.jpg", category: "Pre Wedding" },
  { src: "/images/gallery/prewedding/pre-wedding2.jpg", category: "Pre Wedding" },
  { src: "/images/gallery/prewedding/pre-wedding3.jpg", category: "Pre Wedding" },
  { src: "/images/gallery/prewedding/pre-wedding4.jpg", category: "Pre Wedding" },
  { src: "/images/gallery/prewedding/pre-wedding5.jpg", category: "Pre Wedding" },
  { src: "/images/gallery/prewedding/pre-wedding6.jpg", category: "Pre Wedding" },

  // Engagement
  { src: "/images/gallery/engagement/engagement1.jpg", category: "Engagement" },
  { src: "/images/gallery/engagement/engagement2.jpg", category: "Engagement" },
  { src: "/images/gallery/engagement/engagement3.jpg", category: "Engagement" },
  { src: "/images/gallery/engagement/engagement4.jpg", category: "Engagement" },

  // Haldi
  { src: "/images/gallery/haldi/haldi1.jpg", category: "Haldi" },
  { src: "/images/gallery/haldi/haldi2.jpg", category: "Haldi" },
  { src: "/images/gallery/haldi/haldi3.jpg", category: "Haldi" },
  { src: "/images/gallery/haldi/haldi4.jpg", category: "Haldi" },

  // Reception
  { src: "/images/gallery/reception/reception1.jpg", category: "Reception" },
  { src: "/images/gallery/reception/reception2.jpg", category: "Reception" },
  { src: "/images/gallery/reception/reception3.jpg", category: "Reception" },
  { src: "/images/gallery/reception/reception4.jpg", category: "Reception" },

  // Cinematic
  { src: "/images/gallery/cinematic/cinematic1.jpg", category: "Cinematic" },
  { src: "/images/gallery/cinematic/cinematic2.jpg", category: "Cinematic" },
  { src: "/images/gallery/cinematic/cinematic3.jpg", category: "Cinematic" },
  { src: "/images/gallery/cinematic/cinematic4.jpg", category: "Cinematic" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter(
          (image) => image.category === selectedCategory
        );

  return (
    <section
  id="gallery"
  className="bg-gradient-to-b from-black via-zinc-950 to-black text-white py-28 px-6 overflow-hidden"
>
  <div className="max-w-7xl mx-auto">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >

      <span className="inline-block px-5 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 tracking-[5px] uppercase text-sm font-semibold">

        Our Gallery

      </span>

      <h2 className="text-5xl md:text-6xl font-bold mt-8 leading-tight">

        Captured
        <span className="text-green-400"> Moments</span>

      </h2>

      <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">

        Every wedding tells a unique story.
        Explore timeless memories beautifully captured by
        <span className="text-white font-semibold">
          {" "}Shree Krishna Studio
        </span>

      </p>

    </motion.div>

    {/* Category Buttons */}

    <div className="flex flex-wrap justify-center gap-4 mb-20">

      {categories.map((category) => (

        <motion.button
          key={category}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedCategory(category)}
          className={`relative overflow-hidden px-8 py-3 rounded-full border backdrop-blur-md transition-all duration-500 font-semibold tracking-wide ${
            selectedCategory === category
              ? "bg-green-500 border-green-400 text-white shadow-[0_0_35px_rgba(34,197,94,0.45)]"
              : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-green-500/50 hover:text-white"
          }`}
        >

          <span className="relative z-10">

            {category}

          </span>

          {selectedCategory === category && (

            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 rounded-full bg-green-500 -z-0"
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 30,
              }}
            />

          )}

        </motion.button>

      ))}

    </div>

    {/* Gallery Grid */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {filteredImages.map((image, index) => (
        <motion.div
  key={image.src}
  initial={{
    opacity: 0,
    y: 80,
    scale: 0.95,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  whileHover={{
    y: -12,
    scale: 1.02,
  }}
  transition={{
    duration: 0.6,
    delay: index * 0.08,
  }}
  viewport={{ once: true }}
  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900 shadow-2xl transition-all duration-700 hover:border-green-500/50 hover:shadow-[0_30px_80px_rgba(34,197,94,0.30)]"
  onClick={() => {
    setIndex(index);
    setOpen(true);
  }}
>

  {/* Image Container */}

  <div className="relative h-[420px] overflow-hidden rounded-[30px]">

    {/* Shine Effect */}

    <div className="absolute inset-0 -left-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000 z-20" />

    {/* Skeleton */}

    {!loadedImages.includes(image.src) && (
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800" />
    )}

    {/* Image */}

    <Image
      src={image.src}
      alt={image.category}
      fill
      loading={index === 0 ? "eager" : "lazy"}
      sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
      onLoad={() =>
        setLoadedImages((prev) => [...prev, image.src])
      }
      className={`object-cover transition-all duration-700
      ${
        loadedImages.includes(image.src)
          ? "opacity-100"
          : "opacity-0"
      }
      group-hover:scale-125 group-hover:brightness-50`}
    />

    {/* Overlay */}

    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center">

      {/* Search Icon */}

      <motion.div
        initial={{
          scale: 0,
          rotate: -180,
        }}
        whileHover={{
          scale: 1.15,
          rotate: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-2xl"
      >

        <Search
          size={28}
          className="text-white"
        />

      </motion.div>

      {/* Title */}

      <h3 className="mt-6 text-2xl font-bold">

        {image.category}

      </h3>

      <p className="mt-2 uppercase tracking-[4px] text-green-400 text-sm">

        Shree Krishna Studio

      </p>

    </div>

  </div>

</motion.div>
      ))}

    </div>

  </div>

  {/* Lightbox */}

  <Lightbox
    open={open}
    close={() => setOpen(false)}
    index={index}
    slides={filteredImages.map((img) => ({
      src: img.src,
    }))}
  />

</section>

  );
}