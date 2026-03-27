const clinicData = {
  clinicName: "Smile Craft Dental Clinic",
  tagline: "Where Every Smile Gets the Care It Deserves",
  description: "A modern multi-speciality dental clinic offering world-class treatment with a gentle, personalized approach.",
  yearsOfTrust: 15,

  logoUrl: "/images/logo-dark.png",
  logoWhiteUrl: "/images/logo-white.png",
  heroImage: "/images/hero-patient-smile.png",

  doctorName: "Dr. Abhijit Mahata",
  doctorCredentials: "BDS, MDS — Prosthodontics",
  doctorYears: 15,
  doctorBio: "With over 15 years of experience, Dr. Mahata specializes in advanced restorative and cosmetic dentistry. Committed to pain-free, patient-first dental care using the latest technology and techniques.",
  doctorImage: "/images/doctor-portrait.png",

  phone: "+911234567890",
  whatsapp: "911234567890",
  email: "smilecraft78@gmail.com",
  address: "CE 78, Salt Lake Rd, Sector 1, Bidhannagar, Kolkata 700064",
  area: "Salt Lake",
  city: "Kolkata",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0!2d88.39!3d22.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02767ed8830641%3A0xf2cbc7cfb14a4535!2sSmile%20Craft%20Dental%20Treatment%20Centre!5e0!3m2!1sen!2sin!4v1",

  googleRating: 4.9,
  googleReviewCount: 232,

  workingHours: [
    { days: "Monday – Saturday", time: "10:00 AM – 7:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],

  // Stats ticker
  stats: [
    { value: "5000+", label: "Happy Patients", icon: "Users" },
    { value: "5+", label: "Dentists", icon: "UserCheck" },
    { value: "15+", label: "Years Trust", icon: "Calendar" },
    { value: "6 Days", label: "Open", icon: "CalendarDays" },
    { value: "3000+", label: "Root Canals", icon: "Crosshair" },
    { value: "1000+", label: "Implants", icon: "Pin" },
    { value: "2000+", label: "Crowns", icon: "Crown" },
  ],

  // Intent selector tiles
  intents: [
    { label: "Regular Check-up", icon: "Search", image: "/images/regular-checkup.png", bookingValue: "Regular Check-up" },
    { label: "Dental Implants", icon: "Pin", image: "/images/dental-implants.gif", bookingValue: "Dental Implants" },
    { label: "Kids Dentistry", icon: "Baby", image: "/images/kids-dentistry.gif", bookingValue: "Kids Dentistry" },
    { label: "Braces & Aligners", icon: "AlignCenter", image: "/images/braces-aligners.png", bookingValue: "Dental Braces" },
    { label: "Follow-up Visit", icon: "CalendarCheck", image: "/images/follow-up.png", bookingValue: "Follow-up Visit" },
    { label: "Tooth Pain", icon: "Zap", image: "/images/tooth-pain.png", bookingValue: "Tooth Pain Consultation" },
    { label: "Teeth Cleaning", icon: "Sparkles", image: "/images/teeth-cleaning.png", bookingValue: "Teeth Cleaning" },
    { label: "Emergency Care", icon: "AlertCircle", image: "/images/emergency-care.png", bookingValue: "Emergency Care" },
  ],

  // Additional booking-only services (not in treatments grid)
  additionalServices: [
    "Regular Check-up",
    "Teeth Cleaning",
    "Tooth Pain Consultation",
    "Emergency Care",
    "Follow-up Visit",
  ],

  // Treatments (12 items)
  treatments: [
    { name: "Root Canal Treatment", icon: "Crosshair", image: "/images/root-canal.gif" },
    { name: "Dental Crowns", icon: "Crown", image: "/images/dental-crowns.gif" },
    { name: "Laser Dentistry", icon: "Zap", image: "/images/laser-dentistry.gif" },
    { name: "Clear Aligners", icon: "AlignCenter", image: "/images/clear-aligners.gif" },
    { name: "Dental Fillings", icon: "Shield", image: "/images/dental-fillings.gif" },
    { name: "Wisdom Teeth Removal", icon: "Scissors", image: "/images/wisdom-teeth.gif" },
    { name: "Dental Braces", icon: "GitBranch", image: "/images/dental-braces.gif" },
    { name: "Dental Implants", icon: "Pin", image: "/images/dental-implants.gif" },
    { name: "Dentures", icon: "Smile", image: "/images/dentures.gif" },
    { name: "Kids Dentistry", icon: "Baby", image: "/images/kids-dentistry.gif" },
    { name: "Gum Treatment", icon: "Heart", image: "/images/gum-treatment.gif" },
    { name: "Teeth Whitening", icon: "Sparkles", image: "/images/teeth-whitening.gif" },
  ],

  // Why trust us — 4 feature boxes
  trustFeatures: [
    {
      title: "World Class Treatment",
      color: "orange",
      points: [
        "Advanced equipment and premium materials",
        "Globally certified treatment protocols",
        "Laser dentistry & digital scanning",
        "Pain-free procedures with latest technology",
      ],
    },
    {
      title: "Doctor-Led Patient Care",
      color: "blue",
      points: [
        "Experienced specialist for every procedure",
        "Personalized treatment plans for each patient",
        "Post-treatment follow-up and care",
        "Transparent consultation and diagnosis",
      ],
    },
    {
      title: `${15}+ Years Of Experience`,
      color: "amber",
      points: [
        "5+ experienced dental specialists",
        "3000+ successful root canal treatments",
        "1000+ implants placed with precision",
        "Trusted by families across Kolkata",
      ],
    },
    {
      title: "Unmatched Safety Standards",
      color: "amber",
      points: [
        "Strict sterilization protocols",
        "Autoclave-verified instrument cleaning",
        "Single-use disposables for every patient",
        "Spotless, hygienic clinic environment",
      ],
    },
  ],

  // Reviews
  reviews: [
    { name: "Sabyasachi", treatment: "Root Canal", city: "Kolkata", text: "A homely place where any dental issue gets resolved. Dr. Mahata and team are extremely professional and caring.", rating: 5, image: "/images/patient-1.png" },
    { name: "Sourav Jain", treatment: "Dental Implants", city: "Kolkata", text: "One of the best places for dental work. Been coming here for 20 years and never disappointed.", rating: 5, image: "/images/patient-2.png" },
    { name: "Mala Das", treatment: "Braces", city: "Kolkata", text: "My entire family gets treatment here. Quality is great, staff is very cordial. Highly recommended!", rating: 5, image: "/images/patient-3.png" },
    { name: "Tanujit D.", treatment: "Root Canal", city: "Kolkata", text: "Done my RCT here, very professional and polite. Explained everything in detail and fixed the problem at affordable cost.", rating: 5, image: "/images/patient-4.png" },
  ],

  // FAQ
  faqs: [
    { q: "What are the signs that I might need a root canal?", a: "Common signs include persistent tooth pain, sensitivity to hot or cold, swollen gums, darkened tooth, or pain while chewing. If you experience any of these, schedule a consultation immediately." },
    { q: "What safety measures are in place at the clinic?", a: "We follow strict sterilization protocols with autoclave-verified cleaning, use single-use disposables, maintain a spotless environment, and follow all recommended hygiene guidelines." },
    { q: "How long do dental implants last?", a: "With proper care and maintenance, dental implants can last 15-25 years or even a lifetime. Regular dental check-ups and good oral hygiene are key to their longevity." },
    { q: "How do I cancel or reschedule my appointment?", a: "You can call us, send a WhatsApp message, or use the contact form to reschedule. We request at least 24 hours notice for cancellations." },
    { q: "Do you offer braces and aligners for adults?", a: "Yes, we offer traditional metal braces, ceramic braces, and clear aligners for patients of all ages. Our orthodontist will recommend the best option for your needs." },
    { q: "How often should I visit the dentist for a check-up?", a: "We recommend visiting every 6 months for a routine check-up and cleaning. This helps detect issues early and maintain optimal oral health." },
    { q: "Is teeth whitening safe?", a: "Yes, professional teeth whitening performed by our dentists is completely safe. We use clinically tested products that brighten your smile without damaging enamel." },
    { q: "What should I expect during my first visit?", a: "Your first visit includes a thorough oral examination, X-rays if needed, a discussion of your dental history, and a personalized treatment plan. The entire process takes about 30-45 minutes." },
  ],
};

export default clinicData;
