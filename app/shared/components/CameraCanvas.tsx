import React from 'react';
import { CameraTopBar } from './camera/CameraTopBar';
import { CameraViewport } from './camera/CameraViewport';
import { CameraControls } from './camera/CameraControls';
import useDrawHistory from '../hooks/useDrawHistory';

const CameraCanvas: React.FC = () => {
  const { currentImage } = useDrawHistory();

  if (!currentImage) return null;

  return (
    <div className="relative w-full h-full bg-black overflow-hidden flex flex-col">
      <CameraTopBar />
      <CameraViewport />
      <CameraControls />
    </div>
  );
};

export default CameraCanvas;