// ============================================================
//  Lekkie obrazki kart (WebP) z plików SVG w karty/
//   karty/s/*.webp  – miniatury do okna wyboru i list (180 px szer.)
//   karty/m/*.webp  – rozkłady, strony kart, strona główna (360 px szer.)
//
//  Uruchom po zmianie grafik kart:
//    npm i playwright   (jednorazowo, w dowolnym folderze roboczym)
//    node tools/make-thumbs.mjs
// ============================================================
import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const SRC = path.join(ROOT, "karty");
const SIZES = { s: 180, m: 360 };
const QUALITY = { s: 0.75, m: 0.78 };
const RATIO = 435.7 / 248.6;

const exe = process.env.CHROMIUM_PATH || undefined;
const browser = await chromium.launch(exe ? { executablePath: exe } : {});
const page = await browser.newPage();
await page.setContent("<canvas></canvas>");

for (const dir of Object.keys(SIZES)) fs.mkdirSync(path.join(SRC, dir), { recursive: true });
const files = fs.readdirSync(SRC).filter(f => f.endsWith(".svg"));
let total = 0;
for (const f of files) {
  const svg = fs.readFileSync(path.join(SRC, f), "utf8");
  const dataUrl = "data:image/svg+xml;base64," + Buffer.from(svg).toString("base64");
  for (const [dir, w] of Object.entries(SIZES)) {
    const h = Math.round(w * RATIO);
    const q = QUALITY[dir];
    const webp = await page.evaluate(async ({ dataUrl, w, h, q }) => {
      const img = new Image();
      img.src = dataUrl;
      await img.decode();
      const c = document.querySelector("canvas");
      c.width = w; c.height = h;
      const ctx = c.getContext("2d");
      ctx.fillStyle = "#f4ecd9";
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);
      return c.toDataURL("image/webp", q);
    }, { dataUrl, w, h, q });
    const buf = Buffer.from(webp.split(",")[1], "base64");
    fs.writeFileSync(path.join(SRC, dir, f.replace(/\.svg$/, ".webp")), buf);
    total += buf.length;
  }
}
await browser.close();
console.log(`Gotowe: ${files.length} kart, ${(total / 1024 / 1024).toFixed(2)} MB w karty/s i karty/m`);
