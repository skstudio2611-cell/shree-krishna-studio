"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918849684475?text=Hello%20Shree%20Krishna%20Studio,%20I%20want%20to%20book%20a%20wedding%20shoot."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}