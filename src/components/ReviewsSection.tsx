import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquare, ExternalLink } from 'lucide-react';
import { ReviewItem } from '../types';
import { GYM_CONTACT } from '../utils/timeUtils';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'trainers' | 'equipment' | 'women'>('all');

  const reviews: ReviewItem[] = [
    {
      id: 'rev-1',
      author: 'Sameer Shaikh',
      rating: 5,
      timeAgo: '2 weeks ago',
      comment: 'Affordable and 100% worth it! The equipment is brand new and very well maintained. Trainers are always on the floor giving genuine guidance without forcing personal training packages. Definitely the best gym in Kondhwa.',
      category: 'equipment',
      verified: true,
      avatarInitials: 'SS',
      badge: 'Local Resident · Member 8 Months',
    },
    {
      id: 'rev-2',
      author: 'Fatima Sayyed',
      rating: 5,
      timeAgo: '1 month ago',
      comment: 'The dedicated women batch is amazing and completely private. Having female certified trainers makes a huge difference in comfort and correcting posture. Extremely clean changing rooms and hygienic workout atmosphere.',
      category: 'women',
      verified: true,
      avatarInitials: 'FS',
      badge: 'Women Batch Member',
    },
    {
      id: 'rev-3',
      author: 'Rohan Deshmukh',
      rating: 5,
      timeAgo: '3 weeks ago',
      comment: 'Being an IT professional, working shifts made it impossible to hit regular gyms. Hayat Fitness being open till 12:00 AM Midnight is a game-changer! I come at 10 PM, get full access to the squat rack and heavy dumbbells with zero crowd.',
      category: 'equipment',
      verified: true,
      avatarInitials: 'RD',
      badge: 'Late Night Lifter',
    },
    {
      id: 'rev-4',
      author: 'Arbaz Inamdar',
      rating: 5,
      timeAgo: '2 months ago',
      comment: 'Transformative experience. Dropped 8 kg in 3 months following the coach advice. They help you with both biomechanics and Indian diet adjustments. Great surround sound music system that keeps you motivated throughout.',
      category: 'trainers',
      verified: true,
      avatarInitials: 'AI',
      badge: 'Transformation Achiever',
    },
    {
      id: 'rev-5',
      author: 'Zeenat Khan',
      rating: 5,
      timeAgo: '1 month ago',
      comment: 'Very respectful and safe environment for women. Both the morning and afternoon batches have comfortable timing. Coaches pay attention to each exercise and guide with dumbbells and core workouts patiently.',
      category: 'women',
      verified: true,
      avatarInitials: 'ZK',
      badge: 'Verified Member',
    },
    {
      id: 'rev-6',
      author: 'Aditya Kulkarni',
      rating: 5,
      timeAgo: '4 months ago',
      comment: 'Solid variety of free weights and heavy dumbbells up to 40+ kg. The cables and leg press are smooth and commercial grade. Payment via UPI is super easy. Highly recommended for anyone in Kondhwa, Mitha Nagar, or Bhagyoday Nagar.',
      category: 'trainers',
      verified: true,
      avatarInitials: 'AK',
      badge: 'Verified Google Reviewer',
    },
  ];

  const filteredReviews = reviews.filter((r) => {
    if (filter === 'all') return true;
    return r.category === filter;
  });

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-[#0B0F19] relative border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>VERIFIED ATHLETE REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight text-balance">
            Trusted by 360+ Athletes in Kondhwa
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Read real, unedited feedback from members training daily at Hayat Fitness Gym, Kondhwa, Pune.
          </p>
        </div>

        {/* Big Credibility Rating Banner */}
        <div className="max-w-4xl mx-auto bg-[#111827] border border-[#1F2937] rounded-2xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-center sm:text-left">
            <div className="text-5xl font-black text-white font-mono tabular-nums">
              4.7
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-300 font-medium">
                Overall Google Maps Rating (360+ Verified Local Reviews)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={GYM_CONTACT.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white bg-[#0B0F19] hover:bg-[#1F2937] border border-[#1F2937] rounded-xl transition-colors"
            >
              <span>View All on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
            </a>
          </div>
        </div>

        {/* Filter Controls (Buttons as per design constitution) */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 bg-[#111827] border border-[#1F2937] rounded-xl gap-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white hover:bg-[#1F2937]'
              }`}
            >
              All Reviews ({reviews.length})
            </button>
            <button
              onClick={() => setFilter('equipment')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'equipment'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white hover:bg-[#1F2937]'
              }`}
            >
              Equipment & Timings
            </button>
            <button
              onClick={() => setFilter('women')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'women'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white hover:bg-[#1F2937]'
              }`}
            >
              Women Batches
            </button>
            <button
              onClick={() => setFilter('trainers')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'trainers'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white hover:bg-[#1F2937]'
              }`}
            >
              Trainers & Results
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#111827] border border-[#1F2937] rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-slate-600 transition-colors"
            >
              <div className="space-y-3">
                {/* Author row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center font-mono">
                      {review.avatarInitials}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{review.author}</span>
                        {review.verified && (
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {review.badge || 'Verified Member'}
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] text-slate-400 font-mono">
                    {review.timeAgo}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment quote */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Footer source tag */}
              <div className="pt-3 border-t border-[#1F2937] flex items-center justify-between text-[11px] text-slate-400">
                <span>Google Maps Verified</span>
                <span className="text-emerald-400">Pune Athlete</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
