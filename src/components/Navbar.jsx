import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import clinicData from "../data/clinicData";

const navLinks = [
  { label: "Treatments", href: "#treatments" },
  { label: "About", href: "#why-trust" },
  { label: "Our Doctor", href: "#our-doctor" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const formatPhone = (p) => p.replace("+91", "").replace(/(\d{5})(\d{5})/, "+91 $1 $2");

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[70px]">
          <a href="#home" onClick={e => go(e, "#home")} className="flex items-center">
            <img src={clinicData.logoUrl} alt={clinicData.clinicName} className="h-10 w-auto" />
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map(l => (
              <a key={l.href + l.label} href={l.href} onClick={e => go(e, l.href)} className="text-sm font-medium text-gray-700 hover:text-orange-400 transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${clinicData.phone}`} className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
              <Phone size={14} /> {formatPhone(clinicData.phone)}
            </a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="#contact" onClick={e => go(e, "#contact")}
              className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors">
              Book Appointment
            </motion.a>
            <a href={`tel:${clinicData.phone}`} className="bg-brown-500 hover:bg-brown-600 text-white text-sm font-semibold px-4 py-2.5 rounded flex items-center gap-1 transition-colors">
              Call Us
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-brown-500" aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="fixed inset-0 bg-black/30 z-40 lg:hidden" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-72 h-full bg-white z-50 shadow-2xl p-6 flex flex-col lg:hidden">
              <button onClick={() => setMobileOpen(false)} className="self-end mb-6 text-gray-500" aria-label="Close menu"><X size={24} /></button>
              <div className="flex flex-col gap-5">
                {navLinks.map(l => (
                  <a key={l.href + l.label} href={l.href} onClick={e => go(e, l.href)} className="text-gray-800 font-medium text-lg hover:text-orange-400 transition-colors">{l.label}</a>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <a href={`tel:${clinicData.phone}`} className="flex items-center gap-2 text-gray-600"><Phone size={16} />{formatPhone(clinicData.phone)}</a>
                <a href="#contact" onClick={e => go(e, "#contact")} className="bg-orange-400 text-white text-center font-semibold py-3 rounded">Book Appointment</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
