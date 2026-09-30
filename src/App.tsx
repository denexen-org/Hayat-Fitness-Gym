/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FacilitiesGrid } from './components/FacilitiesGrid';
import { LiveSchedule } from './components/LiveSchedule';
import { BmiCalculator } from './components/BmiCalculator';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { LeadCaptureModal } from './components/LeadCaptureModal';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedSlotForModal, setSelectedSlotForModal] = useState<string | undefined>(undefined);

  const handleOpenTrialModal = (slotName?: string) => {
    setSelectedSlotForModal(slotName);
    setTrialModalOpen(true);
  };

  const handleCloseTrialModal = () => {
    setTrialModalOpen(false);
    setSelectedSlotForModal(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#F9FAFB] flex flex-col selection:bg-emerald-500 selection:text-slate-950 pb-16 sm:pb-0">
      {/* Sticky Glass Top Header */}
      <Header onOpenTrialModal={() => handleOpenTrialModal()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* Facilities & Equipment Bento Grid */}
        <FacilitiesGrid onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* Dynamic IST Live Hours & Interactive Batch Schedule Table */}
        <LiveSchedule onSelectSlot={(slotName) => handleOpenTrialModal(slotName)} />

        {/* Interactive BMI & TDEE Caloric Calculator */}
        <BmiCalculator />

        {/* Verified Google Reviews & Rating Showcase */}
        <ReviewsSection />

        {/* Interactive Google Maps & Direct Routing Section */}
        <LocationSection />
      </main>

      {/* Conversion Floating Actions */}
      <FloatingActions onOpenTrialModal={() => handleOpenTrialModal()} />

      {/* Quiet Authoritative Footer */}
      <Footer />

      {/* 1-Day Trial Pass Modal */}
      <LeadCaptureModal
        isOpen={trialModalOpen}
        onClose={handleCloseTrialModal}
        preselectedSlot={selectedSlotForModal}
      />
    </div>
  );
}
