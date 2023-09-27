import React, { useState } from "react";
import { Select } from "../../../../select";
import { useTranslation } from "react-i18next";
import { languageOptions } from "../config";
import i18n from "../../../../../config/i18n";
import "./index.scss";

export const LanguageSelect = () => {
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const preparedOptions = languageOptions.map((language) => {
    return {
      title: t(language.title),
      value: language.value,
    };
  });
  const handleLanguageChange = (key: number) => {
    setCurrentLanguage(key);
    const selectedLanguage = languageOptions.find(
      (language) => language.value === key,
    );
    i18n.changeLanguage(selectedLanguage?.code);
  };

  return (
    <Select
      options={preparedOptions}
      onChange={handleLanguageChange}
      selectedOption={currentLanguage}
      additionalClass={"language-selector"}
    />
  );
};
