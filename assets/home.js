// Moontasia — strona główna: gwiazdy, talia rozkładana przy przewijaniu, faza Księżyca

// ---------- faza Księżyca (wspólna dla księżyca w hero i sekcji „Księżyc dziś”) ----------
const MOON = (function () {
  const SYN = 29.530588853;
  const REF = Date.UTC(2000, 0, 6, 18, 14); // nów 6 stycznia 2000
  const now = Date.now();
  const age = (((now - REF) / 86400000) % SYN + SYN) % SYN;
  const frac = age / SYN;
  const illum = (1 - Math.cos(2 * Math.PI * frac)) / 2;
  // ścieżka oświetlonej części tarczy o promieniu R (środek w 0,0)
  function litPath(R) {
    const waxing = frac < 0.5;
    const rx = Math.abs(Math.cos(2 * Math.PI * frac)) * R;
    const outer = waxing ? 1 : 0;                 // przy przybywaniu jasna jest prawa strona
    const inner = (illum > 0.5) === waxing ? 1 : 0;
    return `M0 ${-R} A${R} ${R} 0 0 ${outer} 0 ${R} A${rx} ${R} 0 0 ${inner} 0 ${-R}Z`;
  }
  return { SYN, age, frac, illum, now, litPath };
})();
document.querySelectorAll("svg .lit").forEach(p => p.setAttribute("d", MOON.litPath(80)));

// ---------- hero ----------
(function () {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hero = document.getElementById("hero");
  const stage = hero.querySelector(".stage");
  const cards = [...hero.querySelectorAll(".tcard")];
  const caps = [...hero.querySelectorAll(".caption")];
  const hint = hero.querySelector(".scroll-hint");
  const zodiac = hero.querySelector(".zodiac");
  const moon = hero.querySelector(".moon");
  const N = cards.length, MID = (N - 1) / 2;
  const FLIP = [MID - 1, MID, MID + 1];

  // gwiazdy
  const canvas = hero.querySelector(".stars");
  const ctx = canvas.getContext("2d");
  let stars = [];
  let fanDeg = 9;
  function makeStars() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = stage.clientWidth * dpr;
    canvas.height = stage.clientHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(stage.clientWidth * stage.clientHeight / 5200);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * stage.clientWidth, y: Math.random() * stage.clientHeight,
      r: Math.random() * 1.3 + 0.3, a: Math.random() * Math.PI * 2, s: 0.6 + Math.random() * 1.6,
    }));
  }
  function drawStars(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const st of stars) {
      ctx.globalAlpha = reduced ? 0.7 : 0.35 + 0.65 * Math.abs(Math.sin(st.a + t * 0.0006 * st.s));
      ctx.fillStyle = st.r > 1.2 ? "#f3dff3" : "#ffffff";
      ctx.beginPath(); ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2); ctx.fill();
    }
  }

  // układ: koło zodiaku w środku, napisy w górnej części koła, talia w dolnej
  function fit() {
    const W = stage.clientWidth, H = stage.clientHeight;
    const mobile = W < 640;
    const D = Math.min(H * 0.94, 820, mobile ? Math.max(W * 1.15, H * 0.72) : W);
    const cy = H * 0.5;
    const s = Math.max(0.42, Math.min(D / 760, W / (mobile ? 720 : 620), 1.1));
    fanDeg = mobile ? 7.5 : 8;
    const st = stage.style;
    st.setProperty("--d", `${D}px`);
    st.setProperty("--cy", `${cy}px`);
    st.setProperty("--cap-top", `${cy - D * (mobile ? 0.38 : 0.32)}px`);
    st.setProperty("--cap-w", `${Math.max(D * 0.72, Math.min(W - 32, 360))}px`);
    st.setProperty("--deck-y", `${cy + D * (mobile ? 0.24 : 0.21)}px`);
    st.setProperty("--s", s.toFixed(3));
    makeStars();
  }

  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const ease = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  const easeOut = t => 1 - Math.pow(1 - t, 2.2);
  const seg = (p, a, b) => ease(clamp((p - a) / (b - a)));
  const segOut = (p, a, b) => easeOut(clamp((p - a) / (b - a)));

  let progress = 0, over = 0, idle = 0;
  function render() {
    const p = progress;
    const fan = segOut(p, 0, 0.45);
    const lift = segOut(p, 0, 0.4);
    const float = reduced ? 0 : Math.sin(idle) * 4 * (1 - fan);

    cards.forEach((c, i) => {
      const off = i - MID;
      const angle = off * fanDeg * fan;
      const stackX = off * 0.8 * (1 - fan), stackY = -off * 0.6 * (1 - fan);
      const k = FLIP.indexOf(i);
      const flip = k >= 0 ? seg(p, 0.38 + k * 0.05, 0.56 + k * 0.05) : 0;
      const pop = k >= 0 ? -22 * seg(p, 0.36, 0.5) : 0;
      c.style.transform = `translate(${stackX}px, ${stackY - 30 * lift + float + pop}px) rotate(${angle}deg) rotateY(${180 * flip}deg)`;
    });
    stage.style.setProperty("--deck-shadow", (1 - fan).toFixed(2));

    if (zodiac) zodiac.style.transform = `translate(-50%,-50%) rotate(${p * 50 + (reduced ? 0 : idle * 2)}deg)`;
    if (moon) moon.style.transform = `translateY(${p * 30}px)`;

    // pierwszy napis zostaje do połowy animacji i płynnie przechodzi w drugi (bez pustej chwili)
    const x = ease(clamp((p - 0.38) / 0.07));
    const o0 = 1 - x, o2 = x;
    const drop = 50 * seg(p, 0.66, 1);   // ostatni napis wyraźnie opada pod koniec
    // gdy scena odjeżdża w górę, napis jeszcze chwilę podąża za ekranem, potem znika
    const trail = Math.min(over, 320) * 0.75;
    const trailFade = 1 - clamp((over - 170) / 130);
    caps[1].style.setProperty("--veil", clamp(over / 90).toFixed(2));
    if (hint) hint.style.opacity = 1 - seg(p, 0, 0.06);
    caps[0].style.opacity = o0;
    caps[0].style.transform = `translateY(${-x * 30}px)`;
    caps[0].style.visibility = o0 < 0.02 ? "hidden" : "visible";
    caps[1].style.opacity = o2 * trailFade;
    caps[1].style.transform = `translateY(${(1 - x) * 30 + drop + trail}px)`;
    caps[1].style.visibility = o2 * trailFade < 0.02 ? "hidden" : "visible";
  }

  function onScroll() {
    // scena przykleja się pod menu, więc liczymy od miejsca przyklejenia
    const stickTop = parseFloat(getComputedStyle(stage).top) || 0;
    const r = hero.getBoundingClientRect();
    const total = hero.offsetHeight - stage.offsetHeight;
    const passed = stickTop - r.top;
    progress = total > 0 ? clamp(passed / total) : 1;
    over = Math.max(0, passed - total);   // ile przewinięto za koniec animacji
  }

  function loop(t) {
    idle = t / 900;
    drawStars(t);
    render();
    requestAnimationFrame(loop);
  }
  let queued = false;
  function renderOnce() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; render(); });
  }

  // przewijanie zawsze steruje talią; ograniczony ruch wyłącza tylko unoszenie i migotanie
  window.addEventListener("scroll", () => { onScroll(); if (reduced) renderOnce(); }, { passive: true });
  window.addEventListener("resize", () => { fit(); onScroll(); if (reduced) { drawStars(0); renderOnce(); } });
  fit(); onScroll();
  if (reduced) { drawStars(0); render(); } else requestAnimationFrame(loop);
})();

// ---------- sekcja „Księżyc dziś” ----------
(function () {
  const box = document.getElementById("ksiezyc");
  if (!box) return;
  const { SYN, age, illum, now } = MOON;
  const PHASES = [
    [1.84, "Nów", "Czas ciszy i nowych początków. Zapisz intencje na najbliższy cykl i zastanów się, co chcesz w swoim życiu zasiać."],
    [5.54, "Przybywający sierp", "Energia rośnie. Zrób pierwszy mały krok w stronę intencji z nowiu i nie oczekuj od razu efektów."],
    [9.23, "Pierwsza kwadra", "Moment próby i decyzji. Gdy pojawiają się przeszkody, to znak, że warto doprecyzować plan, a nie się poddawać."],
    [12.92, "Przybywający garb", "Dopracowywanie i cierpliwość. Popraw szczegóły i przygotuj się na kulminację."],
    [16.61, "Pełnia", "Kulminacja, emocje i jasność. Dobry czas na podsumowania, wdzięczność i odczyt tarota o tym, co już dojrzało."],
    [20.30, "Ubywający garb", "Czas dzielenia się tym, czego się nauczyłaś lub nauczyłeś. Podziękuj i zobacz, co przyniósł ten cykl."],
    [23.99, "Ostatnia kwadra", "Porządki i odpuszczanie. Zastanów się, czego nie chcesz zabierać do kolejnego cyklu."],
    [27.68, "Ubywający sierp", "Wyciszenie i odpoczynek przed nowiem. Zwolnij, śpij dłużej, słuchaj intuicji."],
    [SYN + 1, "Nów", "Czas ciszy i nowych początków. Zapisz intencje na najbliższy cykl i zastanów się, co chcesz w swoim życiu zasiać."],
  ];
  const ph = PHASES.find(x => age < x[0]);
  const fmt = d => d.toLocaleDateString("pl-PL", { day: "numeric", month: "long" });
  const daysTo = target => ((target - age) % SYN + SYN) % SYN || SYN;
  const nextFull = new Date(now + daysTo(SYN / 2) * 86400000);
  const nextNew = new Date(now + daysTo(0) * 86400000);

  box.querySelector(".phase-name").textContent = ph[1];
  box.querySelector(".phase-meta").textContent = `Oświetlenie tarczy: ${Math.round(illum * 100)}% · ${Math.floor(age) + 1}. dzień cyklu księżycowego`;
  box.querySelector(".phase-tip").textContent = ph[2];
  box.querySelector(".phase-next").innerHTML =
    `<li>○ Najbliższa pełnia: <b>${fmt(nextFull)}</b></li><li>● Najbliższy nów: <b>${fmt(nextNew)}</b></li>`;
})();
