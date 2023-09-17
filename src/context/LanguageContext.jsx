import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { RU } from "../data/ru";
import { UZ } from "../data/uz";

export const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
  const [langType, setLangType] = useState(
    localStorage.getItem("language") || "ru"
  );

  const language = {
    ru: RU,
    uz: UZ,
  };

  const state = { langType, lang: language[langType], setLangType };

  return (
    <LanguageContext.Provider value={state}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageContextProvider.propTypes = {
  children: PropTypes.node,
};

export default LanguageContextProvider;
