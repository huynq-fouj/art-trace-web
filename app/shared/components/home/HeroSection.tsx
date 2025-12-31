import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentImage, RootState } from '@/app/shared/toolkits/store';
import { getTranslation } from '@/app/shared/translate/translations';
import { PlusIcon } from '@/app/shared/components/Icons';

export const HeroSection: React.FC = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.settings.language);
  const t = getTranslation(language);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        dispatch(setCurrentImage(base64String));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="px-4 mb-8">
      <div 
        onClick={triggerFileInput}
        className="w-full aspect-[2/1] bg-gradient-to-br from-blue-400 to-cyan-300 dark:from-blue-600 dark:to-cyan-500 rounded-3xl flex flex-col items-center justify-center shadow-lg active:scale-95 transition-transform cursor-pointer"
      >
        <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
          <PlusIcon className="w-8 h-8 text-white" />
        </div>
        <span className="text-white font-semibold text-lg">{t.newProject}</span>
        <span className="text-white/80 text-xs mt-1">{t.startDrawing}</span>
      </div>
      <input 
        type="file" 
        accept="image/*" 
        ref={fileInputRef} 
        className="hidden" 
        onChange={handleFileChange}
      />
    </div>
  );
};