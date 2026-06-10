// Single source of truth — content matches the resume exactly. No invented claims.

export const profile = {
  name: 'Mohammed Sahil',
  initials: 'MS',
  location: 'Chicago, IL',
  email: 'mohammedsahil786sz@gmail.com',
  phone: '630-888-2856',
  linkedin: 'https://www.linkedin.com/in/mohammed-sahil-d2d15/',
  github: 'https://github.com/Sahil-337',
  resumePath: '/Mohammed-Sahil-Resume.pdf',
  imagePath: '/profile.jpg',
  tagline:
    'Data Scientist · AI Engineer · Machine Learning & NLP · LLM Evaluation · Product Analytics',
}

export const hero = {
  eyebrow: 'Data Science · AI Engineering · Applied ML',
  headline: 'Turning data and AI systems into decisions teams can act on.',
  subheadline:
    'Data Scientist and AI Engineer focused on Machine Learning, NLP, LLM evaluation, and AI systems validation — building Python and SQL workflows, RAG pipelines, BI dashboards, and product analytics that move from raw signal to clear, decision-ready insight.',
  badges: [
    'Python', 'SQL', 'XGBoost', 'NLP', 'LLM Evaluation', 'RAG',
    'Power BI', 'Tableau', 'A/B Testing', 'AI Systems Validation', 'Product Analytics',
  ],
  snapshot: {
    label: 'Career Snapshot',
    kpis: [
      { label: 'Survey Responses Analyzed', value: '1,000+' },
      { label: 'Initiatives Researched', value: '250+' },
      { label: 'AI Evaluation Cycles', value: '50+' },
      { label: 'Customer Accounts Supported', value: '100+' },
    ],
  },
}

// "Impact at a Glance" — big editorial numbers in their own band
export const impactStats = [
  { number: '1,000+', label: 'Survey responses analyzed for NLP-driven student support project' },
  { number: '250+', label: 'University–community initiatives evaluated for institutional reporting' },
  { number: '100+', label: 'Customer accounts supported across product analytics work' },
  { number: '50+', label: 'AI/ML evaluation cycles run on multi-modal AI systems' },
  { number: '85%', label: 'Exhibition planning accuracy at WNDR Museum' },
  { number: '2,500+', label: 'Students supported by MindBridgeAI NLP system' },
]

export const about = {
  body: [
    "Data Scientist with a Master of Applied Science in Data Science from Illinois Institute of Technology and hands-on experience across machine learning, NLP, AI systems validation, BI reporting, and product analytics. Comfortable working end-to-end — from raw data and SQL pipelines to model evaluation, KPI dashboards, and stakeholder-ready reporting.",
    "Recent work spans an ML evaluation framework for a confidential AI startup, an NLP-based mental health analytics project (1,000+ survey responses) selected for the SoReMo fellowship, and the founding and production of TEDxIllinois Tech across two annual cycles.",
  ],
  highlights: [
    'ML evaluation frameworks improving cross-modal output consistency by ~20%',
    'Analyzed 1,000+ NLP survey responses for a responsible-AI project',
    '85% improvement in exhibition planning accuracy at WNDR Museum',
    '35% improvement in response accuracy on a 2,500+ student NLP system',
  ],
  funFacts: [
    { k: 'Based in', v: 'Chicago, IL' },
    { k: 'Strongest stack', v: 'Python · SQL · XGBoost · NLP · Power BI' },
    { k: 'Currently building', v: 'AI evaluation & validation frameworks' },
    { k: 'Outside work', v: 'TEDx production · responsible-AI research' },
  ],
}

// ────────────────────────────────────────────────────────────
// Dashboards (mock previews — clearly labeled as portfolio visualizations)
// ────────────────────────────────────────────────────────────
export const dashboards = [
  {
    id: 'business',
    title: 'Business Performance Dashboard',
    subtitle:
      'WNDR Museum analytics — ticketing, visitor behavior, sentiment, and engagement trends.',
    tags: ['Power BI', 'SQL', 'KPI Reporting', 'Sentiment Analysis', 'Business Analytics'],
    kpis: [
      { label: 'Reporting Discrepancies', value: '−20%', tone: 'pos' },
      { label: 'Targeted Engagement', value: '+30%', tone: 'pos' },
      { label: 'Planning Accuracy', value: '85%', tone: 'pos' },
    ],
    description:
      'Integrated ticketing data with visitor behavior and sentiment to highlight engagement patterns, segment performance, and planning levers for marketing and exhibitions.',
    chartKind: 'business',
    detail: [
      'Visitor segments visualized by attendance volume and sentiment.',
      'Weekly engagement trend with rolling-window context.',
      'Sentiment split feeds into exhibition planning and pricing reviews.',
    ],
  },
  {
    id: 'mleval',
    title: 'AI/ML Evaluation Dashboard',
    subtitle:
      'Validation framework for AI output evaluation, comparison workflows, and product performance — built for a confidential AI startup.',
    tags: ['Python', 'SQL', 'Model Evaluation', 'Data Validation', 'AI Analytics', 'Retool'],
    kpis: [
      { label: 'Evaluation Cycles', value: '50+', tone: 'neutral' },
      { label: 'Iteration Cycles', value: '25+', tone: 'neutral' },
      { label: 'Consistency Lift', value: '~20%', tone: 'pos' },
    ],
    description:
      'Validation workflow that scores AI outputs across iteration cycles, surfaces drift between modules, and feeds technical KPIs into stakeholder reports.',
    chartKind: 'mleval',
    detail: [
      'Module-level comparison bars highlight consistency gaps across iterations.',
      'Validation status indicators flag pass / watch / fail at the module level.',
      'Performance trend mini chart tracks evaluation metrics across cycles.',
    ],
  },
  {
    id: 'survey',
    title: 'Survey & Responsible AI Insights Dashboard',
    subtitle:
      'MindBridgeAI / SoReMo fellowship — survey responses, engagement signals, and responsible-AI metrics.',
    tags: ['Python', 'NLP', 'Survey Analytics', 'Responsible AI', 'Mental Health Analytics'],
    kpis: [
      { label: 'Survey Responses', value: '1,000+', tone: 'neutral' },
      { label: 'Students Supported', value: '2,500+', tone: 'neutral' },
      { label: 'Response Accuracy', value: '+35%', tone: 'pos' },
    ],
    description:
      'NLP-driven view of survey responses with engagement breakdowns and a structured set of responsible-AI indicators for human-in-the-loop review.',
    chartKind: 'survey',
    detail: [
      'Response distribution split by sentiment and topic clusters.',
      'Engagement trend across survey waves, including drop-off signals.',
      'Responsible-AI checklist — bias, consent, oversight, escalation paths.',
    ],
  },
]

// ────────────────────────────────────────────────────────────
// Experience  (NOTE: Greater Than Equal renamed to AI Product Analyst)
// ────────────────────────────────────────────────────────────
export const experience = [
  {
    title: 'Machine Learning & AI Strategy Analyst',
    company: 'Confidential AI Startup',
    location: 'Chicago, IL',
    period: 'Jul 2025 – Present',
    bullets: [
      'Architect and evaluate ML validation frameworks for multi-modal AI systems, designing structured comparison pipelines that improved cross-modal output consistency by ~20% and reduced evaluation ambiguity across 50+ iterative test cycles.',
      'Develop KPI dashboards and technical performance reports — synthesizing model metrics, experimental benchmarks, and product analytics to support strategic stakeholder engagement and early-stage decision-making.',
      'Partner with leadership to formalize AI workflow documentation and validation protocols across core AI modules, improving model transparency and supporting structured product iteration cycles.',
    ],
    skills: ['Python', 'SQL', 'Retool', 'KPI Dashboards', 'AI/ML Evaluation', 'Data Validation'],
    metrics: [
      { v: '50+', l: 'Eval cycles' },
      { v: '~20%', l: 'Consistency lift' },
      { v: '25+', l: 'Iteration cycles' },
    ],
  },
  {
    title: 'Graduate Research Assistant',
    company: 'Illinois Tech Community Engagement Council',
    location: 'Chicago, IL',
    period: 'Oct 2024 – May 2025',
    bullets: [
      'Spearheaded research on community engagement initiatives, analyzing university–community relationships across 250+ projects to develop strategies and data-driven reports that impacted 5,000+ community members, driving change and fostering partnerships.',
    ],
    skills: ['Research Analytics', 'Reporting', 'Excel', 'Python', 'Stakeholder Communication'],
    metrics: [
      { v: '250+', l: 'Initiatives' },
      { v: '5,000+', l: 'People impacted' },
    ],
  },
  {
    title: 'Business Data Analyst',
    company: 'WNDR Museum',
    location: 'Chicago, IL',
    period: 'Aug 2024 – Dec 2024',
    bullets: [
      'Implemented data analysis using sentiment analysis and designed interactive dashboards that revealed key visitor insights, boosting targeted engagement by 30% and streamlining exhibition strategies by 25%, enhancing planning efficiency through predictive analytics.',
      'Collaborated with cross-functional teams to refine data collection processes and integrate predictive analytics, reducing reporting discrepancies by 20% and improving exhibition planning accuracy by 85%, leading to more data-driven strategies for future exhibitions.',
    ],
    skills: ['SQL', 'Tableau', 'Power BI', 'Excel', 'Sentiment Analysis', 'KPI Reporting'],
    metrics: [
      { v: '+30%', l: 'Engagement' },
      { v: '+25%', l: 'Planning' },
      { v: '85%', l: 'Accuracy' },
    ],
  },
  {
    title: 'AI Product Analyst',
    company: 'Greater Than Equal',
    location: 'Chicago, IL',
    period: 'May 2024 – Aug 2024',
    bullets: [
      'Orchestrated market fit analysis to identify key trends and established customer feedback loops, enhancing decision-making by 20% and boosting customer satisfaction by 30% through user insights, improvements, and integrating AI-driven systems to optimize engagement.',
      'Pioneered the development of a GPT/AI agent, improving process efficiency by 25% and streamlining engagement across stakeholders.',
    ],
    skills: ['Python', 'SQL', 'Market Research', 'GPT/AI Agent', 'Customer Feedback Loops'],
    metrics: [
      { v: '+20%', l: 'Decision speed' },
      { v: '+30%', l: 'CSAT' },
      { v: '+25%', l: 'Process efficiency' },
    ],
  },
  {
    title: 'Customer Success Engineer',
    company: 'GlowTouch Technologies',
    location: 'Mangalore, India',
    period: 'Oct 2022 – Aug 2023',
    bullets: [
      'Enhanced application functionality by optimizing network configuration and delivering proactive customer-focused troubleshooting, driving a 25% improvement in performance and a 15% increase in issue resolution efficiency through algorithm-based monitoring.',
      'Streamlined communication between 100+ customers and IT developers by collecting and analyzing feedback, enabling transformative improvements in functionality and a 30% increase in user satisfaction while empowering development teams to address critical needs.',
    ],
    skills: ['Customer Analytics', 'Product Support', 'Technical Troubleshooting', 'Reporting', 'Stakeholder Communication'],
    metrics: [
      { v: '100+', l: 'Customer accounts' },
      { v: '+25%', l: 'Performance' },
      { v: '+30%', l: 'User satisfaction' },
    ],
  },
]

// ────────────────────────────────────────────────────────────
// Projects (impact-first; outcomes lead, methodology follows)
// ────────────────────────────────────────────────────────────
export const projectCategories = [
  'All',
  'AI/ML',
  'Analytics',
  'Business Intelligence',
  'Research',
  'Community Impact',
]

export const projects = [
  {
    id: 'sahilai',
    title: 'SahilAI — This Site\'s AI Portfolio Assistant',
    categories: ['AI/ML', 'Analytics'],
    featured: true,
    period: '2026',
    description:
      'The AI assistant in the corner of this site. A RAG-style pipeline: portfolio content is chunked into a knowledge base, queries are scored with keyword + intent retrieval, and answers are synthesized from ranked chunks — with an optional serverless LLM upgrade (Claude API) that injects the same grounded context. Built in React with zero heavy dependencies.',
    tools: ['React', 'RAG Architecture', 'Retrieval Ranking', 'Prompt Engineering', 'Claude API', 'Vercel Serverless'],
    impact: 'Live on this page — try it. Answers recruiter questions grounded in real portfolio data, never hallucinates credentials.',
    highlightStats: [
      { v: 'RAG', l: 'Architecture' },
      { v: '40+', l: 'Knowledge chunks' },
      { v: '0', l: 'Hallucinated facts' },
    ],
    details: [
      'Knowledge base auto-generated from the portfolio\'s single content source — projects, roles, skills, education stay in sync automatically.',
      'Retrieval layer: tokenization, stop-word filtering, keyword + body-text scoring, top-k ranking.',
      'Grounded synthesis: answers are templated from retrieved chunks only — no invented claims.',
      'Progressive enhancement: a Vercel serverless function upgrades it to a Claude-powered RAG chat when an API key is configured; the widget falls back gracefully without one.',
    ],
  },
  {
    id: 'mindbridge',
    title: 'MindBridgeAI — Culturally Intelligent Mental Health Support',
    categories: ['AI/ML', 'Research'],
    featured: true,
    period: 'Feb 2025 – May 2025',
    description:
      'NLP-driven student support system selected for the SoReMo fellowship. Built a chatbot supporting 2,500+ students, analyzed 1,000+ survey responses, and delivered model evaluation dashboards to guide ethical AI deployment.',
    tools: ['Python', 'NLP', 'Sentiment Analysis', 'Survey Analytics', 'SQL', 'Responsible AI', 'Dashboards'],
    impact: 'Supported 2,500+ students · 1,000+ survey responses analyzed · response accuracy +35%.',
    highlightStats: [
      { v: '2,500+', l: 'Students supported' },
      { v: '1,000+', l: 'Survey responses' },
      { v: '+35%', l: 'Response accuracy' },
    ],
    dashboardId: 'survey',
    repo: 'https://github.com/Sahil-337/MindBridgeAI',
    details: [
      'Built an NLP-driven chatbot supporting 2,500+ students across campus.',
      'Analyzed 1,000+ survey responses to improve response accuracy by 35%.',
      'Designed model evaluation dashboards and stakeholder reporting frameworks.',
      'Framed the work around responsible AI and EU AI Act considerations.',
    ],
  },
  {
    id: 'dream-engine',
    title: 'AI Model Evaluation & Analytics Framework',
    categories: ['AI/ML', 'Analytics', 'Business Intelligence'],
    featured: true,
    period: 'Jul 2025 – Present',
    description:
      'Validation and analytics framework for multi-modal AI system outputs at a confidential AI startup. Built KPI dashboards and performance reporting that fed product strategy, evaluation cycles, and stakeholder decisions.',
    tools: ['Python', 'SQL', 'Retool', 'Model Evaluation', 'Data Validation', 'KPI Dashboards', 'AI Analytics'],
    impact: '50+ evaluation cycles · ~20% cross-modal consistency lift · structured validation across core AI modules.',
    highlightStats: [
      { v: '50+', l: 'Eval cycles' },
      { v: '~20%', l: 'Consistency lift' },
      { v: '25+', l: 'Iteration cycles' },
    ],
    dashboardId: 'mleval',
    details: [
      'Built structured comparison pipelines across multi-modal AI workflows.',
      'Designed KPI dashboards combining model metrics, experimentation benchmarks, and product analytics.',
      'Documented workflows and validation protocols for repeatable evaluation across core modules.',
      'Translated technical outputs into strategic insights with leadership.',
    ],
  },
  {
    id: 'wndr',
    title: 'WNDR Museum — Business Analytics Dashboard',
    categories: ['Business Intelligence', 'Analytics'],
    period: 'Aug 2024 – Dec 2024',
    description:
      'Integrated ticketing, visitor behavior, and sentiment data into KPI dashboards supporting marketing, pricing, and exhibition planning. Surfaced engagement levers used in cross-functional reviews.',
    tools: ['SQL', 'Tableau', 'Power BI', 'Excel', 'Sentiment Analysis', 'KPI Reporting', 'Predictive Analytics'],
    impact: 'Engagement +30% · planning efficiency +25% · planning accuracy 85% · reporting discrepancies −20%.',
    highlightStats: [
      { v: '+30%', l: 'Engagement' },
      { v: '85%', l: 'Planning accuracy' },
      { v: '−20%', l: 'Discrepancies' },
    ],
    dashboardId: 'business',
    details: [
      'Designed interactive dashboards tailored to business users.',
      'Applied sentiment analysis to visitor feedback at scale.',
      'Refined data collection and reporting processes with cross-functional teams.',
      'Surfaced engagement and planning levers used in marketing and pricing reviews.',
    ],
  },
  {
    id: 'boston-housing',
    title: 'Predictive Modeling of Boston Housing Prices',
    categories: ['AI/ML', 'Analytics'],
    period: 'Sep 2024 – Nov 2024',
    description:
      'End-to-end ML pipeline for housing price prediction — preprocessing, dimensionality reduction, feature selection, and model training with Random Forest and k-fold cross-validation. Engineered for adaptability across algorithms.',
    tools: ['Python', 'Scikit-learn', 'Random Forest', 'k-Fold CV', 'Feature Engineering', 'Predictive Modeling'],
    impact: '92% accuracy · 95% confidence validation · +30% data quality · 25% feature streamlining.',
    highlightStats: [
      { v: '92%', l: 'Model accuracy' },
      { v: '95%', l: 'CV confidence' },
      { v: '+30%', l: 'Data quality' },
    ],
    repo: 'https://github.com/Sahil-337/Boston_Housing_Project',
    details: [
      'Improved data quality by 30% through targeted preprocessing.',
      'Streamlined the feature set by 25% via dimensionality reduction and selection.',
      'Reached 92% model accuracy while addressing overfitting, bias, and computational cost.',
      'Validated results with 95% confidence using k-fold cross-validation.',
    ],
  },
  {
    id: 'aerial-bombing',
    title: 'WWII Aerial Bombing × Weather — Time Series Analysis',
    categories: ['AI/ML', 'Research'],
    period: 'Apr 2024 – May 2024',
    description:
      'Joined two historical datasets — Aerial Bombing Operations and Weather Conditions (1940–1945) — to study how precipitation, temperature, and wind correlated with mission frequency and intensity. Built time-series forecasting models on the combined record.',
    tools: ['Python', 'Time Series', 'Forecasting', 'Numerical Weather Prediction', 'Data Joining'],
    impact: '82% forecast accuracy across historical bombing-mission frequency.',
    highlightStats: [
      { v: '82%', l: 'Forecast accuracy' },
      { v: '5 yrs', l: 'Historical record' },
    ],
    details: [
      'Merged Aerial Bombing Operations and Weather Conditions datasets (1940–1945).',
      'Identified weather patterns affecting mission frequency and intensity.',
      'Built time-series models forecasting future operations from weather signals.',
      'Reached 82% prediction accuracy on held-out historical data.',
    ],
  },
  {
    id: 'disneyland-sentiment',
    title: 'Naive Bayes Sentiment Analysis — Disneyland Reviews',
    categories: ['AI/ML', 'Analytics'],
    period: 'Feb 2024 – Apr 2024',
    description:
      'Built a Naive Bayes classifier from scratch for sentiment analysis on 42,656 reviews across Disneyland Paris, California, and Hong Kong. Compared training-set sizes and visualized ROC curves to assess classifier performance.',
    tools: ['Python', 'Naive Bayes', 'Bag of Words', 'NLP Preprocessing', 'ROC Analysis'],
    impact: '85% accuracy on positive/negative review classification across 42,656 reviews.',
    highlightStats: [
      { v: '85%', l: 'Classification accuracy' },
      { v: '42,656', l: 'Reviews processed' },
    ],
    details: [
      'Preprocessed 42,656 reviews — HTML stripping, punctuation cleanup, lowercasing.',
      'Implemented Binary Bag-of-Words with an 80/20 train/test split.',
      'Achieved 85% accuracy and compared 80% vs 50% training-set effects.',
      'Plotted ROC curves to assess classifier performance across configurations.',
    ],
  },
  {
    id: 'community',
    title: 'Community Engagement Council — Research Analytics',
    categories: ['Research', 'Analytics'],
    period: 'Oct 2024 – May 2025',
    description:
      'Analyzed 250+ university–community initiatives at Illinois Tech and built structured reports for institutional decision-making, stakeholder visibility, and engagement-impact assessment.',
    tools: ['Python', 'Excel', 'Reporting Frameworks', 'Research Analytics', 'Stakeholder Reporting'],
    impact: '250+ initiatives analyzed · supporting work that impacted 5,000+ community members.',
    highlightStats: [
      { v: '250+', l: 'Initiatives' },
      { v: '5,000+', l: 'Community members' },
    ],
    details: [
      'Organized university–community relationship data into structured datasets.',
      'Developed data-driven reports and strategy recommendations.',
      'Translated research findings into stakeholder-ready insights.',
      'Supported work impacting 5,000+ community members.',
    ],
  },
  {
    id: 'market-dashboard',
    title: 'Market Analysis Dashboard — SEO & Engagement',
    categories: ['Business Intelligence', 'Analytics'],
    period: 'Jun 2023 – Jul 2023',
    description:
      'Interactive market analysis dashboard built during a graduate program engagement. Translated SEO and engagement data into executive-ready insights and presented findings to senior management.',
    tools: ['Tableau', 'SQL', 'Excel', 'Data Modeling', 'Project Management'],
    impact: '+20% website traffic · +15% SEO ROI · +18% customer email engagement.',
    highlightStats: [
      { v: '+20%', l: 'Website traffic' },
      { v: '+15%', l: 'SEO ROI' },
      { v: '+18%', l: 'Email engagement' },
    ],
    details: [
      'Built an interactive dashboard tracking SEO, traffic, and engagement KPIs.',
      'Presented findings to senior management; outcomes informed SEO investment.',
      'Linked dashboard insights to a 20% surge in website traffic post-revamp.',
      'Supported 15% ROI lift and 18% increase in customer email engagement.',
    ],
  },
  {
    id: 'reimage',
    title: 'ReImage — Low-Light Image Enhancement (CNN + SVD)',
    categories: ['AI/ML', 'Research'],
    period: 'Dec 2021 – Feb 2022',
    description:
      'Two-stage neural network with channel attention for low-light image enhancement and restoration, combining CNN, SVD, and a custom NCBC module to recover global noise and color information.',
    tools: ['Python', 'CNN', 'SVD', 'Image Processing', 'Channel Attention'],
    impact: 'Improved perceptual image quality and optical fidelity in real-world low-light samples.',
    highlightStats: [
      { v: '2-stage', l: 'Network architecture' },
      { v: 'CNN+SVD', l: 'Hybrid approach' },
    ],
    details: [
      'Built a two-stage network with channel attention for enhancement + restoration.',
      'Designed an NCBC module to capture global noise and color characteristics.',
      'Combined CNN and SVD for local contrast and structural recovery.',
      'Evaluated against real-world low-light image samples.',
    ],
  },
  {
    id: 'healing-1919',
    title: 'Healing 1919 — Justice Ambassador & Multimedia Exhibition',
    categories: ['Community Impact', 'Research'],
    period: 'Jun 2024 – Jul 2024',
    description:
      'Justice Ambassador for the Healing 1919 multimedia exhibition exploring the Red Summer of 1919. Engaged community members and leaders to document personal narratives, supporting public understanding of racial healing and transformation.',
    tools: ['Community Research', 'Narrative Documentation', 'Stakeholder Engagement'],
    impact: 'Multimedia exhibition with Organic Oneness × Illinois Tech Community Affairs.',
    highlightStats: [
      { v: 'Public', l: 'Multimedia exhibition' },
      { v: '2 partners', l: 'Cross-org collaboration' },
    ],
    link: 'https://www.organiconeness.org/healing1919.html',
    details: [
      'Collaborated on a multimedia exhibition exploring the impact of the Red Summer of 1919.',
      'Documented personal narratives and histories with community members and leaders.',
      'Supported public-facing programming on racial healing and transformation.',
      'Partnered with Organic Oneness and Illinois Tech Community Affairs.',
    ],
  },
  {
    id: 'glowtouch',
    title: 'Customer / Product Support Analytics — GlowTouch',
    categories: ['Analytics', 'Business Intelligence'],
    period: 'Oct 2022 – Aug 2023',
    description:
      'Analyzed product performance metrics, customer usage data, and recurring issue patterns to support troubleshooting, customer satisfaction, and operational improvements across 100+ client-facing accounts.',
    tools: ['Customer Analytics', 'Product Metrics', 'Excel', 'Reporting', 'Root Cause Analysis'],
    impact: '100+ accounts supported · +25% performance · +15% resolution efficiency · +30% satisfaction.',
    highlightStats: [
      { v: '100+', l: 'Customer accounts' },
      { v: '+30%', l: 'User satisfaction' },
    ],
    details: [
      'Reviewed product performance and customer usage data to identify recurring issues.',
      'Collaborated with engineering and client teams on resolution workflows.',
      'Maintained structured documentation across 100+ accounts.',
      'Improved user satisfaction and resolution efficiency.',
    ],
  },
]

// ────────────────────────────────────────────────────────────
// Leadership
// ────────────────────────────────────────────────────────────
export const leadership = [
  {
    title: 'Founder & Lead Organizer, TEDxIllinois Tech',
    description:
      'Founded and led TEDxIllinois Tech across two production cycles — owning event strategy, speaker relations, team leadership, production planning, partnerships, and community engagement.',
    tags: ['Leadership', 'Public Speaking', 'Event Strategy', 'Community Building', 'Production'],
    links: [
      { label: 'View TEDx Event 2024', href: 'https://www.ted.com/tedx/events/59836' },
      { label: 'View TEDx Event 2025', href: 'https://www.ted.com/tedx/events/63757' },
    ],
  },
  {
    title: 'SoReMo Fellow — MindBridgeAI',
    description:
      'Selected as a SoReMo Initiative fellow and developed MindBridgeAI, a culturally intelligent AI/data project focused on mental health support, survey analytics, NLP, responsible AI, and community-centered technology.',
    tags: ['SoReMo Fellow', 'Responsible AI', 'NLP', 'Mental Health Analytics', 'Community Impact'],
    links: [
      { label: 'View SoReMo Fellow Profile', href: 'https://www.soremo.org/people/fellows#h.p7ke8panwpmg' },
      { label: 'GitHub — MindBridgeAI', href: 'https://github.com/Sahil-337/MindBridgeAI' },
    ],
  },
  {
    title: 'Master of Applied Science — Data Science',
    description:
      'Completed an MAS in Data Science at Illinois Institute of Technology with recognition including the Graduate Pathway Scholarship, Outstanding First Year Involvement Award, and Clinton E. Stryker Award.',
    tags: ['Data Science', 'Academic Excellence', 'Graduate Scholarship'],
    links: [
      { label: 'Verified Degree (Parchment)', href: 'https://www.parchment.com/lp/award/6c850514-2fdf-4879-ab8b-606e7fc845c1' },
    ],
  },
]

// ────────────────────────────────────────────────────────────
// Achievements
// ────────────────────────────────────────────────────────────
export const achievements = [
  { name: 'Master of Applied Science in Data Science', org: 'Illinois Institute of Technology', kind: 'Degree' },
  { name: 'Graduate Pathway Scholarship', org: 'Illinois Tech', kind: 'Scholarship' },
  { name: 'Outstanding First Year Involvement Award', org: 'Illinois Tech', kind: 'Award' },
  { name: 'Clinton E. Stryker Award', org: 'Illinois Tech', kind: 'Award' },
  { name: 'Founder & Lead Organizer — TEDxIllinois Tech', org: 'TEDx', kind: 'Leadership' },
  { name: 'SoReMo Fellow — MindBridgeAI Project', org: 'SoReMo Initiative', kind: 'Fellowship' },
  { name: 'VTU Mathematics Gold Medalist (2 consecutive semesters)', org: 'VTU', kind: 'Academic' },
  { name: 'Best Outgoing Student Award', org: 'AMC Engineering College', kind: 'Academic' },
  { name: 'National Merit Scholarship Recipient', org: 'India', kind: 'Scholarship' },
]

// ────────────────────────────────────────────────────────────
// Certifications — verified + curated targets that signal a Data Scientist trajectory
// `status: 'earned' | 'in-progress' | 'planned'`
// ────────────────────────────────────────────────────────────
export const certifications = [
  // Earned
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Sep 2021',
    status: 'earned',
    note: 'Foundational cloud literacy — pricing, security, core services.',
  },
  {
    name: 'Introduction to Statistics',
    issuer: 'Stanford University · Coursera',
    date: 'Jan 2023',
    status: 'earned',
    note: 'Hypothesis testing, distributions, regression fundamentals.',
  },
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google · Coursera',
    date: 'Oct 2023',
    status: 'earned',
    note: 'End-to-end analytics workflow — SQL, R, Tableau, case studies.',
  },
  // In-progress / planned (clearly labeled — signals where you're heading next)
  {
    name: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI · Stanford · Coursera (Andrew Ng)',
    date: 'In progress',
    status: 'in-progress',
    note: 'Supervised, unsupervised, advanced learning algorithms.',
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI · Coursera',
    date: 'Planned',
    status: 'planned',
    note: 'CNNs, RNNs, sequence models, transformers.',
  },
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Planned',
    status: 'planned',
    note: 'Generative AI, ML on AWS, responsible AI principles.',
  },
]

// ────────────────────────────────────────────────────────────
// Volunteer experience
// ────────────────────────────────────────────────────────────
export const volunteer = [
  { role: '7th Annual MLK Day of Service', org: 'Community engagement & social responsibility', date: 'Jan 2025' },
  { role: 'Student Volunteer Resource Manager', org: '2024 IIT RTC Conference and Exposition', date: 'Oct 2024' },
  { role: 'Sabermetrics, Scouting & the Science of Baseball', org: 'Pitching models & strategy advocacy', date: 'Aug 2024' },
  { role: 'Healing 1919 Justice Ambassador', org: 'Multimedia exhibition on racial healing', date: 'Jul 2024' },
  { role: 'Chicago Youth Service Corps', org: 'Community growth through volunteer work', date: 'Dec 2023' },
  { role: 'Illinois Tech Alumni Event — AI Toolkit', org: 'Showcased research for global community', date: 'Nov 2023' },
]

// ────────────────────────────────────────────────────────────
// Skills — Technical, Business, Soft (with strength tiers)
// ────────────────────────────────────────────────────────────
export const skillStack = [
  {
    category: 'Programming & Analytics',
    kind: 'technical',
    context: 'Cleaning, analysis, modeling, validation workflows, and reporting automation.',
    items: [
      { name: 'Python', strength: 'Core' },
      { name: 'SQL', strength: 'Core' },
      { name: 'Pandas', strength: 'Core' },
      { name: 'NumPy', strength: 'Strong' },
      { name: 'Jupyter', strength: 'Strong' },
      { name: 'R', strength: 'Working' },
    ],
  },
  {
    category: 'Machine Learning & AI',
    kind: 'technical',
    context: 'AI/ML evaluation, NLP, performance benchmarking, statistical modeling, and responsible AI.',
    items: [
      { name: 'NLP', strength: 'Core' },
      { name: 'XGBoost', strength: 'Core' },
      { name: 'Model Evaluation (RMSE, F1, AUC)', strength: 'Core' },
      { name: 'Scikit-learn', strength: 'Core' },
      { name: 'Random Forest', strength: 'Strong' },
      { name: 'Logistic & Linear Regression', strength: 'Strong' },
      { name: 'Naive Bayes', strength: 'Strong' },
      { name: 'Sentiment Analysis', strength: 'Strong' },
      { name: 'TF-IDF & Embeddings', strength: 'Strong' },
      { name: 'Time Series & Forecasting', strength: 'Working' },
      { name: 'Transformers', strength: 'Working' },
    ],
  },
  {
    category: 'Generative AI & LLMs',
    kind: 'technical',
    context: 'Applied GenAI — agents, retrieval pipelines, prompt design, and LLM output evaluation grounded in real product work.',
    items: [
      { name: 'LLM Output Evaluation', strength: 'Core' },
      { name: 'GPT / AI Agents', strength: 'Strong' },
      { name: 'Prompt Engineering', strength: 'Strong' },
      { name: 'RAG Architecture', strength: 'Strong' },
      { name: 'Embeddings & Vector Retrieval', strength: 'Working' },
      { name: 'Multi-modal AI Systems', strength: 'Working' },
      { name: 'Responsible AI / EU AI Act', strength: 'Working' },
    ],
  },
  {
    category: 'BI & Dashboarding',
    kind: 'technical',
    context: 'Stakeholder-facing dashboards, KPI reporting systems, and executive summaries.',
    items: [
      { name: 'Power BI', strength: 'Core' },
      { name: 'Tableau', strength: 'Strong' },
      { name: 'KPI Dashboards', strength: 'Core' },
      { name: 'Excel', strength: 'Core' },
      { name: 'Executive Reporting', strength: 'Strong' },
      { name: 'Data Visualization', strength: 'Strong' },
    ],
  },
  {
    category: 'Data Engineering & Quality',
    kind: 'technical',
    context: 'Structuring datasets, validating outputs, automating workflows, building reliable reporting layers.',
    items: [
      { name: 'Data Validation', strength: 'Core' },
      { name: 'Data Modeling', strength: 'Strong' },
      { name: 'Retool', strength: 'Strong' },
      { name: 'ETL', strength: 'Working' },
      { name: 'Workflow Automation', strength: 'Working' },
      { name: 'APIs', strength: 'Working' },
      { name: 'Git / GitHub', strength: 'Strong' },
      { name: 'AWS (CCP)', strength: 'Working' },
      { name: 'Hadoop', strength: 'Familiar' },
    ],
  },
  {
    category: 'Methods & Statistics',
    kind: 'technical',
    context: 'Experimentation, statistical reasoning, and forecasting underpinning every analysis.',
    items: [
      { name: 'A/B Testing', strength: 'Strong' },
      { name: 'Experimental Design', strength: 'Strong' },
      { name: 'Hypothesis Testing', strength: 'Strong' },
      { name: 'Cross-Validation', strength: 'Core' },
      { name: 'Feature Engineering', strength: 'Core' },
      { name: 'Probability & Statistics', strength: 'Strong' },
    ],
  },
  {
    category: 'Business & Product Analytics',
    kind: 'business',
    context: 'Translating business questions into measurable KPIs and shipped insights.',
    items: [
      { name: 'Product Metrics', strength: 'Core' },
      { name: 'KPI Definition', strength: 'Core' },
      { name: 'Stakeholder Communication', strength: 'Core' },
      { name: 'Reporting & Storytelling', strength: 'Core' },
      { name: 'Process Improvement', strength: 'Strong' },
      { name: 'Requirements Gathering', strength: 'Strong' },
      { name: 'Forecasting & Planning', strength: 'Working' },
      { name: 'Executive Reporting', strength: 'Strong' },
    ],
  },
  {
    category: 'Leadership & Soft Skills',
    kind: 'soft',
    context: 'How I work with teams, leadership, and across functions.',
    items: [
      { name: 'Cross-Functional Collaboration', strength: 'Core' },
      { name: 'Communication & Storytelling', strength: 'Core' },
      { name: 'Critical Thinking', strength: 'Core' },
      { name: 'Ownership & Accountability', strength: 'Core' },
      { name: 'Presentation & Public Speaking', strength: 'Strong' },
      { name: 'Mentoring & Team Leadership', strength: 'Strong' },
      { name: 'Adaptability', strength: 'Strong' },
      { name: 'Time Management', strength: 'Strong' },
    ],
  },
]

export const skillCategoryFilters = ['All', 'Technical', 'Business', 'Soft']

export const coreStack = [
  'Python', 'SQL', 'XGBoost', 'NLP', 'Power BI', 'Tableau', 'KPI Dashboards', 'Data Validation',
]

// ────────────────────────────────────────────────────────────
// Where I Fit Best — recruiter-mapping
// ────────────────────────────────────────────────────────────
export const roleFit = [
  {
    role: 'Data Analyst',
    icon: 'BarChart3',
    pitch:
      'SQL + Python workflows, KPI dashboards, sentiment & survey analytics, and stakeholder-ready reporting across business, research, and product contexts.',
    proof: ['WNDR Museum BI dashboards', '250+ initiatives analyzed', 'Sentiment + visitor analytics'],
  },
  {
    role: 'BI Analyst',
    icon: 'PieChart',
    pitch:
      'Power BI and Tableau dashboards combining ticketing, behavior, and sentiment — improving reporting accuracy and surfacing decision-ready insights.',
    proof: ['+85% planning accuracy', '−20% reporting discrepancies', 'Cross-functional KPI design'],
  },
  {
    role: 'Product Analyst',
    icon: 'Target',
    pitch:
      'Customer feedback loops, market-fit analysis, A/B testing, and product analytics that translate user signal into measurable improvements.',
    proof: ['+30% CSAT (Greater Than Equal)', '+25% process efficiency', 'GPT/AI agent for engagement'],
  },
  {
    role: 'Data Scientist',
    icon: 'Brain',
    pitch:
      'End-to-end ML — preprocessing, feature engineering, modeling (Random Forest, Naive Bayes, XGBoost), cross-validation, NLP, and time-series forecasting.',
    proof: ['92% Boston Housing accuracy', '85% Disneyland sentiment classifier', '82% time-series forecast'],
  },
  {
    role: 'ML / AI Analyst',
    icon: 'Sparkles',
    pitch:
      'AI systems validation — structured comparison pipelines, model evaluation frameworks, and KPI dashboards for multi-modal AI outputs.',
    proof: ['~20% consistency lift', '50+ evaluation cycles', 'Responsible-AI framing'],
  },
  {
    role: 'Analytics Engineer',
    icon: 'Database',
    pitch:
      'Reliable reporting layers — data validation, modeling, workflow automation, and documentation that turn raw datasets into trusted KPI sources.',
    proof: ['Retool + SQL pipelines', 'KPI dashboards productionized', 'Validation protocols documented'],
  },
]

// Animated stats strip — single-line band of 6 hero numbers
export const statsStrip = [
  { v: '1,000+', l: 'Survey responses analyzed' },
  { v: '250+', l: 'Initiatives evaluated' },
  { v: '100+', l: 'Client accounts supported' },
  { v: '50+', l: 'AI test cycles evaluated' },
  { v: '+30%', l: 'Campaign engagement' },
  { v: '−20%', l: 'Reporting discrepancies' },
]

export const education = [
  {
    school: 'Illinois Institute of Technology',
    location: 'Chicago, IL',
    degree: 'Master of Applied Science, Data Science',
    date: 'May 2025',
    gpa: '3.50',
    coursework:
      'Machine Learning, NLP, Applied Statistics, Data Preparation and Analysis, Big Data Technologies, Probability, Time Series',
    verifyLink: 'https://www.parchment.com/lp/award/6c850514-2fdf-4879-ab8b-606e7fc845c1',
  },
  {
    school: 'AMC Engineering College — VTU',
    location: 'Bangalore, India',
    degree: 'Bachelor of Engineering, Computer Science',
    date: 'Aug 2022',
    gpa: '3.54',
    coursework: 'Algorithms, Databases, AI fundamentals, Statistics',
  },
]
