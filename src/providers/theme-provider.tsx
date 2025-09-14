import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  colorScheme: 'light' | 'dark';
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  colorScheme: 'light',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

const getColorScheme = (theme: Theme) => {
  if (theme === 'dark') return 'dark';
  if (theme === 'light') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'web-coperdia-ui-theme',
  ...props
}: ThemeProviderProps) {
  const storedTheme = localStorage.getItem(storageKey) as Theme;
  const [theme, setTheme] = useState<Theme>(storedTheme || defaultTheme);
  const colorScheme = getColorScheme(theme);

  useEffect(() => {
    handleThemeChange(theme);
  }, [theme]);

  const handleThemeChange = (theme: Theme) => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    let newTheme = theme;
    if (theme === 'system') {
      newTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    root.classList.add(newTheme);
    root.setAttribute('data-color-scheme', newTheme);
  };

  return (
    <ThemeProviderContext.Provider
      {...props}
      value={{
        colorScheme,
        theme,
        setTheme: (theme: Theme) => {
          localStorage.setItem(storageKey, theme);
          setTheme(theme);
        },
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}

const useTheme = (): ThemeProviderState => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

export type { ThemeProviderState };
export { useTheme };
export { ThemeProvider };
