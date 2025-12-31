import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { exitCameraMode, RootState } from '@/app/shared/toolkits/store';
import { getTranslation } from '@/app/shared/translate/translations';
import { ChevronLeftIcon } from '@/app/shared/components/Icons';

export const CameraTopBar: React.FC = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.settings.language);
  const t = getTranslation(language);

  return (
    <div className="absolute top-0 left-0 w-full z-30 p-4 pt-6 flex items-center bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
      <button 
        onClick={() => dispatch(exitCameraMode())}
        className="pointer-events-auto w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white active:scale-95 transition-transform"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <span className="ml-4 text-white font-medium drop-shadow-md">{t.drawingMode}</span>
    </div>
  );
};