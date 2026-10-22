// Moontasia — menu: przycisk na telefonie, rozwijanie podmenu, zaznaczenie bieżącej strony
(function () {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const toggle = header.querySelector(".menu-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  header.querySelectorAll(".drop-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const li = btn.closest(".has-drop");
      const open = li.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
  document.addEventListener("click", e => {
    if (!e.target.closest(".has-drop")) header.querySelectorAll(".has-drop.open").forEach(li => li.classList.remove("open"));
  });
  const path = location.pathname.replace(/index\.html$/, "");
  header.querySelectorAll(".main-nav a").forEach(a => {
    const href = a.getAttribute("href");
    const match = href === "/" ? path === "/" : path.startsWith(href);
    if (match && !a.classList.contains("nav-cta")) {
      a.setAttribute("aria-current", "page");
      const drop = a.closest(".has-drop");
      if (drop) drop.classList.add("current");
    }
  });
})();
