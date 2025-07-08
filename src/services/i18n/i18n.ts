import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationAr from "../../locales/ar.json";
import translationEn from "../../locales/en.json";

const resources = {
  en: { translation: translationEn },
  ar: { translation: translationAr },
};

export const supportedLngs = { en: "EN", ar: "AR" };

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ar",
    supportedLngs: Object.keys(supportedLngs),
    interpolation: { escapeValue: false },
    detection: {
      order: ["querystring", "localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
      lookupQuerystring: "lng",
    },
  });
export default i18n;
