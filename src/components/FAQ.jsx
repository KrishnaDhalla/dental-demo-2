import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import clinicData from "../data/clinicData";
import SectionHeading from "./ui/SectionHeading";

function FAQItem({ faq, isOpen, toggle }) {
  return (
    <div className="border-b border-gray-100">
      <button onClick={toggle} className="w-full flex items-center justify-between py-4 text-left gap-4 group">
        <span className="text-sm font-medium text-gray-800 group-hover:text-orange-400 transition-colors">{faq.q}</span>
        {isOpen
          ? <Minus size={18} className="text-orange-400 shrink-0" />
          : <Plus size={18} className="text-orange-400 shrink-0" />
        }
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-sm text-gray-500 pb-4 leading-relaxed">{faq.a}</p>
      </motion.div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = clinicData.faqs;
  const mid = Math.ceil(faqs.length / 2);
  const left = faqs.slice(0, mid);
  const right = faqs.slice(mid);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
          <div>
            {left.map((faq, i) => (
              <FAQItem key={i} faq={faq} isOpen={openIndex === i} toggle={() => toggle(i)} />
            ))}
          </div>
          <div>
            {right.map((faq, i) => (
              <FAQItem key={i + mid} faq={faq} isOpen={openIndex === i + mid} toggle={() => toggle(i + mid)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
