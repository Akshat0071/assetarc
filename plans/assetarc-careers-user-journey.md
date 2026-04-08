# AssetArc Careers Page - User Journey & Visual Flow

## User Journey Flowchart

```mermaid
flowchart TD
    A[User Lands on Careers Page] --> B{User Intent}
    
    B -->|Explore Culture| C[Scrolls Through Page]
    B -->|Find Job| D[Uses Job Portal Filters]
    B -->|Learn More| E[Reads Leadership Message]
    
    C --> C1[Views Hero Section]
    C --> C2[Reads Why Work With Us]
    C --> C3[Views Leadership Message]
    C --> C4[Explores Life at AssetArc Gallery]
    C --> C5[Reviews Benefits & Perks]
    C --> C6[Reaches Job Portal]
    
    C6 --> D
    
    D --> D1[Selects Location Filter]
    D --> D2[Selects Salary Range]
    D --> D3[Selects Job Type]
    D --> D4[Selects Experience Level]
    D --> D5[Selects Department]
    
    D1 --> F[Filtered Job Results]
    D2 --> F
    D3 --> F
    D4 --> F
    D5 --> F
    
    F --> G{User Action}
    
    G -->|View Details| H[Opens Job Detail Modal]
    G -->|Apply Directly| I[Opens Application Form]
    G -->|Refine Search| D
    
    H --> H1[Reads Job Description]
    H --> H2[Reviews Requirements]
    H --> H3[Checks Benefits]
    H --> H4[Views Skills Needed]
    
    H1 --> J{Decision}
    H2 --> J
    H3 --> J
    H4 --> J
    
    J -->|Interested| I
    J -->|Not Interested| K[Returns to Job List]
    J -->|Browse More| F
    
    K --> F
    
    I --> I1[Step 1: Personal Info]
    I --> I2[Step 2: Professional Details]
    I --> I3[Step 3: Upload Documents]
    I --> I4[Step 4: Additional Info]
    
    I1 --> L[Validates Input]
    I2 --> L
    I3 --> L
    I4 --> L
    
    L --> M{Validation Status}
    
    M -->|Errors| N[Shows Error Messages]
    M -->|Valid| O[Submits Application]
    
    N --> I
    
    O --> P[Shows Success Message]
    P --> Q[Application Confirmation Email Sent]
    Q --> R[User Returns to Job Portal or Exits]
    
    E --> C
```

## Page Scroll Flow

```mermaid
flowchart TD
    Start[Page Load] --> Hero[Hero Section]
    Hero --> ValueProp[Why Work With Us]
    ValueProp --> Leadership[Leadership Message]
    Leadership --> Culture[Life at AssetArc]
    Culture --> Benefits[Benefits & Perks]
    Benefits --> JobPortal[Job Portal]
    JobPortal --> Application[Application Form]
    Application --> Footer[Footer]
    
    Hero -.-> CTA1[View Open Positions]
    Hero -.-> CTA2[Learn About Culture]
    
    CTA1 --> JobPortal
    CTA2 --> Culture
    
    JobPortal -.-> JobCard[Individual Job Cards]
    JobCard --> JobModal[Job Detail Modal]
```

## Application Form Flow

```mermaid
flowchart TD
    Start[Opens Application Form] --> Step1[Step 1: Personal Information]
    
    Step1 --> F1[First Name]
    Step1 --> F2[Last Name]
    Step1 --> F3[Email Address]
    Step1 --> F4[Phone Number]
    Step1 --> F5[Current Location]
    Step1 --> F6[LinkedIn Profile]
    Step1 --> F7[Portfolio URL]
    
    F1 --> V1[Validation]
    F2 --> V1
    F3 --> V1
    F4 --> V1
    F5 --> V1
    F6 --> V1
    F7 --> V1
    
    V1 -->|Valid| Next1[Next Button]
    V1 -->|Invalid| Error1[Show Errors]
    
    Error1 --> Step1
    Next1 --> Step2[Step 2: Professional Details]
    
    Step2 --> P1[Total Experience]
    Step2 --> P2[Current Company]
    Step2 --> P3[Current Designation]
    Step2 --> P4[Expected CTC]
    Step2 --> P5[Notice Period]
    Step2 --> P6[Current CTC]
    
    P1 --> V2[Validation]
    P2 --> V2
    P3 --> V2
    P4 --> V2
    P5 --> V2
    P6 --> V2
    
    V2 -->|Valid| Next2[Next Button]
    V2 -->|Invalid| Error2[Show Errors]
    
    Error2 --> Step2
    Next2 --> Step3[Step 3: Upload Documents]
    
    Step3 --> D1[Resume/CV]
    Step3 --> D2[Cover Letter]
    Step3 --> D3[Portfolio/Work Samples]
    
    D1 --> V3[File Validation]
    D2 --> V3
    D3 --> V3
    
    V3 -->|Valid| Next3[Next Button]
    V3 -->|Invalid| Error3[Show Errors]
    
    Error3 --> Step3
    Next3 --> Step4[Step 4: Additional Information]
    
    Step4 --> A1[How did you hear about us]
    Step4 --> A2[Why do you want to join]
    Step4 --> A3[Accommodations needed]
    Step4 --> A4[Terms agreement]
    
    A1 --> V4[Validation]
    A2 --> V4
    A3 --> V4
    A4 --> V4
    
    V4 -->|Valid| Submit[Submit Application]
    V4 -->|Invalid| Error4[Show Errors]
    
    Error4 --> Step4
    Submit --> Success[Success Message]
    Success --> Email[Confirmation Email]
```

## Filter System Flow

```mermaid
flowchart TD
    Start[User Opens Job Portal] --> Filters[Filter Panel]
    
    Filters --> Location[Location Filter]
    Filters --> Salary[Salary Range Filter]
    Filters --> JobType[Job Type Filter]
    Filters --> Experience[Experience Level Filter]
    Filters --> Department[Department Filter]
    
    Location --> L1[Select City]
    Location --> L2[Remote Option]
    Location --> L3[Hybrid Option]
    
    Salary --> S1[Select Range]
    
    JobType --> J1[Full-time]
    JobType --> J2[Part-time]
    JobType --> J3[Contract]
    JobType --> J4[Internship]
    
    Experience --> E1[Entry Level]
    Experience --> E2[Mid Level]
    Experience --> E3[Senior Level]
    Experience --> E4[Lead/Manager]
    Experience --> E5[Executive]
    
    Department --> D1[Technology]
    Department --> D2[Sales]
    Department --> D3[Marketing]
    Department --> D4[Operations]
    Department --> D5[Customer Success]
    Department --> D6[Finance]
    Department --> D7[HR]
    Department --> D8[Product]
    
    L1 --> Apply[Apply Filters]
    L2 --> Apply
    L3 --> Apply
    S1 --> Apply
    J1 --> Apply
    J2 --> Apply
    J3 --> Apply
    J4 --> Apply
    E1 --> Apply
    E2 --> Apply
    E3 --> Apply
    E4 --> Apply
    E5 --> Apply
    D1 --> Apply
    D2 --> Apply
    D3 --> Apply
    D4 --> Apply
    D5 --> Apply
    D6 --> Apply
    D7 --> Apply
    D8 --> Apply
    
    Apply --> Results[Filtered Job Results]
    Results --> Count[Show Result Count]
    Results --> Cards[Display Job Cards]
    
    Cards --> Card{User Action}
    
    Card -->|View Details| Modal[Open Job Detail Modal]
    Card -->|Apply| Form[Open Application Form]
    Card -->|Modify Filters| Filters
    
    Modal --> Card
    Form --> Application[Submit Application]
```

## Component Hierarchy

```mermaid
graph TD
    Page[Careers Page] --> Hero[HeroSection]
    Page --> ValueProp[ValueProposition]
    Page --> Leadership[LeadershipMessage]
    Page --> Culture[CultureShowcase]
    Page --> Benefits[BenefitsSection]
    Page --> JobPortal[JobPortal]
    Page --> Application[ApplicationForm]
    Page --> Footer[Footer]
    
    Hero --> HeroContent[Hero Content]
    Hero --> HeroCTA[CTA Buttons]
    Hero --> HeroBg[Background Image]
    
    ValueProp --> VP1[Growth Card]
    ValueProp --> VP2[Impact Card]
    ValueProp --> VP3[Culture Card]
    
    Leadership --> LQuote[Quote Block]
    Leadership --> LImage[Founder Image]
    Leadership --> LAttribution[Attribution]
    
    Culture --> CGallery[Image Gallery]
    Culture --> CCaptions[Image Captions]
    
    Benefits --> B1[Health Card]
    Benefits --> B2[Financial Card]
    Benefits --> B3[WorkLife Card]
    Benefits --> B4[Growth Card]
    Benefits --> B5[Family Card]
    Benefits --> B6[Office Card]
    Benefits --> B7[Recognition Card]
    Benefits --> B8[Community Card]
    
    JobPortal --> JFilters[FilterSidebar]
    JobPortal --> JList[JobList]
    JobPortal --> JPagination[Pagination]
    
    JFilters --> FLocation[Location Filter]
    JFilters --> FSalary[Salary Filter]
    JFilters --> FType[Job Type Filter]
    JFilters --> FExp[Experience Filter]
    JFilters --> FDept[Department Filter]
    
    JList --> JobCard1[Job Card 1]
    JList --> JobCard2[Job Card 2]
    JList --> JobCardN[Job Card N]
    
    JobCard1 --> JCBadge[Department Badge]
    JobCard1 --> JCTitle[Job Title]
    JobCard1 --> JCMeta[Meta Info]
    JobCard1 --> JCButton[View Details Button]
    
    Application --> AProgress[ProgressBar]
    Application --> AStep1[Step 1: Personal Info]
    Application --> AStep2[Step 2: Professional Info]
    Application --> AStep3[Step 3: Documents]
    Application --> AStep4[Step 4: Additional Info]
    Application --> ANavigation[Navigation Buttons]
    
    AStep1 --> Form1[Form Fields]
    AStep2 --> Form2[Form Fields]
    AStep3 --> Form3[File Uploads]
    AStep4 --> Form4[Form Fields]
```

## Responsive Layout Breakpoints

```mermaid
graph LR
    Mobile[Mobile < 640px] --> Tablet[Tablet 640-1024px]
    Tablet --> Desktop[Desktop > 1024px]
    Desktop --> Large[Large > 1280px]
    
    Mobile --> M1[Single Column]
    Mobile --> M2[Collapsible Filters]
    Mobile --> M3[Full Width Images]
    Mobile --> M4[Stacked Cards]
    
    Tablet --> T1[Two Columns]
    Tablet --> T2[Side Filters]
    Tablet --> T3[Responsive Images]
    Tablet --> T4[Grid Cards]
    
    Desktop --> D1[Multi Column]
    Desktop --> D2[Fixed Sidebar]
    Desktop --> D3[Optimized Images]
    Desktop --> D4[Expanded Grid]
    
    Large --> L1[Maximum Width]
    Large --> L2[Wide Sidebar]
    Large --> L3[High Res Images]
    Large --> L4[Full Grid]
```

## State Management Flow

```mermaid
flowchart TD
    User[User Interaction] --> Component[Component]
    
    Component --> LocalState[Local State]
    Component --> Context[Context Provider]
    Component --> URL[URL Query Params]
    
    LocalState --> LS1[Form Input]
    LocalState --> LS2[Modal Open/Close]
    LocalState --> LS3[Loading States]
    
    Context --> C1[Filter State]
    Context --> C2[Job List State]
    Context --> C3[User Session]
    
    URL --> U1[Shareable Filters]
    URL --> U2[Bookmarkable States]
    URL --> U3[Browser Navigation]
    
    C1 --> Filter[Apply Filters]
    Filter --> API[API Call]
    API --> Update[Update Job List]
    Update --> Render[Re-render Components]
    
    LS1 --> Validate[Form Validation]
    Validate --> Submit[Submit Form]
    Submit --> API
```

---

*Document Version: 1.0*
*Last Updated: April 2026*
*Companion to: assetarc-careers-page-blueprint.md*
