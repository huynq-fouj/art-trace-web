import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSettings, RootState } from '@/app/shared/toolkits/store';
import { getTranslation } from '@/app/shared/translate/translations';
import { ChevronLeftIcon } from '@/app/shared/components/Icons';

export const SettingsHeader: React.FC = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.settings.language);
  const t = getTranslation(language);

  return (
    <div className="flex items-center p-4 pt-6 border-b border-gray-100 dark:border-gray-800">
      <button 
        onClick={() => dispatch(toggleSettings(false))}
        className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-700 dark:text-slate-200"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <h1 className="ml-2 text-xl font-bold text-slate-900 dark:text-white">{t.settings}</h1>
    </div>
  );
};