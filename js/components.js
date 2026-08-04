/* ================================================================
   components.js — Shared Header, Footer, Floating Zalo Button,
   and a global image-fallback system.
   Edit the constants below to update these components on ALL pages
   at once. Each HTML page loads this file and injects the markup
   into #site-header / #site-footer, and appends the floating button
   to <body>.
   ================================================================ */

const SITE_INFO = {
  email: "novalabs10@gmail.com",
  khoaName: "Mr. Khoa",
  khoaPhone: "0989727191",
  khoaZaloLink: "https://zalo.me/84989727191",
  hungName: "Mr. Hùng",
  hungPhone: "0375255155",
  hungZaloLink: "https://zalo.me/84375255155",
};

const ZALO_ICON_SVG =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';

const EMAIL_ICON_SVG =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>';

const PHONE_ICON_SVG =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';

// NOTE: Logo <img> tags intentionally have NO inline onerror here — the
// global image-fallback system below (initImageFallbacks) handles them and
// swaps in a clean NovaLabs wordmark automatically if assets/logo.jpg is
// missing, so the logo never just "disappears".
const HEADER_HTML = `
<div class="top-bar">
  <div class="top-bar-inner">
    <a href="mailto:${SITE_INFO.email}" class="top-bar-item">${EMAIL_ICON_SVG}${SITE_INFO.email}</a>
    <span class="top-bar-sep">|</span>
    <a href="${SITE_INFO.khoaZaloLink}" target="_blank" rel="noopener" class="top-bar-item">${ZALO_ICON_SVG}Zalo: ${SITE_INFO.khoaName} (${SITE_INFO.khoaPhone})</a>
    <span class="top-bar-sep">|</span>
    <a href="${SITE_INFO.hungZaloLink}" target="_blank" rel="noopener" class="top-bar-item">${PHONE_ICON_SVG}${SITE_INFO.hungName} (${SITE_INFO.hungPhone})</a>
  </div>
</div>
<nav class="navbar">
  <div class="navbar-inner">
    <a href="index.html" class="logo">
      <img src="assets/logo.jpg" alt="NovaLabs Logo" class="logo-img">
      <span class="logo-text">Nova<span class="accent">Labs</span></span>
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html" data-page="home">Trang chủ</a></li>
      <li><a href="about.html" data-page="about">Giới thiệu</a></li>
      <li><a href="projects.html" data-page="projects">Dự án</a></li>
      <li><a href="services.html" data-page="services">Dịch vụ</a></li>
      <li><a href="contact.html" data-page="contact" class="nav-cta">Liên hệ</a></li>
    </ul>
    <div class="hamburger" id="hamburger"><span></span><span></span><span></span></div>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="index.html" class="logo">
          <img src="assets/logo.jpg" alt="NovaLabs" class="logo-img">
        </a>
        <p>NovaLabs là phòng thí nghiệm robotics do sinh viên vận hành, trực thuộc Trường Đại học Bách Khoa - ĐHQG TP.HCM. Chúng tôi phát triển các dự án mã nguồn mở trong lĩnh vực Robot di động, Hệ thống nhúng, Điều khiển và Tự động hóa.</p>
        <div class="footer-tags">
          <span class="footer-tag">Mobile Robotics</span>
          <span class="footer-tag">Embedded Systems</span>
          <span class="footer-tag">Control</span>
          <span class="footer-tag">Automation</span>
        </div>
      </div>
      <div class="footer-col">
        <h5>Địa chỉ</h5>
        <p><strong style="color:#fff">Cơ sở 1:</strong> Tòa nhà H1, Đường Tạ Quang Bửu, Khu phố 33, Phường Đông Hòa, TP.HCM</p>
        <p><strong style="color:#fff">Cơ sở 2:</strong> Bách Khoa Cơ sở 2, Khu phố Tân Lập, Phường Đông Hòa, TP.HCM</p>
      </div>
      <div class="footer-col">
        <h5>Liên hệ</h5>
        <a href="mailto:${SITE_INFO.email}">${SITE_INFO.email}</a>
        <a href="${SITE_INFO.khoaZaloLink}" target="_blank" rel="noopener">Zalo ${SITE_INFO.khoaName} — ${SITE_INFO.khoaPhone}</a>
        <a href="${SITE_INFO.hungZaloLink}" target="_blank" rel="noopener">Zalo ${SITE_INFO.hungName} — ${SITE_INFO.hungPhone}</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 <span class="red">NovaLabs</span>. All rights reserved.</span>
      <span>HCMUT · Mobile Robotics · Embedded Systems · Control · Automation</span>
    </div>
  </div>
</footer>
`;

const FLOATING_BTN_HTML = `
<a href="${SITE_INFO.khoaZaloLink}" target="_blank" rel="noopener" class="floating-zalo" aria-label="Chat Zalo Mr. Khoa" title="Chat Zalo Mr. Khoa">${ZALO_ICON_SVG}</a>
`;

function renderLayout() {
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");
  if (headerEl) headerEl.innerHTML = HEADER_HTML;
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;
  document.body.insertAdjacentHTML("beforeend", FLOATING_BTN_HTML);
  highlightActiveNav();
  initMobileMenu();
}

function highlightActiveNav() {
  const page = document.body.getAttribute("data-page");
  document.querySelectorAll(".nav-links a[data-page]").forEach((a) => {
    if (a.getAttribute("data-page") === page) a.classList.add("active");
  });
}

function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  if (!hamburger || !navLinks) return;
  hamburger.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );
}

/* ================================================================
   GLOBAL IMAGE FALLBACK SYSTEM
   ----------------------------------------------------------------
   Every <img> on every page (logo, hero background, project photos,
   service photos, etc.) is covered automatically — no per-image
   markup is required on any page. If a real file is missing, this
   generates a clean inline placeholder graphic instead of showing a
   broken-image icon, so the site never looks broken.

   Uses the 'error' event in the CAPTURING phase on `document`, which
   fires for every <img> on the page (img error events do not bubble,
   but capturing still reaches them) — this runs before any other
   handler and needs no changes to about.html / contact.html /
   projects.html / services.html.

   To restore real images: just add the real files with the EXACT
   filenames referenced in each page (see assets/, project/, service/
   folders and README.md) — no code changes needed, the real image
   will simply load instead of the placeholder.
   ================================================================ */

function svgToDataUri(svg) {
  return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
}

function makeLogoDataUri(onDark, withText) {
  const red = "#C8102E";
  const textColor = onDark ? "#ffffff" : "#20242A";
  const textPart = withText
    ? `<text x="64" y="37" font-family="Segoe UI, Arial, sans-serif" font-size="26" font-weight="800" fill="${textColor}">Nova<tspan fill="${red}">Labs</tspan></text>`
    : "";
  const svgWidth = withText ? 180 : 58;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="60" viewBox="0 0 ${svgWidth} 60">
    <g transform="translate(4,4)">
      <path d="M26 0 50 13v26L26 52 2 39V13z" fill="${red}"/>
      <circle cx="26" cy="26" r="9" fill="#ffffff"/>
      <circle cx="26" cy="26" r="3.2" fill="${red}"/>
      <path d="M26 16v-5M26 41v-5M16 26h-5M41 26h-5" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round"/>
    </g>
    ${textPart}
  </svg>`;
  return svgToDataUri(svg);
}

function makeHeroBgDataUri() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
    <defs>
      <radialGradient id="r1" cx="20%" cy="20%" r="55%"><stop offset="0" stop-color="#C8102E" stop-opacity=".38"/><stop offset="1" stop-color="#C8102E" stop-opacity="0"/></radialGradient>
      <radialGradient id="r2" cx="85%" cy="80%" r="50%"><stop offset="0" stop-color="#C8102E" stop-opacity=".28"/><stop offset="1" stop-color="#C8102E" stop-opacity="0"/></radialGradient>
      <linearGradient id="base" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#171a1f"/><stop offset=".55" stop-color="#20242A"/><stop offset="1" stop-color="#2b1416"/></linearGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#base)"/>
    <rect width="1600" height="900" fill="url(#r1)"/>
    <rect width="1600" height="900" fill="url(#r2)"/>
  </svg>`;
  return svgToDataUri(svg);
}

function makePlaceholderDataUri(label) {
  const w = 400, h = 300;
  const safe = String(label).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const short = safe.length > 40 ? "…" + safe.slice(-38) : safe;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#EDEEF0"/><stop offset="1" stop-color="#DADDE1"/></linearGradient></defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    <g transform="translate(${w / 2 - 16},${h / 2 - 30})" fill="none" stroke="#9CA3AF" stroke-width="1.8">
      <rect x="0" y="0" width="32" height="32" rx="4"/>
      <circle cx="9.5" cy="9.5" r="2.4" fill="#9CA3AF" stroke="none"/>
      <path d="M2 24l7.5-7.5 5.5 5.5 6.5-6.5 8.5 8.5"/>
    </g>
    <text x="${w / 2}" y="${h / 2 + 36}" font-family="Menlo, Consolas, monospace" font-size="11" fill="#9CA3AF" text-anchor="middle">${short}</text>
  </svg>`;
  return svgToDataUri(svg);
}

function initImageFallbacks() {
  document.addEventListener(
    "error",
    function (e) {
      const img = e.target;
      if (!img || img.tagName !== "IMG" || img.dataset.fallbackApplied) return;
      const src = img.getAttribute("src") || "";
      img.dataset.fallbackApplied = "1";
      img.dataset.originalSrc = src;
      if (img.classList.contains("logo-img") || /logo\.jpg/i.test(src)) {
        const inFooter = !!img.closest("footer");
        // Header already shows a separate "NovaLabs" text label next to the
        // logo mark, so its fallback image is icon-only. Footer has no
        // separate text label, so its fallback bakes the wordmark into the image.
        img.src = makeLogoDataUri(inFooter, inFooter);
        img.classList.add("img-is-fallback");
        return;
      }
      if (/hcmut_background/i.test(src)) {
        img.src = makeHeroBgDataUri();
        img.classList.add("img-is-fallback");
        return;
      }
      img.src = makePlaceholderDataUri(src);
      img.classList.add("img-is-fallback");
    },
    true
  );
}

initImageFallbacks();
document.addEventListener("DOMContentLoaded", renderLayout);
