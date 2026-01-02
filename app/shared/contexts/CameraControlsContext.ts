import { createContext } from "react";

export type ControlType = 'opacity' | 'scale' | 'rotate' | null;

export interface CameraControlsType {
  opacity: number;
  setOpacity: (val: number) => void;
  scale: number;
  setScale: (val: number) => void;
  rotation: number;
  setRotation: (val: number) => void;
  activeControl: ControlType;
  setActiveControl: (val: ControlType) => void;
}

const CameraControlsContext = createContext<CameraControlsType | undefined>(undefined);

export default CameraControlsContext;