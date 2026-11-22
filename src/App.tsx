import { Sun, Moon } from 'lucide-react';
import { useTheme, type ThemeMode } from './hooks/useTheme';

// Day 2 preview shell to test colors, fonts, and Light/Dark switching
export default function App() {
  const { theme, setTheme } = useTheme();

  const modes: { id: ThemeMode; label: string; icon: typeof Sun }[] = [
    { id: 'light', label: 'Light', icon: Sun },
    { id: 'dark', label: 'Dark', icon: Moon },
  ];

  const colorSwatches = [
    { name: '--color-hero', bg: 'var(--color-hero)', text: 'var(--color-text)' },
    { name: '--color-about', bg: 'var(--color-about)', text: 'var(--color-text)' },
    { name: '--color-card', bg: 'var(--color-card)', text: 'var(--color-text)' },
    { name: '--color-work', bg: 'var(--color-work)', text: 'var(--color-text-on-work)' },
    {
      name: '--color-contact',
      bg: 'var(--color-contact)',
      text: 'var(--color-text-on-accent)',
    },
  ];

  return (
    <div className="min-h-screen px-6 py-12 transition-colors">
      <main className="max-w-4xl mx-auto space-y-10">
        {/* Top bar & theme switcher */}
        <header
          className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b"
          style={{ borderColor: 'var(--color-line)' }}
        >
          <div>
            <p
              className="font-label text-xs uppercase"
              style={{ color: 'var(--color-accent)' }}
            >
              Testing lang for Design 
            </p>
            <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
              Active theme: <strong>{theme.toUpperCase()}</strong>
            </p>
          </div>

          <div
            className="inline-flex items-center rounded-full p-1 border"
            style={{
              backgroundColor: 'var(--color-card)',
              borderColor: 'var(--color-line)',
            }}
            role="group"
            aria-label="Theme Mode Switcher"
          >
            {modes.map(({ id, label, icon: Icon }) => {
              const isActive = theme === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setTheme(id)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer"
                  style={{
                    backgroundColor: isActive ? 'var(--color-accent)' : 'transparent',
                    color: isActive
                      ? 'var(--color-text-on-accent)'
                      : 'var(--color-text-secondary)',
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </button>
              );
            })}
          </div>
        </header>

        {/* Font preview */}
        <section className="space-y-4">
          <h1 className="heading-hero font-normal">
            Percie Louise{' '}
            <em className="italic font-light" style={{ color: 'var(--color-accent)' }}>
              Samaniego.
            </em>
          </h1>
          <p className="max-w-[65ch]" style={{ color: 'var(--color-text-secondary)' }}>
            Fraunces variable display serif (<code>SOFT=100, WONK=1</code>) paired with Plus
            Jakarta Sans body copy. Switch between Light and Dark above—then refresh the page
            to verify zero dark-mode flash.
          </p>
        </section>

        {/* Color palette swatches */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {colorSwatches.map((token) => (
            <div
              key={token.name}
              className="p-5 rounded-2xl border"
              style={{
                backgroundColor: token.bg,
                color: token.text,
                borderColor: 'var(--color-line)',
              }}
            >
              <p className="text-xs font-mono opacity-80">{token.name}</p>
              <p className="font-heading italic text-xl mt-2">Editorial Surface</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
