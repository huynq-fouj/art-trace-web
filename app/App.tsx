import React from 'react';
import CameraCanvas from './shared/components/CameraCanvas';
import Settings from './shared/components/Settings';
import Home from './shared/components/Home';
import useDrawHistory from './shared/hooks/useDrawHistory';
import useSettings from './shared/hooks/useSettings';


const App: React.FC = () => {
  const { isCameraMode, isSettingsOpen } = useDrawHistory();
  const { theme } = useSettings()

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} h-full`}>
      <div className="w-full h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-white overflow-hidden font-sans transition-colors duration-300">
        {isCameraMode ? (
          <CameraCanvas />
        ) : isSettingsOpen ? (
          <Settings />
        ) : (
          <Home />
        )}
      </div>
    </div>
  );
};

export default App;