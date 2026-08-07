// ===== Data =====
const ROLES = [
  "Agentic AI Engineer",
  "ML Engineer & Researcher",
  "Full-Stack Developer"
];

const SKILLS = {
  "Agentic AI": [
    ["Python","python"],["LangChain","langchain"],["OpenAI","openai"],
    ["Anthropic","anthropic"],["FastAPI","fastapi"],["n8n","n8n"],
    ["Supabase","supabase"],["Qdrant","qdrant"],["Meilisearch","meilisearch"],
    ["AWS","amazonwebservices"],["Google Cloud","googlecloud"],["Docker","docker"]
  ],
  "ML / DL": [
    ["Python","python"],["PyTorch","pytorch"],["TensorFlow","tensorflow"],
    ["scikit-learn","scikitlearn"],["NumPy","numpy"],["Pandas","pandas"],
    ["OpenCV","opencv"],["Jupyter","jupyter"],["Google Colab","googlecolab"]
  ],
  "Backend": [
    ["Python","python"],["TypeScript","typescript"],["Java","openjdk"],
    ["FastAPI","fastapi"],["Spring Boot","springboot"],["Nest.js","nestjs"],
    ["Node.js","nodedotjs"],["PostgreSQL","postgresql"],["MySQL","mysql"],
    ["SQLite","sqlite"],["Redis","redis"],["C","c"],["C++","cplusplus"]
  ],
  "Frontend": [
    ["TypeScript","typescript"],["JavaScript","javascript"],["React","react"],
    ["Next.js","nextdotjs"],["Angular","angular"],["Vue.js","vuedotjs"],
    ["HTML5","html5"],["CSS3","css3"],["Tailwind","tailwindcss"]
  ],
  "Tools & Infra": [
    ["Git","git"],["GitHub","github"],["GitHub Actions","githubactions"],
    ["Docker","docker"],["Linux","linux"],["DigitalOcean","digitalocean"],
    ["Render","render"],["pytest","pytest"],["WCAG 2.2","w3c"]
  ]
};

const EXPERIENCE = [
  {
    company:"AIKoders",
    role:"AI Engineer & Full Stack Developer",
    date:"Feb 2026 – Present",
    location:"Havana, Cuba",
    bullets:[
      "Built a three-agent bug-triage-to-PR pipeline (support → planner → coder) with a human approval gate before merge — 9 of the first 10 agent-generated PRs merged after engineer review (90%).",
      "Shipped Guest Concierge (guest-concierge.ai), a production agent resolving guest inquiries over a pgvector/Supabase knowledge base and escalating critical cases — owner-handled messages down from ~340 to ~155/month across 12 properties (−54%).",
      "Cut token spend 26% and p95 latency from 11s to 7s by instrumenting LangSmith tracing (cost, latency, task success per run), then iterating on retrieval, prompts, and model routing.",
      "Deployed voice and WhatsApp agents for EasyCargo (multi-country LatAm shipping) with Vapi, answering customs questions from a vector KB and pulling live shipment status via API tool calls — 72% of ~1,200 monthly inquiries resolved without handoff.",
      "Built EasyPosting, a multimodal publishing agent: paid-plan entitlement check, Cloudinary photo enhancement, brand-aligned captions from retrieved client context, auto-publish to Instagram/Facebook."
    ],
    tags:["Python","TypeScript","FastAPI","Next.js","Anthropic Claude","LangSmith","n8n","Vapi","RAG","pgvector","Supabase","PostGIS","Docker"]
  },
  {
    company:"CIGB",
    role:"Bioinformatics Software Engineer",
    date:"Sep 2025 – Present",
    location:"Havana, Cuba",
    bullets:[
      "Designed a quantitative scoring algorithm producing normalized confidence scores for Dengue–LRP1 protein–protein interactions, weighting evidence type, interaction frequency, and dataset characteristics into a reproducible framework.",
      "Modeled heterogeneous experimental datasets into a single analyzable schema and shipped a production web analytics platform with advanced search by protein name, gene symbol, UniProt ID, and cell type.",
      "Integrated the scoring engine into the application's search core, optimizing filtering and retrieval for efficient exploration of complex biological interaction networks."
    ],
    tags:["Angular 21","TypeScript","Python","Algorithm design","REST APIs","Bioinformatics"],
    links:[
      {label:"Algorithm repo", url:"https://github.com/Erick0330/Score-algorithm"},
      {label:"Web app repo", url:"https://github.com/Erick0330/data_base_lrp1_web_app"},
      {label:"Live site", url:"https://data-base-lrp1-web-app.onrender.com/"}
    ]
  },
  {
    company:"Guajiritos",
    role:"AI Engineer — RAG & Automation",
    date:"Jan 2026 – Feb 2026",
    location:"Havana, Cuba",
    bullets:[
      "Raised LLM answer accuracy on proprietary business data from 52% to 87% (+35 pp) on a 500-question internal benchmark, by redesigning chunking and embedding strategy over vector databases and enforcing structured outputs for reliable downstream integration.",
      "Built an eval and tracing harness (LangSmith) scoring cost, latency, and task success per run — drove retrieval and model-routing changes that cut cost per query from $0.045 to $0.036 (−20%).",
      "Automated 5 internal business processes with n8n workflows and MCP-based tool orchestration, connecting LLMs to APIs, vector databases, and backend services through function calling."
    ],
    tags:["Python","LangChain","LangSmith","n8n","Vector DBs","RAG","MCP","OpenAI"]
  },
  {
    company:"INTRUST Security",
    role:"Full Stack Developer",
    date:"Nov 2025 – Jan 2026",
    location:"Havana, Cuba",
    bullets:[
      "Shipped a vulnerability-management platform (Spring Boot + Angular), consolidating 2 security scanning tools into a unified real-time monitoring dashboard for centralized risk analysis.",
      "Built automated domain-scanning tooling that increased security-assessment throughput.",
      "Managed versioned PostgreSQL migrations with Liquibase for repeatable releases."
    ],
    tags:["Java","Spring Boot","Angular","TypeScript","PostgreSQL","Liquibase","REST APIs"]
  },
  {
    company:"A11ySolutions",
    role:"QA Engineer → Web Accessibility Auditor",
    date:"Jan 2025 – Nov 2025",
    location:"Remote",
    bullets:[
      "Delivered 10 months of continuous QA on production web platforms including BillShark.com (Mark Cuban–backed), running functional, regression, and cross-browser testing across critical user flows.",
      "Led WCAG 2.2 accessibility audits for Crownpeak enterprise sites, documenting compliance issues and partnering with development teams on remediation."
    ],
    tags:["WCAG 2.2","NVDA","JAWS","VoiceOver","Regression testing","Cross-browser"]
  },
  {
    company:"ALASolutions",
    role:"Full-Stack Web Developer",
    date:"Oct 2024 – May 2025",
    location:"Havana, Cuba",
    bullets:[
      "Improved backend performance and usability of a real-time GPS fleet-monitoring system (Traccar-based), fixing defects and redesigning the UI for non-technical Gaviota users.",
      "Built API integrations for a smart EV-charging platform, including ETECSA Transfermóvil payments across distributed charging stations in Havana."
    ],
    tags:["TypeScript","Nest.js","Vue.js","Angular","PostgreSQL","REST APIs"],
    links:[
      {label:"Cargando repo", url:"https://github.com/Erick0330/Cargando.git"},
      {label:"SmartCharger repo", url:"https://github.com/Nelsonma98/SmartCharger-back.git"}
    ]
  },
  {
    company:"ETECSA",
    role:"Backend Developer",
    date:"Aug 2024 – Nov 2024",
    location:"Playa, Havana",
    bullets:[
      "Designed the database and backend for a digital-transformation assessment platform that scores companies across dimensions, perspectives, and areas from structured questionnaires.",
      "Delivered with a team of three developers."
    ],
    tags:["Java","Spring Boot","PostgreSQL","SQLite","REST APIs"],
    links:[{label:"Repo", url:"https://github.com/Erick0330/TETRDIG.git"}]
  }
];

const PROJECTS = [
  {
    type:"ML Research · Undergraduate Thesis",
    title:"MARFL: Robust Multi-Aggregation Operator for FL",
    desc:"Robust aggregation operator that defends federated training against model-poisoning attacks by composing aggregators along a temporal axis (Multi-Krum → Krum-exclude → Trimmed Mean phase transition) and a spatial axis (multi-stage pipeline within each round). Sustained 87% test accuracy under 6 poisoning attacks on MNIST/CNN, where the strongest single-operator baseline dropped to 61%.",
    tags:["Python","PyTorch","FLEX","FLEXClash","Adversarial ML","DOE"],
    icon:"shield"
  },
  {
    type:"Computer Vision",
    title:"Real-Time Drowsiness Detection",
    desc:"YOLO (Ultralytics) detector for eye state and yawning trained on a custom Roboflow dataset, fine-tuned in Google Colab. Real-time OpenCV inference app with a state machine (sensitivity thresholds, debounce, temporal validation) that cuts false positives. CustomTkinter GUI with live bounding boxes, event log, and Matplotlib analytics.",
    tags:["Python","YOLO","OpenCV","Roboflow","CustomTkinter","Matplotlib"],
    repo:"https://github.com/Erick0330/Real-Time-Drowsiness-Detection-System",
    icon:"eye"
  },
  {
    type:"AI Research",
    title:"Federated vs Centralized Learning",
    desc:"Implemented federated training workflows and benchmarked federated against centralized models across 10 UCI datasets under a common evaluation protocol, comparing predictive performance, privacy guarantees, and robustness.",
    tags:["Python","FLEX","scikit-learn","Federated Learning","UCI"],
    repo:"https://github.com/AdrianRodriguezJorge/test_FL.git",
    icon:"network"
  },
  {
    type:"Full-Stack",
    title:"Multiversal Tic-Tac-Toe",
    desc:"Web Tic-Tac-Toe for two players with a multiversal travel theme: color palette, icons, and music shift on each win. Stats tracking + secret mode unlocked after 5 ties.",
    tags:["Vue.js"],
    repo:"https://github.com/Erick0330/tic-tac-toe.git",
    live:"https://tic-tac-toe-anime.onrender.com",
    icon:"game"
  },
  {
    type:"Frontend",
    title:"Mass Spectrometry Workshop",
    desc:"Fully responsive Vue.js platform to promote a Mass Spectrometry workshop. Custom layouts, reusable components, scientific visual aesthetic — optimized for performance and cross-device UX.",
    tags:["Vue.js","HTML","CSS","UI/UX"],
    repo:"https://github.com/Erick0330/curso_espectrometria_masa",
    icon:"atom"
  },
  {
    type:"Architecture",
    title:"Animal Shelter Manager",
    desc:"CRUD application to automate animal shelter management. JasperReports PDF generation, role-based auth. Designed database schema and backend structure end-to-end.",
    tags:["Java","JasperReports","PostgreSQL"],
    repo:"https://github.com/Erick0330/RefugioVSC.git",
    icon:"db"
  },
  {
    type:"Data Structures",
    title:"iMessage Simulator",
    desc:"Offline email simulation with a custom Circular Queue implemented from scratch. GUI, recycle bin, and text-file persistence across sessions.",
    tags:["C++"],
    repo:"https://github.com/Erick0330/iMessageSimulator.git",
    icon:"msg"
  }
];

const ICONS = {
  shield:'<svg class="icon-big" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l9 4v6c0 5-3.5 9-9 10-5.5-1-9-5-9-10V6l9-4z"/><path d="M9 12l2 2 4-4"/></svg>',
  eye:'<svg class="icon-big" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  network:'<svg class="icon-big" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="M12 8v3M6 17l5-4M18 17l-5-4"/></svg>',
  game:'<svg class="icon-big" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>',
  atom:'<svg class="icon-big" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)"/></svg>',
  db:'<svg class="icon-big" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>',
  msg:'<svg class="icon-big" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
};

// ===== Typewriter =====
(function typewriter(){
  const el = document.getElementById('role-text');
  let ri = 0, ci = 0, deleting = false;
  function tick(){
    const cur = ROLES[ri];
    if(!deleting){
      el.textContent = cur.slice(0, ++ci);
      if(ci === cur.length){ deleting = true; setTimeout(tick, 1600); return; }
    } else {
      el.textContent = cur.slice(0, --ci);
      if(ci === 0){ deleting = false; ri = (ri+1) % ROLES.length; }
    }
    setTimeout(tick, deleting ? 35 : 70);
  }
  tick();
})();

// ===== Skills tabs =====
(function skills(){
  const tabsEl = document.getElementById('skillsTabs');
  const gridEl = document.getElementById('skillsGrid');
  const categories = Object.keys(SKILLS);
  let active = categories[0];

  function render(){
    tabsEl.innerHTML = categories.map(c =>
      `<button class="skill-tab ${c===active?'active':''}" data-cat="${c}">${c} <span class="count">${SKILLS[c].length}</span></button>`
    ).join('');
    gridEl.innerHTML = SKILLS[active].map(([name, slug])=>`
      <div class="skill">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg" alt="${name}" loading="lazy"/>
        <span>${name}</span>
      </div>
    `).join('');
    gridEl.querySelectorAll('.skill').forEach(el=>{
      el.addEventListener('mousemove', e=>{
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', ((e.clientX-r.left)/r.width*100)+'%');
        el.style.setProperty('--my', ((e.clientY-r.top)/r.height*100)+'%');
      });
    });
  }
  tabsEl.addEventListener('click', e=>{
    const btn = e.target.closest('.skill-tab');
    if(!btn) return;
    active = btn.dataset.cat;
    render();
  });
  render();
})();

// ===== Experience timeline =====
(function experience(){
  const navEl = document.getElementById('tlNav');
  const panelsEl = document.getElementById('tlPanels');
  let active = 0;

  navEl.innerHTML = EXPERIENCE.map((e,i)=>`
    <button class="tl-nav-item ${i===0?'active':''}" data-idx="${i}">
      <span class="company">${e.company}</span>
      <span class="date">${e.date}</span>
    </button>
  `).join('');

  panelsEl.innerHTML = EXPERIENCE.map((e,i)=>`
    <div class="tl-panel ${i===0?'active':''}" data-idx="${i}">
      <h3>${e.role} <span class="at">@ ${e.company}</span></h3>
      <div class="meta">
        <span>📅 ${e.date}</span>
        <span>📍 ${e.location}</span>
      </div>
      <ul>${e.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
      <div class="tags">${e.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      ${e.links ? `<div class="links">${e.links.map(l=>`
        <a href="${l.url}" target="_blank">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14L21 3"/></svg>
          ${l.label}
        </a>`).join('')}</div>` : ''}
    </div>
  `).join('');

  navEl.addEventListener('click', e=>{
    const btn = e.target.closest('.tl-nav-item');
    if(!btn) return;
    active = +btn.dataset.idx;
    navEl.querySelectorAll('.tl-nav-item').forEach((n,i)=>n.classList.toggle('active', i===active));
    panelsEl.querySelectorAll('.tl-panel').forEach((p,i)=>p.classList.toggle('active', i===active));
  });
})();

// ===== Projects =====
(function projects(){
  const el = document.getElementById('projGrid');
  el.innerHTML = PROJECTS.map(p=>`
    <article class="proj-card">
      <div class="proj-visual">
        <div class="glyph"></div>
        ${ICONS[p.icon] || ''}
      </div>
      <div class="proj-body">
        <div class="ptype">${p.type}</div>
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
        <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        <div class="p-links">
          ${p.repo ? `<a href="${p.repo}" target="_blank">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.93c.58.11.79-.25.79-.56v-1.96c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.78 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.35.77 1.05.77 2.11v3.13c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>
            Code
          </a>` : ''}
          ${p.live ? `<a href="${p.live}" target="_blank">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14L21 3"/></svg>
            Live
          </a>` : ''}
        </div>
      </div>
    </article>
  `).join('');
})();

// ===== Scroll effects =====
(function scrollStuff(){
  const nav = document.getElementById('topnav');
  const backTop = document.getElementById('backTop');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#navlist a[data-section]');

  function onScroll(){
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 40);
    backTop.classList.toggle('show', y > 600);

    let cur = 'hero';
    sections.forEach(s=>{
      if(s.getBoundingClientRect().top < 160) cur = s.id;
    });
    navLinks.forEach(a => a.classList.toggle('active', a.dataset.section === cur));
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  backTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
})();

// ===== Reveal on scroll =====
(function reveal(){
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.12});
  els.forEach(el => io.observe(el));
})();

// ===== Mobile menu =====
(function burger(){
  const b = document.getElementById('burger');
  const nav = document.getElementById('topnav');
  b.addEventListener('click', ()=>{
    b.classList.toggle('open');
    nav.classList.toggle('menu-open');
  });
  document.querySelectorAll('#navlist a').forEach(a=>{
    a.addEventListener('click', ()=>{
      b.classList.remove('open');
      nav.classList.remove('menu-open');
    });
  });
})();

// ===== CV Modal =====
(function cvModal(){
  const modal = document.getElementById('cvModal');
  if(!modal) return;

  function open(){
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function close(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-cv-open]').forEach(el=>{
    el.addEventListener('click', e=>{
      e.preventDefault();
      open();
    });
  });
  modal.querySelectorAll('[data-cv-close]').forEach(el=>{
    el.addEventListener('click', close);
  });
  // Close the modal after the user picks a CV
  modal.querySelectorAll('.cv-option').forEach(el=>{
    el.addEventListener('click', ()=> setTimeout(close, 150));
  });
  document.addEventListener('keydown', e=>{
    if(e.key === 'Escape' && modal.classList.contains('open')) close();
  });
})();
