"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide Wedding Photography, Cinematic Wedding Films, Pre Wedding Shoots, Engagement Photography, Drone Coverage, Wedding Albums, Birthday Photography and Event Photography.",
  },
  {
    question: "Do you provide Pre Wedding Shoot in Gujarat?",
    answer:
      "Yes. We provide premium Pre Wedding Photography and Cinematic Pre Wedding Shoots across Surat and all over Gujarat.",
  },
  {
    question: "How can I book my wedding date?",
    answer:
      "You can book your date directly through our Contact Form, WhatsApp or Phone Call.",
  },
  {
    question: "Do you provide Cinematic Wedding Films?",
    answer:
      "Yes. We specialize in premium cinematic wedding films with professional color grading and storytelling.",
  },
  {
    question: "Do you travel outside Surat?",
    answer:
      "Yes. We cover weddings all over Gujarat and also destination weddings across India.",
  },
  {
    question: "How early should I book?",
    answer:
      "We recommend booking your wedding at least 2 to 6 months in advance to secure your preferred date.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-black py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center text-4xl md:text-5xl font-bold text-white"
        >
          Frequently Asked{" "}
          <span className="text-green-400">
            Questions
          </span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-5">
          Everything you need to know before booking
          Shree Krishna Studio.
        </p>

        <div className="mt-14 space-y-5">

          {faqs.map((faq,index)=>(

            <div
              key={index}
              className="
              rounded-2xl
              border
              border-green-500/20
              bg-white/5
              backdrop-blur-xl
              overflow-hidden
              "
            >

              <button
                onClick={()=>
                  setOpen(open===index ? null : index)
                }
                className="
                w-full
                flex
                justify-between
                items-center
                px-6
                py-5
                text-left
                text-white
                font-semibold
                "
              >

                {faq.question}

                <ChevronDown
                  className={`transition-transform ${
                    open===index ? "rotate-180" : ""
                  }`}
                />

              </button>

              <AnimatePresence>

                {open===index && (

                  <motion.div
                    initial={{height:0,opacity:0}}
                    animate={{height:"auto",opacity:1}}
                    exit={{height:0,opacity:0}}
                    transition={{duration:0.3}}
                  >

                    <p className="px-6 pb-6 text-gray-300 leading-8">
                      {faq.answer}
                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}