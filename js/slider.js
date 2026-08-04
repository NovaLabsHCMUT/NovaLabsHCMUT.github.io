/* ================================================================
   slider.js — Reusable Image Slider / Carousel Components
   Two systems:
   1) Auto Slider   — fade + dots only, auto-rotates (compact cards)
   2) Manual Slider — sliding track, prev/next arrows + dots + swipe
   Plus a shared Lightbox for full-size image preview.
   ================================================================ */

/* ---------- AUTO SLIDER (fade + dots, auto-rotate) ---------- */
const autoSliders = {};

function initAutoSlider(wrapId, dotsId) {
  const wrap = document.getElementById(wrapId);
  if (!wrap) return;
  const imgs = wrap.querySelectorAll("img");
  if (imgs.length <= 1) return;
  autoSliders[wrapId] = { imgs, current: 0 };
  if (dotsId) {
    const dotsEl = document.getElementById(dotsId);
    if (dotsEl) {
      imgs.forEach((_, i) => {
        const dot = document.createElement("span");
        if (i === 0) dot.className = "active";
        dot.addEventListener("click", () => setAutoSlide(wrapId, dotsId, i));
        dotsEl.appendChild(dot);
      });
    }
  }
  setInterval(() => {
    const s = autoSliders[wrapId];
    setAutoSlide(wrapId, dotsId, (s.current + 1) % s.imgs.length);
  }, 3000 + Math.random() * 1000);
}

function setAutoSlide(wrapId, dotsId, idx) {
  const s = autoSliders[wrapId];
  if (!s) return;
  s.imgs[s.current].classList.remove("active");
  s.current = idx;
  s.imgs[s.current].classList.add("active");
  if (dotsId) {
    document
      .querySelectorAll("#" + dotsId + " span")
      .forEach((d, i) => d.classList.toggle("active", i === idx));
  }
}

/* ---------- MANUAL SLIDER (track translate, arrows + dots + swipe) ---------- */
const manualSliders = {};

function initManualSlider(id, count) {
  manualSliders[id] = { current: 0, total: count };
  const dotsEl = document.getElementById("dots-" + id);
  if (dotsEl && count > 1) {
    for (let i = 0; i < count; i++) {
      const dot = document.createElement("span");
      if (i === 0) dot.className = "active";
      dot.addEventListener("click", () => goToSlide(id, i));
      dotsEl.appendChild(dot);
    }
  }
  if (count > 1) addSwipe(id);
}

function slide(id, dir) {
  const s = manualSliders[id];
  if (!s) return;
  goToSlide(id, (s.current + dir + s.total) % s.total);
}

function goToSlide(id, idx) {
  const s = manualSliders[id];
  if (!s) return;
  s.current = idx;
  const track = document.getElementById("track-" + id);
  if (track) track.style.transform = `translateX(-${idx * 100}%)`;
  document
    .querySelectorAll("#dots-" + id + " span")
    .forEach((d, i) => d.classList.toggle("active", i === idx));
}

function addSwipe(id) {
  const el = document.getElementById("track-" + id);
  if (!el) return;
  let startX = 0;
  el.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
    },
    { passive: true }
  );
  el.addEventListener("touchend", (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) slide(id, diff > 0 ? 1 : -1);
  });
}

/* ---------- LIGHTBOX ---------- */
function openLightbox(src) {
  const img = document.getElementById("lightbox-img");
  const lb = document.getElementById("lightbox");
  if (!img || !lb) return;
  img.src = src;
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
