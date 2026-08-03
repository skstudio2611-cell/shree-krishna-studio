"use client";

import { useEffect, useState } from "react";
import { Phone, ArrowUp } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";


export default function FloatingButtons() {

  const [showTop, setShowTop] = useState(false);


  useEffect(() => {

    const handleScroll = () => {

      setShowTop(window.scrollY > 400);

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );


  }, []);



  const buttonStyle = `
  fixed
  right-6
  z-50
  w-14
  h-14
  rounded-full
  flex
  items-center
  justify-center
  shadow-2xl
  `;



  return (

    <>


      {/* WhatsApp */}

      <motion.a

        href="https://wa.me/918849684475"

        target="_blank"

        rel="noopener noreferrer"


        whileHover={{
          scale:1.15
        }}

        whileTap={{
          scale:0.9
        }}

        animate={{
          y:[0,-6,0]
        }}

        transition={{
          duration:2,
          repeat:Infinity
        }}


        className={`
        ${buttonStyle}
        bottom-6
        bg-green-500
        shadow-green-500/40
        `}

      >

        <FaWhatsapp
          size={30}
          className="text-white"
        />

      </motion.a>






      {/* Call */}


      <motion.a

        href="tel:+918849684475"


        whileHover={{
          scale:1.15
        }}

        whileTap={{
          scale:0.9
        }}


        className={`
        ${buttonStyle}
        bottom-24
        bg-blue-500
        shadow-blue-500/40
        `}

      >

        <Phone
          size={25}
          className="text-white"
        />

      </motion.a>






      {/* Instagram */}


      <motion.a

        href="https://instagram.com/MK_edits_2611"

        target="_blank"

        rel="noopener noreferrer"


        whileHover={{
          scale:1.15
        }}

        whileTap={{
          scale:0.9
        }}


        className={`
        ${buttonStyle}
        bottom-42
        bg-gradient-to-br
        from-pink-500
        via-red-500
        to-yellow-500
        shadow-pink-500/40
        `}

      >

        <FaInstagram
          size={27}
          className="text-white"
        />

      </motion.a>








      {/* Scroll Top */}


      <AnimatePresence>


      {showTop && (

        <motion.button


          initial={{
            opacity:0,
            y:40
          }}


          animate={{
            opacity:1,
            y:0
          }}


          exit={{
            opacity:0,
            y:40
          }}


          whileHover={{
            scale:1.15
          }}


          whileTap={{
            scale:0.9
          }}


          onClick={()=>
            window.scrollTo({
              top:0,
              behavior:"smooth"
            })
          }


          className={`
          ${buttonStyle}
          bottom-60
          bg-white
          text-black
          `}

        >

          <ArrowUp size={25}/>


        </motion.button>


      )}


      </AnimatePresence>



    </>

  );

}