import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import clinicData from "../data/clinicData";
import SectionHeading from "./ui/SectionHeading";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our Patients Speak" subtitle="Hear what our happy patients have to say about their treatments" />
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {clinicData.reviews.map((r) => (
            <motion.div key={r.name} variants={item} whileHover={{ y: -5 }}
              className="relative bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-shadow">
              <Quote size={36} className="absolute top-4 right-4 text-orange-100" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-orange-400 fill-orange-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5 relative z-10 italic">"{r.text}"</p>

              {/* Author + treatment tag */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  {r.image
                    ? <img src={r.image} alt={r.name} loading="lazy" className="w-9 h-9 rounded-full object-cover" />
                    : <div className="w-9 h-9 rounded-full bg-brown-100 flex items-center justify-center text-brown-500 font-bold text-sm">{r.name[0]}</div>
                  }
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.city}</p>
                  </div>
                </div>
                <span className="text-orange-400 text-xs font-semibold">{r.treatment}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-8">
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicData.clinicName + " " + clinicData.address)}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-500 text-sm font-semibold transition-colors">
            View all {clinicData.googleReviewCount}+ reviews on Google
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
