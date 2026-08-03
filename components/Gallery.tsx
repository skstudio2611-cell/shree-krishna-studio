"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";


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

  {
    src: "/images/gallery/wedding/wedding1.jpg",
    category: "Wedding",
    title: "Wedding Moments",
  },

  {
    src: "/images/gallery/wedding/wedding2.jpg",
    category: "Wedding",
    title: "Wedding Moments",
  },

  {
    src: "/images/gallery/wedding/wedding3.jpg",
    category: "Wedding",
    title: "Wedding Moments",
  },

  {
    src: "/images/gallery/wedding/wedding4.jpg",
    category: "Wedding",
    title: "Wedding Moments",
  },

  {
    src: "/images/gallery/wedding/wedding5.jpg",
    category: "Wedding",
    title: "Wedding Moments",
  },

  {
    src: "/images/gallery/wedding/wedding6.jpg",
    category: "Wedding",
    title: "Wedding Moments",
  },


  // Pre Wedding

  {
    src: "/images/gallery/prewedding/pre-wedding1.jpg",
    category: "Pre Wedding",
    title: "Pre Wedding Shoot",
  },

  {
    src: "/images/gallery/prewedding/pre-wedding2.jpg",
    category: "Pre Wedding",
    title: "Pre Wedding Shoot",
  },

  {
    src: "/images/gallery/prewedding/pre-wedding3.jpg",
    category: "Pre Wedding",
    title: "Pre Wedding Shoot",
  },

  {
    src: "/images/gallery/prewedding/pre-wedding4.jpg",
    category: "Pre Wedding",
    title: "Pre Wedding Shoot",
  },

  {
    src: "/images/gallery/prewedding/pre-wedding5.jpg",
    category: "Pre Wedding",
    title: "Pre Wedding Shoot",
  },

  {
    src: "/images/gallery/prewedding/pre-wedding6.jpg",
    category: "Pre Wedding",
    title: "Pre Wedding Shoot",
  },


  // Engagement

  {
    src: "/images/gallery/engagement/engagement1.jpg",
    category: "Engagement",
    title: "Engagement Memories",
  },

  {
    src: "/images/gallery/engagement/engagement2.jpg",
    category: "Engagement",
    title: "Engagement Memories",
  },

  {
    src: "/images/gallery/engagement/engagement3.jpg",
    category: "Engagement",
    title: "Engagement Memories",
  },

  {
    src: "/images/gallery/engagement/engagement4.jpg",
    category: "Engagement",
    title: "Engagement Memories",
  },


  // Haldi

  {
    src: "/images/gallery/haldi/haldi1.jpg",
    category: "Haldi",
    title: "Haldi Ceremony",
  },

  {
    src: "/images/gallery/haldi/haldi2.jpg",
    category: "Haldi",
    title: "Haldi Ceremony",
  },

  {
    src: "/images/gallery/haldi/haldi3.jpg",
    category: "Haldi",
    title: "Haldi Ceremony",
  },

  {
    src: "/images/gallery/haldi/haldi4.jpg",
    category: "Haldi",
    title: "Haldi Ceremony",
  },

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



          <h2 className="text-5xl md:text-6xl font-bold mt-8">

            Captured

            <span className="text-green-400">
              {" "}Moments
            </span>

          </h2>



          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">

            Every wedding tells a unique story.
            Beautiful memories captured by
            <span className="text-white font-semibold">
              {" "}Shree Krishna Studio
            </span>

          </p>


        </motion.div>





        {/* Categories */}


        <div className="flex flex-wrap justify-center gap-4 mb-16">


          {categories.map((category)=>(


            <button

              key={category}

              onClick={() =>
                setSelectedCategory(category)
              }

              className={`
              px-7 py-3 rounded-full border transition-all duration-300 font-semibold
              ${
                selectedCategory === category
                ?
                "bg-green-500 border-green-400 shadow-lg shadow-green-500/30"
                :
                "bg-white/5 border-white/10 hover:border-green-400"
              }
              `}

            >

              {category}

            </button>


          ))}


        </div>







        {/* Gallery Grid */}


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">



          {filteredImages.map((image, i)=>(


            <motion.div


              key={image.src}


              initial={{
                opacity:0,
                y:60
              }}


              whileInView={{
                opacity:1,
                y:0
              }}


              viewport={{
                once:true
              }}


              whileHover={{
                y:-10,
                scale:1.02
              }}


              transition={{
                duration:0.5
              }}


              onClick={()=>{

                setIndex(i);

                setOpen(true);

              }}


              className="
              group cursor-pointer
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-zinc-900
              shadow-xl
              "

            >




              <div className="relative h-[420px]">



                {!loadedImages.includes(image.src) && (

                  <div className="
                  absolute inset-0
                  bg-zinc-800
                  animate-pulse
                  "/>

                )}



                <Image

                  src={image.src}

                  alt={image.title}

                  fill

                  sizes="(max-width:768px)100vw,33vw"

                  onLoad={()=>{

                    setLoadedImages(prev=>[
                      ...prev,
                      image.src
                    ])

                  }}


                  className={`
                  object-cover
                  transition duration-700
                  group-hover:scale-110

                  ${
                    loadedImages.includes(image.src)
                    ?
                    "opacity-100"
                    :
                    "opacity-0"
                  }

                  `}

                />





                <div className="
                absolute inset-0
                bg-black/60
                opacity-0
                group-hover:opacity-100
                transition
                flex
                items-center
                justify-center
                flex-col
                ">



                  <div className="
                  w-16 h-16
                  rounded-full
                  bg-green-500
                  flex
                  items-center
                  justify-center
                  ">


                    <Search
                      size={30}
                    />


                  </div>




                  <h3 className="
                  mt-5
                  text-2xl
                  font-bold
                  ">

                    {image.category}

                  </h3>



                  <p className="
                  text-green-400
                  text-sm
                  tracking-widest
                  mt-2
                  ">

                    SHREE KRISHNA STUDIO

                  </p>



                </div>



              </div>



            </motion.div>


          ))}



        </div>



      </div>







      {/* Premium Lightbox */}



      <Lightbox

        open={open}

        close={()=>setOpen(false)}

        index={index}


        plugins={[
          Zoom,
          Captions
        ]}


        slides={filteredImages.map((img)=>({

          src: img.src,

          title: img.title,

          description:
          "Shree Krishna Studio"

        }))}


      />



    </section>

  );

}