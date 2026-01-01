import React from 'react';
import { GlobeIcon, CheckIcon } from '@/app/shared/components/Icons';
import useTranslate from '../../hooks/useTranslate';

export const LanguageSection: React.FC = () => {
  const { t, language, setLanguage } = useTranslate();

  return (
    <section>
      <div className="flex items-center mb-4 text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">
        <GlobeIcon className="w-4 h-4 mr-2" />
        {t.language}
      </div>
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm">
        <button 
          onClick={() => setLanguage('vi')}
          className="w-full flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
        >
          <span className="text-slate-900 dark:text-white">Tiếng Việt</span>
          {language === 'vi' && <CheckIcon className="w-5 h-5 text-blue-500" />}
        </button>
        <button 
          onClick={() => setLanguage('en')}
          className="w-full flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
        >
          <span className="text-slate-900 dark:text-white">English</span>
          {language === 'en' && <CheckIcon className="w-5 h-5 text-blue-500" />}
        </button>
        <button 
          onClick={() => setLanguage('ja')}
          className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
        >
          <span className="text-slate-900 dark:text-white">日本語</span>
          {language === 'ja' && <CheckIcon className="w-5 h-5 text-blue-500" />}
        </button>
      </div>
    </section>
  );
};