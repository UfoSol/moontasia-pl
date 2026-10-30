// Moontasia — znak Księżyca, karta urodzenia, liczba drogi życia, zgodność znaków
// Korzysta z funkcji z matryca.js (julianDay, norm360, zodiacOf, sunLongitudeDeg, CITIES, tzOffsetHours, parseDate).
"use strict";

// ================= KSIĘŻYC (Meeus, rozdz. 47, główne wyrazy; dokładność ok. 0,02°) =================
const MOON_TERMS = [ // D, M, M', F, współczynnik (1e-6 °)
  [0,0,1,0,6288774],[2,0,-1,0,1274027],[2,0,0,0,658314],[0,0,2,0,213618],[0,1,0,0,-185116],
  [0,0,0,2,-114332],[2,0,-2,0,58793],[2,-1,-1,0,57066],[2,0,1,0,53322],[2,-1,0,0,45758],
  [0,1,-1,0,-40923],[1,0,0,0,-34720],[0,1,1,0,-30383],[2,0,0,-2,15327],[0,0,1,2,-12528],
  [0,0,1,-2,10980],[4,0,-1,0,10675],[0,0,3,0,10034],[4,0,-2,0,8548],[2,1,-1,0,-7888],
  [2,1,0,0,-6766],[1,0,-1,0,-5163],[1,1,0,0,4987],[2,-1,1,0,4036],[2,0,2,0,3994],
  [4,0,0,0,3861],[2,0,-3,0,3665],[0,1,-2,0,-2689]
];
function moonLongitudeDeg(jd){
  const T = (jd-2451545.0)/36525;
  const Lp = norm360(218.3164477 + 481267.88123421*T - 0.0015786*T*T);
  const D  = norm360(297.8501921 + 445267.1114034*T - 0.0018819*T*T);
  const M  = norm360(357.5291092 + 35999.0502909*T - 0.0001536*T*T);
  const Mp = norm360(134.9633964 + 477198.8675055*T + 0.0087414*T*T);
  const F  = norm360(93.2720950 + 483202.0175233*T - 0.0036539*T*T);
  const E  = 1 - 0.002516*T;
  const A1 = norm360(119.75 + 131.849*T), A2 = norm360(53.09 + 479264.290*T);
  let s = 0;
  for(const [d,m,mp,f,c] of MOON_TERMS){
    const arg = (d*D + m*M + mp*Mp + f*F)*D2R;
    s += c*Math.sin(arg)*(Math.abs(m)===1?E:Math.abs(m)===2?E*E:1);
  }
  s += 3958*Math.sin(A1*D2R) + 1962*Math.sin((Lp-F)*D2R) + 318*Math.sin(A2*D2R);
  return norm360(Lp + s/1e6);
}
function moonPhaseName(elong){
  const e = norm360(elong);
  if(e<12||e>=348) return ["🌑","nów"];
  if(e<80) return ["🌒","przybywający sierp"];
  if(e<100) return ["🌓","pierwsza kwadra"];
  if(e<168) return ["🌔","Księżyc garbaty przybywający"];
  if(e<192) return ["🌕","pełnia"];
  if(e<260) return ["🌖","Księżyc garbaty ubywający"];
  if(e<280) return ["🌗","ostatnia kwadra"];
  return ["🌘","ubywający sierp"];
}
// lokalny czas w mieście -> UTC (h) z historycznym czasem letnim
function utcOffsetFor(city, y, mo, d, hh, mm){
  const naive = Date.UTC(y,mo-1,d,hh,mm);
  let off = tzOffsetHours(city[3], naive);
  off = tzOffsetHours(city[3], naive - off*3600000);
  return off;
}

const IN_SIGN = {"Baran":"w Baranie","Byk":"w Byku","Bliźnięta":"w Bliźniętach","Rak":"w Raku","Lew":"w Lwie","Panna":"w Pannie","Waga":"w Wadze","Skorpion":"w Skorpionie","Strzelec":"w Strzelcu","Koziorożec":"w Koziorożcu","Wodnik":"w Wodniku","Ryby":"w Rybach"};
const MOON_DESC = {
 "Baran":{d:"Twoje emocje są szybkie, gorące i szczere. Złość wybucha i równie szybko mija. Czujesz się dobrze, gdy możesz działać, a bezczynność wywołuje w Tobie niepokój.",need:"niezależności, ruchu i poczucia, że możesz działać od razu",tip:"Zanim zareagujesz, policz do trzech. Twoje uczucia są ważne, ale nie zawsze muszą być wyrażone natychmiast."},
 "Byk":{d:"Potrzebujesz spokoju, stabilności i zmysłowych przyjemności. Emocje dojrzewają w Tobie powoli, za to są trwałe. Bezpieczeństwo daje Ci dom, dobre jedzenie, natura i bliskość.",need:"przewidywalności, czułości i komfortu",tip:"Zmiany nie muszą odbierać Ci bezpieczeństwa. Szukaj go w sobie, nie tylko w rzeczach i rutynie."},
 "Bliźnięta":{d:"Uczucia przepracowujesz, rozmawiając o nich. Potrzebujesz bodźców, nowości i wymiany myśli. Gdy coś Cię gryzie, analizujesz to w głowie albo w długich rozmowach.",need:"rozmowy, ciekawości i swobody",tip:"Nie każdą emocję trzeba zrozumieć. Czasem wystarczy ją po prostu poczuć."},
 "Rak":{d:"Księżyc jest tu u siebie: masz głęboką wrażliwość, intuicję i silną potrzebę bliskości. Rodzina i dom są dla Ciebie emocjonalną bazą. Łatwo wyczuwasz nastroje innych.",need:"przynależności, opieki i bezpiecznego gniazda",tip:"Troszcz się o siebie tak samo, jak o innych. Mów wprost, czego potrzebujesz."},
 "Lew":{d:"Twoje serce jest hojne, ciepłe i dumne. Potrzebujesz być zauważanym(ą) i docenianym(ą). Emocje wyrażasz z rozmachem, a radość dawania jest dla Ciebie naturalna.",need:"uznania, zabawy i możliwości tworzenia",tip:"Twoja wartość nie zależy od braw. Doceniaj się także w ciche dni."},
 "Panna":{d:"Uczucia porządkujesz rozumem i działaniem. Pomagając innym, okazujesz miłość. Bywasz krytyczny(a) wobec siebie, a stres odbija się na Twoim ciele.",need:"porządku, sensu i poczucia, że jesteś przydatny(a)",tip:"Nie musisz zasłużyć na odpoczynek. Bądź dla siebie łagodniejszy(a)."},
 "Waga":{d:"Potrzebujesz harmonii, piękna i partnerstwa. Konflikty Cię wyczerpują, dlatego często łagodzisz napięcia. Emocjonalnie rozkwitasz w relacjach opartych na równowadze.",need:"harmonii, bliskości i sprawiedliwości",tip:"Zgoda za wszelką cenę bywa za droga. Twoje zdanie też się liczy."},
 "Skorpion":{d:"Twoje emocje są intensywne i głębokie, choć rzadko pokazujesz je na zewnątrz. Kochasz całym sobą i trudno Ci zapomnieć zranienie. Masz wielką siłę odradzania się.",need:"zaufania, głębi i prawdy",tip:"Kontrola nie zawsze chroni. Pozwól sobie czasem odpuścić i zaufać."},
 "Strzelec":{d:"Emocjonalnie potrzebujesz wolności, przygody i sensu. Optymizm pomaga Ci przetrwać trudne chwile. Dusisz się w rutynie i ciasnych ramach.",need:"przestrzeni, podróży i nadziei",tip:"Nie uciekaj od trudnych uczuć w kolejne plany. Czasem trzeba w nich chwilę pobyć."},
 "Koziorożec":{d:"Uczucia trzymasz pod kontrolą i okazujesz je raczej czynami niż słowami. Poczucie bezpieczeństwa daje Ci odpowiedzialność, plan i osiągnięcia.",need:"stabilności, szacunku i jasnej struktury",tip:"Okazywanie słabości to nie porażka. Bliscy chcą znać też Twoje miękkie strony."},
 "Wodnik":{d:"Do emocji podchodzisz z dystansem i potrzebujesz przestrzeni. Cenisz przyjaźń, wolność i niezależność. Czujesz się dobrze wśród ludzi, którzy akceptują Twoją oryginalność.",need:"wolności, przyjaźni i akceptacji",tip:"Analizowanie uczuć to nie to samo, co ich przeżywanie. Pozwól sobie na bliskość."},
 "Ryby":{d:"Masz ogromną empatię i wrażliwość. Chłoniesz emocje otoczenia jak gąbka. Potrzebujesz ciszy, sztuki, muzyki i czasu na marzenia, żeby się zregenerować.",need:"spokoju, duchowości i współodczuwania",tip:"Stawiaj granice. Nie wszystkie emocje, które czujesz, są Twoje."}
};

(function initMoonForm(){
  const sel = document.getElementById("m-city");
  if(!sel) return;
  sel.innerHTML = CITIES.map((c,i)=>`<option value="${i}"${c[0]==="Warszawa"?" selected":""}>${c[0]}</option>`).join("");
  document.getElementById("m-date").value = new Date().toISOString().slice(0,10);
})();
document.getElementById("m-go")?.addEventListener("click",()=>{
  const err=document.getElementById("m-err"); err.textContent="";
  const dt=parseDate("m-date");
  if(!dt){ err.textContent="Podaj datę urodzenia."; return; }
  const tv=document.getElementById("m-time").value;
  const city=CITIES[+document.getElementById("m-city").value];
  const at=(hh,mm)=>{
    const jd=julianDay(dt.y,dt.m,dt.d,hh+mm/60-utcOffsetFor(city,dt.y,dt.m,dt.d,hh,mm));
    return {moon:moonLongitudeDeg(jd), sun:sunLongitudeDeg(jd)};
  };
  let main, note="";
  if(tv){
    const [hh,mm]=tv.split(":").map(Number);
    main=at(hh,mm);
  }else{
    const a=at(0,0), b=at(23,59);
    main=at(12,0);
    const za=zodiacOf(a.moon), zb=zodiacOf(b.moon);
    note = za.name===zb.name
      ? `<div class="note-ok">Księżyc przez cały ten dzień był <b>${IN_SIGN[za.name]}</b>, więc godzina urodzenia nie jest potrzebna.</div>`
      : `<div class="warn">Tego dnia Księżyc zmienił znak: z <b>${za.name}</b> na <b>${zb.name}</b>. Bez godziny urodzenia nie da się rozstrzygnąć, który jest Twój. Wpisz godzinę albo przeczytaj oba opisy.</div>`;
  }
  const zM=zodiacOf(main.moon), zS=zodiacOf(main.sun), D=MOON_DESC[zM.name];
  const [phIcon,phName]=moonPhaseName(main.moon-main.sun);
  const degTxt=z=>`${Math.floor(z.deg)}°`;
  document.getElementById("m-cards").innerHTML =
    `<div class="infocard sun-card"><span class="sun-badge">Twój Księżyc</span><h3>☽ Księżyc</h3>
      <div class="zodiac-big">${zM.sym}</div><div class="big">${zM.name}</div>
      <p class="kw">${tv?degTxt(zM)+" · ":""}${ASC_DESC[zM.name].el}</p>
      <p class="meaning">Twoje emocje, intuicja i potrzeby.</p></div>
     <div class="infocard"><h3>☉ Słońce</h3>
      <div class="zodiac-big">${zS.sym}</div><div class="big">${zS.name}</div>
      <p class="kw">znak zodiaku</p>
      <p class="meaning">Twoja tożsamość i to, co daje Ci energię.</p></div>
     <div class="infocard"><h3>Faza Księżyca w dniu urodzenia</h3>
      <div class="zodiac-big">${phIcon}</div><div class="big" style="font-size:1.2rem">${phName}</div>
      <p class="meaning">${PHASE_TXT[phName]}</p></div>`;
  document.getElementById("m-desc").innerHTML =
    `<h2 class="sec" style="margin-top:0">Księżyc ${IN_SIGN[zM.name]}</h2>
     ${note}
     <p>${D.d}</p>
     <div class="asc-sections">
       <div><h4>Czego potrzebujesz emocjonalnie</h4><p>Potrzebujesz ${D.need}.</p></div>
       <div><h4>Wskazówka</h4><p>${D.tip}</p></div>
     </div>
     <h2 class="sec">Słońce ${IN_SIGN[zS.name]}, Księżyc ${IN_SIGN[zM.name]}</h2>
     <p>${zS.name===zM.name
       ? `Słońce i Księżyc w tym samym znaku: to, czego chcesz, i to, czego potrzebujesz emocjonalnie, mówi jednym głosem. Cechy znaku ${zS.name} są u Ciebie bardzo wyraźne.`
       : `Słońce mówi, kim chcesz być: <b>${SUN_DESC[zS.name].core}</b>. Księżyc pokazuje, czego potrzebujesz, żeby czuć się dobrze: <b>${D.need}</b>. Gdy dbasz o obie te strony, czujesz się spójnie.`}</p>
     <p>Dodaj do tego <a href="/ascendent/">ascendent</a>, a poznasz swoją „wielką trójkę”: Słońce, Księżyc i znak wschodzący.</p>`;
  document.getElementById("m-result").style.display="block";
  document.getElementById("m-result").scrollIntoView({behavior:"smooth"});
});
const PHASE_TXT = {
  "nów":"Urodzeni w nowiu zaczynają wszystko od nowa, kierują się instynktem i mają w sobie energię początków.",
  "przybywający sierp":"Energia wzrostu: odwaga, by iść naprzód mimo wątpliwości i przeszłości, która ciągnie wstecz.",
  "pierwsza kwadra":"Energia działania i decyzji. Lubisz wyzwania i budujesz coś z niczego.",
  "Księżyc garbaty przybywający":"Energia doskonalenia. Szukasz sensu, analizujesz i ulepszasz.",
  "pełnia":"Energia spełnienia i relacji. Widzisz obie strony sprawy, a ludzie są dla Ciebie lustrem.",
  "Księżyc garbaty ubywający":"Energia dzielenia się. Masz potrzebę przekazywania wiedzy i doświadczeń.",
  "ostatnia kwadra":"Energia przemiany. Potrafisz zamykać to, co się skończyło, i zmieniać przekonania.",
  "ubywający sierp":"Energia domykania i duchowości. Masz w sobie mądrość, intuicję i wyczucie tego, co się kończy."
};

// ================= KARTA URODZENIA I KARTA ROKU (metoda M. K. Greer) =================
function birthCardChain(n){
  while(n>21) n = digitSum(n);
  const chain=[n];
  while(n>9){ n=digitSum(n); chain.push(n); }
  return chain;
}
const BIRTH_DESC = {
 1:"Mag: twórca i inicjator. Masz dar przekuwania pomysłów w czyn, słowo i wolę. Uczysz się używać swojej mocy uczciwie.",
 2:"Kapłanka: intuicja i wewnętrzna mądrość. Wiesz więcej, niż mówisz, i potrzebujesz ciszy, by usłyszeć siebie.",
 3:"Cesarzowa: twórczość, zmysłowość i troska. Wszystko, czego dotykasz, rozkwita, jeśli dbasz także o siebie.",
 4:"Cesarz: struktura, odpowiedzialność i przywództwo. Budujesz trwałe rzeczy i dajesz innym poczucie bezpieczeństwa.",
 5:"Hierofant: nauczyciel i strażnik wartości. Szukasz sensu i przekazujesz wiedzę, ucząc się też własnej drogi poza tradycją.",
 6:"Kochankowie: relacje i wybory serca. Twoją lekcją jest wybierać w zgodzie ze sobą i kochać bez zatracania się.",
 7:"Rydwan: wola, ruch i zwycięstwo. Potrzebujesz celu i kierunku, a życie nagradza Cię, gdy przejmujesz stery.",
 8:"Siła: odwaga łagodności. Twoją mocą jest cierpliwość, serce i panowanie nad emocjami bez tłumienia ich.",
 9:"Pustelnik: poszukiwacz prawdy. Potrzebujesz samotności i refleksji, a z czasem stajesz się przewodnikiem dla innych.",
 10:"Koło Fortuny: cykle i zmiany. Uczysz się płynąć z życiem i rozpoznawać momenty, w których los daje szansę.",
 11:"Sprawiedliwość: prawda i równowaga. Masz silne poczucie uczciwości i uczysz się brać odpowiedzialność za swoje wybory.",
 12:"Wisielec: inna perspektywa. Widzisz to, czego nie widzą inni, a Twoją lekcją jest odpuszczanie i zaufanie.",
 13:"Śmierć: przemiana. Twoje życie to kolejne etapy i nowe początki, a Ty masz dar odradzania się.",
 14:"Umiarkowanie: równowaga i uzdrawianie. Łączysz przeciwieństwa i potrafisz godzić ludzi oraz światy.",
 15:"Diabeł: siła, magnetyzm i namiętność. Twoją lekcją jest uwolnienie się od tego, co Cię zniewala, i świadome używanie swojej mocy.",
 16:"Wieża: przełom i wyzwolenie. Burzysz to, co fałszywe, a z gruzów budujesz coś prawdziwego.",
 17:"Gwiazda: nadzieja i inspiracja. Masz w sobie światło, które dodaje innym otuchy, i talent do marzeń, które się spełniają.",
 18:"Księżyc: wyobraźnia i intuicja. Czujesz głębiej niż inni, a Twoją lekcją jest odróżniać prawdę od lęków.",
 19:"Słońce: radość, ciepło i sukces. Masz w sobie dziecięcą energię i dar rozświetlania życia innych.",
 20:"Sąd Ostateczny: przebudzenie i powołanie. Słyszysz głos, który wzywa Cię do czegoś większego, i umiesz zaczynać od nowa.",
 21:"Świat: spełnienie i całość. Dążysz do pełni i masz dar domykania spraw oraz łączenia ludzi z różnych światów."
};
const YEAR_DESC = {
 1:"Rok nowych początków, inicjatywy i działania. Dobry czas na start projektu i podejmowanie decyzji.",
 2:"Rok intuicji, cierpliwości i wewnętrznej pracy. Sprawy dojrzewają po cichu, warto słuchać przeczuć.",
 3:"Rok wzrostu, twórczości i obfitości. Sprzyja miłości, rodzinie, kreatywnym projektom i dbaniu o ciało.",
 4:"Rok porządku i budowania fundamentów. Czas na plan, dyscyplinę i stabilizację: dom, finanse, kariera.",
 5:"Rok nauki i wartości. Sprzyja kursom, mentorom, formalnościom i odnajdywaniu sensu.",
 6:"Rok relacji i ważnych wyborów. Sprawy serca i partnerstwa wychodzą na pierwszy plan.",
 7:"Rok ruchu i zwycięstw. Wyraźny cel i determinacja przynoszą sukces, możliwe podróże i przeprowadzki.",
 8:"Rok wewnętrznej siły. Cierpliwość i łagodność dadzą więcej niż walka.",
 9:"Rok refleksji i domykania. Dobry czas na podsumowania, samotność z wyboru i szukanie własnej drogi.",
 10:"Rok zmian i zwrotów akcji. Los przyspiesza: bądź gotowa/y na nowe szanse.",
 11:"Rok równowagi i konsekwencji. Sprawy prawne, umowy i uczciwe rozliczenia; zbierasz to, co posiane.",
 12:"Rok pauzy i nowej perspektywy. Coś się zatrzymuje, żebyś mogła/mógł spojrzeć inaczej.",
 13:"Rok przemiany. Jeden etap się kończy, robiąc miejsce na nowy.",
 14:"Rok równowagi i uzdrowienia. Umiar, cierpliwość i łączenie różnych obszarów życia.",
 15:"Rok pokus i mocy. Dobry czas, by przyjrzeć się nawykom i zależnościom oraz odzyskać wolność.",
 16:"Rok przełomu. Rzeczy zbudowane na słabych fundamentach mogą się rozpaść, by zrobić miejsce na prawdziwe.",
 17:"Rok nadziei i inspiracji. Marzenia nabierają realnych kształtów, a Ty odzyskujesz wiarę.",
 18:"Rok intuicji i snów. Nie wszystko będzie jasne od razu, ufaj przeczuciom i nie działaj z lęku.",
 19:"Rok radości i sukcesu. Jeden z najjaśniejszych lat: energia, widoczność i szczęście.",
 20:"Rok przebudzenia. Ważne decyzje, powołanie i drugie szanse.",
 21:"Rok spełnienia. Domykasz duży cykl i zbierasz owoce, a przed Tobą otwiera się nowy rozdział."
};
const cap1 = t => t.charAt(0).toUpperCase() + t.slice(1);
const majorCard = n => (window.MAJOR || [])[n] || {pl:"", url:"#", img:""};
function cardTile(n, label){
  const c=majorCard(n);
  return `<a class="bc-card" href="${c.url}"><img src="${c.img}" alt="Karta tarota ${c.pl}" width="120" height="210" loading="lazy"><span class="bc-num">${n}</span><b>${c.pl}</b>${label?`<small>${label}</small>`:""}</a>`;
}
(function initBirthForm(){
  const y=document.getElementById("b-year");
  if(y) y.value = new Date().getFullYear();
})();
document.getElementById("b-go")?.addEventListener("click",()=>{
  const err=document.getElementById("b-err"); err.textContent="";
  const dt=parseDate("b-date");
  if(!dt){ err.textContent="Podaj datę urodzenia."; return; }
  const year=+document.getElementById("b-year").value || new Date().getFullYear();
  const sum=dt.d+dt.m+dt.y, bc=birthCardChain(sum);
  const ysum=dt.d+dt.m+year, yc=birthCardChain(ysum)[0];
  const names=bc.map(n=>majorCard(n).pl);
  document.getElementById("b-cards").innerHTML = bc.map((n,i)=>cardTile(n, bc.length===1?"osobowość i dusza":i===0?"karta osobowości":(i===bc.length-1?"karta duszy":"karta pośrednia"))).join("");
  document.getElementById("b-desc").innerHTML =
    `<p class="calc-line">${dt.d} + ${dt.m} + ${dt.y} = ${sum} → ${bc.join(" → ")}</p>
     ${bc.length===1
       ? `<p>Twoja karta urodzenia to <b>${names[0]}</b>. Jest jednocześnie kartą osobowości i duszy, więc jej energia działa u Ciebie bardzo wyraźnie.</p>`
       : `<p>Twoje karty urodzenia to <b>${names.join(", ")}</b>. Pierwsza opisuje osobowość, czyli to, jak działasz w świecie. Ostatnia to karta duszy: głębsze zadanie, do którego wracasz przez całe życie.</p>`}
     ${bc.map(n=>`<div class="infocard bc-info"><h3>${n} · ${majorCard(n).pl}</h3><p>${cap1(BIRTH_DESC[n].replace(/^[^:]+: /,""))}</p><p><a href="${majorCard(n).url}">Pełne znaczenie karty ${majorCard(n).pl} →</a></p></div>`).join("")}
     <h2 class="sec">Twoja karta roku ${year}</h2>
     <div class="bc-row">${cardTile(yc,"karta roku "+year)}
       <div class="infocard bc-info"><p class="calc-line">${dt.d} + ${dt.m} + ${year} = ${ysum} → ${yc}</p><p><b>${majorCard(yc).pl}</b>: ${YEAR_DESC[yc]}</p>
       <p style="color:var(--text-dim);font-size:.9rem">Karta roku obowiązuje od Twoich urodzin w ${year} r. do kolejnych urodzin.</p></div></div>`;
  document.getElementById("b-result").style.display="block";
  document.getElementById("b-result").scrollIntoView({behavior:"smooth"});
});

// ================= LICZBA DROGI ŻYCIA I ROK OSOBISTY =================
function reduceMaster(n){
  while(n>9 && n!==11 && n!==22 && n!==33) n=digitSum(n);
  return n;
}
function reduce9(n){ while(n>9) n=digitSum(n); return n; }
const LP_DESC = {
 1:{t:"Lider i pionier",d:"Jesteś tu, żeby zaczynać, prowadzić i iść własną drogą. Masz silną wolę, odwagę i potrzebę niezależności.",plus:"inicjatywa, determinacja, oryginalność",minus:"upór, niecierpliwość, trudność w proszeniu o pomoc",love:"Potrzebujesz partnera, który szanuje Twoją niezależność i nie próbuje Cię kontrolować.",work:"Własna firma, zarządzanie, praca, w której sama/sam decydujesz."},
 2:{t:"Dyplomata i partner",d:"Twoją siłą jest współpraca, wrażliwość i umiejętność łączenia ludzi. Wyczuwasz nastroje i potrzeby innych.",plus:"empatia, cierpliwość, takt",minus:"nadwrażliwość, uległość, unikanie konfliktów",love:"Związek jest dla Ciebie bardzo ważny; potrzebujesz bliskości i harmonii.",work:"Mediacje, terapia, HR, praca w zespole, doradztwo."},
 3:{t:"Twórca i komunikator",d:"Masz dar słowa, wyobraźni i radości życia. Inspirujesz innych i potrzebujesz wyrażać siebie.",plus:"kreatywność, optymizm, urok",minus:"rozproszenie, powierzchowność, wahania nastroju",love:"Szukasz lekkości, zabawy i partnera, z którym można się śmiać.",work:"Sztuka, media, marketing, pisanie, scena."},
 4:{t:"Budowniczy",d:"Jesteś tu, by tworzyć trwałe fundamenty. Cenisz porządek, rzetelność i ciężką pracę, która daje efekty.",plus:"solidność, lojalność, wytrwałość",minus:"sztywność, pracoholizm, opór przed zmianą",love:"Kochasz stabilnie i wiernie; potrzebujesz przewidywalności.",work:"Inżynieria, finanse, administracja, rzemiosło, nieruchomości."},
 5:{t:"Poszukiwacz wolności",d:"Kochasz zmianę, przygodę i nowe doświadczenia. Uczysz się przez przeżywanie i szybko się adaptujesz.",plus:"elastyczność, ciekawość, odwaga",minus:"niecierpliwość, nadmiar, trudność z zobowiązaniami",love:"Potrzebujesz partnera, który daje przestrzeń i nie zamyka Cię w rutynie.",work:"Podróże, sprzedaż, media, praca projektowa, przedsiębiorczość."},
 6:{t:"Opiekun",d:"Twoją drogą jest miłość, odpowiedzialność i troska. Tworzysz dom, wspólnotę i piękno wokół siebie.",plus:"opiekuńczość, lojalność, poczucie estetyki",minus:"perfekcjonizm, poświęcanie się, kontrola z troski",love:"Rodzina i związek są w centrum Twojego życia.",work:"Medycyna, edukacja, design, praca z ludźmi, gastronomia."},
 7:{t:"Mędrzec i poszukiwacz prawdy",d:"Potrzebujesz rozumieć świat do głębi. Masz analityczny umysł, intuicję i ciągnie Cię do wiedzy, także duchowej.",plus:"mądrość, intuicja, dociekliwość",minus:"zamknięcie się w sobie, nieufność, krytycyzm",love:"Potrzebujesz głębokiej więzi i przestrzeni na samotność.",work:"Nauka, badania, analiza, psychologia, ezoteryka."},
 8:{t:"Strateg i zdobywca",d:"Twoja droga prowadzi przez sukces materialny, władzę i odpowiedzialność. Uczysz się mądrze używać swojej siły.",plus:"ambicja, organizacja, przedsiębiorczość",minus:"materializm, kontrola, pracoholizm",love:"Szukasz partnera, który jest równie silny i ambitny.",work:"Biznes, finanse, zarządzanie, prawo."},
 9:{t:"Humanista",d:"Jesteś tu, by służyć czemuś większemu. Masz szerokie serce, idealizm i dar rozumienia ludzi.",plus:"współczucie, mądrość, hojność",minus:"poświęcanie się, trudność z puszczaniem przeszłości",love:"Kochasz bezwarunkowo, ale uczysz się też przyjmować.",work:"Działalność społeczna, sztuka, medycyna, nauczanie, wolontariat."},
 11:{t:"Liczba mistrzowska: inspirator",d:"11 to wzmocniona 2: wielka intuicja, wrażliwość i potencjał duchowego przewodnictwa. Inspirujesz innych samą obecnością.",plus:"intuicja, wizja, charyzma",minus:"napięcie nerwowe, lęki, wysokie oczekiwania wobec siebie",love:"Potrzebujesz głębokiej, duchowej więzi.",work:"Terapia, sztuka, duchowość, nauczanie, praca, która inspiruje."},
 22:{t:"Liczba mistrzowska: mistrz budowniczy",d:"22 to wzmocniona 4: potrafisz zamieniać wielkie wizje w rzeczywistość, która służy wielu ludziom.",plus:"wizja i praktyczność naraz, organizacja, wytrwałość",minus:"presja, przeciążenie, lęk przed porażką",love:"Szukasz partnera, który wspiera Twoje duże plany.",work:"Duże projekty, architektura, zarządzanie, organizacje."},
 33:{t:"Liczba mistrzowska: mistrz nauczyciel",d:"33 to wzmocniona 6: bezwarunkowa miłość, uzdrawianie i służba innym.",plus:"współczucie, mądrość, siła uzdrawiania",minus:"poświęcanie się ponad siły, brak granic",love:"Kochasz głęboko i opiekuńczo; ważne są dla Ciebie granice.",work:"Uzdrawianie, edukacja, opieka, sztuka, praca z sercem."}
};
const PY_DESC = {
 1:"Rok osobisty 1: nowy, dziewięcioletni cykl się zaczyna. Czas siać: nowe projekty, decyzje i odwaga.",
 2:"Rok osobisty 2: cierpliwość, współpraca i relacje. Sprawy rosną powoli, nie przyspieszaj ich na siłę.",
 3:"Rok osobisty 3: radość, twórczość i kontakty z ludźmi. Wyrażaj siebie i korzystaj z życia.",
 4:"Rok osobisty 4: praca, porządek i fundamenty. Mniej fajerwerków, więcej konkretów.",
 5:"Rok osobisty 5: zmiany, wolność i niespodzianki. Dobry czas na podróże i nowe doświadczenia.",
 6:"Rok osobisty 6: dom, rodzina, miłość i odpowiedzialność. Relacje wychodzą na pierwszy plan.",
 7:"Rok osobisty 7: refleksja, nauka i rozwój duchowy. Zwolnij i posłuchaj siebie.",
 8:"Rok osobisty 8: sukces, pieniądze i kariera. Zbierasz owoce wcześniejszej pracy.",
 9:"Rok osobisty 9: domykanie cyklu. Czas pożegnać to, co się skończyło, i zrobić miejsce na nowe."
};
(function initLifeForm(){
  const y=document.getElementById("l-year");
  if(y) y.value=new Date().getFullYear();
})();
document.getElementById("l-go")?.addEventListener("click",()=>{
  const err=document.getElementById("l-err"); err.textContent="";
  const dt=parseDate("l-date");
  if(!dt){ err.textContent="Podaj datę urodzenia."; return; }
  const year=+document.getElementById("l-year").value || new Date().getFullYear();
  const rd=reduceMaster(dt.d), rm=reduceMaster(dt.m), ry=reduceMaster(digitSum(dt.y));
  const lp=reduceMaster(rd+rm+ry);
  const py=reduce9(reduce9(dt.d)+reduce9(dt.m)+reduce9(digitSum(year)));
  const L=LP_DESC[lp];
  document.getElementById("l-cards").innerHTML =
    `<div class="infocard sun-card"><span class="sun-badge">Liczba drogi życia</span><div class="lp-num">${lp}</div><div class="big">${L.t}</div></div>
     <div class="infocard"><h3>Rok osobisty ${year}</h3><div class="lp-num" style="font-size:3rem">${py}</div><p class="meaning">${cap1(PY_DESC[py].replace(/^Rok osobisty \d: /,""))}</p></div>`;
  document.getElementById("l-desc").innerHTML =
    `<p class="calc-line">Dzień ${dt.d} → ${rd} · miesiąc ${dt.m} → ${rm} · rok ${dt.y} → ${ry} · ${rd} + ${rm} + ${ry} → <b>${lp}</b></p>
     <h2 class="sec" style="margin-top:8px">Liczba drogi życia ${lp}: ${L.t}</h2>
     <p>${L.d}</p>
     <div class="asc-sections">
       <div><h4>Mocne strony</h4><p>${L.plus}</p></div>
       <div><h4>Wyzwania</h4><p>${L.minus}</p></div>
       <div><h4>Miłość</h4><p>${L.love}</p></div>
       <div><h4>Praca i powołanie</h4><p>${L.work}</p></div>
     </div>
     <h2 class="sec">Twój rok osobisty ${year}</h2>
     <p>${PY_DESC[py]}</p>
     <p>Chcesz zobaczyć więcej energii ze swojej daty urodzenia? Oblicz <a href="/matryca/">matrycę przeznaczenia</a> albo sprawdź swoją <a href="/karta-urodzenia/">kartę urodzenia w tarocie</a>.</p>`;
  document.getElementById("l-result").style.display="block";
  document.getElementById("l-result").scrollIntoView({behavior:"smooth"});
});

// ================= ZGODNOŚĆ ZNAKÓW ZODIAKU =================
const SIGN_LOVE = {
 "Baran":"wnosi do związku zapał, spontaniczność i odwagę, ale potrzebuje wolności i szybko się nudzi",
 "Byk":"daje stabilność, czułość i lojalność, ale bywa uparty i zazdrosny",
 "Bliźnięta":"wnosi lekkość, humor i rozmowy do rana, ale potrzebuje różnorodności",
 "Rak":"kocha opiekuńczo i głęboko, ale potrzebuje poczucia bezpieczeństwa",
 "Lew":"jest hojny, romantyczny i ciepły, ale potrzebuje podziwu",
 "Panna":"okazuje miłość troską i konkretem, ale bywa krytyczna",
 "Waga":"wnosi romantyzm, harmonię i partnerstwo, ale unika konfliktów",
 "Skorpion":"kocha intensywnie i namiętnie, ale potrzebuje pełnego zaufania",
 "Strzelec":"wnosi przygodę, optymizm i szczerość, ale ceni wolność ponad wszystko",
 "Koziorożec":"buduje związek na lata, odpowiedzialnie, choć emocje okazuje powściągliwie",
 "Wodnik":"jest przyjacielem i partnerem, oryginalnym i niezależnym, ale potrzebuje przestrzeni",
 "Ryby":"kocha marzycielsko, czule i z ogromną empatią, ale łatwo go zranić"
};
const ASPECTS = [
 {n:"ten sam znak",s:78,d:"Rozumiecie się bez słów, bo macie podobny temperament i potrzeby. Uważajcie tylko, by nie wzmacniać nawzajem swoich słabości."},
 {n:"znaki sąsiednie",s:58,d:"Różnicie się bardziej, niż się wydaje: każde z Was ma inny żywioł i inny rytm. To związek, który uczy, ale wymaga cierpliwości i ciekawości siebie nawzajem."},
 {n:"sekstyl (żywioły się wspierają)",s:84,d:"Naturalna przyjaźń i łatwość współpracy. Wasze żywioły się wspierają, dlatego razem łatwo planować, rozmawiać i działać."},
 {n:"kwadratura (napięcie)",s:52,d:"Silne przyciąganie i silne tarcia. Macie inne priorytety i sposób działania, co może iskrzyć w dobrym i złym sensie. Taki związek uczy kompromisu i rozwija oboje."},
 {n:"trygon (ten sam żywioł)",s:93,d:"Jedna z najharmonijniejszych kombinacji. Macie ten sam żywioł, więc podobnie czujecie, myślicie i reagujecie. Łatwo Wam się porozumieć i razem odpocząć."},
 {n:"kwinkunks (wymaga dopasowania)",s:48,d:"Nadajecie na innych falach i często się nie rozumiecie, choć coś Was do siebie ciągnie. Ten związek wymaga świadomego dopasowania i dużo rozmów."},
 {n:"opozycja (przyciąganie przeciwieństw)",s:74,d:"Przeciwieństwa się przyciągają: każde z Was ma to, czego brakuje drugiemu. Gdy znajdziecie równowagę, uzupełniacie się idealnie."}
];
(function initCompat(){
  const a=document.getElementById("z-a"), b=document.getElementById("z-b");
  if(!a) return;
  const opts=ZODIAC.map((z,i)=>`<option value="${i}">${ZODIAC_SYM[i]}︎ ${z}</option>`).join("");
  a.innerHTML=opts; b.innerHTML=opts; b.value="4";
})();
document.getElementById("z-go")?.addEventListener("click",()=>{
  const i=+document.getElementById("z-a").value, j=+document.getElementById("z-b").value;
  let k=Math.abs(i-j); if(k>6) k=12-k;
  const A=ASPECTS[k], za=ZODIAC[i], zb=ZODIAC[j];
  const ea=ASC_DESC[za].el, eb=ASC_DESC[zb].el;
  document.getElementById("z-res").innerHTML =
    `<div class="compat-top"><div class="compat-sign"><span>${ZODIAC_SYM[i]}︎</span>${za}<small>${ea}</small></div>
      <div class="compat-score" style="--p:${A.s}"><b>${A.s}%</b><small>zgodności</small></div>
      <div class="compat-sign"><span>${ZODIAC_SYM[j]}︎</span>${zb}<small>${eb}</small></div></div>
     <h2 class="sec">${za} i ${zb}: ${A.n}</h2>
     <p>${A.d}</p>
     <div class="asc-sections">
       <div><h4>${za} w związku</h4><p>${za} ${SIGN_LOVE[za]}.</p></div>
       <div><h4>${zb} w związku</h4><p>${zb} ${SIGN_LOVE[zb]}.</p></div>
     </div>
     <p style="color:var(--text-dim);font-size:.9rem">Zgodność znaków Słońca to tylko pierwszy krok. Pełniejszy obraz dają <a href="/znak-ksiezyca/">znak Księżyca</a> (emocje), <a href="/ascendent/">ascendent</a> i <a href="/matryca-partnerska/">matryca partnerska</a>. A jeśli chcesz zapytać karty o tę relację, zrób <a href="/tarot-milosny/">rozkład tarota miłosnego</a>.</p>`;
  document.getElementById("z-res").style.display="block";
  document.getElementById("z-res").scrollIntoView({behavior:"smooth"});
});
