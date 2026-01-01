import React from 'react';
import { ClockIcon } from '@/app/shared/components/Icons';
import { formatDate } from '../../utils/formatDate';
import useTranslate from '../../hooks/useTranslate';
import useDrawHistory from '../../hooks/useDrawHistory';

export const HistorySection: React.FC = () => {
  const { history, selectHistory } = useDrawHistory();
  const { t, language } = useTranslate()

  return (
    <div className="px-4">
      <div className="flex justify-between items-end mb-4">
        <h2 className="text-lg font-bold text-slate-800 dark:text-white">{t.history}</h2>
        <span className="text-xs text-blue-500 font-medium">{t.seeAll}</span>
      </div>

      {history.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
          <ClockIcon className="w-10 h-10 text-slate-300 dark:text-slate-600 mb-2" />
          <p className="text-slate-400 dark:text-slate-500 text-sm">{t.noHistory}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {history.map((item) => (
            <div 
              key={item.id}
              onClick={() => selectHistory(item)}
              className="flex items-center p-3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-700 flex-shrink-0">
                <img src={item.imageData} alt="History" className="w-full h-full object-cover" />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-slate-700 dark:text-slate-200 text-sm truncate">{t.drawing} {item.id.slice(-4)}</h3>
                <div className="flex items-center mt-1 text-slate-400 dark:text-slate-500 text-xs">
                  <ClockIcon className="w-3 h-3 mr-1" />
                  <span>{formatDate(item.timestamp, language)}</span>
                </div>
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-700 text-slate-400 dark:text-slate-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};