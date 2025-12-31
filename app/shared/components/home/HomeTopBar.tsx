import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSettings, RootState } from '@/app/shared/toolkits/store';
import { getTranslation } from '@/app/shared/translate/translations';
import { SettingsIcon, QuestionMarkCircleIcon } from '@/app/shared/components/Icons';

export const HomeTopBar: React.FC = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.settings.language);
  const t = getTranslation(language);

  return (
    <div className="flex justify-between items-center p-4 pt-6 bg-white dark:bg-slate-900">
      <h1 className="text-xl font-bold text-slate-900 dark:text-white">{t.appName}</h1>
      <div className="flex space-x-4">
        <QuestionMarkCircleIcon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
        <button onClick={() => dispatch(toggleSettings(true))}>
          <SettingsIcon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
        </button>
      </div>
    </div>
  );
};