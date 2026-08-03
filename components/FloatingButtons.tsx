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

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      {/* WhatsApp */}

      <motion.a
        href="https://wa.me/918849684475"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-[0_10px_30px_rgba(34,197,94,0.5)] hover:shadow-[0_10px_40px_rgba(34,197,94,0.8)]"
      >
        <FaWhatsapp size={28} className="text-white" />
      </motion.a>

      {/* Call */}

      <motion.a
        href="tel:+918849684475"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.3,
        }}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_10px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.8)]"
      >
        <Phone size={24} className="text-white" />
      </motion.a>
            {/* Instagram */}

      <motion.a
        href="https://instagram.com/MK_edits_2611"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.6,
        }}
        className="fixed bottom-42 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center shadow-[0_10px_30px_rgba(236,72,153,0.5)] hover:shadow-[0_10px_40px_rgba(236,72,153,0.8)]"
      >
        <FaInstagram size={26} className="text-white" />
      </motion.a>
            {/* Instagram */}

      <motion.a
        href="https://instagram.com/MK_edits_2611"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.6,
        }}
        className="fixed bottom-42 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center shadow-[0_10px_30px_rgba(236,72,153,0.5)] hover:shadow-[0_10px_40px_rgba(236,72,153,0.8)]"
      >
        <FaInstagram size={26} className="text-white" />
      </motion.a>

      {/* Back To Top */}

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="fixed bottom-60 right-6 z-50 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

    </>
  );
}