import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className={`font-bold text-2xl md:text-3xl ${light ? "text-white" : "text-brown-500"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base max-w-2xl mx-auto ${light ? "text-white/60" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
