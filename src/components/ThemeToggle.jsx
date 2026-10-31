import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from './Icons';

const THEME_COLORS = { light: '#f4f5f2', dark: '#101315' };
const prefersDark = () => window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = () => document.documentElement.dataset.theme || (prefersDark().matches ? 'dark' : 'light');

// Follows the system until someone chooses. The inline script in index.html applies a saved choice before first paint.
// Starts unpressed so hydration matches the prerendered HTML, then reads the real theme.
export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const sync = () => setTheme(currentTheme());
    sync();
    const media = prefersDark();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  const toggle = () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => { meta.content = THEME_COLORS[next]; });
    try { localStorage.setItem('theme', next); } catch { /* Private mode: the choice lasts until the page reloads. */ }
    setTheme(next);
  };

  return (
    <button type="button" className="theme-toggle" aria-label="Dark theme" aria-pressed={theme === 'dark'} onClick={toggle}>
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
