// ============================================================
//  Kalkulatory astrologii i numerologii (generowane przez tools/build.mjs).
//  Logika obliczeń: assets/astro.js (+ wspólne funkcje z assets/matryca.js).
//  Pola: path, crumb, title (Google), description, h1, aka, lead,
//        form, result (HTML), article (HTML treści pod kalkulatorem), faq
// ============================================================

const cityRow = id => `<div class="fld"><label for="${id}">Miejsce urodzenia</label><select id="${id}" style="min-width:200px"></select></div>`;

export const ASTRO_PAGES = [
  {
    path: "/znak-ksiezyca/",
    crumb: "Znak Księżyca",
    menu: ["Znak Księżyca", "Twoje emocje i potrzeby"],
    title: "Znak Księżyca – kalkulator online: w jakim znaku jest Twój Księżyc? | Moontasia",
    description: "Oblicz znak Księżyca za darmo: podaj datę, godzinę i miejsce urodzenia. Poznasz swój Księżyc w znaku zodiaku, fazę Księżyca w dniu urodzenia i opis emocjonalnych potrzeb.",
    h1: "Znak Księżyca – kalkulator online",
    aka: "Księżyc w znaku · Księżyc urodzeniowy · wielka trójka",
    lead: "Znak zodiaku mówi, kim jesteś. Znak Księżyca mówi, co czujesz i czego potrzebujesz, żeby czuć się bezpiecznie. Sprawdź, w jakim znaku był Księżyc w chwili Twoich narodzin.",
    form: `<div class="frm">
        <div class="fld"><label for="m-date">Data urodzenia</label><input type="date" id="m-date"></div>
        <div class="fld"><label for="m-time">Godzina (jeśli znasz)</label><input type="time" id="m-time" step="60"></div>
        ${cityRow("m-city")}
        <button class="go" id="m-go">Oblicz znak Księżyca</button>
      </div>
      <p class="hint" style="text-align:center">Księżyc zmienia znak co około 2,5 dnia, więc często wystarczy sama data. Kalkulator powie Ci, jeśli tego dnia nastąpiła zmiana znaku.</p>
      <div class="err" id="m-err"></div>`,
    result: `<div id="m-result" style="display:none"><div class="ascres" id="m-cards"></div><div class="panel" id="m-desc" style="margin-top:14px"></div></div>`,
    article: `
    <h2>Co oznacza znak Księżyca?</h2>
    <p>Księżyc w astrologii to świat emocji, intuicji, nawyków i potrzeb. Opisuje, jak reagujesz, gdy nikt nie patrzy, co daje Ci poczucie bezpieczeństwa i jak przeżywasz bliskość. Słońce to Twoje „chcę”, a Księżyc to Twoje „potrzebuję”.</p>
    <p>Dlatego dwie osoby spod tego samego znaku zodiaku mogą zupełnie inaczej przeżywać emocje: jedna z Księżycem w Raku będzie czuła i opiekuńcza, druga z Księżycem w Wodniku będzie potrzebować przestrzeni i rozmowy na chłodno.</p>
    <h2>Wielka trójka: Słońce, Księżyc i ascendent</h2>
    <ul>
      <li><strong>Słońce</strong>: tożsamość i energia życiowa. Zależy od daty.</li>
      <li><strong>Księżyc</strong>: emocje i potrzeby. Zależy od daty, czasem od godziny.</li>
      <li><strong>Ascendent</strong>: pierwsze wrażenie i styl bycia. Zależy od godziny i miejsca. Obliczysz go w <a href="/ascendent/">kalkulatorze ascendentu</a>.</li>
    </ul>
    <h2>Księżyc w znakach zodiaku w skrócie</h2>
    <ul>
      <li><strong>Księżyc w znakach ognia</strong> (Baran, Lew, Strzelec): emocje gorące, szybkie i ekspresyjne.</li>
      <li><strong>Księżyc w znakach ziemi</strong> (Byk, Panna, Koziorożec): potrzeba stabilności, konkretu i spokoju.</li>
      <li><strong>Księżyc w znakach powietrza</strong> (Bliźnięta, Waga, Wodnik): emocje przepracowywane przez rozmowę i myślenie.</li>
      <li><strong>Księżyc w znakach wody</strong> (Rak, Skorpion, Ryby): głęboka wrażliwość, intuicja i empatia.</li>
    </ul>`,
    faq: [
      ["Jak obliczyć znak Księżyca?", "Potrzebujesz daty urodzenia, a najlepiej także godziny i miejsca. Kalkulator liczy położenie Księżyca astronomicznie (metodą Meeusa, z dokładnością do setnych części stopnia) i podaje znak zodiaku, w którym się znajdował."],
      ["Czy do obliczenia Księżyca potrzebna jest godzina urodzenia?", "Nie zawsze. Księżyc zmienia znak co około 2,5 dnia, więc w większości dni wystarczy sama data. Jeśli tego dnia Księżyc przechodził do kolejnego znaku, kalkulator to pokaże i poprosi o godzinę."],
      ["Czym różni się znak Księżyca od znaku zodiaku?", "Znak zodiaku to położenie Słońca i opisuje tożsamość. Znak Księżyca opisuje emocje, intuicję i potrzeby. Razem z ascendentem tworzą tzw. wielką trójkę."],
      ["Co oznacza faza Księżyca w dniu urodzenia?", "Faza (nów, kwadra, pełnia itd.) pokazuje relację Słońca i Księżyca w chwili narodzin. W astrologii opisuje ogólną energię: początki, działanie, spełnienie albo domykanie."],
    ],
    appName: "Kalkulator znaku Księżyca",
  },
  {
    path: "/karta-urodzenia/",
    crumb: "Karta urodzenia",
    menu: ["Karta urodzenia w tarocie", "karta duszy i karta roku"],
    title: "Karta urodzenia tarot – oblicz kartę duszy i kartę roku za darmo | Moontasia",
    description: "Karta urodzenia w tarocie z daty urodzenia: poznaj swoją kartę osobowości i kartę duszy z Wielkich Arkanów oraz kartę roku. Darmowy kalkulator z opisem kart.",
    h1: "Karta urodzenia w tarocie",
    aka: "karta duszy · karta osobowości · karta roku",
    lead: "Twoja data urodzenia kryje jedną, dwie, a czasem trzy karty Wielkich Arkanów. Opisują Twoją osobowość i głębsze zadanie duszy. Do tego karta roku podpowie, jaka energia towarzyszy Ci od ostatnich urodzin.",
    form: `<div class="frm">
        <div class="fld"><label for="b-date">Data urodzenia</label><input type="date" id="b-date"></div>
        <div class="fld"><label for="b-year">Karta roku na rok (np. 2026)</label><input type="number" id="b-year" min="1900" max="2100" style="width:110px"></div>
        <button class="go" id="b-go">Pokaż moje karty</button>
      </div>
      <p class="hint" style="text-align:center"><b>Karta roku</b> to karta tarota, która opisuje energię danego roku w Twoim życiu. W polu jest już wpisany bieżący rok. Możesz go zostawić albo wpisać inny, np. przyszły.</p>
      <div class="err" id="b-err"></div>`,
    result: `<div id="b-result" style="display:none"><div class="panel"><div class="bc-cards" id="b-cards"></div><div id="b-desc"></div></div></div>`,
    article: `
    <h2>Jak oblicza się kartę urodzenia?</h2>
    <p>Najpopularniejszą metodę opisała amerykańska tarocistka Mary K. Greer. Dodajesz dzień, miesiąc i rok urodzenia, a potem sumujesz cyfry wyniku, aż otrzymasz liczbę od 1 do 21, czyli numer jednej z kart Wielkich Arkanów.</p>
    <p><strong>Przykład:</strong> 15.07.1990 → 15 + 7 + 1990 = 2012 → 2 + 0 + 1 + 2 = <strong>5 (Hierofant)</strong>. Liczba jest jednocyfrowa, więc to jednocześnie karta osobowości i duszy.</p>
    <p>Jeśli wynik jest dwucyfrowy, np. 16 (Wieża), sumujesz dalej: 1 + 6 = 7 (Rydwan). Wtedy Wieża jest kartą osobowości, a Rydwan kartą duszy. Wyjątkowa jest liczba 19 (Słońce), która daje aż trzy karty: 19 → 10 (Koło Fortuny) → 1 (Mag).</p>
    <h2>Karta osobowości i karta duszy</h2>
    <ul>
      <li><strong>Karta osobowości</strong> opisuje, jak działasz w świecie, jakie masz talenty i jakie wyzwania wracają w Twoim życiu.</li>
      <li><strong>Karta duszy</strong> to głębsza lekcja i źródło Twojej siły, do którego wracasz w ważnych momentach.</li>
    </ul>
    <h2>Karta roku</h2>
    <p>Kartę roku liczy się tak samo, ale zamiast roku urodzenia dodajesz bieżący rok. Obowiązuje od urodzin do urodzin i pokazuje główny temat tego okresu. Możesz sprawdzić także kartę na przyszły rok.</p>
    <p>Chcesz poznać więcej energii z daty urodzenia? Oblicz <a href="/matryca/">matrycę przeznaczenia</a>, w której każdy punkt to także jeden z Wielkich Arkanów.</p>`,
    faq: [
      ["Jak obliczyć kartę urodzenia w tarocie?", "Dodaj dzień, miesiąc i rok urodzenia (np. 15 + 7 + 1990 = 2012), a potem sumuj cyfry, aż otrzymasz liczbę od 1 do 21. To numer Twojej karty z Wielkich Arkanów. Jeśli liczba jest dwucyfrowa, zsumuj jej cyfry jeszcze raz, by poznać kartę duszy."],
      ["Czy karta urodzenia zmienia się w ciągu życia?", "Nie. Karty urodzenia są stałe, bo wynikają z daty urodzenia. Co roku zmienia się natomiast karta roku."],
      ["Dlaczego niektórzy mają trzy karty urodzenia?", "Tylko suma 19 daje trzy karty: Słońce (19), Koło Fortuny (10) i Maga (1). To rzadka i bardzo dynamiczna kombinacja."],
      ["Czym karta urodzenia różni się od matrycy przeznaczenia?", "Obie metody korzystają z Wielkich Arkanów i daty urodzenia. Karta urodzenia daje 1–3 główne karty, a matryca przeznaczenia rozkłada datę na kilkadziesiąt punktów opisujących różne obszary życia."],
    ],
    appName: "Kalkulator karty urodzenia tarot",
    major: true,
  },
  {
    path: "/liczba-drogi-zycia/",
    crumb: "Liczba drogi życia",
    menu: ["Liczba drogi życia", "numerologia i rok osobisty"],
    title: "Liczba drogi życia – kalkulator numerologiczny i rok osobisty | Moontasia",
    description: "Oblicz liczbę drogi życia z daty urodzenia: znaczenie liczb 1–9 oraz mistrzowskich 11, 22 i 33, mocne strony, miłość i praca. Do tego Twój rok osobisty. Za darmo.",
    h1: "Liczba drogi życia – kalkulator numerologiczny",
    aka: "numer życia · liczba przeznaczenia · rok osobisty",
    lead: "Liczba drogi życia to najważniejsza liczba w numerologii. Opisuje Twoje talenty, wyzwania i kierunek, w którym prowadzi Cię życie. Rok osobisty podpowie, jaki etap dziewięcioletniego cyklu przeżywasz teraz.",
    form: `<div class="frm">
        <div class="fld"><label for="l-date">Data urodzenia</label><input type="date" id="l-date"></div>
        <div class="fld"><label for="l-year">Na który rok? (np. 2026)</label><input type="number" id="l-year" min="1900" max="2100" style="width:110px"></div>
        <button class="go" id="l-go">Oblicz</button>
      </div>
      <p class="hint" style="text-align:center"><b>Rok osobisty</b> to w numerologii liczba od 1 do 9, która opisuje, jaki to będzie dla Ciebie rok, np. czas nowych początków, miłości albo domykania spraw.<br>W polu „Na który rok?” jest już wpisany bieżący rok. Możesz go zostawić albo wpisać inny, np. przyszły, żeby sprawdzić, co Cię czeka.</p>
      <div class="err" id="l-err"></div>`,
    result: `<div id="l-result" style="display:none"><div class="ascres" id="l-cards"></div><div class="panel" id="l-desc" style="margin-top:14px"></div></div>`,
    article: `
    <h2>Jak obliczyć liczbę drogi życia?</h2>
    <p>Każdą część daty urodzenia redukujesz osobno do jednej cyfry (albo liczby mistrzowskiej 11, 22, 33), a potem dodajesz wyniki i redukujesz jeszcze raz.</p>
    <p><strong>Przykład:</strong> 29.11.1987 → dzień 29 → 2 + 9 = 11 (liczba mistrzowska zostaje), miesiąc 11 (zostaje), rok 1987 → 1 + 9 + 8 + 7 = 25 → 7. Suma: 11 + 11 + 7 = 29 → 2 + 9 = <strong>11</strong>.</p>
    <h2>Liczby mistrzowskie 11, 22 i 33</h2>
    <p>Liczb 11, 22 i 33 nie redukuje się dalej. To wzmocnione wersje liczb 2, 4 i 6: dają większy potencjał, ale też większą presję i odpowiedzialność.</p>
    <h2>Rok osobisty</h2>
    <p>Rok osobisty liczy się z dnia i miesiąca urodzenia oraz bieżącego roku. Numerologia dzieli życie na dziewięcioletnie cykle: rok 1 to czas siania, rok 9 to czas domykania. Wiedząc, w którym roku jesteś, łatwiej zaplanować ważne decyzje.</p>
    <p>Numerologia łączy się też z tarotem: każdej liczbie odpowiada karta Wielkich Arkanów. Sprawdź swoją <a href="/karta-urodzenia/">kartę urodzenia</a> i <a href="/matryca/">matrycę przeznaczenia</a>.</p>`,
    faq: [
      ["Jak obliczyć liczbę drogi życia?", "Zredukuj osobno dzień, miesiąc i rok urodzenia do jednej cyfry (zostawiając 11, 22 i 33), dodaj wyniki i zredukuj jeszcze raz. Kalkulator pokazuje każdy krok obliczeń."],
      ["Co to jest liczba mistrzowska?", "To liczby 11, 22 i 33, których w numerologii się nie redukuje. Oznaczają wzmocnioną energię liczb 2, 4 i 6: duży potencjał, ale też wymagające lekcje."],
      ["Czym jest rok osobisty?", "To liczba od 1 do 9 opisująca energię danego roku w Twoim życiu. Liczy się ją z dnia i miesiąca urodzenia oraz bieżącego roku."],
      ["Czy liczba drogi życia to to samo co matryca przeznaczenia?", "Nie. Obie metody korzystają z daty urodzenia, ale liczba drogi życia to jedna liczba z klasycznej numerologii, a matryca przeznaczenia to cała mapa 22 energii powiązanych z arkanami tarota."],
    ],
    appName: "Kalkulator liczby drogi życia",
  },
  {
    path: "/zgodnosc-znakow/",
    crumb: "Zgodność znaków zodiaku",
    menu: ["Zgodność znaków zodiaku", "czy pasujecie do siebie?"],
    title: "Zgodność znaków zodiaku – kalkulator dopasowania w miłości | Moontasia",
    description: "Sprawdź zgodność znaków zodiaku: wybierz swój znak i znak partnera, a zobaczysz procent dopasowania, aspekt między znakami i opis, jak każdy z Was kocha.",
    h1: "Zgodność znaków zodiaku",
    aka: "dopasowanie znaków · horoskop partnerski · kompatybilność",
    lead: "Czy Baran pasuje do Wagi? Jak dogadują się Rak i Skorpion? Wybierz dwa znaki zodiaku i sprawdź, co mówi o Waszej relacji astrologia.",
    form: `<div class="frm">
        <div class="fld"><label for="z-a">Twój znak</label><select id="z-a"></select></div>
        <div class="fld"><label for="z-b">Znak partnera / partnerki</label><select id="z-b"></select></div>
        <button class="go" id="z-go">Sprawdź zgodność</button>
      </div>
      <p class="hint" style="text-align:center">Nie znasz znaku? Twój znak zodiaku to znak Słońca, który zależy od daty urodzenia. Znajdziesz go w <a href="/ascendent/">kalkulatorze ascendentu</a>.</p>`,
    result: `<div class="panel" id="z-res"></div>`,
    article: `
    <h2>Jak liczymy zgodność znaków?</h2>
    <p>Kalkulator patrzy na <strong>aspekt</strong>, czyli odległość między znakami na kole zodiaku, oraz na ich <strong>żywioły</strong>:</p>
    <ul>
      <li><strong>Trygon</strong> (znaki tego samego żywiołu, np. Baran i Lew): największa harmonia.</li>
      <li><strong>Sekstyl</strong> (ogień z powietrzem, ziemia z wodą, np. Byk i Rak): przyjaźń i łatwa współpraca.</li>
      <li><strong>Opozycja</strong> (znaki naprzeciw siebie, np. Baran i Waga): przyciąganie przeciwieństw.</li>
      <li><strong>Kwadratura</strong> (np. Rak i Waga): napięcie, które może rozwijać albo męczyć.</li>
      <li><strong>Kwinkunks i znaki sąsiednie</strong>: inne potrzeby, które wymagają dopasowania.</li>
    </ul>
    <h2>Najlepiej dobrane pary według żywiołów</h2>
    <ul>
      <li><strong>Ogień</strong> (Baran, Lew, Strzelec) z ogniem i powietrzem.</li>
      <li><strong>Ziemia</strong> (Byk, Panna, Koziorożec) z ziemią i wodą.</li>
      <li><strong>Powietrze</strong> (Bliźnięta, Waga, Wodnik) z powietrzem i ogniem.</li>
      <li><strong>Woda</strong> (Rak, Skorpion, Ryby) z wodą i ziemią.</li>
    </ul>
    <div class="callout"><p>Pamiętaj: zgodność znaków Słońca to uproszczenie. Każda para może stworzyć udany związek, a pełniejszy obraz dają Księżyc, ascendent i <a href="/matryca-partnerska/">matryca partnerska</a>.</p></div>`,
    faq: [
      ["Które znaki zodiaku najlepiej do siebie pasują?", "Najwięcej harmonii dają pary z tego samego żywiołu (trygon), np. Baran i Strzelec, Byk i Koziorożec, Bliźnięta i Wodnik, Rak i Ryby. Dobrze dobrane są też pary ogień–powietrze i ziemia–woda."],
      ["Czy znaki o niskiej zgodności nie mogą być razem?", "Mogą. Niska zgodność oznacza po prostu więcej różnic, które wymagają rozmowy i kompromisu. Wiele trwałych związków to pary „trudnych” znaków."],
      ["Czy zgodność znaków to to samo co horoskop partnerski?", "Nie do końca. Pełny horoskop partnerski (synastria) porównuje położenia wszystkich planet obu osób. Zgodność znaków Słońca to jego pierwszy, najprostszy krok."],
    ],
    appName: "Kalkulator zgodności znaków zodiaku",
  },
];
