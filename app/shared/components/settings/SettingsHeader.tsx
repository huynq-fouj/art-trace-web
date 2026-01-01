import React from 'react';
import { ChevronLeftIcon } from '@/app/shared/components/Icons';
import useSettings from '../../hooks/useSettings';
import useTranslate from '../../hooks/useTranslate';

export const SettingsHeader: React.FC = () => {
  const { closeSettings } = useSettings();
  const { t } = useTranslate();

  return (
    <div className="flex items-center p-4 pt-6 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <button 
        onClick={() => closeSettings()}
        className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-700 dark:text-slate-200"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <h1 className="ml-2 text-xl font-bold text-slate-900 dark:text-white">{t.settings}</h1>
    </div>
  );
};