import "./styles.css";

const projects = [
  ["Prismico", "Brand Identity, Digital Design", "project-prismico.png"],
  ["Lumina", "UI/UX Design, Web Experience", "project-lumina.png"],
  ["Velar", "Creative Direction, Visual Identity", "project-velar.png"],
  ["Neura", "Product Design, Development", "project-neura.png"],
  ["Axion", "Digital Strategy, Web Design", "project-axion.png"],
];

const services = [
  ["Brand Identity", "Creating distinctive visual identities that define and elevate brands.", "service-brand.png"],
  ["Digital Design", "Designing modern interfaces and seamless user experiences.", "service-digital.png"],
  ["Web Development", "Building fast, scalable, and high-performance digital products.", "service-web.png"],
  ["Creative Direction", "Leading visual concepts and crafting compelling brand narratives.", "service-creative.png"],
];

const posts = [
  ["Mar 23, 2026", "Design Trends in Motion", "blog-motion.png"],
  ["Mar 24, 2026", "Exploring Modern Visual Identity", "blog-identity.png"],
  ["Mar 25, 2026", "The Future of Digital Aesthetics", "blog-future.png"],
  ["Mar 26, 2026", "Designing for User Experience", "blog-ux.png"],
];

const awards = [
  ["Awwwards", "Site of the Day", "2026"],
  ["CSS Design Awards", "UX Design", "2025"],
  ["The FWA", "Mobile Excellence", "2025"],
  ["Behance", "Featured Portfolio", "2024"],
];

const nav = ["About", "Expertise", "Blogs", "Contact"];

function splitLetters(text) {
  return [...text].map((letter, index) => `<span style="--i:${index}">${letter}</span>`).join("");
}

document.querySelector("#app").innerHTML = `
  <header class="site-header">
    <nav class="nav-shell">
      <a class="logo logo-light" href="#top" aria-label="Portrixe home"><img src="/assets/logo-white.png" alt="Portrixe" /></a>
      <a class="logo logo-dark" href="#top" aria-label="Portrixe home"><img src="/assets/logo-black.png" alt="Portrixe" /></a>
      <div class="nav-links">${nav.map((item) => `<a href="#${item.toLowerCase()}">${item}</a>`).join("")}</div>
      <a class="start-link" href="#contact">Start a Project</a>
      <button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
    </nav>
    <div class="mobile-panel">
      ${nav.map((item) => `<a href="#${item.toLowerCase()}">${item}</a>`).join("")}
      <a href="#contact">Start a Project</a>
    </div>
  </header>

  <main id="top">
    <section class="hero section-dark">
      <img class="hero-bg parallax" src="/assets/hero-bg.png" alt="" />
      <div class="hero-inner">
        <div class="hero-tags reveal">
          <span>Brand Identity</span>
          <span>UI/UX Design</span>
          <span>Web Development</span>
        </div>
        <div class="hero-copy">
          <p class="eyebrow reveal">Design that drives impact.</p>
          <h1 class="brand-title" aria-label="Portrixe">${splitLetters("Portrixe®")}</h1>
        </div>
        <article class="hero-card reveal">
          <img class="parallax" src="/assets/hero-card.png" alt="Portrait artwork" />
          <div class="slide-lines" aria-hidden="true"><span></span><span></span><span></span></div>
          <div class="hero-card-meta">
            <span>01 / 03</span>
            <strong>Visual identity for expressive digital brands.</strong>
          </div>
        </article>
      </div>
    </section>

    <section id="about" class="about section-light">
      <div class="section-head reveal">
        <span class="kicker">About</span>
        <h2>We craft striking digital identities for brands ready to move with intention.</h2>
      </div>
      <div class="about-grid">
        <p class="lead reveal">Portrixe blends strategy, design, and development into clean portfolio systems, campaign launches, and brand experiences that feel sharp from first scroll to final click.</p>
        <div class="stats">
          <div class="reveal"><strong>12+</strong><span>Years Experience</span></div>
          <div class="reveal"><strong>85</strong><span>Projects Delivered</span></div>
          <div class="reveal"><strong>21</strong><span>Global Awards</span></div>
        </div>
      </div>
    </section>

    <section id="expertise" class="expertise section-light">
      <div class="section-head reveal">
        <span class="kicker">Expertise</span>
        <h2>Creative services with a precise, minimal point of view.</h2>
      </div>
      <div class="service-grid">
        ${services.map(([title, desc, img], index) => `
          <article class="service-card reveal" style="--d:${index}">
            <div class="service-image"><img class="parallax" src="/assets/${img}" alt="${title}" /></div>
            <div><span>0${index + 1}</span><h3>${title}</h3><p>${desc}</p></div>
          </article>
        `).join("")}
      </div>
    </section>

    <section id="projects" class="projects section-light">
      <div class="section-head reveal">
        <span class="kicker">Selected Projects</span>
        <h2>Work shaped for clarity, character, and momentum.</h2>
      </div>
      <div class="project-grid">
        ${projects.map(([title, type, img], index) => `
          <a class="project-card reveal ${index === 0 ? "wide" : ""}" href="#projects" style="--d:${index}">
            <div class="project-image"><img class="parallax" src="/assets/${img}" alt="${title}" /></div>
            <div class="project-meta"><h3>${title}</h3><p>${type}</p><span>View Project</span></div>
          </a>
        `).join("")}
      </div>
    </section>

    <section class="awards section-dark">
      <div class="section-head reveal">
        <span class="kicker">Awards</span>
        <h2>Recognition for work that stays clean under pressure.</h2>
      </div>
      <div class="award-list">
        ${awards.map(([org, title, year]) => `
          <div class="award-row reveal"><span>${org}</span><strong>${title}</strong><em>${year}</em></div>
        `).join("")}
      </div>
    </section>

    <section id="blogs" class="insights section-light">
      <div class="section-head reveal">
        <span class="kicker">Insights</span>
        <h2>Notes on visual identity, motion, and modern interfaces.</h2>
      </div>
      <div class="post-grid">
        ${posts.map(([date, title, img], index) => `
          <a class="post-card reveal" href="#blogs" style="--d:${index}">
            <div class="post-image"><img class="parallax" src="/assets/${img}" alt="${title}" /></div>
            <span>${date}</span><h3>${title}</h3>
          </a>
        `).join("")}
      </div>
    </section>
  </main>

  <footer id="contact" class="footer section-dark">
    <div class="footer-cta reveal">
      <span class="kicker">Have a project?</span>
      <h2>Let’s build something memorable.</h2>
      <a class="magnetic" href="mailto:hello@portrixe.com">hello@portrixe.com</a>
    </div>
    <div class="footer-social reveal">
      <a href="#contact">Twitter</a>
      <a href="#contact">Instagram</a>
      <a href="#contact">LinkedIn</a>
      <a href="#contact">Behance</a>
    </div>
    <div class="footer-wordmark reveal"><img src="/assets/footer-wordmark.png" alt="Portrixe" /></div>
    <div class="copyright reveal"><span>Portrixe® — Creative Studio</span><span>© 2026 Portrixe. All rights reserved.</span></div>
  </footer>
`;

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const mobilePanel = document.querySelector(".mobile-panel");

menuButton.addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(open));
});

mobilePanel.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.16 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

function animateScroll() {
  const scrollY = window.scrollY;
  header.classList.toggle("is-scrolled", scrollY > 80);
  document.querySelectorAll(".parallax").forEach((img) => {
    const rect = img.getBoundingClientRect();
    const offset = (rect.top - window.innerHeight / 2) * -0.025;
    img.style.setProperty("--py", `${Math.max(-18, Math.min(18, offset))}px`);
  });
}

window.addEventListener("scroll", animateScroll, { passive: true });
window.addEventListener("resize", animateScroll);
animateScroll();

document.querySelectorAll(".magnetic, .start-link, .project-card, .post-card").forEach((el) => {
  el.addEventListener("pointermove", (event) => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  });
});
