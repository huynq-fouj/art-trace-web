import React from 'react';
import { HomeTopBar } from './home/HomeTopBar';
import { QuickActions } from './home/QuickActions';
import { HeroSection } from './home/HeroSection';
import { HistorySection } from './home/HistorySection';
import { BottomNav } from './home/BottomNav';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 transition-colors duration-300">
      <HomeTopBar />
      <div className="flex-1 overflow-y-auto pb-20">
        <QuickActions />
        <HeroSection />
        <HistorySection />
      </div>
      <BottomNav />
    </div>
  );
};

export default Home;