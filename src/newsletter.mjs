// ============================================================
//  Newsletter (MailerLite). Formularze i polityka prywatności
//  pojawiają się na stronie dopiero, gdy enabled = true.
//
//  Jak włączyć:
//   1. MailerLite → Forms → Embedded forms → utwórz formularz
//      (włącz Double opt-in), otwórz „HTML code” i skopiuj adres
//      z atrybutu action formularza, np.
//      https://assets.mailerlite.com/jsonp/123456/forms/987654321/subscribe
//   2. Wklej go w mailerliteAction, uzupełnij dane administratora,
//      ustaw enabled: true i uruchom: node tools/build.mjs
// ============================================================
export const NEWSLETTER = {
  enabled: false,
  mailerliteAction: "",
  // dane do polityki prywatności (administrator danych osobowych)
  adminName: "",
  adminEmail: "",
};
