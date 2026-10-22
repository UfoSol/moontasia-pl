// Moontasia — strona główna: gwiazdy, talia rozkładana przy przewijaniu, faza Księżyca
(function () {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hero = document.getElementById("hero");
  const stage = hero.querySelector(".stage");
  const scene = hero.querySelector(".scene");
  const cards = [...hero.querySelectorAll(".tcard")];
  const handsL = hero.querySelectorAll(".hand-l");
  const handsR = hero.querySelectorAll(".hand-r");
  const caps = [...hero.querySelectorAll(".caption")];
  const zodiac = hero.querySelector(".zodiac");
  const moon = hero.querySelector(".moon");
  const N = cards.length, MID = (N - 1) / 2;
  const FLIP = [MID - 1, MID, MID + 1];

  // ---------- gwiazdy ----------
  const canvas = hero.querySelector(".stars");
  const ctx = canvas.getContext("2d");
  let stars = [];
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
      const o = reduced ? 0.7 : 0.35 + 0.65 * Math.abs(Math.sin(st.a + t * 0.0006 * st.s));
      ctx.globalAlpha = o;
      ctx.fillStyle = st.r > 1.2 ? "#f3dff3" : "#ffffff";
      ctx.beginPath(); ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2); ctx.fill();
    }
  }

  // ---------- skalowanie sceny ----------
  function fit() {
    const capH = Math.min(stage.clientHeight * 0.34, 260);
    const s = Math.min(stage.clientWidth / (stage.clientWidth < 640 ? 600 : 760), (stage.clientHeight - capH) / 560, 1.25);
    scene.style.setProperty("--s", s.toFixed(3));
    makeStars();
  }

  // ---------- animacja ----------
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const ease = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  const seg = (p, a, b) => ease(clamp((p - a) / (b - a)));

  let progress = reduced ? 1 : 0, idle = 0;
  function render() {
    const p = progress;
    const fan = seg(p, 0.12, 0.55);        // rozkładanie wachlarza
    const handsOut = seg(p, 0.08, 0.5);    // dłonie odsuwają się
    const lift = seg(p, 0.1, 0.45);

    handsL.forEach(h => {
      h.style.transform = `translate(${-170 * handsOut}px, ${210 * handsOut}px) rotate(${-10 * handsOut}deg)`;
      h.style.opacity = 1 - 0.85 * handsOut;
    });
    handsR.forEach(h => {
      h.style.transform = `translate(${170 * handsOut}px, ${210 * handsOut}px) rotate(${10 * handsOut}deg)`;
      h.style.opacity = 1 - 0.85 * handsOut;
    });

    const float = reduced ? 0 : Math.sin(idle) * 4 * (1 - fan);
    cards.forEach((c, i) => {
      const off = i - MID;
      const angle = off * 11 * fan;
      const stackX = off * 0.8 * (1 - fan), stackY = -off * 0.6 * (1 - fan);
      const k = FLIP.indexOf(i);
      const flip = k >= 0 ? seg(p, 0.6 + k * 0.08, 0.72 + k * 0.08) : 0;
      const pop = k >= 0 ? -26 * seg(p, 0.58, 0.7) : 0;
      c.style.transform = `translate(${stackX}px, ${stackY - 70 * lift + float + pop}px) rotate(${angle}deg) rotateY(${180 * flip}deg)`;
    });

    if (zodiac) zodiac.style.transform = `translate(-50%,-50%) rotate(${p * 70 + idle * 2}deg)`;
    if (moon) moon.style.transform = `translateY(${p * 60}px)`;

    const o0 = 1 - seg(p, 0.06, 0.2);
    const o1 = seg(p, 0.22, 0.32) * (1 - seg(p, 0.5, 0.6));
    const o2 = seg(p, 0.7, 0.82);
    [o0, o1, o2].forEach((o, i) => {
      caps[i].style.opacity = o;
      caps[i].style.transform = `translateY(${(1 - o) * 12}px)`;
      caps[i].style.visibility = o < 0.02 ? "hidden" : "visible";
    });
  }

  function onScroll() {
    if (reduced) return;
    const r = hero.getBoundingClientRect();
    const total = hero.offsetHeight - stage.offsetHeight;
    progress = clamp(-r.top / total);
  }

  let last = 0;
  function loop(t) {
    idle = t / 900;
    if (t - last > 33 || !reduced) { drawStars(t); last = t; }
    render();
    if (!reduced) requestAnimationFrame(loop);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => { fit(); onScroll(); });
  fit(); onScroll();
  if (reduced) { drawStars(0); render(); } else requestAnimationFrame(loop);
})();

// ---------- faza Księżyca ----------
(function () {
  const box = document.getElementById("ksiezyc");
  if (!box) return;
  const SYN = 29.530588853;
  const REF = Date.UTC(2000, 0, 6, 18, 14); // nów 6 stycznia 2000
  const now = Date.now();
  const age = (((now - REF) / 86400000) % SYN + SYN) % SYN;
  const frac = age / SYN;
  const illum = (1 - Math.cos(2 * Math.PI * frac)) / 2;

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

  // rysowanie oświetlonej części tarczy
  const R = 80, lit = box.querySelector(".lit");
  const waxing = frac < 0.5;
  const rx = Math.abs(Math.cos(2 * Math.PI * frac)) * R;
  const outerSweep = waxing ? 1 : 0;           // jasna krawędź po prawej przy przybywaniu
  const innerSweep = (illum > 0.5) === waxing ? 1 : 0;
  lit.setAttribute("d", `M0 ${-R} A${R} ${R} 0 0 ${outerSweep} 0 ${R} A${rx} ${R} 0 0 ${innerSweep} 0 ${-R}Z`);

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
