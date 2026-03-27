import { motion } from "framer-motion";
import { Star, MapPin, UserCheck } from "lucide-react";
import clinicData from "../data/clinicData";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function InfoCards() {
  return (
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pb-10 grid md:grid-cols-3 gap-5">

      {/* Google Reviews */}
      <motion.div variants={item} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-sm font-semibold text-gray-700">Rated {clinicData.googleRating}/5</span>
          {[...Array(5)].map((_,i) => <Star key={i} size={16} className="text-orange-400 fill-orange-400"/>)}
        </div>
        <div className="mt-2">
          <span className="text-orange-400 font-extrabold text-3xl">{clinicData.googleReviewCount}+</span>
          <span className="text-gray-800 font-bold text-xl ml-1">Happy Reviews</span>
        </div>
        <div className="mt-2">
          <img src="/images/google-verified.png" alt="Google Verified" className="h-5 w-auto" />
        </div>
      </motion.div>

      {/* Find Clinic */}
      <motion.div variants={item} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <MapPin size={20} className="text-orange-400"/>
          <span className="font-bold text-lg text-gray-800">Located in {clinicData.area}</span>
        </div>
        <p className="text-gray-500 text-sm mb-1">Visit our clinic in {clinicData.area}, {clinicData.city}</p>
        <p className="text-gray-500 text-sm mb-4">Open {clinicData.workingHours[0].days}</p>
        <a href={`https://maps.google.com/?q=${encodeURIComponent(clinicData.address)}`} target="_blank" rel="noopener noreferrer"
          className="block w-full bg-gray-900 hover:bg-gray-800 text-white text-center text-sm font-semibold py-2.5 rounded transition-colors">
          Get Directions
        </a>
      </motion.div>

      {/* Doctors */}
      <motion.div variants={item} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <UserCheck size={20} className="text-orange-400"/>
          <span className="font-bold text-lg text-gray-800">{clinicData.doctorName}</span>
        </div>
        <p className="text-gray-500 text-sm mb-1">{clinicData.doctorCredentials}</p>
        <p className="text-gray-500 text-sm mb-4">{clinicData.doctorYears}+ years of experience</p>
        <a href="#why-trust" onClick={e=>{e.preventDefault();document.querySelector("#why-trust")?.scrollIntoView({behavior:"smooth"})}}
          className="block w-full bg-gray-900 hover:bg-gray-800 text-white text-center text-sm font-semibold py-2.5 rounded transition-colors">
          Know More
        </a>
      </motion.div>
    </motion.div>
  );
}
