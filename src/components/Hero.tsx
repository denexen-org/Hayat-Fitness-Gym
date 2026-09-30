import React from 'react';
import { Dumbbell, ShieldCheck, Flame, ArrowRight, MessageCircle, Star, Sparkles, MapPin } from 'lucide-react';
import { GYM_CONTACT, buildWhatsAppLink } from '../utils/timeUtils';

interface HeroProps {
  onOpenTrialModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  const whatsappHeroUrl = buildWhatsAppLink(
    'Hi Hayat Fitness Gym, I want to inquire about gym membership, facilities, and batch timings in Kondhwa.'
  );

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Dark Athletic Atmospheric Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-20 w-[450px] h-[350px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & High-Intent CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Social Proof Text Meta (Clean unboxed line as per frontend-design rules) */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="tabular-nums">4.7 / 5.0</span>
              </span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-300 font-medium">360+ Verified Google Reviews</span>
              <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                Kondhwa, Pune
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] font-display text-balance">
              Transform Your Body at <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">Kondhwa’s Premier</span> Strength & Conditioning Facility.
            </h1>

            {/* Concrete Value Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Equipped with precision biomechanical machinery, Olympic free weights up to 40+ kg, certified strength mentors, and private women-only training batches. Train uninterrupted from 6:00 AM to midnight.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenTrialModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-[0.98] transition-all duration-200 rounded-xl shadow-xl shadow-emerald-500/20 cursor-pointer group"
              >
                <span>Claim 1-Day Free Pass</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-semibold text-slate-200 hover:text-white bg-[#111827] hover:bg-[#1F2937] border border-[#1F2937] hover:border-slate-600 rounded-xl transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Subtext */}
            <p className="text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>No mandatory contract · Free gym walkthrough & trainer consultation</span>
            </p>
          </div>

          {/* Right Column: High-Impact Athletic Visual Graphic Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 blur-xl opacity-75" />

              <div className="relative rounded-2xl bg-[#111827] border border-[#1F2937] overflow-hidden shadow-2xl">
                {/* Visual Header Banner */}
                <div className="relative h-64 sm:h-72 bg-gradient-to-br from-slate-900 via-[#0B0F19] to-emerald-950/40 p-6 flex flex-col justify-between overflow-hidden">
                  {/* Subtle Grid Lines pattern */}
                  <div
                    className="absolute inset-0 opacity-15 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:16px_16px]"
                    aria-hidden="true"
                  />

                  {/* Top status indicator inside preview card */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-1 rounded">
                      ATHLETIC FACILITY
                    </span>
                    <span className="text-xs font-mono text-slate-400">EST. PUNE 411048</span>
                  </div>

                  {/* Athletic Vector Art Silhouette */}
                  <div className="relative z-10 flex items-center justify-center my-auto">
                    <div className="relative flex items-center justify-center w-28 h-28 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                      <Dumbbell className="w-14 h-14 text-emerald-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Bottom overlay caption */}
                  <div className="relative z-10">
                    <div className="text-lg font-bold text-white font-display">
                      HAYAT FITNESS GYM
                    </div>
                    <p className="text-xs text-slate-300">
                      1st Floor, Riza Corner, Chetna Garden, Kondhwa
                    </p>
                  </div>
                </div>

                {/* Key Facility Highlights Checklist inside the card */}
                <div className="p-6 bg-[#111827] space-y-4 border-t border-[#1F2937]">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-[#0B0F19] rounded-lg border border-[#1F2937]/80">
                      <div className="text-xs text-slate-400">Timings</div>
                      <div className="text-sm font-bold text-white font-mono">6 AM – 12 AM</div>
                      <div className="text-[11px] text-emerald-400">Mon to Sat</div>
                    </div>
                    <div className="p-3 bg-[#0B0F19] rounded-lg border border-[#1F2937]/80">
                      <div className="text-xs text-slate-400">Google Rating</div>
                      <div className="text-sm font-bold text-amber-400 font-mono">4.7 ★ Verified</div>
                      <div className="text-[11px] text-slate-400">360+ Reviews</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Dedicated Women-Only Workout Batches with Female Mentors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Flame className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Biomechanic Strength, Free Dumbbells up to 40+ kg & Cardio</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>NFC Tap & UPI Instant Payment Hub</span>
                    </div>
                  </div>

                  <button
                    onClick={onOpenTrialModal}
                    className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
                  >
                    View Batches & Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Quick Ribbon */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#1F2937] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-black text-white font-mono tabular-nums">
              18 Hours
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wide">
              Daily Access (6 AM – 12 AM)
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono tabular-nums">
              2 Dedicated
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wide">
              Women Exclusive Batches
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-black text-white font-mono tabular-nums">
              4.7 ★
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wide">
              360+ Verified Kondhwa Athletes
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono tabular-nums">
              100%
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wide">
              Bio-tech & Free-Weight Setup
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
