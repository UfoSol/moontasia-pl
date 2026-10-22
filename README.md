# moontasia.pl

Tarot online: rozkład na 3 karty, krzyż z 5 kart, tak/nie, karta dnia. Statyczna strona (HTML, CSS, JS), bez serwera i bazy danych.

## Zawartość

- `index.html`, `app.js`, `data.js`: aplikacja
- `karty/`: 78 grafik kart (SVG)
- `blog/`: blog (lista wpisów w `blog/index.html`, każdy wpis w osobnym folderze, style w `blog/blog.css`)
- `logo/`: logotypy (oryginały oraz wersje do strony: `moontasia-white.png`, `favicon.png`, `apple-touch-icon.png`, `og-image.png`)
- `CNAME`: domena moontasia.pl dla GitHub Pages
- `.nojekyll`, `404.html`, `robots.txt`, `sitemap.xml`

## Publikacja na GitHub Pages

1. Na GitHubie: New repository, np. `moontasia-pl`, publiczne.
2. Wgrać całą zawartość tego folderu (Add file > Upload files, przeciągnąć wszystkie pliki i folder `karty`). Plik `.nojekyll` jest ukryty w Windows; jeśli się nie wgra, nic się nie stanie.
3. Settings > Pages > Source: Deploy from a branch, Branch: `main`, folder `/ (root)`, Save.
4. Settings > Pages > Custom domain: `moontasia.pl` (plik CNAME już to ustawia), po weryfikacji DNS zaznaczyć Enforce HTTPS.

## DNS u rejestratora domeny

| Typ | Nazwa | Wartość |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | NAZWA-KONTA.github.io |

Zastąpić `NAZWA-KONTA` nazwą konta na GitHubie. Stare rekordy A dla @ trzeba usunąć. Propagacja DNS trwa od kilku minut do 24 godzin, certyfikat HTTPS GitHub wystawia sam.

## Zapisane odczyty

Odczyty zapisują się w pamięci przeglądarki odwiedzającego (localStorage) i można je pobrać jako plik .txt. Nic nie jest wysyłane na serwer.
