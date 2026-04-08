# AssetArc Careers Page - Content Architecture & Visual Strategy Blueprint

## Executive Summary

This document serves as the comprehensive blueprint for creating a high-end corporate careers page for AssetArc. The design will exude professionalism and established brand identity while visually showcasing a vibrant company culture through high-quality imagery of diverse teams and corporate events. The page will feature a modern, responsive layout aligned with top-tier corporate sites like Reliance Industries.

---

## 1. Brand Identity & Design System

### 1.1 Color Palette
```css
Primary Background: #012928 (Dark Teal)
Secondary Background: #003a39 (Lighter Teal)
Primary Accent: #00ff97 (Green Light)
Secondary Accent: #007d42 (Green Dark)
Tertiary Accent: #00d873 (Green Accent)
Text Primary: #FFFFFF
Text Secondary: #809393
Border: hsl(214.3 31.8% 91.4%)
```

### 1.2 Typography System
```css
Headlines (H1-H6): Product Sans
Body Text: Work Sans (400, 500, 600 weights)
Labels/Subheadings: Montserrat (400, 700 weights)
```

### 1.3 Design Principles
- Clean, minimalist aesthetic with strategic use of white space
- Gradient text effects for emphasis
- Subtle animations and transitions
- Rounded corners (rounded-2xl) for cards and containers
- Hover effects with border color transitions
- Background blur effects for depth

---

## 2. Page Structure & Content Hierarchy

### 2.1 Section Overview
```
1. Hero Section (Above the Fold)
2. Why Work With Us (Value Proposition)
3. Leadership Message (Founder's Quote)
4. Life at AssetArc (Culture Showcase)
5. Benefits & Perks
6. Open Positions (Job Listing Portal)
7. Application Form
8. Footer
```

---

## 3. Detailed Section Specifications

### 3.1 Hero Section

**Purpose:** Create immediate impact and establish career opportunity

**Layout:**
- Full-width section with gradient background overlay
- Centered content with prominent CTA
- Background image: High-quality team collaboration photo (overlay opacity 40%)

**Content Hierarchy:**
```
Level 1: H1 - "Build Your Future at AssetArc"
Level 2: Subheadline - "Join a team that's transforming financial planning in India"
Level 3: CTA Buttons - [View Open Positions] [Learn About Our Culture]
```

**Visual Specifications:**
- Background: Radial gradient from center (rgba(1,65,64,0.8) to transparent)
- H1: Product Sans, 4xl (mobile) → 6xl (desktop), gradient-text class
- Subheadline: Work Sans 500, text-lg (mobile) → xl (desktop), text-[#809393]
- CTA Buttons: 
  - Primary: bg-AssetArc-green-light text-black, rounded-full, px-8 py-4
  - Secondary: border-2 border-white/20 text-white, rounded-full, px-8 py-4
- Animation: fade-in with 0.6s ease-out

**Required Imagery:**
- Hero background: Professional team meeting or collaboration scene
- Dimensions: 1920x1080px minimum
- Style: Warm lighting, diverse team, modern office environment

---

### 3.2 Why Work With Us (Value Proposition)

**Purpose:** Communicate unique value propositions for candidates

**Layout:**
- 3-column grid (desktop) / 1-column (mobile)
- Card-based design with icons
- Hover effects on cards

**Content Hierarchy:**
```
Section Title: "Why Choose AssetArc?"
Cards:
  1. Growth & Learning
     - Icon: Trending Up
     - Headline: "Accelerate Your Career"
     - Description: "Continuous learning opportunities, mentorship programs, and clear career progression paths"
  
  2. Impact & Purpose
     - Icon: Target
     - Headline: "Make a Real Difference"
     - Description: "Help thousands of Indians achieve financial independence through your work"
  
  3. Culture & Community
     - Icon: Users
     - Headline: "Thrive Together"
     - Description: "Collaborative environment where every voice matters and innovation is celebrated"
```

**Visual Specifications:**
- Section padding: py-16
- Card background: bg-white/5, border border-white/10, rounded-2xl, p-8
- Card hover: border-AssetArc-green-light/50, transition-colors duration-300
- Icon: w-12 h-12, text-AssetArc-green-light
- Headline: Product Sans, text-xl, text-white, mb-3
- Description: Work Sans 400, text-white/80, leading-relaxed

---

### 3.3 Leadership Message (Founder's Quote)

**Purpose:** Add authenticity and human connection

**Layout:**
- Split layout: Image left (desktop) / top (mobile), Quote right (desktop) / bottom (mobile)
- Quote styling with large quotation marks

**Content Hierarchy:**
```
Section Title: "From Our Founder"

Quote Block:
  "At AssetArc, we believe that the best financial guidance comes from people who genuinely care. 
  We're building a team of passionate individuals who share our vision of making financial 
  freedom accessible to every Indian. If you're driven by purpose and excellence, 
  you belong here."

- Founder Name: Akshat Bansal
- Title: Founder & CEO, AMFI-Registered Mutual Fund Distributor
```

**Visual Specifications:**
- Section padding: py-16
- Container: bg-white/5, border border-white/10, rounded-2xl, p-8 sm:p-12
- Founder Image: Circular or rounded-square, 200x200px minimum
- Quote: Product Sans, text-2xl (mobile) → 3xl (desktop), text-white/90, italic
- Quote marks: Large, text-AssetArc-green-light/30, 4xl
- Attribution: Work Sans 600, text-AssetArc-green-light, text-lg

**Required Imagery:**
- Founder portrait: Professional headshot, warm expression, neutral background
- Dimensions: 400x400px minimum
- Style: High quality, well-lit, authentic

---

### 3.4 Life at AssetArc (Culture Showcase)

**Purpose:** Visually demonstrate company culture through imagery

**Layout:**
- Masonry or alternating image/text layout
- 4-6 high-quality images with captions
- Carousel on mobile, grid on desktop

**Content Hierarchy:**
```
Section Title: "Life at AssetArc"

Image/Caption Pairs:
  1. Team Events & Celebrations
     - Image: Team celebration, Diwali/annual party
     - Caption: "We celebrate together, grow together"
  
  2. Collaborative Workspaces
     - Image: Modern office, team collaboration
     - Caption: "Open, collaborative work environment"
  
  3. Learning & Development
     - Image: Training session, workshop
     - Caption: "Continuous learning is in our DNA"
  
  4. Community Impact
     - Image: CSR activity, community service
     - Caption: "Giving back to our community"
  
  5. Diversity & Inclusion
     - Image: Diverse team representation
     - Caption: "Diverse perspectives, shared vision"
  
  6. Work-Life Balance
     - Image: Casual Friday, team outing
     - Caption: "Balance is not a buzzword, it's our practice"
```

**Visual Specifications:**
- Section padding: py-16
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-6
- Image container: rounded-2xl, overflow-hidden, aspect-ratio-4/3 or 16/9
- Image hover: scale-105, transition-transform duration-300
- Caption: Work Sans 500, text-white/80, text-center, mt-3

**Required Imagery:**
- 6 high-quality images (minimum 1200x900px each)
- Style: Authentic, candid, professional lighting
- Diversity: Multiple ethnicities, ages, genders represented
- Settings: Office spaces, events, community activities

---

### 3.5 Benefits & Perks

**Purpose:** Showcase comprehensive benefits package

**Layout:**
- 4-column grid (desktop) / 2-column (tablet) / 1-column (mobile)
- Icon + text cards

**Content Hierarchy:**
```
Section Title: "Benefits & Perks"

Benefit Cards:
  1. Health & Wellness
     - Icon: Heart
     - "Comprehensive health insurance, mental health support, wellness programs"
  
  2. Financial Security
     - Icon: Shield
     - "Competitive salary, performance bonuses, ESOPs, provident fund"
  
  3. Work-Life Balance
     - Icon: Clock
     - "Flexible working hours, remote work options, generous PTO"
  
  4. Growth & Development
     - Icon: BookOpen
     - "Learning budget, certifications, conferences, mentorship"
  
  5. Family Support
     - Icon: Home
     - "Maternity/paternity leave, childcare support, family insurance"
  
  6. Office Perks
     - Icon: Coffee
     - "Snacks, beverages, ergonomic workspaces, team outings"
  
  7. Recognition
     - Icon: Award
     - "Employee recognition programs, spot awards, career milestones"
  
  8. Community
     - Icon: Users
     - "Team building activities, cultural celebrations, sports clubs"
```

**Visual Specifications:**
- Section padding: py-16
- Card: flex flex-col items-center text-center, p-6
- Icon: w-10 h-10, text-AssetArc-green-light, mb-4
- Text: Work Sans 500, text-white/80, text-sm sm:text-base

---

### 3.6 Open Positions (Job Listing Portal)

**Purpose:** Sophisticated job search with advanced filtering

**Layout:**
- Filter sidebar (desktop) / collapsible drawer (mobile)
- Job listing cards grid
- Pagination

**Filter System:**

**Location Filter (Indian Cities):**
```
Major Cities: Mumbai, Delhi NCR, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad
Tier 2 Cities: Jaipur, Lucknow, Chandigarh, Indore, Kochi, Coimbatore, Nagpur
Remote Option: [ ] Work from Home
```

**Salary Range Filter:**
```
- ₹3-5 LPA
- ₹5-8 LPA
- ₹8-12 LPA
- ₹12-18 LPA
- ₹18-25 LPA
- ₹25+ LPA
```

**Job Type Filter:**
```
- Full-time
- Part-time
- Contract
- Internship
```

**Experience Level Filter:**
```
- Entry Level (0-2 years)
- Mid Level (2-5 years)
- Senior Level (5-8 years)
- Lead/Manager (8+ years)
- Executive (10+ years)
```

**Department Filter:**
```
- Technology
- Sales & Business Development
- Marketing
- Operations
- Customer Success
- Finance & Accounting
- Human Resources
- Product
```

**Job Card Design:**
```
┌─────────────────────────────────────────┐
│ [Department Badge]  [Posted: 2 days ago]│
│                                         │
│ Job Title: Senior React Developer       │
│                                         │
│ Location: Bangalore • Remote Option     │
│ Experience: 3-5 years • Full-time       │
│ Salary: ₹12-18 LPA                      │
│                                         │
│ [View Details Button]                   │
└─────────────────────────────────────────┘
```

**Visual Specifications:**
- Section padding: py-16
- Filter sidebar: w-64, bg-white/5, border border-white/10, rounded-2xl, p-6
- Job cards: bg-white/5, border border-white/10, rounded-2xl, p-6, hover:border-AssetArc-green-light/50
- Department badge: bg-AssetArc-green-light/20, text-AssetArc-green-light, px-3 py-1, rounded-full, text-sm
- Job title: Product Sans, text-xl, text-white, mb-2
- Meta info: Work Sans 400, text-white/70, text-sm, flex items-center gap-2
- View Details button: border border-AssetArc-green-light, text-AssetArc-green-light, rounded-full, px-6 py-2, hover:bg-AssetArc-green-light hover:text-black

**Sample Job Listings:**

1. **Senior React Developer**
   - Department: Technology
   - Location: Bangalore (Hybrid)
   - Experience: 3-5 years
   - Salary: ₹12-18 LPA
   - Type: Full-time

2. **Business Development Manager**
   - Department: Sales & Business Development
   - Location: Mumbai
   - Experience: 4-6 years
   - Salary: ₹10-15 LPA
   - Type: Full-time

3. **Digital Marketing Specialist**
   - Department: Marketing
   - Location: Delhi NCR (Remote)
   - Experience: 2-4 years
   - Salary: ₹6-10 LPA
   - Type: Full-time

4. **Customer Success Lead**
   - Department: Customer Success
   - Location: Hyderabad
   - Experience: 3-5 years
   - Salary: ₹8-12 LPA
   - Type: Full-time

5. **Financial Analyst**
   - Department: Finance & Accounting
   - Location: Pune
   - Experience: 2-4 years
   - Salary: ₹6-9 LPA
   - Type: Full-time

6. **Product Manager**
   - Department: Product
   - Location: Bangalore (Hybrid)
   - Experience: 5-8 years
   - Salary: ₹18-25 LPA
   - Type: Full-time

7. **HR Business Partner**
   - Department: Human Resources
   - Location: Mumbai
   - Experience: 4-7 years
   - Salary: ₹10-15 LPA
   - Type: Full-time

8. **UI/UX Designer**
   - Department: Technology
   - Location: Delhi NCR (Remote)
   - Experience: 2-5 years
   - Salary: ₹8-14 LPA
   - Type: Full-time

9. **Operations Manager**
   - Department: Operations
   - Location: Bangalore
   - Experience: 3-6 years
   - Salary: ₹10-16 LPA
   - Type: Full-time

10. **Content Writer**
    - Department: Marketing
    - Location: Remote
    - Experience: 1-3 years
    - Salary: ₹4-7 LPA
    - Type: Full-time

---

### 3.7 Application Form

**Purpose:** Direct on-site application submission

**Layout:**
- Modal or dedicated page
- Multi-step form with progress indicator
- Validation and error handling

**Form Fields:**

**Step 1: Personal Information**
```
- First Name *
- Last Name *
- Email Address *
- Phone Number *
- Current Location *
- LinkedIn Profile URL
- Portfolio URL (for design/tech roles)
```

**Step 2: Professional Details**
```
- Total Experience (years) *
- Current Company *
- Current Designation *
- Expected CTC (LPA) *
- Notice Period (days) *
- Current CTC (LPA)
```

**Step 3: Documents**
```
- Resume/CV * (PDF, max 5MB)
- Cover Letter (PDF, optional)
- Portfolio/Work Samples (PDF/Link, optional)
```

**Step 4: Additional Information**
```
- How did you hear about us? (Dropdown)
- Why do you want to join AssetArc? (Textarea, max 500 words)
- Any specific accommodations needed? (Textarea)
- I agree to the terms and conditions (Checkbox)
```

**Visual Specifications:**
- Form container: bg-white/5, border border-white/10, rounded-2xl, p-8
- Progress indicator: Steps with numbers, connected by line
- Form fields: bg-white/10, border border-white/20, rounded-lg, px-4 py-3, text-white
- Labels: Work Sans 500, text-white/80, text-sm, mb-2
- Submit button: bg-AssetArc-green-light, text-black, rounded-full, px-8 py-4, font-semibold
- Error messages: text-red-400, text-sm
- Success state: Checkmark animation with confirmation message

---

### 3.8 Footer

**Purpose:** Navigation, contact information, social links

**Layout:**
- 4-column grid (desktop) / 2-column (tablet) / 1-column (mobile)
- Consistent with existing AssetArc footer design

**Content:**
```
Column 1: Brand & Contact
- AssetArc Logo
- Contact information
- Social media links

Column 2: Quick Links
- About Us
- Services
- Blog
- Contact

Column 3: Career Resources
- Interview Tips
- Career Growth
- Company Culture
- FAQs

Column 4: Legal
- Privacy Policy
- Terms of Service
- Cookie Policy
- Equal Opportunity
```

---

## 4. Visual Strategy & Design Patterns

### 4.1 Animation & Micro-interactions

**Hero Section:**
- Fade-in animation for text content (0.6s ease-out)
- Subtle parallax effect on background image
- CTA button hover: scale-105, shadow-lg

**Cards:**
- Hover: border color transition to AssetArc-green-light/50
- Subtle lift effect: translateY(-4px)
- Icon pulse on hover

**Job Cards:**
- Hover: border color transition, slight scale
- View Details button: fill animation on hover

**Form:**
- Input focus: border color change to AssetArc-green-light
- Button loading state: spinner animation
- Success: confetti or checkmark animation

### 4.2 Responsive Breakpoints

```
Mobile: < 640px (sm)
Tablet: 640px - 1024px (md)
Desktop: > 1024px (lg)
Large Desktop: > 1280px (xl)
```

### 4.3 Accessibility Considerations

- WCAG AA compliance for color contrast
- Keyboard navigation support
- ARIA labels for interactive elements
- Focus indicators for all interactive elements
- Alt text for all images
- Screen reader friendly form labels

---

## 5. Component Architecture

### 5.1 Page Components

```
src/app/careers/
├── page.tsx                    # Main careers page
├── layout.tsx                  # Careers layout
├── components/
│   ├── HeroSection.tsx         # Hero with CTA
│   ├── ValueProposition.tsx    # Why Work With Us
│   ├── LeadershipMessage.tsx   # Founder's quote
│   ├── CultureShowcase.tsx     # Life at AssetArc gallery
│   ├── BenefitsSection.tsx     # Benefits & Perks
│   ├── JobPortal.tsx           # Job listing with filters
│   ├── JobCard.tsx             # Individual job card
│   ├── FilterSidebar.tsx       # Advanced filters
│   ├── ApplicationForm.tsx     # Multi-step application form
│   └── JobDetailModal.tsx      # Job details modal
```

### 5.2 Shared Components

```
src/components/careers/
├── FilterChip.tsx              # Reusable filter chip
├── SalaryRangeSlider.tsx       # Salary range input
├── LocationSelect.tsx          # City dropdown
├── ExperienceLevelSelect.tsx   # Experience dropdown
├── FormStep.tsx                # Form step wrapper
├── ProgressBar.tsx             # Form progress indicator
└── FileUpload.tsx              # Document upload component
```

---

## 6. Data Structure

### 6.1 Job Listing Schema

```typescript
interface JobListing {
  id: string;
  title: string;
  department: string;
  location: {
    city: string;
    state: string;
    isRemote: boolean;
    isHybrid: boolean;
  };
  experience: {
    min: number;
    max: number;
    level: string;
  };
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  postedDate: Date;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  skills: string[];
  isActive: boolean;
}
```

### 6.2 Application Schema

```typescript
interface JobApplication {
  id: string;
  jobId: string;
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    linkedinUrl?: string;
    portfolioUrl?: string;
  };
  professionalInfo: {
    totalExperience: number;
    currentCompany: string;
    currentDesignation: string;
    expectedCTC: number;
    noticePeriod: number;
    currentCTC?: number;
  };
  documents: {
    resumeUrl: string;
    coverLetterUrl?: string;
    portfolioUrl?: string;
  };
  additionalInfo: {
    source: string;
    motivation: string;
    accommodations?: string;
  };
  submittedAt: Date;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired';
}
```

---

## 7. Technical Implementation Notes

### 7.1 State Management

- Use React Context for filter state
- Local state for form steps and validation
- URL query parameters for shareable filter states

### 7.2 Performance Optimization

- Lazy load job listings with pagination
- Image optimization with Next.js Image component
- Debounce filter inputs
- Virtual scrolling for large job lists

### 7.3 Form Handling

- Client-side validation with Zod
- File upload with Supabase Storage
- Form submission to Supabase database
- Success/error toast notifications

### 7.4 SEO Considerations

- Meta tags for careers page
- Structured data for job postings (JobPosting schema)
- Canonical URLs
- Open Graph and Twitter cards

---

## 8. Content Guidelines

### 8.1 Tone of Voice

- Professional yet approachable
- Authentic and transparent
- Inspiring and aspirational
- Inclusive and welcoming

### 8.2 Writing Style

- Clear, concise, jargon-free
- Action-oriented language
- Benefit-focused messaging
- Active voice preferred

### 8.3 Image Guidelines

- High resolution (minimum 1920x1080px for hero)
- Authentic, candid shots (avoid stock-looking images)
- Diverse representation
- Consistent color grading (warm, professional)
- Proper alt text for accessibility

---

## 9. Success Metrics

### 9.1 Key Performance Indicators

- Application conversion rate
- Time-to-apply
- Job listing views
- Filter usage analytics
- Mobile vs desktop usage
- Bounce rate
- Source of applications

### 9.2 User Experience Goals

- Apply for a job in under 3 minutes
- Find relevant jobs with 3 or fewer filter clicks
- Mobile-first responsive experience
- Accessible to users with disabilities

---

## 10. Next Steps

### Phase 1: Foundation
- Set up careers page route structure
- Implement base components
- Create job listing data structure

### Phase 2: Core Features
- Build job listing portal with filters
- Implement application form
- Add form validation and submission

### Phase 3: Enhancement
- Add animations and micro-interactions
- Implement job detail modals
- Optimize performance

### Phase 4: Content & Imagery
- Populate with sample job listings
- Add placeholder content for leadership message
- Prepare image requirements document

### Phase 5: Testing & Launch
- Cross-browser testing
- Mobile responsiveness testing
- Accessibility audit
- Performance optimization
- Launch and monitor

---

## 11. Image Requirements Checklist

### Required Images:
- [ ] Hero background (team collaboration) - 1920x1080px
- [ ] Founder portrait - 400x400px minimum
- [ ] Team celebration/event photo - 1200x900px
- [ ] Office collaboration photo - 1200x900px
- [ ] Training/workshop photo - 1200x900px
- [ ] CSR/community activity photo - 1200x900px
- [ ] Diverse team photo - 1200x900px
- [ ] Team outing/casual photo - 1200x900px

### Image Style Guide:
- Consistent color temperature (warm, professional)
- Natural lighting preferred
- Authentic expressions and interactions
- Diverse representation across all images
- High contrast for accessibility

---

## 12. Appendix: Reference Sites

For design inspiration and best practices:
- Reliance Industries Careers
- Tata Group Careers
- Infosys Careers
- Flipkart Careers
- Zomato Careers

---

*Document Version: 1.0*
*Last Updated: April 2026*
*Prepared for: AssetArc*
