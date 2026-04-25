import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  X
} from 'lucide-react';
import './styles.css';

const resumeUrl = '/Mohammed_Sahil_Resume.pdf';
const linkedinUrl = 'https://www.linkedin.com/in/mohammed-sahil-d2d15/';
const email = 'mohammedsahil786sz@gmail.com';

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Resume', '#resume'],
  ['Contact', '#contact']
];

const skillGroups = [
  { title: 'Programming', skills: ['Python', 'SQL', 'R'] },
  { title: 'Data & Visualization', skills: ['Pandas', 'NumPy', 'Tableau', 'Power BI', 'Excel'] },
  { title: 'Tools', skills: ['Jupyter', 'Git', 'Retool'] },
  { title: 'ML & Modeling', skills: ['Scikit-learn', 'Linear Regression', 'Logistic Regression', 'Random Forest', 'XGBoost', 'Time Series', 'Model Evaluation', 'RMSE', 'F1', 'AUC', 'Cross-Validation', 'Feature Engineering'] },
  { title: 'NLP', skills: ['TF-IDF', 'Sentiment Analysis', 'Text Classification', 'Embeddings', 'Transformer Models'] },
  { title: 'Cloud & Big Data', skills: ['AWS', 'Hadoop'] },
  { title: 'Analytics & Business', skills: ['A/B Testing', 'Experimental Design', 'KPI Dashboards', 'Executive Reporting', 'Stakeholder Communication', 'Business Strategy', 'Product Analytics', 'Data Validation', 'Performance Benchmarking', 'Survey Analytics', 'Cross-Functional Collaboration'] }
];

const experiences = [
  {
    role: 'Machine Learning & AI Strategy Analyst',
    company: 'XYN LLC / Dream Engine',
    location: 'Chicago, IL',
    date: 'Jul 2025 – Present',
    bullets: [
      'Architected and evaluated ML validation frameworks for multi-modal AI product systems, improving cross-modal output consistency by ~20% across 50+ iterative test cycles.',
      'Developed investor-facing KPI dashboards and technical performance reports synthesizing model metrics, experimental benchmarks, and product analytics.',
      'Partnered with executive leadership to formalize AI workflow documentation and validation protocols across 3+ core AI modules, supporting 25+ structured product iteration cycles.'
    ],
    tags: ['ML Evaluation', 'AI Product Analytics', 'KPI Reporting']
  },
  {
    role: 'Graduate Research Assistant',
    company: 'Illinois Tech Community Engagement Council',
    location: 'Chicago, IL',
    date: 'Oct 2024 – May 2025',
    bullets: [
      'Spearheaded research on university-community engagement initiatives, analyzing relationships across 250+ projects.',
      'Developed strategies and data-driven reports that supported work impacting 5,000+ community members.',
      'Translated research findings into stakeholder-ready insights for institutional strategy and partnership visibility.'
    ],
    tags: ['Research Analytics', 'Stakeholder Reporting', 'Community Impact']
  },
  {
    role: 'Business Data Analyst',
    company: 'WNDR Museum',
    location: 'Chicago, IL',
    date: 'Aug 2024 – Dec 2024',
    bullets: [
      'Used sentiment analysis and interactive dashboards to reveal visitor insights, boosting targeted engagement by 30%.',
      'Streamlined exhibition strategies by 25% and enhanced planning through predictive analytics.',
      'Collaborated with cross-functional teams to refine data collection, reducing reporting discrepancies by 20%.'
    ],
    tags: ['BI Dashboards', 'Visitor Analytics', 'Sentiment Analysis']
  },
  {
    role: 'AI Product Analyst',
    company: 'Greater Than Equal',
    location: 'Chicago, IL',
    date: 'May 2024 – Aug 2024',
    bullets: [
      'Conducted market-fit analysis and established customer feedback loops, improving decision-making by 20%.',
      'Integrated AI-driven systems to optimize engagement and boost customer satisfaction by 30%.',
      'Developed a GPT/AI agent that improved process efficiency by 25% and streamlined stakeholder workflows.'
    ],
    tags: ['Product Analytics', 'Market Fit', 'AI Workflows']
  },
  {
    role: 'Customer Success Engineer',
    company: 'GlowTouch Technologies',
    location: 'Mangalore, India',
    date: 'Oct 2022 – Aug 2023',
    bullets: [
      'Optimized application functionality and network configuration, driving a 25% performance improvement.',
      'Increased issue resolution efficiency by 15% through structured troubleshooting and customer-focused technical support.',
      'Worked with 100+ customers and IT developers to analyze feedback and support product improvements, increasing user satisfaction by 30%.'
    ],
    tags: ['Technical Support', 'Customer Insights', 'Process Improvement']
  }
];

const projects = [
  {
    title: 'AI/ML Validation & Performance Reporting Framework',
    role: 'Machine Learning & AI Strategy Analyst',
    icon: BrainCircuit,
    summary: 'Designed validation systems and KPI dashboards to evaluate AI product outputs, improve consistency, and support product and investor decisions.',
    tags: ['ML Evaluation', 'KPI Dashboards', 'AI Product Analytics'],
    metrics: ['~20% consistency improvement', '50+ test cycles', '$380K+ fundraising support'],
    visual: 'ML evaluation workflow',
    problem: 'AI-generated system outputs needed a more reliable way to be evaluated, compared, and translated into business-facing insights.',
    approach: ['Built structured comparison pipelines across multi-modal AI workflows.', 'Designed KPI dashboards combining model metrics, experimental benchmarks, and product analytics.', 'Documented workflows and validation protocols for repeatable evaluation.', 'Worked directly with executive leadership to translate technical outputs into strategic insights.'],
    tools: ['Python', 'SQL', 'Retool', 'ML evaluation', 'KPI dashboards', 'Experimental design'],
    impact: ['Improved cross-modal output consistency by approximately 20%.', 'Evaluated 50+ iterative test cycles.', 'Supported $380K+ in early-stage fundraising and strategic investor engagement.', 'Improved model transparency across 3+ core AI modules.'],
    demonstrates: 'ML evaluation, AI product analytics, performance benchmarking, executive reporting, startup execution, and technical-to-business translation.'
  },
  {
    title: 'WNDR Museum Business Analytics & Visitor Insights',
    role: 'Business Data Analyst',
    icon: BarChart3,
    summary: 'Built analytics dashboards using visitor behavior, sentiment, and operational data to improve marketing decisions and reporting accuracy.',
    tags: ['BI Dashboards', 'Visitor Analytics', 'Sentiment Analysis'],
    metrics: ['30% engagement lift', '20% discrepancy reduction', '25% strategy improvement'],
    visual: 'Dashboard preview',
    problem: 'The museum needed clearer visibility into visitor engagement, sentiment, and performance trends to support marketing, pricing, and exhibition planning.',
    approach: ['Analyzed visitor behavior and engagement data.', 'Applied sentiment analysis to understand visitor feedback.', 'Designed interactive dashboards for business users.', 'Refined data collection and reporting processes with cross-functional teams.'],
    tools: ['SQL', 'Tableau', 'Power BI', 'Excel', 'Sentiment analysis', 'Data validation'],
    impact: ['Boosted targeted engagement by 30%.', 'Streamlined exhibition strategies by 25%.', 'Reduced reporting discrepancies by 20%.', 'Supported stronger planning decisions through predictive analytics.'],
    demonstrates: 'BI dashboards, business analytics, stakeholder collaboration, marketing analytics, visitor analytics, and reporting improvement.'
  },
  {
    title: 'MindBridgeAI — NLP-Based Student Support Analytics',
    role: 'Data Science / NLP Project',
    icon: Sparkles,
    summary: 'Developed an NLP-driven student support system and reporting framework using survey analytics, evaluation dashboards, and ethical AI principles.',
    tags: ['NLP', 'Survey Analytics', 'Ethical AI'],
    metrics: ['1,000+ survey responses', '2,500+ students supported', '35% response accuracy improvement'],
    visual: 'Survey analytics framework',
    problem: 'Student support experiences can vary across cultural and personal contexts. This project explored how NLP and structured survey analysis could help evaluate engagement, support gaps, and response quality.',
    approach: ['Analyzed 1,000+ survey responses.', 'Developed an NLP-driven chatbot concept/system supporting 2,500+ students.', 'Built model evaluation dashboards and stakeholder reporting frameworks.', 'Focused on ethical AI deployment and system optimization.'],
    tools: ['Python', 'SQL', 'NLP', 'TF-IDF', 'Sentiment analysis', 'Embeddings', 'Dashboards'],
    impact: ['Supported analysis of 1,000+ survey responses.', 'Designed dashboards for response quality and engagement monitoring.', 'Improved response accuracy by 35%.', 'Created a structured framework for ethical AI monitoring and stakeholder visibility.'],
    demonstrates: 'NLP, survey analytics, healthcare-adjacent analytics, ethical AI, model evaluation, dashboarding, and stakeholder reporting.'
  },
  {
    title: 'Community Engagement Analytics — Illinois Tech',
    role: 'Graduate Research Assistant',
    icon: GraduationCap,
    summary: 'Analyzed large-scale university-community engagement initiatives to support institutional reporting, strategy, and community impact.',
    tags: ['Research Analytics', 'Reporting', 'Community Impact'],
    metrics: ['250+ projects analyzed', '5,000+ community members impacted', 'Institutional strategy support'],
    visual: 'Community impact reporting',
    problem: 'The university needed structured insights into community engagement initiatives, partnerships, and operational effectiveness.',
    approach: ['Analyzed 250+ community engagement projects.', 'Organized university-community relationship data.', 'Developed data-driven reports and strategy recommendations.', 'Translated research findings into stakeholder-ready insights.'],
    tools: ['Data analysis', 'Reporting frameworks', 'Excel', 'Documentation', 'Stakeholder reporting'],
    impact: ['Analyzed 250+ projects.', 'Supported work impacting 5,000+ community members.', 'Helped develop strategies and reports for institutional decision-making.'],
    demonstrates: 'Research analytics, stakeholder reporting, community impact analysis, institutional strategy, and structured reporting.'
  },
  {
    title: 'AI Product & Market Fit Analytics — Greater Than Equal',
    role: 'AI Product Analyst',
    icon: BriefcaseBusiness,
    summary: 'Used market-fit analysis, feedback loops, and AI-assisted workflow development to support product strategy and engagement optimization.',
    tags: ['Product Analytics', 'AI Workflows', 'Market Research'],
    metrics: ['20% faster decisions', '30% satisfaction lift', '25% process efficiency gain'],
    visual: 'Product feedback loop',
    problem: 'The organization needed better insight into customer needs, market positioning, and workflow efficiency.',
    approach: ['Conducted market-fit analysis.', 'Established customer feedback loops.', 'Analyzed user insights and engagement patterns.', 'Developed a GPT/AI agent to streamline stakeholder engagement.'],
    tools: ['Python', 'SQL', 'Market research', 'User feedback analysis', 'GPT/AI agent', 'Dashboards'],
    impact: ['Improved decision-making by 20%.', 'Boosted customer satisfaction by 30%.', 'Improved process efficiency by 25%.'],
    demonstrates: 'Product analytics, AI-assisted workflows, customer insights, market research, and startup execution.'
  }
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="text-sm font-bold tracking-tight text-slate-950 sm:text-base">Mohammed Sahil</a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-medium text-slate-600 transition hover:text-blue-700">{label}</a>
          ))}
        </div>
        <a href={resumeUrl} className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 md:inline-flex" download>
          Download Resume
        </a>
        <button className="rounded-lg p-2 text-slate-700 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">{label}</a>
            ))}
            <a href={resumeUrl} className="rounded-lg bg-slate-950 px-3 py-2 text-center text-sm font-semibold text-white" download>Download Resume</a>
          </div>
        </div>
      )}
    </header>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
    </div>
  );
}

function Hero() {
  const highlights = ['Python', 'SQL', 'Power BI', 'Tableau', 'NLP', 'ML Evaluation', 'KPI Dashboards', 'Product Analytics'];
  return (
    <section id="top" className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="absolute left-1/2 top-12 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
            <MapPin size={16} /> Chicago, IL · Open to full-time data, analytics, and AI/ML opportunities in the U.S.
          </div>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Data Science & Machine Learning professional turning complex data into dashboards, ML evaluation systems, and business decisions.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I’m Mohammed Sahil, a Data Science graduate from Illinois Institute of Technology with experience in SQL, Python, NLP, predictive modeling, BI dashboards, AI validation frameworks, and stakeholder-facing analytics across startup, institutional, and business environments.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-blue-800">
              View Projects <ArrowRight size={18} />
            </a>
            <a href={resumeUrl} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:border-blue-300 hover:text-blue-700" download>
              <Download size={18} /> Download Resume
            </a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:border-blue-300 hover:text-blue-700">
              LinkedIn <ExternalLink size={18} />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {highlights.map((item) => <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm">{item}</span>)}
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Portfolio Snapshot</p>
          <div className="grid gap-4">
            {[
              ['50+', 'AI/ML test cycles evaluated'],
              ['30%', 'Targeted engagement improvement'],
              ['1,000+', 'Survey responses analyzed'],
              ['250+', 'Community projects reviewed']
            ].map(([metric, label]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-3xl font-bold text-slate-950">{metric}</div>
                <div className="mt-1 text-sm font-medium text-slate-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <SectionHeader eyebrow="About" title="A practical analytics profile across AI, business, and research settings." />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <h3 className="text-xl font-bold text-slate-950">Mohammed Sahil</h3>
          <p className="mt-2 text-slate-600">Data Science & Machine Learning · Chicago, IL</p>
          <div className="mt-6 space-y-4 text-sm leading-6 text-slate-600">
            <p>Master of Applied Science in Data Science from Illinois Institute of Technology.</p>
            <p>Bachelor of Engineering in Computer Science from AMC Engineering College / VTU.</p>
            <p>Founder and Lead Organizer of TEDxIllinois Tech, combining technical execution with leadership, communication, and community-building.</p>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
          <p className="text-base leading-8 text-slate-700">
            My work sits at the intersection of data science, machine learning, business analytics, and stakeholder communication. I have built ML validation frameworks, BI dashboards, NLP-based systems, and reporting workflows across startup, institutional, museum/business, and customer-facing technical environments.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-700">
            I focus on turning unclear data problems into structured analysis: defining metrics, validating outputs, building dashboards, and explaining results in a way that supports decisions.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {['Built and evaluated AI-driven systems', 'Designed dashboards and reporting frameworks', 'Applied NLP and survey analytics to student support', 'Led cross-functional initiatives through TEDxIllinois Tech'].map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
                <CheckCircle2 className="mt-0.5 shrink-0 text-blue-700" size={18} /> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section bg-slate-50">
      <SectionHeader eyebrow="Skills" title="Technical skills organized for analytics, BI, and AI/ML roles." description="A focused view of the tools and methods I use across data science, reporting, product analytics, and model evaluation work." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold text-slate-950">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">{skill}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeader eyebrow="Experience" title="Experience across AI systems, business analytics, research, and customer-facing technical work." />
      <div className="space-y-5">
        {experiences.map((job) => (
          <article key={`${job.role}-${job.company}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-soft">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
              <div>
                <h3 className="text-xl font-bold text-slate-950">{job.role}</h3>
                <p className="mt-1 font-semibold text-blue-700">{job.company}</p>
                <p className="mt-1 text-sm text-slate-500">{job.location}</p>
              </div>
              <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">{job.date}</div>
            </div>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 lg:grid-cols-3">
              {job.bullets.map((bullet) => <li key={bullet} className="rounded-2xl bg-slate-50 p-4">{bullet}</li>)}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {job.tags.map((tag) => <span key={tag} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800">{tag}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function VisualPlaceholder({ label }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{label}</span>
        <span className="h-2 w-2 rounded-full bg-blue-600" />
      </div>
      <div className="space-y-3">
        <div className="h-3 w-5/6 rounded-full bg-slate-200" />
        <div className="grid grid-cols-4 gap-2">
          <div className="h-20 rounded-xl bg-blue-100" />
          <div className="h-20 rounded-xl bg-slate-200" />
          <div className="h-20 rounded-xl bg-blue-50" />
          <div className="h-20 rounded-xl bg-slate-100" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="h-10 rounded-xl bg-slate-100" />
          <div className="h-10 rounded-xl bg-slate-200" />
          <div className="h-10 rounded-xl bg-blue-100" />
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [active, setActive] = useState(projects[0]);
  return (
    <section id="projects" className="section bg-slate-50">
      <SectionHeader eyebrow="Projects" title="Featured case studies" description="Each case study is written to show the problem, approach, tools, impact, and what the work demonstrates for analytics and AI/ML roles." />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          {projects.map((project) => {
            const Icon = project.icon;
            const selected = active.title === project.title;
            return (
              <button key={project.title} onClick={() => setActive(project)} className={`w-full rounded-3xl border p-5 text-left transition ${selected ? 'border-blue-300 bg-white shadow-soft' : 'border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm'}`}>
                <div className="flex gap-4">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${selected ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-700'}`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold leading-snug text-slate-950">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{project.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">{tag}</span>)}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <VisualPlaceholder label={active.visual} />
          <div className="mt-6">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">{active.role}</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-950">{active.title}</h3>
            <p className="mt-3 text-base leading-7 text-slate-600">{active.summary}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {active.metrics.map((metric) => <div key={metric} className="rounded-2xl bg-blue-50 p-4 text-sm font-bold text-blue-900">{metric}</div>)}
            </div>
            <div className="mt-7 grid gap-5">
              <DetailBlock title="Problem" content={active.problem} />
              <DetailList title="Approach" items={active.approach} />
              <DetailList title="Tools" items={active.tools} badges />
              <DetailList title="Impact" items={active.impact} />
              <DetailBlock title="What this shows" content={active.demonstrates} />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function DetailBlock({ title, content }) {
  return (
    <div>
      <h4 className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">{title}</h4>
      <p className="text-sm leading-6 text-slate-700">{content}</p>
    </div>
  );
}

function DetailList({ title, items, badges = false }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">{title}</h4>
      {badges ? (
        <div className="flex flex-wrap gap-2">
          {items.map((item) => <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">{item}</span>)}
        </div>
      ) : (
        <ul className="space-y-2 text-sm leading-6 text-slate-700">
          {items.map((item) => <li key={item} className="flex gap-2"><CheckCircle2 size={16} className="mt-1 shrink-0 text-blue-700" />{item}</li>)}
        </ul>
      )}
    </div>
  );
}

function Education() {
  return (
    <section className="section">
      <SectionHeader eyebrow="Education & Certifications" title="Academic foundation in data science, computer science, and applied analytics." />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <GraduationCap className="mb-5 text-blue-700" size={30} />
          <h3 className="text-xl font-bold text-slate-950">Illinois Institute of Technology</h3>
          <p className="mt-1 font-semibold text-slate-700">Master of Applied Science, Data Science · May 2025</p>
          <p className="mt-1 text-sm text-slate-500">Chicago, IL · GPA: 3.50</p>
          <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-700">
            <li>Graduate Pathway Scholarship</li>
            <li>Outstanding First Year Involvement and Clinton E. Stryker Award</li>
            <li>Founder and Lead Organizer of TEDxIllinois Tech</li>
            <li>Coursework: Machine Learning, NLP, Applied Statistics, Data Preparation and Analysis, Big Data Technologies, Probability, Time Series</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <GraduationCap className="mb-5 text-blue-700" size={30} />
          <h3 className="text-xl font-bold text-slate-950">AMC Engineering College – VTU</h3>
          <p className="mt-1 font-semibold text-slate-700">Bachelor of Engineering, Computer Science · Aug 2022</p>
          <p className="mt-1 text-sm text-slate-500">Bangalore, India · GPA: 3.54</p>
          <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-700">
            <li>National Merit Scholarship Recipient</li>
            <li>VTU Mathematics Gold Medalist for 2 straight semesters</li>
            <li>Best Outgoing Student Award</li>
            <li>Created AI-based algorithm for image contrast enhancement and presented at Cyber Safe Karnataka “Data Protection” seminar</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-7">
        <h3 className="text-xl font-bold text-slate-950">Certifications</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {['Introduction to Statistics | Stanford University | Coursera | Jan 2023', 'Google Data Analytics Professional Certificate | Coursera | Oct 2023', 'AWS Certified Cloud Practitioner | Amazon Web Services Training and Certification | Sep 2021'].map((cert) => <div key={cert} className="rounded-2xl bg-white p-4 text-sm font-semibold text-slate-700 shadow-sm">{cert}</div>)}
        </div>
      </div>
    </section>
  );
}

function ResumeContact() {
  return (
    <>
      <section id="resume" className="section bg-slate-950 text-white">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-300">Resume</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Download the full resume.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Download my resume for a detailed overview of my experience across data science, machine learning, analytics, and AI-driven systems.
            </p>
            <p className="mt-4 text-sm font-medium text-slate-300">
              Open to full-time Data Analyst, BI Analyst, Product Analyst, ML Analyst, Data Scientist, Healthcare Data Analyst, and Analytics Engineer roles.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a href={resumeUrl} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-50" download><Download size={18} /> Download Resume</a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">LinkedIn <ExternalLink size={18} /></a>
          </div>
        </div>
      </section>
      <section id="contact" className="section">
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-soft lg:p-10">
          <SectionHeader eyebrow="Contact" title="Interested in discussing data, BI, product analytics, or AI/ML analyst opportunities?" description="Let’s connect about full-time analytics and AI/ML opportunities in the U.S." />
          <div className="grid gap-5 md:grid-cols-3">
            <a href={`mailto:${email}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-soft">
              <Mail className="mb-4 text-blue-700" size={26} />
              <h3 className="font-bold text-slate-950">Email Me</h3>
              <p className="mt-2 break-all text-sm text-slate-600">{email}</p>
            </a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-soft">
              <ExternalLink className="mb-4 text-blue-700" size={26} />
              <h3 className="font-bold text-slate-950">LinkedIn</h3>
              <p className="mt-2 text-sm text-slate-600">Connect with me professionally.</p>
            </a>
            <a href={resumeUrl} download className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-soft">
              <Download className="mb-4 text-blue-700" size={26} />
              <h3 className="font-bold text-slate-950">Resume</h3>
              <p className="mt-2 text-sm text-slate-600">Download my current resume.</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row md:items-center">
        <p>© 2026 Mohammed Sahil. Built to showcase data science, analytics, and AI/ML work.</p>
        <div className="flex gap-4">
          <a href={`mailto:${email}`} className="hover:text-blue-700">Email</a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-blue-700">LinkedIn</a>
          <a href={resumeUrl} className="hover:text-blue-700" download>Resume</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <ResumeContact />
      </main>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
