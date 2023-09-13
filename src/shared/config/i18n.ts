import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { DEFAULT_LANGUAGE_CODE } from "../constants/user";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: DEFAULT_LANGUAGE_CODE,
    interpolation: {
      escapeValue: false,
    },
  });

i18n.changeLanguage(DEFAULT_LANGUAGE_CODE);

export default i18n;
