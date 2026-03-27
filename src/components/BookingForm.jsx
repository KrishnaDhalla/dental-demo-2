import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import clinicData from "../data/clinicData";

export default function BookingForm({ selectedTreatment = "", onSelectTreatment }) {
  const [submitted, setSubmitted] = useState(false);
  const [treatment, setTreatment] = useState(selectedTreatment);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    if (selectedTreatment) setTreatment(selectedTreatment);
  }, [selectedTreatment]);

  const allOptions = [
    ...clinicData.treatments.map(t => t.name),
    ...clinicData.additionalServices,
  ];

  const validatePhone = (value) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length < 10) {
      setPhoneError("Please enter a valid 10-digit phone number");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePhone(phone)) return;

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("[Demo] Appointment booking submitted:", data);

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setTreatment("");
      setPhone("");
      if (onSelectTreatment) onSelectTreatment("");
    }, 5000);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-10 bg-cream">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-4 sm:mx-auto bg-white rounded-2xl p-10 text-center border border-orange-200 shadow-sm">
          <CheckCircle size={48} className="text-green-500 mx-auto mb-3" />
          <h3 className="font-bold text-xl text-gray-900 mb-1">Thank You!</h3>
          <p className="text-gray-500">We'll contact you shortly to confirm your appointment.</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-10 bg-cream">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-orange-100 shadow-sm">
          <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-start">
            <div>
              <h2 className="font-bold text-xl md:text-2xl text-gray-900 leading-snug">
                Book an Appointment at {clinicData.clinicName}
              </h2>
              <p className="text-gray-500 text-sm mt-2">{clinicData.workingHours[0].days}: {clinicData.workingHours[0].time}</p>
            </div>
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div>
                <label htmlFor="booking-name" className="sr-only">Full Name</label>
                <input id="booking-name" name="name" type="text" required placeholder="Full Name"
                  aria-label="Full Name"
                  className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:border-orange-400 focus:ring-1 focus:ring-orange-100 outline-none" />
              </div>
              <div>
                <label htmlFor="booking-phone" className="sr-only">Phone Number</label>
                <input id="booking-phone" name="phone" type="tel" required placeholder="Phone Number (10 digits)"
                  aria-label="Phone Number"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value.replace(/[^0-9+\-\s]/g, "")); setPhoneError(""); }}
                  onBlur={() => phone && validatePhone(phone)}
                  className={`w-full border rounded px-4 py-2.5 text-sm focus:border-orange-400 focus:ring-1 focus:ring-orange-100 outline-none ${phoneError ? "border-red-400" : "border-gray-200"}`} />
                {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
              </div>
              <div>
                <label htmlFor="booking-treatment" className="sr-only">Select Treatment</label>
                <select id="booking-treatment" name="treatment" required
                  aria-label="Select Treatment"
                  value={treatment}
                  onChange={(e) => { setTreatment(e.target.value); if (onSelectTreatment) onSelectTreatment(e.target.value); }}
                  className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-500 bg-white focus:border-orange-400 outline-none">
                  <option value="">Select Treatment</option>
                  <optgroup label="Treatments">
                    {clinicData.treatments.map(t => <option key={t.name} value={t.name}>{t.name}</option>)}
                  </optgroup>
                  <optgroup label="Services">
                    {clinicData.additionalServices.map(s => <option key={s} value={s}>{s}</option>)}
                  </optgroup>
                </select>
              </div>
              <div>
                <label htmlFor="booking-date" className="sr-only">Preferred Date</label>
                <input id="booking-date" name="date" type="date" required
                  aria-label="Preferred Date"
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-500 focus:border-orange-400 focus:ring-1 focus:ring-orange-100 outline-none" />
              </div>
              <div>
                <label htmlFor="booking-time" className="sr-only">Preferred Time</label>
                <select id="booking-time" name="time" required
                  aria-label="Preferred Time"
                  className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-500 bg-white focus:border-orange-400 outline-none">
                  <option value="">Preferred Time</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="01:00 PM">1:00 PM</option>
                  <option value="02:00 PM">2:00 PM</option>
                  <option value="03:00 PM">3:00 PM</option>
                  <option value="04:00 PM">4:00 PM</option>
                  <option value="05:00 PM">5:00 PM</option>
                  <option value="06:00 PM">6:00 PM</option>
                </select>
              </div>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} type="submit"
                className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2.5 rounded flex items-center justify-center gap-2 transition-colors shadow-md shadow-orange-400/20">
                <Send size={16} /> Book Now
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
