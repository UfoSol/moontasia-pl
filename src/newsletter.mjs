// ============================================================
//  Newsletter (MailerLite). Formularze i polityka prywatności
//  pojawiają się na stronie dopiero, gdy enabled = true.
//
//  Jak włączyć:
//   1. MailerLite → Forms → Embedded forms → utwórz formularz
//      otwórz „HTML code” i skopiuj adres
//      z atrybutu action formularza, np.
//      https://assets.mailerlite.com/jsonp/123456/forms/987654321/subscribe
//   2. Wklej go w mailerliteAction, uzupełnij dane administratora,
//      ustaw enabled: true i uruchom: node tools/build.mjs
// ============================================================
export const NEWSLETTER = {
  enabled: false,
  mailerliteAction: "https://assets.mailerlite.com/jsonp/2734687/forms/202060681993782473/subscribe",
  // dane do polityki prywatności (administrator danych osobowych)
  adminName: "",
  adminEmail: "",
};
