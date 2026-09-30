import { describe, it, expect } from 'vitest';
import { checkGymOpenStatus, buildWhatsAppLink, GYM_CONTACT } from '../src/utils/timeUtils';

describe('Gym Time Utilities & Business Data', () => {
  it('should have authentic business parameters matching Kondhwa branch', () => {
    expect(GYM_CONTACT.name).toBe('Hayat Fitness Gym');
    expect(GYM_CONTACT.phoneRaw).toBe('+918668200042');
    expect(GYM_CONTACT.address).toContain('Kondhwa, Pune, Maharashtra 411048');
    expect(GYM_CONTACT.instagram).toBe('@hayat.fitness__');
    expect(GYM_CONTACT.rating).toBe(4.7);
  });

  it('should correctly format prefilled WhatsApp message links', () => {
    const text = 'Hi Hayat Fitness Gym, I want to inquire about membership';
    const link = buildWhatsAppLink(text);
    expect(link).toContain('https://wa.me/918668200042?text=');
    expect(link).toContain(encodeURIComponent(text));
  });

  it('should return a valid GymStatus object with IST time string', () => {
    const status = checkGymOpenStatus();
    expect(status).toHaveProperty('isOpen');
    expect(status).toHaveProperty('statusBadge');
    expect(status).toHaveProperty('subText');
    expect(status).toHaveProperty('currentIstTimeStr');
    expect(status.currentIstTimeStr).toContain('IST');
  });
});
