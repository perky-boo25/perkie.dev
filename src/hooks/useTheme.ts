import { useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'ps-theme';

function readStoredTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light';
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === 'light' || raw === 'dark') {
      return raw;
    }
  } catch {
    // Fallback to 'light' if storage is blocked
  }
  return 'light';
}

// Manages Light / Dark theme state and syncs it to <html> and localStorage
export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(readStoredTheme);

  // Sync active theme attribute to <html> and save user preference
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.classList.toggle('dark', theme === 'dark');
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore storage errors
    }
  }, [theme]);

  // Toggle directly between light and dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return {
    theme,
    setTheme,
    toggleTheme,
  };
}
