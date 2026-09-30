export interface BatchSlot {
  id: string;
  name: string;
  timeRange: string;
  category: 'general' | 'women' | 'personal';
  coach: string;
  intensity: 'High' | 'Moderate' | 'Custom';
  description: string;
  idealFor: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  category: 'all' | 'trainers' | 'equipment' | 'women';
  verified: boolean;
  avatarInitials: string;
  badge?: string;
}

export interface AmenityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlight: string;
  tag: string;
}

export interface BmiState {
  heightCm: number;
  weightKg: number;
  age: number;
  gender: 'male' | 'female';
  activityLevel: number; // 1.2 to 1.9
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  goal: string;
  slot: string;
  notes?: string;
}
