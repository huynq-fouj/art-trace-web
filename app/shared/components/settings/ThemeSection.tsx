import React from 'react';
import { SunIcon, MoonIcon } from '@/app/shared/components/Icons';
import useTranslate from '../../hooks/useTranslate';
import useSettings from '../../hooks/useSettings';

export const ThemeSection: React.FC = () => {
  const { t } = useTranslate();
  const { theme, setTheme } = useSettings();

  return (
    <section>
      <div className="flex items-center mb-4 text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">
        <SunIcon className="w-4 h-4 mr-2" />
        {t.theme}
      </div>
      <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-1.5 flex shadow-inner">
        <button
          onClick={() => setTheme('light')}
          className={`flex-1 flex items-center justify-center py-3 rounded-xl text-sm font-medium transition-all ${
            theme === 'light' 
              ? 'bg-white dark:bg-slate-700 shadow-md text-slate-900 dark:text-white' 
              : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          <SunIcon className="w-5 h-5 mr-2" />
          {t.light}
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`flex-1 flex items-center justify-center py-3 rounded-xl text-sm font-medium transition-all ${
            theme === 'dark' 
              ? 'bg-white dark:bg-slate-600 shadow-md text-slate-900 dark:text-white' 
              : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          <MoonIcon className="w-5 h-5 mr-2" />
          {t.dark}
        </button>
      </div>
    </section>
  );
};