import React, { useState } from 'react';
import { Clock, Users, Sparkles, CheckCircle2, MessageCircle, Calendar } from 'lucide-react';
import { checkGymOpenStatus, buildWhatsAppLink } from '../utils/timeUtils';
import { BatchSlot } from '../types';

interface LiveScheduleProps {
  onSelectSlot: (slotName: string) => void;
}

export const LiveSchedule: React.FC<LiveScheduleProps> = ({ onSelectSlot }) => {
  const [activeTab, setActiveTab] = useState<'general' | 'women' | 'personal'>('general');
  const gymStatus = checkGymOpenStatus();

  const generalSlots: BatchSlot[] = [
    {
      id: 'gen-1',
      name: 'Early Bird Strength & Conditioning',
      timeRange: '6:00 AM – 9:00 AM',
      category: 'general',
      coach: 'Certified Strength Mentors on Floor',
      intensity: 'High',
      description: 'Ideal for professionals and early risers. Full barbell racks, squat cages, and cardio stations primed for morning power.',
      idealFor: 'Fat burn, morning focus, endurance conditioning',
    },
    {
      id: 'gen-2',
      name: 'Mid-Day Hypertrophy & Technique',
      timeRange: '9:00 AM – 12:00 PM',
      category: 'general',
      coach: 'Floor Coaches & Posture Check',
      intensity: 'Moderate',
      description: 'Lighter gym crowd with open access to all isolation machines, cable towers, and dumbbell banks.',
      idealFor: 'Hypertrophy, strict form refinement, students',
    },
    {
      id: 'gen-3',
      name: 'Afternoon Heavy Iron Protocol',
      timeRange: '1:00 PM – 4:00 PM',
      category: 'general',
      coach: 'Open Supervision & Spotters',
      intensity: 'High',
      description: 'Uncrowded workout flow. Perfect for deep compound lifts without waiting for popular machines.',
      idealFor: 'Powerlifters, athletes, shift workers',
    },
    {
      id: 'gen-4',
      name: 'Prime Evening High-Energy Rush',
      timeRange: '5:00 PM – 9:00 PM',
      category: 'general',
      coach: 'Senior Strength Coaches Active',
      intensity: 'High',
      description: 'Peak community atmosphere with high-drive acoustics, energetic training partners, and active coaches.',
      idealFor: 'Evening release, maximum intensity, strength gains',
    },
    {
      id: 'gen-5',
      name: 'Late Night Midnight Iron Sanctuary',
      timeRange: '9:00 PM – 12:00 AM (Midnight)',
      category: 'general',
      coach: 'Late-Duty Spotters Available',
      intensity: 'Moderate',
      description: 'Rare in Kondhwa! Train peacefully up to midnight. Clean, focused, and uninterrupted session.',
      idealFor: 'Late workers, night owls, dedicated lifters',
    },
  ];

  const womenSlots: BatchSlot[] = [
    {
      id: 'wom-1',
      name: 'Morning Women Exclusive Fitness Batch',
      timeRange: '10:30 AM – 12:30 PM',
      category: 'women',
      coach: 'Certified Female Fitness Coach',
      intensity: 'High',
      description: 'Gym floor is dedicated exclusively to women. Full privacy, female trainers present, focusing on functional resistance, core toning, and fat loss.',
      idealFor: 'Women seeking comfortable, private, guided morning workouts',
    },
    {
      id: 'wom-2',
      name: 'Afternoon Women Conditioning & Strength',
      timeRange: '3:30 PM – 5:00 PM',
      category: 'women',
      coach: 'Certified Female Fitness Coach',
      intensity: 'Moderate',
      description: 'Exclusive women-only batch focusing on full-body posture, glute/core stabilization, dumbbells, and cardio circuits in a supportive space.',
      idealFor: 'Homemakers, students, and working women needing afternoon slot',
    },
  ];

  const personalPrograms = [
    {
      id: 'pt-1',
      title: '60-Day Body Transformation Challenge',
      duration: '8 to 12 Weeks',
      focus: 'Fat Loss & Muscle Definition',
      features: [
        'Dedicated 1-on-1 personal trainer every session',
        'Custom Indian macro-calculated meal schedule',
        'Weekly caliper & body composition progress audits',
        'Direct WhatsApp coach accountability daily',
      ],
      tag: 'Most Popular',
    },
    {
      id: 'pt-2',
      title: 'Strength, Power & Hypertrophy Mentorship',
      duration: '12 Weeks',
      focus: 'Progressive Overload & Mass Gain',
      features: [
        'Biomechanical lift analysis (Deadlift, Squat, Bench, Press)',
        'Injury prevention & mobility optimization',
        'Pre & post workout nutrient timing guidance',
        'Targeted muscle hypertrophy protocols',
      ],
      tag: 'Athletic Performance',
    },
    {
      id: 'pt-3',
      title: 'Women’s 1-on-1 Female Coach Mentorship',
      duration: 'Custom Schedule',
      focus: 'Toning, Strength & Hormonal Wellness',
      features: [
        'Exclusive 1-on-1 guidance by certified female coach',
        'Core rehabilitation, posture correction & strength',
        'Personalized low-inflammation nutrition framework',
        'Flexible slot booking throughout the week',
      ],
      tag: 'Female Specialized',
    },
  ];

  return (
    <section id="schedule" className="py-20 sm:py-24 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
            <Calendar className="w-3.5 h-3.5" />
            <span>OPERATING SCHEDULE & BATCHES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight text-balance">
            Real-Time Hours & Daily Batch Schedule
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Hayat Fitness Gym operates Monday to Saturday from 6:00 AM to 12:00 AM Midnight. Sunday is reserved for comprehensive facility deep cleaning.
          </p>

          {/* Dynamic IST Status Notification Banner */}
          <div className="pt-2">
            <div
              className={`inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-4 py-2.5 rounded-xl border text-xs sm:text-sm ${
                gymStatus.isOpen
                  ? 'bg-emerald-950/40 border-emerald-800/80 text-emerald-300'
                  : 'bg-rose-950/40 border-rose-800/80 text-rose-300'
              }`}
            >
              <div className="flex items-center gap-2 font-semibold">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    gymStatus.isOpen ? 'bg-emerald-400 animate-ping' : 'bg-rose-500'
                  }`}
                />
                <span>Current Status: {gymStatus.statusBadge}</span>
              </div>
              <span className="hidden sm:inline text-slate-600" aria-hidden="true">|</span>
              <span className="text-slate-300">{gymStatus.nextEvent}</span>
              <span className="hidden sm:inline text-slate-600" aria-hidden="true">|</span>
              <span className="font-mono text-xs tabular-nums text-slate-400">
                {gymStatus.currentIstTimeStr} ({gymStatus.dayName})
              </span>
            </div>
          </div>
        </div>

        {/* Tab Selection Controls (Interactive filter buttons as per zero-pill rules) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-[#111827] border border-[#1F2937] rounded-xl gap-1">
            <button
              onClick={() => setActiveTab('general')}
              className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 cursor-pointer ${
                activeTab === 'general'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-[#1F2937]'
              }`}
            >
              General Strength Slots (6 AM – 12 AM)
            </button>
            <button
              onClick={() => setActiveTab('women')}
              className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'women'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-[#1F2937]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dedicated Women Batches</span>
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 cursor-pointer ${
                activeTab === 'personal'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-[#1F2937]'
              }`}
            >
              Personal Training & PT
            </button>
          </div>
        </div>

        {/* Tab 1 Content: General Co-ed Slots */}
        {activeTab === 'general' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalSlots.map((slot) => (
              <div
                key={slot.id}
                className="bg-[#111827] border border-[#1F2937] hover:border-slate-600 rounded-xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded">
                      {slot.timeRange}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Intensity: <strong className="text-slate-200">{slot.intensity}</strong>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug">
                    {slot.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {slot.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1F2937] space-y-3">
                  <div className="text-[11px] text-slate-400">
                    <span className="text-slate-500">Coach Support: </span>
                    <span className="text-slate-300 font-medium">{slot.coach}</span>
                  </div>

                  <button
                    onClick={() => onSelectSlot(slot.name)}
                    className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-slate-200 bg-[#0B0F19] hover:bg-emerald-500 hover:text-slate-950 border border-[#1F2937] hover:border-emerald-500 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Reserve Trial in This Slot</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2 Content: Dedicated Women Batches */}
        {activeTab === 'women' && (
          <div className="space-y-6">
            {/* Informational Banner */}
            <div className="bg-gradient-to-r from-emerald-950/30 to-indigo-950/30 border border-emerald-800/60 rounded-xl p-5 sm:p-6 text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Complete Privacy & Dedicated Female Coaches</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                During these dedicated slots, the gym is exclusively open for women. Certified female trainers are present on the floor to guide workouts, ensure proper technique, and design custom fat loss & strength regimens in a welcoming, private setting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {womenSlots.map((slot) => (
                <div
                  key={slot.id}
                  className="bg-[#111827] border border-[#1F2937] hover:border-emerald-500/50 rounded-xl p-6 flex flex-col justify-between transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-700/80 px-3 py-1 rounded">
                        {slot.timeRange}
                      </span>
                      <span className="text-xs text-emerald-400 font-semibold">
                        Exclusive Women Floor
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white">
                      {slot.name}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {slot.description}
                    </p>

                    <div className="p-3 bg-[#0B0F19] rounded-lg border border-[#1F2937] space-y-1.5 text-xs text-slate-300">
                      <div className="font-semibold text-slate-200">Session Features:</div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Certified Female Fitness Coach on Floor</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Functional circuits, glute/core toning & HIIT</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Private changing area & lockers</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#1F2937] space-y-2">
                    <button
                      onClick={() => onSelectSlot(slot.name)}
                      className="w-full py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer"
                    >
                      Book Women Batch Trial Pass
                    </button>
                    <a
                      href={buildWhatsAppLink(
                        `Hi Hayat Fitness Gym, I would like to inquire about the Women Exclusive Batch (${slot.timeRange}).`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-[#0B0F19] border border-[#1F2937] rounded-lg text-center flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp Female Coach Coordinator</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3 Content: Personal Training */}
        {activeTab === 'personal' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalPrograms.map((prog) => (
              <div
                key={prog.id}
                className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      {prog.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {prog.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {prog.title}
                  </h3>

                  <div className="text-xs font-medium text-slate-400">
                    Focus: <span className="text-slate-200">{prog.focus}</span>
                  </div>

                  <ul className="space-y-2 pt-2">
                    {prog.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1F2937]">
                  <a
                    href={buildWhatsAppLink(
                      `Hi Hayat Fitness Gym, I want to consult a personal trainer regarding the "${prog.title}" program.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire for PT Fee & Slots</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
