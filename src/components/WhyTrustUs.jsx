import { motion } from "framer-motion";
import clinicData from "../data/clinicData";
import SectionHeading from "./ui/SectionHeading";

const borderColors = { orange: "border-orange-400", blue: "border-blue-400", amber: "border-amber-400" };

export default function WhyTrustUs() {
  return (
    <section id="why-trust" className="py-16 md:py-24 bg-ice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={`Why Trust ${clinicData.clinicName}`} />
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-start">
          {/* Left: Doctor photo */}
          <motion.div id="our-doctor" initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}
            className="bg-gradient-to-br from-brown-100 to-brown-200 rounded-2xl h-[420px] relative overflow-hidden scroll-mt-20">
            <img src={clinicData.doctorImage} alt={clinicData.doctorName} loading="lazy" className="w-full h-full object-cover object-top" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brown-600/80 to-transparent p-5">
              <p className="text-white font-bold text-xl">{clinicData.doctorName}</p>
              <p className="text-orange-300 text-sm mt-0.5">{clinicData.doctorCredentials}</p>
            </div>
          </motion.div>

          {/* Right: 2x2 feature boxes */}
          <div className="grid sm:grid-cols-2 gap-5">
            {clinicData.trustFeatures.map((feat, i) => (
              <motion.div key={feat.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{delay:i*0.1,duration:0.5}}
                className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className={`font-bold text-base text-gray-900 pb-2 mb-3 border-b-2 ${borderColors[feat.color] || "border-orange-400"}`}>
                  {feat.title}
                </h3>
                <ul className="space-y-2">
                  {feat.points.map((pt,j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-orange-400 mt-1 shrink-0">•</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
