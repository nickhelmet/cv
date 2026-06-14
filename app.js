/*
 * app.js — Render del CV y manejo de idioma (ES/EN)
 */

// Etiquetas fijas de la interfaz
const UI = {
  about:          { es: "Sobre mí",        en: "About" },
  experience:     { es: "Experiencia",     en: "Experience" },
  skills:         { es: "Tecnologías",     en: "Skills" },
  education:      { es: "Educación",       en: "Education" },
  certifications: { es: "Becas",           en: "Scholarships" },
  languages:      { es: "Idiomas",         en: "Languages" },
  current:        { es: "Actual",          en: "Current" },
  print:          { es: "Imprimir",        en: "Print" },
  download:       { es: "Descargar PDF",   en: "Download PDF" },
  generating:     { es: "Generando…",      en: "Generating…" },
  email:          { es: "Email",           en: "Email" },
};

const STORAGE_KEY = "cv-lang";
const THEME_KEY = "cv-theme";

// Idioma inicial: preferencia guardada > idioma del navegador > español
function initialLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "es" || saved === "en") return saved;
  const nav = (navigator.language || "es").toLowerCase();
  return nav.startsWith("en") ? "en" : "es";
}

let lang = initialLang();

// Tema inicial: preferencia guardada > preferencia del sistema > claro
function initialTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

let theme = initialTheme();

function applyTheme() {
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.getElementById("theme-btn");
  if (btn) {
    btn.textContent = theme === "dark" ? "☀" : "☾";
    btn.title = theme === "dark" ? "Tema claro" : "Tema oscuro";
  }
}

function setTheme(next) {
  theme = next;
  localStorage.setItem(THEME_KEY, next);
  applyTheme();
}

// Helpers
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html !== undefined) n.innerHTML = html;
  return n;
};
const t = (field) => (field && typeof field === "object" ? field[lang] : field);

function render() {
  document.documentElement.lang = lang;

  // Encabezado
  document.getElementById("name").textContent = CV.name;
  document.getElementById("title").textContent = t(CV.title);
  document.getElementById("tagline").textContent = t(CV.tagline);
  document.getElementById("location").textContent = t(CV.location);

  // Enlaces de contacto
  const links = document.getElementById("links");
  links.innerHTML = "";
  links.appendChild(linkEl("✉", UI.email[lang], "mailto:" + CV.contact.email, CV.contact.email));
  if (CV.contact.linkedin) links.appendChild(linkEl("in", "LinkedIn", CV.contact.linkedin));
  if (CV.contact.github) links.appendChild(linkEl("◧", "GitHub", CV.contact.github));

  // Secciones
  const main = document.getElementById("content");
  main.innerHTML = "";

  main.appendChild(sectionAbout());
  main.appendChild(sectionExperience());
  main.appendChild(sectionSkills());
  main.appendChild(sectionTwoCol());

  // Botones de idioma + imprimir
  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  document.getElementById("print-btn").textContent = UI.print[lang];
  document.getElementById("download-btn").textContent = UI.download[lang];
}

// Descarga el CV como PDF (forzando tema claro para impresión)
function downloadPDF() {
  const btn = document.getElementById("download-btn");
  if (typeof html2pdf === "undefined") {
    window.print(); // fallback si la librería no cargó
    return;
  }
  const root = document.getElementById("cv-root");
  const prevTheme = document.documentElement.getAttribute("data-theme");
  const prevLabel = btn.textContent;
  btn.disabled = true;
  btn.textContent = UI.generating[lang];
  document.documentElement.setAttribute("data-theme", "light");

  const restore = () => {
    document.documentElement.setAttribute("data-theme", prevTheme || "light");
    btn.disabled = false;
    btn.textContent = prevLabel;
  };

  const opt = {
    margin: [10, 10, 12, 10],
    filename: `CV_Nicolas_Casco_${lang.toUpperCase()}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    pagebreak: { mode: ["css", "legacy"] },
  };

  // Pequeño delay para que el repintado a tema claro se aplique antes de capturar
  setTimeout(() => {
    html2pdf().set(opt).from(root).save().then(restore).catch(restore);
  }, 60);
}

function linkEl(icon, label, href, sub) {
  const a = el("a", "link");
  a.href = href;
  if (href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
  a.innerHTML = `<span class="link-icon">${icon}</span><span>${sub || label}</span>`;
  a.title = label;
  return a;
}

function sectionTitle(text) {
  const h = el("h2", "section-title");
  h.textContent = text;
  return h;
}

function section(id, titleText) {
  const s = el("section", "section");
  s.id = id;
  s.appendChild(sectionTitle(titleText));
  return s;
}

function sectionAbout() {
  const s = section("about", UI.about[lang]);
  t(CV.about).forEach((p) => s.appendChild(el("p", "about-p", p)));
  return s;
}

function sectionExperience() {
  const s = section("experience", UI.experience[lang]);
  const list = el("div", "timeline");
  CV.experience.forEach((job) => {
    const item = el("div", "job");

    const head = el("div", "job-head");
    const company = job.url
      ? `<a href="${job.url}" target="_blank" rel="noopener">${job.company}</a>`
      : job.company;
    const badge = job.current ? `<span class="badge">${UI.current[lang]}</span>` : "";
    head.innerHTML =
      `<div class="job-role">${t(job.role)} · <span class="job-company">${company}</span>${badge}</div>` +
      `<div class="job-meta">${t(job.period)}${job.location ? " · " + t(job.location) : ""}</div>`;
    item.appendChild(head);

    const ul = el("ul", "job-bullets");
    t(job.bullets).forEach((b) => ul.appendChild(el("li", null, b)));
    item.appendChild(ul);

    list.appendChild(item);
  });
  s.appendChild(list);
  return s;
}

function sectionSkills() {
  const s = section("skills", UI.skills[lang]);
  const grid = el("div", "skills-grid");
  t(CV.skills).forEach((g) => {
    const card = el("div", "skill-card");
    card.appendChild(el("h3", "skill-group", g.group));
    const tags = el("div", "tags");
    g.items.forEach((i) => tags.appendChild(el("span", "tag", i)));
    card.appendChild(tags);
    grid.appendChild(card);
  });
  s.appendChild(grid);
  return s;
}

// Educación + Formación + Idiomas en dos columnas
function sectionTwoCol() {
  const wrap = el("div", "two-col");

  const eduCol = el("div", "col");
  const eduSec = section("education", UI.education[lang]);
  CV.education.forEach((e) => {
    const item = el("div", "compact-item");
    item.innerHTML =
      `<div class="compact-title">${t(e.title)}</div>` +
      `<div class="compact-meta">${t(e.org)} · ${t(e.period)}</div>`;
    eduSec.appendChild(item);
  });
  // Idiomas debajo de educación
  const langSec = section("languages", UI.languages[lang]);
  const langWrap = el("div", "lang-list");
  CV.languages.forEach((l) => {
    langWrap.appendChild(el("span", "lang-pill", `${t(l.name)} — ${t(l.level)}`));
  });
  langSec.appendChild(langWrap);
  eduCol.appendChild(eduSec);
  eduCol.appendChild(langSec);

  const certCol = el("div", "col");
  const certSec = section("certifications", UI.certifications[lang]);
  CV.certifications.forEach((c) => {
    const item = el("div", "compact-item");
    item.innerHTML =
      `<div class="compact-title">${t(c.title)}</div>` +
      `<div class="compact-meta">${t(c.org)} · ${t(c.period)}</div>` +
      (c.detail ? `<div class="compact-detail">${t(c.detail)}</div>` : "");
    certSec.appendChild(item);
  });
  certCol.appendChild(certSec);

  wrap.appendChild(eduCol);
  wrap.appendChild(certCol);
  return wrap;
}

function setLang(next) {
  lang = next;
  localStorage.setItem(STORAGE_KEY, next);
  render();
}

// Eventos
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.addEventListener("click", () => setLang(b.dataset.lang));
  });
  document.getElementById("print-btn").addEventListener("click", () => window.print());
  document.getElementById("download-btn").addEventListener("click", downloadPDF);
  document.getElementById("theme-btn").addEventListener("click", () => {
    setTheme(theme === "dark" ? "light" : "dark");
  });
  applyTheme();
  render();
});
