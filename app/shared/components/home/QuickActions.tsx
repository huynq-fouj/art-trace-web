import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/shared/toolkits/store';
import { getTranslation } from '@/app/shared/translate/translations';
import { CameraIcon, ImageIcon } from '@/app/shared/components/Icons';

export const QuickActions: React.FC = () => {
  const language = useSelector((state: RootState) => state.settings.language);
  const t = getTranslation(language);

  return (
    <div className="grid grid-cols-4 gap-2 px-4 mb-6">
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-1">
           <CameraIcon className="w-6 h-6 text-slate-700 dark:text-slate-200"/>
        </div>
        <span className="text-[10px] text-slate-500 dark:text-slate-400">{t.camera}</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-1">
           <ImageIcon className="w-6 h-6 text-slate-700 dark:text-slate-200"/>
        </div>
        <span className="text-[10px] text-slate-500 dark:text-slate-400">{t.library}</span>
      </div>
       {/* Placeholders */}
       <div className="flex flex-col items-center opacity-50">
        <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-1">
           <div className="w-6 h-6 border-2 border-slate-400 dark:border-slate-500 rounded-full"></div>
        </div>
        <span className="text-[10px] text-slate-500 dark:text-slate-400">{t.tools}</span>
      </div>
      <div className="flex flex-col items-center opacity-50">
        <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-1">
           <div className="w-6 h-6 border-2 border-slate-400 dark:border-slate-500 rounded-sm"></div>
        </div>
        <span className="text-[10px] text-slate-500 dark:text-slate-400">{t.more}</span>
      </div>
    </div>
  );
};