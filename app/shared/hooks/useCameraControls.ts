import { useContext } from "react";
import CameraControlsContext, { CameraControlsType } from "../contexts/CameraControlsContext";

export default function useCameraControls(): CameraControlsType {
    const ctx = useContext(CameraControlsContext);
    if (!ctx) throw new Error("useCameraControllers must be used within CameraControllersProvider");
    return ctx;
}