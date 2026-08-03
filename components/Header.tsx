"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Packages", href: "#packages" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];


export default function Header() {

  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);



  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 40);

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  }, []);




  return (

    <motion.header

      initial={{
        y:-100
      }}

      animate={{
        y:0
      }}

      transition={{
        duration:0.8
      }}


      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
        ?
        "bg-black/85 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
        :
        "bg-transparent"
      }`}

    >



      <div className="max-w-7xl mx-auto px-6">


        <div className="flex justify-between items-center h-20">



          {/* Logo */}



          <Link
            href="/"
            className="flex items-center gap-3 group"
          >



            <motion.div

              whileHover={{
                rotate:360,
                scale:1.1
              }}

              transition={{
                duration:0.8
              }}

              className="relative"

            >


              <div className="
              absolute
              inset-0
              rounded-full
              bg-green-400/30
              blur-lg
              group-hover:bg-green-400/50
              transition
              "
              />


              <Image

                src="/images/logo.png"

                alt="Shree Krishna Studio"

                width={58}

                height={58}

                priority

                className="
                relative
                rounded-full
                object-cover
                "

              />


            </motion.div>




            <div>


              <h1 className="
              text-white
              font-bold
              text-xl
              leading-none
              tracking-wide
              ">

                SHREE KRISHNA

              </h1>


              <p className="
              text-green-400
              text-sm
              tracking-widest
              ">

                STUDIO

              </p>


            </div>



          </Link>





          {/* Desktop Navigation */}



          <nav className="
          hidden
          lg:flex
          items-center
          gap-8
          ">


            {navItems.map((item)=>(


              <a

                key={item.name}

                href={item.href}

                className="
                relative
                text-white
                font-medium
                group
                "

              >


                {item.name}



                <span className="
                absolute
                left-0
                -bottom-2
                w-0
                h-[2px]
                bg-green-400
                transition-all
                duration-300
                group-hover:w-full
                "
                />



              </a>


            ))}


          </nav>
                    {/* Book Now Button */}


          <div className="hidden lg:block">


            <motion.a

              href="#contact"

              whileHover={{
                scale:1.05
              }}

              whileTap={{
                scale:0.95
              }}

              className="
              relative
              overflow-hidden
              bg-green-500
              text-white
              px-7
              py-3
              rounded-xl
              font-semibold
              shadow-lg
              shadow-green-500/30
              "

            >


              <span className="relative z-10">
                Book Now
              </span>


              <span className="
              absolute
              inset-0
              bg-green-600
              translate-y-full
              hover:translate-y-0
              transition-transform
              duration-300
              "
              />


            </motion.a>


          </div>





          {/* Mobile Menu Button */}



          <button

            className="
            lg:hidden
            text-white
            "

            onClick={() =>
              setMenuOpen(!menuOpen)
            }

          >


            <motion.div

              animate={{
                rotate: menuOpen ? 90 : 0
              }}

            >


              {menuOpen
                ?
                <X size={32}/>
                :
                <Menu size={32}/>
              }


            </motion.div>


          </button>



        </div>


      </div>






      {/* Mobile Menu */}



      <AnimatePresence>


      {menuOpen && (


        <motion.div

          initial={{
            opacity:0,
            height:0
          }}

          animate={{
            opacity:1,
            height:"auto"
          }}

          exit={{
            opacity:0,
            height:0
          }}

          transition={{
            duration:0.4
          }}


          className="
          lg:hidden
          bg-black/95
          backdrop-blur-xl
          overflow-hidden
          "

        >


          <div className="
          flex
          flex-col
          p-6
          space-y-5
          ">



            {navItems.map((item)=>(


              <motion.a

                key={item.name}

                href={item.href}

                onClick={() =>
                  setMenuOpen(false)
                }


                whileHover={{
                  x:10
                }}


                className="
                text-white
                text-lg
                hover:text-green-400
                transition
                "

              >

                {item.name}


              </motion.a>


            ))}





            <motion.a

              href="#contact"

              onClick={() =>
                setMenuOpen(false)
              }


              whileTap={{
                scale:0.95
              }}


              className="
              bg-green-500
              text-white
              text-center
              py-3
              rounded-xl
              font-semibold
              "

            >

              Book Now


            </motion.a>



          </div>


        </motion.div>


      )}


      </AnimatePresence>



    </motion.header>


  );

}