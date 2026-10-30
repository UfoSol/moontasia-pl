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
import { POSTS } from "../src/blog/posts.mjs";
import { NEWSLETTER } from "../src/newsletter.mjs";

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
const MONTHS = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"];
const plDate = d => { const [y, m, day] = d.split("-").map(Number); return `${day} ${MONTHS[m - 1]} ${y}`; };
const POSTS_SORTED = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
// ---------- newsletter (włączany w src/newsletter.mjs) ----------
const NL_ON = NEWSLETTER.enabled && NEWSLETTER.mailerliteAction;
function newsletterForm(variant, heading, text) {
  if (!NL_ON) return "";
  return `<div class="nl nl-${variant}">
  <div class="nl-copy">
    <p class="nl-eyebrow">✦ Newsletter ✦</p>
    <h2 class="nl-title">${heading}</h2>
    <p class="nl-text">${text}</p>
  </div>
  <form class="nl-form" action="${esc(NEWSLETTER.mailerliteAction)}" method="post" novalidate>
    <div class="nl-row">
      <label class="visually-hidden" for="nl-email-${variant}">Adres e-mail</label>
      <input id="nl-email-${variant}" type="email" name="fields[email]" placeholder="Twój adres e-mail" autocomplete="email" required>
      <input type="hidden" name="ml-submit" value="1">
      <input type="hidden" name="anticsrf" value="true">
      <button type="submit" class="btn-main">Zapisz się</button>
    </div>
    <label class="nl-consent"><input type="checkbox" name="nl-consent" required> <span>Chcę otrzymywać newsletter Moontasii. Mogę wypisać się w każdej chwili. Szczegóły w <a href="/polityka-prywatnosci/">polityce prywatności</a>.</span></label>
    <p class="nl-status" role="status" aria-live="polite"></p>
  </form>
</div>`;
}
const FOOTER_NL = NL_ON ? newsletterForm("footer", "Księżycowe wiadomości",
  "Raz na jakiś czas: pełnie i nowie, karta tygodnia i nowe poradniki. Bez spamu.") + '\n<script src="/assets/newsletter.js" defer></script>' : "";

const FOOTER = read("src/partials/footer.html").trim().replace("{{FOOTER_NEWSLETTER}}", FOOTER_NL)
  .replace("{{PRIVACY_LINK}}", NL_ON ? ' · <a href="/polityka-prywatnosci/">Polityka prywatności</a>' : "")
  .replace("{{FOOTER_BLOG}}",
  POSTS_SORTED.slice(0, 4).map(p => `<li><a href="/blog/${p.slug}/">${p.title.split(":")[0]}</a></li>`).join("\n        "));

// ---------- dane kart ----------
const ctx = {};
vm.createContext(ctx);
vm.runInContext(read("data.js") + "\n" + read("love.js") + "\n;this.CARDS=CARDS;this.MEANINGS=MEANINGS;this.YES_NO=YES_NO;this.DAY_MEANINGS=DAY_MEANINGS;this.LOVE=LOVE;", ctx);
const { CARDS, MEANINGS, YES_NO, DAY_MEANINGS, LOVE } = ctx;

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

// tabela tak/nie wszystkich kart (strona /tarot-tak-nie/)
function yesNoTable() {
  const cls = v => ({ "Tak": "yn-yes", "Raczej tak": "yn-lyes", "Niejasne": "yn-mid", "Raczej nie": "yn-lno", "Nie": "yn-no" }[v]);
  return SUIT_ORDER.map(su => `
      <h3>${SUITS[su].name}</h3>
      <div class="yn-table-wrap"><table class="yn-table">
        <thead><tr><th>Karta</th><th>Prosta</th><th>Odwrócona</th></tr></thead>
        <tbody>${CARDS.filter(c => c.suit === su).map(c => `
          <tr><td><a href="${c.url}">${c.pl}</a></td><td><span class="yn ${cls(YES_NO[c.en].upright)}">${YES_NO[c.en].upright}</span></td><td><span class="yn ${cls(YES_NO[c.en].reversed)}">${YES_NO[c.en].reversed}</span></td></tr>`).join("")}
        </tbody>
      </table></div>`).join("");
}

for (const tp of TAROT_PAGES) {
  const faq = faqBlock(tp.faq);
  const isHome = tp.path === "/";
  const bc = isHome ? null : breadcrumbs([["Strona główna", "/"], [tp.h1, tp.path]]);
  const content = tp.content.replace("{{TOOL_LINKS}}", toolLinks(tp.path)).replace("{{YES_NO_TABLE}}", yesNoTable());
  const body = `<main class="page tool">
  ${bc ? bc.html : ""}
  <div class="page-hero">
    <h1>${tp.h1}</h1>
    <p>${tp.lead}</p>
  </div>
${tp.panel}
  ${content || faq.html ? `<article class="prose">${content}
      ${faq.html}
  </article>` : ""}
</main>
${MODAL}`;
  const appLd = tp.noindex ? null : {
    "@context": "https://schema.org", "@type": "WebApplication", name: tp.h1, url: SITE + tp.path,
    applicationCategory: "LifestyleApplication", operatingSystem: "Wszystkie", inLanguage: "pl-PL", isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "PLN" }, description: tp.description,
  };
  const html = page({
    path: tp.path, title: tp.title, description: tp.description, noindex: tp.noindex,
    css: ["/assets/tarot.css"], scripts: tp.scripts || ["/data.js", "/app.js"],
    ld: [isHome ? WEBSITE_LD : null, isHome ? ORG_LD : null, appLd, bc && bc.ld, faq.ld],
    body,
  });
  write(isHome ? "index.html" : tp.path.slice(1) + "index.html", html);
  if (!tp.noindex) addToSitemap(tp.path, isHome ? "1.0" : "0.9");
}

// ---------- strona główna ----------
{
  const ICONS = {
    ICON_3: '<svg viewBox="0 0 24 24"><rect x="2.5" y="7" width="6" height="10" rx="1"/><rect x="9" y="4" width="6" height="10" rx="1"/><rect x="15.5" y="7" width="6" height="10" rx="1"/></svg>',
    ICON_5: '<svg viewBox="0 0 24 24"><rect x="9.5" y="8" width="5" height="8" rx="1"/><rect x="9.5" y="1" width="5" height="5.5" rx="1"/><rect x="9.5" y="17.5" width="5" height="5.5" rx="1"/><rect x="2" y="9" width="6" height="6" rx="1"/><rect x="16" y="9" width="6" height="6" rx="1"/></svg>',
    ICON_YN: '<svg viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="18" rx="1.5"/><path d="M10 12l1.5 1.5L14.5 10"/></svg>',
    ICON_DAY: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/></svg>',
    ICON_BOOK: '<svg viewBox="0 0 24 24"><path d="M3 5c3-1.5 6-1.5 9 0v15c-3-1.5-6-1.5-9 0zM21 5c-3-1.5-6-1.5-9 0v15c3-1.5 6-1.5 9 0z"/></svg>',
    ICON_MATRIX: '<svg viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14"/><path d="M12 2l10 10-10 10L2 12z"/><circle cx="12" cy="12" r="2"/></svg>',
    ICON_HEART: '<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>',
    ICON_SUN: '<svg viewBox="0 0 24 24"><path d="M3 17h18"/><path d="M6.5 17a5.5 5.5 0 0 1 11 0"/><path d="M12 6v3M5.6 9.6l2 2M18.4 9.6l-2 2"/></svg>',
  };
  const SIGNS = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
  const zodiac = SIGNS.map((s, i) => {
    const a = (i * 30 - 90) * Math.PI / 180;
    return `<text x="${(251 * Math.cos(a)).toFixed(1)}" y="${(251 * Math.sin(a)).toFixed(1)}">${s}︎</text>`;
  }).join("");
  const FACES = { 4: "karty/m/18-the-star.webp", 5: "karty/m/19-the-moon.webp", 6: "karty/m/20-the-sun.webp" };
  const deck = Array.from({ length: 11 }, (_, i) =>
    `<div class="tcard"><div class="face back"></div>${FACES[i] ? `<div class="face front" style="background-image:url(/${FACES[i]})"></div>` : ""}</div>`).join("");
  const latest = POSTS_SORTED.slice(0, 3).map(p =>
    `<a href="/blog/${p.slug}/"><small>${p.category}</small><b>${p.title}</b><span>${p.description}</span></a>`).join("");
  const faq = faqBlock([
    ["Czy tarot online w Moontasii jest naprawdę za darmo?", "Tak. To darmowy tarot online: wszystkie odczyty, kalkulatory i opisy kart są bezpłatne, bez rejestracji, SMS-ów i ukrytych opłat."],
    ["Gdzie zrobić darmowy tarot tak nie?", "Na stronie <a href=\"/tarot-tak-nie/\">tarot tak nie online</a>. Wylosuj jedną kartę, a zobaczysz odpowiedź (tak, raczej tak, niejasne, raczej nie lub nie) razem z opisem karty."],
    ["Jaki rozkład tarota wybrać na początek?", "Na pytania otwarte najlepiej sprawdza się <a href=\"/rozklad-3-karty/\">rozkład na 3 karty</a>, a na pytania zamknięte <a href=\"/tarot-tak-nie/\">tarot tak/nie</a>. Codzienną praktykę warto zacząć od <a href=\"/karta-dnia/\">karty dnia</a>."],
    ["Czy moje pytania i daty urodzenia są gdzieś zapisywane?", "Nie. Wszystkie obliczenia i odczyty powstają w Twojej przeglądarce, a dane nie są wysyłane na serwer."],
    ["Czym jest matryca przeznaczenia?", "To system łączący numerologię z 22 Wielkimi Arkanami tarota. Z daty urodzenia powstaje mapa Twoich talentów, lekcji karmicznych, relacji i finansów. Obliczysz ją w <a href=\"/matryca/\">kalkulatorze matrycy</a>."],
    ["Skąd wiadomo, jaka jest dziś faza Księżyca?", "Fazę liczymy astronomicznie z długości miesiąca synodycznego (ok. 29,53 dnia). Podajemy też daty najbliższej pełni i nowiu."],
  ]);
  let body = read("src/home/home.html")
    .replace("{{ZODIAC}}", zodiac).replace("{{DECK}}", deck).replace("{{LATEST_POSTS}}", latest).replace("{{FAQ}}", faq.html)
    .replace("{{NEWSLETTER}}", NL_ON ? `<section class="home-section">${newsletterForm("home", "Księżycowy newsletter",
      "Przypomnienia o pełni i nowiu z krótkim rytuałem, karta tygodnia i nowe poradniki o tarocie. Prosto na Twoją skrzynkę, bez spamu.")}</section>` : "");
  for (const [k, v] of Object.entries(ICONS)) body = body.replace(`{{${k}}}`, v);
  write("index.html", page({
    path: "/",
    title: "Tarot za darmo online – darmowy tarot po polsku | Moontasia",
    description: "Tarot za darmo online, bez rejestracji: rozkład na 3 karty, tarot tak nie, tarot miłosny i karta dnia. Darmowy tarot po polsku z interpretacją wszystkich 78 kart.",
    css: ["/assets/home.css"], scripts: ["/assets/home.js"], ld: [WEBSITE_LD, ORG_LD, { "@context": "https://schema.org", "@type": "WebApplication", name: "Darmowy tarot online Moontasia", url: SITE + "/", applicationCategory: "LifestyleApplication", operatingSystem: "Wszystkie", inLanguage: "pl-PL", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "PLN" } }, faq.ld], body,
  }));
  addToSitemap("/", "1.0");
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
const webp = (file, size) => "/" + file.replace("karty/", `karty/${size}/`).replace(/\.svg$/, ".webp");
const imgTag = (c, w, h, extra = "") => `<img src="${webp(c.file, w > 130 ? "m" : "s")}" alt="Karta tarota ${c.pl}" width="${w}" height="${h}" decoding="async"${extra}>`;

// Alternatywne nazwy kart (tak też ludzie wpisują je w Google: „5 buław”, „tarot umiarkowanie”)
const NUM_WORDS = { "Dwójka": 2, "Trójka": 3, "Czwórka": 4, "Piątka": 5, "Szóstka": 6, "Siódemka": 7, "Ósemka": 8, "Dziewiątka": 9, "Dziesiątka": 10 };
const SUIT_ALT = { wands: ["Różdżek", "Kijów"], cups: ["Pucharów"], pentacles: ["Denarów", "Monet"], swords: [] };
const SUIT_GUIDE = {
  wands: ["/blog/bulawy-w-tarocie/", "Buławy w tarocie – znaczenie wszystkich 14 kart"],
  swords: ["/blog/miecze-w-tarocie/", "Miecze w tarocie – znaczenie wszystkich 14 kart"],
  major: ["/blog/wielkie-i-male-arkana/", "Wielkie i Małe Arkana – czym się różnią"],
};
function cardAliases(c) {
  const [first, ...rest] = c.pl.split(" ");
  const suitWord = rest.join(" ");
  const short = NUM_WORDS[first] ? `${NUM_WORDS[first]} ${suitWord}` : (c.suit === "major" ? `karta ${c.number}` : null);
  const other = c.suit === "major" ? [] : SUIT_ALT[c.suit].map(w => `${first} ${w}`);
  return { short, all: [short, ...other, c.en].filter(Boolean) };
}

for (const c of CARDS) {
  const m = MEANINGS[c.en], yn = YES_NO[c.en], day = DAY_MEANINGS[c.en];
  const suit = SUITS[c.suit];
  const same = CARDS.filter(o => o.suit === c.suit && o !== c);
  const prev = CARDS[(c.index + CARDS.length - 1) % CARDS.length];
  const next = CARDS[(c.index + 1) % CARDS.length];
  const al = cardAliases(c);
  const named = c.suit === "major" ? `${c.pl} (${c.number})` : (NUM_WORDS[c.pl.split(" ")[0]] ? `${c.pl} (${al.short})` : c.pl);
  const title = `${named} – znaczenie karty tarota, w miłości i odwrócona | Moontasia`;
  const description = `${c.pl}${NUM_WORDS[c.pl.split(" ")[0]] ? ` (${al.short})` : ""} w tarocie: ${m.upright.keyword}. Znaczenie karty prostej i odwróconej, w miłości i związku, odpowiedź tak/nie i wskazówka na dziś.`;
  const bc = breadcrumbs([["Strona główna", "/"], ["Znaczenie kart", "/znaczenie-kart/"], [suit.name, `/znaczenie-kart/#${suit.anchor}`], [c.pl, c.url]]);
  const faq = faqBlock([
    [`Co oznacza karta ${c.pl} w tarocie?`, `${c.pl} w pozycji prostej oznacza: ${m.upright.keyword}. ${m.upright.meaning}`],
    [`Co oznacza odwrócona karta ${c.pl}?`, `Odwrócona karta ${c.pl} oznacza: ${m.reversed.keyword}. ${m.reversed.meaning}`],
    [`Co oznacza ${c.pl} w miłości?`, `${LOVE[c.en].upright} Odwrócona: ${LOVE[c.en].reversed}`],
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
        <h1>${named} – znaczenie karty tarota</h1>
        <p class="card-lead">${cap(m.upright.keyword)}. ${m.upright.meaning}</p>
        <p class="card-aka">Inne nazwy: ${al.all.join(", ")}</p>
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

      <h2 id="w-milosci">${c.pl} w miłości i związku</h2>
      <p>${LOVE[c.en].upright}</p>
      <h3>${c.pl} odwrócona w miłości</h3>
      <p>${LOVE[c.en].reversed}</p>
      <p>Pytasz o uczucia? Zrób <a href="/tarot-milosny/">rozkład tarota miłosnego</a> i sprawdź, co karty mówią o Tobie, drugiej osobie i waszej relacji.</p>

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
        <a class="btn-main" href="/rozklad-3-karty/">Zrób darmowy rozkład na 3 karty</a>
        <a class="btn-ghost" href="/tarot-tak-nie/">Zapytaj tarot tak/nie</a>
      </div>

      ${faq.html}

      ${SUIT_GUIDE[c.suit] ? `<p>Przewodnik po całym kolorze: <a href="${SUIT_GUIDE[c.suit][0]}">${SUIT_GUIDE[c.suit][1]}</a>.</p>` : ""}
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
    description, image: SITE + webp(c.file, "m"), inLanguage: "pl-PL", mainEntityOfPage: SITE + c.url,
    author: { "@type": "Organization", name: "Moontasia" }, publisher: { "@type": "Organization", name: "Moontasia", logo: { "@type": "ImageObject", url: SITE + "/logo/moontasia-white.png" } },
  };
  write(c.url.slice(1) + "index.html", page({
    path: c.url, title, description, css: ["/assets/cards.css"], ld: [articleLd, bc.ld, faq.ld], body, ogType: "article",
  }));
  addToSitemap(c.url, c.suit === "major" ? "0.8" : "0.7");
}

// ---------- znaczenie kart: strona zbiorcza ----------
{
  const bc = breadcrumbs([["Strona główna", "/"], ["Znaczenie kart", "/znaczenie-kart/"]]);
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
    <h1>Karty tarota – znaczenie wszystkich 78 kart</h1>
    <p>Opis każdej karty tarota: znaczenie w pozycji prostej i odwróconej, odpowiedź tak/nie, rada i wskazówka na dziś.</p>
  </div>
  <nav class="suit-jump" aria-label="Kolory kart">${SUIT_ORDER.map(s => `<a class="btn-ghost" href="#${SUITS[s].anchor}">${SUITS[s].name}</a>`).join("")}</nav>
  ${sections}
  <article class="prose">
    <h2>Jak korzystać ze znaczeń kart?</h2>
    <p>Opisy kart są punktem wyjścia, a nie sztywną definicją. Czytaj kartę zawsze w kontekście pytania i pozycji w rozkładzie: ta sama karta inaczej brzmi jako „przeszłość”, a inaczej jako „rozwiązanie”. Najlepiej sprawdzisz to w praktyce: <a href="/rozklad-3-karty/">wylosuj rozkład na 3 karty</a> i porównaj interpretację z opisami kart.</p>
    ${faq.html}
  </article>
</main>`;
  const listLd = {
    "@context": "https://schema.org", "@type": "ItemList", name: "Znaczenie kart tarota",
    itemListElement: CARDS.map((c, i) => ({ "@type": "ListItem", position: i + 1, url: SITE + c.url, name: c.pl })),
  };
  write("znaczenie-kart/index.html", page({
    path: "/znaczenie-kart/",
    title: "Karty tarota – znaczenie wszystkich 78 kart z opisami | Moontasia",
    description: "Znaczenie wszystkich 78 kart tarota: Wielkie Arkana, Kielichy, Miecze, Buławy i Pentakle. Karta prosta i odwrócona, tak/nie, rada i karta dnia.",
    css: ["/assets/cards.css"], ld: [bc.ld, listLd, faq.ld], body,
  }));
  addToSitemap("/znaczenie-kart/", "0.9");
}

// ---------- blog ----------
for (const post of POSTS_SORTED) {
  const url = `/blog/${post.slug}/`;
  const bc = breadcrumbs([["Strona główna", "/"], ["Blog", "/blog/"], [post.title, url]]);
  const related = [
    ...POSTS_SORTED.filter(o => o !== post && o.category === post.category),
    ...POSTS_SORTED.filter(o => o !== post && o.category !== post.category),
  ].slice(0, 3);
  const body = `<div class="wrap">
  ${bc.html}
  <article>
    <div class="post-meta">${plDate(post.date)} · ${post.category}</div>
    <h1>${post.title}</h1>
    <p class="lead">${post.lead}</p>
    ${post.body.trim()}
    <div class="cta"><a class="btn-main" href="${post.cta[0]}">${post.cta[1]}</a></div>
    <a class="back" href="/blog/">← Wszystkie wpisy</a>
  </article>
  ${newsletterForm("post", "Spodobał Ci się ten poradnik?", "Zapisz się, a co jakiś czas dostaniesz nowe artykuły, kartę tygodnia i przypomnienia o pełni i nowiu.")}
  <section class="related">
    <h2>Przeczytaj też</h2>
    ${related.map(o => `<a class="post-card" href="/blog/${o.slug}/"><div class="post-meta">${o.category}</div><h3>${o.title}</h3><p>${o.description}</p></a>`).join("\n    ")}
  </section>
</div>`;
  const ld = {
    "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.description,
    datePublished: post.date, dateModified: post.date, inLanguage: "pl-PL", mainEntityOfPage: SITE + url,
    image: SITE + "/logo/og-image.png",
    author: { "@type": "Organization", name: "Moontasia", url: SITE + "/" },
    publisher: { "@type": "Organization", name: "Moontasia", logo: { "@type": "ImageObject", url: SITE + "/logo/moontasia-purple.png" } },
  };
  write(url.slice(1) + "index.html", page({
    path: url, title: post.seoTitle, description: post.description, css: ["/blog/blog.css"], ld: [ld, bc.ld], body, ogType: "article",
  }));
  addToSitemap(url, "0.7");
}
{
  const bc = breadcrumbs([["Strona główna", "/"], ["Blog", "/blog/"]]);
  const cats = [...new Set(POSTS_SORTED.map(p => p.category))];
  const body = `<div class="wrap">
  ${bc.html}
  <header class="blog-header">
    <h1><span class="sparkle">✦</span> Blog o tarocie <span class="sparkle">✦</span></h1>
    <p>Poradniki tarota dla początkujących i zaawansowanych, rozkłady krok po kroku, znaczenie kart, matryca przeznaczenia i astrologia.</p>
  </header>
  <nav class="cat-filter" aria-label="Kategorie">
    <button type="button" class="active" data-cat="">Wszystkie</button>
    ${cats.map(c => `<button type="button" data-cat="${c}">${c}</button>`).join("")}
  </nav>
  <main>
    ${POSTS_SORTED.map(p => `<a class="post-card" href="/blog/${p.slug}/" data-cat="${p.category}">
      <div class="post-meta">${plDate(p.date)} · ${p.category}</div>
      <h2>${p.title}</h2>
      <p>${p.description}</p>
    </a>`).join("\n    ")}
  </main>
</div>
<script>
document.querySelectorAll(".cat-filter button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".cat-filter button").forEach(x => x.classList.toggle("active", x === b));
  document.querySelectorAll(".post-card[data-cat]").forEach(c => { c.style.display = !b.dataset.cat || c.dataset.cat === b.dataset.cat ? "" : "none"; });
}));
</script>`;
  const ld = {
    "@context": "https://schema.org", "@type": "Blog", name: "Blog Moontasia", url: SITE + "/blog/", inLanguage: "pl-PL",
    blogPost: POSTS_SORTED.map(p => ({ "@type": "BlogPosting", headline: p.title, url: `${SITE}/blog/${p.slug}/`, datePublished: p.date })),
  };
  write("blog/index.html", page({
    path: "/blog/", title: "Blog o tarocie – poradniki, rozkłady i znaczenie kart | Moontasia",
    description: "Blog Moontasia: tarot dla początkujących, krzyż celtycki, tarot miłosny, jak zadawać pytania, karty dworskie, matryca przeznaczenia i ascendent.",
    css: ["/blog/blog.css"], ld: [ld, bc.ld], body,
  }));
  addToSitemap("/blog/", "0.8");
}

// ---------- polityka prywatności (tylko gdy newsletter jest włączony) ----------
if (NL_ON) {
  const bc = breadcrumbs([["Strona główna", "/"], ["Polityka prywatności", "/polityka-prywatnosci/"]]);
  const body = `<main class="page narrow">
  ${bc.html}
  <article class="prose" style="margin-top:0">
    <h1 style="color:var(--accent-soft);font-size:1.9rem;margin-top:0">Polityka prywatności</h1>
    <h2>Odczyty, matryca i ascendent</h2>
    <p>Odczyty tarota, matryca przeznaczenia i kalkulator ascendentu działają w całości w Twojej przeglądarce. Pytania, daty urodzenia i wyniki nie są wysyłane na żaden serwer. Zapisane odczyty są przechowywane wyłącznie w pamięci tej przeglądarki (localStorage) i możesz je w każdej chwili usunąć.</p>
    <h2>Newsletter</h2>
    <p>Administratorem danych osobowych osób zapisanych do newslettera jest ${NEWSLETTER.adminName ? esc(NEWSLETTER.adminName) : "właściciel serwisu moontasia.pl"}, kontakt: <a href="mailto:${esc(NEWSLETTER.adminEmail)}">${esc(NEWSLETTER.adminEmail)}</a>.</p>
    <ul>
      <li><strong>Zakres danych:</strong> adres e-mail.</li>
      <li><strong>Cel i podstawa:</strong> wysyłka newslettera na podstawie Twojej zgody (art. 6 ust. 1 lit. a RODO).</li>
      <li><strong>Odbiorca danych:</strong> MailerLite (UAB „MailerLite”), dostawca systemu do wysyłki newslettera, który przetwarza dane w naszym imieniu.</li>
      <li><strong>Okres przechowywania:</strong> do czasu wypisania się z newslettera lub cofnięcia zgody.</li>
      <li><strong>Twoje prawa:</strong> dostęp do danych, ich sprostowanie, usunięcie, ograniczenie przetwarzania, przeniesienie, cofnięcie zgody w dowolnym momencie (bez wpływu na zgodność z prawem wcześniejszego przetwarzania) oraz skarga do Prezesa UODO.</li>
    </ul>
    <p>Z newslettera wypiszesz się linkiem w stopce każdej wiadomości albo pisząc na adres podany wyżej. Podanie adresu e-mail jest dobrowolne, ale niezbędne do otrzymywania newslettera.</p>
  </article>
</main>`;
  write("polityka-prywatnosci/index.html", page({
    path: "/polityka-prywatnosci/", title: "Polityka prywatności | Moontasia",
    description: "Polityka prywatności Moontasii: odczyty w przeglądarce, newsletter i Twoje prawa.", ld: [bc.ld], body,
  }));
  addToSitemap("/polityka-prywatnosci/", "0.3");
}

// ---------- wspólne menu i stopka w stronach pisanych ręcznie ----------
const MANUAL_PAGES = ["matryca/index.html", "matryca-partnerska/index.html", "ascendent/index.html", "404.html"];
for (const p of MANUAL_PAGES) {
  if (!fs.existsSync(path.join(ROOT, p))) continue;
  let s = read(p);
  s = s.replace(/<!--HEADER-->[\s\S]*?<!--\/HEADER-->/, `<!--HEADER-->\n${HEADER}\n<!--/HEADER-->`);
  s = s.replace(/<!--FOOTER-->[\s\S]*?<!--\/FOOTER-->/, `<!--FOOTER-->\n${FOOTER}\n<!--/FOOTER-->`);
  write(p, s);
  if (p !== "404.html") addToSitemap("/" + p.replace(/index\.html$/, ""), "0.9");
}

// ---------- wersje plików CSS/JS (żeby przeglądarki nie trzymały starych stylów) ----------
import crypto from "node:crypto";
const ASSETS = ["love.js", "assets/newsletter.js", "assets/home.css", "assets/home.js", "assets/site.css", "assets/tarot.css", "assets/cards.css", "assets/matryca.css", "assets/nav.js", "assets/matryca.js", "blog/blog.css", "app.js", "data.js"];
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

console.log(`Gotowe: ${TAROT_PAGES.length} stron rozkładów, ${CARDS.length} kart, ${POSTS.length} wpisów, ${sitemap.length} adresów w sitemap.xml`);
