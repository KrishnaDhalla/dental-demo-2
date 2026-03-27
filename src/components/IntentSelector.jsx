import { motion } from "framer-motion";
import clinicData from "../data/clinicData";
import DynamicIcon from "./ui/DynamicIcon";
import SectionHeading from "./ui/SectionHeading";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1, transition: { duration: 0.4 } } };

export default function IntentSelector({ onSelectTreatment }) {
  const handleClick = (e, intent) => {
    e.preventDefault();
    if (onSelectTreatment && intent.bookingValue) {
      onSelectTreatment(intent.bookingValue);
    }
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="How can we help you today?" subtitle="Select one option that best describes your need" />
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {clinicData.intents.map(intent => (
            <motion.a key={intent.label} variants={item} whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
              href="#contact" onClick={e => handleClick(e, intent)}
              className="bg-white rounded-xl p-5 flex flex-col items-center gap-3 border border-gray-100 hover:border-orange-200 cursor-pointer transition-all text-center">
              {intent.image
                ? <img src={intent.image} alt={intent.label} loading="lazy" className="w-12 h-12 object-contain" />
                : <DynamicIcon name={intent.icon} size={36} className="text-brown-300" />
              }
              <span className="text-sm font-medium text-gray-700">{intent.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
