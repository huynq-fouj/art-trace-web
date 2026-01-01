import { useState } from "react";

export type ControlType = 'opacity' | 'scale' | 'rotate' | null;

interface CameraControls {
  opacity: number;
  setOpacity: (val: number) => void;
  scale: number;
  setScale: (val: number) => void;
  rotation: number;
  setRotation: (val: number) => void;
  activeControl: ControlType;
  setActiveControl: (val: ControlType) => void;
}

export default function useCameraControllers(): CameraControls {
    const [opacity, setOpacity] = useState(0.5);
    const [scale, setScale] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [activeControl, setActiveControl] = useState<ControlType>(null);

    return {
      opacity,
      scale,
      rotation,
      activeControl,
      setOpacity,
      setScale,
      setRotation,
      setActiveControl
    }
}