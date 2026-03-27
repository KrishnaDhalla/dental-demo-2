import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import clinicData from "../data/clinicData";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Book Appointment", href: "#contact" },
  { label: "Treatments", href: "#treatments" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#why-trust" },
];

const socials = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Youtube, label: "YouTube" },
  { icon: Linkedin, label: "LinkedIn" },
];

const formatPhone = (p) => p.replace("+91", "").replace(/(\d{5})(\d{5})/, "+91 $1 $2");

export default function Footer() {
  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-brown-500 text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img src={clinicData.logoWhiteUrl} alt={clinicData.clinicName} loading="lazy" className="h-10 w-auto mb-4" />
            <p className="text-orange-400 font-semibold text-sm mb-4">Connect with Us</p>
            <a href={`tel:${clinicData.phone}`} className="flex items-center gap-2 text-white/80 hover:text-white text-sm mb-4 transition-colors">
              <Phone size={16} /> {formatPhone(clinicData.phone)}
            </a>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label }, i) => (
                <a key={i} href="#" onClick={e => e.preventDefault()} aria-label={label} title={`${label} (demo)`}
                  className="w-8 h-8 rounded border border-orange-400/40 hover:border-orange-400 flex items-center justify-center transition-colors">
                  <Icon size={15} className="text-orange-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-orange-400 font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} onClick={(e) => go(e, l.href)}
                    className="text-white/60 hover:text-white text-sm transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-orange-400 font-semibold text-sm mb-4">Treatments</h4>
            <ul className="space-y-2.5">
              {clinicData.treatments.slice(0, 6).map((t) => (
                <li key={t.name}>
                  <a href="#treatments" onClick={(e) => go(e, "#treatments")}
                    className="text-white/60 hover:text-white text-sm transition-colors">{t.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-orange-400 font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="text-orange-400 mt-0.5 shrink-0" />
                <a href={`tel:${clinicData.phone}`} className="text-white/60 hover:text-white text-sm transition-colors">
                  {formatPhone(clinicData.phone)}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="text-orange-400 mt-0.5 shrink-0" />
                <a href={`mailto:${clinicData.email}`} className="text-white/60 hover:text-white text-sm transition-colors">
                  {clinicData.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-orange-400 mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">{clinicData.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-xs">
            &copy; {new Date().getFullYear()} {clinicData.clinicName}. All rights reserved.
          </p>
          <div className="flex gap-4 text-white/60 text-xs">
            <a href="#" onClick={e => e.preventDefault()} className="hover:text-white transition-colors" title="Coming soon">Privacy Policy</a>
            <a href="#" onClick={e => e.preventDefault()} className="hover:text-white transition-colors" title="Coming soon">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
