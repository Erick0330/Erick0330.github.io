// ===== Data =====
const ROLES = [
  "AI Engineer",
  "Full-Stack Developer",
  "Bioinformatics Engineer"
];

const SKILLS = {
  "AI / ML": [
    ["Python","python"],["PyTorch","pytorch"],["TensorFlow","tensorflow"],
    ["LangChain","langchain"],["FastAPI","fastapi"],["n8n","n8n"],
    ["OpenAI","openai"],["Jupyter","jupyter"],["Supabase","supabase"]
  ],
  "Backend": [
    ["Java","openjdk"],["Spring Boot","springboot"],["Nest.js","nestjs"],
    ["Node.js","nodedotjs"],["PostgreSQL","postgresql"],["MySQL","mysql"],
    ["SQLite","sqlite"],["Redis","redis"],["Go","go"]
  ],
  "Frontend": [
    ["TypeScript","typescript"],["JavaScript","javascript"],["Angular","angular"],
    ["Vue.js","vuedotjs"],["Next.js","nextdotjs"],["HTML5","html5"],
    ["CSS3","css3"],["Tailwind","tailwindcss"]
  ],
  "Tools & QA": [
    ["Git","git"],["GitHub","github"],["Docker","docker"],
    ["Linux","linux"],["DigitalOcean","digitalocean"],["WCAG 2.2","w3c"],
    ["C++","cplusplus"],["C","c"]
  ]
};

const EXPERIENCE = [
  {
    company:"AIKoders",
    role:"AI Engineer & Full Stack Developer",
    date:"Feb 2026 – Present",
    location:"Marianao, Havana",
    bullets:[
      "Developing a 'Guest Concierge' AI system using n8n + RAG to automate rental property management — autonomous Supabase queries, escalation flows to owners.",
      "Orchestrating an autonomous multi-agent marketing system with OpenClaw: sub-agents for competitor analysis, keyword extraction, and monthly IG/FB campaigns (Ideogram, Kling).",
      "Engineering a high-performance Cuban address autocomplete system from scratch with FastAPI + Next.js.",
      "Designing complex geospatial DB architecture (PostgreSQL + PostGIS + Meilisearch) for Cuban address nuances: cross-streets, neighborhoods, municipalities."
    ],
    tags:["FastAPI","Next.js","PostGIS","Meilisearch","n8n","OpenClaw","RAG","Supabase","DigitalOcean"]
  },
  {
    company:"CIGB",
    role:"Freelance Bioinformatics Engineer",
    date:"Sep 2025 – Present",
    location:"Havana, Cuba",
    bullets:[
      "Designed a quantitative scoring algorithm to evaluate protein–protein interaction reliability between Dengue virus components and the human LRP1 protein.",
      "Modeled heterogeneous experimental data into a reproducible scoring framework with weighted criteria (evidence type, interaction frequency, dataset characteristics).",
      "Built a web-based analytical platform with advanced querying by protein name, gene symbol, UniProt ID, and cell type.",
      "Optimized filtering and retrieval for efficient exploration of complex biological interaction networks."
    ],
    tags:["Angular 21","TypeScript","Python","REST APIs","Bioinformatics"],
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
      "Designed and implemented RAG architectures to enhance LLM outputs with proprietary business data.",
      "Built scalable n8n automation workflows integrating APIs, vector DBs, and AI models to optimize business processes.",
      "Developed production Python backend/integration layers to deploy AI-powered features into operational systems.",
      "Implemented multi-agent AI systems and MCP-based orchestration for dynamic tool usage."
    ],
    tags:["Python","n8n","LangChain","Vector DBs","RAG","MCP","Multi-Agent"]
  },
  {
    company:"INTRUST Security",
    role:"Full Stack Developer",
    date:"Nov 2025 – Jan 2026",
    location:"Havana, Cuba",
    bullets:[
      "Developed a vulnerability management platform end-to-end for a cybersecurity company.",
      "Built both backend (Spring Boot) and frontend (Angular) layers with PostgreSQL + Liquibase migrations.",
      "Built automated tools to scan/detect vulnerabilities across domains, improving assessment efficiency.",
      "Integrated multiple security scanning tools into a unified dashboard for centralized real-time risk monitoring."
    ],
    tags:["Spring Boot","Angular","PostgreSQL","Liquibase","Go","REST APIs"]
  },
  {
    company:"A11ySolutions",
    role:"Web Accessibility Auditor / Tester",
    date:"Jan 2025 – Nov 2025",
    location:"Remote",
    bullets:[
      "Performed functional QA testing for web apps including BillShark.com (associated with Mark Cuban) — validated user flows, detected defects, ensured cross-env consistency.",
      "Transitioned to Web Accessibility Auditor role leading accessibility evaluation projects for Crownpeak.",
      "Identified, documented, and reported WCAG compliance issues across enterprise-level websites.",
      "Collaborated with development teams on clear, testable issue reports and remediation guidance."
    ],
    tags:["WCAG 2.2","NVDA","JAWS","VoiceOver","Regression testing","Cross-browser"]
  },
  {
    company:"ALASolutions",
    role:"Full-Stack Web Developer",
    date:"Oct 2024 – May 2025",
    location:"Havana, Cuba",
    bullets:[
      "Contributed to a real-time GPS vehicle monitoring system based on Traccar — fixed bugs, improved backend performance, enhanced usability.",
      "Helped build a simplified version for Gaviota with UI redesigned for non-technical users.",
      "Participated in the initial design and architecture of an intelligent charging system built from scratch.",
      "Collaborated on core components, user flows, and API integrations including ETECSA's Transfermóvil for secure distributed payments."
    ],
    tags:["Nest.js","Spring Boot","Angular","Vue.js","Java","TypeScript"],
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
      "Contributed to a digital transformation consulting application for businesses.",
      "Designed and managed the database architecture and developed the backend system.",
      "Collaborated with a team of three developers to deliver a robust assessment solution.",
      "Implemented graph/table generation to assess digital transformation across dimensions, perspectives, and areas."
    ],
    tags:["Java","SQLite"],
    links:[{label:"Repo", url:"https://github.com/Erick0330/TETRDIG.git"}]
  }
];

const PROJECTS = [
  {
    type:"Computer Vision",
    title:"Real-Time Drowsiness Detection",
    desc:"Driver fatigue detection using YOLO trained on a custom Roboflow dataset. Desktop app in Python with OpenCV live inference, debounce logic, state validation, and real-time analytics dashboard.",
    tags:["Python","YOLO","OpenCV","CustomTkinter","Matplotlib"],
    repo:"https://github.com/Erick0330/Real-Time-Drowsiness-Detection-System",
    icon:"eye"
  },
  {
    type:"AI Research",
    title:"Federated vs Centralized Learning",
    desc:"Academic research evaluating Federated Learning effectiveness. Implemented FL training workflows to compare performance, privacy guarantees, and robustness across ten UCI datasets.",
    tags:["Python","Federated Learning","Flex","UCI"],
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
