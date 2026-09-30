import React from 'react';
import { MessageCircle, Phone, Dumbbell } from 'lucide-react';
import { GYM_CONTACT, buildWhatsAppLink } from '../utils/timeUtils';

interface FloatingActionsProps {
  onOpenTrialModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenTrialModal }) => {
  const quickWhatsAppUrl = buildWhatsAppLink(
    'Hi Hayat Fitness Gym, I want to inquire about membership packages and trial pass.'
  );

  return (
    <>
      {/* Floating Bottom Quick Bar on Mobile (Within the 15% mobile sticky budget) */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden z-40 bg-[#0B0F19]/95 backdrop-blur-md border-t border-[#1F2937] p-2.5 px-4 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${GYM_CONTACT.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#111827] border border-[#1F2937] rounded-lg text-xs font-semibold text-slate-200"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-400" />
          <span>Call</span>
        </a>

        <a
          href={quickWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#111827] border border-[#1F2937] rounded-lg text-xs font-semibold text-slate-200"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenTrialModal}
          className="flex-1.5 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-400 rounded-lg text-xs font-bold text-slate-950 shadow-md shadow-emerald-500/20 whitespace-nowrap cursor-pointer"
        >
          <Dumbbell className="w-3.5 h-3.5" />
          <span>Free Pass</span>
        </button>
      </div>

      {/* Floating WhatsApp Bubble for Desktop */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href={quickWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageCircle className="w-7 h-7" />
          
          {/* Tooltip */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#111827] text-white text-xs font-semibold border border-[#1F2937] shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
            Chat with Hayat Fitness Front Desk
          </span>
        </a>
      </div>
    </>
  );
};
