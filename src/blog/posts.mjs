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
    <p>Gdy jedna karta przestanie Cię zaskakiwać, sięgnij po <a href="/">rozkład na 3 karty</a>. To najlepszy most między pojedynczą kartą a dużymi rozkładami, takimi jak <a href="/blog/krzyz-celtycki/">krzyż celtycki</a>. Na pytania zamknięte używaj <a href="/tarot-tak-nie/">tarota tak/nie</a>.</p>

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
    title: "Tarot miłosny: rozkłady na miłość i związek",
    seoTitle: "Tarot miłosny – rozkłady na miłość, związek i uczucia | Moontasia",
    description: "Tarot miłosny: najlepsze rozkłady na miłość i związek, karty, które mówią o uczuciach, oraz jak zadawać pytania o relację, żeby odczyt był pomocny.",
    category: "Rozkłady",
    date: "2026-10-22",
    lead: "Pytania o miłość to najczęstszy powód, dla którego sięgamy po tarot. Żeby odczyt naprawdę pomógł, warto dobrać odpowiedni rozkład i dobrze sformułować pytanie.",
    cta: ["/", "Zrób rozkład o swoim związku"],
    body: `
    <h2>Jak pytać tarot o miłość?</h2>
    <p>Tarot nie czyta w cudzych myślach i nie zmusi nikogo do uczucia. Najlepiej działa, gdy pytasz o siebie i swoją rolę w relacji:</p>
    <ul>
      <li>zamiast „Czy on mnie kocha?”: „Co mogę zrobić, żeby ta relacja była zdrowsza?”,</li>
      <li>zamiast „Czy wróci?”: „Czego ta relacja ma mnie nauczyć?”,</li>
      <li>zamiast „Kiedy kogoś poznam?”: „Co blokuje mnie w otwieraniu się na miłość?”.</li>
    </ul>

    <h2>Rozkład miłosny na 3 karty</h2>
    <p>Prosty i bardzo pojemny. Wykorzystaj <a href="/">rozkład na 3 karty</a> i przypisz pozycjom nowe znaczenia:</p>
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
    cta: ["/", "Zadaj pytanie kartom"],
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
    <p>Pytania tak/nie najlepiej zadawać w odczycie z jednej karty: <a href="/tarot-tak-nie/">tarot tak/nie</a>. Pozostałe pasują do <a href="/">rozkładu na 3 karty</a> albo <a href="/rozklad-5-kart/">krzyża z 5 kart</a>.</p>

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
    cta: ["/", "Wylosuj karty online"],
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
