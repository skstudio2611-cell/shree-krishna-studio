"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2500);


    return () => clearTimeout(timer);

  }, []);



  return (

    <AnimatePresence>


      {loading && (

        <motion.div

          initial={{
            opacity:1
          }}

          exit={{
            opacity:0
          }}

          transition={{
            duration:0.8
          }}

          className="
          fixed inset-0
          z-[9999]
          flex
          flex-col
          items-center
          justify-center
          bg-black
          overflow-hidden
          "

        >



          {/* Glow Background */}

          <div className="
          absolute
          w-[300px]
          h-[300px]
          rounded-full
          bg-green-500/20
          blur-[120px]
          "
          />





          {/* Logo */}

          <motion.div

            initial={{
              scale:0.5,
              opacity:0
            }}

            animate={{
              scale:1,
              opacity:1
            }}

            transition={{
              duration:1,
              ease:"easeOut"
            }}

            className="
            relative
            "

          >


            <div className="
            absolute
            inset-0
            rounded-full
            bg-green-400/30
            blur-2xl
            "
            />


            <Image

              src="/images/logo.png"

              alt="Shree Krishna Studio"

              width={160}

              height={160}

              priority

              className="
              relative
              w-auto
              h-auto
              "

            />


          </motion.div>







          {/* Brand Name */}


          <motion.h2

            initial={{
              y:20,
              opacity:0
            }}

            animate={{
              y:0,
              opacity:1
            }}

            transition={{
              delay:0.5,
              duration:0.8
            }}

            className="
            mt-8
            text-3xl
            md:text-4xl
            font-bold
            tracking-[8px]
            text-white
            "

          >

            SHREE KRISHNA


          </motion.h2>






          <motion.p

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              delay:1,
              duration:1
            }}

            className="
            mt-3
            text-green-400
            tracking-[6px]
            uppercase
            text-sm
            "

          >

            Capturing Forever


          </motion.p>







          {/* Loading Bar */}


          <div className="
          mt-12
          h-1
          w-64
          rounded-full
          overflow-hidden
          bg-zinc-800
          ">


            <motion.div

              initial={{
                width:"0%"
              }}

              animate={{
                width:"100%"
              }}

              transition={{
                duration:2.3,
                ease:"linear"
              }}

              className="
              h-full
              bg-green-400
              "

            />


          </div>





        </motion.div>

      )}


    </AnimatePresence>

  );

}