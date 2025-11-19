import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

const storedLng = typeof window !== "undefined" ? localStorage.getItem("i18n-language") : null;

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: storedLng || "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json"
    }
  });

// Keep <html lang="..."> in sync
i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
  }
  try {
    localStorage.setItem("i18n-language", lng);
  } catch {
    void 0;
  }
});

export default i18n;
