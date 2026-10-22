# moontasia.pl

Tarot online: rozkład na 3 karty, krzyż z 5 kart, tak/nie, karta dnia. Statyczna strona (HTML, CSS, JS), bez serwera i bazy danych.

## Zawartość

- `index.html`: strona główna (szablon `src/home/home.html`, style i animacja `assets/home.css`, `assets/home.js`)
- `rozklad-3-karty/`, `rozklad-5-kart/`, `tarot-tak-nie/`, `karta-dnia/`, `zapisane-odczyty/`: strony rozkładów (generowane)
- `app.js`, `data.js`: logika tarota i baza znaczeń kart
- `znaczenie-kart/`: strona zbiorcza i 78 stron kart (generowane z `data.js`)
- `matryca/`, `matryca-partnerska/`, `ascendent/`: kalkulatory (wspólny skrypt `assets/matryca.js`)
- `assets/`: wspólne style (`site.css`, `tarot.css`, `cards.css`, `matryca.css`) i menu (`nav.js`)
- `src/`: szablony: menu i stopka (`src/partials/`), treści stron rozkładów (`src/tarot/pages.mjs`)
- `tools/build.mjs`: generator stron
- `karty/`: 78 grafik kart (SVG) oraz lekkie wersje WebP: `karty/s/` (miniatury) i `karty/m/` (rozkłady, strony kart); po zmianie grafik uruchom `node tools/make-thumbs.mjs`
- `blog/`: blog (generowany z `src/blog/posts.mjs`, style w `blog/blog.css`)
- `logo/`: logotypy (oryginały oraz wersje do strony: `moontasia-white.png`, `favicon.png`, `apple-touch-icon.png`, `og-image.png`)
- `CNAME`: domena moontasia.pl dla GitHub Pages
- `.nojekyll`, `404.html`, `robots.txt`, `sitemap.xml`

## Generowanie stron

Część stron powstaje z szablonów. Po zmianie menu lub stopki (`src/partials/`), treści stron rozkładów (`src/tarot/pages.mjs`) albo znaczeń kart (`data.js`) trzeba uruchomić:

```
node tools/build.mjs
```

Skrypt odświeża strony rozkładów, 78 stron kart, menu i stopkę we wszystkich stronach (między znacznikami `<!--HEADER-->` i `<!--FOOTER-->`) oraz `sitemap.xml`. Nowy wpis na blogu: dodaj obiekt na początku listy `NEW_POSTS` w `src/blog/posts.mjs` (adres, tytuł, opis, kategoria, data, treść) i uruchom skrypt. Strona wpisu, lista na `/blog/`, powiązane wpisy, stopka i sitemap zaktualizują się same.

## Newsletter (MailerLite)

Formularze zapisu (strona główna, stopka, pod wpisami na blogu) i strona `/polityka-prywatnosci/` pojawiają się dopiero po włączeniu w `src/newsletter.mjs`:

1. MailerLite → Forms → Embedded forms → nowy formularz (zapis bez potwierdzania mailem; komunikat po zapisie: „Dziękujemy za zapis!” w `assets/newsletter.js`).
2. Z kodu HTML formularza skopiuj adres z atrybutu `action` (np. `https://assets.mailerlite.com/jsonp/123456/forms/987654321/subscribe`) do `mailerliteAction`.
3. Uzupełnij `adminName` i `adminEmail` (administrator danych w polityce prywatności), ustaw `enabled: true` i uruchom `node tools/build.mjs`.

## Kolorystyka

Paleta marki: `#944695` (fiolet, akcent), `#50434F` (ciemny śliwkowo-szary, obramowania), `#B6A6B5` (jasny wrzos, tekst pomocniczy). Tło strony i panele to głęboka śliwka (`#1d171d`–`#2a2029`), `#50434F` służy do obramowań, żeby fiolet i jasny tekst miały mocny kontrast.

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
