import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import clinicData from "../data/clinicData";

export default function FloatingButtons() {
  const waUrl = `https://wa.me/${clinicData.whatsapp}?text=${encodeURIComponent(
    `Hi ${clinicData.doctorName}, I want to book an appointment.`
  )}`;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5">
      {/* WhatsApp */}
      <motion.a
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.12 }}
        href={waUrl} target="_blank" rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="cta-pulse w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-lg flex items-center justify-center"
      >
        <MessageCircle size={22} className="text-white" />
      </motion.a>

      {/* Phone */}
      <motion.a
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.12 }}
        href={`tel:${clinicData.phone}`}
        aria-label="Call us"
        className="w-10 h-10 rounded-full bg-orange-400 hover:bg-orange-500 shadow-lg flex items-center justify-center"
      >
        <Phone size={18} className="text-white" />
      </motion.a>
    </div>
  );
}
