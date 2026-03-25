/**
 * Christopher Kenreigh Resume HTML
 * This file contains the HTML resume that opens in a new tab
 */

export const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Christopher Kenreigh – Senior Product Designer</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --blue: #2563c7;
      --dark: #111111;
      --mid: #444444;
      --light: #666666;
      --rule: #dddddd;
      --bg: #ffffff;
      --sidebar-bg: #f7f8fa;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      font-size: 10.5pt;
      color: var(--dark);
      background: #e8e8e8;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 32px 16px;
      min-height: 100vh;
    }

    .page {
      background: var(--bg);
      width: 850px;
      max-width: 100%;
      box-shadow: 0 4px 40px rgba(0,0,0,0.18);
      display: grid;
      grid-template-rows: auto 1fr;
    }

    /* ── HEADER ── */
    header {
      padding: 28px 36px 18px;
      border-bottom: 2px solid var(--rule);
    }
    header h1 {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(20pt, 5vw, 30pt);
      font-weight: 400;
      color: var(--dark);
      letter-spacing: -0.5px;
      line-height: 1.1;
    }
    header .title-line {
      font-size: clamp(9pt, 2.5vw, 11pt);
      font-weight: 700;
      color: var(--blue);
      margin: 3px 0 8px;
      letter-spacing: 0.2px;
    }
    header .contact {
      font-size: 9.5pt;
      color: var(--mid);
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }
    header .contact a {
      color: var(--blue);
      text-decoration: none;
      font-weight: 500;
    }
    header .contact span { color: var(--rule); }

    /* ── BODY LAYOUT ── */
    .body {
      display: grid;
      grid-template-columns: 1fr 240px;
    }

    /* ── LEFT (Experience) ── */
    .main {
      padding: 24px 36px 32px;
      border-right: 1px solid var(--rule);
    }

    .section-title {
      font-family: 'DM Serif Display', serif;
      font-size: 14pt;
      font-weight: 400;
      color: var(--dark);
      border-bottom: 1.5px solid var(--dark);
      padding-bottom: 4px;
      margin-bottom: 14px;
    }

    .job { margin-bottom: 20px; }

    .job-title {
      font-size: 10.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .job-company {
      font-size: 10pt;
      font-weight: 500;
      color: var(--blue);
      text-decoration: none;
    }
    .job-company:hover { text-decoration: underline; }

    .job-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin: 2px 0 6px;
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }
    .job-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 16px;
      vertical-align: middle;
    }

    .job ul {
      list-style: disc;
      padding-left: 16px;
    }
    .job ul li {
      font-size: 9.5pt;
      color: var(--mid);
      line-height: 1.5;
      margin-bottom: 3px;
    }

    /* ── RIGHT (Sidebar) ── */
    .sidebar {
      background: var(--sidebar-bg);
      padding: 24px 22px 32px;
    }

    .sidebar-section { margin-bottom: 22px; }

    .sidebar .section-title {
      font-size: 12pt;
      border-bottom-color: var(--mid);
    }

    .summary-quote {
      font-size: 9.5pt;
      font-style: italic;
      color: var(--mid);
      line-height: 1.6;
      margin-bottom: 10px;
    }

    .summary-bullets {
      list-style: disc;
      padding-left: 14px;
    }
    .summary-bullets li {
      font-size: 8.8pt;
      color: var(--mid);
      line-height: 1.55;
      margin-bottom: 3px;
    }

    .tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 6px;
    }
    .tag {
      font-size: 8pt;
      font-weight: 500;
      color: var(--blue);
      background: rgba(37,99,199,0.08);
      border-radius: 3px;
      padding: 2px 7px;
    }

    .dot-list {
      list-style: disc;
      padding-left: 14px;
    }
    .dot-list li {
      font-size: 9pt;
      color: var(--mid);
      line-height: 1.6;
    }

    /* Education */
    .edu-degree {
      font-size: 9.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .edu-school {
      font-size: 9pt;
      color: var(--blue);
      font-weight: 500;
    }
    .edu-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 5px;
      flex-wrap: wrap;
    }
    .edu-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 15px;
      vertical-align: middle;
    }

    .share-link {
      display: block;
      text-align: right;
      font-size: 8.5pt;
      color: var(--blue);
      text-decoration: none;
      font-style: italic;
      margin-top: 16px;
    }
    .share-link:hover { text-decoration: underline; }

    /* ── MOBILE RESPONSIVE ── */
    @media (max-width: 680px) {
      body {
        padding: 0;
        background: var(--bg);
        align-items: stretch;
      }

      .page {
        width: 100%;
        box-shadow: none;
        border-radius: 0;
      }

      header {
        padding: 20px 18px 14px;
      }

      header h1 {
        font-size: 22pt;
      }

      header .title-line {
        font-size: 9pt;
      }

      header .contact {
        font-size: 9pt;
        gap: 6px;
        row-gap: 4px;
      }

      .body {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
      }

      .main {
        padding: 18px 18px 24px;
        border-right: none;
        border-bottom: 1px solid var(--rule);
        order: 2;
      }

      .sidebar {
        padding: 18px 18px 20px;
        order: 1;
        border-bottom: 2px solid var(--rule);
      }

      .section-title {
        font-size: 13pt;
      }

      .sidebar .section-title {
        font-size: 11pt;
      }

      .job ul li {
        font-size: 9pt;
      }

      .job-meta {
        font-size: 8pt;
        gap: 4px;
      }

      .summary-quote {
        font-size: 9pt;
      }

      .tag {
        font-size: 7.5pt;
      }
    }

    @media (min-width: 681px) and (max-width: 900px) {
      body {
        padding: 16px 8px;
      }

      .page {
        width: 100%;
      }

      header {
        padding: 22px 24px 14px;
      }

      .main {
        padding: 20px 24px 28px;
      }

      .sidebar {
        padding: 20px 16px 28px;
      }

      .body {
        grid-template-columns: 1fr 200px;
      }
    }

    @media print {
      body { background: white; padding: 0; }
      .page { box-shadow: none; width: 100%; }
    }
  </style>
</head>
<body>
<div class="page">

  <!-- HEADER -->
  <header>
    <h1>Christopher Kenreigh</h1>
    <div class="title-line">Senior Product Designer | Consumer Health &amp; Regulated Digital Experiences | End-to-End Product Design | Design Systems | Data-Dense UI</div>
    <div class="contact">
      <span style="color: #212121; font-weight:700">480-206-2145</span>
      <span>|</span>
      <a href="mailto:c.kenreigh@gmail.com" style="font-weight:800;">c.kenreigh@gmail.com</a>
      <span>|</span>
      <a href="https://www.linkedin.com/in/kenreigh/" target="_blank">LinkedIn</a>
      <span>|</span>
      <a href="https://www.uxapex.com/portfolioa10" target="_blank">Portfolio</a>
    </div>
  </header>

  <!-- BODY -->
  <div class="body">

    <!-- MAIN EXPERIENCE -->
    <main class="main">
      <h2 class="section-title">Experience</h2>

      <div class="job">
        <div class="job-title">Senior Product Designer (Principal)</div>
        <a class="job-company" href="https://www.plexusworldwide.com" target="_blank">Plexus Worldwide</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2024 – Present
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Led 5 product designers delivering end-to-end consumer health and e-commerce member experiences across 3 international regions — owning complete journeys from onboarding and subscription activation through post-conversion</li>
          <li>Drove zero-to-one e-commerce modernization: synthesized behavioral analytics via Power BI; redesigned mobile-first PDPs, PLPs, cart and checkout flows — reducing abandonment 43% and reversing a –17% operating margin to +2%</li>
          <li>Designed HIPAA-aligned, ethically considered member data capture and subscription activation flows — eliminating 100% of compliance risk across consumer-facing regulated products</li>
          <li>Facilitated usability testing, comprehension testing, and A/B testing workshops; defined success metrics pre-ship, reviewed instrumentation, and iterated on validated behavioral data</li>
          <li>Architected token-based design system in Figma (variables, components, auto-layout, full state coverage) consolidating 6 tools — achieving 60–90% org reuse and 50% faster delivery velocity</li>
          <li>Led adoption of LLM-driven AI design workflows — increasing sprint velocity 35%; built AI persona agent platform driving measurable subscriber retention and revenue recovery</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior Product Designer</div>
        <a class="job-company" href="https://www.freeportmcmoran.com" target="_blank">Freeport-McMoRan</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          08/2022 – 10/2023
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Led end-to-end design for regulated industrial tools with complex, data-dense UI — delivering live analytics dashboards and responsive web and mobile interfaces improving operator efficiency 30%</li>
          <li>Applied systems thinking and information architecture to translate high-stakes real-time data into clear, actionable interfaces for non-technical users</li>
          <li>Facilitated 10+ discovery, alignment, and comprehension-testing workshops — translating insights into validated product requirements and annotated engineering handoffs</li>
          <li>Presented product roadmaps and Agile design strategies to C-suite, securing approval for 5 major releases; built scalable MUI React design system adopted across web, iOS, and Android</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior Product Designer</div>
        <a class="job-company" href="https://www.opentechalliance.com" target="_blank">OpenTech Alliance</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2021 – 08/2022
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Secured C-suite buy-in for 3 new UX initiatives through ethical, consumer-centered design advocacy — elevating design maturity org-wide</li>
          <li>Redesigned Point of Sale kiosk UI using information architecture and conversion best practices — boosting task completion rates 75%</li>
          <li>Designed HIPAA-aligned, privacy-first data capture flows adhering to strict regulatory requirements — reducing compliance risk by 100%</li>
          <li>Improved consumer e-commerce journeys 25% through data-driven UX optimizations and A/B testing</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">UX Design Lead</div>
        <a class="job-company" href="https://www.siemens.com" target="_blank">Siemens</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          07/2020 – 05/2021
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Remote
        </div>
        <ul>
          <li>Led cross-functional collaboration to unify design systems and interaction patterns across 4 simultaneous regulated product initiatives</li>
          <li>Produced detailed annotations, handoff specifications, and design documentation — reducing dissemination needs 50% and enabling engineering to build without friction</li>
          <li>Secured approval for 2 high-impact design initiatives; designed complex data-dense UI layouts integrating 3D and AutoCAD data</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior UX Designer</div>
        <a class="job-company" href="https://www.glynlyon.com" target="_blank">Glynlyon Inc</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          02/2014 – 04/2019
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Designed WCAG 2.2 AA and ADA-compliant inclusive experiences with ethical UX principles across multi-platform digital products</li>
          <li>Drove data-informed design decisions through user research, usability testing, and comprehension testing — increasing task completion and ease of use 65%</li>
          <li>Wrote annotated handoff specifications and communicated complex interaction design to engineering teams across multiple platforms</li>
          <li>Facilitated Design Thinking workshops to write problem statements, define success criteria, and align cross-functional teams on user needs</li>
        </ul>
      </div>
    </main>

    <!-- SIDEBAR -->
    <aside class="sidebar">

      <div class="sidebar-section">
        <h2 class="section-title">Summary</h2>
        <p class="summary-quote" style="color: #212121; font-weight:700">"End-to-end product designer — from discovery, research, and information architecture through coded, responsive, high-fidelity prototypes — delivering HIPAA-aligned, data-dense consumer health and regulated digital experiences that drive measurable outcomes."</p>
        <ul class="summary-bullets">
          <li>12+ years in end-to-end regulated consumer product design</li>
          <li>HIPAA/PHI-compliant, ethical UX across high-stakes member flows</li>
          <li>Token-based Figma design systems: variables, auto-layout, full state coverage</li>
          <li>Ship → measure → iterate: success metrics, instrumentation, behavioral data</li>
          <li>AI-assisted design and personalization flow experience</li>
          <li>WCAG 2.2 AA, usability &amp; comprehension testing, A/B testing</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Key Achievements</h2>
        <ul class="dot-list">
          <li>43% abandonment reduction; –17% to +2% margin reversal</li>
          <li>100% HIPAA compliance on all regulated data flows</li>
          <li>Design system: 60–90% org reuse, 50% faster delivery</li>
          <li>AI platform drove subscriber retention &amp; revenue recovery</li>
          <li>10+ executive-approved product initiatives</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Skills</h2>
        <div class="tag-list">
          <span class="tag">End-to-End Design</span>
          <span class="tag">Consumer Health UX</span>
          <span class="tag">Data-Dense UI</span>
          <span class="tag">Information Architecture</span>
          <span class="tag">Figma Variables</span>
          <span class="tag">Token-Based Design Systems</span>
          <span class="tag">Auto-Layout</span>
          <span class="tag">HIPAA / PHI</span>
          <span class="tag">Ethical UX</span>
          <span class="tag">WCAG 2.2 AA</span>
          <span class="tag">Usability &amp; Comprehension Testing</span>
          <span class="tag">A/B Testing</span>
          <span class="tag">Success Metrics</span>
          <span class="tag">Handoff Specs &amp; Annotations</span>
          <span class="tag">MUI React</span>
          <span class="tag">Google MD3</span>
          <span class="tag">Systems Thinking</span>
          <span class="tag">Coded Prototypes</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">AI &amp; Emerging Tech</h2>
        <div class="tag-list">
          <span class="tag">LLM-Based Workflows</span>
          <span class="tag">Agentic AI</span>
          <span class="tag">RAG Systems</span>
          <span class="tag">Multimodal AI</span>
          <span class="tag">AI Personalization Flows</span>
          <span class="tag">Responsible AI</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Education</h2>
        <div class="edu-degree">Bachelor of Art</div>
        <div class="edu-school">The Art Institute of Phoenix</div>
        <div class="edu-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          09/2002 – 09/2005
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ
        </div>
      </div>

    </aside>
  </div><!-- /body -->
</div><!-- /page -->
</body>
</html>`;

/**
 * Opens the resume HTML in a new browser tab using Blob URL
 */
export function openResumeInNewTab(): void {
  // Create a Blob from the HTML string
  const blob = new Blob([resumeHTML], { type: 'text/html' });
  
  // Generate a blob URL
  const blobURL = URL.createObjectURL(blob);
  
  // Open in new tab
  const newWindow = window.open(blobURL, '_blank');
  
  // Clean up the blob URL after a delay to ensure the page loads
  if (newWindow) {
    setTimeout(() => {
      URL.revokeObjectURL(blobURL);
    }, 1000);
  }
}
