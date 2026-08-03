"use client";

import { FormEvent, useState } from "react";
import { CalendarDays, MapPin, Phone, Send } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const whatsappNumber = "918849684475";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const details = [
      "Hello Shree Krishna Studio, I would like to enquire about a shoot.",
      "",
      `Name: ${form.get("name")}`,
      `Phone: ${form.get("phone")}`,
      `Event type: ${form.get("eventType")}`,
      `Event date: ${form.get("eventDate") || "Not decided yet"}`,
      `Message: ${form.get("message") || "No additional details"}`,
    ];

    setSubmitted(true);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(details.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section id="contact" className="bg-[#081B17] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-semibold uppercase tracking-[4px] text-green-400">
            Let&apos;s create together
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Book Your Dream Wedding Shoot
          </h2>
          <p className="mt-6 text-gray-300">
            Tell us a little about your celebration and we&apos;ll continue the
            conversation on WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <a href="tel:+918849684475" className="rounded-2xl border border-white/10 bg-white/10 p-6 transition hover:border-green-400 hover:bg-white/[0.14]">
              <Phone className="text-green-400" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold">Call us</h3>
              <p className="mt-2 text-gray-300">+91 88496 84475</p>
            </a>
            <a href="https://instagram.com/MK_edits_2611" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 bg-white/10 p-6 transition hover:border-green-400 hover:bg-white/[0.14]">
              <FaInstagram className="text-green-400" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold">Instagram</h3>
              <p className="mt-2 text-gray-300">@MK_edits_2611</p>
            </a>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
              <MapPin className="text-green-400" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold">Based in Gujarat</h3>
              <p className="mt-2 text-gray-300">Available for destination shoots</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 text-zinc-900 shadow-2xl sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                Your name
                <input name="name" required placeholder="Enter your name" className="rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100" />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Phone number
                <input name="phone" type="tel" required placeholder="Your contact number" className="rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100" />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Shoot type
                <select name="eventType" required defaultValue="" className="rounded-xl border border-zinc-200 bg-white px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100">
                  <option value="" disabled>Select an event type</option>
                  <option>Wedding</option>
                  <option>Pre-wedding</option>
                  <option>Engagement</option>
                  <option>Reception</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Event date
                <input name="eventDate" type="date" className="rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100" />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-semibold">
              Tell us about your plans <span className="font-normal text-zinc-500">(optional)</span>
              <textarea name="message" rows={4} placeholder="Venue, guest count, special ideas..." className="resize-none rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100" />
            </label>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-4 font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
              <Send size={19} aria-hidden="true" />
              Send enquiry on WhatsApp
            </button>
            <p className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
              <CalendarDays size={17} aria-hidden="true" />
              {submitted ? "WhatsApp opened with your enquiry details." : "No email needed — we&apos;ll reply directly on WhatsApp."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
