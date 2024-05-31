import { useCallback, useLayoutEffect, useState } from "react";
import translationEN from "../lang/en.json";
import translationAR from "../lang/ar.json";
import { initReactI18next } from "react-i18next";
import i18n from "i18next"; // Make sure this import is correct
import { LocalStorageEnum } from "../enum/LocalStorage";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ar: {
      translation: translationAR,
    },
  },
  lng: localStorage.getItem(LocalStorageEnum.LANGUAGE) || "en",
  interpolation: {
    escapeValue: false,
  },
});

export const useChangeLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem(LocalStorageEnum.LANGUAGE) || "en",
  );

  useLayoutEffect(() => {
    if (currentLanguage === "ar") {
      i18n.changeLanguage("ar");
      document.body.setAttribute("dir", "rtl");
      document.body.classList.remove("en");
    } else if (currentLanguage === "en") {
      i18n.changeLanguage("en");
      document.body.setAttribute("dir", "ltr");
      document.body.classList.add("en");
    }

    localStorage.setItem(LocalStorageEnum.LANGUAGE, currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = useCallback((newLanguage: any) => {
    setCurrentLanguage(newLanguage);
  }, []);

  return { currentLanguage, changeLanguage };
};
