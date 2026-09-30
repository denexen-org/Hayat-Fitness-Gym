import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, ShieldCheck, ArrowRight, Dumbbell } from 'lucide-react';
import { LeadFormData } from '../types';
import { GYM_CONTACT, buildWhatsAppLink } from '../utils/timeUtils';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSlot?: string;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  onClose,
  preselectedSlot,
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    goal: 'Muscle Building & Strength',
    slot: preselectedSlot || 'Prime Evening (5:00 PM – 9:00 PM)',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedSlot) {
      setFormData((prev) => ({ ...prev, slot: preselectedSlot }));
    }
  }, [preselectedSlot]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }
    // Clean phone numbers: remove spaces, +91, dashes
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);

    // Format WhatsApp message
    const msg = `*Hayat Fitness Gym - 1-Day Trial Pass Request*\n\n*Name:* ${formData.fullName.trim()}\n*Phone:* ${formData.phone.trim()}\n*Workout Goal:* ${formData.goal}\n*Preferred Slot:* ${formData.slot}\n*Location:* Kondhwa, Pune\n${formData.notes ? `*Notes:* ${formData.notes}\n` : ''}\nI would like to book my free workout pass and tour the gym floor.`;

    const whatsappUrl = buildWhatsAppLink(msg);

    // Give visual confirmation feedback before opening WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#111827] border border-[#1F2937] rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-left"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-[#1F2937] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                <Dumbbell className="w-4 h-4" />
                <span>Zero Risk Trial Pass</span>
              </div>
              <h3 className="text-2xl font-black text-white font-display">
                Claim Your 1-Day Free Workout Pass
              </h3>
              <p className="text-xs text-slate-400">
                Experience Hayat Fitness Gym in Kondhwa with full access to machines, free weights, and trainer assistance.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: '' });
                  }}
                  className={`w-full px-4 py-2.5 bg-[#0B0F19] border ${
                    errors.fullName ? 'border-rose-500' : 'border-[#1F2937]'
                  } rounded-xl text-white text-sm focus:outline-none focus:border-emerald-400`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* WhatsApp Mobile Number */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  WhatsApp Mobile Number *
                </label>
                <div className="flex items-center">
                  <span className="px-3 py-2.5 bg-[#0B0F19] border border-r-0 border-[#1F2937] rounded-l-xl text-xs font-mono text-slate-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    className={`w-full px-4 py-2.5 bg-[#0B0F19] border ${
                      errors.phone ? 'border-rose-500' : 'border-[#1F2937]'
                    } rounded-r-xl text-white text-sm focus:outline-none focus:border-emerald-400 font-mono`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Preferred Goal */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Primary Fitness Goal
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#0B0F19] border border-[#1F2937] rounded-xl text-white text-xs focus:outline-none focus:border-emerald-400"
                >
                  <option value="Fat Loss & Body Toning">Fat Loss & Body Toning</option>
                  <option value="Muscle Building & Strength">Muscle Building & Hypertrophy</option>
                  <option value="General Health & Conditioning">General Health & Conditioning</option>
                  <option value="Women Dedicated Transformation">Women Dedicated Transformation</option>
                  <option value="Personal 1-on-1 Coaching">Personal 1-on-1 Coaching</option>
                </select>
              </div>

              {/* Preferred Slot */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.slot}
                  onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#0B0F19] border border-[#1F2937] rounded-xl text-white text-xs focus:outline-none focus:border-emerald-400"
                >
                  <option value="Early Morning (6:00 AM – 9:00 AM)">Early Morning (6:00 AM – 9:00 AM)</option>
                  <option value="Mid-Day (9:00 AM – 12:00 PM)">Mid-Day (9:00 AM – 12:00 PM)</option>
                  <option value="Women Exclusive Morning (10:30 AM – 12:30 PM)">
                    Women Exclusive Morning (10:30 AM – 12:30 PM)
                  </option>
                  <option value="Afternoon Open (1:00 PM – 4:00 PM)">Afternoon Open (1:00 PM – 4:00 PM)</option>
                  <option value="Women Exclusive Afternoon (3:30 PM – 5:00 PM)">
                    Women Exclusive Afternoon (3:30 PM – 5:00 PM)
                  </option>
                  <option value="Prime Evening (5:00 PM – 9:00 PM)">Prime Evening (5:00 PM – 9:00 PM)</option>
                  <option value="Late Night Midnight (9:00 PM – 12:00 AM)">
                    Late Night Midnight (9:00 PM – 12:00 AM)
                  </option>
                </select>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirm Free Pass via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero spam · Instant pass sent to your WhatsApp</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white">
              Trial Pass Reserved!
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              We have pre-filled your trial pass details for WhatsApp. If WhatsApp did not open automatically, tap the button below.
            </p>

            <div className="p-3 bg-[#0B0F19] rounded-xl border border-[#1F2937] text-xs text-slate-300 space-y-1 max-w-xs mx-auto text-left">
              <div><strong>Name:</strong> {formData.fullName}</div>
              <div><strong>Slot:</strong> {formData.slot}</div>
              <div><strong>Goal:</strong> {formData.goal}</div>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={buildWhatsAppLink(
                  `*Hayat Fitness Gym - Trial Pass Confirmation*\nName: ${formData.fullName}\nPhone: ${formData.phone}\nSlot: ${formData.slot}\nGoal: ${formData.goal}`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Chat Directly</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Done / Back to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
