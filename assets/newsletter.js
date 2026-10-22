// Moontasia — zapis do newslettera (MailerLite, wysyłka przez ukrytą ramkę, bez przeładowania strony)
(function () {
  document.querySelectorAll("form.nl-form").forEach((form, i) => {
    const frameName = `nl-frame-${i}`;
    const frame = document.createElement("iframe");
    frame.name = frameName;
    frame.hidden = true;
    frame.setAttribute("aria-hidden", "true");
    form.after(frame);
    form.target = frameName;

    const status = form.querySelector(".nl-status");
    const button = form.querySelector("button[type=submit]");
    let sent = false;

    form.addEventListener("submit", e => {
      const email = form.querySelector("input[type=email]");
      const consent = form.querySelector("input[name=nl-consent]");
      status.className = "nl-status";
      if (!email.value.trim() || !email.checkValidity()) {
        e.preventDefault();
        status.textContent = "Podaj poprawny adres e-mail.";
        status.classList.add("err");
        email.focus();
        return;
      }
      if (consent && !consent.checked) {
        e.preventDefault();
        status.textContent = "Zaznacz zgodę, aby się zapisać.";
        status.classList.add("err");
        return;
      }
      sent = true;
      button.disabled = true;
      status.textContent = "Zapisuję…";
    });

    frame.addEventListener("load", () => {
      if (!sent) return;
      sent = false;
      form.classList.add("done");
      const box = form.closest(".nl");
      if (box) box.classList.add("nl-done");
      status.className = "nl-status ok";
      status.innerHTML = '<span class="nl-thanks-ico" aria-hidden="true">☾</span><b>Dziękujemy za zapis!</b><span>Księżycowe wiadomości wkrótce trafią do Twojej skrzynki.</span>';
    });
  });
})();
