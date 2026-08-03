import {
  Camera,
  Award,
  HeartHandshake,
  Plane,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Professional Team",
    desc: "Experienced photographers and cinematographers for every event.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    desc: "4K videos, luxury albums and cinematic color grading.",
  },
  {
    icon: Plane,
    title: "Drone Coverage",
    desc: "Creative aerial shots to make your memories unforgettable.",
  },
  {
    icon: HeartHandshake,
    title: "100% Client Satisfaction",
    desc: "We believe every client deserves the best experience.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-us" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-green-400 uppercase tracking-widest font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Why Couples Trust
            <span className="text-green-400"> Shree Krishna Studio</span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            We capture emotions, not just photographs. Every wedding is
            treated like a unique story with creativity and passion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-500 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <Icon size={30} className="text-green-400" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}