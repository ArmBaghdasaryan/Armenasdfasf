import React, { useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import getTheme from './base';

const CustomThemeContext = React.createContext({
  currentTheme: 'light',
  // eslint-disable-next-line no-unused-vars
  setTheme: (name: string) => {},
});

function CustomThemeProvider(props: any) {
  const { children } = props;

  const currentTheme = localStorage.getItem('appTheme') || 'light';
  const [themeName, _setThemeName] = useState(currentTheme);
  const theme = getTheme(themeName);

  const setThemeName = (name: string) => {
    localStorage.setItem('appTheme', name);
    _setThemeName(name);
  };

  const contextValue = useMemo(
    () => ({
      currentTheme: themeName,
      setTheme: setThemeName,
    }), []);

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}

export default CustomThemeProvider;
