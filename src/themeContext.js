import React, { useState, useCallback } from "react";
import themeData from "./themeData";

/**
 * Initial state properties Context Theme
 */
const ThemeContext = React.createContext(undefined);

const ThemeContextProvider = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState(themeData["grey"]);

  const setTheme = (theme) => {
    setActiveTheme(themeData[theme]);
  };
  /*
   * reset all theme context value
   */
  const resetSharedPortfolioModal = useCallback(() => {
    setActiveTheme(undefined);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        setTheme,
        resetSharedPortfolioModal,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

export const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      "useThemeFunctionContext must be used within a ThemeContext Provider"
    );
  }
  return context;
};
