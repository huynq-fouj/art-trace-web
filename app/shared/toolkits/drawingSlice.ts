import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DrawingState } from "../types/types";
import { loadHistory } from "../utils/storage";

const initialDrawingState: DrawingState = {
  history: loadHistory(),
  currentImage: null,
  isCameraMode: false,
  isSettingsOpen: false,
};

export const drawingSlice = createSlice({
  name: 'drawing',
  initialState: initialDrawingState,
  reducers: {
    setCurrentImage: (state, action: PayloadAction<string>) => {
      state.currentImage = action.payload;
      state.isCameraMode = true;
      state.isSettingsOpen = false;

      const existingIndex = state.history.findIndex(h => h.imageData === action.payload);
      let newHistory = [...state.history];
      if (existingIndex !== -1) newHistory.splice(existingIndex, 1);
      
      newHistory.unshift({
        id: Date.now().toString(),
        imageData: action.payload,
        timestamp: Date.now(),
      });

      state.history = newHistory.slice(0, 5);
    },
    exitCameraMode: (state) => {
      state.isCameraMode = false;
      state.currentImage = null;
    },
    selectFromHistory: (state, action: PayloadAction<string>) => {
      state.currentImage = action.payload;
      state.isCameraMode = true;
      state.isSettingsOpen = false;
    },
    toggleSettings: (state, action: PayloadAction<boolean>) => {
      state.isSettingsOpen = action.payload;
    }
  },
});

export const { setCurrentImage, exitCameraMode, selectFromHistory, toggleSettings } = drawingSlice.actions;