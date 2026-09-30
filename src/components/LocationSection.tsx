import React from 'react';
import { MapPin, Phone, Clock, Navigation, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { GYM_CONTACT } from '../utils/timeUtils';

export const LocationSection: React.FC = () => {
  // Google Maps embed URL centered at Kondhwa, Pune
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.093489813243!2d73.8884!3d18.4735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea6476b7b7a1%3A0x8e87498c56d78f56!2sChetna%20Garden%2C%20Kondhwa%2C%20Pune%2C%20Maharashtra%20411048!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';

  return (
    <section id="location" className="py-20 sm:py-24 bg-[#0B0F19] relative border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>FIND & VISIT US IN PUNE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight text-balance">
            Prime Kondhwa Location with Ample Parking
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Easily accessible from Kondhwa Main Road, Mitha Nagar, and Bhagyoday Nagar. Located right at 1st Floor, Riza Corner above Chetna Garden.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Address & Transit Details */}
          <div className="lg:col-span-5 bg-[#111827] border border-[#1F2937] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Hayat Fitness Gym
                </h3>
                <p className="text-xs text-emerald-400 font-mono">
                  1st Floor, Riza Corner
                </p>
              </div>

              {/* Exact Address */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <strong>1st Floor, Riza Corner</strong>, Chetna Garden, 50/65, Lane Number 9, Bhagyoday Nagar, Mitha Nagar, Kondhwa, Pune, Maharashtra 411048
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-300">
                    <div className="font-semibold text-white">Direct Front Desk:</div>
                    <a
                      href={`tel:${GYM_CONTACT.phoneRaw}`}
                      className="text-emerald-400 hover:underline font-mono"
                    >
                      {GYM_CONTACT.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-300">
                    <div className="font-semibold text-white">Operating Hours:</div>
                    <div>Monday – Saturday: <span className="font-mono text-emerald-400">6:00 AM – 12:00 AM</span></div>
                    <div className="text-slate-400 text-xs">Sunday: Closed (Facility Maintenance)</div>
                  </div>
                </div>
              </div>

              {/* Landmark directions */}
              <div className="p-4 bg-[#0B0F19] rounded-xl border border-[#1F2937] space-y-2 text-xs text-slate-300">
                <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-emerald-400" />
                  <span>Landmark & Transit Instructions:</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Enter via Lane Number 9 from Bhagyoday Nagar or Mitha Nagar. Look for Riza Corner building situated at Chetna Garden. Take the stairs or lift to the 1st floor. Dedicated 2-wheeler and 4-wheeler parking available.
                </p>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="space-y-3 pt-4 border-t border-[#1F2937]">
              <a
                href={GYM_CONTACT.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md shadow-emerald-500/20"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${GYM_CONTACT.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-slate-200 bg-[#0B0F19] border border-[#1F2937] hover:border-slate-600 rounded-xl transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call Front Desk</span>
                </a>
                <a
                  href={GYM_CONTACT.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-slate-200 bg-[#0B0F19] border border-[#1F2937] hover:border-slate-600 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Location</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Responsive Embedded Google Map */}
          <div className="lg:col-span-7 bg-[#111827] border border-[#1F2937] rounded-2xl overflow-hidden min-h-[420px] relative flex flex-col">
            <div className="p-3 bg-[#0B0F19] border-b border-[#1F2937] flex items-center justify-between text-xs text-slate-400 px-4">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Map View: Kondhwa, Pune (411048)
              </span>
              <span className="font-mono text-emerald-400">18.4735° N, 73.8906° E</span>
            </div>

            <iframe
              title="Hayat Fitness Gym Google Map Location in Kondhwa Pune"
              src={mapEmbedUrl}
              className="w-full flex-1 border-0 min-h-[380px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
