/**
 * Time utility for Hayat Fitness Gym (Kondhwa, Pune)
 * Operating Hours:
 * - Monday to Saturday: 6:00 AM – 12:00 AM (Midnight)
 * - Sunday: Closed for deep sanitization & maintenance
 */

export interface GymStatus {
  isOpen: boolean;
  statusBadge: string;
  subText: string;
  nextEvent: string;
  currentIstTimeStr: string;
  dayName: string;
}

export function getIndianStandardTime(): Date {
  const now = new Date();
  // Compute UTC time
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  // IST is UTC + 5 hours 30 mins
  return new Date(utc + 3600000 * 5.5);
}

export function checkGymOpenStatus(): GymStatus {
  const istDate = getIndianStandardTime();
  const day = istDate.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
  const hours = istDate.getHours();
  const minutes = istDate.getMinutes();
  const totalMinutes = hours * 60 + minutes;

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = dayNames[day];

  const timeFormatter = new Intl.DateTimeFormat('en-IN', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  const currentIstTimeStr = `${timeFormatter.format(istDate)} IST`;

  // Sunday is closed
  if (day === 0) {
    return {
      isOpen: false,
      statusBadge: 'Closed Today (Sunday)',
      subText: 'Sanitization & Deep Equipment Maintenance',
      nextEvent: 'Opens Monday at 6:00 AM',
      currentIstTimeStr,
      dayName,
    };
  }

  // Monday to Saturday: 6:00 AM (360 mins) to 24:00 (1440 mins)
  const openMinutes = 6 * 60; // 360
  const closeMinutes = 24 * 60; // 1440

  if (totalMinutes >= openMinutes && totalMinutes < closeMinutes) {
    const minutesLeft = closeMinutes - totalMinutes;
    const hoursLeft = Math.floor(minutesLeft / 60);

    return {
      isOpen: true,
      statusBadge: 'Open Now',
      subText: 'Closes at 12:00 AM Midnight',
      nextEvent: hoursLeft > 0 ? `${hoursLeft}h ${minutesLeft % 60}m remaining today` : `${minutesLeft}m remaining`,
      currentIstTimeStr,
      dayName,
    };
  }

  // Before 6 AM on Mon-Sat
  return {
    isOpen: false,
    statusBadge: 'Closed Now',
    subText: 'Opens at 6:00 AM',
    nextEvent: `Opens today at 6:00 AM (${Math.floor((openMinutes - totalMinutes) / 60)}h ${ (openMinutes - totalMinutes) % 60}m)`,
    currentIstTimeStr,
    dayName,
  };
}

export const GYM_CONTACT = {
  name: 'Hayat Fitness Gym',
  phoneDisplay: '+91 86682 00042',
  phoneRaw: '+918668200042',
  phoneClean: '918668200042',
  address: '1st Floor, Riza Corner, Chetna Garden, 50/65, Lane Number 9, Bhagyoday Nagar, Mitha Nagar, Kondhwa, Pune, Maharashtra 411048',
  shortAddress: 'Lane 9, Bhagyoday Nagar, Kondhwa, Pune',
  instagram: '@hayat.fitness__',
  instagramUrl: 'https://www.instagram.com/hayat.fitness__/',
  googleMapsLink: 'https://maps.google.com/?q=1st+Floor,+Riza+Corner,+Chetna+Garden,+Lane+9,+Bhagyoday+Nagar,+Kondhwa,+Pune+411048',
  whatsappBaseUrl: 'https://wa.me/918668200042',
  rating: 4.7,
  reviewsCount: 360,
};

export function buildWhatsAppLink(message: string): string {
  return `${GYM_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}
