// Moontasia: zgoda na cookies marketingowe i Meta Pixel.
// Piksel ładuje się dopiero po kliknięciu „Akceptuję” (RODO / Prawo telekomunikacyjne).
(function () {
  var KEY = "mt-consent", PIXEL_ID = "2379914369414010";
  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function loadPixel() {
    if (window.fbq) return;
    /* Meta Pixel Code */
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', PIXEL_ID);
    fbq('track', 'PageView');
    /* End Meta Pixel Code */
  }

  function banner() {
    if (document.getElementById("cookie-bar")) return;
    var d = document.createElement("div");
    d.id = "cookie-bar";
    d.setAttribute("role", "dialog");
    d.setAttribute("aria-label", "Zgoda na pliki cookies");
    d.innerHTML =
      '<p>Używamy plików cookies Meta (Facebook, Instagram), żeby mierzyć skuteczność naszych reklam. Odczyty i obliczenia nadal działają tylko w Twojej przeglądarce. ' +
      '<a href="/polityka-prywatnosci/#cookies">Więcej informacji</a></p>' +
      '<div class="cookie-btns"><button type="button" class="cookie-no">Odrzuć</button><button type="button" class="cookie-yes">Akceptuję</button></div>';
    document.body.appendChild(d);
    d.querySelector(".cookie-yes").onclick = function () { set("yes"); d.remove(); loadPixel(); };
    d.querySelector(".cookie-no").onclick = function () { set("no"); d.remove(); };
  }

  var c = get();
  if (c === "yes") loadPixel();
  else if (c !== "no") {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", banner); else banner();
  }
  // link „Ustawienia cookies” w stopce otwiera baner ponownie
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("[data-cookie-settings]");
    if (!a) return;
    e.preventDefault();
    banner();
  });
})();
