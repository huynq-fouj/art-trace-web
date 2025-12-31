import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/shared/toolkits/store';
import { getTranslation } from '@/app/shared/translate/translations';
import { SunIcon, ResizeIcon, RotateIcon, XMarkIcon } from '@/app/shared/components/Icons';

export type ControlType = 'opacity' | 'scale' | 'rotate' | null;

interface CameraControlsProps {
  opacity: number;
  setOpacity: (val: number) => void;
  scale: number;
  setScale: (val: number) => void;
  rotation: number;
  setRotation: (val: number) => void;
  activeControl: ControlType;
  setActiveControl: (val: ControlType) => void;
}

export const CameraControls: React.FC<CameraControlsProps> = ({
  opacity, setOpacity,
  scale, setScale,
  rotation, setRotation,
  activeControl, setActiveControl
}) => {
  const language = useSelector((state: RootState) => state.settings.language);
  const t = getTranslation(language);

  const renderActiveControl = () => {
    switch (activeControl) {
      case 'opacity':
        return (
          <div className="w-full animate-fade-in-up">
            <div className="flex justify-between text-xs text-gray-300 mb-3 font-medium tracking-wide uppercase">
              <span>{t.opacity}</span>
              <span>{Math.round(opacity * 100)}%</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.01"
              value={opacity}
              onChange={(e) => setOpacity(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>
        );
      case 'scale':
        return (
          <div className="w-full animate-fade-in-up">
            <div className="flex justify-between text-xs text-gray-300 mb-3 font-medium tracking-wide uppercase">
              <span>{t.scale}</span>
              <span>{Math.round(scale * 100)}%</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="3"
              step="0.05"
              value={scale}
              onChange={(e) => setScale(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>
        );
      case 'rotate':
        return (
          <div className="w-full animate-fade-in-up">
            <div className="flex justify-between text-xs text-gray-300 mb-3 font-medium tracking-wide uppercase">
              <span>{t.rotate}</span>
              <span>{rotation}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={rotation}
              onChange={(e) => setRotation(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="z-30 bg-gray-900/90 backdrop-blur-md border-t border-white/10 pb-6 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.5)] transition-all duration-300">
      
      {/* Active Control Area (Slider) */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeControl ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 border-b border-white/5 bg-black/20">
           {renderActiveControl()}
        </div>
      </div>

      {/* Toolbar Icons */}
      <div className="flex justify-around items-center px-6 pt-5">
         <button 
            onClick={() => setActiveControl(activeControl === 'opacity' ? null : 'opacity')}
            className={`flex flex-col items-center space-y-1 transition-colors ${activeControl === 'opacity' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}
         >
            <div className={`p-3 rounded-2xl ${activeControl === 'opacity' ? 'bg-cyan-400/20' : 'bg-transparent'}`}>
              <SunIcon className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-medium">{t.opacity}</span>
         </button>

         <button 
            onClick={() => setActiveControl(activeControl === 'scale' ? null : 'scale')}
            className={`flex flex-col items-center space-y-1 transition-colors ${activeControl === 'scale' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}
         >
             <div className={`p-3 rounded-2xl ${activeControl === 'scale' ? 'bg-cyan-400/20' : 'bg-transparent'}`}>
              <ResizeIcon className="w-6 h-6" />
             </div>
             <span className="text-[10px] font-medium">{t.scale}</span>
         </button>

         <button 
            onClick={() => setActiveControl(activeControl === 'rotate' ? null : 'rotate')}
            className={`flex flex-col items-center space-y-1 transition-colors ${activeControl === 'rotate' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}
         >
             <div className={`p-3 rounded-2xl ${activeControl === 'rotate' ? 'bg-cyan-400/20' : 'bg-transparent'}`}>
              <RotateIcon className="w-6 h-6" />
             </div>
             <span className="text-[10px] font-medium">{t.rotate}</span>
         </button>
         
         {activeControl && (
           <button 
              onClick={() => setActiveControl(null)}
              className="flex flex-col items-center space-y-1 text-red-400 hover:text-red-300 animate-fade-in"
           >
               <div className="p-3 rounded-2xl bg-red-400/10">
                <XMarkIcon className="w-6 h-6" />
               </div>
               <span className="text-[10px] font-medium">{t.close}</span>
           </button>
         )}
      </div>
    </div>
  );
};