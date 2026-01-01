import React from 'react';
import { SettingsIcon, QuestionMarkCircleIcon } from '@/app/shared/components/Icons';
import useSettings from '../../hooks/useSettings';
import useTranslate from '../../hooks/useTranslate';

export const HomeTopBar: React.FC = () => {
  const { openSettings } = useSettings();
  const { t } = useTranslate();

  return (
    <div className="flex justify-between items-center p-4 pt-6 bg-white dark:bg-slate-900">
      <h1 className="text-xl font-bold text-slate-900 dark:text-white">{t.appName}</h1>
      <div className="flex space-x-4">
        <QuestionMarkCircleIcon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
        <button onClick={() => openSettings()}>
          <SettingsIcon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
        </button>
      </div>
    </div>
  );
};