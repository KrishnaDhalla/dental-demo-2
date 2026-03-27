import { motion } from "framer-motion";
import { CalendarCheck, Stethoscope } from "lucide-react";
import clinicData from "../data/clinicData";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Hero() {
  return (
    <section id="home" className="relative pt-[70px] bg-gradient-to-r from-orange-50 via-cream to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-[240px_1fr] lg:grid-cols-[240px_1fr_300px] gap-8 items-center">
          {/* Left badge */}
          <motion.div initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} transition={{duration:0.7}}
            className="hidden md:flex flex-col items-center border-r border-brown-200 pr-8">
            <div className="bg-brown-500 text-white font-bold text-sm px-4 py-2 rounded mb-4 tracking-wide">
              {clinicData.clinicName.split(" ").slice(0,2).join(" ")}
            </div>
            <div className="text-orange-400 font-extrabold text-6xl leading-none">{clinicData.yearsOfTrust}</div>
            <div className="text-brown-400 font-medium text-lg mt-1">years of</div>
            <div className="text-brown-500 font-bold text-2xl italic">trust</div>
          </motion.div>

          {/* Center content */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-2xl">
            <motion.h1 variants={fadeUp} className="font-bold text-3xl sm:text-4xl md:text-[2.6rem] leading-tight text-gray-900 mb-4">
              {clinicData.tagline}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
              {clinicData.description}
            </motion.p>

            {/* Promo box */}
            <motion.div variants={fadeUp} className="bg-white border border-orange-200 rounded-lg overflow-hidden mb-6 inline-flex shadow-sm">
              <div className="px-5 py-3 border-r border-orange-200">
                <p className="text-sm text-gray-500">Special Offer</p>
                <p className="font-bold text-lg text-brown-500">Free Consultation</p>
              </div>
              <div className="px-5 py-3 bg-orange-50">
                <p className="text-sm text-gray-500">On first visit</p>
                <p className="font-bold text-lg text-orange-400">+ Free X-Ray</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <motion.a whileHover={{scale:1.04}} whileTap={{scale:0.97}} href="#contact"
                onClick={e=>{e.preventDefault();document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"})}}
                className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded shadow-lg shadow-orange-400/20 transition-colors">
                <CalendarCheck size={18}/> BOOK AN APPOINTMENT
              </motion.a>
              <motion.a whileHover={{scale:1.04}} whileTap={{scale:0.97}} href={`tel:${clinicData.phone}`}
                className="inline-flex items-center gap-2 bg-brown-500 hover:bg-brown-600 text-white font-semibold px-6 py-3 rounded transition-colors">
                <Stethoscope size={18}/> Call Us
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Hero patient image */}
          <motion.div initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{duration:0.7,delay:0.2}}
            className="hidden lg:flex items-end justify-center">
            <img src={clinicData.heroImage} alt="Happy Patient" className="w-full max-h-[400px] object-contain drop-shadow-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
