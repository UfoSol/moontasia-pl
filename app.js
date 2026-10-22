/* ============================================================
   Tarot Apka — logika aplikacji
   ============================================================ */

const IMG_DIR = "/";

// lekkie obrazki WebP: "s" miniatury (okno wyboru), "m" karty w rozkładzie
function cardImg(file, size) {
  return IMG_DIR + file.replace("karty/", `karty/${size}/`).replace(/\.svg$/, ".webp");
}

// stan wylosowanych kart, osobno dla każdego rozkładu
const state = {
  three: { left: null, right: null, top: null },
  five: { center: null, left: null, right: null, above: null, below: null },
  one: { single: null },
  day: { single: null },
};

let activeSpread = null;
let activePos = null; // pozycja aktualnie edytowana w modalu

// ---------- pomocnicze ----------

function cardByEn(en) {
  return CARDS.find(c => c.en === en);
}

function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getCardMeaning(spread, pos) {
  const val = state[spread][pos];
  return MEANINGS[val.en][val.reversed ? "reversed" : "upright"];
}

// każdy rozkład ma własną stronę; na stronie jest tylko jego panel
function hasSpread(spread) {
  return !!document.getElementById(`panel-${spread}`);
}

function on(id, event, fn) {
  const el = document.getElementById(id);
  if (el) el.addEventListener(event, fn);
}

// ---------- render slotów ----------

function renderSlot(spread, pos) {
  const frame = document.querySelector(`.card-frame[data-spread="${spread}"][data-pos="${pos}"]`);
  const nameEl = document.querySelector(`.slot[data-spread="${spread}"][data-pos="${pos}"] .card-name`);
  const toggle = document.querySelector(`.reverse-toggle input[data-spread="${spread}"][data-pos="${pos}"]`);
  const toggleLabel = toggle.closest(".reverse-toggle");
  const clearBtn = document.querySelector(`.clear-btn[data-spread="${spread}"][data-pos="${pos}"]`);

  const val = state[spread][pos];

  if (!val) {
    frame.classList.remove("filled");
    frame.innerHTML = `<span class="placeholder">Kliknij, aby wybrać kartę</span>`;
    nameEl.innerHTML = "";
    toggle.checked = false;
    toggle.disabled = true;
    toggleLabel.classList.add("disabled");
    clearBtn.style.display = "none";
    updateGenerateButton(spread);
    return;
  }

  const card = cardByEn(val.en);
  frame.classList.add("filled");
  frame.innerHTML = `<img src="${cardImg(card.file, "m")}" alt="${card.pl}" class="${val.reversed ? 'reversed' : ''}" style="background:url(${cardImg(card.file, "s")}) center/contain no-repeat" decoding="async">`;
  nameEl.innerHTML = `${card.pl} ${val.reversed ? '<span class="ori">(odwrócona)</span>' : ''}`;
  toggle.checked = val.reversed;
  toggle.disabled = false;
  toggleLabel.classList.remove("disabled");
  clearBtn.style.display = "inline-block";

  updateGenerateButton(spread);
}

function renderAllSlots() {
  Object.keys(state).filter(hasSpread).forEach(spread => {
    Object.keys(state[spread]).forEach(pos => renderSlot(spread, pos));
  });
}

function updateGenerateButton(spread) {
  const btn = document.getElementById(`generateBtn-${spread}`);
  const values = Object.values(state[spread]);
  const filled = values.filter(v => v !== null).length;
  btn.disabled = filled < values.length;
  const progress = document.getElementById(`progress-${spread}`);
  if (progress) {
    progress.textContent = filled === values.length
      ? "Wszystkie karty wybrane. Możesz odczytać rozkład."
      : values.length > 1 ? `Wybrane karty: ${filled} z ${values.length}` : "";
  }
}

// ---------- pytanie widoczne nad kartami ----------

function updateTableQuestion(spread) {
  const box = document.querySelector(`.table-question[data-spread="${spread}"]`);
  const input = document.getElementById(`question-${spread}`);
  if (!box || !input) return;
  const q = input.value.trim();
  box.classList.toggle("empty", !q);
  box.textContent = q ? `„${q}”` : box.dataset.empty;
}

document.querySelectorAll(".table-question").forEach(box => {
  const spread = box.dataset.spread;
  box.dataset.empty = box.textContent.trim();
  const input = document.getElementById(`question-${spread}`);
  if (input) input.addEventListener("input", () => updateTableQuestion(spread));
});

document.querySelectorAll(".question-chips button").forEach(chip => {
  chip.addEventListener("click", () => {
    const spread = chip.closest(".question-chips").dataset.spread;
    const input = document.getElementById(`question-${spread}`);
    input.value = chip.dataset.q || chip.textContent;
    updateTableQuestion(spread);
    input.focus();
  });
});

// ---------- losowanie kart ----------

function drawCards(spread) {
  const allowReversed = document.querySelector(`[data-allow-reversed="${spread}"]`);
  const reversedOk = allowReversed ? allowReversed.checked : true;
  const deck = CARDS.map(c => c.en);
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  Object.keys(state[spread]).forEach((pos, idx) => {
    state[spread][pos] = { en: deck[idx], reversed: reversedOk && Math.random() < 0.3 };
    renderSlot(spread, pos);
    const frame = document.querySelector(`.card-frame[data-spread="${spread}"][data-pos="${pos}"]`);
    frame.classList.remove("dealt");
    void frame.offsetWidth;
    frame.style.animationDelay = `${idx * 0.12}s`;
    frame.classList.add("dealt");
  });
  hideResults(spread);
}

function hideResults(spread) {
  const results = document.getElementById(`results-${spread}`);
  if (results) results.style.display = "none";
}

function resetSpread(spread) {
  Object.keys(state[spread]).forEach(pos => {
    state[spread][pos] = null;
    renderSlot(spread, pos);
  });
  const input = document.getElementById(`question-${spread}`);
  if (input) input.value = "";
  updateTableQuestion(spread);
  hideResults(spread);
  const status = document.getElementById(`saveStatus-${spread}`);
  if (status) status.textContent = "";
  const anchor = document.getElementById("rozklad");
  if (anchor) anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  if (input) input.focus({ preventScroll: true });
}

document.querySelectorAll("[data-draw]").forEach(btn => {
  btn.addEventListener("click", () => drawCards(btn.dataset.draw));
});
document.querySelectorAll("[data-reset]").forEach(btn => {
  btn.addEventListener("click", () => resetSpread(btn.dataset.reset));
});

// ---------- modal wyboru karty ----------

const modalBackdrop = document.getElementById("modalBackdrop");
const cardGrid = document.getElementById("cardGrid");
const modalSearch = document.getElementById("modalSearch");
const suitTabs = document.getElementById("suitTabs");
let currentSuitFilter = "all";

function openModal(spread, pos) {
  activeSpread = spread;
  activePos = pos;
  currentSuitFilter = "all";
  modalSearch.value = "";
  suitTabs.querySelectorAll("button").forEach(b => b.classList.toggle("active", b.dataset.suit === "all"));
  renderCardGrid();
  modalBackdrop.classList.add("open");
}

function closeModal() {
  modalBackdrop.classList.remove("open");
  activeSpread = null;
  activePos = null;
}

function renderCardGrid() {
  const q = modalSearch.value.trim().toLowerCase();
  cardGrid.innerHTML = "";
  const filtered = CARDS.filter(c => {
    const suitOk = currentSuitFilter === "all" || c.suit === currentSuitFilter;
    const searchOk = !q || c.pl.toLowerCase().includes(q) || c.en.toLowerCase().includes(q);
    return suitOk && searchOk;
  });
  filtered.forEach(c => {
    const item = document.createElement("div");
    item.className = "grid-item";
    item.innerHTML = `<img src="${cardImg(c.file, "s")}" alt="${c.pl}" loading="lazy" decoding="async" width="90" height="158"><div class="gi-name">${c.pl}</div>`;
    item.addEventListener("click", () => selectCard(c.en));
    cardGrid.appendChild(item);
  });
  if (filtered.length === 0) {
    cardGrid.innerHTML = `<div style="grid-column:1/-1;color:var(--text-dim);text-align:center;padding:20px;">Brak wyników.</div>`;
  }
}

function selectCard(en) {
  if (!activeSpread || !activePos) return;
  const existing = state[activeSpread][activePos];
  const existingReversed = existing ? existing.reversed : false;
  state[activeSpread][activePos] = { en, reversed: existingReversed };
  renderSlot(activeSpread, activePos);
  closeModal();
}

// ---------- event listeners: sloty ----------

document.querySelectorAll(".card-frame").forEach(frame => {
  frame.addEventListener("click", () => openModal(frame.dataset.spread, frame.dataset.pos));
});

document.querySelectorAll(".reverse-toggle input").forEach(inp => {
  inp.addEventListener("change", (e) => {
    const spread = e.target.dataset.spread;
    const pos = e.target.dataset.pos;
    if (state[spread][pos]) {
      state[spread][pos].reversed = e.target.checked;
      renderSlot(spread, pos);
    }
  });
});

document.querySelectorAll(".clear-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const spread = e.target.dataset.spread;
    const pos = e.target.dataset.pos;
    state[spread][pos] = null;
    renderSlot(spread, pos);
    hideResults(spread);
  });
});

document.getElementById("modalClose").addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) closeModal();
});
modalSearch.addEventListener("input", renderCardGrid);
suitTabs.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentSuitFilter = btn.dataset.suit;
    suitTabs.querySelectorAll("button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCardGrid();
  });
});

// ============================================================
//  ROZKŁAD NA 3 KARTY
// ============================================================

const POSITION_LABELS_A3 = { left: "Przeszłość", right: "Teraźniejszość", top: "Przyszłość" };
const POSITION_LABELS_B3 = { left: "Sytuacja", right: "Przeszkoda", top: "Rozwiązanie" };
const POSITION_ORDER_3 = ["left", "right", "top"];

function buildParagraphA3(pos, m) {
  if (pos === "left") return `W przeszłości: ${m.meaning}`;
  if (pos === "right") return `Obecnie: ${m.meaning}`;
  return `W przyszłości: ${m.meaning}`;
}

function buildParagraphB3(pos, m) {
  if (pos === "left") return `Sytuacja, w jakiej się teraz znajdujesz: ${m.meaning}`;
  if (pos === "right") return `Przeszkoda: ${capitalize(m.obstacle)}`;
  return `Rozwiązanie: ${capitalize(m.solution)}`;
}

function renderSpreadThree(containerId, labels, paragraphFn) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  POSITION_ORDER_3.forEach((pos, idx) => {
    const val = state.three[pos];
    const card = cardByEn(val.en);
    const m = getCardMeaning("three", pos);
    const div = document.createElement("div");
    div.className = "card-interp";
    div.innerHTML = `
      <div class="ci-title">Karta ${idx + 1}: ${labels[pos]} — ${card.pl}
        <span class="ori-tag">${val.reversed ? "(odwrócona)" : "(prosta)"}</span>
      </div>
      <p>${capitalize(paragraphFn(pos, m))}</p>
    `;
    container.appendChild(div);
  });
  return container;
}

function synthesisA3() {
  const kw1 = getCardMeaning("three", "left").keyword;
  const kw2 = getCardMeaning("three", "right").keyword;
  const kw3 = getCardMeaning("three", "top").keyword;
  const reversedCount = POSITION_ORDER_3.filter(p => state.three[p].reversed).length;

  let tone;
  if (reversedCount === 0) tone = "Wszystkie karty leżą prosto, co sugeruje, że energie opisywane przez ten rozkład działają dość otwarcie i bezpośrednio — bez większych blokad w tle.";
  else if (reversedCount === 3) tone = "Wszystkie trzy karty są odwrócone, co wskazuje na tematy wymagające pracy wewnętrznej, spowolnienia lub ponownego przemyślenia — coś w tym procesie jest jeszcze zablokowane albo niedojrzałe.";
  else tone = "Część kart jest odwrócona, co sugeruje, że obok energii płynącej naturalnie, są też obszary wymagające większej uwagi, cierpliwości lub zmiany podejścia.";

  return `Patrząc na oś czasu, karty prowadzą Cię od tematu związanego z „${kw1}” w przeszłości, przez „${kw2}” w teraźniejszości, do „${kw3}” jako możliwej przyszłości. ${tone} Potraktuj tę linię jako narrację — nie sztywną przepowiednię, lecz opis kierunku, w którym zmierzają sprawy, jeśli nic się nie zmieni.`;
}

function synthesisB3() {
  const kwSit = getCardMeaning("three", "left").keyword;
  const kwObs = getCardMeaning("three", "right").keyword;
  const kwSol = getCardMeaning("three", "top").keyword;
  return `Obecna sytuacja związana jest z tematem „${kwSit}”, a głównym utrudnieniem na tej drodze wydaje się „${kwObs}”. Karty sugerują, że kluczem do rozwiązania jest „${kwSol}” — czyli konkretna zmiana podejścia lub działania opisana przy trzeciej karcie powyżej. To nie gotowa odpowiedź „tak” albo „nie”, ale wskazówka, na czym warto się skupić, by ruszyć sprawę do przodu.`;
}

on("generateBtn-three", "click", () => {
  const question = document.getElementById("question-three").value.trim();
  const echo = document.getElementById("questionEcho-three");
  if (question) {
    echo.style.display = "block";
    echo.textContent = `Twoje pytanie: „${question}”`;
  } else {
    echo.style.display = "none";
  }

  renderSpreadThree("spreadA-three", POSITION_LABELS_A3, buildParagraphA3);
  const containerA = document.getElementById("spreadA-three");
  const synthA = document.createElement("div");
  synthA.className = "synthesis";
  synthA.innerHTML = `<div class="ci-title">Ogólna interpretacja</div><p>${synthesisA3()}</p>`;
  containerA.appendChild(synthA);

  renderSpreadThree("spreadB-three", POSITION_LABELS_B3, buildParagraphB3);
  const containerB = document.getElementById("spreadB-three");
  const synthB = document.createElement("div");
  synthB.className = "synthesis";
  synthB.innerHTML = `<div class="ci-title">Ogólna interpretacja</div><p>${synthesisB3()}</p>`;
  containerB.appendChild(synthB);

  const results = document.getElementById("results-three");
  results.style.display = "block";
  results.scrollIntoView({ behavior: "smooth", block: "start" });
});

// ============================================================
//  ROZKŁAD NA 5 KART (krzyż)
// ============================================================

const POSITION_LABELS_5 = {
  center: "Aktualna sytuacja",
  left: "Przeszłość — wpływ na sytuację",
  right: "Prawdopodobna przyszłość",
  above: "Cel, do którego dążysz",
  below: "Przyczyna sytuacji",
};
const POSITION_ORDER_5 = ["center", "left", "right", "above", "below"];

function buildParagraph5(pos, m) {
  if (pos === "center") return `Aktualna sytuacja: ${m.meaning}`;
  if (pos === "left") return `Z przeszłości wpływa na to: ${m.meaning}`;
  if (pos === "right") return `Prawdopodobna przyszłość: ${m.meaning}`;
  if (pos === "above") return `Cel, do którego warto dążyć: ${m.meaning}`;
  return `Przyczyna tego, że sytuacja wygląda właśnie tak: ${capitalize(m.obstacle)}`;
}

function synthesisFive() {
  const kws = POSITION_ORDER_5.map(p => getCardMeaning("five", p).keyword);
  const reversedCount = POSITION_ORDER_5.filter(p => state.five[p].reversed).length;
  let tone;
  if (reversedCount === 0) tone = "Żadna karta nie jest odwrócona — sprawy, o które pytasz, wydają się rozwijać dość otwarcie, bez większych wewnętrznych blokad.";
  else if (reversedCount >= 4) tone = "Większość kart jest odwrócona, co sugeruje, że ten temat wymaga teraz sporo pracy wewnętrznej, cierpliwości i ponownego przyjrzenia się swoim założeniom.";
  else tone = "Część kart jest odwrócona, więc obok tego, co płynie naturalnie, są też wątki wymagające większej uwagi lub zmiany podejścia.";

  return `Cały rozkład opowiada spójną historię: obecna sytuacja związana z „${kws[0]}” wyrasta z przeszłości naznaczonej tematem „${kws[1]}”, a jej głębszą przyczyną jest „${kws[4]}”. Jeśli nic się nie zmieni, sprawy zmierzają w stronę „${kws[2]}”, natomiast Twoim celem — świadomym lub nie — wydaje się „${kws[3]}”. ${tone} Zestaw te elementy ze sobą i zastanów się, czy kierunek, w którym to zmierza, faktycznie prowadzi Cię do celu z karty czwartej.`;
}

on("generateBtn-five", "click", () => {
  const question = document.getElementById("question-five").value.trim();
  const echo = document.getElementById("questionEcho-five");
  if (question) {
    echo.style.display = "block";
    echo.textContent = `Twoje pytanie: „${question}”`;
  } else {
    echo.style.display = "none";
  }

  const container = document.getElementById("spreadFive");
  container.innerHTML = "";
  POSITION_ORDER_5.forEach((pos, idx) => {
    const val = state.five[pos];
    const card = cardByEn(val.en);
    const m = getCardMeaning("five", pos);
    const div = document.createElement("div");
    div.className = "card-interp";
    div.innerHTML = `
      <div class="ci-title">Karta ${idx + 1}: ${POSITION_LABELS_5[pos]} — ${card.pl}
        <span class="ori-tag">${val.reversed ? "(odwrócona)" : "(prosta)"}</span>
      </div>
      <p>${capitalize(buildParagraph5(pos, m))}</p>
    `;
    container.appendChild(div);
  });

  const synth = document.createElement("div");
  synth.className = "synthesis";
  synth.innerHTML = `<div class="ci-title">Ogólna interpretacja</div><p>${synthesisFive()}</p>`;
  container.appendChild(synth);

  const results = document.getElementById("results-five");
  results.style.display = "block";
  results.scrollIntoView({ behavior: "smooth", block: "start" });
});

// ============================================================
//  TAK / NIE (1 karta)
// ============================================================

const VERDICT_CLASS = {
  "Tak": "v-yes",
  "Raczej tak": "v-leanyes",
  "Niejasne": "v-unclear",
  "Raczej nie": "v-leanno",
  "Nie": "v-no",
};

on("generateBtn-one", "click", () => {
  const question = document.getElementById("question-one").value.trim();
  const echo = document.getElementById("questionEcho-one");
  if (question) {
    echo.style.display = "block";
    echo.textContent = `Twoje pytanie: „${question}”`;
  } else {
    echo.style.display = "none";
  }

  const val = state.one.single;
  const card = cardByEn(val.en);
  const ori = val.reversed ? "reversed" : "upright";
  const m = MEANINGS[val.en][ori];
  const verdict = YES_NO[val.en][ori];

  const badge = document.getElementById("verdictBadge");
  badge.textContent = verdict;
  badge.className = "verdict-badge " + VERDICT_CLASS[verdict];

  const container = document.getElementById("spreadOne");
  container.innerHTML = `
    <div class="card-interp">
      <div class="ci-title">${card.pl} <span class="ori-tag">${val.reversed ? "(odwrócona)" : "(prosta)"}</span></div>
      <p>${m.meaning}</p>
    </div>
    <div class="synthesis">
      <div class="ci-title">Co to oznacza</div>
      <p>Karta wskazuje na odpowiedź: <strong>${verdict}</strong>. ${
        verdict === "Tak" ? "Energia tej karty jest wyraźnie sprzyjająca temu, o co pytasz." :
        verdict === "Raczej tak" ? "Energia tej karty jest raczej sprzyjająca, choć nie bez zastrzeżeń — warto zwrócić uwagę na kontekst pytania." :
        verdict === "Niejasne" ? "Ta karta nie daje jednoznacznej odpowiedzi — sugeruje raczej, że sytuacja jeszcze się nie wyklarowała albo że odpowiedź zależy od Ciebie i Twoich kolejnych decyzji." :
        verdict === "Raczej nie" ? "Energia tej karty jest raczej niesprzyjająca temu, o co pytasz, choć nie jest to całkowite „nie” — coś może się jeszcze zmienić." :
        "Energia tej karty jest wyraźnie niesprzyjająca temu, o co pytasz — przynajmniej w obecnej formie sytuacji."
      }</p>
    </div>
  `;

  const results = document.getElementById("results-one");
  results.style.display = "block";
  results.scrollIntoView({ behavior: "smooth", block: "start" });
});

// ============================================================
//  KARTA DNIA (1 karta)
// ============================================================

function formatTodayPl() {
  const d = new Date();
  const str = d.toLocaleDateString("pl-PL", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  return str.charAt(0).toUpperCase() + str.slice(1);
}

on("generateBtn-day", "click", () => {
  const echo = document.getElementById("dayDateEcho");
  echo.style.display = "block";
  echo.textContent = `Twoja karta na dziś — ${formatTodayPl()}`;

  const val = state.day.single;
  const card = cardByEn(val.en);
  const ori = val.reversed ? "reversed" : "upright";
  const keyword = MEANINGS[val.en][ori].keyword;
  const d = DAY_MEANINGS[val.en][ori];

  const container = document.getElementById("spreadDay");
  container.innerHTML = `
    <div class="card-interp">
      <div class="ci-title">${card.pl} <span class="ori-tag">${val.reversed ? "(odwrócona)" : "(prosta)"}</span>
        <span class="ori-tag">— ${keyword}</span>
      </div>
      <p>${d.message}</p>
    </div>
    <div class="synthesis">
      <div class="ci-title">Warto dziś</div>
      <p>${capitalize(d.doToday)}</p>
    </div>
    <div class="synthesis">
      <div class="ci-title">Na co uważać</div>
      <p>${capitalize(d.avoidToday)}</p>
    </div>
  `;

  const results = document.getElementById("results-day");
  results.style.display = "block";
  results.scrollIntoView({ behavior: "smooth", block: "start" });
});

// ============================================================
//  ZAPISYWANIE ODCZYTÓW (pamięć przeglądarki + pobieranie .txt)
// ============================================================

const STORAGE_KEY = "moontasia-odczyty";

function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch (e) { return []; }
}

function storeSaved(list) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); return true; }
  catch (e) { return false; }
}

function timestampForFilename() {
  const d = new Date();
  const pad = n => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}_${pad(d.getHours())}-${pad(d.getMinutes())}-${pad(d.getSeconds())}`;
}

function downloadTextFile(text, filename) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function saveReadingText(text, spreadLabel, statusEl) {
  const filename = `${timestampForFilename()}_${spreadLabel}.txt`;
  const list = loadSaved();
  list.unshift({ id: Date.now(), name: filename, text });
  if (storeSaved(list)) {
    if (statusEl) { statusEl.textContent = "Zapisano w tej przeglądarce. Odczyt znajdziesz w zakładce „Zapisane odczyty”."; statusEl.style.color = "var(--good)"; }
    return true;
  }
  downloadTextFile(text, filename);
  if (statusEl) { statusEl.textContent = `Przeglądarka nie pozwala zapisać odczytu, więc pobrano go jako plik „${filename}”.`; statusEl.style.color = "var(--mid)"; }
  return false;
}

function downloadReading(text, spreadLabel, statusEl) {
  const filename = `${timestampForFilename()}_${spreadLabel}.txt`;
  downloadTextFile(text, filename);
  if (statusEl) { statusEl.textContent = `Pobrano plik „${filename}”.`; statusEl.style.color = "var(--good)"; }
}

// ---------- budowanie tekstu do zapisu dla każdego rozkładu ----------

function buildSavedTextThree(question) {
  const lines = [];
  lines.push("ROZKŁAD NA 3 KARTY");
  lines.push(`Data: ${new Date().toLocaleString("pl-PL")}`);
  if (question) lines.push(`Pytanie: ${question}`);
  lines.push("");
  lines.push("1. Przeszłość – Teraźniejszość – Przyszłość");
  POSITION_ORDER_3.forEach((pos, idx) => {
    const val = state.three[pos];
    const card = cardByEn(val.en);
    const m = getCardMeaning("three", pos);
    lines.push("");
    lines.push(`Karta ${idx + 1}: ${POSITION_LABELS_A3[pos]} — ${card.pl}${val.reversed ? " (odwrócona)" : ""}`);
    lines.push(capitalize(buildParagraphA3(pos, m)));
  });
  lines.push("");
  lines.push("Ogólna interpretacja");
  lines.push(synthesisA3());
  lines.push("");
  lines.push("2. Sytuacja – Przeszkoda – Rozwiązanie");
  POSITION_ORDER_3.forEach((pos, idx) => {
    const val = state.three[pos];
    const card = cardByEn(val.en);
    const m = getCardMeaning("three", pos);
    lines.push("");
    lines.push(`Karta ${idx + 1}: ${POSITION_LABELS_B3[pos]} — ${card.pl}${val.reversed ? " (odwrócona)" : ""}`);
    lines.push(capitalize(buildParagraphB3(pos, m)));
  });
  lines.push("");
  lines.push("Ogólna interpretacja");
  lines.push(synthesisB3());
  return lines.join("\n");
}

function buildSavedTextFive(question) {
  const lines = [];
  lines.push("ROZKŁAD NA 5 KART");
  lines.push(`Data: ${new Date().toLocaleString("pl-PL")}`);
  if (question) lines.push(`Pytanie: ${question}`);
  lines.push("");
  POSITION_ORDER_5.forEach((pos, idx) => {
    const val = state.five[pos];
    const card = cardByEn(val.en);
    const m = getCardMeaning("five", pos);
    lines.push(`Karta ${idx + 1}: ${POSITION_LABELS_5[pos]} — ${card.pl}${val.reversed ? " (odwrócona)" : ""}`);
    lines.push(capitalize(buildParagraph5(pos, m)));
    lines.push("");
  });
  lines.push("Ogólna interpretacja");
  lines.push(synthesisFive());
  return lines.join("\n");
}

function buildSavedTextOne(question) {
  const val = state.one.single;
  const card = cardByEn(val.en);
  const ori = val.reversed ? "reversed" : "upright";
  const m = MEANINGS[val.en][ori];
  const verdict = YES_NO[val.en][ori];
  const lines = [];
  lines.push("ROZKŁAD TAK / NIE");
  lines.push(`Data: ${new Date().toLocaleString("pl-PL")}`);
  if (question) lines.push(`Pytanie: ${question}`);
  lines.push("");
  lines.push(`Karta: ${card.pl}${val.reversed ? " (odwrócona)" : ""}`);
  lines.push(m.meaning);
  lines.push("");
  lines.push(`Odpowiedź: ${verdict}`);
  return lines.join("\n");
}

function buildSavedTextDay() {
  const val = state.day.single;
  const card = cardByEn(val.en);
  const ori = val.reversed ? "reversed" : "upright";
  const keyword = MEANINGS[val.en][ori].keyword;
  const d = DAY_MEANINGS[val.en][ori];
  const lines = [];
  lines.push("KARTA DNIA");
  lines.push(`Data: ${formatTodayPl()}`);
  lines.push("");
  lines.push(`Karta: ${card.pl}${val.reversed ? " (odwrócona)" : ""} — ${keyword}`);
  lines.push(d.message);
  lines.push("");
  lines.push("Warto dziś");
  lines.push(capitalize(d.doToday));
  lines.push("");
  lines.push("Na co uważać");
  lines.push(capitalize(d.avoidToday));
  return lines.join("\n");
}

const SAVE_CONFIG = {
  three: { label: "3-karty", build: () => buildSavedTextThree(document.getElementById("question-three").value.trim()) },
  five:  { label: "5-kart",  build: () => buildSavedTextFive(document.getElementById("question-five").value.trim()) },
  one:   { label: "tak-nie", build: () => buildSavedTextOne(document.getElementById("question-one").value.trim()) },
  day:   { label: "karta-dnia", build: () => buildSavedTextDay() },
};

Object.entries(SAVE_CONFIG).filter(([spread]) => hasSpread(spread)).forEach(([spread, cfg]) => {
  const statusEl = document.getElementById(`saveStatus-${spread}`);
  document.getElementById(`saveBtn-${spread}`).addEventListener("click", () => {
    saveReadingText(cfg.build(), cfg.label, statusEl);
  });
  document.getElementById(`downloadBtn-${spread}`).addEventListener("click", () => {
    downloadReading(cfg.build(), cfg.label, statusEl);
  });
});

// ---------- zakładka "Zapisane odczyty" ----------

on("clearAllBtn", "click", () => {
  if (loadSaved().length === 0) return;
  if (!confirm("Usunąć wszystkie zapisane odczyty z tej przeglądarki?")) return;
  storeSaved([]);
  listSavedReadings();
});

function listSavedReadings() {
  const listEl = document.getElementById("savedList");
  const statusEl = document.getElementById("savedFolderStatus");
  const entries = loadSaved();

  listEl.innerHTML = "";
  statusEl.textContent = entries.length ? `Zapisanych odczytów: ${entries.length}.` : "";
  if (entries.length === 0) {
    listEl.innerHTML = `<p style="color:var(--text-dim);">Brak zapisanych odczytów. Po odczytaniu kart kliknij „Zapisz interpretację”.</p>`;
    return;
  }

  entries.forEach(entry => {
    const lines = entry.text.split("\n");
    const title = lines[0] || entry.name;
    const meta = [lines[1], lines[2]].filter(Boolean).join(" · ");

    const item = document.createElement("div");
    item.className = "saved-item";
    item.innerHTML = `
      <div class="saved-item-header">
        <div>
          <div class="saved-item-title"></div>
          <div class="saved-item-meta"></div>
        </div>
        <div class="saved-item-actions">
          <button class="clear-btn expand-btn">pokaż</button>
          <button class="clear-btn dl-btn">pobierz</button>
          <button class="clear-btn delete-btn">usuń</button>
        </div>
      </div>
      <pre class="saved-item-body" style="display:none;"></pre>
    `;
    item.querySelector(".saved-item-title").textContent = title;
    item.querySelector(".saved-item-meta").textContent = meta || entry.name;
    const pre = item.querySelector(".saved-item-body");
    pre.textContent = entry.text;
    item.querySelector(".expand-btn").addEventListener("click", (e) => {
      const visible = pre.style.display !== "none";
      pre.style.display = visible ? "none" : "block";
      e.target.textContent = visible ? "pokaż" : "ukryj";
    });
    item.querySelector(".dl-btn").addEventListener("click", () => downloadTextFile(entry.text, entry.name));
    item.querySelector(".delete-btn").addEventListener("click", () => {
      if (!confirm("Usunąć ten zapisany odczyt?")) return;
      storeSaved(loadSaved().filter(x => x.id !== entry.id));
      listSavedReadings();
    });
    listEl.appendChild(item);
  });
}

// ---------- start ----------
renderAllSlots();

// miniatury do okna wyboru ładujemy w tle, gdy strona już jest gotowa (nie na wolnym łączu)
(function preloadThumbs() {
  if (!document.getElementById("cardGrid")) return;
  const c = navigator.connection;
  if (c && (c.saveData || /2g/.test(c.effectiveType || ""))) return;
  const run = () => CARDS.forEach((card, i) => setTimeout(() => { new Image().src = cardImg(card.file, "s"); }, i * 15));
  if ("requestIdleCallback" in window) requestIdleCallback(run, { timeout: 3000 });
  else setTimeout(run, 1500);
})();
document.querySelectorAll(".table-question").forEach(box => updateTableQuestion(box.dataset.spread));
if (document.getElementById("savedList")) listSavedReadings();
