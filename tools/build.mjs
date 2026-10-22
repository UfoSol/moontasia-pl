// ============================================================
//  Moontasia — generator stron statycznych
//
//  Uruchom z katalogu repozytorium:   node tools/build.mjs
//
//  Tworzy:
//   - strony rozkładów tarota (src/tarot/pages.mjs)
//   - /znaczenie-kart/ i 78 stron kart (dane z data.js)
//   - wspólne menu i stopkę we wszystkich plikach .html
//     (między znacznikami <!--HEADER--> / <!--FOOTER-->)
//   - sitemap.xml
// ============================================================
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { TAROT_PAGES, toolLinks } from "../src/tarot/pages.mjs";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const SITE = "https://moontasia.pl";
const TODAY = new Date().toISOString().slice(0, 10);

const read = p => fs.readFileSync(path.join(ROOT, p), "utf8");
const write = (p, content) => {
  const full = path.join(ROOT, p);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content);
};
const esc = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const stripTags = s => String(s).replace(/<[^>]+>/g, "");

const HEADER = read("src/partials/header.html").trim();
const FOOTER = read("src/partials/footer.html").trim();

// ---------- dane kart ----------
const ctx = {};
vm.createContext(ctx);
vm.runInContext(read("data.js") + "\n;this.CARDS=CARDS;this.MEANINGS=MEANINGS;this.YES_NO=YES_NO;this.DAY_MEANINGS=DAY_MEANINGS;", ctx);
const { CARDS, MEANINGS, YES_NO, DAY_MEANINGS } = ctx;

const slugify = s => s.toLowerCase()
  .replace(/ą/g, "a").replace(/ć/g, "c").replace(/ę/g, "e").replace(/ł/g, "l").replace(/ń/g, "n")
  .replace(/ó/g, "o").replace(/ś/g, "s").replace(/[źż]/g, "z")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const SUITS = {
  major:     { name: "Wielkie Arkana", anchor: "wielkie-arkana", element: null, area: "ważne lekcje życiowe, archetypy i punkty zwrotne" },
  cups:      { name: "Kielichy", anchor: "kielichy", element: "Woda", area: "uczucia, miłość, relacje i intuicja" },
  swords:    { name: "Miecze", anchor: "miecze", element: "Powietrze", area: "myśli, decyzje, komunikacja i konflikty" },
  wands:     { name: "Buławy", anchor: "bulawy", element: "Ogień", area: "energia, pasja, działanie i ambicja" },
  pentacles: { name: "Pentakle", anchor: "pentakle", element: "Ziemia", area: "pieniądze, praca, zdrowie i sprawy materialne" },
};
const SUIT_ORDER = ["major", "cups", "swords", "wands", "pentacles"];
const ROMAN = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"];

CARDS.forEach((c, i) => {
  c.slug = slugify(c.pl);
  c.url = `/znaczenie-kart/${c.slug}/`;
  c.index = i;
  if (c.suit === "major") c.number = ROMAN[i];
});

// ---------- szkielet strony ----------
function jsonLd(obj) {
  return `<script type="application/ld+json">${JSON.stringify(obj)}</script>`;
}

function breadcrumbs(items) {
  // items: [[nazwa, url], ...]; ostatni element to bieżąca strona
  const html = `<nav class="breadcrumbs" aria-label="Okruszki"><ol>${items.map(([n, u], i) =>
    i === items.length - 1 ? `<li aria-current="page">${n}</li>` : `<li><a href="${u}">${n}</a></li>`).join("")}</ol></nav>`;
  const ld = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map(([n, u], i) => ({ "@type": "ListItem", position: i + 1, name: stripTags(n), item: SITE + u })),
  };
  return { html, ld };
}

function faqBlock(faq) {
  if (!faq || !faq.length) return { html: "", ld: null };
  const html = `<h2>Najczęstsze pytania</h2>
      <div class="faq">${faq.map(([q, a]) => `
        <details><summary>${q}</summary><p>${a}</p></details>`).join("")}
      </div>`;
  const ld = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: stripTags(q), acceptedAnswer: { "@type": "Answer", text: stripTags(a) } })),
  };
  return { html, ld };
}

function page({ path: p, title, description, noindex, css = [], scripts = [], ld = [], body, ogImage, ogType = "website" }) {
  const canonical = SITE + p;
  return `<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${noindex ? '<meta name="robots" content="noindex, follow">' : `<link rel="canonical" href="${canonical}">`}
<meta name="theme-color" content="#1d171d">
<meta property="og:type" content="${ogType}">
<meta property="og:locale" content="pl_PL">
<meta property="og:site_name" content="Moontasia">
<meta property="og:url" content="${canonical}">
<meta property="og:title" content="${esc(title.replace(/ \| Moontasia$/, ""))}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${ogImage || SITE + "/logo/og-image.png"}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" href="/logo/favicon.png">
<link rel="apple-touch-icon" href="/logo/apple-touch-icon.png">
<link rel="stylesheet" href="/assets/site.css">
${css.map(c => `<link rel="stylesheet" href="${c}">`).join("\n")}
${ld.filter(Boolean).map(jsonLd).join("\n")}
</head>
<body>
<!--HEADER-->
${HEADER}
<!--/HEADER-->
${body}
<!--FOOTER-->
${FOOTER}
<!--/FOOTER-->
${scripts.map(s => `<script src="${s}"></script>`).join("\n")}
</body>
</html>
`;
}

const ORG_LD = {
  "@context": "https://schema.org", "@type": "Organization", name: "Moontasia", url: SITE + "/",
  logo: SITE + "/logo/moontasia-white.png",
};
const WEBSITE_LD = {
  "@context": "https://schema.org", "@type": "WebSite", name: "Moontasia", url: SITE + "/", inLanguage: "pl-PL",
  description: "Darmowy tarot online po polsku, znaczenie kart tarota, matryca przeznaczenia i kalkulator ascendentu.",
};

const sitemap = [];
function addToSitemap(p, priority = "0.7") { sitemap.push({ loc: SITE + p, priority }); }

// ---------- strony rozkładów ----------
const MODAL = `
<div class="modal-backdrop" id="modalBackdrop">
  <div class="modal" role="dialog" aria-modal="true" aria-label="Wybierz kartę">
    <div class="modal-header">
      <h3>Wybierz kartę</h3>
      <button id="modalClose" aria-label="Zamknij">&times;</button>
    </div>
    <input type="text" id="modalSearch" class="modal-search" placeholder="Szukaj karty po nazwie…">
    <div class="suit-tabs" id="suitTabs">
      <button data-suit="all" class="active">Wszystkie</button>
      <button data-suit="major">Wielkie Arkana</button>
      <button data-suit="pentacles">Pentakle</button>
      <button data-suit="wands">Buławy</button>
      <button data-suit="cups">Kielichy</button>
      <button data-suit="swords">Miecze</button>
    </div>
    <div class="card-grid" id="cardGrid"></div>
  </div>
</div>`;

for (const tp of TAROT_PAGES) {
  const tabs = `<nav class="tabs" aria-label="Rodzaje odczytów">${TAROT_PAGES.map(o =>
    `<a class="tab-btn${o.path === tp.path ? " active" : ""}" href="${o.path}"${o.path === tp.path ? ' aria-current="page"' : ""}>${o.tabLabel}</a>`).join("")}</nav>`;
  const faq = faqBlock(tp.faq);
  const isHome = tp.path === "/";
  const bc = isHome ? null : breadcrumbs([["Tarot online", "/"], [tp.h1, tp.path]]);
  const content = tp.content.replace("{{TOOL_LINKS}}", toolLinks(tp.path));
  const body = `<main class="page tool">
  ${bc ? bc.html : ""}
  <div class="page-hero">
    <h1>${tp.h1}</h1>
    <p>${tp.lead}</p>
  </div>
  ${tabs}
${tp.panel}
  ${content || faq.html ? `<article class="prose">${content}
      ${faq.html}
  </article>` : ""}
</main>
${MODAL}`;
  const appLd = tp.noindex ? null : {
    "@context": "https://schema.org", "@type": "WebApplication", name: tp.h1, url: SITE + tp.path,
    applicationCategory: "LifestyleApplication", operatingSystem: "Wszystkie", inLanguage: "pl-PL",
    offers: { "@type": "Offer", price: "0", priceCurrency: "PLN" }, description: tp.description,
  };
  const html = page({
    path: tp.path, title: tp.title, description: tp.description, noindex: tp.noindex,
    css: ["/assets/tarot.css"], scripts: ["/data.js", "/app.js"],
    ld: [isHome ? WEBSITE_LD : null, isHome ? ORG_LD : null, appLd, bc && bc.ld, faq.ld],
    body,
  });
  write(isHome ? "index.html" : tp.path.slice(1) + "index.html", html);
  if (!tp.noindex) addToSitemap(tp.path, isHome ? "1.0" : "0.9");
}

// ---------- znaczenie kart: strony pojedynczych kart ----------
const YES_NO_TEXT = {
  "Tak": "To karta wyraźnego „tak”: jej energia sprzyja sprawie.",
  "Raczej tak": "To karta „raczej tak”: kierunek jest dobry, choć nie bez zastrzeżeń.",
  "Niejasne": "To karta niejednoznaczna: odpowiedź zależy od okoliczności i Twoich decyzji.",
  "Raczej nie": "To karta „raczej nie”: warunki nie sprzyjają, ale sytuacja może się jeszcze zmienić.",
  "Nie": "To karta wyraźnego „nie”: jej energia nie wspiera sprawy w obecnej formie.",
};
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const imgTag = (c, w, h, extra = "") => `<img src="/${c.file}" alt="Karta tarota ${c.pl}" width="${w}" height="${h}"${extra}>`;

for (const c of CARDS) {
  const m = MEANINGS[c.en], yn = YES_NO[c.en], day = DAY_MEANINGS[c.en];
  const suit = SUITS[c.suit];
  const same = CARDS.filter(o => o.suit === c.suit && o !== c);
  const prev = CARDS[(c.index + CARDS.length - 1) % CARDS.length];
  const next = CARDS[(c.index + 1) % CARDS.length];
  const title = `${c.pl} – znaczenie karty tarota (prosta i odwrócona) | Moontasia`;
  const description = `${c.pl} w tarocie: ${m.upright.keyword}. Znaczenie karty prostej i odwróconej, odpowiedź tak/nie, rada i wskazówka na dziś.`;
  const bc = breadcrumbs([["Tarot online", "/"], ["Znaczenie kart", "/znaczenie-kart/"], [suit.name, `/znaczenie-kart/#${suit.anchor}`], [c.pl, c.url]]);
  const faq = faqBlock([
    [`Co oznacza karta ${c.pl} w tarocie?`, `${c.pl} w pozycji prostej oznacza: ${m.upright.keyword}. ${m.upright.meaning}`],
    [`Co oznacza odwrócona karta ${c.pl}?`, `Odwrócona karta ${c.pl} oznacza: ${m.reversed.keyword}. ${m.reversed.meaning}`],
    [`Czy ${c.pl} to karta „tak” czy „nie”?`, `W pozycji prostej: ${yn.upright.toLowerCase()}. W pozycji odwróconej: ${yn.reversed.toLowerCase()}.`],
  ]);
  const facts = [
    ["Grupa", c.suit === "major" ? "Wielkie Arkana" : `Małe Arkana – ${suit.name}`],
    c.number ? ["Numer", c.number] : null,
    suit.element ? ["Żywioł", suit.element] : null,
    ["Obszar", cap(suit.area)],
    ["Prosta", cap(m.upright.keyword)],
    ["Odwrócona", cap(m.reversed.keyword)],
    ["Tak / nie", `${yn.upright} · odwrócona: ${yn.reversed.toLowerCase()}`],
  ].filter(Boolean);
  const body = `<main class="page narrow">
  ${bc.html}
  <article class="card-page">
    <div class="card-hero">
      <div class="card-img">${imgTag(c, 220, 386, ' fetchpriority="high"')}</div>
      <div>
        <h1>${c.pl} – znaczenie karty tarota</h1>
        <p class="card-lead">${cap(m.upright.keyword)}. ${m.upright.meaning}</p>
        <dl class="facts">${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
      </div>
    </div>

    <div class="prose">
      <h2>${c.pl} – znaczenie karty prostej</h2>
      <p><strong>Słowa kluczowe:</strong> ${m.upright.keyword}.</p>
      <p>${m.upright.meaning}</p>
      <h3>Na co uważać</h3>
      <p>${cap(m.upright.obstacle)}</p>
      <h3>Rada karty</h3>
      <p>${cap(m.upright.solution)}</p>

      <h2>${c.pl} odwrócona – znaczenie</h2>
      <p><strong>Słowa kluczowe:</strong> ${m.reversed.keyword}.</p>
      <p>${m.reversed.meaning}</p>
      <h3>Na co uważać</h3>
      <p>${cap(m.reversed.obstacle)}</p>
      <h3>Rada karty</h3>
      <p>${cap(m.reversed.solution)}</p>

      <h2>${c.pl} jako karta dnia</h2>
      <p>${day.upright.message}</p>
      <ul>
        <li><strong>Warto dziś:</strong> ${day.upright.doToday}</li>
        <li><strong>Unikaj:</strong> ${day.upright.avoidToday}</li>
      </ul>
      <p>Gdy karta dnia jest odwrócona: ${day.reversed.message}</p>

      <h2>${c.pl}: tak czy nie?</h2>
      <p>${YES_NO_TEXT[yn.upright]} W pozycji odwróconej odpowiedź brzmi: <strong>${yn.reversed.toLowerCase()}</strong>.</p>

      <div class="card-cta">
        <p>Chcesz sprawdzić, co karty mówią o Twojej sytuacji?</p>
        <a class="btn-main" href="/">Zrób darmowy rozkład na 3 karty</a>
        <a class="btn-ghost" href="/tarot-tak-nie/">Zapytaj tarot tak/nie</a>
      </div>

      ${faq.html}

      <h2>${c.suit === "major" ? "Pozostałe Wielkie Arkana" : `Pozostałe karty: ${suit.name}`}</h2>
      <div class="mini-grid">${same.map(o => `<a href="${o.url}">${imgTag(o, 80, 140, ' loading="lazy"')}<span>${o.pl}</span></a>`).join("")}</div>

      <nav class="prev-next" aria-label="Poprzednia i następna karta">
        <a href="${prev.url}">← ${prev.pl}</a>
        <a href="/znaczenie-kart/">Wszystkie karty</a>
        <a href="${next.url}">${next.pl} →</a>
      </nav>
    </div>
  </article>
</main>`;
  const articleLd = {
    "@context": "https://schema.org", "@type": "Article", headline: `${c.pl} – znaczenie karty tarota`,
    description, image: SITE + "/" + c.file, inLanguage: "pl-PL", mainEntityOfPage: SITE + c.url,
    author: { "@type": "Organization", name: "Moontasia" }, publisher: { "@type": "Organization", name: "Moontasia", logo: { "@type": "ImageObject", url: SITE + "/logo/moontasia-white.png" } },
  };
  write(c.url.slice(1) + "index.html", page({
    path: c.url, title, description, css: ["/assets/cards.css"], ld: [articleLd, bc.ld, faq.ld], body, ogType: "article",
  }));
  addToSitemap(c.url, c.suit === "major" ? "0.8" : "0.7");
}

// ---------- znaczenie kart: strona zbiorcza ----------
{
  const bc = breadcrumbs([["Tarot online", "/"], ["Znaczenie kart", "/znaczenie-kart/"]]);
  const sections = SUIT_ORDER.map(s => {
    const suit = SUITS[s];
    const cards = CARDS.filter(c => c.suit === s);
    return `
    <section class="suit-section" id="${suit.anchor}">
      <h2>${suit.name}${suit.element ? ` <small>· żywioł: ${suit.element}</small>` : ""}</h2>
      <p>${s === "major"
        ? "22 karty od Głupca do Świata. Opisują ważne lekcje życiowe, archetypy i punkty zwrotne. Gdy pojawiają się w rozkładzie, sprawa ma większą wagę."
        : `14 kart od Asa do Króla. Kolor ${suit.name.toLowerCase()} opowiada o obszarze: ${suit.area}.`}</p>
      <div class="card-index">${cards.map(c => `
        <a href="${c.url}">${imgTag(c, 120, 210, ' loading="lazy"')}<b>${c.pl}</b><span>${MEANINGS[c.en].upright.keyword}</span></a>`).join("")}
      </div>
    </section>`;
  }).join("");
  const faq = faqBlock([
    ["Ile kart ma talia tarota?", "Klasyczna talia tarota ma 78 kart: 22 Wielkie Arkana i 56 Małych Arkanów w czterech kolorach (Kielichy, Miecze, Buławy, Pentakle) po 14 kart."],
    ["Czym różnią się Wielkie i Małe Arkana?", "Wielkie Arkana opisują ważne lekcje i etapy życia, a Małe Arkana codzienne sytuacje, emocje i ludzi. Więcej w artykule <a href=\"/blog/wielkie-i-male-arkana/\">Wielkie i Małe Arkana</a>."],
    ["Jak czytać kartę odwróconą?", "Najczęściej jako energię zablokowaną, osłabioną lub skierowaną do wewnątrz. Każdy opis karty powyżej zawiera osobne znaczenie odwrócone. Zobacz też poradnik o <a href=\"/blog/karty-odwrocone-w-tarocie/\">kartach odwróconych</a>."],
  ]);
  const body = `<main class="page">
  ${bc.html}
  <div class="page-hero">
    <h1>Znaczenie kart tarota – wszystkie 78 kart</h1>
    <p>Opis każdej karty tarota: znaczenie w pozycji prostej i odwróconej, odpowiedź tak/nie, rada i wskazówka na dziś.</p>
  </div>
  <nav class="suit-jump" aria-label="Kolory kart">${SUIT_ORDER.map(s => `<a class="btn-ghost" href="#${SUITS[s].anchor}">${SUITS[s].name}</a>`).join("")}</nav>
  ${sections}
  <article class="prose">
    <h2>Jak korzystać ze znaczeń kart?</h2>
    <p>Opisy kart są punktem wyjścia, a nie sztywną definicją. Czytaj kartę zawsze w kontekście pytania i pozycji w rozkładzie: ta sama karta inaczej brzmi jako „przeszłość”, a inaczej jako „rozwiązanie”. Najlepiej sprawdzisz to w praktyce: <a href="/">wylosuj rozkład na 3 karty</a> i porównaj interpretację z opisami kart.</p>
    ${faq.html}
  </article>
</main>`;
  const listLd = {
    "@context": "https://schema.org", "@type": "ItemList", name: "Znaczenie kart tarota",
    itemListElement: CARDS.map((c, i) => ({ "@type": "ListItem", position: i + 1, url: SITE + c.url, name: c.pl })),
  };
  write("znaczenie-kart/index.html", page({
    path: "/znaczenie-kart/",
    title: "Znaczenie kart tarota – opis wszystkich 78 kart | Moontasia",
    description: "Znaczenie wszystkich 78 kart tarota: Wielkie Arkana, Kielichy, Miecze, Buławy i Pentakle. Karta prosta i odwrócona, tak/nie, rada i karta dnia.",
    css: ["/assets/cards.css"], ld: [bc.ld, listLd, faq.ld], body,
  }));
  addToSitemap("/znaczenie-kart/", "0.9");
}

// ---------- wspólne menu i stopka w stronach pisanych ręcznie ----------
const MANUAL_PAGES = ["matryca/index.html", "ascendent/index.html", "404.html", "blog/index.html"];
for (const d of fs.readdirSync(path.join(ROOT, "blog"), { withFileTypes: true })) {
  if (d.isDirectory()) MANUAL_PAGES.push(`blog/${d.name}/index.html`);
}
for (const p of MANUAL_PAGES) {
  if (!fs.existsSync(path.join(ROOT, p))) continue;
  let s = read(p);
  s = s.replace(/<!--HEADER-->[\s\S]*?<!--\/HEADER-->/, `<!--HEADER-->\n${HEADER}\n<!--/HEADER-->`);
  s = s.replace(/<!--FOOTER-->[\s\S]*?<!--\/FOOTER-->/, `<!--FOOTER-->\n${FOOTER}\n<!--/FOOTER-->`);
  write(p, s);
  if (p !== "404.html") addToSitemap("/" + p.replace(/index\.html$/, ""), p.startsWith("blog/") ? "0.6" : "0.9");
}

// ---------- wersje plików CSS/JS (żeby przeglądarki nie trzymały starych stylów) ----------
import crypto from "node:crypto";
const ASSETS = ["assets/site.css", "assets/tarot.css", "assets/cards.css", "assets/matryca.css", "assets/nav.js", "assets/matryca.js", "blog/blog.css", "app.js", "data.js"];
const version = f => crypto.createHash("md5").update(fs.readFileSync(path.join(ROOT, f))).digest("hex").slice(0, 8);
const VERSIONS = Object.fromEntries(ASSETS.map(f => [f, version(f)]));
function allHtml(dir) {
  return fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true }).flatMap(d => {
    const rel = path.join(dir, d.name);
    if (d.isDirectory()) return [".git", "node_modules", "src", "tools", "karty", "logo"].includes(d.name) ? [] : allHtml(rel);
    return d.name.endsWith(".html") ? [rel] : [];
  });
}
for (const f of allHtml(".")) {
  let s = read(f);
  const before = s;
  for (const [asset, v] of Object.entries(VERSIONS)) {
    const re = new RegExp(`(["'])/${asset.replace(/[.]/g, "\\.")}(\\?v=[0-9a-f]+)?\\1`, "g");
    s = s.replace(re, `$1/${asset}?v=${v}$1`);
  }
  if (s !== before) write(f, s);
}

// ---------- sitemap ----------
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <priority>${u.priority}</priority>
  </url>`).join("\n")}
</urlset>
`);

console.log(`Gotowe: ${TAROT_PAGES.length} stron rozkładów, ${CARDS.length} kart, ${sitemap.length} adresów w sitemap.xml`);
