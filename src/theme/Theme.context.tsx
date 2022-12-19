import React from 'react';

import DEFAULT_THEME from './Default';
import { Theme } from './Theme.interface';

interface ProvidedValue {
  theme: Theme;
  // toggleTheme: () => void;
}

const Context = React.createContext<ProvidedValue>({
  theme: DEFAULT_THEME,
  // toggleTheme: () => {
  //   console.log('ThemeProvider is not rendered');
  // },
});

interface Props {
  // initial: Theme;
  children?: React.ReactNode;
}

export const ThemeProvider = React.memo<Props>(props => {
  return (
    <Context.Provider
      value={{
        theme: DEFAULT_THEME,
      }}>
      {props.children}
    </Context.Provider>
  );
});

export const useTheme = () => React.useContext(Context);

// const [theme, setTheme] = React.useState<Theme>(props.initial);

// const ToggleThemeCallback = React.useCallback(() => {
//   setTheme(currentTheme => {
//     if (currentTheme.id === DEFAULT_LIGHT_THEME_ID) {
//       return DEFAULT_DARK_THEME;
//     }

//     if (currentTheme.id === DEFAULT_DARK_THEME_ID) {
//       return DEFAULT_LIGHT_THEME;
//     }

//     return currentTheme;
//   });
// }, []);

// const MemoizedValue = React.useMemo(() => {
//   const value: ProvidedValue = {
//     theme,
//     toggleTheme: ToggleThemeCallback,
//   };

//   return value;
// }, [theme, ToggleThemeCallback]);
