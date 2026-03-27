import { motion } from "framer-motion";
import clinicData from "../data/clinicData";
import DynamicIcon from "./ui/DynamicIcon";
import SectionHeading from "./ui/SectionHeading";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function Treatments({ onSelectTreatment }) {
  const handleClick = (treatmentName) => {
    if (onSelectTreatment) onSelectTreatment(treatmentName);
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="treatments" className="py-16 md:py-24 bg-ice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={`Treatments at ${clinicData.clinicName}`} subtitle="Comprehensive dental care for your entire family" />
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clinicData.treatments.map(t => (
            <motion.button key={t.name} variants={item} type="button"
              onClick={() => handleClick(t.name)}
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl p-5 flex flex-col items-center gap-3 border border-gray-100 cursor-pointer transition-all text-center hover:shadow-md hover:border-orange-400">
              {t.image
                ? <img src={t.image} alt={t.name} loading="lazy" className="w-12 h-12 object-contain" />
                : <DynamicIcon name={t.icon} size={36} className="text-brown-300" />
              }
              <span className="text-sm font-medium text-gray-700 leading-tight">{t.name}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
