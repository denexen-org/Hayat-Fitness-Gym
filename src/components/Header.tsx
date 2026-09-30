import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { checkGymOpenStatus, GymStatus, GYM_CONTACT } from '../utils/timeUtils';

interface HeaderProps {
  onOpenTrialModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTrialModal }) => {
  const [gymStatus, setGymStatus] = useState<GymStatus>(checkGymOpenStatus());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Check status every minute to keep IST status live
    const interval = setInterval(() => {
      setGymStatus(checkGymOpenStatus());
    }, 60000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: 'Facilities', href: '#facilities' },
    { label: 'Batches & Timings', href: '#schedule' },
    { label: 'BMI Tool', href: '#calculator' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-[#1F2937] shadow-xl py-3'
          : 'bg-[#0B0F19]/60 backdrop-blur-sm border-b border-[#1F2937]/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Clean Brand Wordmark & Live Status Pulse */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-xl sm:text-2xl font-black tracking-wider text-white hover:text-emerald-400 transition-colors uppercase font-display"
            >
              HAYAT <span className="text-emerald-400 font-extrabold">FITNESS</span>
            </a>
            
            {/* Live Operational Status Dot Indicator */}
            <div
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                gymStatus.isOpen
                  ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/80'
                  : 'bg-rose-950/60 text-rose-300 border-rose-800/80'
              }`}
              title={`${gymStatus.subText} (${gymStatus.currentIstTimeStr})`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  gymStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-rose-500'
                }`}
              />
              <span className="tabular-nums font-mono text-[11px]">
                {gymStatus.isOpen ? 'Open Now · Till 12 AM' : 'Closed Today'}
              </span>
            </div>
          </div>

          {/* Zone 2: Navigation Links (Clean text links with subtle hover) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors duration-150 relative py-1 hover:border-b-2 hover:border-emerald-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action CTA & Direct Call */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${GYM_CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-[#111827] hover:bg-[#1F2937] border border-[#1F2937] rounded-lg transition-colors whitespace-nowrap"
              aria-label="Call Hayat Fitness"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{GYM_CONTACT.phoneDisplay}</span>
            </a>

            <button
              onClick={onOpenTrialModal}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all duration-150 rounded-lg shadow-md shadow-emerald-500/20 whitespace-nowrap cursor-pointer"
            >
              Book Free Trial Pass
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenTrialModal}
              className="px-2.5 py-1.5 text-xs font-bold text-slate-950 bg-emerald-400 rounded-md whitespace-nowrap"
            >
              Free Pass
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-md"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0B0F19]/95 backdrop-blur-xl border-b border-[#1F2937] px-5 py-6 space-y-4">
          {/* Status info */}
          <div className="flex items-center justify-between py-2 border-b border-[#1F2937]">
            <span className="text-xs text-slate-400">Gym Operational Status</span>
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                gymStatus.isOpen ? 'text-emerald-400' : 'text-rose-400'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  gymStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-rose-500'
                }`}
              />
              {gymStatus.statusBadge} ({gymStatus.currentIstTimeStr})
            </span>
          </div>

          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-emerald-400 py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#1F2937] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-lg shadow-emerald-500/20"
            >
              Claim 1-Day Free Pass
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${GYM_CONTACT.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-200 bg-[#111827] border border-[#1F2937] rounded-lg hover:border-slate-600"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Now</span>
              </a>
              <a
                href={GYM_CONTACT.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-200 bg-[#111827] border border-[#1F2937] rounded-lg hover:border-slate-600"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
