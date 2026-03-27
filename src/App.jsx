import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsTicker from "./components/StatsTicker";
import InfoCards from "./components/InfoCards";
import IntentSelector from "./components/IntentSelector";
import WhyTrustUs from "./components/WhyTrustUs";
import BookingForm from "./components/BookingForm";
import Treatments from "./components/Treatments";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState("");

  return (
    <div>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:text-orange-500 focus:font-semibold">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <StatsTicker />
        <InfoCards />
        <IntentSelector onSelectTreatment={setSelectedTreatment} />
        <WhyTrustUs />
        <BookingForm selectedTreatment={selectedTreatment} onSelectTreatment={setSelectedTreatment} />
        <Treatments onSelectTreatment={setSelectedTreatment} />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
