import React from 'react';
import { Dumbbell, ShieldCheck, Flame, Volume2, Sparkles, CreditCard, ChevronRight, Check } from 'lucide-react';
import { AmenityItem } from '../types';

interface FacilitiesGridProps {
  onOpenTrialModal: () => void;
}

export const FacilitiesGrid: React.FC<FacilitiesGridProps> = ({ onOpenTrialModal }) => {
  const facilities: AmenityItem[] = [
    {
      id: 'free-weights',
      title: 'Heavy Free Weights & Olympic Power Racks',
      subtitle: 'Complete Compound Lifting Setup',
      description: 'Massive selection of calibrated rubber hex and round dumbbells scaling up to 40+ kg. Multi-grip pull-up bars, competition-grade Olympic barbells, deadlift platforms, and heavy-duty squat racks for progressive overload.',
      iconName: 'dumbbell',
      highlight: 'Dumbbells Up to 40+ kg',
      tag: 'Strength & Hypertrophy',
    },
    {
      id: 'biomech-machines',
      title: 'Precision Biomechanical Isolation Machines',
      subtitle: 'Targeted Muscle Hypertrophy',
      description: 'Pin-selected and plate-loaded biomechanical stations engineered along natural joint motion curves. Includes 45° leg press, seated cable rows, dual cable crossovers, Pec-Fly/Rear-Delt, and smooth counter-balanced Smith machines.',
      iconName: 'machine',
      highlight: 'Joint-Friendly Ergonomics',
      tag: 'Hypertrophy & Safety',
    },
    {
      id: 'cardio-zone',
      title: 'High-Performance Cardio & Conditioning',
      subtitle: 'Calorie Burn & Stamina Station',
      description: 'Industrial-grade commercial motorized treadmills, elliptical cross-trainers, assault bikes, and recumbent cycles equipped with digital telemetry for cardiovascular endurance and rapid fat loss routines.',
      iconName: 'cardio',
      highlight: 'Continuous Heart-Rate & Calorie Tracking',
      tag: 'Endurance & Fat Loss',
    },
    {
      id: 'women-studio',
      title: 'Dedicated Women Workout Batches & Coaches',
      subtitle: 'Comfortable, Private & Guided',
      description: 'Specialized batch hours where the gym floor is dedicated exclusively to women. Led by certified female strength mentors providing structured guidance on functional toning, core strength, and body transformation.',
      iconName: 'women',
      highlight: 'Certified Female Coaches',
      tag: 'Private & Welcoming',
    },
    {
      id: 'acoustics',
      title: 'Surround Sound Audio Engineering',
      subtitle: 'High-Energy Athletic Motivation',
      description: 'Acoustically tuned surround audio system broadcasting high-tempo workout beats and bass rhythms that push adrenaline and keep momentum alive through every intense set.',
      iconName: 'music',
      highlight: 'High-Tempo Training Acoustics',
      tag: 'Focus & Drive',
    },
    {
      id: 'amenities-nfc',
      title: 'Locker Rooms, Hygiene & Instant NFC / UPI Hub',
      subtitle: 'Convenience & Daily Cleanliness',
      description: 'Secure lockers, spotless restrooms, sanitized equipment stations throughout the floor, and seamless digital contactless payments supporting Google Pay, PhonePe, Paytm, and NFC cards.',
      iconName: 'hygiene',
      highlight: 'UPI & NFC Mobile Tap Pay',
      tag: 'Hygiene & Security',
    },
  ];

  return (
    <section id="facilities" className="py-20 sm:py-24 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>KONDHWA PREMIER INFRASTRUCTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight text-balance">
            Engineered for Serious Lifters & Everyday Athletes
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every square foot at Hayat Fitness Gym is planned for maximum workout efficiency, safety, and hygiene.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => {
            const isFeatured = index === 0 || index === 3;
            return (
              <div
                key={facility.id}
                className={`bg-[#111827] border border-[#1F2937] hover:border-slate-600 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                  isFeatured ? 'lg:col-span-2 bg-gradient-to-br from-[#111827] via-[#111827] to-slate-900/60' : 'lg:col-span-1'
                }`}
              >
                <div className="space-y-4">
                  {/* Clean unboxed category & feature tag */}
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                      {facility.tag}
                    </span>
                    <span className="font-mono text-slate-400">
                      {facility.highlight}
                    </span>
                  </div>

                  {/* Header Title with Icon */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {facility.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-400">
                      {facility.subtitle}
                    </p>
                  </div>

                  {/* Body description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* Bottom subtle detail strip */}
                <div className="mt-6 pt-4 border-t border-[#1F2937] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Maintained daily at Kondhwa gym</span>
                  </div>

                  <button
                    onClick={onOpenTrialModal}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    <span>Tour Facility</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 p-6 sm:p-8 bg-[#111827] border border-[#1F2937] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Want to see our machines & floor in person?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Walk into 1st Floor, Riza Corner, Chetna Garden, Kondhwa anytime between 6:00 AM and 12:00 AM Midnight.
            </p>
          </div>
          <button
            onClick={onOpenTrialModal}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl whitespace-nowrap shadow-lg shadow-emerald-500/20 cursor-pointer"
          >
            Claim 1-Day Trial Pass
          </button>
        </div>
      </div>
    </section>
  );
};
