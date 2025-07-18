import React, { useState, useEffect } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('system');

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      // System theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        const root = document.documentElement;
        if (mediaQuery.matches) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const themes = [
    { key: 'system', icon: Monitor, label: 'System' },
    { key: 'dark', icon: Moon, label: 'Dark' },
    { key: 'light', icon: Sun, label: 'Light' }
  ];

  return (
    <div className="inline-flex items-center bg-gray-800 rounded-lg p-1 gap-1">
      {themes.map((themeOption) => {
        const IconComponent = themeOption.icon;
        return (
          <button
            key={themeOption.key}
            onClick={() => setTheme(themeOption.key)}
            className={`
              relative flex items-center justify-center w-10 h-10 rounded-md
              transition-all duration-200 ease-in-out
              ${theme === themeOption.key 
                ? 'bg-gray-700 text-white shadow-sm' 
                : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/50'
              }
            `}
            title={themeOption.label}
            aria-label={`Switch to ${themeOption.label.toLowerCase()} theme`}
          >
            <IconComponent size={16} strokeWidth={2} />
          </button>
        );
      })}
    </div>
  );
};

export default ThemeToggle;