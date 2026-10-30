// ============================================================
//  Wpisy na blogu. Nowy wpis = nowy obiekt na początku listy NEW_POSTS.
//  Po zmianie uruchom: node tools/build.mjs
//
//  Pola: slug (adres), title (H1), seoTitle (tytuł w Google),
//  description (opis w Google), category, date (RRRR-MM-DD),
//  lead (wstęp), cta [adres, napis przycisku], body (HTML treści)
// ============================================================
import { LEGACY_POSTS } from "./legacy.mjs";

const NEW_POSTS = [
  {
    slug: "jak-obliczyc-ascendent",
    title: "Jak obliczyć ascendent? Kalkulator i obliczenia krok po kroku",
    seoTitle: "Jak obliczyć ascendent – kalkulator ascendentu online i instrukcja | Moontasia",
    description: "Jak obliczyć ascendent? Co jest potrzebne, jak działa kalkulator ascendentu, jak liczy się znak wschodzący ręcznie i co zrobić, gdy nie znasz godziny urodzenia.",
    category: "Astrologia",
    date: "2026-10-30",
    lead: "Ascendent obliczysz w minutę, jeśli masz trzy informacje: datę, godzinę i miejsce urodzenia. Poniżej wyjaśniamy, skąd je wziąć, co dzieje się „pod maską” kalkulatora i jak sprawdzić, czy wynik jest pewny.",
    cta: ["/ascendent/", "Oblicz ascendent za darmo"],
    body: `
    <h2>Co jest potrzebne, żeby obliczyć ascendent?</h2>
    <ul>
      <li><strong>Data urodzenia</strong>: dzień, miesiąc i rok.</li>
      <li><strong>Godzina urodzenia</strong>: im dokładniejsza, tym lepiej. Ascendent przesuwa się o jeden stopień mniej więcej co cztery minuty.</li>
      <li><strong>Miejsce urodzenia</strong>: miasto, a dokładniej jego współrzędne geograficzne. Ten sam moment w Szczecinie i w Przemyślu daje nieco inny ascendent.</li>
    </ul>
    <p>Godzinę urodzenia znajdziesz w <strong>odpisie zupełnym aktu urodzenia</strong> (zamówisz go w urzędzie stanu cywilnego albo przez internet). Często zapisana jest też w książeczce zdrowia dziecka lub w wypisie ze szpitala.</p>

    <h2>Kalkulator ascendentu: krok po kroku</h2>
    <ol>
      <li>Otwórz <a href="/ascendent/">kalkulator ascendentu</a>.</li>
      <li>Wpisz datę i godzinę urodzenia.</li>
      <li>Wybierz miasto z listy. Jeśli urodziłaś/eś się za granicą lub w mniejszej miejscowości, podaj własne współrzędne i przesunięcie od UTC.</li>
      <li>Kliknij „Oblicz ascendent”. Zobaczysz ascendent, znak Słońca i MC, a pod spodem opis, co oznaczają razem.</li>
    </ol>
    <div class="callout"><p>Kalkulator sam uwzględnia polską strefę czasową i czas letni, także w latach, gdy obowiązywały inne zasady jego zmiany. Nie musisz niczego przeliczać ręcznie.</p></div>

    <h2>Jak oblicza się ascendent ręcznie?</h2>
    <p>Dawniej astrologowie korzystali z tablic efemeryd i tablic domów. Dziś robi to komputer, ale zasada jest ta sama:</p>
    <ol>
      <li>Godzinę urodzenia zamienia się na <strong>czas uniwersalny (UTC)</strong>, odejmując strefę czasową i ewentualny czas letni.</li>
      <li>Z daty i czasu UTC liczy się <strong>czas gwiazdowy</strong> w Greenwich, a potem lokalny czas gwiazdowy dla długości geograficznej miejsca urodzenia.</li>
      <li>Z lokalnego czasu gwiazdowego, <strong>szerokości geograficznej</strong> i nachylenia ekliptyki (ok. 23,44°) wyznacza się punkt ekliptyki, który wschodził na wschodnim horyzoncie. To właśnie ascendent.</li>
    </ol>
    <p>Wynik podaje się w stopniach (0–360°). Każdy znak zodiaku zajmuje 30°, więc np. 95° to 5° Raka.</p>

    <h2>Nie znam godziny urodzenia. Co teraz?</h2>
    <p>Bez godziny wiarygodny ascendent jest niemożliwy, bo w ciągu doby przez horyzont przechodzi cały zodiak. Możesz jednak:</p>
    <ul>
      <li>zapytać rodziców lub dziadków albo poszukać godziny w dokumentach,</li>
      <li>obliczyć ascendent dla kilku możliwych godzin (np. rano, w południe, wieczorem) i przeczytać opisy. Często jeden z nich od razu „pasuje”,</li>
      <li>skupić się na tym, co od godziny nie zależy: znaku Słońca i <a href="/matryca/">matrycy przeznaczenia</a>, którą liczy się tylko z daty.</li>
    </ul>

    <h2>Wynik na granicy znaków</h2>
    <p>Jeśli ascendent wypada w pierwszym lub ostatnim stopniu znaku, kilka minut różnicy w godzinie może zmienić wynik. Kalkulator na Moontasii ostrzega przed taką sytuacją i podpowiada, który sąsiedni znak warto również sprawdzić.</p>

    <h2>Co dalej?</h2>
    <p>Gdy znasz już swój znak wschodzący, przeczytaj opis w artykule <a href="/blog/ascendent-w-znakach-zodiaku/">Ascendent w znakach zodiaku</a>. A jeśli chcesz zrozumieć, czym ascendent różni się od znaku zodiaku, zajrzyj do wpisu <a href="/blog/ascendent-co-oznacza/">Ascendent: co mówi o Tobie znak wschodzący?</a></p>`,
  },
  {
    slug: "ascendent-w-znakach-zodiaku",
    title: "Ascendent w znakach zodiaku: opis wszystkich 12 ascendentów",
    seoTitle: "Ascendent w znakach zodiaku – opis 12 ascendentów od Barana do Ryb | Moontasia",
    description: "Ascendent w Baranie, Byku, Bliźniętach i pozostałych znakach: jak jawisz się innym, jak reagujesz na nowe sytuacje, mocne strony, wyzwania i wskazówka dla każdego ascendentu.",
    category: "Astrologia",
    date: "2026-10-30",
    lead: "Ascendent to Twoja „brama” do świata: pierwsze wrażenie, styl bycia i odruchowe reakcje. Oto opisy wszystkich dwunastu ascendentów. Nie znasz swojego? Oblicz go najpierw w kalkulatorze.",
    cta: ["/ascendent/", "Oblicz swój ascendent"],
    body: `
    <p>Przejdź do swojego znaku: <a href="#ascendent-baran">Baran</a> · <a href="#ascendent-byk">Byk</a> · <a href="#ascendent-bliznieta">Bliźnięta</a> · <a href="#ascendent-rak">Rak</a> · <a href="#ascendent-lew">Lew</a> · <a href="#ascendent-panna">Panna</a> · <a href="#ascendent-waga">Waga</a> · <a href="#ascendent-skorpion">Skorpion</a> · <a href="#ascendent-strzelec">Strzelec</a> · <a href="#ascendent-koziorozec">Koziorożec</a> · <a href="#ascendent-wodnik">Wodnik</a> · <a href="#ascendent-ryby">Ryby</a></p>

    <h2 id="ascendent-baran">Ascendent w Baranie</h2>
    <p><strong>Żywioł:</strong> Ogień · <strong>Władca:</strong> Mars. Inni widzą w Tobie ktoś odważny, bezpośredni i gotowy do działania.</p>
    <p>Wchodzisz do pokoju szybkim krokiem i od razu widać, że masz energię. Ludzie odbierają Cię jako osobę pewną siebie, sportową, czasem zadziorną. Często masz wyrazistą twarz i żywą mimikę.</p>
    <p>Na nowe sytuacje reagujesz natychmiast: najpierw działasz, potem analizujesz. Lubisz być pierwszy, nudzi Cię czekanie i długie przygotowania.</p>
    <ul>
      <li><strong>Mocne strony:</strong> odwaga, inicjatywa, szczerość, umiejętność rozkręcania spraw.</li>
      <li><strong>Wyzwania:</strong> niecierpliwość, wybuchowość, porzucanie spraw, gdy minie pierwszy zapał.</li>
      <li><strong>Wskazówka:</strong> Daj sobie chwilę między impulsem a reakcją. Twoja siła działa najlepiej, gdy wiesz, po co biegniesz.</li>
    </ul>

    <h2 id="ascendent-byk">Ascendent w Byku</h2>
    <p><strong>Żywioł:</strong> Ziemia · <strong>Władca:</strong> Wenus. Inni widzą w Tobie ktoś spokojny, solidny i godny zaufania.</p>
    <p>Emanujesz spokojem i ciepłem. Ludzie czują się przy Tobie bezpiecznie. Często masz przyjemny głos, dbasz o wygodę i jakość ubrań, a Twoje ruchy są niespieszne.</p>
    <p>Do nowych sytuacji podchodzisz ostrożnie: najpierw obserwujesz, potem decydujesz, ale gdy już zdecydujesz, trudno Cię zatrzymać.</p>
    <ul>
      <li><strong>Mocne strony:</strong> cierpliwość, wytrwałość, zmysł estetyczny, praktyczność.</li>
      <li><strong>Wyzwania:</strong> upór, opór przed zmianami, przywiązanie do komfortu i rzeczy.</li>
      <li><strong>Wskazówka:</strong> Zmiana nie musi zagrażać stabilności. Wprowadzaj nowe rzeczy małymi krokami, w swoim tempie.</li>
    </ul>

    <h2 id="ascendent-bliznieta">Ascendent w Bliźniętach</h2>
    <p><strong>Żywioł:</strong> Powietrze · <strong>Władca:</strong> Merkury. Inni widzą w Tobie ktoś ciekawy świata, rozmowny i lekki w kontakcie.</p>
    <p>Wyglądasz młodo i żywo, dużo gestykulujesz, szybko mówisz. Ludzie widzą w Tobie dowcipnego rozmówcę, który zawsze ma coś ciekawego do powiedzenia.</p>
    <p>Nowe sytuacje to dla Ciebie okazja do zadawania pytań. Szybko się uczysz i adaptujesz, łatwo nawiązujesz kontakty.</p>
    <ul>
      <li><strong>Mocne strony:</strong> komunikatywność, elastyczność, inteligencja, poczucie humoru.</li>
      <li><strong>Wyzwania:</strong> rozproszenie, powierzchowność, nerwowość, trudność z dokończeniem rzeczy.</li>
      <li><strong>Wskazówka:</strong> Wybierz kilka tematów, które naprawdę Cię pasjonują, i pozwól sobie w nie wejść głębiej.</li>
    </ul>

    <h2 id="ascendent-rak">Ascendent w Raku</h2>
    <p><strong>Żywioł:</strong> Woda · <strong>Władca:</strong> Księżyc. Inni widzą w Tobie ktoś ciepły, opiekuńczy i wrażliwy.</p>
    <p>Masz łagodną, często okrągłą twarz i wyczucie nastroju w pomieszczeniu. Ludzie szybko się przed Tobą otwierają, choć Ty sam(a) długo pozostajesz ostrożny(a).</p>
    <p>W nowych miejscach najpierw sprawdzasz, czy jest bezpiecznie. Gdy poczujesz się pewnie, tworzysz wokół siebie domową atmosferę.</p>
    <ul>
      <li><strong>Mocne strony:</strong> empatia, troskliwość, pamięć, intuicja, lojalność.</li>
      <li><strong>Wyzwania:</strong> nadwrażliwość, zmienność nastrojów, wycofywanie się „do skorupy”.</li>
      <li><strong>Wskazówka:</strong> Twoja wrażliwość to siła, nie słabość. Ucz się mówić wprost, czego potrzebujesz.</li>
    </ul>

    <h2 id="ascendent-lew">Ascendent w Lwie</h2>
    <p><strong>Żywioł:</strong> Ogień · <strong>Władca:</strong> Słońce. Inni widzą w Tobie ktoś promienny, pewny siebie i hojny.</p>
    <p>Trudno Cię nie zauważyć: masz wyraźną postawę, często charakterystyczne włosy i ciepły uśmiech. Ludzie widzą w Tobie naturalnego lidera albo gwiazdę towarzystwa.</p>
    <p>W nowych sytuacjach chętnie bierzesz sprawy w swoje ręce i dodajesz innym odwagi. Zależy Ci, żeby zrobić dobre wrażenie.</p>
    <ul>
      <li><strong>Mocne strony:</strong> charyzma, ciepło, kreatywność, wielkoduszność.</li>
      <li><strong>Wyzwania:</strong> potrzeba podziwu, duma, trudność z przyjmowaniem krytyki.</li>
      <li><strong>Wskazówka:</strong> Świecisz najjaśniej, gdy dzielisz się światłem z innymi, a nie tylko szukasz widowni.</li>
    </ul>

    <h2 id="ascendent-panna">Ascendent w Pannie</h2>
    <p><strong>Żywioł:</strong> Ziemia · <strong>Władca:</strong> Merkury. Inni widzą w Tobie ktoś rzeczowy, uważny i pomocny.</p>
    <p>Wyglądasz schludnie i skromnie, zwracasz uwagę na szczegóły. Ludzie odbierają Cię jako osobę kompetentną, rozsądną, czasem nieco zdystansowaną.</p>
    <p>Zanim zaczniesz, analizujesz i porządkujesz. W grupie szybko widzisz, co nie działa i jak to naprawić.</p>
    <ul>
      <li><strong>Mocne strony:</strong> precyzja, rzetelność, praktyczna inteligencja, chęć pomocy.</li>
      <li><strong>Wyzwania:</strong> krytycyzm wobec siebie i innych, zamartwianie się, perfekcjonizm.</li>
      <li><strong>Wskazówka:</strong> „Wystarczająco dobrze” często naprawdę wystarcza. Bądź dla siebie tak życzliwy(a), jak dla innych.</li>
    </ul>

    <h2 id="ascendent-waga">Ascendent w Wadze</h2>
    <p><strong>Żywioł:</strong> Powietrze · <strong>Władca:</strong> Wenus. Inni widzą w Tobie ktoś uprzejmy, elegancki i dyplomatyczny.</p>
    <p>Masz w sobie urok i wdzięk, dbasz o wygląd i harmonię. Ludzie odbierają Cię jako osobę miłą, kulturalną, z którą łatwo się rozmawia.</p>
    <p>W nowych sytuacjach szukasz porozumienia i wyczuwasz, czego oczekują inni. Unikasz konfliktów i łagodzisz napięcia.</p>
    <ul>
      <li><strong>Mocne strony:</strong> takt, poczucie sprawiedliwości, zmysł estetyczny, umiejętność współpracy.</li>
      <li><strong>Wyzwania:</strong> niezdecydowanie, zależność od opinii innych, ukrywanie własnego zdania.</li>
      <li><strong>Wskazówka:</strong> Twoje zdanie też jest częścią równowagi. Ćwicz podejmowanie decyzji bez pytania wszystkich o radę.</li>
    </ul>

    <h2 id="ascendent-skorpion">Ascendent w Skorpionie</h2>
    <p><strong>Żywioł:</strong> Woda · <strong>Władca:</strong> Pluton i Mars. Inni widzą w Tobie ktoś intensywny, tajemniczy i przenikliwy.</p>
    <p>Masz magnetyczne, uważne spojrzenie. Ludzie czują, że widzisz więcej, niż mówisz. Pierwsze wrażenie bywa zdystansowane, ale trudno o Tobie zapomnieć.</p>
    <p>Do nowych sytuacji podchodzisz z rezerwą i najpierw sprawdzasz, komu możesz zaufać. Gdy się zaangażujesz, robisz to w stu procentach.</p>
    <ul>
      <li><strong>Mocne strony:</strong> głębia, odporność psychiczna, intuicja, lojalność.</li>
      <li><strong>Wyzwania:</strong> nieufność, kontrola, zazdrość, trudność z przebaczaniem.</li>
      <li><strong>Wskazówka:</strong> Nie każdy jest zagrożeniem. Pozwól, by bliskie osoby zobaczyły Cię bez pancerza.</li>
    </ul>

    <h2 id="ascendent-strzelec">Ascendent w Strzelcu</h2>
    <p><strong>Żywioł:</strong> Ogień · <strong>Władca:</strong> Jowisz. Inni widzą w Tobie ktoś optymistyczny, otwarty i pełen entuzjazmu.</p>
    <p>Jesteś bezpośredni(a), często wysoki(a) lub o swobodnych ruchach, z szerokim uśmiechem. Ludzie widzą w Tobie podróżnika i filozofa, który zaraża dobrym humorem.</p>
    <p>Nowe sytuacje to dla Ciebie przygoda. Szybko łapiesz szerszy obraz i chętnie dzielisz się opinią.</p>
    <ul>
      <li><strong>Mocne strony:</strong> optymizm, szczerość, ciekawość świata, poczucie humoru.</li>
      <li><strong>Wyzwania:</strong> brak taktu, obiecywanie zbyt wiele, niecierpliwość wobec szczegółów.</li>
      <li><strong>Wskazówka:</strong> Twoja wiara w przyszłość jest darem. Wspieraj ją konkretnym planem i dotrzymywaniem słowa.</li>
    </ul>

    <h2 id="ascendent-koziorozec">Ascendent w Koziorożcu</h2>
    <p><strong>Żywioł:</strong> Ziemia · <strong>Władca:</strong> Saturn. Inni widzą w Tobie ktoś poważny, odpowiedzialny i ambitny.</p>
    <p>Sprawiasz wrażenie dojrzałego ponad wiek, opanowanego i rzeczowego. Ludzie od razu wierzą, że dasz sobie radę. Z wiekiem często wyglądasz coraz młodziej.</p>
    <p>W nowych sytuacjach jesteś ostrożny(a) i strategiczny(a). Budujesz pozycję krok po kroku i nie lubisz improwizacji.</p>
    <ul>
      <li><strong>Mocne strony:</strong> dyscyplina, wytrwałość, odpowiedzialność, zmysł organizacyjny.</li>
      <li><strong>Wyzwania:</strong> surowość wobec siebie, pesymizm, trudność z okazywaniem uczuć.</li>
      <li><strong>Wskazówka:</strong> Nie musisz na wszystko zasłużyć ciężką pracą. Pozwól sobie na odpoczynek i radość po drodze.</li>
    </ul>

    <h2 id="ascendent-wodnik">Ascendent w Wodniku</h2>
    <p><strong>Żywioł:</strong> Powietrze · <strong>Władca:</strong> Uran i Saturn. Inni widzą w Tobie ktoś oryginalny, niezależny i przyjacielski.</p>
    <p>Masz w sobie coś nietypowego: styl, poglądy albo sposób bycia. Ludzie odbierają Cię jako życzliwą, ale lekko zdystansowaną osobę, która myśli inaczej niż wszyscy.</p>
    <p>Do nowych sytuacji podchodzisz z ciekawością i chęcią zmiany zasad. Łatwo nawiązujesz koleżeńskie relacje, wolniej te bardzo bliskie.</p>
    <ul>
      <li><strong>Mocne strony:</strong> innowacyjność, niezależność, otwartość, poczucie wspólnoty.</li>
      <li><strong>Wyzwania:</strong> chłód emocjonalny, przekora, niechęć do kompromisu.</li>
      <li><strong>Wskazówka:</strong> Bycie innym nie wymaga dystansu. Pozwól ludziom zobaczyć także Twoje uczucia.</li>
    </ul>

    <h2 id="ascendent-ryby">Ascendent w Rybach</h2>
    <p><strong>Żywioł:</strong> Woda · <strong>Władca:</strong> Neptun i Jowisz. Inni widzą w Tobie ktoś delikatny, empatyczny i marzycielski.</p>
    <p>Masz łagodne, często „rozmarzone” spojrzenie i miękki sposób bycia. Ludzie czują, że możesz ich zrozumieć bez słów.</p>
    <p>W nowych sytuacjach dostosowujesz się do otoczenia i chłoniesz jego nastrój. Kierujesz się intuicją bardziej niż planem.</p>
    <ul>
      <li><strong>Mocne strony:</strong> wrażliwość, wyobraźnia, współczucie, artystyczne zdolności.</li>
      <li><strong>Wyzwania:</strong> brak granic, ucieczka od rzeczywistości, uleganie innym.</li>
      <li><strong>Wskazówka:</strong> Chroń swoją wrażliwość jasnymi granicami. Nie musisz nieść cudzych emocji jak własnych.</li>
    </ul>

    <div class="callout"><p>Ascendent to tylko jedna część układu. Pełny obraz daje połączenie ascendentu ze znakiem Słońca, dlatego <a href="/ascendent/">kalkulator ascendentu</a> pokazuje oba i opisuje, jak ze sobą współgrają.</p></div>`,
  },
  {
    slug: "arkana-w-matrycy-przeznaczenia",
    title: "Energie w matrycy przeznaczenia: znaczenie liczb od 1 do 22",
    seoTitle: "Matryca przeznaczenia – znaczenie energii 1–22 (arkana) | Moontasia",
    description: "Co oznacza 1, 5, 13 czy 22 w matrycy przeznaczenia (macierzy przeznaczenia)? Opis wszystkich 22 energii: plusy, minusy, miłość i pieniądze dla każdego arkanu.",
    category: "Numerologia",
    date: "2026-10-30",
    lead: "Każdy punkt matrycy przeznaczenia to liczba od 1 do 22, czyli jeden z Wielkich Arkanów tarota. Poniżej znajdziesz znaczenie wszystkich 22 energii: jak działają w plusie, w minusie, w miłości i w finansach.",
    cta: ["/matryca/", "Oblicz swoją matrycę przeznaczenia"],
    body: `
    <p>Matryca przeznaczenia, nazywana też <strong>macierzą przeznaczenia</strong> lub matrycą losu, powstaje z samej daty urodzenia. Jeśli nie masz jeszcze swojej, oblicz ją w <a href="/matryca/">kalkulatorze matrycy</a>, a potem wróć tutaj i sprawdź znaczenie liczb. Jak czytać poszczególne punkty, wyjaśniamy w poradniku <a href="/blog/matryca-przeznaczenia-jak-czytac/">Jak czytać matrycę przeznaczenia</a>.</p>
    <p>Skocz do energii: ${Array.from({ length: 22 }, (_, i) => `<a href="#energia-${i + 1}">${i + 1}</a>`).join(" · ")}</p>

    <div class="callout"><p>Ta sama energia działa inaczej w zależności od miejsca w matrycy. W centrum opisuje Twój charakter, w ogonie karmicznym lekcję z przeszłości, a na linii pieniędzy sposób zarabiania. Każda liczba ma też stronę „w plusie” i „w minusie”: to, jak ją przeżywasz, zależy od Ciebie.</p></div>

    <h2 id="energia-1">1. Mag: inicjatywa, wola, tworzenie</h2>
    <p>Energia pioniera i twórcy. Umiejętność zaczynania od zera, przekuwania pomysłu w czyn, komunikatywność i spryt.</p>
    <ul>
      <li><strong>W plusie:</strong> pewność siebie, liderowanie, łatwość nauki i komunikacji, pomysłowość.</li>
      <li><strong>W minusie:</strong> rozpoczynanie bez kończenia, manipulacja, egocentryzm, chaos.</li>
      <li><strong>Miłość:</strong> W relacji potrzebuje inicjatywy i świeżości; nudę traktuje jak zagrożenie.</li>
      <li><strong>Pieniądze:</strong> Zarabia na własnych pomysłach, komunikacji, sprzedaży, nowych projektach.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/mag/">Mag – znaczenie w tarocie</a></p>

    <h2 id="energia-2">2. Kapłanka: intuicja, tajemnica, wiedza</h2>
    <p>Głęboka intuicja i dostęp do wiedzy „między wierszami”. Energia mentora, powiernika, badacza tajemnic.</p>
    <ul>
      <li><strong>W plusie:</strong> empatia, mądrość, spokój, zdolności analityczne i ezoteryczne.</li>
      <li><strong>W minusie:</strong> zamknięcie w sobie, nieufność, tłumienie emocji, pasywność.</li>
      <li><strong>Miłość:</strong> Potrzebuje głębi i zaufania; ucieka od powierzchownych relacji.</li>
      <li><strong>Pieniądze:</strong> Dostatek przez wiedzę: nauczanie, doradztwo, analiza, praca z informacją.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/kaplanka/">Kapłanka – znaczenie w tarocie</a></p>

    <h2 id="energia-3">3. Cesarzowa: obfitość, twórczość, opieka</h2>
    <p>Energia płodności w każdym sensie: tworzenia, piękna, dbania o innych. Naturalna gospodyni życia.</p>
    <ul>
      <li><strong>W plusie:</strong> ciepło, kreatywność, estetyka, hojność, umiejętność „pomnażania”.</li>
      <li><strong>W minusie:</strong> nadopiekuńczość, rozrzutność, lenistwo, uzależnianie innych od siebie.</li>
      <li><strong>Miłość:</strong> Kocha przez troskę; musi uważać, by nie „matkować” partnerowi.</li>
      <li><strong>Pieniądze:</strong> Pieniądze z twórczości, urody, designu, gastronomii, opieki.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/cesarzowa/">Cesarzowa – znaczenie w tarocie</a></p>

    <h2 id="energia-4">4. Cesarz: struktura, władza, odpowiedzialność</h2>
    <p>Energia budowniczego systemów: porządek, zasady, strategia, ochrona bliskich. Urodzony menedżer.</p>
    <ul>
      <li><strong>W plusie:</strong> odpowiedzialność, konsekwencja, zdolności organizacyjne, stabilność.</li>
      <li><strong>W minusie:</strong> despotyzm, sztywność, kontrola, pracoholizm.</li>
      <li><strong>Miłość:</strong> Daje bezpieczeństwo, lecz musi oddać część kontroli partnerowi.</li>
      <li><strong>Pieniądze:</strong> Dostatek przez struktury: zarządzanie, własna firma, nieruchomości.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/cesarz/">Cesarz – znaczenie w tarocie</a></p>

    <h2 id="energia-5">5. Kapłan: tradycja, nauczanie, autorytet</h2>
    <p>Most między wiedzą a ludźmi. Energia nauczyciela, mentora, strażnika wartości i tradycji rodu.</p>
    <ul>
      <li><strong>W plusie:</strong> mądrość, etyka, zdolności pedagogiczne, szacunek otoczenia.</li>
      <li><strong>W minusie:</strong> dogmatyzm, moralizowanie, konserwatyzm blokujący rozwój.</li>
      <li><strong>Miłość:</strong> Ceni rytuały i wierność; związek traktuje jak świętość.</li>
      <li><strong>Pieniądze:</strong> Edukacja, doradztwo, prawo, praca z instytucjami.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/hierofant/">Kapłan – znaczenie w tarocie</a></p>

    <h2 id="energia-6">6. Kochankowie: wybór, miłość, wartości</h2>
    <p>Energia relacji i wyboru serca. Zadanie: nauczyć się wybierać w zgodzie ze sobą i kochać bez uzależnienia.</p>
    <ul>
      <li><strong>W plusie:</strong> urok, ciepło, umiejętność łączenia ludzi, dyplomacja.</li>
      <li><strong>W minusie:</strong> niezdecydowanie, uzależnienie od relacji, życie cudzym życiem.</li>
      <li><strong>Miłość:</strong> Relacje są głównym polem nauki; ważna równowaga „daję–biorę”.</li>
      <li><strong>Pieniądze:</strong> Praca z ludźmi i dla ludzi: partnerstwa, HR, sztuka, piękno.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/kochankowie/">Kochankowie – znaczenie w tarocie</a></p>

    <h2 id="energia-7">7. Rydwan: determinacja, ruch, zwycięstwo</h2>
    <p>Energia zdobywcy: cel, kierunek, dynamika. Życie nagradza ruch, karze stagnację.</p>
    <ul>
      <li><strong>W plusie:</strong> siła woli, odwaga, skuteczność, szybkie decyzje.</li>
      <li><strong>W minusie:</strong> agresja, pośpiech, „jazda po ludziach”, wypalenie.</li>
      <li><strong>Miłość:</strong> Potrzebuje wspólnych celów i przygód; rutyna gasi uczucie.</li>
      <li><strong>Pieniądze:</strong> Sport, transport, sprzedaż, projekty wymagające tempa i odwagi.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/rydwan/">Rydwan – znaczenie w tarocie</a></p>

    <h2 id="energia-8">8. Sprawiedliwość: równowaga, prawo, karma</h2>
    <p>Energia wagi karmicznej: co dajesz, to wraca. Zadanie: uczciwość wobec siebie i świata, porządek w sprawach.</p>
    <ul>
      <li><strong>W plusie:</strong> uczciwość, obiektywizm, precyzja, zmysł prawny.</li>
      <li><strong>W minusie:</strong> osądzanie, perfekcjonizm, chłód emocjonalny, rozliczanie innych.</li>
      <li><strong>Miłość:</strong> Związek musi być fair; długo pamięta niesprawiedliwość.</li>
      <li><strong>Pieniądze:</strong> Prawo, finanse, audyt, administracja; dostatek przez rzetelność.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/sprawiedliwosc/">Sprawiedliwość – znaczenie w tarocie</a></p>

    <h2 id="energia-9">9. Pustelnik: mądrość, analiza, samotność</h2>
    <p>Energia mędrca: potrzeba ciszy, zgłębiania, bycia ekspertem. Światło dla innych, gdy sam przejdzie swoją drogę.</p>
    <ul>
      <li><strong>W plusie:</strong> głębia, wiedza, niezależność, umiejętność doradzania.</li>
      <li><strong>W minusie:</strong> izolacja, zgorzknienie, wyższościowość, lęk przed bliskością.</li>
      <li><strong>Miłość:</strong> Potrzebuje przestrzeni; bliskość buduje powoli, ale trwale.</li>
      <li><strong>Pieniądze:</strong> Ekspert, badacz, specjalista wąskiej dziedziny, praca solo.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/pustelnik/">Pustelnik – znaczenie w tarocie</a></p>

    <h2 id="energia-10">10. Koło Fortuny: zmiana, cykle, szczęście</h2>
    <p>Energia losu w ruchu: wzloty i zakręty. Zadanie: płynąć z cyklami zamiast się ich bać.</p>
    <ul>
      <li><strong>W plusie:</strong> szczęśliwe zbiegi okoliczności, adaptacja, optymizm.</li>
      <li><strong>W minusie:</strong> huśtawka losu, hazardowość, bierne czekanie na szczęście.</li>
      <li><strong>Miłość:</strong> Relacja przechodzi cykle; kryzys bywa początkiem nowego etapu.</li>
      <li><strong>Pieniądze:</strong> Dochody falują; ważna poduszka finansowa i dywersyfikacja.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/kolo-fortuny/">Koło Fortuny – znaczenie w tarocie</a></p>

    <h2 id="energia-11">11. Siła: energia, odwaga, witalność</h2>
    <p>Ogromny zapas siły życiowej i charyzmy. Zadanie: kierować moc na tworzenie, nie na walkę.</p>
    <ul>
      <li><strong>W plusie:</strong> witalność, magnetyzm, opiekuńcza siła, wytrwałość.</li>
      <li><strong>W minusie:</strong> tłumiona złość, dominacja, nadużywanie ciała, brawura.</li>
      <li><strong>Miłość:</strong> Namiętność i lojalność; musi uważać na siłowe rozwiązania.</li>
      <li><strong>Pieniądze:</strong> Duże projekty, sport, produkcja — tam, gdzie trzeba mocy.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/sila/">Siła – znaczenie w tarocie</a></p>

    <h2 id="energia-12">12. Wisielec: ofiarność, perspektywa, zawieszenie</h2>
    <p>Energia innego spojrzenia: widzi to, czego nie widzą inni. Zadanie: służyć bez poświęcania siebie.</p>
    <ul>
      <li><strong>W plusie:</strong> empatia, twórcza wyobraźnia, duchowość, nieszablonowość.</li>
      <li><strong>W minusie:</strong> rola ofiary, bierność, „zawieszenie” w życiu, brak granic.</li>
      <li><strong>Miłość:</strong> Skłonność do poświęceń; musi nauczyć się mówić „nie”.</li>
      <li><strong>Pieniądze:</strong> Pomaganie, sztuka, medycyna, wolontariat — z godziwą zapłatą!</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/wisielec/">Wisielec – znaczenie w tarocie</a></p>

    <h2 id="energia-13">13. Śmierć: transformacja, zakończenia, odnowa</h2>
    <p>Energia przemiany: umiejętność zamykania etapów i rodzenia się na nowo. Feniks matrycy.</p>
    <ul>
      <li><strong>W plusie:</strong> siła przetrwania, głębokie zmiany, uwalnianie starego.</li>
      <li><strong>W minusie:</strong> lęk przed zmianą, trzymanie martwych spraw, kryzysy.</li>
      <li><strong>Miłość:</strong> Relacje przechodzą metamorfozy; koniec bywa nowym początkiem.</li>
      <li><strong>Pieniądze:</strong> Restrukturyzacje, kryzysowe zarządzanie, transformacja biznesów.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/smierc/">Śmierć – znaczenie w tarocie</a></p>

    <h2 id="energia-14">14. Umiarkowanie: harmonia, uzdrawianie, równowaga</h2>
    <p>Energia alchemika równowagi: łagodzenie konfliktów, uzdrawianie, spokój. Anioł matrycy.</p>
    <ul>
      <li><strong>W plusie:</strong> takt, cierpliwość, zdolności uzdrawiania, dyplomacja.</li>
      <li><strong>W minusie:</strong> unikanie konfliktów za wszelką cenę, odkładanie życia na później.</li>
      <li><strong>Miłość:</strong> Buduje spokojną, dojrzałą bliskość; ucieka od dramatów.</li>
      <li><strong>Pieniądze:</strong> Medycyna, terapia, mediacje, praca „łącząca” ludzi i światy.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/umiarkowanie/">Umiarkowanie – znaczenie w tarocie</a></p>

    <h2 id="energia-15">15. Diabeł: materia, pokusy, magnetyzm</h2>
    <p>Energia materii i przyciągania: pieniądze, ciało, wpływ. Zadanie: korzystać, nie dać się zniewolić.</p>
    <ul>
      <li><strong>W plusie:</strong> magnetyzm, zaradność finansowa, poczucie humoru, seksualność.</li>
      <li><strong>W minusie:</strong> uzależnienia, toksyczne relacje, manipulacja, chciwość.</li>
      <li><strong>Miłość:</strong> Silne przyciąganie fizyczne; granica między pasją a uzależnieniem.</li>
      <li><strong>Pieniądze:</strong> Duży potencjał finansowy: biznes, inwestycje, marketing.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/diabel/">Diabeł – znaczenie w tarocie</a></p>

    <h2 id="energia-16">16. Wieża: przełom, wyzwolenie, odbudowa</h2>
    <p>Energia burzenia fałszywych konstrukcji: nagłe zmiany, które uwalniają. Po burzy zawsze odbudowa.</p>
    <ul>
      <li><strong>W plusie:</strong> odwaga zmian, oczyszczanie, budowanie od nowa na prawdzie.</li>
      <li><strong>W minusie:</strong> życie od kryzysu do kryzysu, destrukcja, uparte podtrzymywanie ruin.</li>
      <li><strong>Miłość:</strong> Relacje oparte na prawdzie przetrwają; fasadowe runą.</li>
      <li><strong>Pieniądze:</strong> Zyski z odbudowy: remonty, restrukturyzacja, nieruchomości.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/wieza/">Wieża – znaczenie w tarocie</a></p>

    <h2 id="energia-17">17. Gwiazda: nadzieja, inspiracja, rozpoznawalność</h2>
    <p>Energia gwiazdy przewodniej: talent, który ma świecić publicznie. Wiara w przyszłość i inspirowanie innych.</p>
    <ul>
      <li><strong>W plusie:</strong> charyzma, kreatywność, popularność, optymizm.</li>
      <li><strong>W minusie:</strong> życie w chmurach, próżność, uzależnienie od uznania.</li>
      <li><strong>Miłość:</strong> Potrzebuje podziwu i wspólnych marzeń.</li>
      <li><strong>Pieniądze:</strong> Scena, media, marka osobista, projekty „z widownią”.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/gwiazda/">Gwiazda – znaczenie w tarocie</a></p>

    <h2 id="energia-18">18. Księżyc: intuicja, wyobraźnia, lęki</h2>
    <p>Energia głębin psychiki: sny, intuicja, magnetyzm emocjonalny. Zadanie: odróżniać intuicję od lęku.</p>
    <ul>
      <li><strong>W plusie:</strong> intuicja, empatia, wyobraźnia, zdolności psychologiczne.</li>
      <li><strong>W minusie:</strong> lęki, iluzje, zależność emocjonalna, manipulacje.</li>
      <li><strong>Miłość:</strong> Głęboka więź emocjonalna; ryzyko zazdrości i domysłów.</li>
      <li><strong>Pieniądze:</strong> Psychologia, sztuka, praca nocna, morze/woda; ostrożnie z iluzjami finansowymi.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/ksiezyc/">Księżyc – znaczenie w tarocie</a></p>

    <h2 id="energia-19">19. Słońce: radość, sukces, charyzma</h2>
    <p>Energia światła: naturalna radość, dziecięca szczerość i dar rozświetlania innych. Sukces przez bycie sobą.</p>
    <ul>
      <li><strong>W plusie:</strong> optymizm, popularność, twórczość, szczęście „samo przychodzi”.</li>
      <li><strong>W minusie:</strong> egocentryzm, gwiazdorzenie, wypalenie od nadmiaru aktywności.</li>
      <li><strong>Miłość:</strong> Ciepły, otwarty partner; potrzebuje uwagi jak słońca.</li>
      <li><strong>Pieniądze:</strong> Własna marka, praca z dziećmi, sztuka, wszystko „na scenie”.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/slonce/">Słońce – znaczenie w tarocie</a></p>

    <h2 id="energia-20">20. Sąd: powołanie, ród, przebudzenie</h2>
    <p>Energia przebudzenia i rodu: silna więź z przodkami, dar widzenia szerokiego obrazu, misja ponadosobista.</p>
    <ul>
      <li><strong>W plusie:</strong> mądrość rodu, intuicja duchowa, umiejętność odradzania się.</li>
      <li><strong>W minusie:</strong> obciążenia rodowe, życie przeszłością, osądzanie.</li>
      <li><strong>Miłość:</strong> Rodzina to świętość; ważne oddzielenie swojej drogi od wzorców rodu.</li>
      <li><strong>Pieniądze:</strong> Biznes rodzinny, historia, praca z przeszłością i dziedzictwem.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/sad/">Sąd – znaczenie w tarocie</a></p>

    <h2 id="energia-21">21. Świat: spełnienie, podróże, szeroka skala</h2>
    <p>Energia sukcesu na wielką skalę: świat jest domem. Dar łączenia kultur, ludzi i projektów.</p>
    <ul>
      <li><strong>W plusie:</strong> otwartość, języki i podróże, dyplomacja, projekty międzynarodowe.</li>
      <li><strong>W minusie:</strong> rozproszenie po świecie, brak zakorzenienia, wieczne „jeszcze nie teraz”.</li>
      <li><strong>Miłość:</strong> Partner-towarzysz podróży; związek nie może być klatką.</li>
      <li><strong>Pieniądze:</strong> Handel zagraniczny, turystyka, projekty globalne.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/swiat/">Świat – znaczenie w tarocie</a></p>

    <h2 id="energia-22">22. Głupiec: wolność, spontaniczność, nowy start</h2>
    <p>Energia wiecznego początku: lekkość, humor, gotowość na skok w nieznane. Duchowa wolność.</p>
    <ul>
      <li><strong>W plusie:</strong> spontaniczność, radość życia, brak lęku, świeże spojrzenie.</li>
      <li><strong>W minusie:</strong> nieodpowiedzialność, ryzykanctwo, niedojrzałość, chaos.</li>
      <li><strong>Miłość:</strong> Lekkość i zabawa; dojrzałość przychodzi z czasem.</li>
      <li><strong>Pieniądze:</strong> Nietypowe źródła dochodu, startupy, praca bez sztywnych ram.</li>
    </ul>
    <p class="more">Karta tarota: <a href="/znaczenie-kart/glupiec/">Głupiec – znaczenie w tarocie</a></p>
`,
  },
  {
    slug: "bulawy-w-tarocie",
    title: "Buławy w tarocie: znaczenie wszystkich 14 kart",
    seoTitle: "Buławy w tarocie – znaczenie kart od Asa do Króla (5 Buław, Rycerz Buław) | Moontasia",
    description: "Znaczenie wszystkich kart Buław (Różdżek): As, 2–10 Buław, Paź, Rycerz, Królowa i Król Buław. Co oznacza 5 Buław, a co Rycerz Buław? Prosta, odwrócona i tak/nie.",
    category: "Znaczenie kart",
    date: "2026-10-30",
    lead: "Buławy (zwane też Różdżkami lub Kijami) to kolor ognia: pasji, działania, ambicji i twórczej energii. Gdy w rozkładzie jest ich dużo, sprawa nabiera tempa. Oto krótki przewodnik po wszystkich 14 kartach.",
    cta: ["/rozklad-3-karty/", "Sprawdź, jakie karty wylosujesz"],
    body: `
    <h2>Co oznaczają Buławy w tarocie?</h2>
    <p>Żywioł Buław to <strong>Ogień</strong>. Opowiadają o motywacji, odwadze, karierze, projektach i wszystkim, co robisz z zapałem. W astrologii odpowiadają im znaki ognia: Baran, Lew i Strzelec. Odwrócone Buławy zwykle mówią o zablokowanej energii: braku motywacji, opóźnieniach albo o zapale, który wymknął się spod kontroli.</p>

    <h2>As Buław</h2>
    <p><strong>Nowa energia, iskra pomysłu.</strong> Początek projektu, przypływ inspiracji, nowa pasja. Odwrócony: brak motywacji albo opóźniony start. Tak/nie: <strong>tak</strong>. <a href="/znaczenie-kart/as-bulaw/">As Buław – pełne znaczenie</a></p>

    <h2>Dwójka Buław (2 Buław)</h2>
    <p><strong>Planowanie, patrzenie w przyszłość.</strong> Masz świat w dłoni i decydujesz, dokąd ruszyć. Odwrócona: lęk przed nieznanym, brak planu. Tak/nie: raczej tak. <a href="/znaczenie-kart/dwojka-bulaw/">Dwójka Buław – znaczenie</a></p>

    <h2>Trójka Buław (3 Buław)</h2>
    <p><strong>Ekspansja i oczekiwanie na efekty.</strong> Statki już wypłynęły, teraz czekasz na rezultaty. Dobra karta dla biznesu i podróży. Odwrócona: opóźnienia i przeszkody. Tak/nie: tak. <a href="/znaczenie-kart/trojka-bulaw/">Trójka Buław – znaczenie</a></p>

    <h2>Czwórka Buław (4 Buław)</h2>
    <p><strong>Świętowanie, stabilność, wspólnota.</strong> Jedna z najszczęśliwszych kart talii: przeprowadzka, zaręczyny, sukces zespołu. Odwrócona: odłożone świętowanie. Tak/nie: tak. <a href="/znaczenie-kart/czworka-bulaw/">Czwórka Buław – znaczenie</a></p>

    <h2 id="piatka-bulaw">Piątka Buław (5 Buław)</h2>
    <p><strong>Rywalizacja, konflikt, napięcie.</strong> Pięć postaci wymachuje kijami: każdy ma swoje zdanie i nikt nie słucha. 5 Buław to spory w zespole, konkurencja w pracy, kłótnie o drobiazgi albo zdrowa rywalizacja, która może Cię rozwinąć. W miłości to sprzeczki i walka o rację. Odwrócona: unikanie konfliktu albo jego eskalacja. Tak/nie: <strong>nie</strong>. <a href="/znaczenie-kart/piatka-bulaw/">Piątka Buław – pełne znaczenie</a></p>

    <h2>Szóstka Buław (6 Buław)</h2>
    <p><strong>Sukces, uznanie, triumf.</strong> Wygrana, awans, publiczne docenienie. Odwrócona: brak uznania albo sukces, który się opóźnia. Tak/nie: tak. <a href="/znaczenie-kart/szostka-bulaw/">Szóstka Buław – znaczenie</a></p>

    <h2>Siódemka Buław (7 Buław)</h2>
    <p><strong>Obrona swojego stanowiska.</strong> Jesteś wyżej, ale musisz bronić pozycji. Odwagi! Odwrócona: przytłoczenie, uleganie presji. Tak/nie: tak. <a href="/znaczenie-kart/siodemka-bulaw/">Siódemka Buław – znaczenie</a></p>

    <h2>Ósemka Buław (8 Buław)</h2>
    <p><strong>Szybkie działanie, przyspieszenie.</strong> Wiadomości, podróże, sprawy nabierają tempa. Odwrócona: opóźnienia i frustracja. Tak/nie: tak. <a href="/znaczenie-kart/osemka-bulaw/">Ósemka Buław – znaczenie</a></p>

    <h2>Dziewiątka Buław (9 Buław)</h2>
    <p><strong>Wytrwałość i czujność.</strong> Jesteś zmęczona/y, ale meta jest blisko. Odwrócona: wypalenie, przesadna podejrzliwość. Tak/nie: raczej tak. <a href="/znaczenie-kart/dziewiatka-bulaw/">Dziewiątka Buław – znaczenie</a></p>

    <h2>Dziesiątka Buław (10 Buław)</h2>
    <p><strong>Przeciążenie obowiązkami.</strong> Niesiesz za dużo i sam(a) to wiesz. Czas coś odłożyć lub oddać. Odwrócona: wypalenie albo wreszcie zrzucenie ciężaru. Tak/nie: raczej nie. <a href="/znaczenie-kart/dziesiatka-bulaw/">Dziesiątka Buław – znaczenie</a></p>

    <h2>Paź Buław</h2>
    <p><strong>Entuzjazm, ciekawość, nowy pomysł.</strong> Dobra wiadomość, chęć nauki, młodzieńczy zapał. Odwrócony: chaotyczne plany i impulsywność. Tak/nie: raczej tak. <a href="/znaczenie-kart/paz-bulaw/">Paź Buław – znaczenie</a></p>

    <h2 id="rycerz-bulaw">Rycerz Buław</h2>
    <p><strong>Odwaga, impulsywność, pęd naprzód.</strong> Rycerz Buław pędzi na koniu, zanim ktokolwiek zdąży zapytać „dokąd?”. To energia przygody, przeprowadzki, spontanicznej podróży i działania bez wahania. Jako osoba: ktoś pełen pasji, uwodzicielski, ale trudny do zatrzymania. W miłości zwiastuje gorące uczucie, które musi udowodnić, że jest czymś więcej niż chwilowym zauroczeniem. Odwrócony: porywczość, brak cierpliwości, porzucanie spraw w połowie. Tak/nie: <strong>tak</strong>. <a href="/znaczenie-kart/rycerz-bulaw/">Rycerz Buław – pełne znaczenie</a></p>

    <h2>Królowa Buław</h2>
    <p><strong>Pewność siebie, charyzma, niezależność.</strong> Ciepła, odważna i inspirująca. Odwrócona: zazdrość, niepewność, wypalenie. Tak/nie: tak. <a href="/znaczenie-kart/krolowa-bulaw/">Królowa Buław – znaczenie</a></p>

    <h2>Król Buław</h2>
    <p><strong>Wizja, przywództwo, odwaga.</strong> Przedsiębiorca i lider, który porywa innych. Odwrócony: despotyzm, impulsywne decyzje. Tak/nie: tak. <a href="/znaczenie-kart/krol-bulaw/">Król Buław – znaczenie</a></p>

    <div class="callout"><p>Więcej o postaciach dworskich (Paź, Rycerz, Królowa, Król) przeczytasz w artykule <a href="/blog/karty-dworskie-w-tarocie/">Karty dworskie w tarocie</a>. Pozostałe kolory: <a href="/blog/miecze-w-tarocie/">Miecze</a> oraz <a href="/znaczenie-kart/#kielichy">Kielichy</a> i <a href="/znaczenie-kart/#pentakle">Pentakle</a> w przewodniku po kartach.</p></div>`,
  },
  {
    slug: "miecze-w-tarocie",
    title: "Miecze w tarocie: znaczenie wszystkich 14 kart",
    seoTitle: "Miecze w tarocie – znaczenie kart od Asa do Króla (3 Mieczy i inne) | Moontasia",
    description: "Znaczenie wszystkich kart Mieczy w tarocie: As, 2–10 Mieczy, Paź, Rycerz, Królowa i Król. Co oznacza Trójka Mieczy w miłości? Prosta, odwrócona i tak/nie.",
    category: "Znaczenie kart",
    date: "2026-10-30",
    lead: "Miecze mają opinię najtrudniejszego koloru tarota. To prawda, że mówią o konfliktach i bólu, ale przede wszystkim o myślach, decyzjach i prawdzie. Oto, co oznacza każda z 14 kart.",
    cta: ["/tarot-tak-nie/", "Zadaj kartom pytanie tak/nie"],
    body: `
    <h2>Co oznaczają Miecze w tarocie?</h2>
    <p>Żywioł Mieczy to <strong>Powietrze</strong>: umysł, słowa, decyzje, komunikacja i konflikty. Odpowiadają im znaki powietrza: Bliźnięta, Waga i Wodnik. Miecz tnie w obie strony, więc te karty pokazują zarówno ranę, jak i jasność, która przychodzi, gdy przestajemy się oszukiwać.</p>

    <h2>As Mieczy</h2>
    <p><strong>Jasność umysłu, przełomowa prawda.</strong> Olśnienie, dobra decyzja, przecięcie wątpliwości. Odwrócony: chaos myślowy. Tak/nie: tak. <a href="/znaczenie-kart/as-mieczy/">As Mieczy – znaczenie</a></p>

    <h2>Dwójka Mieczy (2 Mieczy)</h2>
    <p><strong>Trudna decyzja, impas.</strong> Zawiązane oczy i skrzyżowane miecze: odkładasz wybór. Odwrócona: przełamanie impasu. Tak/nie: nie. <a href="/znaczenie-kart/dwojka-mieczy/">Dwójka Mieczy – znaczenie</a></p>

    <h2 id="trojka-mieczy">Trójka Mieczy (3 Mieczy)</h2>
    <p><strong>Ból, zawód, smutek.</strong> Serce przebite trzema mieczami to jedna z najbardziej wymownych kart talii. Trójka Mieczy oznacza zranienie, rozczarowanie, bolesną prawdę albo rozstanie. W miłości może wskazywać zdradę, trójkąt lub słowa, które zabolały. Ważne jednak: to karta, która każe ból przeżyć, a nie go tłumić, i dopiero wtedy zaczyna się uzdrowienie. Odwrócona: uzdrawianie po bólu, wybaczanie, powolne odzyskiwanie spokoju. Tak/nie: <strong>nie</strong>. <a href="/znaczenie-kart/trojka-mieczy/">Trójka Mieczy – pełne znaczenie</a></p>

    <h2>Czwórka Mieczy (4 Mieczy)</h2>
    <p><strong>Odpoczynek, regeneracja.</strong> Czas na pauzę, sen i ciszę. Odwrócona: wymuszony powrót do działania. Tak/nie: nie (jeszcze nie teraz). <a href="/znaczenie-kart/czworka-mieczy/">Czwórka Mieczy – znaczenie</a></p>

    <h2>Piątka Mieczy (5 Mieczy)</h2>
    <p><strong>Konflikt, pyrrusowe zwycięstwo.</strong> Wygrałaś/eś kłótnię, ale czy było warto? Odwrócona: pojednanie. Tak/nie: nie. <a href="/znaczenie-kart/piatka-mieczy/">Piątka Mieczy – znaczenie</a></p>

    <h2>Szóstka Mieczy (6 Mieczy)</h2>
    <p><strong>Przejście, oddalanie się od trudności.</strong> Spokojniejsze wody są przed Tobą. Odwrócona: opór przed zmianą. Tak/nie: raczej tak. <a href="/znaczenie-kart/szostka-mieczy/">Szóstka Mieczy – znaczenie</a></p>

    <h2>Siódemka Mieczy (7 Mieczy)</h2>
    <p><strong>Podstęp, działanie w ukryciu.</strong> Ktoś nie mówi całej prawdy, może Ty sam(a). Odwrócona: prawda wychodzi na jaw. Tak/nie: nie. <a href="/znaczenie-kart/siodemka-mieczy/">Siódemka Mieczy – znaczenie</a></p>

    <h2>Ósemka Mieczy (8 Mieczy)</h2>
    <p><strong>Poczucie uwięzienia.</strong> Więzy są luźniejsze, niż myślisz: to przekonania trzymają Cię w miejscu. Odwrócona: uwalnianie się. Tak/nie: nie. <a href="/znaczenie-kart/osemka-mieczy/">Ósemka Mieczy – znaczenie</a></p>

    <h2>Dziewiątka Mieczy (9 Mieczy)</h2>
    <p><strong>Lęk, zamartwianie się, bezsenne noce.</strong> Najczęściej najgorsze dzieje się w głowie. Odwrócona: ulga. Tak/nie: nie. <a href="/znaczenie-kart/dziewiatka-mieczy/">Dziewiątka Mieczy – znaczenie</a></p>

    <h2>Dziesiątka Mieczy (10 Mieczy)</h2>
    <p><strong>Definitywny koniec, dno.</strong> Gorzej już nie będzie, a na horyzoncie wschodzi słońce. Odwrócona: powolne podnoszenie się. Tak/nie: nie. <a href="/znaczenie-kart/dziesiatka-mieczy/">Dziesiątka Mieczy – znaczenie</a></p>

    <h2>Paź Mieczy</h2>
    <p><strong>Ciekawość, czujność, nowe informacje.</strong> Ktoś obserwuje i zbiera wiadomości. Odwrócony: plotki, pochopne osądy. Tak/nie: niejasne. <a href="/znaczenie-kart/paz-mieczy/">Paź Mieczy – znaczenie</a></p>

    <h2>Rycerz Mieczy</h2>
    <p><strong>Determinacja, szybkie działanie.</strong> Mówi prosto z mostu i pędzi do celu. Odwrócony: impulsywność, konflikt. Tak/nie: raczej tak. <a href="/znaczenie-kart/rycerz-mieczy/">Rycerz Mieczy – znaczenie</a></p>

    <h2>Królowa Mieczy</h2>
    <p><strong>Jasność umysłu, szczerość, niezależność.</strong> Mądra, bystra, nie da się jej oszukać. Odwrócona: chłód, przesadna krytyka. Tak/nie: tak. <a href="/znaczenie-kart/krolowa-mieczy/">Królowa Mieczy – znaczenie</a></p>

    <h2>Król Mieczy</h2>
    <p><strong>Logika, autorytet, obiektywizm.</strong> Ekspert, prawnik, sprawiedliwy sędzia. Odwrócony: manipulacja i surowość. Tak/nie: tak. <a href="/znaczenie-kart/krol-mieczy/">Król Mieczy – znaczenie</a></p>

    <div class="callout"><p>Wylosowane Miecze to nie wyrok. Często pokazują po prostu, gdzie potrzebna jest szczera rozmowa albo decyzja. Zobacz też: <a href="/blog/bulawy-w-tarocie/">Buławy w tarocie</a> i <a href="/blog/karty-odwrocone-w-tarocie/">karty odwrócone</a>.</p></div>`,
  },
  {
    slug: "pytania-do-tarota",
    title: "Pytania do tarota: 40 gotowych pytań o miłość, pracę i siebie",
    seoTitle: "Pytania do tarota – 40 przykładowych pytań do kart (miłość, praca) | Moontasia",
    description: "Jakie pytanie zadać tarotowi? 40 gotowych pytań do kart: o miłość, byłego partnera, pracę, pieniądze, decyzje i rozwój osobisty, plus pytania tak/nie i na kartę dnia.",
    category: "Podstawy",
    date: "2026-10-30",
    lead: "Nie wiesz, o co zapytać karty? Skopiuj jedno z poniższych pytań do tarota albo potraktuj je jako inspirację. Każde z nich działa w darmowych rozkładach na Moontasii.",
    cta: ["/rozklad-3-karty/", "Zadaj pytanie w rozkładzie na 3 karty"],
    body: `
    <p>Dobre pytanie do tarota jest otwarte, dotyczy Ciebie i jednej sprawy naraz. Zasady i najczęstsze błędy opisujemy w poradniku <a href="/blog/jak-zadawac-pytania-tarotowi/">Jak zadawać pytania tarotowi</a>. Tutaj znajdziesz gotowe przykłady.</p>

    <h2>Pytania do tarota o miłość</h2>
    <ol>
      <li>Czego potrzebuję, żeby przyciągnąć zdrową miłość?</li>
      <li>Co blokuje mnie w otwarciu się na nowy związek?</li>
      <li>Jak mogę wzmocnić naszą relację?</li>
      <li>Co ta osoba wnosi do mojego życia?</li>
      <li>Czego mam się nauczyć z tego związku?</li>
      <li>Jak poprawić komunikację z partnerem/partnerką?</li>
      <li>Co powinnam/powinienem wiedzieć o tej znajomości?</li>
      <li>Jaka energia łączy mnie z tą osobą?</li>
    </ol>
    <p>Do takich pytań najlepiej pasuje <a href="/tarot-milosny/">rozkład tarota miłosnego</a> dla par lub singli.</p>

    <h2>Pytania o byłego partnera</h2>
    <ol start="9">
      <li>Czego potrzebuję, żeby zamknąć ten rozdział?</li>
      <li>Czego nauczył mnie ten związek?</li>
      <li>Czy powrót do tej relacji jest dla mnie dobry?</li>
      <li>Jak mogę wybaczyć i pójść dalej?</li>
    </ol>

    <h2>Pytania o pracę i karierę</h2>
    <ol start="13">
      <li>Na czym skupić się w pracy w najbliższym miesiącu?</li>
      <li>Jakie talenty mogę lepiej wykorzystać zawodowo?</li>
      <li>Co pomoże mi w rozmowie kwalifikacyjnej?</li>
      <li>Jak poradzić sobie z konfliktem w zespole?</li>
      <li>Czy to dobry moment na zmianę pracy?</li>
      <li>Co blokuje mój rozwój zawodowy?</li>
      <li>Jak wygląda potencjał tego projektu?</li>
      <li>Czego potrzebuję, żeby uniknąć wypalenia?</li>
    </ol>

    <h2>Pytania o pieniądze</h2>
    <ol start="21">
      <li>Jaki mam stosunek do pieniędzy i co warto w nim zmienić?</li>
      <li>Co pomoże mi poprawić finanse w tym roku?</li>
      <li>Na co uważać przy tej inwestycji lub zakupie?</li>
      <li>Skąd może przyjść dodatkowy dochód?</li>
    </ol>

    <h2>Pytania o decyzje</h2>
    <ol start="25">
      <li>Co powinnam/powinienem wziąć pod uwagę przed tą decyzją?</li>
      <li>Co się stanie, jeśli wybiorę opcję A? (a potem to samo dla opcji B)</li>
      <li>Czego się boję w tej sytuacji?</li>
      <li>Jaki jest najlepszy następny krok?</li>
      <li>Czego nie widzę w tej sprawie?</li>
    </ol>

    <h2>Pytania o rozwój i siebie</h2>
    <ol start="30">
      <li>Czego mam się teraz nauczyć?</li>
      <li>Jaka jest moja największa siła w tym okresie?</li>
      <li>Co mogę puścić?</li>
      <li>Jak mogę lepiej o siebie zadbać?</li>
      <li>Co daje mi prawdziwą radość?</li>
      <li>Jakie przekonanie mnie ogranicza?</li>
    </ol>

    <h2>Pytania tak/nie</h2>
    <p>Na pytania zamknięte wybierz <a href="/tarot-tak-nie/">tarot tak/nie</a> i jedną kartę. Przykłady:</p>
    <ol start="36">
      <li>Czy warto teraz podjąć ten kurs?</li>
      <li>Czy ta podróż dobrze mi zrobi?</li>
      <li>Czy powinnam/powinienem odezwać się pierwsza/y?</li>
    </ol>

    <h2>Pytania na kartę dnia</h2>
    <ol start="39">
      <li>Na co mam dziś zwrócić uwagę?</li>
      <li>Jaka energia będzie mi dziś towarzyszyć?</li>
    </ol>
    <p>Takie pytania zadasz w <a href="/karta-dnia/">karcie dnia</a>.</p>

    <div class="callout"><p>Wskazówka: zapisz pytanie, zanim wylosujesz karty. Po kilku tygodniach możesz wrócić do zapisanych odczytów i sprawdzić, co się sprawdziło. W Moontasii odczyty zapiszesz w przeglądarce, w zakładce <a href="/zapisane-odczyty/">Zapisane odczyty</a>.</p></div>`,
  },
  {
    slug: "karty-milosci-w-tarocie",
    title: "Karty miłości w tarocie: 10 kart, które mówią o uczuciach",
    seoTitle: "Karty miłości w tarocie – które karty oznaczają miłość i związek | Moontasia",
    description: "Które karty tarota oznaczają miłość? Kochankowie, Dwójka Kielichów, As Kielichów i 7 innych kart uczuć: co mówią o związku, zakochaniu i nowej relacji.",
    category: "Znaczenie kart",
    date: "2026-10-27",
    lead: "Gdy pytasz tarot o uczucia, niektóre karty od razu przyspieszają bicie serca. Oto dziesięć kart, które najczęściej mówią o miłości, i to, co oznaczają w związku.",
    cta: ["/tarot-milosny/", "Sprawdź, co karty mówią o Twoich uczuciach"],
    body: `
    <h2>1. Kochankowie</h2>
    <p>Najbardziej znana karta miłości. <a href="/znaczenie-kart/kochankowie/">Kochankowie</a> mówią o głębokiej więzi, wzajemnym przyciąganiu i miłości z wyboru: obie strony świadomie decydują się na siebie. Odwróceni sygnalizują rozdźwięk wartości albo trudny wybór.</p>

    <h2>2. Dwójka Kielichów</h2>
    <p>Klasyczna karta zakochania i wzajemności. <a href="/znaczenie-kart/dwojka-kielichow/">Dwójka Kielichów</a> to dwoje ludzi, którzy patrzą na siebie jak równi partnerzy. Często zapowiada nową relację albo pogodzenie się.</p>

    <h2>3. As Kielichów</h2>
    <p><a href="/znaczenie-kart/as-kielichow/">As Kielichów</a> to przypływ uczuć i otwarcie serca: nowa miłość, czułość albo odnowienie bliskości. Jedna z najpiękniejszych kart w odczycie o związku.</p>

    <h2>4. Dziesiątka Kielichów</h2>
    <p>Szczęśliwy dom, harmonia rodzinna i emocjonalne spełnienie. <a href="/znaczenie-kart/dziesiatka-kielichow/">Dziesiątka Kielichów</a> to miłość, o jakiej się marzy: spokojna, ciepła i trwała.</p>

    <h2>5. Cesarzowa</h2>
    <p><a href="/znaczenie-kart/cesarzowa/">Cesarzowa</a> wnosi do relacji czułość, zmysłowość i troskę. Bywa zapowiedzią rozkwitu uczuć, wspólnego domu, a czasem rodzicielstwa.</p>

    <h2>6. Słońce</h2>
    <p>Radość, szczerość i lekkość bycia razem. <a href="/znaczenie-kart/slonce/">Słońce</a> to jedna z najlepszych kart dla każdego związku i wyraźne „tak” w pytaniach o uczucia.</p>

    <h2>7. Czwórka Buław</h2>
    <p>Świętowanie i stabilizacja: zaręczyny, wspólne zamieszkanie, ślub. <a href="/znaczenie-kart/czworka-bulaw/">Czwórka Buław</a> pojawia się, gdy relacja wchodzi na nowy, radosny etap.</p>

    <h2>8. Rycerz Kielichów</h2>
    <p>Romantyk z sercem na dłoni. <a href="/znaczenie-kart/rycerz-kielichow/">Rycerz Kielichów</a> zapowiada wyznanie, propozycję albo randkę jak z filmu.</p>

    <h2>9. Gwiazda</h2>
    <p>Miłość po trudnym okresie i nadzieja, która wraca. <a href="/znaczenie-kart/gwiazda/">Gwiazda</a> mówi, że serce się leczy i jest gotowe na nowe uczucie.</p>

    <h2>10. Hierofant</h2>
    <p>Tradycja, deklaracje i wspólne wartości. <a href="/znaczenie-kart/hierofant/">Hierofant</a> w odczycie miłosnym często oznacza poważne zamiary, a nawet ślub.</p>

    <div class="callout"><p>Nawet „trudne” karty mają w miłości swój sens. <a href="/znaczenie-kart/wieza/">Wieża</a> burzy to, co było na niepewnych fundamentach, a <a href="/znaczenie-kart/trojka-mieczy/">Trójka Mieczy</a> pokazuje ból, który trzeba przeżyć, by się uleczyć. Znaczenie każdej z 78 kart w miłości znajdziesz w <a href="/znaczenie-kart/">przewodniku po kartach</a>.</p></div>`,
  },
  {
    slug: "czy-on-mnie-kocha-tarot",
    title: "Czy on mnie kocha? Co tarot może powiedzieć o uczuciach drugiej osoby",
    seoTitle: "Czy on mnie kocha? Tarot o uczuciach – jak pytać karty | Moontasia",
    description: "Czy on mnie kocha? Czy ona coś do mnie czuje? Jak zadać kartom pytanie o uczucia drugiej osoby, który rozkład wybrać i jak czytać odpowiedź, żeby naprawdę pomogła.",
    category: "Rozkłady",
    date: "2026-10-27",
    lead: "„Czy on mnie kocha?”, „Czy ona do mnie wróci?”. To pytania, z którymi najczęściej sięgamy po karty. Tarot może tu pomóc, ale pod warunkiem, że wiesz, o co pytać.",
    cta: ["/tarot-milosny/", "Zrób darmowy rozkład miłosny"],
    body: `
    <h2>Czego tarot nie zrobi</h2>
    <p>Tarot nie czyta w myślach i nie zmieni czyichś uczuć. Jeśli zapytasz wprost „czy on mnie kocha?”, karta może odpowiedzieć, ale łatwo wtedy zobaczyć w niej tylko to, czego się boisz albo na co liczysz.</p>

    <h2>Lepsze pytania o uczucia</h2>
    <ul>
      <li>„Z jaką energią ta osoba wchodzi w naszą relację?”</li>
      <li>„Czego potrzebuje nasz związek, żeby się rozwijać?”</li>
      <li>„Co powinnam lub powinienem wiedzieć o tej relacji?”</li>
      <li>„Co blokuje bliskość między nami?”</li>
    </ul>
    <p>Takie pytania dają odpowiedź, z którą możesz coś zrobić, a nie tylko czekać.</p>

    <h2>Który rozkład wybrać?</h2>
    <p>Najlepiej sprawdza się <a href="/tarot-milosny/">tarot miłosny na 3 karty</a>: pierwsza karta opisuje Ciebie, druga drugą osobę, a trzecia waszą relację. Dzięki temu widzisz nie tylko „ją” albo „jego”, ale też to, co sama lub sam wnosisz do związku.</p>
    <p>Jeśli potrzebujesz szybkiej odpowiedzi na konkretne pytanie, np. „Czy to dobry moment, żeby powiedzieć, co czuję?”, użyj <a href="/tarot-tak-nie/">tarota tak/nie</a>.</p>

    <h2>Jak czytać kartę drugiej osoby?</h2>
    <ul>
      <li><strong>Kielichy</strong> mówią o emocjach: ta osoba czuje, nawet jeśli tego nie pokazuje.</li>
      <li><strong>Buławy</strong> to fascynacja, namiętność i chęć działania.</li>
      <li><strong>Pentakle</strong> oznaczają poważne, praktyczne podejście: uczucie okazywane czynami, a nie słowami.</li>
      <li><strong>Miecze</strong> wskazują, że w głowie tej osoby jest dużo myśli, wątpliwości albo niedopowiedzeń.</li>
      <li><strong>Karty dworskie</strong> często opisują styl, w jakim ktoś kocha. Więcej w artykule o <a href="/blog/karty-dworskie-w-tarocie/">kartach dworskich</a>.</li>
    </ul>

    <div class="callout"><p>Gdy karta drugiej osoby jest odwrócona, nie oznacza to braku uczuć. Częściej mówi o blokadzie, lęku przed zaangażowaniem albo trudnym okresie. Zobacz, <a href="/blog/karty-odwrocone-w-tarocie/">co oznaczają karty odwrócone</a>.</p></div>

    <h2>Najważniejsza wskazówka</h2>
    <p>Najlepszą odpowiedź na pytanie „czy mnie kocha?” daje rozmowa. Potraktuj odczyt jako lustro, które pomoże Ci nazwać własne uczucia i zdecydować, co chcesz zrobić dalej.</p>`,
  },
  {
    slug: "tarot-dla-poczatkujacych",
    title: "Tarot dla początkujących: od czego zacząć?",
    seoTitle: "Tarot dla początkujących – jak zacząć czytać karty | Moontasia",
    description: "Tarot dla początkujących krok po kroku: jaką talię wybrać, jak uczyć się znaczeń kart, od jakich rozkładów zacząć i jakich błędów unikać.",
    category: "Podstawy",
    date: "2026-10-22",
    lead: "Tarot wygląda na skomplikowany: 78 kart, symbole, pozycje odwrócone. W praktyce wystarczy kilka prostych nawyków, żeby po paru tygodniach swobodnie czytać pierwsze rozkłady.",
    cta: ["/karta-dnia/", "Zacznij od karty dnia"],
    body: `
    <h2>1. Wybierz talię, która do Ciebie mówi</h2>
    <p>Na początek najlepiej sprawdza się talia <strong>Rider-Waite-Smith</strong> albo talia na niej wzorowana. Każda karta, także w Małych Arkanach, ma tam ilustrowaną scenę, więc znaczenie łatwiej odczytać z obrazka niż z samej liczby. Na tej talii opierają się też opisy w <a href="/znaczenie-kart/">znaczeniu kart</a> na Moontasii.</p>

    <h2>2. Poznaj budowę talii</h2>
    <p>Nie ucz się 78 znaczeń na pamięć od razu. Zacznij od struktury:</p>
    <ul>
      <li><strong>22 Wielkie Arkana</strong>: ważne lekcje i etapy życia, od <a href="/znaczenie-kart/glupiec/">Głupca</a> do <a href="/znaczenie-kart/swiat/">Świata</a>.</li>
      <li><strong>4 kolory Małych Arkanów</strong>: Kielichy (uczucia), Miecze (myśli), Buławy (działanie), Pentakle (materia).</li>
      <li><strong>Liczby</strong>: As to początek, Dziesiątka to zamknięcie cyklu.</li>
    </ul>
    <p>Gdy znasz kolor i liczbę, możesz „wyczytać” sens karty, zanim zajrzysz do opisu. Więcej w artykule <a href="/blog/wielkie-i-male-arkana/">Wielkie i Małe Arkana</a>.</p>

    <h2>3. Losuj jedną kartę dziennie</h2>
    <p>To najlepsze ćwiczenie dla początkujących. Rano wylosuj <a href="/karta-dnia/">kartę dnia</a>, zapisz pierwsze skojarzenie, a wieczorem sprawdź, jak jej energia przejawiła się w ciągu dnia. Po miesiącu poznasz kilkadziesiąt kart „z życia”, a nie z podręcznika.</p>

    <h2>4. Prowadź dziennik tarota</h2>
    <p>Zapisuj datę, pytanie, wylosowane karty i swoją interpretację. Po kilku tygodniach zobaczysz, które karty wracają i jak sprawdzały się Twoje odczyty. Na Moontasii możesz zapisywać odczyty w przeglądarce albo pobierać je jako plik.</p>

    <h2>5. Przejdź do prostych rozkładów</h2>
    <p>Gdy jedna karta przestanie Cię zaskakiwać, sięgnij po <a href="/rozklad-3-karty/">rozkład na 3 karty</a>. To najlepszy most między pojedynczą kartą a dużymi rozkładami, takimi jak <a href="/blog/krzyz-celtycki/">krzyż celtycki</a>. Na pytania zamknięte używaj <a href="/tarot-tak-nie/">tarota tak/nie</a>.</p>

    <div class="callout"><p>Najczęstszy błąd początkujących: losowanie kart tak długo, aż wypadnie „dobra” odpowiedź. Przyjmij pierwszy odczyt i potraktuj go jako materiał do przemyśleń.</p></div>

    <h2>6. Czego unikać na początku?</h2>
    <ul>
      <li>Pytań o zdrowie, śmierć czy decyzje innych ludzi. Tarot najlepiej odpowiada na pytania o Ciebie.</li>
      <li>Czytania tylko z książki. Opis to punkt wyjścia, a Twoje skojarzenia są równie ważne.</li>
      <li>Strachu przed „złymi” kartami. <a href="/znaczenie-kart/smierc/">Śmierć</a> czy <a href="/znaczenie-kart/wieza/">Wieża</a> mówią o zmianie, a nie o nieszczęściu.</li>
    </ul>`,
  },
  {
    slug: "krzyz-celtycki",
    title: "Krzyż celtycki: jak rozłożyć i czytać 10 kart",
    seoTitle: "Krzyż celtycki tarot – rozkład 10 kart i znaczenie pozycji | Moontasia",
    description: "Krzyż celtycki krok po kroku: jak rozłożyć 10 kart tarota, co oznacza każda pozycja i jak połączyć je w spójny odczyt. Z przykładem.",
    category: "Rozkłady",
    date: "2026-10-22",
    lead: "Krzyż celtycki to najsłynniejszy rozkład tarota. Dziesięć kart opisuje sprawę z każdej strony: od sedna i przeszkody, przez podświadomość i otoczenie, po prawdopodobny wynik.",
    cta: ["/rozklad-5-kart/", "Wypróbuj krzyż z 5 kart"],
    body: `
    <h2>Układ kart</h2>
    <p>Sześć kart tworzy krzyż po lewej stronie, a cztery kolejne kolumnę („laskę”) po prawej. Karty kładzie się w ustalonej kolejności, od 1 do 10.</p>

    <h2>Znaczenie pozycji</h2>
    <ol>
      <li><strong>Sedno sprawy</strong>: to, co dzieje się teraz.</li>
      <li><strong>Przeszkoda</strong> (karta położona w poprzek pierwszej): co krzyżuje plany, czasem także to, co pomaga.</li>
      <li><strong>Podstawa</strong>: korzeń sytuacji, często nieuświadomiony.</li>
      <li><strong>Niedawna przeszłość</strong>: co właśnie mija.</li>
      <li><strong>Świadomy cel</strong>: do czego dążysz albo czego się spodziewasz.</li>
      <li><strong>Najbliższa przyszłość</strong>: co nadchodzi w ciągu kilku tygodni.</li>
      <li><strong>Ty</strong>: Twoja postawa wobec sprawy.</li>
      <li><strong>Otoczenie</strong>: wpływ innych ludzi i okoliczności.</li>
      <li><strong>Nadzieje i obawy</strong>: to, czego pragniesz i czego się boisz (często to samo).</li>
      <li><strong>Wynik</strong>: dokąd prowadzi sprawa, jeśli nic się nie zmieni.</li>
    </ol>

    <h2>Jak czytać krzyż celtycki?</h2>
    <p>Nie czytaj dziesięciu kart po kolei jak listy. Lepiej porównywać je parami:</p>
    <ul>
      <li><strong>1 i 2</strong>: na czym polega napięcie w sprawie.</li>
      <li><strong>3 i 5</strong>: czy to, czego chcesz świadomie, zgadza się z tym, co dzieje się „pod spodem”.</li>
      <li><strong>4, 1 i 6</strong>: oś czasu, czyli skąd sprawa przychodzi i dokąd zmierza.</li>
      <li><strong>7 i 8</strong>: Ty kontra otoczenie.</li>
      <li><strong>9 i 10</strong>: czy wynik spełnia nadzieję, czy obawę.</li>
    </ul>
    <p>Policz też Wielkie Arkana. Jeśli jest ich dużo, sprawa ma dla Ciebie dużą wagę. Przewaga jednego koloru wskazuje obszar życia, którego dotyczy odczyt.</p>

    <div class="callout"><p>Krzyż celtycki jest wymagający. Jeśli dopiero zaczynasz, poćwicz najpierw na <a href="/rozklad-5-kart/">krzyżu z 5 kart</a>, który zawiera najważniejsze pozycje: sytuację, przeszłość, przyszłość, cel i przyczynę.</p></div>

    <h2>Przykład</h2>
    <p>Pytanie o zmianę pracy. W pozycji 1 wypada <a href="/znaczenie-kart/osemka-kielichow/">Ósemka Kielichów</a> (odchodzenie od tego, co już nie cieszy), w pozycji 2 <a href="/znaczenie-kart/czworka-pentakli/">Czwórka Pentakli</a> (lęk przed utratą bezpieczeństwa), a w pozycji 10 <a href="/znaczenie-kart/rydwan/">Rydwan</a>. Historia brzmi: chcesz odejść, trzyma Cię strach o stabilność, ale wynik nagradza decyzję i ruch naprzód.</p>`,
  },
  {
    slug: "tarot-milosny",
    title: "Rozkłady tarota na miłość: 3 sposoby, by zapytać karty o związek",
    seoTitle: "Rozkłady tarota na miłość i związek – jak pytać karty o uczucia | Moontasia",
    description: "Najlepsze rozkłady tarota na miłość i związek: rozkład na 3 karty, krzyż z 5 kart i tak/nie. Jak zadawać pytania o relację i które karty mówią o uczuciach.",
    category: "Rozkłady",
    date: "2026-10-22",
    lead: "Pytania o miłość to najczęstszy powód, dla którego sięgamy po tarot. Żeby odczyt naprawdę pomógł, warto dobrać odpowiedni rozkład i dobrze sformułować pytanie.",
    cta: ["/tarot-milosny/", "Zrób rozkład tarota miłosnego"],
    body: `
    <h2>Jak pytać tarot o miłość?</h2>
    <p>Tarot nie czyta w cudzych myślach i nie zmusi nikogo do uczucia. Najlepiej działa, gdy pytasz o siebie i swoją rolę w relacji:</p>
    <ul>
      <li>zamiast „Czy on mnie kocha?”: „Co mogę zrobić, żeby ta relacja była zdrowsza?”,</li>
      <li>zamiast „Czy wróci?”: „Czego ta relacja ma mnie nauczyć?”,</li>
      <li>zamiast „Kiedy kogoś poznam?”: „Co blokuje mnie w otwieraniu się na miłość?”.</li>
    </ul>

    <h2>Rozkład miłosny na 3 karty</h2>
    <p>Prosty i bardzo pojemny. Gotowy znajdziesz w <a href="/tarot-milosny/">tarocie miłosnym online</a>, gdzie każda karta jest czytana w kontekście uczuć:</p>
    <ol>
      <li><strong>Ty</strong>: co wnosisz do relacji.</li>
      <li><strong>Partner lub partnerka</strong>: co wnosi druga strona.</li>
      <li><strong>Relacja</strong>: czym jest wasz związek i dokąd zmierza.</li>
    </ol>

    <h2>Rozkład „Związek” na 5 kart</h2>
    <p>Gdy sprawa jest bardziej złożona, sięgnij po <a href="/rozklad-5-kart/">krzyż z 5 kart</a>: środek to obecny stan związku, lewa karta to przeszłość relacji, prawa to kierunek, w którym zmierza, górna to to, czego oboje pragniecie, a dolna to ukryta przyczyna problemów.</p>

    <h2>Karty miłości w tarocie</h2>
    <ul>
      <li><a href="/znaczenie-kart/kochankowie/">Kochankowie</a>: wybór sercem, głęboka więź.</li>
      <li><a href="/znaczenie-kart/dwojka-kielichow/">Dwójka Kielichów</a>: wzajemność, nowa relacja, partnerstwo.</li>
      <li><a href="/znaczenie-kart/as-kielichow/">As Kielichów</a>: nowe uczucie, otwarcie serca.</li>
      <li><a href="/znaczenie-kart/dziesiatka-kielichow/">Dziesiątka Kielichów</a>: szczęśliwy dom i rodzina.</li>
      <li><a href="/znaczenie-kart/trojka-mieczy/">Trójka Mieczy</a>: zranienie, rozczarowanie, ale też początek uzdrowienia.</li>
    </ul>

    <div class="callout"><p>Chcesz spojrzeć na związek z innej strony? Oblicz <a href="/matryca-partnerska/">matrycę partnerską</a> z dat urodzenia obu osób. Pokaże wspólne energie i linię miłości pary.</p></div>

    <h2>Szybkie pytanie tak/nie</h2>
    <p>Jeśli potrzebujesz krótkiej odpowiedzi, np. „Czy to dobry moment na rozmowę o wspólnym mieszkaniu?”, użyj <a href="/tarot-tak-nie/">tarota tak/nie</a>. Pamiętaj, by przyjąć pierwszą odpowiedź i nie losować do skutku.</p>`,
  },
  {
    slug: "jak-zadawac-pytania-tarotowi",
    title: "Jak zadawać pytania tarotowi? 12 przykładów",
    seoTitle: "Jak zadawać pytania do tarota – dobre i złe pytania, przykłady | Moontasia",
    description: "Jak zadać dobre pytanie do tarota? Zasady formułowania pytań, najczęstsze błędy i 12 gotowych przykładów pytań o miłość, pracę i rozwój.",
    category: "Podstawy",
    date: "2026-10-22",
    lead: "Odpowiedź tarota jest tak dobra, jak pytanie. To samo losowanie może być bezużyteczne albo bardzo pomocne, w zależności od tego, jak sformułujesz to, o co pytasz.",
    cta: ["/rozklad-3-karty/", "Zadaj pytanie kartom"],
    body: `
    <h2>Cztery zasady dobrego pytania</h2>
    <ol>
      <li><strong>Pytaj o siebie.</strong> Możesz zmienić tylko swoje działania, więc pytania o Ciebie dają najwięcej.</li>
      <li><strong>Pytaj otwarcie.</strong> „Jak”, „co”, „czego” dają szerszą odpowiedź niż „czy”.</li>
      <li><strong>Jedna sprawa naraz.</strong> „Czy zmienić pracę i przeprowadzić się?” to dwa pytania.</li>
      <li><strong>Określ czas</strong>, jeśli ma znaczenie: „w najbliższych trzech miesiącach”.</li>
    </ol>

    <h2>Pytania, które warto przeformułować</h2>
    <ul>
      <li>„Czy on mnie zdradza?” → „Co pomoże mi odbudować zaufanie w tym związku?”</li>
      <li>„Czy dostanę tę pracę?” → „Na co zwrócić uwagę w procesie rekrutacji?”</li>
      <li>„Czy będę bogata/bogaty?” → „Co blokuje mój przepływ pieniędzy?”</li>
    </ul>

    <h2>12 gotowych pytań</h2>
    <h3>Miłość</h3>
    <ul>
      <li>Czego potrzebuję, żeby czuć się bezpiecznie w związku?</li>
      <li>Jaki wzorzec powtarzam w relacjach?</li>
      <li>Co pomoże nam lepiej się porozumieć?</li>
    </ul>
    <h3>Praca i pieniądze</h3>
    <ul>
      <li>Jaki kierunek rozwoju zawodowego jest teraz dla mnie najlepszy?</li>
      <li>Co pomoże mi zrealizować ten projekt?</li>
      <li>Na co uważać w nowej pracy?</li>
    </ul>
    <h3>Rozwój osobisty</h3>
    <ul>
      <li>Czego uczy mnie obecna sytuacja?</li>
      <li>Co mogę dziś zrobić dla siebie?</li>
      <li>Jaki talent zaniedbuję?</li>
    </ul>
    <h3>Pytania tak/nie</h3>
    <ul>
      <li>Czy to dobry moment na zmianę pracy?</li>
      <li>Czy warto podjąć ten kurs?</li>
      <li>Czy wyjazd w tym miesiącu będzie udany?</li>
    </ul>
    <p>Pytania tak/nie najlepiej zadawać w odczycie z jednej karty: <a href="/tarot-tak-nie/">tarot tak/nie</a>. Pozostałe pasują do <a href="/rozklad-3-karty/">rozkładu na 3 karty</a> albo <a href="/rozklad-5-kart/">krzyża z 5 kart</a>.</p>

    <div class="callout"><p>Na Moontasii przykładowe pytania znajdziesz też pod polem pytania. Kliknij jedno z nich, żeby wpisać je od razu.</p></div>`,
  },
  {
    slug: "jak-przygotowac-talie-tarota",
    title: "Jak przygotować, tasować i oczyścić talię tarota",
    seoTitle: "Jak tasować i oczyścić karty tarota – przygotowanie talii | Moontasia",
    description: "Jak przygotować nową talię tarota, jak ją tasować, przekładać i wybierać karty oraz jak oczyścić karty po trudnym odczycie. Praktyczny poradnik.",
    category: "Podstawy",
    date: "2026-10-22",
    lead: "Nowa talia tarota to nie tylko 78 kartoników. Wiele osób traktuje ją jak narzędzie, z którym trzeba się zaprzyjaźnić. Oto proste rytuały, które pomagają skupić się przed odczytem.",
    cta: ["/rozklad-3-karty/", "Wylosuj karty online"],
    body: `
    <h2>Pierwsze spotkanie z talią</h2>
    <p>Zanim zaczniesz wróżyć, przejrzyj każdą kartę po kolei. Zatrzymaj się przy tych, które Cię poruszają, i zapisz pierwsze skojarzenia. Możesz też ułożyć karty w porządku: Wielkie Arkana od <a href="/znaczenie-kart/glupiec/">Głupca</a> do <a href="/znaczenie-kart/swiat/">Świata</a>, a potem cztery kolory od Asa do Króla.</p>

    <h2>Jak tasować karty tarota?</h2>
    <ul>
      <li><strong>Tasowanie „przekładanką”</strong>: przekładasz małe pliki kart z ręki do ręki. Delikatne dla kart i najpopularniejsze.</li>
      <li><strong>Mieszanie na stole</strong>: rozkładasz karty i mieszasz je dłońmi. Tak najłatwiej uzyskać karty odwrócone.</li>
      <li><strong>Riffle</strong> (jak w kasynie): szybkie, ale z czasem niszczy karty.</li>
    </ul>
    <p>Podczas tasowania myśl o swoim pytaniu. Przestań, gdy poczujesz, że to ten moment. Nie ma jednej właściwej liczby przetasowań.</p>

    <h2>Przełożenie i wybór kart</h2>
    <p>Tradycyjnie talię przekłada się lewą ręką na trzy stosy i składa w dowolnej kolejności. Karty możesz brać z wierzchu albo rozłożyć talię wachlarzem i wybierać intuicyjnie. Jeśli korzystasz z kart odwróconych, zdecyduj o tym przed tasowaniem. Więcej w artykule <a href="/blog/karty-odwrocone-w-tarocie/">karty odwrócone w tarocie</a>.</p>

    <h2>Jak oczyścić talię?</h2>
    <p>Po trudnym odczycie albo gdy karty „nie mówią”, wiele osób oczyszcza talię. Popularne sposoby:</p>
    <ul>
      <li>ułożenie talii w kolejności od pierwszej do ostatniej karty,</li>
      <li>pozostawienie kart na noc w świetle księżyca,</li>
      <li>dym z szałwii lub kadzidła,</li>
      <li>kryształ (np. ametyst lub kwarc) położony na talii,</li>
      <li>kilka mocnych uderzeń w talię, które symbolicznie „strząsają” poprzedni odczyt.</li>
    </ul>

    <div class="callout"><p>Nie masz talii przy sobie? Na Moontasii możesz wylosować karty online jednym kliknięciem, a jeśli masz własną talię, wybrać wyciągnięte karty z listy i od razu przeczytać interpretację.</p></div>`,
  },
  {
    slug: "karty-dworskie-w-tarocie",
    title: "Karty dworskie w tarocie: Paź, Rycerz, Królowa i Król",
    seoTitle: "Karty dworskie w tarocie – Paź, Rycerz, Królowa, Król | Moontasia",
    description: "Karty dworskie to najtrudniejsza część talii tarota. Wyjaśniamy, co oznaczają Paź, Rycerz, Królowa i Król, kiedy opisują osobę, a kiedy Twoją postawę.",
    category: "Znaczenie kart",
    date: "2026-10-22",
    lead: "Szesnaście kart dworskich sprawia początkującym najwięcej kłopotu. Czy Królowa Kielichów to konkretna kobieta, czy moja intuicja? Wyjaśniamy, jak je czytać.",
    cta: ["/znaczenie-kart/", "Zobacz znaczenie wszystkich kart"],
    body: `
    <h2>Cztery stopnie dojrzałości</h2>
    <ul>
      <li><strong>Paź</strong>: uczeń, ciekawość, początek nauki. Często też wiadomość.</li>
      <li><strong>Rycerz</strong>: działanie, ruch, pęd. Energia skrajna, czasem przesadna.</li>
      <li><strong>Królowa</strong>: dojrzałość skierowana do wewnątrz: opieka, zrozumienie, mądrość emocjonalna.</li>
      <li><strong>Król</strong>: dojrzałość skierowana na zewnątrz: przywództwo, odpowiedzialność, decyzje.</li>
    </ul>

    <h2>Kolor mówi, w czym jest „dobra” dana postać</h2>
    <ul>
      <li><strong>Kielichy</strong>: uczucia i relacje, np. <a href="/znaczenie-kart/krolowa-kielichow/">Królowa Kielichów</a> to empatyczna, intuicyjna opiekunka.</li>
      <li><strong>Miecze</strong>: umysł i słowo, np. <a href="/znaczenie-kart/rycerz-mieczy/">Rycerz Mieczy</a> to szybka, ostra decyzja albo kłótnia.</li>
      <li><strong>Buławy</strong>: pasja i działanie, np. <a href="/znaczenie-kart/krol-bulaw/">Król Buław</a> to charyzmatyczny lider.</li>
      <li><strong>Pentakle</strong>: praktyczność i pieniądze, np. <a href="/znaczenie-kart/krol-pentakli/">Król Pentakli</a> to stabilny, zamożny budowniczy.</li>
    </ul>

    <h2>Osoba czy postawa?</h2>
    <p>Karta dworska może opisywać:</p>
    <ol>
      <li><strong>konkretną osobę</strong> w Twoim otoczeniu, zwłaszcza w pozycji „otoczenie” albo gdy pytasz o kogoś,</li>
      <li><strong>Twoją postawę</strong>, którą przyjmujesz albo którą warto przyjąć,</li>
      <li><strong>styl działania</strong> potrzebny w danej sytuacji.</li>
    </ol>
    <p>Dobra zasada: najpierw sprawdź, czy karta pasuje do Ciebie. Dopiero gdy wyraźnie nie pasuje, szukaj tej osoby wokół siebie. Płeć postaci nie ma znaczenia, bo Królowa może opisywać mężczyznę, a Rycerz kobietę.</p>

    <div class="callout"><p>Gdy w rozkładzie pojawia się kilka kart dworskich, w sprawie bierze udział wiele osób albo wiele „głosów” w Tobie. Warto zapytać, czyje zdanie jest naprawdę Twoje.</p></div>

    <h2>Gdzie sprawdzić znaczenia?</h2>
    <p>Opisy wszystkich 16 kart dworskich, w pozycji prostej i odwróconej, znajdziesz w <a href="/znaczenie-kart/">znaczeniu kart tarota</a>. Każda karta ma osobną stronę z radą, odpowiedzią tak/nie i wskazówką na dziś.</p>`,
  },
  {
    slug: "matryca-przeznaczenia-jak-czytac",
    title: "Matryca przeznaczenia: jak ją czytać krok po kroku",
    seoTitle: "Matryca przeznaczenia – jak czytać i interpretować punkty | Moontasia",
    description: "Jak czytać matrycę przeznaczenia? Znaczenie punktów A–E, kwadratu rodowego, ogona karmicznego, linii miłości i pieniędzy. Poradnik krok po kroku.",
    category: "Matryca",
    date: "2026-10-22",
    lead: "Matryca przeznaczenia wygląda jak skomplikowany diagram pełen liczb. W rzeczywistości czyta się ją w kilku prostych krokach, od centrum na zewnątrz.",
    cta: ["/matryca/", "Oblicz swoją matrycę"],
    body: `
    <h2>Krok 1: zacznij od centrum (E)</h2>
    <p>Punkt w środku to Twoja strefa komfortu i najważniejsza energia. To „tryb domyślny”, w którym czujesz się najlepiej i który najbardziej widzą inni. Jeśli w centrum masz np. 10, czyli <a href="/znaczenie-kart/kolo-fortuny/">Koło Fortuny</a>, dobrze odnajdujesz się w zmianach i cyklach.</p>

    <h2>Krok 2: kwadrat osobisty (A, B, C, D)</h2>
    <ul>
      <li><strong>A, lewo</strong>: portret, charakter, pierwszy talent (z dnia urodzenia).</li>
      <li><strong>B, góra</strong>: talenty duchowe (z miesiąca).</li>
      <li><strong>C, prawo</strong>: zadanie życiowe, kim chcesz się stać (z roku).</li>
      <li><strong>D, dół</strong>: karma, czyli lekcje przyniesione z przeszłości.</li>
    </ul>

    <h2>Krok 3: kwadrat rodowy (F, G, H, I)</h2>
    <p>Narożniki opisują to, co dostałaś lub dostałeś od rodziny: górne to dary duchowe po linii ojca i matki, dolne to materialne zadania rodu. Punkt I otwiera ogon karmiczny.</p>

    <h2>Krok 4: ogon karmiczny</h2>
    <p>Trzy liczby u dołu matrycy czyta się jak historię: źródło wzorca, jego codzienny przejaw i lekcja do domknięcia. Cień tych arkanów opisuje powtarzające się trudności, a ich jasna strona kierunek zmiany.</p>

    <h2>Krok 5: linia miłości i linia pieniędzy</h2>
    <p>Dwa punkty między centrum a prawym dolnym narożnikiem, oznaczone ♥ i $. Linia miłości mówi, czego szukasz w relacjach, a linia pieniędzy, skąd naturalnie płynie dostatek. Obie wychodzą z tej samej bazy rodowej, dlatego uzdrowienie relacji często otwiera też przepływ pieniędzy.</p>

    <h2>Krok 6: cykle życia</h2>
    <p>Liczby na obwodzie to energie kolejnych lat życia. Kalkulator na Moontasii podświetla dekadę, w której jesteś teraz.</p>

    <div class="callout"><p>Każda liczba w matrycy to jeden z 22 Wielkich Arkanów tarota. Jeśli chcesz poznać daną energię głębiej, przeczytaj opis karty w <a href="/znaczenie-kart/#wielkie-arkana">znaczeniu Wielkich Arkanów</a>.</p></div>

    <h2>Matryca dla dwojga</h2>
    <p>Jeśli chcesz sprawdzić związek, oblicz <a href="/matryca-partnerska/">matrycę partnerską</a>. Czyta się ją tak samo, ale opisuje relację, a nie pojedynczą osobę.</p>`,
  },
  {
    slug: "ascendent-co-oznacza",
    title: "Ascendent: co mówi o Tobie znak wschodzący?",
    seoTitle: "Ascendent – co oznacza znak wschodzący i jak go obliczyć | Moontasia",
    description: "Co to jest ascendent i czym różni się od znaku zodiaku? Jak obliczyć znak wschodzący, dlaczego potrzebna jest godzina urodzenia i co ascendent mówi o Tobie.",
    category: "Astrologia",
    date: "2026-10-22",
    lead: "„Jestem Bykiem, ale w ogóle się z tym nie utożsamiam.” Jeśli znasz to uczucie, odpowiedź może kryć się w ascendencie, czyli znaku, który wschodził w chwili Twoich narodzin.",
    cta: ["/ascendent/", "Oblicz swój ascendent"],
    body: `
    <h2>Znak Słońca a ascendent</h2>
    <p>Znak zodiaku, który znasz z horoskopów, to położenie Słońca w dniu urodzenia. Opisuje Twoją tożsamość i to, co daje Ci energię. <strong>Ascendent</strong> to znak, który w chwili narodzin wschodził nad wschodnim horyzontem. Opisuje, jak pokazujesz się światu: pierwsze wrażenie, styl bycia i odruchowe reakcje.</p>
    <p>Dlatego osoba ze Słońcem w Koziorożcu i ascendentem w Lwie może sprawiać wrażenie ciepłej i przebojowej, a dopiero bliżej okazuje się poważnym, ambitnym strategiem.</p>

    <h2>Dlaczego potrzebna jest godzina urodzenia?</h2>
    <p>W ciągu doby przez horyzont przechodzi cały zodiak, więc ascendent zmienia znak średnio co dwie godziny, a o jeden stopień przesuwa się co około cztery minuty. Dwie osoby urodzone tego samego dnia mogą mieć zupełnie różne ascendenty. Dokładną godzinę urodzenia znajdziesz w odpisie zupełnym aktu urodzenia.</p>

    <h2>Co jeszcze pokazuje kalkulator?</h2>
    <ul>
      <li><strong>Słońce</strong>: Twój znak zodiaku.</li>
      <li><strong>MC (Medium Coeli)</strong>: najwyższy punkt nieba w chwili urodzenia, który opisuje powołanie i karierę.</li>
      <li><strong>Połączenie Słońca i ascendentu</strong>: kim jesteś w środku, a jak widzą Cię inni.</li>
    </ul>

    <h2>Ascendent w skrócie</h2>
    <ul>
      <li><strong>Ogień (Baran, Lew, Strzelec)</strong>: energiczne, odważne pierwsze wrażenie.</li>
      <li><strong>Ziemia (Byk, Panna, Koziorożec)</strong>: spokój, konkret, wiarygodność.</li>
      <li><strong>Powietrze (Bliźnięta, Waga, Wodnik)</strong>: towarzyskość, lekkość, ciekawość.</li>
      <li><strong>Woda (Rak, Skorpion, Ryby)</strong>: wrażliwość, głębia, intuicja.</li>
    </ul>

    <div class="callout"><p>Kalkulator na Moontasii liczy ascendent astronomicznie, z uwzględnieniem strefy czasowej i czasu letniego. Gdy wynik leży blisko granicy znaków, pokazuje ostrzeżenie i podpowiada, który sąsiedni znak warto sprawdzić.</p></div>`,
  },
];

export const POSTS = [...NEW_POSTS, ...LEGACY_POSTS];
