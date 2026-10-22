// ============================================================
//  Strony z rozkładami tarota — treść i ustawienia SEO.
//  Po zmianie uruchom: node tools/build.mjs
// ============================================================

// ---------- wspólne fragmenty paneli ----------

function slot(spread, pos, label, big = false) {
  return `
          <div class="slot" data-spread="${spread}" data-pos="${pos}">
            <div class="label">${label}</div>
            <div class="card-frame${big ? " big" : ""}" data-spread="${spread}" data-pos="${pos}"><span class="placeholder">Kliknij, aby wybrać kartę</span></div>
            <div class="card-name"></div>
            <label class="reverse-toggle disabled"><input type="checkbox" data-spread="${spread}" data-pos="${pos}"> odwrócona</label>
            <button class="clear-btn" data-spread="${spread}" data-pos="${pos}" style="display:none;">wyczyść</button>
          </div>`;
}

function questionBoard(spread, placeholder, chips) {
  return `
      <div class="question-board">
        <label for="question-${spread}">Twoje pytanie</label>
        <textarea id="question-${spread}" rows="2" placeholder="${placeholder}"></textarea>
        <div class="question-chips" data-spread="${spread}">
          <span>Przykłady:</span>
          ${chips.map(c => `<button type="button">${c}</button>`).join("\n          ")}
        </div>
      </div>`;
}

function toolbar(spread, drawLabel = "Wylosuj karty") {
  return `
      <div class="toolbar">
        <button type="button" class="btn-ghost" data-draw="${spread}">✦ ${drawLabel}</button>
        <label class="opt"><input type="checkbox" data-allow-reversed="${spread}" checked> także karty odwrócone</label>
        <button type="button" class="btn-ghost danger" data-reset="${spread}">↺ Wyczyść wszystko</button>
      </div>
      <p class="progress" id="progress-${spread}"></p>`;
}

function saveRow(spread) {
  return `
      <div class="save-row">
        <button class="btn-save" id="saveBtn-${spread}">💾 Zapisz interpretację</button>
        <button class="btn-save" id="downloadBtn-${spread}">⬇ Pobierz jako plik .txt</button>
        <button class="btn-save" data-reset="${spread}">↺ Nowy odczyt</button>
        <span class="save-status" id="saveStatus-${spread}"></span>
      </div>`;
}

const OWN_DECK_HINT = `Losujemy za Ciebie albo, jeśli masz własną talię, kliknij w puste miejsce i wybierz kartę, którą wyciągnęłaś lub wyciągnąłeś.`;

// ---------- panele ----------

const PANEL_THREE = `
  <div class="panel active" id="panel-three">
    <section id="rozklad">
      <h2><span class="num">1</span> Zadaj pytanie i wybierz karty</h2>
      <p class="hint">${OWN_DECK_HINT}</p>
${questionBoard("three", "O co chcesz zapytać karty?", ["Co pomoże mi w pracy?", "Czego potrzebuję w związku?", "Jak rozwiązać ten konflikt?"])}
      <div class="table-area">
        <p class="table-question empty" data-spread="three">Twoje pytanie pojawi się tutaj, nad kartami</p>
        <div class="layout-area">
          <div class="layout-row">${slot("three", "top", "Przyszłość / Rozwiązanie<br>Karta 3")}
          </div>
          <div class="layout-row gap-lg">${slot("three", "left", "Przeszłość / Sytuacja<br>Karta 1")}${slot("three", "right", "Teraźniejszość / Przeszkoda<br>Karta 2")}
          </div>
        </div>
      </div>
${toolbar("three")}
    </section>

    <div class="generate-row"><button class="btn-main" id="generateBtn-three" disabled>Odczytaj karty</button></div>

    <section class="results-block" id="results-three">
      <h2><span class="num">2</span> Interpretacja</h2>
      <div id="questionEcho-three" class="question-echo" style="display:none;"></div>
      <div class="spread-block">
        <h3>Przeszłość – Teraźniejszość – Przyszłość</h3>
        <div id="spreadA-three"></div>
      </div>
      <div class="spread-block">
        <h3>Sytuacja – Przeszkoda – Rozwiązanie</h3>
        <div id="spreadB-three"></div>
      </div>
      <div class="note">Interpretacje powstają automatycznie na podstawie znaczeń kart. Potraktuj je jako punkt wyjścia do własnej refleksji, nie jako gotową wyrocznię.</div>
${saveRow("three")}
    </section>
  </div>`;

const PANEL_FIVE = `
  <div class="panel active" id="panel-five">
    <section id="rozklad">
      <h2><span class="num">1</span> Zadaj pytanie i wybierz karty</h2>
      <p class="hint">Klasyczny krzyż: karta w środku, dwie po bokach, jedna nad i jedna pod. ${OWN_DECK_HINT}</p>
${questionBoard("five", "Opisz sytuację, którą chcesz zrozumieć", ["Dokąd zmierza mój związek?", "Co blokuje moją karierę?", "Jak wyjść z tej sytuacji?"])}
      <div class="table-area">
        <p class="table-question empty" data-spread="five">Twoje pytanie pojawi się tutaj, nad kartami</p>
        <div class="layout-area">
          <div class="layout-row">${slot("five", "above", "Karta 4<br>Cel, do którego dążysz")}
          </div>
          <div class="layout-row gap-md">${slot("five", "left", "Karta 2<br>Przeszłość")}${slot("five", "center", "Karta 1<br>Aktualna sytuacja")}${slot("five", "right", "Karta 3<br>Prawdopodobna przyszłość")}
          </div>
          <div class="layout-row">${slot("five", "below", "Karta 5<br>Przyczyna sytuacji")}
          </div>
        </div>
      </div>
${toolbar("five")}
    </section>

    <div class="generate-row"><button class="btn-main" id="generateBtn-five" disabled>Odczytaj karty</button></div>

    <section class="results-block" id="results-five">
      <h2><span class="num">2</span> Interpretacja</h2>
      <div id="questionEcho-five" class="question-echo" style="display:none;"></div>
      <div id="spreadFive"></div>
      <div class="note">Interpretacje powstają automatycznie na podstawie znaczeń kart. Potraktuj je jako punkt wyjścia do własnej refleksji, nie jako gotową wyrocznię.</div>
${saveRow("five")}
    </section>
  </div>`;

const PANEL_ONE = `
  <div class="panel active" id="panel-one">
    <section id="rozklad">
      <h2><span class="num">1</span> Zadaj pytanie i wylosuj kartę</h2>
      <p class="hint">Najlepiej sprawdzają się pytania, na które da się odpowiedzieć „tak” albo „nie”. ${OWN_DECK_HINT}</p>
${questionBoard("one", "Zadaj pytanie, na które odpowiedź brzmi tak lub nie", ["Czy to dobry moment na zmianę pracy?", "Czy warto dać mu drugą szansę?", "Czy podróż się uda?"])}
      <div class="table-area">
        <p class="table-question empty" data-spread="one">Twoje pytanie pojawi się tutaj, nad kartą</p>
        <div class="layout-area">
          <div class="layout-row">${slot("one", "single", "Twoja karta", true)}
          </div>
        </div>
      </div>
${toolbar("one", "Wylosuj kartę")}
    </section>

    <div class="generate-row"><button class="btn-main" id="generateBtn-one" disabled>Odczytaj odpowiedź</button></div>

    <section class="results-block" id="results-one">
      <h2><span class="num">2</span> Odpowiedź kart</h2>
      <div id="questionEcho-one" class="question-echo" style="display:none;"></div>
      <div class="verdict-row"><span class="verdict-badge" id="verdictBadge"></span></div>
      <div id="spreadOne"></div>
      <div class="note">Odpowiedź opiera się na tradycyjnych skojarzeniach kart z „tak” i „nie”. Potraktuj ją jako inspirację, nie ostateczne rozstrzygnięcie.</div>
${saveRow("one")}
    </section>
  </div>`;

const PANEL_DAY = `
  <div class="panel active" id="panel-day">
    <section id="rozklad">
      <h2><span class="num">1</span> Wylosuj kartę na dziś</h2>
      <p class="hint">Weź głęboki oddech, pomyśl o dniu, który przed Tobą, i wylosuj jedną kartę. ${OWN_DECK_HINT}</p>
      <div class="table-area">
        <div class="layout-area">
          <div class="layout-row">${slot("day", "single", "Karta dnia", true)}
          </div>
        </div>
      </div>
${toolbar("day", "Wylosuj kartę dnia")}
    </section>

    <div class="generate-row"><button class="btn-main" id="generateBtn-day" disabled>Odczytaj kartę dnia</button></div>

    <section class="results-block" id="results-day">
      <h2><span class="num">2</span> Twoja karta na dziś</h2>
      <div id="dayDateEcho" class="question-echo" style="display:none;"></div>
      <div id="spreadDay"></div>
      <div class="note">Interpretacja powstaje automatycznie na podstawie znaczeń kart. Potraktuj ją jako inspirację na dziś.</div>
${saveRow("day")}
    </section>
  </div>`;

const PANEL_SAVED = `
  <div class="panel active" id="panel-saved">
    <section>
      <h2><span class="num">✦</span> Zapisane odczyty</h2>
      <p class="hint">
        Zapisane odczyty są przechowywane tylko w tej przeglądarce na tym urządzeniu i nie trafiają na serwer.
        Wyczyszczenie danych przeglądarki usuwa je, dlatego ważne odczyty warto pobrać jako plik.
      </p>
      <div class="folder-row">
        <button class="btn-save" id="clearAllBtn">🗑 Usuń wszystkie</button>
      </div>
      <div id="savedFolderStatus" class="save-status" style="display:block;margin:10px 0 18px;"></div>
      <div id="savedList"></div>
    </section>
  </div>`;

// ---------- linki do innych narzędzi (linkowanie wewnętrzne) ----------

export const TOOLS = [
  { href: "/", name: "Rozkład na 3 karty", desc: "Przeszłość, teraźniejszość i przyszłość w jednym odczycie." },
  { href: "/rozklad-5-kart/", name: "Krzyż z 5 kart", desc: "Sytuacja, przyczyna, cel i kierunek, w którym zmierza sprawa." },
  { href: "/tarot-tak-nie/", name: "Tarot tak / nie", desc: "Szybka odpowiedź na konkretne pytanie z jednej karty." },
  { href: "/karta-dnia/", name: "Karta dnia", desc: "Krótka wskazówka i energia na dzisiejszy dzień." },
  { href: "/znaczenie-kart/", name: "Znaczenie kart", desc: "Opis wszystkich 78 kart: prosta, odwrócona, tak/nie." },
  { href: "/matryca/", name: "Matryca przeznaczenia", desc: "Twoje energie, ogon karmiczny i linia pieniędzy z daty urodzenia." },
];

export function toolLinks(exclude) {
  return `<div class="tool-links">${TOOLS.filter(t => t.href !== exclude)
    .map(t => `<a href="${t.href}"><b>${t.name}</b><span>${t.desc}</span></a>`).join("")}</div>`;
}

// ---------- strony ----------

export const TAROT_PAGES = [
  {
    path: "/",
    spread: "three",
    tabLabel: "Rozkład na 3 karty",
    title: "Tarot online za darmo – rozkład na 3 karty | Moontasia",
    description: "Darmowy tarot online po polsku. Zadaj pytanie, wylosuj 3 karty i od razu przeczytaj interpretację: przeszłość, teraźniejszość, przyszłość. Bez rejestracji.",
    h1: "Tarot online – rozkład na 3 karty",
    lead: "Zadaj pytanie, wylosuj trzy karty i od razu przeczytaj interpretację. Za darmo, bez rejestracji, z opisem wszystkich 78 kart tarota.",
    panel: PANEL_THREE,
    content: `
      <h2>Darmowy tarot online po polsku</h2>
      <p>Moontasia to tarot online, który działa w całości w Twojej przeglądarce. Możesz wylosować karty jednym kliknięciem albo, jeśli masz własną talię, wybrać karty, które wyciągnęłaś lub wyciągnąłeś. Interpretacja pojawia się od razu i opiera się na tradycyjnych znaczeniach wszystkich 78 kart tarota Ridera-Waite’a: 22 Wielkich Arkanów i 56 Małych Arkanów.</p>
      <h2>Jak zrobić rozkład na 3 karty?</h2>
      <ol>
        <li><strong>Zadaj pytanie.</strong> Najlepiej otwarte, dotyczące Ciebie, np. „Co pomoże mi w pracy?” zamiast „Czy dostanę awans?”.</li>
        <li><strong>Wylosuj karty</strong> przyciskiem „Wylosuj karty” albo wybierz je ręcznie, klikając w puste miejsca.</li>
        <li><strong>Odczytaj interpretację.</strong> Te same trzy karty czytamy w dwóch układach, dzięki czemu widzisz sprawę z dwóch perspektyw.</li>
      </ol>
      <h2>Co oznaczają pozycje kart?</h2>
      <p>W układzie <strong>Przeszłość – Teraźniejszość – Przyszłość</strong> pierwsza karta pokazuje, co doprowadziło Cię do obecnej sytuacji, druga opisuje to, co dzieje się teraz, a trzecia wskazuje, dokąd zmierzają sprawy. W układzie <strong>Sytuacja – Przeszkoda – Rozwiązanie</strong> te same karty mówią o sednie sprawy, o tym, co Cię blokuje, i o kierunku, który warto rozważyć. Więcej o czytaniu tego rozkładu przeczytasz w poradniku <a href="/blog/jak-czytac-rozklad-na-3-karty/">Jak czytać rozkład na 3 karty</a>.</p>
      <h2>Inne odczyty i narzędzia</h2>
      ${"{{TOOL_LINKS}}"}`,
    faq: [
      ["Czy tarot online jest darmowy?", "Tak. Wszystkie odczyty w Moontasii są bezpłatne i nie wymagają rejestracji ani podawania adresu e-mail."],
      ["Czy moje pytania są gdzieś zapisywane?", "Nie. Odczyt powstaje w Twojej przeglądarce, a pytanie nie jest wysyłane na serwer. Jeśli chcesz, możesz zapisać odczyt w pamięci przeglądarki albo pobrać go jako plik."],
      ["Jak zadać dobre pytanie do tarota?", "Najlepiej działają pytania otwarte i dotyczące Ciebie: „Na co zwrócić uwagę…”, „Co pomoże mi…”, „Czego potrzebuję…”. Pytania typu tak/nie lepiej zadać w odczycie z jednej karty."],
      ["Co oznacza karta odwrócona?", "Karta odwrócona zwykle opisuje energię zablokowaną, osłabioną albo skierowaną do wewnątrz. Jeśli nie chcesz ich używać, odznacz opcję „także karty odwrócone” przed losowaniem."],
      ["Czy mogę używać własnej talii?", "Tak. Potasuj swoją talię, wyciągnij karty i kliknij w puste miejsca, aby wybrać je z listy. Interpretacja pojawi się tak samo jak przy losowaniu."],
    ],
  },
  {
    path: "/rozklad-5-kart/",
    spread: "five",
    tabLabel: "Krzyż z 5 kart",
    title: "Rozkład tarota na 5 kart (krzyż) online – darmowy odczyt | Moontasia",
    description: "Krzyż z 5 kart tarota online: aktualna sytuacja, przeszłość, przyszłość, cel i przyczyna. Wylosuj karty i przeczytaj pełną interpretację za darmo.",
    h1: "Rozkład tarota na 5 kart – krzyż",
    lead: "Pięć kart ułożonych w krzyż pokazuje pełny obraz sprawy: skąd się wzięła, co się dzieje teraz, dokąd zmierza i jaki jest jej głębszy sens.",
    panel: PANEL_FIVE,
    content: `
      <h2>Na czym polega krzyż z 5 kart?</h2>
      <p>Krzyż to jeden z najpopularniejszych rozkładów tarota. Środkowa karta opisuje sedno sprawy, karty po bokach pokazują oś czasu (przeszłość i prawdopodobną przyszłość), karta u góry mówi o celu, do którego dążysz, a karta u dołu o przyczynie, dla której sytuacja wygląda tak, a nie inaczej.</p>
      <h2>Kiedy wybrać rozkład na 5 kart?</h2>
      <p>Sięgnij po krzyż, gdy sprawa jest złożona i chcesz zrozumieć ją głębiej niż w <a href="/">rozkładzie na 3 karty</a>: przy decyzjach zawodowych, kryzysie w związku albo gdy czujesz, że „coś stoi w miejscu” i chcesz wiedzieć dlaczego.</p>
      <h2>Pozycje kart w krzyżu</h2>
      <ul>
        <li><strong>Karta 1, środek:</strong> aktualna sytuacja, to, co dzieje się teraz.</li>
        <li><strong>Karta 2, lewo:</strong> przeszłość, która wciąż wpływa na sprawę.</li>
        <li><strong>Karta 3, prawo:</strong> prawdopodobna przyszłość, jeśli nic się nie zmieni.</li>
        <li><strong>Karta 4, góra:</strong> cel, świadomy lub nie, do którego dążysz.</li>
        <li><strong>Karta 5, dół:</strong> przyczyna, czyli korzeń sytuacji.</li>
      </ul>
      <h2>Inne odczyty i narzędzia</h2>
      ${"{{TOOL_LINKS}}"}`,
    faq: [
      ["Czym krzyż z 5 kart różni się od krzyża celtyckiego?", "Krzyż celtycki ma 10 kart i opisuje sprawę bardzo szczegółowo. Krzyż z 5 kart to jego krótsza wersja: zachowuje najważniejsze pozycje (sytuacja, przeszłość, przyszłość, cel, przyczyna), a jest prostszy w interpretacji."],
      ["Od której karty zacząć odczyt?", "Od środka. Karta 1 to sedno sprawy, a pozostałe karty czytaj w odniesieniu do niej: co ją spowodowało, dokąd prowadzi i czemu służy."],
      ["Co jeśli większość kart jest odwrócona?", "To sygnał, że sprawa wymaga pracy wewnętrznej, cierpliwości albo zmiany podejścia. Przeczytaj też, <a href=\"/blog/karty-odwrocone-w-tarocie/\">co oznaczają karty odwrócone</a>."],
    ],
  },
  {
    path: "/tarot-tak-nie/",
    spread: "one",
    tabLabel: "Tak / Nie",
    title: "Tarot tak czy nie online – odpowiedź z jednej karty | Moontasia",
    description: "Tarot tak/nie online za darmo: zadaj pytanie, wylosuj jedną kartę i poznaj odpowiedź: tak, raczej tak, niejasne, raczej nie lub nie. Z opisem karty.",
    h1: "Tarot tak czy nie – odpowiedź z jednej karty",
    lead: "Masz konkretne pytanie? Wylosuj jedną kartę i sprawdź, czy odpowiedź brzmi tak, nie, czy sprawa nie jest jeszcze przesądzona.",
    panel: PANEL_ONE,
    content: `
      <h2>Jak działa tarot tak/nie?</h2>
      <p>Każda z 78 kart tarota ma tradycyjne skojarzenie z odpowiedzią twierdzącą lub przeczącą. Karty takie jak Słońce, Gwiazda czy As Kielichów sprzyjają odpowiedzi „tak”, a Wieża czy Dziesiątka Mieczy wskazują na „nie”. Znaczenie zmienia się, gdy karta jest odwrócona. Oprócz werdyktu dostajesz też opis karty, który podpowiada, <strong>dlaczego</strong> odpowiedź brzmi tak, a nie inaczej.</p>
      <h2>Pięć możliwych odpowiedzi</h2>
      <ul>
        <li><strong>Tak:</strong> energia karty wyraźnie sprzyja sprawie.</li>
        <li><strong>Raczej tak:</strong> kierunek jest dobry, ale zwróć uwagę na szczegóły.</li>
        <li><strong>Niejasne:</strong> sprawa jeszcze się nie wyklarowała albo zależy od Twojej decyzji.</li>
        <li><strong>Raczej nie:</strong> warunki nie sprzyjają, choć coś może się zmienić.</li>
        <li><strong>Nie:</strong> energia karty wyraźnie nie wspiera sprawy w obecnej formie.</li>
      </ul>
      <h2>Jak zadać pytanie tak/nie?</h2>
      <p>Pytaj o jedną rzecz naraz i formułuj pytanie tak, by odpowiedź „tak” lub „nie” miała sens: „Czy to dobry moment na zmianę pracy?” zamiast „Co z moją pracą?”. Na pytania otwarte lepiej odpowie <a href="/">rozkład na 3 karty</a>.</p>
      <h2>Inne odczyty i narzędzia</h2>
      ${"{{TOOL_LINKS}}"}`,
    faq: [
      ["Czy mogę zadać to samo pytanie kilka razy?", "Możesz, ale tradycja tarota zaleca, by przyjąć pierwszą odpowiedź. Ponowne losowanie, aż wypadnie „tak”, odbiera odczytowi sens."],
      ["Która karta tarota oznacza najmocniejsze „tak”?", "Za najbardziej jednoznaczne „tak” uważa się Słońce, Świat i As Kielichów w pozycji prostej."],
      ["Co znaczy odpowiedź „niejasne”?", "Że sprawa nie jest przesądzona. Zwykle oznacza to, że wynik zależy od Twoich kolejnych decyzji albo że brakuje jeszcze informacji."],
    ],
  },
  {
    path: "/karta-dnia/",
    spread: "day",
    tabLabel: "Karta dnia",
    title: "Karta dnia tarot – darmowa wskazówka na dziś | Moontasia",
    description: "Wylosuj kartę dnia z tarota i przeczytaj wskazówkę na dziś: co warto zrobić, na co uważać i jaka energia Ci towarzyszy. Za darmo, codziennie.",
    h1: "Karta dnia – tarot na dziś",
    lead: "Jedna karta, jedna wskazówka na dziś: jaka energia Ci towarzyszy, co warto zrobić i na co uważać.",
    panel: PANEL_DAY,
    content: `
      <h2>Czym jest karta dnia?</h2>
      <p>Karta dnia to najprostszy codzienny rytuał z tarotem. Losujesz jedną kartę rano i traktujesz ją jak motyw przewodni dnia: podpowiedź, na co zwrócić uwagę, i pytanie do refleksji. Wieczorem warto wrócić do karty i sprawdzić, jak jej energia przejawiła się w ciągu dnia.</p>
      <h2>Jak korzystać z karty dnia?</h2>
      <ol>
        <li>Losuj kartę o stałej porze, najlepiej rano.</li>
        <li>Przeczytaj wskazówkę i zapamiętaj jedno zdanie, które najbardziej do Ciebie trafia.</li>
        <li>Zapisz odczyt i porównuj karty z kolejnych dni. Powtarzające się karty to temat, który wraca.</li>
      </ol>
      <p>Chcesz wiedzieć więcej o karcie, która Ci wypadła? Zajrzyj do opisu <a href="/znaczenie-kart/">znaczenia wszystkich kart tarota</a>.</p>
      <h2>Inne odczyty i narzędzia</h2>
      ${"{{TOOL_LINKS}}"}`,
    faq: [
      ["Czy kartę dnia można losować kilka razy dziennie?", "Najlepiej raz. Karta dnia to wskazówka na cały dzień, a kolejne losowania rozmywają jej przekaz."],
      ["Co jeśli wypadnie trudna karta, np. Wieża?", "Trudna karta nie zapowiada nieszczęścia. Podpowiada raczej, na co uważać i gdzie warto być elastycznym. Przeczytaj sekcję „Na co uważać” w odczycie."],
      ["Czy karta dnia działa z kartami odwróconymi?", "Tak. Jeśli wolisz losować tylko karty proste, odznacz opcję „także karty odwrócone” przed losowaniem."],
    ],
  },
  {
    path: "/zapisane-odczyty/",
    spread: "saved",
    tabLabel: "Zapisane",
    noindex: true,
    title: "Zapisane odczyty | Moontasia",
    description: "Twoje zapisane odczyty tarota w tej przeglądarce.",
    h1: "Zapisane odczyty",
    lead: "Odczyty zapisane w tej przeglądarce. Możesz je przeczytać, pobrać jako plik albo usunąć.",
    panel: PANEL_SAVED,
    content: "",
    faq: [],
  },
];
