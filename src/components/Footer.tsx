import React from 'react';
import { MapPin, Phone, Instagram, MessageCircle, Clock, Shield, CreditCard } from 'lucide-react';
import { GYM_CONTACT } from '../utils/timeUtils';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080B12] border-t border-[#1F2937] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#"
              className="text-2xl font-black tracking-wider text-white hover:text-emerald-400 transition-colors uppercase font-display inline-block"
            >
              HAYAT <span className="text-emerald-400">FITNESS</span>
            </a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Kondhwa’s leading strength & conditioning center. Precision biomechanical machinery, Olympic free weights up to 40+ kg, certified mentors, and dedicated women-only workout batches.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={GYM_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#111827] border border-[#1F2937] hover:border-emerald-500/50 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-emerald-400" />
              </a>
              <a
                href={GYM_CONTACT.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#111827] border border-[#1F2937] hover:border-emerald-500/50 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </a>
              <a
                href={`tel:${GYM_CONTACT.phoneRaw}`}
                className="w-9 h-9 rounded-lg bg-[#111827] border border-[#1F2937] hover:border-emerald-500/50 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#facilities" className="hover:text-emerald-400 transition-colors">
                  Gym Facilities
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-emerald-400 transition-colors">
                  Batches & Timings
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-emerald-400 transition-colors">
                  Women Only Batches
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-emerald-400 transition-colors">
                  BMI & TDEE Calculator
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-emerald-400 transition-colors">
                  Athlete Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-emerald-400 transition-colors">
                  Find Gym on Map
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Batches */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Operating Schedule
            </h4>
            <div className="space-y-2 text-slate-400">
              <div>
                <span className="text-white block font-medium">Monday to Saturday:</span>
                <span className="font-mono text-emerald-400">6:00 AM – 12:00 AM</span>
              </div>
              <div>
                <span className="text-white block font-medium">Women Exclusive:</span>
                <span className="font-mono text-slate-300">10:30 AM – 12:30 PM</span>
                <span className="font-mono text-slate-300 block">3:30 PM – 5:00 PM</span>
              </div>
              <div>
                <span className="text-rose-400 block font-medium">Sunday:</span>
                <span>Closed (Deep Sanitization)</span>
              </div>
            </div>
          </div>

          {/* Location & Payments */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Facility Address
            </h4>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              1st Floor, Riza Corner, Chetna Garden, 50/65, Lane 9, Bhagyoday Nagar, Mitha Nagar, Kondhwa, Pune, MH 411048
            </p>
            <div className="pt-2 border-t border-[#1F2937]">
              <span className="text-white block font-medium mb-1">Payments Accepted:</span>
              <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-300 font-mono">
                <span className="bg-[#111827] px-2 py-0.5 rounded border border-[#1F2937]">UPI (GPay / PhonePe)</span>
                <span className="bg-[#111827] px-2 py-0.5 rounded border border-[#1F2937]">NFC Tap Pay</span>
                <span className="bg-[#111827] px-2 py-0.5 rounded border border-[#1F2937]">Cash / NetBanking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-6 border-t border-[#1F2937] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Hayat Fitness Gym. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={GYM_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              Instagram @hayat.fitness__
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`tel:${GYM_CONTACT.phoneRaw}`}
              className="hover:text-emerald-400 transition-colors"
            >
              +91 86682 00042
            </a>
            <span aria-hidden="true">·</span>
            <span>Kondhwa, Pune</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
