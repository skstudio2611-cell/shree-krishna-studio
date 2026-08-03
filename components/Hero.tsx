"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Play } from "lucide-react";


export default function Hero() {

  return (

    <section
      id="home"
      className="
      relative
      min-h-screen
      w-full
      overflow-hidden
      flex
      items-center
      "
    >


      {/* Background Image */}


      <motion.div

        initial={{
          scale:1.15
        }}

        animate={{
          scale:1
        }}

        transition={{
          duration:2.5,
          ease:"easeOut"
        }}

        className="
        absolute
        inset-0
        "

      >

        <Image

          src="/images/hero.jpg"

          alt="Shree Krishna Studio Wedding"

          fill

          priority

          sizes="100vw"

          className="
          object-cover
          "

        />

      </motion.div>





      {/* Overlay */}


      <div className="
      absolute
      inset-0
      bg-black/70
      "
      />



      <div className="
      absolute
      inset-0
      bg-gradient-to-r
      from-green-900/30
      via-black/30
      to-black/70
      "
      />







      {/* Content */}


      <div className="
      relative
      z-10
      w-full
      px-6
      pt-28
      pb-20
      ">


        <div className="
        max-w-5xl
        mx-auto
        text-center
        ">




          {/* Badge */}


          <motion.span

            initial={{
              opacity:0,
              y:-30
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:0.8
            }}


            className="
            inline-block
            rounded-full
            border
            border-green-400/50
            bg-black/30
            backdrop-blur-md
            px-5
            py-2
            text-xs
            md:text-sm
            uppercase
            tracking-[4px]
            text-green-400
            "

          >

            Wedding • Cinematic • Photography


          </motion.span>







          {/* Heading */}



          <motion.h1

            initial={{
              opacity:0,
              y:50
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:0.2,
              duration:0.9
            }}


            className="
            mt-8
            text-5xl
            sm:text-6xl
            md:text-7xl
            font-black
            leading-tight
            text-white
            "

          >

            SHREE KRISHNA

            <br/>

            <span className="
            text-green-400
            ">

              STUDIO

            </span>


          </motion.h1>






          {/* Description */}



          <motion.p

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              delay:0.6
            }}

            className="
            mx-auto
            mt-7
            max-w-3xl
            text-base
            md:text-xl
            leading-8
            text-gray-300
            "

          >

            Capturing timeless love stories with cinematic wedding
            photography and films. Every frame is crafted to become
            a memory you&apos;ll cherish forever.


          </motion.p>
                    {/* Buttons */}


          <motion.div

            initial={{
              opacity:0,
              y:30
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:0.9,
              duration:0.7
            }}

            className="
            mt-10
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-5
            "

          >



            <motion.a

              href="#contact"

              whileHover={{
                scale:1.05
              }}

              whileTap={{
                scale:0.95
              }}


              className="
              group
              flex
              items-center
              justify-center
              gap-3
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

              <Camera
                size={22}
              />

              Book Your Shoot


            </motion.a>






            <motion.a

              href="#gallery"

              whileHover={{
                scale:1.05
              }}

              whileTap={{
                scale:0.95
              }}

              className="
              flex
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-white/70
              bg-white/5
              backdrop-blur-md
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:bg-white
              hover:text-black
              "

            >

              <Play
                size={20}
              />

              View Gallery


            </motion.a>


          </motion.div>







          {/* Stats */}



          <motion.div

            initial={{
              opacity:0,
              y:40
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:1.2,
              duration:0.8
            }}

            className="
            mt-16
            grid
            grid-cols-2
            gap-6
            md:grid-cols-4
            "

          >



            {[
              {
                number:"500+",
                title:"Happy Clients"
              },

              {
                number:"1000+",
                title:"Events Covered"
              },

              {
                number:"8+",
                title:"Years Experience"
              },

              {
                number:"100%",
                title:"Client Satisfaction"
              }

            ].map((item)=>(


              <motion.div

                key={item.title}

                whileHover={{
                  y:-8
                }}

                className="
                rounded-2xl
                bg-black/30
                backdrop-blur-md
                border
                border-white/10
                p-5
                "

              >


                <h2 className="
                text-3xl
                md:text-4xl
                font-bold
                text-green-400
                ">

                  {item.number}

                </h2>


                <p className="
                mt-2
                text-sm
                text-gray-300
                ">

                  {item.title}

                </p>


              </motion.div>


            ))}



          </motion.div>




        </div>


      </div>








      {/* Scroll Down */}



      <motion.div

        animate={{
          y:[0,12,0]
        }}

        transition={{
          duration:1.8,
          repeat:Infinity
        }}

        className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        "

      >

        <div className="
        h-12
        w-7
        rounded-full
        border-2
        border-white/70
        flex
        justify-center
        ">


          <motion.div

            animate={{
              y:[0,10,0]
            }}

            transition={{
              duration:1.2,
              repeat:Infinity
            }}

            className="
            mt-2
            h-3
            w-1
            rounded-full
            bg-green-400
            "

          />


        </div>


      </motion.div>



    </section>


  );

}