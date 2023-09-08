import i18n from "i18next"
import {
  default as I18nextBrowserLanguageDetector,
  default as LanguageDetector,
} from "i18next-browser-languagedetector"
import Backend from "i18next-http-backend"
import { initReactI18next } from "react-i18next"
import translationEN from "../../public/locales/en/translation.json"
import translationFR from "../../public/locales/fr/translation.json"

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      fr: {
        translation: translationFR,
      },
    },
    lng: "en",
    load: "languageOnly",
    fallbackLng: "en",
    supportedLngs: ["en", "fr"],
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
