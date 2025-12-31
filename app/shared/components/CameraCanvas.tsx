import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CameraTopBar } from './camera/CameraTopBar';
import { CameraViewport } from './camera/CameraViewport';
import { CameraControls, ControlType } from './camera/CameraControls';
import { RootState } from '@/app/shared/toolkits/store';

const CameraCanvas: React.FC = () => {
  const currentImage = useSelector((state: RootState) => state.drawing.currentImage);
  
  const [opacity, setOpacity] = useState(0.5);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [activeControl, setActiveControl] = useState<ControlType>(null);

  if (!currentImage) return null;

  return (
    <div className="relative w-full h-full bg-black overflow-hidden flex flex-col">
      <CameraTopBar />
      <CameraViewport 
        opacity={opacity} 
        scale={scale} 
        rotation={rotation} 
      />
      <CameraControls 
        opacity={opacity} setOpacity={setOpacity}
        scale={scale} setScale={setScale}
        rotation={rotation} setRotation={setRotation}
        activeControl={activeControl} setActiveControl={setActiveControl}
      />
    </div>
  );
};

export default CameraCanvas;