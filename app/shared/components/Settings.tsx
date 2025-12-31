import React from 'react';
import { SettingsHeader } from './settings/SettingsHeader';
import { ThemeSection } from './settings/ThemeSection';
import { LanguageSection } from './settings/LanguageSection';

const Settings: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 transition-colors duration-300">
      <SettingsHeader />
      <div className="flex-1 overflow-y-auto p-4 space-y-8">
        <ThemeSection />
        <LanguageSection />
      </div>
    </div>
  );
};

export default Settings;