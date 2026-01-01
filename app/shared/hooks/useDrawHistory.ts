import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../toolkits/store";
import { HistoryItem } from "../types/types";
import { exitCameraMode, selectFromHistory, setCurrentImage } from "../toolkits/drawingSlice";

export default function useDrawHistory() {
    const dispatch = useDispatch();
    const { history, currentImage, isCameraMode, isSettingsOpen } = useSelector((state: RootState) => state.drawing);

    const selectHistory = (item: HistoryItem) => {
        dispatch(selectFromHistory(item.imageData))
    }

    const setCurrent = (base64String: string) => {
        dispatch(setCurrentImage(base64String))
    }

    const exitMode = () => {
        dispatch(exitCameraMode());
    }

    return {
        history,
        currentImage,
        selectHistory,
        setCurrent,
        exitCameraMode: exitMode,
        isCameraMode,
        isSettingsOpen
    }
}