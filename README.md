# Hayat Fitness Gym — Official Web Application

Production-grade, mobile-first single page progressive web application for **Hayat Fitness Gym**, the premier strength and conditioning center located in Kondhwa, Pune.

Designed with dark athletic tech aesthetics, real-time Indian Standard Time (IST) operational status tracking, an interactive batch schedule selector, a client-side BMI/TDEE calculator, verified 4.7★ Google reviews showcase, Google Maps routing, and automated zero-drop lead generation routed directly to WhatsApp (+91 86682 00042).

---

## 1. Verified Business Ground Truth

| Parameter | Official Value |
| :--- | :--- |
| **Facility Name** | Hayat Fitness Gym |
| **Headquarters Address** | 1st Floor, Riza Corner, Chetna Garden, 50/65, Lane Number 9, Bhagyoday Nagar, Mitha Nagar, Kondhwa, Pune, Maharashtra 411048 |
| **Direct Contact** | +91 86682 00042 |
| **WhatsApp Lead Desk** | [https://wa.me/918668200042](https://wa.me/918668200042) |
| **Operating Hours** | **Monday to Saturday:** 6:00 AM – 12:00 AM (Midnight)<br>**Sunday:** Closed (Sanitization & Deep Maintenance) |
| **Instagram Handle** | [@hayat.fitness__](https://www.instagram.com/hayat.fitness__/) |
| **Reputation** | 4.7★ Google Rating across 360+ Verified Local Pune Athletes |
| **Payment Hub** | UPI (GPay, PhonePe, Paytm, BHIM) & Contactless NFC Mobile Tap Pay |

---

## 2. Architectural Highlights & Features

- **Real-Time IST Time Engine**: Client-side timezone-accurate operational badge calculating live hours against UTC+5:30. Displays dynamic status ("Open Now · Closes at 12:00 AM", "Closed Today (Sunday)", or "Opens at 6:00 AM").
- **Batch Schedule Switcher**:
  - *General Strength Slots*: 5 daily time blocks covering 6:00 AM to 12:00 AM Midnight.
  - *Dedicated Women-Only Batches*: Morning (10:30 AM – 12:30 PM) & Afternoon (3:30 PM – 5:00 PM) with private floor access and certified female coaches.
  - *Personal Training Programs*: 60-Day Body Recomposition, Powerlifting Mechanics, and 1-on-1 Female Mentorship.
- **Interactive Biometric Calculator**: Calculates BMI, category classification, Basal Metabolic Rate (Mifflin-St Jeor), daily maintenance calories (TDEE), and daily protein target. Generates a one-tap pre-filled WhatsApp diet inquiry message.
- **Asymmetric Bento Grid Facilities**: Details heavy free weights up to 40+ kg, isolation machinery, cardio zone, female conditioning, surround sound acoustics, and digital payment infrastructure.
- **SEO & Structured Data**: Validated Schema.org `ExerciseGym` JSON-LD schema with complete postal address, geo-coordinates, rating metrics, and social profiles.
- **Automated Lead Capture**: Validates input biometrics and time preferences, providing instant confirmation and dispatching formatted inquiries to WhatsApp.

---

## 3. Technology Stack

- **Framework**: React 19 + TypeScript (Strict typing)
- **Styling**: Tailwind CSS v4 with custom dark athletic tokens
- **Icons**: Lucide-React
- **Bundler & Dev Server**: Vite 6+
- **Unit Testing**: Vitest
- **E2E Testing**: Playwright
- **CI/CD Pipeline**: GitHub Actions (`.github/workflows/ci.yml`)

---

## 4. Getting Started & Installation

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Local Development Setup

```bash
# 1. Clone repository
git clone https://github.com/your-org/hayat-fitness.git
cd hayat-fitness

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env

# 4. Start local development server (runs on port 3000)
npm run dev
```

Open `http://localhost:3000` to view the application.

---

## 5. Environment Variables Configuration

Copy `.env.example` to `.env` in the project root:

```env
# APP_URL: Domain where the application is deployed (for canonical SEO and OpenGraph cards)
APP_URL="https://hayatfitness.in"

# GEMINI_API_KEY (Optional for future server-side AI integrations)
GEMINI_API_KEY=""
```

---

## 6. Testing Strategy

### Unit & Integration Testing (Vitest)
Tests verify business data integrity, IST timezone calculations, formula algorithms (BMI & Mifflin-St Jeor), and URL encoding for WhatsApp leads.

```bash
# Run all unit tests
npm run test:unit

# Run unit tests in watch mode
npm run test:watch
```

### End-to-End Testing (Playwright)
Validates core critical user conversion paths (header navigation, modal dialogs, schedule tabs, calculator inputs, and external WhatsApp links).

```bash
# Run Playwright test suite
npx playwright test

# Run with interactive UI mode
npx playwright test --ui
```

---

## 7. Deployment Guide (Vercel & Netlify)

### Deploying to Vercel
1. Push repository to GitHub or GitLab.
2. In the Vercel Dashboard, select **Add New Project** and import the repository.
3. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Set environment variables (`APP_URL`) under **Settings > Environment Variables**.
5. Deploy.

---

## 8. Git Workflow, Conventional Commits & Semantic Versioning

This project adheres to **Conventional Commits 1.0.0** and **Semantic Versioning (SemVer 2.0.0)**.

### Commit Format
```
<type>(<scope>): <short description>

[optional body]
[optional footer(s)]
```

### Allowed Types:
- `feat`: A new feature (corresponds to SemVer `MINOR`)
- `fix`: A bug fix (corresponds to SemVer `PATCH`)
- `perf`: Performance improvements
- `refactor`: Code restructuring with no feature change
- `test`: Adding or correcting tests
- `docs`: Documentation updates
- `ci`: CI/CD pipeline changes

### Version Release Cycles:
- `v1.0.0`: Initial production-ready release of Hayat Fitness Gym platform
- Major releases (`X.0.0`): Breaking architectural or routing updates
- Minor releases (`1.X.0`): New user-facing interactive calculators, booking integrations
- Patch releases (`1.0.X`): Minor styling, copy, or schedule timing tweaks

---

## 9. Contact & Support

For queries or membership passes:
- **Phone**: +91 86682 00042
- **Address**: 1st Floor, Riza Corner, Chetna Garden, Lane 9, Bhagyoday Nagar, Kondhwa, Pune, MH 411048
- **Instagram**: [@hayat.fitness__](https://www.instagram.com/hayat.fitness__/)
