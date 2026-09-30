import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Activity, Flame, Heart, Target } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/timeUtils';

export const BmiCalculator: React.FC = () => {
  const [heightCm, setHeightCm] = useState<number>(172);
  const [weightKg, setWeightKg] = useState<number>(74);
  const [age, setAge] = useState<number>(26);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activityFactor, setActivityFactor] = useState<number>(1.55); // moderate exercise 3-5 days/week

  const calculation = useMemo(() => {
    const heightM = heightCm / 100;
    const bmiVal = Number((weightKg / (heightM * heightM)).toFixed(1));

    let category = 'Normal Weight';
    let categoryColor = 'text-emerald-400';
    let recommendation = 'Great baseline! Focus on progressive hypertrophy and steady strength building.';

    if (bmiVal < 18.5) {
      category = 'Underweight';
      categoryColor = 'text-sky-400';
      recommendation = 'Focus on caloric surplus with nutrient-dense meals and compound resistance training to build lean muscle mass.';
    } else if (bmiVal >= 18.5 && bmiVal <= 24.9) {
      category = 'Normal Weight';
      categoryColor = 'text-emerald-400';
      recommendation = 'Optimal body composition. Aim for progressive overload, conditioning, and lean muscle definition.';
    } else if (bmiVal >= 25 && bmiVal <= 29.9) {
      category = 'Overweight';
      categoryColor = 'text-amber-400';
      recommendation = 'Focus on sustainable calorie deficit, high-intensity intervals, and heavy resistance training to preserve lean mass.';
    } else {
      category = 'Obese Range';
      categoryColor = 'text-rose-400';
      recommendation = 'Our coaches recommend a supervised combination of low-impact cardio, strength training, and guided nutritional adjustments.';
    }

    // Mifflin-St Jeor BMR formula
    let bmr = 10 * weightKg + 6.25 * heightCm - 5 * age;
    if (gender === 'male') {
      bmr += 5;
    } else {
      bmr -= 161;
    }

    const tdee = Math.round(bmr * activityFactor);
    const targetProtein = Math.round(weightKg * (gender === 'male' ? 1.8 : 1.6));

    return {
      bmiVal,
      category,
      categoryColor,
      recommendation,
      bmr: Math.round(bmr),
      tdee,
      targetProtein,
    };
  }, [heightCm, weightKg, age, gender, activityFactor]);

  const whatsappProtocolUrl = buildWhatsAppLink(
    `Hi Hayat Fitness Gym, I used your website calculator. My stats: Height: ${heightCm}cm, Weight: ${weightKg}kg, Age: ${age}, Gender: ${gender}, Calculated BMI: ${calculation.bmiVal} (${calculation.category}), TDEE: ${calculation.tdee} kcal, Target Protein: ${calculation.targetProtein}g. I would like a personalized diet and training protocol from your coaches in Kondhwa.`
  );

  return (
    <section id="calculator" className="py-20 sm:py-24 bg-[#0B0F19] relative border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE FITNESS TOOL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight text-balance">
            Body Composition & Caloric Target Calculator
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Calculate your accurate Body Mass Index (BMI), Maintenance Calories (TDEE), and daily protein target to plan your transformation at Hayat Fitness Gym.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 bg-[#111827] border border-[#1F2937] rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-400" />
              <span>Input Your Biometrics</span>
            </h3>

            {/* Gender Toggle */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Gender
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`py-2.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                    gender === 'male'
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500'
                      : 'bg-[#0B0F19] text-slate-400 border-[#1F2937] hover:border-slate-600'
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`py-2.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                    gender === 'female'
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500'
                      : 'bg-[#0B0F19] text-slate-400 border-[#1F2937] hover:border-slate-600'
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Height Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-300 uppercase tracking-wider">Height</span>
                <span className="font-mono font-bold text-emerald-400 tabular-nums text-sm">
                  {heightCm} cm ({Math.floor(heightCm / 30.48)}&apos;{Math.round((heightCm % 30.48) / 2.54)}&quot;)
                </span>
              </div>
              <input
                type="range"
                min="120"
                max="220"
                value={heightCm}
                onChange={(e) => setHeightCm(Number(e.target.value))}
                className="w-full h-2 bg-[#0B0F19] rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>120 cm</span>
                <span>170 cm</span>
                <span>220 cm</span>
              </div>
            </div>

            {/* Weight Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-300 uppercase tracking-wider">Weight</span>
                <span className="font-mono font-bold text-emerald-400 tabular-nums text-sm">
                  {weightKg} kg ({(weightKg * 2.20462).toFixed(0)} lbs)
                </span>
              </div>
              <input
                type="range"
                min="40"
                max="160"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full h-2 bg-[#0B0F19] rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>40 kg</span>
                <span>100 kg</span>
                <span>160 kg</span>
              </div>
            </div>

            {/* Age & Activity Level Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Age (Years)
                </label>
                <input
                  type="number"
                  min="12"
                  max="90"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-[#0B0F19] border border-[#1F2937] rounded-lg text-white font-mono focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Activity Frequency
                </label>
                <select
                  value={activityFactor}
                  onChange={(e) => setActivityFactor(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-[#0B0F19] border border-[#1F2937] rounded-lg text-white text-xs focus:outline-none focus:border-emerald-400"
                >
                  <option value={1.2}>Sedentary (Desk work, little exercise)</option>
                  <option value={1.375}>Lightly Active (1-3 gym workouts/wk)</option>
                  <option value={1.55}>Moderately Active (3-5 workouts/wk)</option>
                  <option value={1.725}>Very Active (6-7 intense sessions/wk)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Results & WhatsApp Route */}
          <div className="lg:col-span-5 bg-[#111827] border border-[#1F2937] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#1F2937] pb-4">
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Your Body Analysis
                </span>
                <span className={`text-xs font-bold font-mono px-2.5 py-1 rounded bg-[#0B0F19] border border-[#1F2937] ${calculation.categoryColor}`}>
                  {calculation.category}
                </span>
              </div>

              {/* Primary Gauge Metric */}
              <div className="text-center py-4 bg-[#0B0F19] rounded-xl border border-[#1F2937]/80">
                <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                  Body Mass Index
                </div>
                <div className="text-5xl font-black text-white font-mono tabular-nums">
                  {calculation.bmiVal}
                </div>
                <div className={`text-sm font-semibold mt-1 ${calculation.categoryColor}`}>
                  {calculation.category}
                </div>
              </div>

              {/* Breakdown Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 bg-[#0B0F19] rounded-xl border border-[#1F2937]">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    <span>Daily TDEE</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-white tabular-nums">
                    {calculation.tdee} <span className="text-xs text-slate-400 font-normal">kcal</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Maintenance burn</div>
                </div>

                <div className="p-3.5 bg-[#0B0F19] rounded-xl border border-[#1F2937]">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Target className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Target Protein</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-white tabular-nums">
                    {calculation.targetProtein} <span className="text-xs text-slate-400 font-normal">grams</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Daily synthesis</div>
                </div>
              </div>

              {/* Coach Advice */}
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <div className="font-semibold text-slate-200 mb-1 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-400" />
                  <span>Coach Guidance:</span>
                </div>
                {calculation.recommendation}
              </div>
            </div>

            {/* Direct CTA to Hayat Fitness WhatsApp */}
            <div className="pt-2">
              <a
                href={whatsappProtocolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <span>Get Certified Workout & Diet Protocol</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                Sends your calculated biometrics directly to Hayat Fitness trainers via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
