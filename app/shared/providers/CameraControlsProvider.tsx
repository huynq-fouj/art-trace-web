import { ReactNode, useState } from "react";
import CameraControlsContext, { ControlType } from "../contexts/CameraControlsContext";

type CameraControlsProvidersProps = {
    children: ReactNode;
}

export default function CameraControlsProviders({ children }: CameraControlsProvidersProps) {
    const [opacity, setOpacity] = useState(0.5);
    const [scale, setScale] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [activeControl, setActiveControl] = useState<ControlType>(null);

    const value = {
        opacity,
        scale,
        rotation,
        activeControl,
        setOpacity,
        setScale,
        setRotation,
        setActiveControl,
    };

    return (
        <CameraControlsContext.Provider value={value}>
            {children}
        </CameraControlsContext.Provider>
    )
}