/* ============================================================
   Tarot Apka — baza kart i znaczeń
   Każda karta: { file, en, pl, suit }
   suit: 'major' | 'pentacles' | 'wands' | 'cups' | 'swords'
   MEANINGS[en] = {
     upright:  { keyword, meaning, obstacle, solution },
     reversed: { keyword, meaning, obstacle, solution }
   }
   ============================================================ */

const CARDS = [
  // Wielkie Arkana
  { file: "karty/01-the-fool.svg", en: "The Fool", pl: "Głupiec", suit: "major" },
  { file: "karty/02-the-magician.svg", en: "The Magician", pl: "Mag", suit: "major" },
  { file: "karty/03-the-high-priestess.svg", en: "The High Priestess", pl: "Kapłanka", suit: "major" },
  { file: "karty/04-the-empress.svg", en: "The Empress", pl: "Cesarzowa", suit: "major" },
  { file: "karty/05-the-emperor.svg", en: "The Emperor", pl: "Cesarz", suit: "major" },
  { file: "karty/06-the-hierophant.svg", en: "The Hierophant", pl: "Hierofant", suit: "major" },
  { file: "karty/07-the-lovers.svg", en: "The Lovers", pl: "Kochankowie", suit: "major" },
  { file: "karty/08-the-chariot.svg", en: "The Chariot", pl: "Rydwan", suit: "major" },
  { file: "karty/09-strength.svg", en: "Strength", pl: "Siła", suit: "major" },
  { file: "karty/10-the-hermit.svg", en: "The Hermit", pl: "Pustelnik", suit: "major" },
  { file: "karty/11-wheel-of-fortune.svg", en: "Wheel of Fortune", pl: "Koło Fortuny", suit: "major" },
  { file: "karty/12-justice.svg", en: "Justice", pl: "Sprawiedliwość", suit: "major" },
  { file: "karty/13-the-hanged-man.svg", en: "The Hanged Man", pl: "Wisielec", suit: "major" },
  { file: "karty/14-death.svg", en: "Death", pl: "Śmierć", suit: "major" },
  { file: "karty/15-temperance.svg", en: "Temperance", pl: "Umiarkowanie", suit: "major" },
  { file: "karty/16-the-devil.svg", en: "The Devil", pl: "Diabeł", suit: "major" },
  { file: "karty/17-the-tower.svg", en: "The Tower", pl: "Wieża", suit: "major" },
  { file: "karty/18-the-star.svg", en: "The Star", pl: "Gwiazda", suit: "major" },
  { file: "karty/19-the-moon.svg", en: "The Moon", pl: "Księżyc", suit: "major" },
  { file: "karty/20-the-sun.svg", en: "The Sun", pl: "Słońce", suit: "major" },
  { file: "karty/21-judgement.svg", en: "Judgement", pl: "Sąd", suit: "major" },
  { file: "karty/22-the-world.svg", en: "The World", pl: "Świat", suit: "major" },

  // Pentakle
  { file: "karty/23-ace-of-pentacles.svg", en: "Ace of Pentacles", pl: "As Pentakli", suit: "pentacles" },
  { file: "karty/24-two-of-pentacles.svg", en: "Two of Pentacles", pl: "Dwójka Pentakli", suit: "pentacles" },
  { file: "karty/25-three-of-pentacles.svg", en: "Three of Pentacles", pl: "Trójka Pentakli", suit: "pentacles" },
  { file: "karty/26-four-of-pentacles.svg", en: "Four of Pentacles", pl: "Czwórka Pentakli", suit: "pentacles" },
  { file: "karty/27-five-of-pentacles.svg", en: "Five of Pentacles", pl: "Piątka Pentakli", suit: "pentacles" },
  { file: "karty/28-six-of-pentacles.svg", en: "Six of Pentacles", pl: "Szóstka Pentakli", suit: "pentacles" },
  { file: "karty/29-seven-of-pentacles.svg", en: "Seven of Pentacles", pl: "Siódemka Pentakli", suit: "pentacles" },
  { file: "karty/30-eight-of-pentacles.svg", en: "Eight of Pentacles", pl: "Ósemka Pentakli", suit: "pentacles" },
  { file: "karty/31-nine-of-pentacles.svg", en: "Nine of Pentacles", pl: "Dziewiątka Pentakli", suit: "pentacles" },
  { file: "karty/32-ten-of-pentacles.svg", en: "Ten of Pentacles", pl: "Dziesiątka Pentakli", suit: "pentacles" },
  { file: "karty/33-page-of-pentacles.svg", en: "Page of Pentacles", pl: "Paź Pentakli", suit: "pentacles" },
  { file: "karty/34-knight-of-pentacles.svg", en: "Knight of Pentacles", pl: "Rycerz Pentakli", suit: "pentacles" },
  { file: "karty/35-queen-of-pentacles.svg", en: "Queen of Pentacles", pl: "Królowa Pentakli", suit: "pentacles" },
  { file: "karty/36-king-of-pentacles.svg", en: "King of Pentacles", pl: "Król Pentakli", suit: "pentacles" },

  // Buławy
  { file: "karty/37-ace-of-wands.svg", en: "Ace of Wands", pl: "As Buław", suit: "wands" },
  { file: "karty/38-two-of-wands.svg", en: "Two of Wands", pl: "Dwójka Buław", suit: "wands" },
  { file: "karty/39-three-of-wands.svg", en: "Three of Wands", pl: "Trójka Buław", suit: "wands" },
  { file: "karty/40-four-of-wands.svg", en: "Four of Wands", pl: "Czwórka Buław", suit: "wands" },
  { file: "karty/41-five-of-wands.svg", en: "Five of Wands", pl: "Piątka Buław", suit: "wands" },
  { file: "karty/42-six-of-wands.svg", en: "Six of Wands", pl: "Szóstka Buław", suit: "wands" },
  { file: "karty/43-seven-of-wands.svg", en: "Seven of Wands", pl: "Siódemka Buław", suit: "wands" },
  { file: "karty/44-eight-of-wands.svg", en: "Eight of Wands", pl: "Ósemka Buław", suit: "wands" },
  { file: "karty/45-nine-of-wands.svg", en: "Nine of Wands", pl: "Dziewiątka Buław", suit: "wands" },
  { file: "karty/46-ten-of-wands.svg", en: "Ten of Wands", pl: "Dziesiątka Buław", suit: "wands" },
  { file: "karty/47-page-of-wands.svg", en: "Page of Wands", pl: "Paź Buław", suit: "wands" },
  { file: "karty/48-knight-of-wands.svg", en: "Knight of Wands", pl: "Rycerz Buław", suit: "wands" },
  { file: "karty/49-queen-of-wands.svg", en: "Queen of Wands", pl: "Królowa Buław", suit: "wands" },
  { file: "karty/50-king-of-wands.svg", en: "King of Wands", pl: "Król Buław", suit: "wands" },

  // Kielichy
  { file: "karty/51-ace-of-cups.svg", en: "Ace of Cups", pl: "As Kielichów", suit: "cups" },
  { file: "karty/52-two-of-cups.svg", en: "Two of Cups", pl: "Dwójka Kielichów", suit: "cups" },
  { file: "karty/53-three-of-cups.svg", en: "Three of Cups", pl: "Trójka Kielichów", suit: "cups" },
  { file: "karty/54-four-of-cups.svg", en: "Four of Cups", pl: "Czwórka Kielichów", suit: "cups" },
  { file: "karty/55-five-of-cups.svg", en: "Five of Cups", pl: "Piątka Kielichów", suit: "cups" },
  { file: "karty/56-six-of-cups.svg", en: "Six of Cups", pl: "Szóstka Kielichów", suit: "cups" },
  { file: "karty/57-seven-of-cups.svg", en: "Seven of Cups", pl: "Siódemka Kielichów", suit: "cups" },
  { file: "karty/58-eight-of-cups.svg", en: "Eight of Cups", pl: "Ósemka Kielichów", suit: "cups" },
  { file: "karty/59-nine-of-cups.svg", en: "Nine of Cups", pl: "Dziewiątka Kielichów", suit: "cups" },
  { file: "karty/60-ten-of-cups.svg", en: "Ten of Cups", pl: "Dziesiątka Kielichów", suit: "cups" },
  { file: "karty/61-page-of-cups.svg", en: "Page of Cups", pl: "Paź Kielichów", suit: "cups" },
  { file: "karty/62-knight-of-cups.svg", en: "Knight of Cups", pl: "Rycerz Kielichów", suit: "cups" },
  { file: "karty/63-queen-of-cups.svg", en: "Queen of Cups", pl: "Królowa Kielichów", suit: "cups" },
  { file: "karty/64-king-of-cups.svg", en: "King of Cups", pl: "Król Kielichów", suit: "cups" },

  // Miecze
  { file: "karty/65-ace-of-swords.svg", en: "Ace of Swords", pl: "As Mieczy", suit: "swords" },
  { file: "karty/66-two-of-swords.svg", en: "Two of Swords", pl: "Dwójka Mieczy", suit: "swords" },
  { file: "karty/67-three-of-swords.svg", en: "Three of Swords", pl: "Trójka Mieczy", suit: "swords" },
  { file: "karty/68-four-of-swords.svg", en: "Four of Swords", pl: "Czwórka Mieczy", suit: "swords" },
  { file: "karty/69-five-of-swords.svg", en: "Five of Swords", pl: "Piątka Mieczy", suit: "swords" },
  { file: "karty/70-six-of-swords.svg", en: "Six of Swords", pl: "Szóstka Mieczy", suit: "swords" },
  { file: "karty/71-seven-of-swords.svg", en: "Seven of Swords", pl: "Siódemka Mieczy", suit: "swords" },
  { file: "karty/72-eight-of-swords.svg", en: "Eight of Swords", pl: "Ósemka Mieczy", suit: "swords" },
  { file: "karty/73-nine-of-swords.svg", en: "Nine of Swords", pl: "Dziewiątka Mieczy", suit: "swords" },
  { file: "karty/74-ten-of-swords.svg", en: "Ten of Swords", pl: "Dziesiątka Mieczy", suit: "swords" },
  { file: "karty/75-page-of-swords.svg", en: "Page of Swords", pl: "Paź Mieczy", suit: "swords" },
  { file: "karty/76-knight-of-swords.svg", en: "Knight of Swords", pl: "Rycerz Mieczy", suit: "swords" },
  { file: "karty/77-queen-of-swords.svg", en: "Queen of Swords", pl: "Królowa Mieczy", suit: "swords" },
  { file: "karty/78-king-of-swords.svg", en: "King of Swords", pl: "Król Mieczy", suit: "swords" },
];

const MEANINGS = {
"The Fool": { upright: { keyword: "nowy początek, spontaniczność", meaning: "Stoisz na progu czegoś nowego — pojawia się chęć, by zaufać życiu i zrobić krok w nieznane, nawet bez pełnego planu. To karta świeżości, odwagi i otwartości na przygodę, choć wiąże się też z pewną naiwnością.", obstacle: "brak planu lub lekkomyślne podejście, które naraża Cię na niepotrzebne ryzyko.", solution: "zaufaj intuicji i zrób pierwszy krok, ale zadbaj o minimum przygotowania, zanim skoczysz." },
  reversed: { keyword: "lekkomyślność, wahanie", meaning: "Odwrócony Głupiec pokazuje strach przed zrobieniem kroku albo przeciwnie — działanie zbyt impulsywne, bez zastanowienia. Możesz czuć się zagubiona lub zagubiony, niepewna/y, czy kierunek, który wybierasz, w ogóle ma sens.", obstacle: "paraliżujący strach przed zmianą albo wręcz przeciwnie — chaotyczne działanie bez namysłu.", solution: "zatrzymaj się na chwilę, oceń ryzyko trzeźwo i dopiero potem podejmij decyzję." } },

"The Magician": { upright: { keyword: "sprawczość, umiejętności", meaning: "Masz teraz wszystkie zasoby, wiedzę i narzędzia potrzebne do działania — pozostaje je świadomie wykorzystać. To karta inicjatywy, skupienia i przekuwania pomysłów w konkret.", obstacle: "rozpraszanie energii na zbyt wiele rzeczy naraz albo brak wiary we własne kompetencje.", solution: "wybierz jeden cel i skoncentruj na nim swoje umiejętności oraz zasoby." },
  reversed: { keyword: "manipulacja, brak skupienia", meaning: "Odwrócony Mag może wskazywać na rozproszenie, blokadę twórczą albo wykorzystywanie zdolności w niewłaściwy sposób — także przez innych wobec Ciebie. Możliwe też poczucie, że brakuje Ci narzędzi, choć w rzeczywistości je masz.", obstacle: "brak wiary we własne możliwości albo próby manipulacji ze strony otoczenia.", solution: "wróć do podstaw, uporządkuj plan i sprawdź, czy działasz w zgodzie z własnymi wartościami." } },

"The High Priestess": { upright: { keyword: "intuicja, tajemnica", meaning: "To karta ciszy, intuicji i wiedzy, która nie zawsze da się racjonalnie uzasadnić. Zachęca, by słuchać wewnętrznego głosu i nie spieszyć się z ujawnianiem wszystkiego na zewnątrz.", obstacle: "ignorowanie intuicji na rzecz czysto logicznych argumentów.", solution: "daj sobie czas na wyciszenie i zaufaj temu, co podpowiada Ci przeczucie." },
  reversed: { keyword: "odcięcie od intuicji, sekrety", meaning: "Odwrócona Kapłanka sugeruje odcięcie od własnej intuicji, chaos emocjonalny albo ukrywanie prawdy — swojej lub cudzej. Możesz czuć, że coś jest przemilczane albo że sama/sam unikasz spojrzenia w głąb siebie.", obstacle: "tłumienie emocji lub unikanie niewygodnej prawdy.", solution: "znajdź przestrzeń na refleksję w samotności, zanim podejmiesz kolejny krok." } },

"The Empress": { upright: { keyword: "obfitość, troska, twórczość", meaning: "Karta płodności w szerokim sensie — twórczości, obfitości, troski o siebie i innych. Wskazuje na czas wzrostu, przyjemności zmysłowych i budowania czegoś z miłością.", obstacle: "zaniedbywanie własnych potrzeb na rzecz opieki nad innymi.", solution: "zadbaj o siebie równie hojnie, jak dbasz o innych, i pozwól sobie na przyjemność." },
  reversed: { keyword: "wypalenie, blokada twórcza", meaning: "Odwrócona Cesarzowa może oznaczać wypalenie, zaniedbanie siebie albo blokadę twórczą. Czasem wskazuje też na nadopiekuńczość lub uzależnienie od czyjejś aprobaty.", obstacle: "nadmierne dawanie z siebie kosztem własnych zasobów i granic.", solution: "postaw granicę i wróć do tego, co naprawdę Cię odżywia." } },

"The Emperor": { upright: { keyword: "struktura, autorytet, stabilność", meaning: "Karta porządku, struktury i konsekwentnego działania. Zachęca, by wziąć sprawy w swoje ręce, ustalić jasne zasady i budować stabilność krok po kroku.", obstacle: "sztywność, nadmierna kontrola albo opór przed przyjęciem odpowiedzialności.", solution: "wprowadź konkretny plan i trzymaj się go, zachowując przy tym elastyczność." },
  reversed: { keyword: "chaos, utrata kontroli", meaning: "Odwrócony Cesarz to poczucie braku kontroli, chaosu albo — przeciwnie — nadmiernej sztywności i despotyzmu, własnego lub cudzego. Struktury, na których polegałaś/eś, mogą się chwiać.", obstacle: "próba kontrolowania wszystkiego lub podleganie czyjejś nadmiernej kontroli.", solution: "odpuść to, na co nie masz wpływu, i zbuduj nowy, zdrowszy porządek." } },

"The Hierophant": { upright: { keyword: "tradycja, nauka, przekonania", meaning: "Karta tradycji, autorytetów i utartych ścieżek — instytucji, mentorów, sprawdzonych metod. Może wskazywać na potrzebę nauki, poradzenia się kogoś doświadczonego albo trzymania się wartości, w które wierzysz.", obstacle: "trzymanie się zasad, które już Ci nie służą, tylko z przyzwyczajenia.", solution: "poszukaj mentora lub sprawdzonej metody, ale zostaw sobie prawo do własnego zdania." },
  reversed: { keyword: "bunt, nieszablonowość", meaning: "Odwrócony Hierofant to bunt wobec konwencji, kwestionowanie autorytetów albo poczucie, że utarte ścieżki przestały pasować do Twojej sytuacji. Może też oznaczać dogmatyzm w innym wydaniu.", obstacle: "sztywne trzymanie się cudzych zasad zamiast wypracowania własnej drogi.", solution: "pozwól sobie na nieszablonowe podejście, nawet jeśli odbiega od tego, co „wypada”." } },

"The Lovers": { upright: { keyword: "wybór, więź, wartości", meaning: "Karta ważnego wyboru zgodnego z sercem oraz głębokiej więzi — z drugą osobą, ale też z własnymi wartościami. Zachęca, by decydować z autentyczności, nie z presji.", obstacle: "trudność w podjęciu decyzji lub rozdarcie między dwiema opcjami.", solution: "wybierz opcję zgodną z Twoimi wartościami, nawet jeśli nie jest najwygodniejsza." },
  reversed: { keyword: "brak harmonii, niezgodność wartości", meaning: "Odwróceni Kochankowie wskazują na niezgodność wartości, trudną decyzję odkładaną w czasie albo brak równowagi w relacji — z kimś innym lub z samą/samym sobą.", obstacle: "unikanie trudnej decyzji lub ignorowanie sygnałów niezgodności.", solution: "szczerze nazwij, czego naprawdę potrzebujesz, zanim zdecydujesz, co dalej." } },

"The Chariot": { upright: { keyword: "determinacja, kontrola, zwycięstwo", meaning: "Karta silnej woli i determinacji — udaje Ci się utrzymać kurs mimo sprzecznych sił działających w różne strony. To dobry moment na zdecydowane dążenie do celu.", obstacle: "sprzeczne kierunki działania, które rozrywają Twoją energię.", solution: "wyznacz jeden jasny kierunek i konsekwentnie w niego zainwestuj wysiłek." },
  reversed: { keyword: "utrata kierunku, rozproszenie", meaning: "Odwrócony Rydwan to utrata kierunku, poczucie, że jedziesz donikąd, albo walka o kontrolę, która wymyka się z rąk. Warto zwolnić i sprawdzić, czy w ogóle jedziesz tam, gdzie chcesz.", obstacle: "brak jasnego celu albo próba forsowania kierunku, który już nie działa.", solution: "zatrzymaj się, przedefiniuj cel i dopiero potem ruszaj dalej z nową energią." } },

"Strength": { upright: { keyword: "odwaga, łagodność, opanowanie", meaning: "To siła płynąca z łagodności, cierpliwości i współczucia dla siebie, nie z przymusu czy walki. Pokazuje, że możesz poradzić sobie z trudnością bez agresji, opierając się na wewnętrznym spokoju.", obstacle: "próba rozwiązania problemu siłą lub kontrolą zamiast cierpliwością.", solution: "podejdź do sytuacji łagodnie i z cierpliwością, zamiast z nią walczyć." },
  reversed: { keyword: "zwątpienie, brak pewności siebie", meaning: "Odwrócona Siła wskazuje na zwątpienie we własne możliwości, wewnętrzny krytycyzm albo utratę cierpliwości. Możesz czuć się przytłoczona/y sytuacją, którą normalnie byś ogarnęła/ął.", obstacle: "brak wiary w siebie i nadmierna samokrytyka w trudnym momencie.", solution: "bądź dla siebie łagodniejsza/y — odbuduj pewność siebie małymi krokami." } },

"The Hermit": { upright: { keyword: "introspekcja, samotność, mądrość", meaning: "Czas wycofania się i poszukiwania odpowiedzi w sobie, nie na zewnątrz. Pustelnik zachęca do refleksji w samotności, zanim podejmiesz kolejny krok.", obstacle: "izolowanie się w sposób, który pogłębia poczucie osamotnienia zamiast dawać jasność.", solution: "znajdź czas na spokojną refleksję, ale nie odcinaj się całkowicie od wsparcia innych." },
  reversed: { keyword: "izolacja, unikanie", meaning: "Odwrócony Pustelnik to nadmierna izolacja, unikanie ludzi albo przeciwnie — niechęć do choćby chwili samotności i konfrontacji z własnymi myślami.", obstacle: "zbytnie odcięcie się od innych albo ucieczka od potrzebnej refleksji.", solution: "wyznacz sobie konkretny, ograniczony czas na przemyślenia, a potem wróć do ludzi." } },

"Wheel of Fortune": { upright: { keyword: "zmiana, cykle, los", meaning: "Karta zmiany, cykli i punktów zwrotnych, na które nie zawsze masz pełny wpływ. Coś, co wydawało się stałe, zaczyna się przesuwać — warto płynąć z tym nurtem.", obstacle: "próba kontrolowania czegoś, co z natury jest poza Twoim wpływem.", solution: "zaakceptuj zmienność sytuacji i wykorzystaj nadarzającą się okazję, gdy się pojawi." },
  reversed: { keyword: "pech, opór wobec zmiany", meaning: "Odwrócone Koło Fortuny to poczucie, że coś się zacina, pech albo opór wobec nieuniknionej zmiany. Może też oznaczać powtarzanie tego samego wzorca zamiast wyjścia z cyklu.", obstacle: "trzymanie się starego wzorca, mimo że przestał przynosić dobre efekty.", solution: "świadomie przerwij powtarzający się schemat i otwórz się na nowy kierunek." } },

"Justice": { upright: { keyword: "równowaga, prawda, konsekwencje", meaning: "Karta uczciwości, konsekwencji i patrzenia na sytuację obiektywnie. Zachęca do podjęcia decyzji w zgodzie z prawdą i do wzięcia odpowiedzialności za własne wybory.", obstacle: "unikanie odpowiedzialności lub patrzenie na sytuację wyłącznie ze swojej perspektywy.", solution: "spójrz na sytuację uczciwie, z dystansem, i podejmij decyzję zgodną z faktami." },
  reversed: { keyword: "niesprawiedliwość, brak równowagi", meaning: "Odwrócona Sprawiedliwość wskazuje na poczucie niesprawiedliwości, nieuczciwość — własną lub cudzą — albo unikanie konsekwencji swoich decyzji.", obstacle: "stronniczość albo unikanie trudnej, ale koniecznej decyzji.", solution: "przyznaj się do swojej roli w sytuacji i dąż do rozwiązania uczciwego dla obu stron." } },

"The Hanged Man": { upright: { keyword: "zawieszenie, nowa perspektywa", meaning: "Karta zatrzymania i zmiany perspektywy — czasem trzeba przestać działać, by zobaczyć sytuację inaczej. To czas poddania się procesowi, a nie forsowania rozwiązań na siłę.", obstacle: "walka z sytuacją, na którą i tak nie masz teraz wpływu.", solution: "spójrz na sprawę z zupełnie innej strony i pozwól sobie na chwilę bezczynności." },
  reversed: { keyword: "utknięcie, opór przed poddaniem się", meaning: "Odwrócony Wisielec pokazuje utknięcie w oczekiwaniu, opór przed potrzebną zmianą perspektywy albo poświęcenie, które nie przynosi żadnych efektów. Możesz czuć, że trwasz w zawieszeniu bez powodu.", obstacle: "trwanie w bezruchu i czekanie na idealny moment, który nie nadchodzi.", solution: "podejmij świadomą decyzję o zmianie podejścia, zamiast dalej czekać." } },

"Death": { upright: { keyword: "zakończenie, transformacja", meaning: "Karta zakończenia pewnego etapu, które otwiera drogę do czegoś nowego. Nie chodzi o dosłowną śmierć, lecz o konieczną transformację — coś musi się skończyć, by mogło zacząć się coś innego.", obstacle: "trzymanie się kurczowo tego, co już się skończyło.", solution: "pozwól zamknąć się temu, co odchodzi, żeby zrobić miejsce na nowy etap." },
  reversed: { keyword: "opór wobec zmiany, stagnacja", meaning: "Odwrócona Śmierć to opór przed nieuniknioną zmianą, przedłużanie czegoś, co już się wypaliło, albo lęk przed zakończeniem etapu. Stagnacja bywa tu bardziej bolesna niż sama zmiana.", obstacle: "lęk przed zakończeniem, który powstrzymuje Cię przed ruszeniem dalej.", solution: "nazwij, co naprawdę się skończyło i świadomie się z tym pożegnaj." } },

"Temperance": { upright: { keyword: "równowaga, cierpliwość, łączenie", meaning: "Karta harmonii, cierpliwości i łączenia przeciwstawnych elementów w spójną całość. Zachęca do umiaru i stopniowego, spokojnego dążenia do celu zamiast gwałtownych ruchów.", obstacle: "działanie w skrajnościach zamiast szukania złotego środka.", solution: "znajdź równowagę między sprzecznymi potrzebami i działaj małymi, spokojnymi krokami." },
  reversed: { keyword: "brak równowagi, niecierpliwość", meaning: "Odwrócone Umiarkowanie to brak równowagi, niecierpliwość albo skrajności — robienie za dużo naraz lub całkowite zaniechanie działania. Coś w Twoim życiu domaga się większej harmonii.", obstacle: "niecierpliwość, która prowadzi do pochopnych, skrajnych decyzji.", solution: "zwolnij tempo i szukaj kompromisu zamiast wyboru między dwiema skrajnościami." } },

"The Devil": { upright: { keyword: "uzależnienie, ograniczenie, pokusa", meaning: "Karta pułapek, uzależnień i wzorców, w które wpadamy dobrowolnie, choć nas ograniczają — mogą to być nawyki, toksyczna relacja albo lęk trzymający Cię w miejscu. Warto zapytać, co Cię naprawdę wiąże.", obstacle: "wzorzec lub przywiązanie, z którego trudno Ci się wyrwać, mimo że Cię ogranicza.", solution: "nazwij, co Cię trzyma w miejscu, i zrób pierwszy mały krok ku uwolnieniu się." },
  reversed: { keyword: "uwalnianie się, odzyskiwanie kontroli", meaning: "Odwrócony Diabeł oznacza uwalnianie się z ograniczającego wzorca, odzyskiwanie kontroli nad sytuacją, która wcześniej Cię przerastała. To proces, nie jednorazowy akt — łańcuch pęka stopniowo.", obstacle: "pokusa powrotu do starego, choć szkodliwego wzorca w chwili słabości.", solution: "trzymaj się konsekwentnie nowego kierunku, nawet jeśli stary nawyk wciąż kusi." } },

"The Tower": { upright: { keyword: "nagła zmiana, przełom", meaning: "Karta nagłego, często nieoczekiwanego zdarzenia, które burzy to, co było zbudowane na niepewnych fundamentach. Choć bolesna, taka zmiana zwykle odsłania prawdę i otwiera drogę do czegoś bardziej autentycznego.", obstacle: "trzymanie się struktury lub przekonania, które i tak wkrótce runie.", solution: "pozwól, by to, co niestabilne, upadło — i zbuduj od nowa na solidniejszym fundamencie." },
  reversed: { keyword: "odwlekana zmiana, lęk przed katastrofą", meaning: "Odwrócona Wieża to zmiana odwlekana w czasie, lęk przed nieuniknionym albo kryzys przeżywany bardziej wewnętrznie niż na zewnątrz. Czasem oznacza też uniknięcie najgorszego scenariusza dzięki wcześniejszej reakcji.", obstacle: "odkładanie trudnej, ale koniecznej konfrontacji z rzeczywistością.", solution: "zmierz się z problemem świadomie, zanim sytuacja wymusi to nagle." } },

"The Star": { upright: { keyword: "nadzieja, uzdrowienie, wiara", meaning: "Karta nadziei, ukojenia po trudnym okresie i wiary, że sprawy zaczynają się układać. Zachęca, by zaufać procesowi i pozwolić sobie na optymizm, nawet po trudnych doświadczeniach.", obstacle: "trudność w uwierzeniu, że po trudnym okresie rzeczywiście może być lepiej.", solution: "pozwól sobie na nadzieję i drobne kroki w stronę tego, czego naprawdę pragniesz." },
  reversed: { keyword: "zwątpienie, utrata wiary", meaning: "Odwrócona Gwiazda to chwilowa utrata wiary, poczucie zniechęcenia albo rozczarowanie, gdy rzeczywistość nie spełnia oczekiwań. To jednak stan przejściowy, nie trwały.", obstacle: "zwątpienie i porównywanie swojej sytuacji do nierealistycznych oczekiwań.", solution: "wróć do małych rzeczy, które dają Ci nadzieję, i bądź dla siebie cierpliwa/y." } },

"The Moon": { upright: { keyword: "niepewność, iluzje, podświadomość", meaning: "Karta niejasności, lęków i spraw, które nie są jeszcze do końca widoczne. Rzeczy mogą wyglądać inaczej, niż są w rzeczywistości — warto nie podejmować teraz ostatecznych decyzji wyłącznie na podstawie emocji.", obstacle: "lęki i niejasność, które utrudniają trzeźwą ocenę sytuacji.", solution: "daj sobie czas, aż sytuacja się wyklaruje, zanim podejmiesz ważną decyzję." },
  reversed: { keyword: "wychodzenie z iluzji, odkrywanie prawdy", meaning: "Odwrócony Księżyc oznacza stopniowe rozjaśnianie się sytuacji, wychodzenie z lęku lub złudzeń i odkrywanie prawdy, która wcześniej była ukryta. Niepokój zaczyna ustępować jasności.", obstacle: "pozostałości dawnego lęku, które wciąż wpływają na Twoje decyzje.", solution: "zaufaj temu, co zaczynasz dostrzegać wyraźniej i pozwól sobie to zweryfikować." } },

"The Sun": { upright: { keyword: "radość, sukces, jasność", meaning: "Jedna z najbardziej pozytywnych kart talii — oznacza radość, jasność sytuacji i autentyczny sukces. To, co się dzieje lub nadchodzi, przynosi ulgę i potwierdzenie, że jesteś na dobrej drodze.", obstacle: "trudność w pozwoleniu sobie na pełną radość mimo dobrego obrotu spraw.", solution: "ciesz się tym, co dobre, i pozwól sobie w pełni to docenić." },
  reversed: { keyword: "przyćmiona radość, chwilowe zwątpienie", meaning: "Odwrócone Słońce to radość przyćmiona przez chwilowe zwątpienie, opóźniony sukces albo trudność w dostrzeżeniu pozytywów, które i tak są w zasięgu ręki. To stan przejściowy.", obstacle: "skupianie się na tym, co nie działa, zamiast na tym, co już się udało.", solution: "poszukaj choćby małego powodu do radości i zacznij od niego." } },

"Judgement": { upright: { keyword: "przebudzenie, rozliczenie, powołanie", meaning: "Karta wewnętrznego przebudzenia, podsumowania i wezwania do tego, by żyć bardziej zgodnie z prawdą o sobie. To moment na uczciwe rozliczenie z przeszłością i świadomy wybór dalszej drogi.", obstacle: "unikanie uczciwego rozliczenia z przeszłością lub własnymi wyborami.", solution: "spójrz szczerze na to, co było, wyciągnij wnioski i podejmij świadomą decyzję na przyszłość." },
  reversed: { keyword: "samokrytycyzm, odkładanie decyzji", meaning: "Odwrócony Sąd to nadmierny samokrytycyzm, poczucie winy albo odkładanie ważnej decyzji czy rozliczenia na później. Możesz osądzać siebie surowiej, niż na to zasługujesz.", obstacle: "nadmierna samokrytyka, która blokuje Cię przed ruszeniem dalej.", solution: "wybacz sobie dotychczasowe wybory i skup się na tym, co możesz zmienić teraz." } },

"The World": { upright: { keyword: "spełnienie, zakończenie cyklu", meaning: "Karta zakończenia ważnego etapu z poczuciem spełnienia i integracji tego, czego się nauczyłaś/eś. Wskazuje na osiągnięcie celu i gotowość do rozpoczęcia nowego rozdziału.", obstacle: "trudność w uznaniu, że dany etap faktycznie się zakończył.", solution: "doceń to, co udało Ci się osiągnąć, zanim ruszysz w stronę kolejnego celu." },
  reversed: { keyword: "niedokończony etap, opóźnienie", meaning: "Odwrócony Świat to poczucie niedokończenia, brakującego elementu układanki albo opóźnienia w osiągnięciu celu, który jest już bardzo blisko. Warto sprawdzić, czego jeszcze brakuje, by zamknąć temat.", obstacle: "brakujący element lub niedokończona sprawa, która nie pozwala zamknąć etapu.", solution: "zidentyfikuj, co jeszcze zostało do zrobienia i dokończ to świadomie." } },

"Ace of Pentacles": { upright: { keyword: "nowa szansa materialna", meaning: "Nowa szansa związana z pieniędzmi, pracą lub zdrowiem — konkretny, namacalny początek. To dobry moment, by zasiać ziarno, z którego coś realnie wyrośnie.", obstacle: "wahanie, czy warto zainwestować czas lub zasoby w nową okazję.", solution: "wykorzystaj nadarzającą się szansę i zacznij działać w praktyczny, konkretny sposób." },
  reversed: { keyword: "przegapiona szansa, brak stabilności", meaning: "Odwrócony As Pentakli to przegapiona okazja, opóźniony start albo niepewność finansowa czy zdrowotna. Fundamenty, na których chcesz budować, wymagają jeszcze wzmocnienia.", obstacle: "brak solidnych podstaw, na których mogłabyś/mógłbyś bezpiecznie budować.", solution: "zadbaj najpierw o stabilne podstawy, zanim zainwestujesz w coś nowego." } },

"Two of Pentacles": { upright: { keyword: "równoważenie priorytetów", meaning: "Żonglowanie kilkoma sprawami naraz — finansami, obowiązkami, priorytetami. Radzisz sobie z tym nieźle, choć wymaga to elastyczności i dobrej organizacji czasu.", obstacle: "zbyt wiele zobowiązań naraz, które trudno utrzymać w równowadze.", solution: "ustal priorytety i pozwól sobie na elastyczne, ale świadome zarządzanie czasem." },
  reversed: { keyword: "przeciążenie, chaos organizacyjny", meaning: "Odwrócona Dwójka Pentakli to przeciążenie obowiązkami, chaos finansowy albo trudność w utrzymaniu równowagi między różnymi sferami życia. Coś zaczyna Ci umykać.", obstacle: "próba utrzymania zbyt wielu piłek w powietrzu naraz.", solution: "odpuść lub przełóż to, co nie jest najpilniejsze, i uporządkuj priorytety." } },

"Three of Pentacles": { upright: { keyword: "współpraca, budowanie zespołowe", meaning: "Karta dobrej współpracy, wspólnego budowania czegoś trwałego z innymi ludźmi. Twoje umiejętności są dostrzegane i doceniane, a efekty pracy zespołowej przewyższają to, co osiągnęłabyś/łbyś sama/sam.", obstacle: "trudność w przyjęciu pomocy lub w skoordynowaniu się z innymi.", solution: "poszukaj współpracy i pozwól sobie skorzystać z doświadczenia innych osób." },
  reversed: { keyword: "brak koordynacji, konflikt kompetencji", meaning: "Odwrócona Trójka Pentakli to brak koordynacji w zespole, niedocenienie Twojej pracy albo konflikt co do tego, jak coś powinno być zrobione.", obstacle: "niejasny podział ról lub brak uznania dla włożonej pracy.", solution: "doprecyzuj role i oczekiwania, zamiast zakładać, że wszyscy rozumieją je tak samo." } },

"Four of Pentacles": { upright: { keyword: "bezpieczeństwo, kontrola, oszczędność", meaning: "Potrzeba bezpieczeństwa materialnego i kontroli nad tym, co masz. To karta ostrożności i oszczędzania, choć w nadmiarze może przerodzić się w lęk przed puszczeniem czegokolwiek z rąk.", obstacle: "kurczowe trzymanie się zasobów z lęku przed stratą.", solution: "zadbaj o bezpieczeństwo, ale pozwól sobie też na rozsądne zainwestowanie lub podzielenie się." },
  reversed: { keyword: "chciwość lub rozrzutność", meaning: "Odwrócona Czwórka Pentakli to skrajność — albo nadmierne trzymanie się kontroli i zasobów, albo przeciwnie, nagła rozrzutność wynikająca z buntu przeciw ograniczeniom.", obstacle: "skrajne podejście do zasobów — nadmierna kontrola albo jej całkowity brak.", solution: "znajdź zdrowy środek między oszczędnością a otwartością na dzielenie się." } },

"Five of Pentacles": { upright: { keyword: "trudności finansowe, poczucie wykluczenia", meaning: "Trudny okres materialny, zdrowotny lub emocjonalny, w którym możesz czuć się osamotniona/y w problemie. Ważne, by pamiętać, że pomoc jest bliżej, niż się wydaje.", obstacle: "poczucie osamotnienia w trudności i niechęć do proszenia o wsparcie.", solution: "poszukaj konkretnego wsparcia — bliskich, instytucji czy specjalistów — zamiast mierzyć się z tym sama/sam." },
  reversed: { keyword: "wychodzenie z kryzysu", meaning: "Odwrócona Piątka Pentakli pokazuje wychodzenie z trudnego okresu, odnalezienie wsparcia albo poprawę sytuacji materialnej lub zdrowotnej po ciężkim czasie.", obstacle: "resztki lęku z trudnego okresu, które wciąż wpływają na Twoje decyzje.", solution: "przyjmij pomoc, która się pojawia, i pozwól sobie uwierzyć w poprawę." } },

"Six of Pentacles": { upright: { keyword: "dzielenie się, wsparcie", meaning: "Karta wymiany — dawania i otrzymywania wsparcia, często materialnego. Może dotyczyć sprawiedliwego podziału zasobów albo pomocy, którą otrzymujesz lub oferujesz innym.", obstacle: "nierówny układ sił między dawaniem a braniem.", solution: "sprawdź, czy relacja wymiany jest uczciwa dla obu stron i w razie potrzeby ją skoryguj." },
  reversed: { keyword: "nierówność, dług, kontrola", meaning: "Odwrócona Szóstka Pentakli to nierówna wymiana — wsparcie obwarowane warunkami, poczucie zależności finansowej albo sytuacja, w której ktoś ma nad Tobą przewagę.", obstacle: "poczucie zależności lub bycia kontrolowanym przez osobę, która Ci pomaga.", solution: "dąż do większej niezależności lub jasno ustal zasady wzajemnego wsparcia." } },

"Seven of Pentacles": { upright: { keyword: "cierpliwość, ocena postępów", meaning: "Moment zatrzymania się i oceny, czy dotychczasowy wysiłek przynosi efekty. To karta cierpliwości — plony jeszcze nie dojrzały, ale są w drodze.", obstacle: "zniecierpliwienie brakiem natychmiastowych efektów włożonej pracy.", solution: "oceń dotychczasowe postępy uczciwie i zdecyduj, czy kontynuować, czy skorygować kurs." },
  reversed: { keyword: "zniechęcenie, brak efektów", meaning: "Odwrócona Siódemka Pentakli to zniechęcenie wynikające z braku widocznych efektów albo poczucie, że włożony wysiłek poszedł na marne. Warto ponownie ocenić strategię.", obstacle: "wrażenie, że długotrwały wysiłek nie przynosi żadnych rezultatów.", solution: "zmień strategię albo daj sobie i sytuacji jeszcze trochę więcej czasu, świadomie to oceniając." } },

"Eight of Pentacles": { upright: { keyword: "nauka, doskonalenie rzemiosła", meaning: "Karta pracowitości, doskonalenia umiejętności i dbałości o detale. Inwestujesz czas w naukę i rozwój kompetencji, co z czasem przyniesie realne efekty.", obstacle: "pokusa, by iść na skróty zamiast solidnie dopracować szczegóły.", solution: "zainwestuj czas w naukę i dopracowanie szczegółów — to się opłaci." },
  reversed: { keyword: "brak motywacji, niedbałość", meaning: "Odwrócona Ósemka Pentakli to spadek motywacji, praca wykonywana na pół gwizdka albo perfekcjonizm, który paraliżuje działanie zamiast mu służyć.", obstacle: "utrata motywacji lub przesadny perfekcjonizm blokujący postęp.", solution: "znajdź na nowo sens w tym, co robisz, albo pozwól sobie odpuścić nadmierny perfekcjonizm." } },

"Nine of Pentacles": { upright: { keyword: "niezależność, satysfakcja z osiągnięć", meaning: "Karta niezależności — materialnej i emocjonalnej — oraz satysfakcji z tego, co udało się osiągnąć własną pracą. Możesz teraz cieszyć się owocami swojego wysiłku.", obstacle: "trudność w pozwoleniu sobie na odpoczynek i cieszenie się osiągnięciami.", solution: "doceń to, na co samodzielnie zapracowałaś/eś i pozwól sobie cieszyć się tym w spokoju." },
  reversed: { keyword: "przepracowanie, zależność", meaning: "Odwrócona Dziewiątka Pentakli to przepracowanie, poczucie, że sukces zależy wciąż od kogoś innego, albo trudność w cieszeniu się tym, co masz.", obstacle: "nadmierna zależność od innych lub przepracowanie bez chwili wytchnienia.", solution: "zadbaj o większą niezależność i zrób sobie przestrzeń na odpoczynek." } },

"Ten of Pentacles": { upright: { keyword: "trwałość, dziedzictwo, rodzina", meaning: "Karta długoterminowej stabilności, dziedzictwa i solidnych fundamentów budowanych z myślą o przyszłości — swojej i bliskich. Sprawy materialne układają się trwale.", obstacle: "obawa, że to, co budujesz, nie przetrwa próby czasu.", solution: "buduj z myślą o długiej perspektywie i zaangażuj w to bliskie osoby." },
  reversed: { keyword: "niestabilność rodzinna, spory o zasoby", meaning: "Odwrócona Dziesiątka Pentakli to niestabilność finansowa w dłuższej perspektywie, konflikty rodzinne o zasoby albo poczucie, że brakuje solidnego fundamentu.", obstacle: "nierozwiązane spory dotyczące zasobów lub wartości rodzinnych.", solution: "otwarcie porozmawiaj o zasobach i granicach z osobami, których to dotyczy." } },

"Page of Pentacles": { upright: { keyword: "nauka, nowa okazja materialna", meaning: "Świeże podejście do nauki i rozwoju — nowa okazja zawodowa lub finansowa, która wymaga jeszcze zdobycia doświadczenia. Warto podejść do niej z ciekawością i sumiennością.", obstacle: "brak doświadczenia lub niecierpliwość wobec powolnego procesu nauki.", solution: "podejdź do nowej okazji z otwartością na naukę i nie oczekuj natychmiastowych efektów." },
  reversed: { keyword: "brak zaangażowania, nierealistyczne plany", meaning: "Odwrócony Paź Pentakli to brak zaangażowania w naukę lub pracę, nierealistyczne plany finansowe albo prokrastynacja wobec konkretnych, praktycznych zadań.", obstacle: "odkładanie konkretnych działań na później i nierealistyczne oczekiwania.", solution: "zejdź z poziomu marzeń na poziom konkretu i zrób pierwszy praktyczny krok." } },

"Knight of Pentacles": { upright: { keyword: "wytrwałość, metodyczność", meaning: "Karta powolnego, ale pewnego postępu — wytrwałości, rzetelności i metodycznego dążenia do celu, nawet jeśli nie jest to ekscytujące. Powolne tempo tu popłaca.", obstacle: "zniecierpliwienie wobec powolnego, ale skutecznego tempa działania.", solution: "trzymaj się metodycznego, systematycznego podejścia, nawet jeśli efekty przychodzą powoli." },
  reversed: { keyword: "stagnacja, upór, rutyna", meaning: "Odwrócony Rycerz Pentakli to stagnacja, nadmierny upór przy jednej metodzie albo utknięcie w rutynie, która przestała służyć celowi.", obstacle: "trzymanie się jednej metody mimo braku postępów.", solution: "sprawdź, czy Twoje tempo i metoda wciąż Ci służą i w razie potrzeby je zmień." } },

"Queen of Pentacles": { upright: { keyword: "praktyczność, troska, obfitość", meaning: "Karta praktycznej troski o siebie i innych — łączy zmysł do zarządzania zasobami z ciepłem i dbałością o komfort. Umiesz stworzyć bezpieczne, stabilne otoczenie.", obstacle: "nadmierne obciążenie obowiązkami związanymi z opieką nad innymi.", solution: "zadbaj o praktyczny, ale też przyjemny dla siebie sposób organizowania codzienności." },
  reversed: { keyword: "zaniedbanie siebie, przeciążenie obowiązkami", meaning: "Odwrócona Królowa Pentakli to zaniedbywanie własnych potrzeb na rzecz obowiązków domowych lub zawodowych, albo poczucie przytłoczenia codziennością.", obstacle: "stawianie potrzeb innych zawsze przed własnymi.", solution: "wróć do dbania o siebie z taką samą troską, jaką dajesz innym." } },

"King of Pentacles": { upright: { keyword: "stabilność finansowa, dojrzałość", meaning: "Karta dojrzałej, spokojnej pewności w sprawach materialnych — umiesz zarządzać zasobami i budować trwały dobrobyt, swój i tych, za których czujesz odpowiedzialność.", obstacle: "nadmierna koncentracja na sprawach materialnych kosztem innych sfer życia.", solution: "wykorzystaj swoją dojrzałość i doświadczenie, by budować stabilność krok po kroku." },
  reversed: { keyword: "materializm, sztywność, chciwość", meaning: "Odwrócony Król Pentakli to nadmierny materializm, sztywne trzymanie się kontroli nad zasobami albo, przeciwnie, brak realnego zabezpieczenia finansowego.", obstacle: "nadmierna kontrola nad zasobami lub jej całkowity brak.", solution: "znajdź równowagę między dbałością o stabilność a elastycznością wobec zmian." } },

"Ace of Wands": { upright: { keyword: "nowa energia, iskra pomysłu", meaning: "Świeży impuls energii, entuzjazmu i inspiracji do działania. To początek czegoś, co naprawdę Cię ekscytuje — warto pójść za tym impulsem.", obstacle: "wahanie, czy dać sobie prawo do podążenia za nowym entuzjazmem.", solution: "działaj, dopóki masz tę iskrę zapału — nie czekaj na idealny moment." },
  reversed: { keyword: "brak motywacji, opóźniony start", meaning: "Odwrócony As Buław to brak energii do działania, opóźniony start albo pomysł, który jeszcze nie znalazł właściwego kierunku.", obstacle: "brak motywacji lub jasności co do tego, od czego zacząć.", solution: "zacznij od najmniejszego możliwego kroku, by na nowo rozniecić zapał do działania." } },

"Two of Wands": { upright: { keyword: "planowanie, patrzenie w przyszłość", meaning: "Moment planowania kolejnego kroku — masz już pewien sukces lub stabilność, teraz zastanawiasz się, dokąd pójść dalej. To karta strategicznego myślenia o przyszłości.", obstacle: "trudność w podjęciu decyzji, w którą stronę pójść dalej.", solution: "spójrz szeroko na dostępne opcje i wybierz kierunek, który najbardziej Cię pociąga." },
  reversed: { keyword: "lęk przed nieznanym, brak planu", meaning: "Odwrócona Dwójka Buław to lęk przed wyjściem poza strefę komfortu albo brak jasnego planu na dalsze kroki, mimo że masz już solidne podstawy.", obstacle: "strach przed podjęciem decyzji o dalszym kierunku.", solution: "pozwól sobie zaplanować konkretny, choćby mały krok w nieznane." } },

"Three of Wands": { upright: { keyword: "ekspansja, oczekiwanie na efekty", meaning: "Twoje plany zaczynają nabierać kształtu — patrzysz w przyszłość z nadzieją, oczekując efektów wcześniej podjętych działań. To dobry czas na rozszerzanie horyzontów.", obstacle: "niecierpliwość wobec tempa, w jakim rozwijają się Twoje plany.", solution: "bądź cierpliwa/y i pozostań otwarta/y na nowe możliwości, które mogą się pojawić." },
  reversed: { keyword: "opóźnienia, przeszkody w realizacji", meaning: "Odwrócona Trójka Buław to opóźnienia w realizacji planów, nieprzewidziane przeszkody albo poczucie, że coś idzie wolniej, niż zakładałaś/eś.", obstacle: "nieprzewidziane opóźnienia lub przeszkody utrudniające realizację planów.", solution: "zweryfikuj plan i dostosuj go do zmienionych okoliczności, zamiast trzymać się sztywno harmonogramu." } },

"Four of Wands": { upright: { keyword: "świętowanie, stabilność, wspólnota", meaning: "Karta radości, świętowania osiągnięcia i poczucia przynależności. Coś się udało lub zbliża się moment, który warto uczcić razem z bliskimi.", obstacle: "trudność w zatrzymaniu się, by docenić i uczcić dotychczasowe osiągnięcia.", solution: "zatrzymaj się na chwilę i uczcij to, co udało się dotąd zbudować." },
  reversed: { keyword: "niestabilność, odłożone świętowanie", meaning: "Odwrócona Czwórka Buław to poczucie braku stabilności w domu lub relacjach, odłożone świętowanie albo napięcie tam, gdzie powinna być harmonia.", obstacle: "napięcie lub niestabilność w otoczeniu, które utrudnia poczucie bezpieczeństwa.", solution: "zajmij się źródłem napięcia w domu lub relacji, zanim będziesz mogła/mógł świętować." } },

"Five of Wands": { upright: { keyword: "rywalizacja, konflikt, napięcie", meaning: "Karta drobnych konfliktów, rywalizacji i różnicy zdań. To energiczne, ale niekoniecznie niebezpieczne starcie — może nawet pobudzić do lepszych rozwiązań.", obstacle: "konflikt lub rywalizacja, które rozpraszają energię zamiast ją budować.", solution: "potraktuj napięcie jako okazję do wymiany zdań, nie do walki o rację." },
  reversed: { keyword: "unikanie konfliktu lub eskalacja", meaning: "Odwrócona Piątka Buław to albo unikanie konfliktu, który i tak trzeba rozwiązać, albo przeciwnie — eskalacja sporu ponad miarę.", obstacle: "nierozwiązany konflikt, który narasta w tle.", solution: "zmierz się z sednem sporu wprost, zamiast go unikać lub podsycać." } },

"Six of Wands": { upright: { keyword: "sukces, uznanie, triumf", meaning: "Karta zasłużonego sukcesu, publicznego uznania i satysfakcji z osiągnięcia celu. Twój wysiłek zostaje dostrzeżony i doceniony.", obstacle: "trudność w przyjęciu uznania lub obawa przed oceną innych.", solution: "pozwól sobie przyjąć zasłużone uznanie i ciesz się swoim sukcesem." },
  reversed: { keyword: "brak uznania, opóźniony sukces", meaning: "Odwrócona Szóstka Buław to poczucie niedocenienia, opóźniony sukces albo wewnętrzne wątpliwości mimo realnych osiągnięć.", obstacle: "poczucie, że wysiłek nie został dostrzeżony tak, jak na to zasługuje.", solution: "doceń siebie sama/sam, niezależnie od tego, czy inni to zauważają." } },

"Seven of Wands": { upright: { keyword: "obrona swojego stanowiska", meaning: "Karta obrony swojej pozycji, wartości lub granic w obliczu presji z zewnątrz. Masz przewagę, jeśli utrzymasz pewność siebie.", obstacle: "presja z zewnątrz, która podważa Twoją pewność siebie.", solution: "stój twardo przy swoim stanowisku, jeśli wynika ono z Twoich wartości." },
  reversed: { keyword: "przytłoczenie, poddawanie się presji", meaning: "Odwrócona Siódemka Buław to poczucie przytłoczenia presją, rezygnacja z obrony swojego stanowiska albo wątpliwości, czy warto dalej walczyć.", obstacle: "poczucie przytłoczenia liczbą osób lub argumentów przeciwko Tobie.", solution: "wybierz, które granice są dla Ciebie naprawdę ważne i skup obronę na nich." } },

"Eight of Wands": { upright: { keyword: "szybkie działanie, przyspieszenie", meaning: "Karta szybkiego tempa wydarzeń — sprawy nabierają rozpędu, komunikacja i działania przyspieszają. Dobry moment na zdecydowany ruch.", obstacle: "chaos wynikający z nadmiernego tempa i braku czasu na przemyślenie.", solution: "działaj szybko, ale świadomie, nie tracąc z oczu ogólnego kierunku." },
  reversed: { keyword: "opóźnienia, frustracja tempem", meaning: "Odwrócona Ósemka Buław to opóźnienia, spowolnienie tempa albo frustracja, że coś, co powinno iść szybko, utyka w miejscu.", obstacle: "zewnętrzne opóźnienia, na które nie masz bezpośredniego wpływu.", solution: "uzbrój się w cierpliwość i wykorzystaj ten czas na dopracowanie szczegółów." } },

"Nine of Wands": { upright: { keyword: "wytrwałość, czujność, zmęczenie walką", meaning: "Jesteś blisko celu, choć zmęczona/y dotychczasową walką. Karta wytrwałości — pokazuje, że warto utrzymać czujność i nie poddawać się tuż przed metą.", obstacle: "zmęczenie po długiej walce, które kusi, by się poddać.", solution: "zbierz resztki sił na ostatni etap — jesteś bliżej celu, niż myślisz." },
  reversed: { keyword: "wypalenie, przesadna podejrzliwość", meaning: "Odwrócona Dziewiątka Buław to wypalenie, wyczerpanie walką albo nadmierna podejrzliwość, która utrudnia przyjęcie pomocy.", obstacle: "wyczerpanie i nieufność, które izolują Cię od potrzebnego wsparcia.", solution: "pozwól sobie na odpoczynek i przyjmij pomoc, zamiast walczyć samotnie do końca." } },

"Ten of Wands": { upright: { keyword: "przeciążenie obowiązkami", meaning: "Dźwigasz teraz bardzo dużo — obowiązków, odpowiedzialności, ciężarów, które sama/sam na siebie wzięłaś/eś. Cel jest blisko, ale warto zastanowić się, co można odłożyć.", obstacle: "nadmiar obowiązków, które przytłaczają i spowalniają dojście do celu.", solution: "sprawdź, co możesz oddelegować lub odłożyć, by odciążyć się choć trochę." },
  reversed: { keyword: "wypalenie, oddawanie ciężaru", meaning: "Odwrócona Dziesiątka Buław to moment, w którym w końcu oddajesz część ciężaru — albo przeciwnie, załamujesz się pod jego nadmiarem.", obstacle: "nadmierne obciążenie, które prowadzi do wypalenia, jeśli nic się nie zmieni.", solution: "świadomie zrezygnuj z części obowiązków, zanim przeciążenie odbije się na Twoim zdrowiu." } },

"Page of Wands": { upright: { keyword: "entuzjazm, ciekawość, nowy pomysł", meaning: "Świeży entuzjazm i ciekawość wobec nowego pomysłu czy kierunku. To energia odkrywcy — jeszcze niedoświadczona, ale pełna zapału.", obstacle: "brak doświadczenia lub cierpliwości, by dopracować nowy pomysł.", solution: "podążaj za entuzjazmem, ale zostaw sobie przestrzeń na naukę po drodze." },
  reversed: { keyword: "impulsywność, chaotyczne plany", meaning: "Odwrócony Paź Buław to impulsywność, chaotyczne rzucanie się na kolejne pomysły bez ich dokańczania albo frustracja brakiem szybkich efektów.", obstacle: "rozpraszanie się kolejnymi pomysłami zamiast dokończenia jednego.", solution: "wybierz jeden kierunek i doprowadź go do końca, zanim zaczniesz kolejny." } },

"Knight of Wands": { upright: { keyword: "odwaga, impulsywność, pęd naprzód", meaning: "Karta odważnego, energicznego działania — ruszasz naprzód z pasją, czasem bez pełnego planu, ale z dużą determinacją.", obstacle: "impulsywne działanie bez uwzględnienia konsekwencji.", solution: "działaj odważnie, ale poświęć chwilę na sprawdzenie, czy kierunek jest właściwy." },
  reversed: { keyword: "porywczość, brak cierpliwości", meaning: "Odwrócony Rycerz Buław to porywczość, działanie na oślep albo frustracja, gdy tempo działania nie przynosi oczekiwanych efektów.", obstacle: "działanie pod wpływem impulsu, bez uwzględnienia dłuższej perspektywy.", solution: "zwolnij i skonfrontuj swój zapał z realistyczną oceną sytuacji." } },

"Queen of Wands": { upright: { keyword: "pewność siebie, charyzma, niezależność", meaning: "Karta pewności siebie, ciepła i niezależności — potrafisz inspirować innych, zachowując przy tym własny kierunek i determinację.", obstacle: "presja, by dostosować się do oczekiwań innych kosztem własnej autentyczności.", solution: "działaj z pewnością siebie i zaufaj własnej charyzmie oraz osądowi." },
  reversed: { keyword: "zazdrość, niepewność, wypalenie", meaning: "Odwrócona Królowa Buław to chwilowa utrata pewności siebie, zazdrość albo wypalenie energią, którą zwykle dzielisz się z innymi.", obstacle: "porównywanie się z innymi, które osłabia Twoją pewność siebie.", solution: "wróć do tego, co daje Ci energię i odbuduj pewność siebie od wewnątrz." } },

"King of Wands": { upright: { keyword: "wizja, przywództwo, odwaga", meaning: "Karta wizjonerskiego przywództwa — masz jasną wizję i odwagę, by prowadzić innych lub siebie w stronę ambitnego celu.", obstacle: "trudność w zjednaniu innych do swojej wizji lub w delegowaniu zadań.", solution: "podziel się swoją wizją odważnie i zaangażuj innych do wspólnego działania." },
  reversed: { keyword: "despotyzm, impulsywne decyzje", meaning: "Odwrócony Król Buław to nadmierna dominacja, impulsywne, autorytarne decyzje albo, przeciwnie, brak odwagi, by objąć przywództwo, którego sytuacja wymaga.", obstacle: "zbyt autorytarne podejście albo unikanie wzięcia odpowiedzialności.", solution: "prowadź z pewnością, ale zostaw przestrzeń na głos i potrzeby innych." } },

"Ace of Cups": { upright: { keyword: "nowe uczucia, otwarcie serca", meaning: "Nowy początek emocjonalny — może to być miłość, głęboka więź albo odnowione połączenie z własnymi uczuciami. Serce otwiera się na coś nowego.", obstacle: "strach przed otwarciem się na nowe uczucia.", solution: "pozwól sobie poczuć i wyrazić to, co się w Tobie otwiera." },
  reversed: { keyword: "zablokowane emocje, rozczarowanie", meaning: "Odwrócony As Kielichów to zablokowane lub stłumione emocje, rozczarowanie w relacji albo trudność w otwarciu się na nowe uczucie.", obstacle: "tłumienie emocji z lęku przed zranieniem.", solution: "znajdź bezpieczną przestrzeń, by pozwolić sobie poczuć to, co stłumione." } },

"Two of Cups": { upright: { keyword: "wzajemność, więź, partnerstwo", meaning: "Karta wzajemnej, zrównoważonej więzi — emocjonalnej lub partnerskiej. Dwie strony spotykają się na równych zasadach, w prawdziwym porozumieniu.", obstacle: "brak równowagi lub wzajemności w relacji.", solution: "buduj relację opartą na wzajemnym szacunku i szczerej wymianie." },
  reversed: { keyword: "brak równowagi, rozdźwięk", meaning: "Odwrócona Dwójka Kielichów to rozdźwięk w relacji, brak wzajemności albo napięcie wynikające z niedopasowania oczekiwań.", obstacle: "niedopasowanie oczekiwań między Tobą a drugą stroną.", solution: "otwarcie porozmawiaj o tym, czego każda ze stron naprawdę potrzebuje." } },

"Three of Cups": { upright: { keyword: "przyjaźń, wspólne świętowanie", meaning: "Karta radości płynącej ze wspólnoty — przyjaźni, wsparcia bliskich, wspólnego świętowania dobrych chwil.", obstacle: "izolowanie się od bliskich w momencie, gdy ich wsparcie byłoby cenne.", solution: "otwórz się na wsparcie przyjaciół i pozwól sobie na wspólne świętowanie." },
  reversed: { keyword: "konflikty w grupie, izolacja", meaning: "Odwrócona Trójka Kielichów to konflikty w grupie, plotki albo poczucie wykluczenia z relacji, które wcześniej dawały wsparcie.", obstacle: "napięcia lub nieporozumienia w gronie bliskich osób.", solution: "wyjaśnij nieporozumienie wprost lub poszukaj wsparcia w innym, zdrowszym gronie." } },

"Four of Cups": { upright: { keyword: "znudzenie, apatia, przeoczone możliwości", meaning: "Poczucie znudzenia, stagnacji lub emocjonalnego wycofania — coś dobrego może być tuż obok, ale trudno to teraz dostrzec przez apatię.", obstacle: "apatia, która sprawia, że nie dostrzegasz dostępnych możliwości.", solution: "spróbuj spojrzeć na sytuację świeżym okiem, zamiast odrzucać ją z góry." },
  reversed: { keyword: "wychodzenie z apatii, nowa otwartość", meaning: "Odwrócona Czwórka Kielichów pokazuje wychodzenie z apatii i ponowne dostrzeganie możliwości, które wcześniej ignorowałaś/eś. Pojawia się gotowość, by znów się zaangażować.", obstacle: "resztki zniechęcenia, które wciąż każą wątpić w nowe możliwości.", solution: "daj sobie szansę na sprawdzenie tego, co wcześniej odrzuciłaś/eś bez zastanowienia." } },

"Five of Cups": { upright: { keyword: "żal, strata, skupienie na tym, co złe", meaning: "Karta żalu i skupienia się na stracie, przy jednoczesnym niedostrzeganiu tego, co wciąż zostało. Warto pozwolić sobie na żałobę, ale nie zapominać o pozostałych zasobach.", obstacle: "skupianie się wyłącznie na stracie, a nie na tym, co jeszcze zostało.", solution: "opłakaj to, co straciłaś/eś, ale potem spójrz na to, co wciąż masz." },
  reversed: { keyword: "akceptacja, wychodzenie z żalu", meaning: "Odwrócona Piątka Kielichów to zaczynanie akceptacji straty, wybaczenie sobie lub innym i stopniowe wychodzenie z żalu ku temu, co przed Tobą.", obstacle: "trudność w wybaczeniu sobie lub innym i puszczeniu przeszłości.", solution: "pozwól sobie domknąć żałobę i skieruj uwagę na to, co dalej." } },

"Six of Cups": { upright: { keyword: "nostalgia, przeszłość, niewinność", meaning: "Karta nostalgii, wspomnień i powrotu do czegoś dobrego z przeszłości — czasem dosłownie, czasem jako emocjonalny powrót do prostszych czasów.", obstacle: "trzymanie się przeszłości kosztem tego, co dzieje się teraz.", solution: "czerp z dobrych wspomnień siłę, ale skieruj uwagę na teraźniejszość." },
  reversed: { keyword: "utykanie w przeszłości, idealizacja", meaning: "Odwrócona Szóstka Kielichów to nadmierne trzymanie się przeszłości, idealizowanie tego, co minęło, albo trudność w dorośnięciu do obecnej sytuacji.", obstacle: "idealizowanie przeszłości zamiast mierzenia się z teraźniejszością.", solution: "świadomie oddziel to, co było dobre, od tego, co już nie pasuje do Twojej obecnej sytuacji." } },

"Seven of Cups": { upright: { keyword: "wybór, marzenia, iluzje", meaning: "Wiele opcji, wiele marzeń — ale nie wszystkie są równie realne. Karta zachęca do trzeźwego przyjrzenia się, które z możliwości naprawdę warto realizować.", obstacle: "trudność w odróżnieniu realistycznych opcji od czystych fantazji.", solution: "zweryfikuj każdą z opcji trzeźwo, zanim zdecydujesz, w którą zainwestować energię." },
  reversed: { keyword: "jasność wyboru, koniec złudzeń", meaning: "Odwrócona Siódemka Kielichów oznacza większą jasność co do tego, która opcja jest realna, oraz koniec złudzeń, które wcześniej przesłaniały obraz sytuacji.", obstacle: "pozostałości iluzji, które utrudniają podjęcie ostatecznej decyzji.", solution: "zaufaj tej większej jasności i wybierz opcję najbardziej realną, nie najbardziej wymarzoną." } },

"Eight of Cups": { upright: { keyword: "odejście, poszukiwanie głębszego sensu", meaning: "Karta świadomego odejścia od czegoś, co przestało dawać spełnienie, w poszukiwaniu głębszego sensu. Czasem trzeba zostawić coś dobrego, by znaleźć coś ważniejszego.", obstacle: "trudność w odejściu od czegoś wygodnego, ale już niesatysfakcjonującego.", solution: "pozwól sobie odejść od tego, co już nie daje spełnienia, choćby było wygodne." },
  reversed: { keyword: "lęk przed odejściem, powrót do starego", meaning: "Odwrócona Ósemka Kielichów to lęk przed opuszczeniem znanej sytuacji albo powrót do czegoś, co wcześniej świadomie porzuciłaś/eś.", obstacle: "strach przed nieznanym, który każe trzymać się starego, mimo braku spełnienia.", solution: "zapytaj siebie szczerze, czy powrót do starego naprawdę czemuś służy." } },

"Nine of Cups": { upright: { keyword: "spełnienie, satysfakcja, zadowolenie", meaning: "Karta emocjonalnego spełnienia i satysfakcji — to, czego pragnęłaś/eś, jest w zasięgu ręki lub już się spełniło. Czas cieszyć się tym w pełni.", obstacle: "trudność w pozwoleniu sobie na pełną satysfakcję z osiągnięć.", solution: "pozwól sobie w pełni cieszyć się tym, co udało się osiągnąć." },
  reversed: { keyword: "niedosyt, powierzchowna satysfakcja", meaning: "Odwrócona Dziewiątka Kielichów to poczucie niedosytu mimo zewnętrznych oznak sukcesu, albo szukanie spełnienia w rzeczach, które go nie dają na dłuższą metę.", obstacle: "szukanie satysfakcji w miejscach, które dają jedynie chwilową ulgę.", solution: "zapytaj siebie, co naprawdę dałoby Ci trwałe poczucie spełnienia." } },

"Ten of Cups": { upright: { keyword: "harmonia rodzinna, emocjonalne spełnienie", meaning: "Karta głębokiej harmonii emocjonalnej — w rodzinie, relacji czy w sobie samej/samym. To poczucie, że życie emocjonalne jest w dobrym, trwałym miejscu.", obstacle: "rozbieżność między obrazem idealnej harmonii a codzienną rzeczywistością.", solution: "pielęgnuj bliskie relacje i doceniaj emocjonalną stabilność, którą już masz." },
  reversed: { keyword: "rozdźwięk rodzinny, niespełnione oczekiwania", meaning: "Odwrócona Dziesiątka Kielichów to napięcia rodzinne, rozdźwięk między wyobrażeniem a rzeczywistością albo poczucie, że coś w relacjach nie gra.", obstacle: "niewypowiedziane napięcia lub rozbieżne oczekiwania w bliskich relacjach.", solution: "porozmawiaj otwarcie o tym, co naprawdę czujecie, zamiast udawać harmonię." } },

"Page of Cups": { upright: { keyword: "wrażliwość, marzycielstwo, nowa wiadomość emocjonalna", meaning: "Karta wrażliwości, marzycielstwa i otwartości na nowe uczucia — czasem zapowiada dobrą, emocjonalną wiadomość albo powrót do kontaktu z własną intuicją.", obstacle: "nadmierna wrażliwość, która utrudnia trzeźwą ocenę sytuacji.", solution: "pozwól sobie na wrażliwość, ale sprawdzaj swoje odczucia z rzeczywistością." },
  reversed: { keyword: "przewrażliwienie, niedojrzałość emocjonalna, idealizacja", meaning: "Odwrócony Paź Kielichów ostrzega przed opieraniem decyzji wyłącznie na marzeniu czy emocjonalnym pragnieniu — może pojawić się rozczarowanie, nadmierna idealizacja albo niepewność co do własnych możliwości.", obstacle: "opieranie decyzji wyłącznie na wyobrażeniu, a nie na sprawdzonych faktach.", solution: "sprawdź, co jest realne, a co idealizowane, zanim zaangażujesz się emocjonalnie w pełni." } },

"Knight of Cups": { upright: { keyword: "romantyzm, podążanie za sercem", meaning: "Karta romantycznego podejścia i podążania za sercem — działasz z wrażliwością, proponujesz coś drugiej osobie w duchu emocji, nie kalkulacji.", obstacle: "nadmierny idealizm, który nie uwzględnia praktycznych realiów sytuacji.", solution: "podążaj za sercem, ale zachowaj choć odrobinę realizmu w działaniu." },
  reversed: { keyword: "nastrojowość, niespełnione obietnice", meaning: "Odwrócony Rycerz Kielichów to zmienność nastrojów, niedotrzymane emocjonalne obietnice albo rozczarowanie kimś, kto obiecywał więcej, niż dał.", obstacle: "niespójność między deklaracjami a rzeczywistymi działaniami.", solution: "oceniaj sytuację po czynach, nie tylko po słowach czy obietnicach." } },

"Queen of Cups": { upright: { keyword: "empatia, intuicja, emocjonalna dojrzałość", meaning: "Karta głębokiej empatii i emocjonalnej dojrzałości — potrafisz współodczuwać z innymi, jednocześnie zachowując własne wewnętrzne centrum.", obstacle: "wchłanianie cudzych emocji kosztem własnej równowagi.", solution: "zaufaj swojej intuicji i empatii, dbając jednocześnie o własne granice emocjonalne." },
  reversed: { keyword: "przytłoczenie emocjami, brak granic", meaning: "Odwrócona Królowa Kielichów to przytłoczenie cudzymi lub własnymi emocjami, brak zdrowych granic albo emocjonalna niedostępność jako forma obrony.", obstacle: "brak wyraźnych granic emocjonalnych wobec innych ludzi.", solution: "ustal zdrowe granice emocjonalne, zanim zaopiekujesz się kimś innym." } },

"King of Cups": { upright: { keyword: "równowaga emocjonalna, dojrzałe wsparcie", meaning: "Karta emocjonalnej równowagi i dojrzałości — potrafisz zarządzać silnymi uczuciami spokojnie i mądrze, będąc oparciem dla siebie i innych.", obstacle: "trudność w okazaniu emocji w sposób, który jest jednocześnie spokojny i szczery.", solution: "podejdź do emocjonalnej sytuacji ze spokojem i dojrzałością, nie tłumiąc jej całkowicie." },
  reversed: { keyword: "tłumienie emocji, chwiejność nastroju", meaning: "Odwrócony Król Kielichów to tłumienie emocji pod pozorem spokoju, wahania nastroju albo emocjonalna manipulacja — własna lub cudza.", obstacle: "tłumienie prawdziwych uczuć pod maską opanowania.", solution: "pozwól sobie wyrazić prawdziwe emocje, zamiast ukrywać je za fasadą spokoju." } },

"Ace of Swords": { upright: { keyword: "jasność umysłu, przełomowa prawda", meaning: "Karta nagłej jasności umysłu — prawda staje się widoczna, pojawia się przełomowa myśl lub decyzja. Dobry moment na jasną, szczerą komunikację.", obstacle: "trudność w nazwaniu prawdy wprost, nawet jeśli już ją widzisz.", solution: "wypowiedz jasno to, co widzisz teraz wyraźnie, zamiast dalej to owijać." },
  reversed: { keyword: "chaos myślowy, błędny osąd", meaning: "Odwrócony As Mieczy to chaos myślowy, błędny osąd albo trudność w dotarciu do sedna sprawy mimo prób.", obstacle: "mętne myślenie, które utrudnia podjęcie trafnej decyzji.", solution: "zwolnij, uporządkuj fakty, zanim wyciągniesz ostateczne wnioski." } },

"Two of Swords": { upright: { keyword: "trudna decyzja, impas, unikanie wyboru", meaning: "Karta impasu — stoisz między dwiema opcjami i unikasz wyboru, bo obie strony wydają się trudne. Czasem trzeba zdjąć przepaskę z oczu, by zobaczyć sytuację jasno.", obstacle: "unikanie decyzji, by nie musieć konfrontować się z jej konsekwencjami.", solution: "zbierz odwagę, by spojrzeć na sytuację wprost i dokonać wyboru." },
  reversed: { keyword: "przełamanie impasu, przeciążenie informacją", meaning: "Odwrócona Dwójka Mieczy to moment przełamania impasu — decyzja w końcu zapada, choć może być wymuszona przez okoliczności, albo przeciwnie, przeciążenie sprzecznymi informacjami.", obstacle: "zbyt wiele sprzecznych informacji, które utrudniają jasną ocenę.", solution: "zaufaj temu, co już wiesz i podejmij decyzję, zamiast czekać na pełną pewność." } },

"Three of Swords": { upright: { keyword: "ból, zawód, smutek", meaning: "Karta bólu emocjonalnego, rozczarowania lub trudnej prawdy, która została powiedziana lub usłyszana. Ważne, by pozwolić sobie ten ból przeżyć, nie tłumić go.", obstacle: "tłumienie bólu zamiast pozwolenia sobie na jego przeżycie.", solution: "pozwól sobie poczuć smutek i szukaj wsparcia, zamiast zamykać się w sobie." },
  reversed: { keyword: "uzdrawianie po bólu, wybaczanie", meaning: "Odwrócona Trójka Mieczy to proces uzdrawiania po trudnym doświadczeniu, wybaczanie sobie lub innym i stopniowe wychodzenie z bólu.", obstacle: "trudność w wybaczeniu, która przedłuża cierpienie.", solution: "daj sobie czas na uzdrowienie i świadomie pracuj nad wybaczeniem." } },

"Four of Swords": { upright: { keyword: "odpoczynek, regeneracja, wycofanie", meaning: "Karta potrzebnego odpoczynku i regeneracji po trudnym okresie. Zanim ruszysz dalej, warto dać umysłowi i ciału chwilę wytchnienia.", obstacle: "nieumiejętność zatrzymania się i dania sobie prawa do odpoczynku.", solution: "pozwól sobie na realny odpoczynek, zanim wrócisz do działania z nową energią." },
  reversed: { keyword: "wymuszony powrót do działania, wypalenie", meaning: "Odwrócona Czwórka Mieczy to powrót do działania zbyt wcześnie, bez pełnej regeneracji, albo przeciwnie — przedłużające się wycofanie, które zaczyna szkodzić.", obstacle: "brak wystarczającego odpoczynku przed powrotem do pełnej aktywności.", solution: "sprawdź uczciwie, czy naprawdę jesteś już gotowa/y wrócić do działania, czy potrzebujesz jeszcze czasu." } },

"Five of Swords": { upright: { keyword: "konflikt, pyrrusowe zwycięstwo", meaning: "Karta konfliktu, w którym nawet wygrana może kosztować więcej niż przynieść korzyści. Warto zastanowić się, czy warto walczyć o rację za wszelką cenę.", obstacle: "walka o rację, która kosztuje więcej niż jest warta.", solution: "zastanów się, czy w tej sytuacji ważniejsza jest wygrana, czy dobra relacja." },
  reversed: { keyword: "wygaszanie konfliktu, pojednanie", meaning: "Odwrócona Piątka Mieczy to próba wygaszenia konfliktu, pojednanie po sporze albo uwolnienie się od poczucia, że trzeba stale wygrywać.", obstacle: "trudność w wypuszczeniu z rąk poczucia krzywdy po sporze.", solution: "poszukaj sposobu na pojednanie, nawet jeśli oznacza to odpuszczenie racji." } },

"Six of Swords": { upright: { keyword: "przejście, oddalanie się od trudności", meaning: "Karta przechodzenia od trudnego okresu do spokojniejszych wód — powolne, ale realne oddalanie się od problemów w stronę stabilizacji.", obstacle: "trudność w opuszczeniu trudnej sytuacji, mimo że czas na to dojrzał.", solution: "zrób krok w stronę spokojniejszej sytuacji, nawet jeśli przejście jest powolne." },
  reversed: { keyword: "utknięcie, opór przed zmianą sytuacji", meaning: "Odwrócona Szóstka Mieczy to utknięcie w trudnej sytuacji, opór przed jej opuszczeniem albo powrót problemów, które wydawały się już rozwiązane.", obstacle: "trzymanie się sytuacji, z której już dawno powinnaś/powinieneś wyjść.", solution: "zrób konkretny krok w stronę zmiany, zamiast czekać, aż sytuacja rozwiąże się sama." } },

"Seven of Swords": { upright: { keyword: "podstęp, samodzielne działanie, unikanie", meaning: "Karta działania w pojedynkę, czasem podstępnego albo niecałkiem uczciwego — także wobec samej/samego siebie. Warto sprawdzić, czy nie unikasz czegoś, z czym powinnaś/powinieneś się zmierzyć wprost.", obstacle: "unikanie wprost stawienia czoła sytuacji, zamiast szukania skrótów.", solution: "zmierz się z sytuacją otwarcie, zamiast szukać sposobu, by ją obejść." },
  reversed: { keyword: "wyjście na jaw, ujawnienie prawdy", meaning: "Odwrócona Siódemka Mieczy to moment, w którym coś ukrywanego wychodzi na jaw, albo świadoma rezygnacja z nieuczciwej strategii na rzecz szczerości.", obstacle: "konsekwencje wcześniejszego unikania lub nieszczerości, które teraz wychodzą na jaw.", solution: "wybierz szczerość, nawet jeśli oznacza to przyznanie się do błędu." } },

"Eight of Swords": { upright: { keyword: "poczucie uwięzienia, ograniczające przekonania", meaning: "Karta poczucia uwięzienia, które częściej wynika z ograniczających przekonań niż z realnej sytuacji. Więcej opcji jest dostępnych, niż w tej chwili widzisz.", obstacle: "ograniczające przekonania, które sprawiają wrażenie braku wyjścia.", solution: "zakwestionuj przekonanie, że nie masz wyboru — sprawdź, jakie opcje naprawdę masz." },
  reversed: { keyword: "uwalnianie się z ograniczeń", meaning: "Odwrócona Ósemka Mieczy to stopniowe uwalnianie się z ograniczających przekonań i odzyskiwanie poczucia sprawczości nad własną sytuacją.", obstacle: "resztki starego przekonania o braku możliwości, które wciąż powstrzymują działanie.", solution: "zrób pierwszy krok, który udowodni Ci, że masz więcej możliwości, niż sądziłaś/eś." } },

"Nine of Swords": { upright: { keyword: "lęk, zamartwianie się, bezsenne noce", meaning: "Karta silnego lęku i zamartwiania się, często w nocy, gdy myśli krążą wokół najgorszych scenariuszy. Warto sprawdzić, ile z tych obaw jest realnych, a ile wyolbrzymionych.", obstacle: "katastroficzne myślenie, które pogłębia niepokój ponad realną skalę problemu.", solution: "porozmawiaj o swoich obawach z kimś zaufanym, zamiast zmagać się z nimi w samotności." },
  reversed: { keyword: "ulga po lęku, konfrontacja z obawami", meaning: "Odwrócona Dziewiątka Mieczy to stopniowa ulga po okresie silnego niepokoju albo świadoma konfrontacja z obawami, które wcześniej wydawały się przytłaczające.", obstacle: "trudność w przerwaniu spirali zamartwiania się mimo poprawy sytuacji.", solution: "sprawdź swoje obawy w realnym świecie — zwykle są mniej groźne, niż w myślach." } },

"Ten of Swords": { upright: { keyword: "definitywny koniec, dno, wyczerpanie", meaning: "Karta bolesnego, ale definitywnego zakończenia — dotarcia do dna, po którym nie ma już innej drogi niż w górę. To trudny moment, ale zamyka pewien etap ostatecznie.", obstacle: "poczucie, że sytuacja nie może się już pogorszyć, co samo w sobie jest przytłaczające.", solution: "pozwól temu etapowi się zakończyć — to, co po nim nastąpi, może być tylko lepsze." },
  reversed: { keyword: "powolne podnoszenie się, opóźniony koniec", meaning: "Odwrócona Dziesiątka Mieczy to powolne podnoszenie się po trudnym okresie albo przeciąganie zakończenia, które i tak jest nieuniknione.", obstacle: "przedłużanie trudnego etapu zamiast pozwolenia mu się definitywnie zakończyć.", solution: "zaakceptuj, że ten etap dobiegł końca i skieruj energię w stronę odbudowy." } },

"Page of Swords": { upright: { keyword: "ciekawość, czujność, nowe informacje", meaning: "Karta czujności, ciekawości i chęci zdobywania nowych informacji. Może zapowiadać nowinę lub potrzebę bacznego przyjrzenia się faktom, zanim wyciągniesz wnioski.", obstacle: "pochopne wyciąganie wniosków bez pełnych informacji.", solution: "zbierz więcej informacji i obserwuj sytuację, zanim zareagujesz." },
  reversed: { keyword: "plotki, pochopne osądy, przeciążenie informacją", meaning: "Odwrócony Paź Mieczy to plotki, pochopne osądy albo przeciążenie nadmiarem informacji, które trudno zweryfikować.", obstacle: "działanie na podstawie niesprawdzonych informacji lub plotek.", solution: "zweryfikuj informacje u źródła, zanim podejmiesz na ich podstawie decyzję." } },

"Knight of Swords": { upright: { keyword: "determinacja, szybkie działanie, bezpośredniość", meaning: "Karta zdecydowanego, szybkiego działania i bezpośredniej komunikacji — wiesz, czego chcesz, i ruszasz do celu bez zbędnych ceregieli.", obstacle: "zbytnia szybkość lub bezwzględność, która pomija uczucia innych osób.", solution: "działaj zdecydowanie, ale zostaw sobie chwilę na uwzględnienie skutków dla innych." },
  reversed: { keyword: "impulsywność, brak przemyślenia, konflikt", meaning: "Odwrócony Rycerz Mieczy to działanie zbyt impulsywne, ostre słowa wypowiedziane bez namysłu albo konflikt wynikający z braku cierpliwości.", obstacle: "pochopne słowa lub decyzje podjęte bez wystarczającego namysłu.", solution: "zanim zareagujesz, weź oddech i sprawdź, czy Twoja reakcja jest naprawdę przemyślana." } },

"Queen of Swords": { upright: { keyword: "jasność umysłu, szczerość, niezależność", meaning: "Karta jasnego, niezależnego myślenia i mówienia prawdy wprost, nawet jeśli jest niewygodna. Potrafisz oddzielić emocje od faktów i podjąć decyzję z jasnością.", obstacle: "trudność w połączeniu szczerości z empatią wobec innych.", solution: "mów prawdę wprost, ale postaraj się zrobić to z życzliwością." },
  reversed: { keyword: "chłód, przesadna krytyczność", meaning: "Odwrócona Królowa Mieczy to nadmierna surowość, chłód emocjonalny albo krytycyzm, który rani bardziej, niż to konieczne.", obstacle: "nadmierna surowość wobec siebie lub innych, która oddala ludzi.", solution: "złagodź ton, nie tracąc przy tym jasności i szczerości swojego przekazu." } },

"King of Swords": { upright: { keyword: "logika, autorytet intelektualny, obiektywizm", meaning: "Karta jasnego, logicznego myślenia i podejmowania decyzji w oparciu o fakty, nie emocje. Twój autorytet wynika z rzetelnej wiedzy i obiektywizmu.", obstacle: "nadmierne poleganie na logice kosztem uwzględnienia emocji — swoich i cudzych.", solution: "podejmij decyzję w oparciu o fakty, ale nie ignoruj przy tym ludzkiego wymiaru sytuacji." },
  reversed: { keyword: "manipulacja logiką, chłodna surowość", meaning: "Odwrócony Król Mieczy to nadużywanie logiki do manipulacji, nadmierna surowość albo decyzje podejmowane bez uwzględnienia ludzkich konsekwencji.", obstacle: "chłodne, wyrachowane podejście, które pomija ludzki wymiar sytuacji.", solution: "sprawdź, czy Twoja decyzja jest nie tylko logiczna, ale też sprawiedliwa wobec innych." } },
};

/* ============================================================
   Tarot TAK/NIE — werdykt dla każdej karty (prosto / odwrócona)
   Skala: "Tak" | "Raczej tak" | "Niejasne" | "Raczej nie" | "Nie"
   ============================================================ */
const YES_NO = {
  "The Fool": { upright: "Tak", reversed: "Raczej nie" },
  "The Magician": { upright: "Tak", reversed: "Raczej nie" },
  "The High Priestess": { upright: "Niejasne", reversed: "Nie" },
  "The Empress": { upright: "Tak", reversed: "Raczej nie" },
  "The Emperor": { upright: "Tak", reversed: "Nie" },
  "The Hierophant": { upright: "Niejasne", reversed: "Raczej nie" },
  "The Lovers": { upright: "Tak", reversed: "Nie" },
  "The Chariot": { upright: "Tak", reversed: "Raczej nie" },
  "Strength": { upright: "Tak", reversed: "Raczej nie" },
  "The Hermit": { upright: "Niejasne", reversed: "Raczej nie" },
  "Wheel of Fortune": { upright: "Tak", reversed: "Raczej nie" },
  "Justice": { upright: "Tak", reversed: "Nie" },
  "The Hanged Man": { upright: "Nie", reversed: "Nie" },
  "Death": { upright: "Nie", reversed: "Nie" },
  "Temperance": { upright: "Niejasne", reversed: "Raczej nie" },
  "The Devil": { upright: "Nie", reversed: "Raczej tak" },
  "The Tower": { upright: "Nie", reversed: "Raczej nie" },
  "The Star": { upright: "Tak", reversed: "Raczej nie" },
  "The Moon": { upright: "Niejasne", reversed: "Raczej tak" },
  "The Sun": { upright: "Tak", reversed: "Raczej tak" },
  "Judgement": { upright: "Tak", reversed: "Raczej nie" },
  "The World": { upright: "Tak", reversed: "Raczej nie" },

  "Ace of Pentacles": { upright: "Tak", reversed: "Nie" },
  "Two of Pentacles": { upright: "Raczej tak", reversed: "Raczej nie" },
  "Three of Pentacles": { upright: "Tak", reversed: "Raczej nie" },
  "Four of Pentacles": { upright: "Raczej nie", reversed: "Nie" },
  "Five of Pentacles": { upright: "Nie", reversed: "Raczej tak" },
  "Six of Pentacles": { upright: "Tak", reversed: "Raczej nie" },
  "Seven of Pentacles": { upright: "Niejasne", reversed: "Nie" },
  "Eight of Pentacles": { upright: "Tak", reversed: "Raczej nie" },
  "Nine of Pentacles": { upright: "Tak", reversed: "Raczej nie" },
  "Ten of Pentacles": { upright: "Tak", reversed: "Raczej nie" },
  "Page of Pentacles": { upright: "Raczej tak", reversed: "Nie" },
  "Knight of Pentacles": { upright: "Raczej tak", reversed: "Raczej nie" },
  "Queen of Pentacles": { upright: "Tak", reversed: "Raczej nie" },
  "King of Pentacles": { upright: "Tak", reversed: "Raczej nie" },

  "Ace of Wands": { upright: "Tak", reversed: "Nie" },
  "Two of Wands": { upright: "Raczej tak", reversed: "Raczej nie" },
  "Three of Wands": { upright: "Tak", reversed: "Raczej nie" },
  "Four of Wands": { upright: "Tak", reversed: "Raczej nie" },
  "Five of Wands": { upright: "Nie", reversed: "Raczej nie" },
  "Six of Wands": { upright: "Tak", reversed: "Raczej nie" },
  "Seven of Wands": { upright: "Tak", reversed: "Raczej nie" },
  "Eight of Wands": { upright: "Tak", reversed: "Raczej nie" },
  "Nine of Wands": { upright: "Raczej tak", reversed: "Nie" },
  "Ten of Wands": { upright: "Raczej nie", reversed: "Niejasne" },
  "Page of Wands": { upright: "Raczej tak", reversed: "Raczej nie" },
  "Knight of Wands": { upright: "Tak", reversed: "Raczej nie" },
  "Queen of Wands": { upright: "Tak", reversed: "Raczej nie" },
  "King of Wands": { upright: "Tak", reversed: "Raczej nie" },

  "Ace of Cups": { upright: "Tak", reversed: "Nie" },
  "Two of Cups": { upright: "Tak", reversed: "Raczej nie" },
  "Three of Cups": { upright: "Tak", reversed: "Raczej nie" },
  "Four of Cups": { upright: "Nie", reversed: "Raczej tak" },
  "Five of Cups": { upright: "Nie", reversed: "Raczej tak" },
  "Six of Cups": { upright: "Niejasne", reversed: "Raczej nie" },
  "Seven of Cups": { upright: "Niejasne", reversed: "Raczej tak" },
  "Eight of Cups": { upright: "Nie", reversed: "Raczej nie" },
  "Nine of Cups": { upright: "Tak", reversed: "Raczej nie" },
  "Ten of Cups": { upright: "Tak", reversed: "Raczej nie" },
  "Page of Cups": { upright: "Raczej tak", reversed: "Nie" },
  "Knight of Cups": { upright: "Raczej tak", reversed: "Raczej nie" },
  "Queen of Cups": { upright: "Tak", reversed: "Raczej nie" },
  "King of Cups": { upright: "Tak", reversed: "Raczej nie" },

  "Ace of Swords": { upright: "Tak", reversed: "Nie" },
  "Two of Swords": { upright: "Nie", reversed: "Raczej tak" },
  "Three of Swords": { upright: "Nie", reversed: "Raczej tak" },
  "Four of Swords": { upright: "Nie", reversed: "Raczej nie" },
  "Five of Swords": { upright: "Nie", reversed: "Raczej tak" },
  "Six of Swords": { upright: "Raczej tak", reversed: "Nie" },
  "Seven of Swords": { upright: "Nie", reversed: "Raczej tak" },
  "Eight of Swords": { upright: "Nie", reversed: "Raczej tak" },
  "Nine of Swords": { upright: "Nie", reversed: "Raczej tak" },
  "Ten of Swords": { upright: "Nie", reversed: "Raczej tak" },
  "Page of Swords": { upright: "Niejasne", reversed: "Nie" },
  "Knight of Swords": { upright: "Raczej tak", reversed: "Raczej nie" },
  "Queen of Swords": { upright: "Tak", reversed: "Raczej nie" },
  "King of Swords": { upright: "Tak", reversed: "Raczej nie" },
};

/* ============================================================
   KARTA DNIA — dedykowana baza odczytów dziennych
   Osobna od MEANINGS: każda karta (prosto/odwrócona) ma tu
   własną, świeżą treść dopasowaną do odczytu "na dziś" —
   message (myśl na dziś), doToday (co warto zrobić),
   avoidToday (na co uważać).
   ============================================================ */
const DAY_MEANINGS = {
"The Fool": { upright: { message: "Dziś sprzyja świeżym początkom i odrobinie spontaniczności — nie wszystko musi być od razu dopięte na ostatni guzik. Pozwól sobie na ciekawość i lekkość w podejściu do tego, co nowe.", doToday: "Zrób dziś jeden mały krok w nieznane, bez nadmiernego planowania.", avoidToday: "Nie oceniaj z góry pomysłu tylko dlatego, że brzmi nietypowo." },
  reversed: { message: "Dziś możesz czuć wahanie przed zrobieniem czegoś nowego albo odwrotnie — kusić Cię będzie, by działać bez zastanowienia. Obie skrajności warto dziś zauważyć i trochę wyhamować.", doToday: "Zanim zaczniesz, zadaj sobie jedno pytanie: czego naprawdę teraz potrzebuję.", avoidToday: "Unikaj dziś decyzji podejmowanych w pośpiechu albo z czystego lęku." } },

"The Magician": { upright: { message: "Masz dziś pod ręką wszystko, czego potrzebujesz, by coś konkretnego ruszyć z miejsca. To dobry dzień na działanie, nie na czekanie na lepszy moment.", doToday: "Wybierz jedno zadanie i dokończ je dziś do końca.", avoidToday: "Nie rozpraszaj dzisiejszej energii na zbyt wiele rzeczy naraz." },
  reversed: { message: "Dziś łatwiej o rozkojarzenie albo wrażenie, że brakuje Ci narzędzi, choć w rzeczywistości są w zasięgu ręki. Warto wrócić do prostych, sprawdzonych kroków.", doToday: "Uporządkuj dziś jedną rzecz, zanim zaczniesz kolejną.", avoidToday: "Nie obwiniaj się za brak postępu — dziś liczy się powrót do podstaw." } },

"The High Priestess": { upright: { message: "To dzień sprzyjający wyciszeniu i słuchaniu własnej intuicji bardziej niż głosów z zewnątrz. Nie każda odpowiedź musi paść dziś na głos.", doToday: "Znajdź dziś chwilę ciszy i zapytaj samą/samego siebie, co czujesz.", avoidToday: "Nie zmuszaj się dziś do podejmowania głośnych, publicznych decyzji." },
  reversed: { message: "Dziś łatwo stracić kontakt z własnym przeczuciem albo zbyt wiele zatrzymać dla siebie. Jeśli coś Cię niepokoi, nie musisz nosić tego sama/sam.", doToday: "Zapisz dziś swoje myśli, zamiast je tłumić.", avoidToday: "Unikaj dziś ukrywania czegoś ważnego przed sobą samą/samym." } },

"The Empress": { upright: { message: "Dziś sprzyja zmysłowej przyjemności, trosce o siebie i tworzeniu czegoś z sercem. Pozwól sobie na odrobinę luksusu czy przyjemności bez poczucia winy.", doToday: "Zrób dziś coś, co odżywia Cię zmysłowo — jedzenie, naturę, piękno.", avoidToday: "Nie zaniedbuj dziś siebie na rzecz opieki nad innymi." },
  reversed: { message: "Dziś możesz czuć się wypalona/y albo zbyt rozdana/y innym. To sygnał, by dziś dać coś sobie, zanim znowu zaczniesz dawać innym.", doToday: "Zrób dziś jedną rzecz tylko dla siebie, bez tłumaczenia się.", avoidToday: "Nie bierz dziś na siebie kolejnych obowiązków wobec innych." } },

"The Emperor": { upright: { message: "Dziś dobrze zadziała struktura, jasny plan i wzięcie spraw w swoje ręce. Nawet mały porządek w grafiku doda Ci dziś poczucia kontroli.", doToday: "Ustal dziś jeden konkretny priorytet i trzymaj się go.", avoidToday: "Nie pozwól dziś, by chaos innych osób rozbił Twój plan." },
  reversed: { message: "Dziś łatwo o poczucie, że coś wymyka się spod kontroli, albo odwrotnie — o nadmierną sztywność wobec siebie i innych. Elastyczność pomoże bardziej niż upór.", doToday: "Zapytaj dziś, co naprawdę jest pod Twoją kontrolą, a co nie.", avoidToday: "Nie próbuj dziś kontrolować rzeczy, na które nie masz wpływu." } },

"The Hierophant": { upright: { message: "Dziś może przydać się rada kogoś doświadczonego albo sprawdzona metoda zamiast wymyślania koła na nowo. To dzień na naukę, nie na improwizację.", doToday: "Zapytaj dziś kogoś o radę albo sięgnij po sprawdzony sposób.", avoidToday: "Nie odrzucaj dziś z góry tradycyjnego rozwiązania tylko dlatego, że jest oczywiste." },
  reversed: { message: "Dziś może pojawić się chęć zrobienia czegoś po swojemu, wbrew utartym zasadom. To w porządku, o ile decyzja wynika z przemyślenia, nie z buntu dla samego buntu.", doToday: "Sprawdź dziś, czy zasada, której się trzymasz, nadal Ci służy.", avoidToday: "Nie odrzucaj dziś pomocy tylko z zasady niezależności." } },

"The Lovers": { upright: { message: "Dziś sprzyja wyborom zgodnym z sercem i szczerej bliskości z innymi. Jeśli coś wymaga dziś decyzji, wybierz to, co prawdziwe, nie to, co wygodne.", doToday: "Zrób dziś gest, który wzmocni ważną dla Ciebie relację.", avoidToday: "Nie podejmuj dziś decyzji tylko po to, by komuś dogodzić." },
  reversed: { message: "Dziś może dać o sobie znać niezgoda między tym, czego chcesz Ty, a tym, czego oczekują inni. Warto dziś nazwać to wprost, zamiast to odkładać.", doToday: "Powiedz dziś szczerze, czego naprawdę potrzebujesz w relacji.", avoidToday: "Nie unikaj dziś trudnej rozmowy, która i tak czeka." } },

"The Chariot": { upright: { message: "Dziś masz w sobie determinację, by ruszyć zdecydowanie do przodu, nawet jeśli dookoła dzieje się dużo naraz. Trzymaj kurs na to, co ważne.", doToday: "Wybierz dziś jeden kierunek i konsekwentnie w niego idź.", avoidToday: "Nie daj się dziś rozproszyć sprawom, które nie prowadzą do celu." },
  reversed: { message: "Dziś łatwiej stracić poczucie kierunku albo poczuć, że ciągniesz w dwie strony naraz. Zanim ruszysz dalej, warto na chwilę zwolnić.", doToday: "Zapytaj dziś siebie, czy nadal zmierzasz tam, gdzie chcesz.", avoidToday: "Nie przyspieszaj dziś tylko po to, by poczuć, że coś robisz." } },

"Strength": { upright: { message: "Dziś poradzisz sobie z trudnością łagodnością i cierpliwością skuteczniej niż siłą czy presją. Twój spokój jest dziś większą mocą niż walka.", doToday: "Podejdź dziś do trudnej sprawy miękko, bez forsowania.", avoidToday: "Nie próbuj dziś przełamać oporu siłą albo kontrolą." },
  reversed: { message: "Dziś możesz czuć się mniej pewna/pewny siebie niż zwykle albo szybciej tracić cierpliwość. To naturalne — nie musisz dziś być silna/y cały czas.", doToday: "Bądź dziś dla siebie łagodna/łagodny, zwłaszcza gdy coś nie wychodzi.", avoidToday: "Nie karz się dziś w myślach za chwilową słabość." } },

"The Hermit": { upright: { message: "Dziś dobrze zrobi Ci chwila w samotności i odrobina dystansu od zgiełku. Odpowiedzi, których szukasz, są bliżej, niż myślisz — w Tobie, nie na zewnątrz.", doToday: "Zaplanuj dziś choć 15 minut tylko dla siebie, w ciszy.", avoidToday: "Nie zapełniaj dziś każdej wolnej chwili bodźcami z zewnątrz." },
  reversed: { message: "Dziś łatwo przesadzić z izolacją albo, przeciwnie, unikać każdej chwili sam na sam ze sobą. Znajdź dziś równowagę między towarzystwem a samotnością.", doToday: "Jeśli czujesz potrzebę, napisz dziś do kogoś, zamiast się zamykać.", avoidToday: "Nie odcinaj się dziś całkiem od ludzi, nawet jeśli masz ochotę." } },

"Wheel of Fortune": { upright: { message: "Dziś coś może się nieoczekiwanie poruszyć na lepsze — zmiana jest dziś sprzymierzeńcem, nie przeszkodą. Warto być otwartą/otwartym na to, co przyniesie dzień.", doToday: "Skorzystaj dziś z nadarzającej się okazji, nawet jeśli nie była planowana.", avoidToday: "Nie trzymaj się dziś kurczowo planu, jeśli życie podsuwa coś innego." },
  reversed: { message: "Dziś coś może iść nie po Twojej myśli albo czuć się jak powtórka starego problemu. To chwilowe — nie każdy dzień musi się układać gładko.", doToday: "Zaakceptuj dziś to, na co nie masz wpływu i idź dalej.", avoidToday: "Nie wal dziś głową w mur w sprawie, która i tak się nie ruszy." } },

"Justice": { upright: { message: "Dziś sprzyja uczciwemu spojrzeniu na sprawę i podjęciu decyzji zgodnej z faktami, nie z emocjami chwili. Jeśli coś wymaga rozliczenia, dziś jest dobry moment.", doToday: "Spójrz dziś na sytuację bez emocji, jak z boku.", avoidToday: "Nie unikaj dziś odpowiedzialności za swój udział w sprawie." },
  reversed: { message: "Dziś możesz czuć, że coś jest nie fair, wobec Ciebie albo z Twojej strony wobec kogoś innego. Warto dziś nazwać to wprost zamiast to przemilczeć.", doToday: "Przyznaj dziś szczerze, jeśli w czymś nie miałaś/eś racji.", avoidToday: "Nie oceniaj dziś sytuacji tylko z jednej, swojej strony." } },

"The Hanged Man": { upright: { message: "Dziś lepiej się zatrzymać niż forsować sprawę na siłę. Czasem najwięcej zyskujemy, kiedy na chwilę przestajemy działać i patrzymy inaczej.", doToday: "Daj dziś sobie prawo do nicnierobienia przez chwilę.", avoidToday: "Nie forsuj dziś decyzji, która i tak może poczekać." },
  reversed: { message: "Dziś może nasilić się poczucie utknięcia w miejscu albo czekania na coś, co nie nadchodzi. To dobry dzień, by zapytać, na co właściwie czekasz.", doToday: "Zrób dziś jeden mały krok, zamiast dalej czekać na idealny moment.", avoidToday: "Nie usprawiedliwiaj dziś bezczynności brakiem pewności." } },

"Death": { upright: { message: "Dziś może kończyć się coś, co już swoje odegrało — i to dobrze, bo robi miejsce na coś nowego. Nie trzymaj się dziś kurczowo tego, co i tak odchodzi.", doToday: "Zamknij dziś symbolicznie jedną sprawę, która już się wyczerpała.", avoidToday: "Nie próbuj dziś reanimować czegoś, co naturalnie dobiega końca." },
  reversed: { message: "Dziś może pojawić się opór przed zmianą, której i tak nie da się uniknąć. Im szybciej to nazwiesz, tym mniej będzie bolało.", doToday: "Nazwij dziś wprost, czego tak naprawdę się boisz stracić.", avoidToday: "Nie przedłużaj dziś czegoś tylko z lęku przed pustką po tym." } },

"Temperance": { upright: { message: "Dziś dobrze zadziała umiar i spokojne tempo zamiast gwałtownych ruchów. Małe, zrównoważone kroki poniosą Cię dziś dalej niż pośpiech.", doToday: "Znajdź dziś równowagę między pracą a odpoczynkiem.", avoidToday: "Nie rób dziś wszystkiego na ostatnią chwilę i w pośpiechu." },
  reversed: { message: "Dziś łatwo o przesadę w jedną lub drugą stronę — za dużo albo za mało. Warto dziś świadomie zwolnić i poszukać środka.", doToday: "Zrób dziś coś w umiarkowanej, rozsądnej dawce, bez skrajności.", avoidToday: "Nie przeciążaj dziś grafiku ponad to, co realnie uda się zrobić." } },

"The Devil": { upright: { message: "Dziś warto zauważyć nawyk albo wzorzec, który Cię ogranicza, nawet jeśli jest wygodny. Świadomość tego to już pierwszy krok do wolności.", doToday: "Zauważ dziś moment, w którym działasz z przyzwyczajenia, nie z wyboru.", avoidToday: "Nie usprawiedliwiaj dziś szkodliwego nawyku tym, że 'tak jest łatwiej'." },
  reversed: { message: "Dziś masz dobrą energię, by uwolnić się od czegoś, co Cię ograniczało. To proces, nie jednorazowy skok — ale dziś możesz zrobić kolejny krok.", doToday: "Zrób dziś jeden konkretny krok w stronę uwolnienia się od nawyku.", avoidToday: "Nie wracaj dziś do starego wzorca tylko dlatego, że jest znajomy." } },

"The Tower": { upright: { message: "Dziś coś może się nagle zmienić lub ujawnić — choć nieprzyjemne, może to być oczyszczające. Lepiej dziś zmierzyć się z prawdą niż dalej udawać.", doToday: "Przyjmij dziś nieoczekiwaną zmianę jako informację, nie jako katastrofę.", avoidToday: "Nie trzymaj się dziś kurczowo tego, co i tak się rozsypuje." },
  reversed: { message: "Dziś możesz odczuwać napięcie przed czymś, co w końcu musi się wydarzyć. Czasem łatwiej zmierzyć się z tym wprost, niż dalej to odwlekać.", doToday: "Zmierz się dziś z jedną rzeczą, którą odkładałaś/eś z lęku.", avoidToday: "Nie udawaj dziś, że problem zniknie sam, jeśli go zignorujesz." } },

"The Star": { upright: { message: "Dziś sprzyja nadziei i wierze, że sprawy mogą się ułożyć, nawet po trudnym czasie. Pozwól sobie dziś na odrobinę optymizmu bez zastrzeżeń.", doToday: "Zrób dziś coś, co daje Ci nadzieję i siłę na dalej.", avoidToday: "Nie gaś dziś własnej nadziei nadmiernym realizmem." },
  reversed: { message: "Dziś może brakować wiary, że coś się ułoży — to chwilowe, nie trwałe. Nawet mały gest troski o siebie dziś pomoże to odwrócić.", doToday: "Zrób dziś coś małego, co zwykle poprawia Ci nastrój.", avoidToday: "Nie porównuj dziś swojej sytuacji do czyjegoś wyidealizowanego obrazu." } },

"The Moon": { upright: { message: "Dziś sprawy mogą nie być do końca jasne — nie wszystko trzeba dziś rozumieć do końca. Zaufaj, że klarowność przyjdzie z czasem.", doToday: "Zaczekaj dziś z ważną decyzją, jeśli czujesz niepewność.", avoidToday: "Nie podejmuj dziś decyzji wyłącznie pod wpływem lęku czy niepokoju." },
  reversed: { message: "Dziś może robić się jaśniej w sprawie, która długo była mętna. To dobry dzień, by zaufać temu, co zaczynasz dostrzegać wyraźniej.", doToday: "Zapisz dziś, co nowego rozumiesz w sprawie, która Cię niepokoiła.", avoidToday: "Nie bagatelizuj dziś przeczucia, że coś się wreszcie wyjaśnia." } },

"The Sun": { upright: { message: "Dziś sprzyja radości, lekkości i pokazaniu się z dobrej strony. To dzień, w którym warto cieszyć się tym, co się udaje.", doToday: "Zrób dziś coś, co sprawia Ci czystą przyjemność, bez poczucia winy.", avoidToday: "Nie umniejszaj dziś swojego sukcesu czy dobrego samopoczucia." },
  reversed: { message: "Dziś radość może być trochę przyćmiona, ale to nie znaczy, że jej nie ma. Poszukaj dziś małych, konkretnych powodów do uśmiechu.", doToday: "Znajdź dziś jeden mały, realny powód do zadowolenia.", avoidToday: "Nie porównuj dziś swojego dnia do 'idealnego' wyobrażenia." } },

"Judgement": { upright: { message: "Dziś dobry moment na szczere podsumowanie czegoś i podjęcie decyzji zgodnej z tym, kim naprawdę jesteś. Nie musisz dziś udawać przed sobą.", doToday: "Zrób dziś uczciwy rachunek sumienia w jednej konkretnej sprawie.", avoidToday: "Nie odkładaj dziś decyzji, która i tak jest już dojrzała." },
  reversed: { message: "Dziś możesz oceniać siebie surowiej, niż na to zasługujesz. Spróbuj dziś spojrzeć na siebie z większą wyrozumiałością.", doToday: "Zamień dziś jedną samokrytyczną myśl na bardziej łagodną.", avoidToday: "Nie rozpamiętuj dziś błędów, których i tak nie cofniesz." } },

"The World": { upright: { message: "Dziś sprzyja domykaniu spraw i cieszeniu się tym, co udało się osiągnąć. To dobry dzień na docenienie przebytej drogi, nie tylko celu.", doToday: "Dokończ dziś coś, co jest już prawie gotowe.", avoidToday: "Nie zaczynaj dziś czegoś nowego, zanim nie domkniesz poprzedniego etapu." },
  reversed: { message: "Dziś coś może wydawać się prawie gotowe, ale wciąż brakuje ostatniego elementu. Warto dziś sprawdzić, co dokładnie jest jeszcze do zrobienia.", doToday: "Zidentyfikuj dziś ten jeden brakujący element i zajmij się nim.", avoidToday: "Nie udawaj dziś, że temat jest zamknięty, jeśli coś wciąż wisi w powietrzu." } },

"Ace of Pentacles": { upright: { message: "Dziś może pojawić się konkretna, namacalna szansa — finansowa, zawodowa albo zdrowotna. Warto dziś potraktować ją poważnie, nie jako przypadek.", doToday: "Zrób dziś pierwszy praktyczny krok w stronę nowej okazji.", avoidToday: "Nie przegap dziś okazji tylko dlatego, że wydaje się zbyt prosta." },
  reversed: { message: "Dziś łatwiej o wahanie przed nową szansą albo poczucie niepewności finansowej. Zanim zainwestujesz energię, sprawdź dziś, czy grunt pod nogami jest stabilny.", doToday: "Zweryfikuj dziś fakty, zanim zaangażujesz się w coś nowego.", avoidToday: "Nie podejmuj dziś decyzji finansowej pod wpływem impulsu." } },

"Two of Pentacles": { upright: { message: "Dziś żonglujesz kilkoma sprawami naraz i całkiem nieźle Ci to idzie, choć wymaga elastyczności. Pamiętaj, że nie wszystko musi być zrobione idealnie.", doToday: "Ustal dziś kolejność zadań zamiast robić wszystko naraz.", avoidToday: "Nie obiecuj dziś więcej, niż jesteś w stanie dziś udźwignąć." },
  reversed: { message: "Dziś może być Ci trudniej utrzymać równowagę między obowiązkami — coś zaczyna Ci umykać. To sygnał, by dziś coś odłożyć, nie przyspieszyć.", doToday: "Odłóż dziś jedną mniej pilną sprawę na później.", avoidToday: "Nie dokładaj dziś sobie kolejnych zobowiązań." } },

"Three of Pentacles": { upright: { message: "Dziś dobrze zadziała współpraca z innymi — razem zrobicie więcej niż w pojedynkę. Twoje umiejętności są dziś zauważane i potrzebne.", doToday: "Poproś dziś kogoś o pomoc albo zaproponuj współpracę.", avoidToday: "Nie próbuj dziś robić wszystkiego sama/sam z dumy." },
  reversed: { message: "Dziś może zabraknąć jasności, kto za co odpowiada, co rodzi drobne tarcia. Warto dziś doprecyzować oczekiwania zamiast zakładać, że wszystko jest oczywiste.", doToday: "Doprecyzuj dziś z kimś, kto za co odpowiada.", avoidToday: "Nie zakładaj dziś, że inni czytają w Twoich myślach." } },

"Four of Pentacles": { upright: { message: "Dziś naturalna jest potrzeba bezpieczeństwa i trzymania się tego, co masz. To w porządku — ale zauważ, jeśli ta ostrożność zaczyna Cię ograniczać.", doToday: "Zadbaj dziś o swoje bezpieczeństwo finansowe w rozsądny sposób.", avoidToday: "Nie trzymaj dziś kurczowo czegoś tylko z lęku przed stratą." },
  reversed: { message: "Dziś możesz wahać się między skrajną kontrolą a nagłą chęcią puszczenia wszystkiego z rąk. Poszukaj dziś czegoś pomiędzy.", doToday: "Zrób dziś jeden świadomy, umiarkowany gest hojności.", avoidToday: "Nie podejmuj dziś decyzji finansowych pod wpływem buntu." } },

"Five of Pentacles": { upright: { message: "Dziś możesz czuć się trochę osamotniona/y w trudności, materialnej albo emocjonalnej. Pomoc jest bliżej, niż myślisz — wystarczy dziś o nią poprosić.", doToday: "Poproś dziś kogoś o konkretne wsparcie, zamiast radzić sobie samej/samemu.", avoidToday: "Nie izoluj się dziś w trudnym temacie." },
  reversed: { message: "Dziś może przyjść ulga po trudniejszym okresie — sytuacja zaczyna się poprawiać. Pozwól sobie dziś to zauważyć i docenić.", doToday: "Zauważ dziś jeden konkretny znak poprawy sytuacji.", avoidToday: "Nie bagatelizuj dziś pomocy, która już do Ciebie dociera." } },

"Six of Pentacles": { upright: { message: "Dziś sprzyja dawaniu i przyjmowaniu wsparcia w uczciwej, równej wymianie. Zarówno proszenie o pomoc, jak i oferowanie jej, jest dziś na miejscu.", doToday: "Zaoferuj dziś komuś realną pomoc albo przyjmij ją od kogoś.", avoidToday: "Nie czuj się dziś winna/y, przyjmując wsparcie od innych." },
  reversed: { message: "Dziś warto sprawdzić, czy wymiana z kimś jest naprawdę równa, czy raczej obciążona warunkami. Nierówność w dawaniu i braniu daje dziś o sobie znać.", doToday: "Zastanów się dziś, czy jakaś relacja wymiany jest dla Ciebie uczciwa.", avoidToday: "Nie zgadzaj się dziś na pomoc, która wiąże się z ukrytym długiem." } },

"Seven of Pentacles": { upright: { message: "Dziś dobry dzień na zatrzymanie się i ocenę, czy dotychczasowy wysiłek przynosi efekty. Nie musisz dziś przyspieszać — czasem wystarczy poczekać.", doToday: "Oceń dziś uczciwie postępy w długoterminowym projekcie.", avoidToday: "Nie rezygnuj dziś z czegoś tylko dlatego, że efekty jeszcze nie widać." },
  reversed: { message: "Dziś może narastać zniecierpliwienie brakiem szybkich rezultatów. Warto dziś zapytać, czy to kwestia czasu, czy złej strategii.", doToday: "Sprawdź dziś, czy strategia nadal ma sens, czy wymaga zmiany.", avoidToday: "Nie porzucaj dziś projektu pod wpływem chwilowej frustracji." } },

"Eight of Pentacles": { upright: { message: "Dziś sprzyja nauce, dopracowywaniu szczegółów i solidnej, systematycznej pracy. Włożony dziś wysiłek naprawdę się opłaci.", doToday: "Poświęć dziś czas na dopracowanie jednego konkretnego szczegółu.", avoidToday: "Nie idź dziś na skróty w sprawie, która wymaga staranności." },
  reversed: { message: "Dziś może brakować motywacji albo, przeciwnie, pojawia się paraliżujący perfekcjonizm. Oba stany warto dziś zauważyć bez oceniania się.", doToday: "Zrób dziś jedną rzecz 'wystarczająco dobrze', bez dążenia do perfekcji.", avoidToday: "Nie zmuszaj się dziś do pracy, jeśli naprawdę potrzebujesz przerwy." } },

"Nine of Pentacles": { upright: { message: "Dziś sprzyja cieszeniu się tym, na co samodzielnie zapracowałaś/eś. Niezależność i komfort są dziś w zasięgu ręki — pozwól sobie je docenić.", doToday: "Zrób dziś coś przyjemnego tylko dla siebie, bez wyrzutów sumienia.", avoidToday: "Nie pomniejszaj dziś swoich własnych osiągnięć." },
  reversed: { message: "Dziś możesz czuć się przepracowana/y albo zbyt zależna/y od innych w sprawach, które chciałabyś/chciałbyś robić sama/sam. To sygnał, by dziś zwolnić.", doToday: "Zrób dziś coś, co przypomni Ci o Twojej niezależności.", avoidToday: "Nie bierz dziś na siebie więcej pracy niż naprawdę musisz." } },

"Ten of Pentacles": { upright: { message: "Dziś sprzyja myśleniu długoterminowemu i budowaniu czegoś trwałego, zwłaszcza z bliskimi. Sprawy materialne mają dziś szansę się ustabilizować.", doToday: "Zrób dziś coś, co wzmacnia Twoje długoterminowe bezpieczeństwo.", avoidToday: "Nie podejmuj dziś impulsywnych decyzji finansowych bez spojrzenia w przyszłość." },
  reversed: { message: "Dziś mogą odezwać się tematy rodzinne albo niepokój o stabilność w dłuższej perspektywie. Warto dziś nazwać to wprost, zamiast nosić to w sobie.", doToday: "Porozmawiaj dziś otwarcie o temacie, który budzi niepokój w rodzinie.", avoidToday: "Nie unikaj dziś rozmowy o pieniądzach czy przyszłości tylko dlatego, że jest niewygodna." } },

"Page of Pentacles": { upright: { message: "Dziś sprzyja nauce czegoś nowego, praktycznego i konkretnego. Nawet mały krok w stronę nowej umiejętności dziś się liczy.", doToday: "Naucz się dziś czegoś nowego, choćby przez 15 minut.", avoidToday: "Nie oczekuj dziś natychmiastowych efektów od czegoś, co dopiero zaczynasz." },
  reversed: { message: "Dziś może kusić, by odłożyć na później coś, co wymaga systematyczności. Małe, konkretne działanie pomoże bardziej niż czekanie na motywację.", doToday: "Zrób dziś jeden mały, konkretny krok zamiast dalej planować.", avoidToday: "Nie trać dziś czasu na nierealistyczne plany bez pierwszego kroku." } },

"Knight of Pentacles": { upright: { message: "Dziś sprzyja powolnej, ale pewnej pracy — niekoniecznie efektownej, za to skutecznej. Wytrwałość dziś popłaca bardziej niż tempo.", doToday: "Rób dziś swoje, metodycznie, bez porównywania się z innymi.", avoidToday: "Nie rezygnuj dziś z powolnej metody tylko dlatego, że nie czujesz ekscytacji." },
  reversed: { message: "Dziś łatwo wpaść w rutynę, która przestała przynosić efekty. Warto dziś sprawdzić, czy trzymasz się metody z przyzwyczajenia, czy bo naprawdę działa.", doToday: "Zapytaj dziś, czy Twoje tempo i metoda nadal Ci służą.", avoidToday: "Nie upieraj się dziś przy czymś tylko dlatego, że już w to zainwestowałaś/eś czas." } },

"Queen of Pentacles": { upright: { message: "Dziś sprzyja praktycznej trosce o siebie i innych — stworzeniu komfortu, bez przesadnego poświęcenia. Zadbaj dziś o siebie równie konkretnie, jak dbasz o innych.", doToday: "Zrób dziś coś praktycznego, co poprawi Twój codzienny komfort.", avoidToday: "Nie zapominaj dziś o sobie, opiekując się innymi." },
  reversed: { message: "Dziś możesz czuć się przytłoczona/y codziennymi obowiązkami. To dobry moment, by dziś zapytać, co naprawdę jest konieczne, a co można odpuścić.", doToday: "Odpuść dziś jeden obowiązek, który nie jest absolutnie konieczny.", avoidToday: "Nie stawiaj dziś potrzeb wszystkich innych przed swoimi własnymi." } },

"King of Pentacles": { upright: { message: "Dziś sprzyja dojrzałym, spokojnym decyzjom w sprawach materialnych. Masz dziś zasoby i doświadczenie, by budować coś trwałego.", doToday: "Podejmij dziś jedną przemyślaną decyzję finansową lub zawodową.", avoidToday: "Nie poświęcaj dziś innych sfer życia wyłącznie dla spraw materialnych." },
  reversed: { message: "Dziś może kusić nadmierna kontrola nad zasobami albo, przeciwnie, zbytnia beztroska wobec nich. Warto dziś znaleźć złoty środek.", doToday: "Sprawdź dziś realnie swój budżet lub zasoby, bez emocji.", avoidToday: "Nie podejmuj dziś dużych decyzji finansowych pod wpływem chwili." } },

"Ace of Wands": { upright: { message: "Dziś masz dostęp do świeżej energii i zapału do działania. To dobry dzień, by zacząć coś, co od dawna chodziło Ci po głowie.", doToday: "Zacznij dziś coś nowego, choć w małej skali.", avoidToday: "Nie gaś dziś własnego entuzjazmu nadmiernym analizowaniem." },
  reversed: { message: "Dziś energia do działania może być niższa niż zwykle, albo pomysł wciąż nie ma jasnego kierunku. To naturalne wahanie, nie powód do zniechęcenia.", doToday: "Zrób dziś najmniejszy możliwy krok, by odzyskać impet.", avoidToday: "Nie porównuj dziś swojej energii do tego, jak czułaś/eś się wczoraj." } },

"Two of Wands": { upright: { message: "Dziś dobry dzień na planowanie kolejnego kroku, patrząc szerzej niż tylko na to, co tuż przed Tobą. Masz już podstawy — czas zdecydować, dokąd dalej.", doToday: "Zaplanuj dziś konkretnie swój następny krok.", avoidToday: "Nie zostawaj dziś w strefie komfortu tylko z wygody." },
  reversed: { message: "Dziś może pojawić się lęk przed wyjściem poza to, co znane. Masz solidne podstawy — strach przed następnym krokiem nie musi Cię dziś powstrzymywać.", doToday: "Nazwij dziś konkretnie, czego się obawiasz w kolejnym kroku.", avoidToday: "Nie odkładaj dziś decyzji wyłącznie z lęku przed nieznanym." } },

"Three of Wands": { upright: { message: "Dziś Twoje wcześniejsze plany zaczynają nabierać kształtu. Patrz dziś w przyszłość z nadzieją i bądź otwarta/y na nowe możliwości.", doToday: "Sprawdź dziś, jakie nowe możliwości pojawiły się na horyzoncie.", avoidToday: "Nie trać dziś cierpliwości, jeśli efekty przychodzą wolniej niż chciałaś/eś." },
  reversed: { message: "Dziś może pojawić się opóźnienie albo nieprzewidziana przeszkoda w realizacji planu. To nie koniec drogi, tylko zmiana tempa.", doToday: "Dostosuj dziś plan do zmienionych okoliczności, zamiast się upierać.", avoidToday: "Nie traktuj dziś opóźnienia jako dowodu na to, że plan był zły." } },

"Four of Wands": { upright: { message: "Dziś dobry dzień na świętowanie, nawet małego sukcesu, i poczucie przynależności. Doceń dziś to, co udało się dotąd zbudować.", doToday: "Uczcij dziś coś, co udało Ci się osiągnąć, nawet w małym gronie.", avoidToday: "Nie pomijaj dziś okazji do radości tylko dlatego, że jest 'niewystarczająco duża'." },
  reversed: { message: "Dziś może brakować poczucia stabilności w domu czy relacjach. Zamiast świętować, może być potrzebne dziś zajęcie się źródłem napięcia.", doToday: "Zajmij się dziś jednym konkretnym źródłem napięcia w domu.", avoidToday: "Nie udawaj dziś harmonii, której w danym momencie nie czujesz." } },

"Five of Wands": { upright: { message: "Dziś może pojawić się drobna rywalizacja albo różnica zdań — energiczna, ale niegroźna. Potraktuj to dziś jako wymianę, nie wojnę.", doToday: "Wysłuchaj dziś czyjegoś odmiennego zdania bez od razu się bronić.", avoidToday: "Nie wchodź dziś w spór tylko po to, by udowodnić swoją rację." },
  reversed: { message: "Dziś konflikt może się nasilić albo, przeciwnie, być całkowicie unikany, mimo że wymaga rozwiązania. Żadna z tych skrajności nie pomoże dziś na dłużej.", doToday: "Zajmij się dziś sednem sporu, zamiast go dalej odkładać.", avoidToday: "Nie podgrzewaj dziś atmosfery dla samej satysfakcji z wygranej." } },

"Six of Wands": { upright: { message: "Dziś Twój wysiłek ma szansę zostać zauważony i doceniony. Pozwól sobie dziś przyjąć uznanie, zamiast je umniejszać.", doToday: "Podziel się dziś swoim sukcesem z kimś bliskim.", avoidToday: "Nie pomniejszaj dziś swoich zasług z fałszywej skromności." },
  reversed: { message: "Dziś możesz czuć się niedoceniona/y, mimo realnych osiągnięć. Warto dziś docenić siebie samą/samemu, niezależnie od reakcji innych.", doToday: "Zapisz dziś jedną rzecz, z której jesteś z siebie dumna/dumny.", avoidToday: "Nie czekaj dziś wyłącznie na pochwałę z zewnątrz, by poczuć się dobrze." } },

"Seven of Wands": { upright: { message: "Dziś może przyjść potrzeba obrony swojego zdania lub granic pod presją z zewnątrz. Masz dziś przewagę, jeśli zachowasz pewność siebie.", doToday: "Postaw dziś jasno granicę w sprawie, która jest dla Ciebie ważna.", avoidToday: "Nie wycofuj się dziś ze swojego stanowiska tylko pod presją liczby głosów przeciw." },
  reversed: { message: "Dziś presja z zewnątrz może wydawać się przytłaczająca, aż do chęci poddania się. Wybierz dziś, które granice naprawdę warto bronić.", doToday: "Wybierz dziś jedną sprawę, przy której naprawdę chcesz się upierać.", avoidToday: "Nie trać dziś energii na obronę wszystkiego naraz." } },

"Eight of Wands": { upright: { message: "Dziś sprawy mogą nabrać tempa — wiadomości, decyzje i działania przyspieszają. To dobry dzień na zdecydowany ruch do przodu.", doToday: "Wykorzystaj dziś dobre tempo i działaj zdecydowanie.", avoidToday: "Nie trać dziś czasu na zbędne rozważania, gdy sprawa wymaga szybkiej reakcji." },
  reversed: { message: "Dziś coś, co powinno iść szybko, może utknąć albo się opóźnić. Frustracja jest zrozumiała, ale cierpliwość dziś pomoże bardziej niż napór.", doToday: "Wykorzystaj dziś opóźnienie, by dopracować szczegóły.", avoidToday: "Nie poganiaj dziś sprawy, na której tempo nie masz wpływu." } },

"Nine of Wands": { upright: { message: "Dziś jesteś bliżej celu, niż się czujesz, mimo zmęczenia dotychczasową drogą. Warto dziś utrzymać czujność jeszcze przez chwilę.", doToday: "Zrób dziś jeszcze jeden, ostatni wysiłek w stronę celu.", avoidToday: "Nie poddawaj się dziś tuż przed metą." },
  reversed: { message: "Dziś możesz czuć się wypalona/y albo nadmiernie podejrzliwa/y wobec pomocy, która się pojawia. Przyjęcie wsparcia nie jest dziś oznaką słabości.", doToday: "Przyjmij dziś pomoc, zamiast dalej radzić sobie w pojedynkę.", avoidToday: "Nie odrzucaj dziś wsparcia tylko z nieufności." } },

"Ten of Wands": { upright: { message: "Dziś możesz dźwigać więcej obowiązków, niż to wygodne. Cel jest blisko, ale warto dziś zapytać, co można odłożyć lub przekazać komuś innemu.", doToday: "Oddeleguj dziś jedną rzecz, którą ktoś inny mógłby zrobić.", avoidToday: "Nie bierz dziś na siebie kolejnego zobowiązania 'na już'." },
  reversed: { message: "Dziś może przyjść ulga, gdy w końcu oddajesz część ciężaru — albo odwrotnie, poczucie, że to już za dużo. Oba sygnały warto dziś potraktować poważnie.", doToday: "Zrezygnuj dziś świadomie z jednego obowiązku, który Cię przeciąża.", avoidToday: "Nie ignoruj dziś sygnałów zmęczenia czy przeciążenia." } },

"Page of Wands": { upright: { message: "Dziś sprzyja świeżemu entuzjazmowi wobec nowego pomysłu. Nawet jeśli jeszcze nie wiesz wszystkiego, warto dziś zrobić pierwszy krok z ciekawością.", doToday: "Zbadaj dziś nowy pomysł, choćby pobieżnie.", avoidToday: "Nie oczekuj dziś od siebie eksperckiej wiedzy w czymś, co dopiero poznajesz." },
  reversed: { message: "Dziś łatwo rozpraszać się kolejnymi pomysłami, nie kończąc żadnego z nich. Jeden dokończony krok jest dziś więcej wart niż dziesięć rozpoczętych.", doToday: "Dokończ dziś jedną rozpoczętą wcześniej rzecz, zanim zaczniesz nową.", avoidToday: "Nie zaczynaj dziś kolejnego nowego wątku, jeśli poprzedni wisi niedokończony." } },

"Knight of Wands": { upright: { message: "Dziś masz energię do odważnego, szybkiego działania. Idź dziś za tym impulsem, ale zostaw sobie chwilę na sprawdzenie kierunku.", doToday: "Zrób dziś odważny krok w sprawie, którą długo odkładałaś/eś.", avoidToday: "Nie działaj dziś tak szybko, że pominiesz ważny szczegół." },
  reversed: { message: "Dziś łatwiej o porywczość albo działanie bez pełnego namysłu. Jeden głęboki oddech przed reakcją może dziś wiele zmienić.", doToday: "Zrób dziś pauzę przed reakcją na coś, co Cię poruszyło.", avoidToday: "Nie podejmuj dziś ważnej decyzji w emocjach, na gorąco." } },

"Queen of Wands": { upright: { message: "Dziś masz w sobie naturalną pewność siebie i ciepło, którym możesz zarażać innych. To dobry dzień, by poprowadzić coś swoim przykładem.", doToday: "Zainspiruj dziś kogoś swoją energią lub pewnością siebie.", avoidToday: "Nie dostosowuj dziś siebie do oczekiwań innych kosztem autentyczności." },
  reversed: { message: "Dziś pewność siebie może być chwilowo niższa, może pojawić się porównywanie z innymi. Wróć dziś do tego, co zwykle daje Ci energię.", doToday: "Zrób dziś jedną rzecz, która zwykle dodaje Ci pewności siebie.", avoidToday: "Nie porównuj dziś swojej drogi z czyjąś, zupełnie inną." } },

"King of Wands": { upright: { message: "Dziś masz jasność wizji i odwagę, by poprowadzić siebie lub innych w ambitnym kierunku. To dobry dzień na decyzje przywódcze.", doToday: "Podziel się dziś swoją wizją z kimś, kogo może zainteresować.", avoidToday: "Nie forsuj dziś swojej wizji, nie zostawiając miejsca na głos innych." },
  reversed: { message: "Dziś może kusić nadmierna dominacja w działaniu albo, przeciwnie, unikanie wzięcia odpowiedzialności. Warto dziś znaleźć środek.", doToday: "Weź dziś odpowiedzialność za jedną konkretną decyzję.", avoidToday: "Nie narzucaj dziś swojego zdania bez wysłuchania innych." } },

"Ace of Cups": { upright: { message: "Dziś serce jest otwarte na nowe uczucia, bliskość i głębsze połączenie z innymi. Pozwól sobie dziś poczuć to, co się pojawia.", doToday: "Wyraź dziś komuś bliskiemu, co naprawdę czujesz.", avoidToday: "Nie tłum dziś emocji tylko dlatego, że są intensywne." },
  reversed: { message: "Dziś emocje mogą być trudniejsze do wyrażenia albo czujesz się trochę zablokowana/y uczuciowo. To w porządku — nie musisz dziś wszystkiego nazywać na głos.", doToday: "Znajdź dziś bezpieczny sposób, by poczuć to, co tłumisz.", avoidToday: "Nie zamykaj się dziś całkowicie na bliskość z innymi." } },

"Two of Cups": { upright: { message: "Dziś sprzyja wzajemnej, równej więzi z drugą osobą. To dobry dzień na szczerą rozmowę albo pogłębienie bliskiej relacji.", doToday: "Spędź dziś czas jeden na jeden z kimś ważnym dla Ciebie.", avoidToday: "Nie zaniedbuj dziś ważnej relacji na rzecz mniej istotnych spraw." },
  reversed: { message: "Dziś w jakiejś relacji może dać o sobie znać brak równowagi albo niedopasowanie oczekiwań. Warto dziś nazwać to wprost, zamiast przemilczeć.", doToday: "Porozmawiaj dziś szczerze o tym, czego oczekujesz od relacji.", avoidToday: "Nie udawaj dziś, że wszystko gra, jeśli tak nie jest." } },

"Three of Cups": { upright: { message: "Dziś dobrze zrobi Ci towarzystwo bliskich i wspólne świętowanie, nawet małych rzeczy. Nie musisz dziś radzić sobie w pojedynkę.", doToday: "Spotkaj się dziś z kimś, kto Cię dobrze zna i wspiera.", avoidToday: "Nie izoluj się dziś, jeśli masz ochotę na towarzystwo." },
  reversed: { message: "Dziś w gronie bliskich może pojawić się napięcie albo poczucie wykluczenia. Jeśli coś Cię zabolało, warto dziś to wyjaśnić, nie dusić w sobie.", doToday: "Wyjaśnij dziś nieporozumienie, zamiast je ignorować.", avoidToday: "Nie wdawaj się dziś w plotki czy dynamikę grupowego osądzania." } },

"Four of Cups": { upright: { message: "Dziś może pojawić się znudzenie albo wrażenie, że nic Cię dziś nie porusza. Coś dobrego może być bliżej, niż myślisz — spróbuj dziś spojrzeć inaczej.", doToday: "Spójrz dziś świeżym okiem na coś, co wcześniej odrzuciłaś/eś.", avoidToday: "Nie odrzucaj dziś propozycji tylko odruchowo, bez zastanowienia." },
  reversed: { message: "Dziś możesz poczuć powrót gotowości, by się zaangażować, po okresie wycofania. To dobry moment, by wykorzystać tę świeżą otwartość.", doToday: "Zrób dziś pierwszy krok w stronę czegoś, co wcześniej Cię nudziło.", avoidToday: "Nie wracaj dziś do dawnej apatii, jeśli czujesz choć trochę energii." } },

"Five of Cups": { upright: { message: "Dziś może dominować żal za czymś straconym, trudno dostrzec to, co wciąż jest. Pozwól sobie dziś poczuć smutek, ale nie zapomnij spojrzeć, co zostało.", doToday: "Zauważ dziś jedną rzecz, która mimo straty wciąż jest dobra.", avoidToday: "Nie skupiaj się dziś wyłącznie na tym, czego już nie ma." },
  reversed: { message: "Dziś może przyjść większa gotowość, by zaakceptować stratę i iść dalej. To dobry dzień na wybaczenie, sobie lub komuś innemu.", doToday: "Zrób dziś gest w stronę wybaczenia, choćby tylko w myślach.", avoidToday: "Nie wracaj dziś bez końca do tego, co już minęło." } },

"Six of Cups": { upright: { message: "Dziś może pojawić się miła nostalgia albo kontakt z kimś z przeszłości. Czerp dziś z dobrych wspomnień, ale żyj tym, co jest teraz.", doToday: "Doceń dziś coś dobrego z przeszłości, nie zapominając o teraźniejszości.", avoidToday: "Nie uciekaj dziś myślami wyłącznie w przeszłość, by uniknąć teraźniejszości." },
  reversed: { message: "Dziś łatwiej o nadmierne trzymanie się przeszłości, idealizowanie tego, co minęło. Warto dziś wrócić uwagą do tego, co dzieje się teraz.", doToday: "Zrób dziś coś, co mocno osadzi Cię w teraźniejszości.", avoidToday: "Nie porównuj dziś obecnej sytuacji do wyidealizowanej przeszłości." } },

"Seven of Cups": { upright: { message: "Dziś może być wiele opcji i pomysłów, ale nie wszystkie są równie realne. Warto dziś trzeźwo ocenić, co naprawdę warto realizować.", doToday: "Zweryfikuj dziś jedną opcję pod kątem tego, czy jest realna.", avoidToday: "Nie rozpraszaj się dziś na zbyt wiele możliwości naraz." },
  reversed: { message: "Dziś sprawy mogą się wyjaśnić — łatwiej dostrzec, co jest realne, a co było iluzją. Zaufaj dziś tej większej jasności.", doToday: "Wybierz dziś najbardziej realną z dostępnych opcji.", avoidToday: "Nie wracaj dziś do opcji, którą już uznałaś/eś za nierealną." } },

"Eight of Cups": { upright: { message: "Dziś może pojawić się potrzeba odejścia od czegoś, co przestało dawać spełnienie, nawet jeśli jest wygodne. To w porządku zacząć to dziś zauważać.", doToday: "Nazwij dziś, co przestało Ci służyć, nawet jeśli trudno to przyznać.", avoidToday: "Nie trzymaj się dziś czegoś tylko z przyzwyczajenia." },
  reversed: { message: "Dziś może kusić powrót do czegoś, co wcześniej świadomie zostawiłaś/eś za sobą. Warto dziś zapytać, czy to naprawdę dobry kierunek.", doToday: "Zapytaj dziś siebie szczerze, czy powrót do starego czemuś posłuży.", avoidToday: "Nie wracaj dziś do starej sytuacji tylko z lęku przed nieznanym." } },

"Nine of Cups": { upright: { message: "Dziś sprzyja poczuciu spełnienia — to, czego pragnęłaś/eś, może być bliżej niż myślisz. Pozwól sobie dziś cieszyć się tym w pełni.", doToday: "Pozwól sobie dziś w pełni cieszyć się czymś, co Ci się udało.", avoidToday: "Nie szukaj dziś dziury w całym tam, gdzie naprawdę jest dobrze." },
  reversed: { message: "Dziś mimo pozornego sukcesu może towarzyszyć poczucie niedosytu. Warto dziś zapytać, co naprawdę dałoby Ci trwałą satysfakcję.", doToday: "Zapytaj dziś siebie, co naprawdę przynosi Ci spełnienie.", avoidToday: "Nie szukaj dziś ukojenia w rzeczach, które dają tylko chwilową ulgę." } },

"Ten of Cups": { upright: { message: "Dziś sprzyja poczuciu harmonii w relacjach i w sobie samej/samym. Doceń dziś emocjonalną stabilność, którą masz.", doToday: "Spędź dziś czas z kimś, z kim czujesz prawdziwą bliskość.", avoidToday: "Nie szukaj dziś problemów tam, gdzie naprawdę panuje spokój." },
  reversed: { message: "Dziś może dać o sobie znać rozdźwięk między tym, jak wyobrażasz sobie harmonię, a rzeczywistością. Warto dziś porozmawiać o tym otwarcie.", doToday: "Powiedz dziś szczerze, czego brakuje Ci w ważnej relacji.", avoidToday: "Nie udawaj dziś harmonii, która istnieje tylko na pokaz." } },

"Page of Cups": { upright: { message: "Dziś może przyjść dobra, emocjonalna wiadomość albo powrót kontaktu z własną wrażliwością. Zaufaj dziś temu, co czujesz.", doToday: "Bądź dziś otwarta/y na nieoczekiwaną, miłą wiadomość.", avoidToday: "Nie oceniaj dziś swojej wrażliwości jako słabości." },
  reversed: { message: "Dziś łatwiej o nadmierną idealizację albo opieranie się wyłącznie na marzeniu, nie na faktach. Warto dziś sprawdzić, co jest realne.", doToday: "Zweryfikuj dziś jedno wyobrażenie z rzeczywistością.", avoidToday: "Nie podejmuj dziś decyzji wyłącznie pod wpływem emocjonalnego pragnienia." } },

"Knight of Cups": { upright: { message: "Dziś sprzyja podążaniu za sercem i romantycznym gestom. Pozwól sobie dziś działać z wrażliwością, nie tylko z kalkulacji.", doToday: "Zrób dziś gest wynikający z serca, nie z wyrachowania.", avoidToday: "Nie ignoruj dziś praktycznych aspektów sprawy sercowej czy twórczej." },
  reversed: { message: "Dziś może pojawić się rozczarowanie kimś, kto obiecywał więcej, niż dał. Oceniaj dziś ludzi po czynach, nie tylko po słowach.", doToday: "Sprawdź dziś, czy czyjeś działania pokrywają się z deklaracjami.", avoidToday: "Nie wierz dziś ślepo w obietnice bez pokrycia w działaniu." } },

"Queen of Cups": { upright: { message: "Dziś masz dostęp do głębokiej empatii, dla siebie i innych. Zaufaj dziś swojej intuicji w sprawach sercowych.", doToday: "Wysłuchaj dziś kogoś z pełną uwagą, bez oceniania.", avoidToday: "Nie zapominaj dziś o własnych granicach emocjonalnych, dbając o innych." },
  reversed: { message: "Dziś łatwo wchłonąć cudze emocje jak gąbka, kosztem własnej równowagi. Warto dziś postawić wyraźną granicę.", doToday: "Ustal dziś jedną wyraźną granicę emocjonalną.", avoidToday: "Nie bierz dziś na siebie cudzych problemów jako swoich." } },

"King of Cups": { upright: { message: "Dziś sprzyja spokojnemu zarządzaniu silnymi emocjami, swoimi i cudzymi. Możesz dziś być oparciem, nie tracąc przy tym siebie.", doToday: "Zachowaj dziś spokój w sytuacji, która normalnie by Cię poruszyła.", avoidToday: "Nie tłum dziś emocji pod maską pozornego spokoju." },
  reversed: { message: "Dziś może pojawić się pokusa ukrycia prawdziwych uczuć za fasadą opanowania. Szczerość, nawet trudna, posłuży dziś bardziej niż udawanie.", doToday: "Powiedz dziś szczerze, co naprawdę czujesz, zamiast to maskować.", avoidToday: "Nie oceniaj dziś innych za okazywanie emocji, które sam/sama tłumisz." } },

"Ace of Swords": { upright: { message: "Dziś sprzyja jasności myślenia i nazwaniu prawdy wprost. To dobry dzień na szczerą, bezpośrednią rozmowę.", doToday: "Powiedz dziś wprost coś, co długo owijałaś/eś w bawełnę.", avoidToday: "Nie unikaj dziś jasnej komunikacji z obawy przed reakcją." },
  reversed: { message: "Dziś myśli mogą być bardziej chaotyczne niż zwykle, trudniej dotrzeć do sedna sprawy. Warto dziś zwolnić, zanim wyciągniesz wnioski.", doToday: "Zapisz dziś swoje myśli, by je uporządkować.", avoidToday: "Nie podejmuj dziś ważnej decyzji przy niejasnym umyśle." } },

"Two of Swords": { upright: { message: "Dziś możesz czuć się zawieszona/y między dwiema opcjami, unikając wyboru. Czasem trzeba dziś po prostu zdjąć przepaskę z oczu.", doToday: "Spójrz dziś wprost na sytuację, której unikasz oceniać.", avoidToday: "Nie odkładaj dziś decyzji tylko po to, by uniknąć dyskomfortu." },
  reversed: { message: "Dziś impas może się w końcu przełamać, choć niekoniecznie w sposób, który sama/sam byś wybrała/wybrał. Zaufaj dziś temu, co już wiesz.", doToday: "Podejmij dziś decyzję na podstawie tego, co już wiesz, bez czekania na pewność.", avoidToday: "Nie przeciążaj się dziś kolejnymi sprzecznymi informacjami." } },

"Three of Swords": { upright: { message: "Dziś może boleć coś, co zostało powiedziane lub usłyszane. Pozwól sobie dziś ten ból poczuć, zamiast go tłumić.", doToday: "Porozmawiaj dziś z kimś o tym, co boli, zamiast nosić to w sobie.", avoidToday: "Nie udawaj dziś, że wszystko gra, jeśli naprawdę boli." },
  reversed: { message: "Dziś może przyjść ulga po trudnym doświadczeniu, początek uzdrawiania. Daj sobie dziś na to przestrzeń, bez przyspieszania procesu.", doToday: "Zrób dziś coś, co wspiera Twoje emocjonalne gojenie się.", avoidToday: "Nie zmuszaj się dziś do 'bycia już ponad tym', jeśli jeszcze nie jesteś." } },

"Four of Swords": { upright: { message: "Dziś Twoje ciało i umysł mogą prosić o odpoczynek. To dobry dzień, by dać sobie na to przyzwolenie, zamiast działać na siłę.", doToday: "Zaplanuj dziś realną przerwę na regenerację.", avoidToday: "Nie wypełniaj dziś każdej wolnej chwili kolejnym zadaniem." },
  reversed: { message: "Dziś możesz czuć presję, by wrócić do pełnej aktywności, zanim naprawdę odpoczęłaś/eś. Sprawdź dziś uczciwie, ile energii masz naprawdę.", doToday: "Oceń dziś szczerze, czy jesteś już gotowa/y wrócić do pełnego tempa.", avoidToday: "Nie ignoruj dziś sygnałów zmęczenia tylko po to, by zdążyć." } },

"Five of Swords": { upright: { message: "Dziś konflikt może kosztować więcej, niż przyniesie wygrana. Zastanów się dziś, czy warto walczyć o rację za wszelką cenę.", doToday: "Zapytaj dziś siebie, co jest ważniejsze: racja czy relacja.", avoidToday: "Nie wdawaj się dziś w spór, który nie ma realnego zwycięzcy." },
  reversed: { message: "Dziś może przyjść szansa na wygaszenie konfliktu i odpuszczenie poczucia krzywdy. To dobry dzień na pojednanie, jeśli jesteś na nie gotowa/y.", doToday: "Zrób dziś gest w stronę pojednania, jeśli to możliwe.", avoidToday: "Nie podsycaj dziś starego sporu dla samej satysfakcji." } },

"Six of Swords": { upright: { message: "Dziś sprzyja powolnemu, ale realnemu oddalaniu się od trudności w stronę spokojniejszych wód. Każdy krok w tę stronę się dziś liczy.", doToday: "Zrób dziś jeden krok w stronę spokojniejszej sytuacji.", avoidToday: "Nie oczekuj dziś, że przejście przez trudność będzie natychmiastowe." },
  reversed: { message: "Dziś możesz czuć się utknięta/y w sytuacji, z której czas już wyjść. Warto dziś zrobić pierwszy konkretny ruch, zamiast dalej czekać.", doToday: "Zrób dziś pierwszy konkretny krok w stronę zmiany sytuacji.", avoidToday: "Nie zostawaj dziś w sytuacji tylko dlatego, że jest znajoma." } },

"Seven of Swords": { upright: { message: "Dziś może kusić obejście problemu zamiast zmierzenia się z nim wprost. Sprawdź dziś, czy nie unikasz czegoś, co i tak trzeba będzie rozwiązać.", doToday: "Zmierz się dziś wprost z jedną sprawą, której unikałaś/eś.", avoidToday: "Nie szukaj dziś skrótów tam, gdzie potrzebna jest szczerość." },
  reversed: { message: "Dziś coś ukrywanego może wyjść na jaw, albo Ty sama/sam poczujesz potrzebę większej szczerości. To dobry dzień, by wybrać prawdę.", doToday: "Wybierz dziś szczerość, nawet jeśli oznacza przyznanie się do błędu.", avoidToday: "Nie próbuj dziś ukryć czegoś, co i tak wyjdzie na jaw." } },

"Eight of Swords": { upright: { message: "Dziś poczucie uwięzienia może być silniejsze niż realna sytuacja. Masz dziś więcej opcji, niż w tej chwili widzisz.", doToday: "Wypisz dziś trzy opcje, które wydają się niemożliwe, i sprawdź je na chłodno.", avoidToday: "Nie wierz dziś bezkrytycznie myśli 'nie mam wyjścia'." },
  reversed: { message: "Dziś możesz poczuć, że zaczynasz uwalniać się z ograniczającego przekonania. To dobry moment, by to potwierdzić konkretnym działaniem.", doToday: "Zrób dziś coś, co udowodni Ci, że masz więcej wyboru, niż sądziłaś/eś.", avoidToday: "Nie wracaj dziś myślami do przekonania, że nie masz żadnych opcji." } },

"Nine of Swords": { upright: { message: "Dziś lęk i zamartwianie się mogą być głośniejsze niż zwykle, zwłaszcza w nocy. Warto dziś sprawdzić, ile z tych obaw jest realnych.", doToday: "Porozmawiaj dziś o swoich obawach z kimś zaufanym.", avoidToday: "Nie zostawaj dziś sama/sam z katastroficznymi scenariuszami w głowie." },
  reversed: { message: "Dziś może przyjść ulga po okresie silnego niepokoju. To dobry dzień, by skonfrontować obawy z rzeczywistością.", doToday: "Sprawdź dziś jedną ze swoich obaw w realnym świecie.", avoidToday: "Nie pozwól dziś starym lękom dyktować Twoich decyzji." } },

"Ten of Swords": { upright: { message: "Dziś może czuć się jak dno — ale to też oznacza, że dalej jest już tylko lepiej. Pozwól dziś temu etapowi się zakończyć.", doToday: "Pozwól dziś sobie uznać, że coś się definitywnie skończyło.", avoidToday: "Nie próbuj dziś reanimować sytuacji, która wyraźnie dobiegła końca." },
  reversed: { message: "Dziś może przyjść powolne podnoszenie się po trudnym okresie. Nie musisz dziś od razu czuć się dobrze — wystarczy mały krok w stronę odbudowy.", doToday: "Zrób dziś jeden mały krok w stronę odbudowy po trudnym czasie.", avoidToday: "Nie oczekuj dziś od siebie, że będziesz już w pełni 'w formie'." } },

"Page of Swords": { upright: { message: "Dziś sprzyja ciekawości i zbieraniu informacji, zanim wyciągniesz wnioski. Obserwuj dziś uważnie, zanim zareagujesz.", doToday: "Zbierz dziś więcej informacji, zanim ocenisz sytuację.", avoidToday: "Nie wyciągaj dziś pochopnych wniosków na podstawie niepełnych danych." },
  reversed: { message: "Dziś łatwiej o plotki, pochopne osądy albo przeciążenie nadmiarem informacji. Warto dziś zweryfikować to, co słyszysz, u źródła.", doToday: "Zweryfikuj dziś informację u źródła, zanim ją powtórzysz.", avoidToday: "Nie wierz dziś bezkrytycznie w niepotwierdzone informacje." } },

"Knight of Swords": { upright: { message: "Dziś masz energię do zdecydowanego, bezpośredniego działania. Idź dziś prosto do celu, ale pamiętaj o uczuciach innych osób.", doToday: "Załatw dziś sprawę, która wymaga zdecydowania i bezpośredniości.", avoidToday: "Nie bądź dziś tak szybka/szybki w działaniu, że zranisz kogoś po drodze." },
  reversed: { message: "Dziś łatwiej o pochopne słowa wypowiedziane bez namysłu. Jeden oddech przed reakcją może dziś wiele zmienić.", doToday: "Policz dziś do trzech, zanim odpowiesz na coś, co Cię zirytowało.", avoidToday: "Nie wysyłaj dziś wiadomości napisanej w emocjach bez przeczytania na spokojnie." } },

"Queen of Swords": { upright: { message: "Dziś sprzyja jasnemu, niezależnemu myśleniu i mówieniu prawdy wprost, choć z życzliwością. Zaufaj dziś swojemu osądowi.", doToday: "Powiedz dziś prawdę, ale postaraj się zrobić to łagodnie.", avoidToday: "Nie oceniaj dziś innych surowiej, niż byś chciała/chciał być oceniana/y." },
  reversed: { message: "Dziś łatwiej o nadmierną surowość wobec siebie lub innych. Spróbuj dziś złagodzić ton, nie tracąc przy tym szczerości.", doToday: "Złagodź dziś jedną krytyczną myśl o sobie lub kimś innym.", avoidToday: "Nie bądź dziś surowsza/surowszy dla innych niż wymaga tego sytuacja." } },

"King of Swords": { upright: { message: "Dziś sprzyja logicznym, przemyślanym decyzjom opartym na faktach. Twój obiektywizm jest dziś atutem, nie przeszkodą.", doToday: "Podejmij dziś decyzję w oparciu o fakty, nie emocje chwili.", avoidToday: "Nie ignoruj dziś ludzkiego wymiaru sprawy w pogoni za logiką." },
  reversed: { message: "Dziś łatwiej o chłodne, wyrachowane podejście, które pomija czyjeś uczucia. Sprawdź dziś, czy Twoja decyzja jest nie tylko słuszna, ale i sprawiedliwa.", doToday: "Zapytaj dziś, czy Twoja logiczna decyzja uwzględnia też ludzi, których dotyczy.", avoidToday: "Nie używaj dziś logiki jako wymówki, by być nieczuła/czuły." } },
};
