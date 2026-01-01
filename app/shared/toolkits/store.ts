import { configureStore } from '@reduxjs/toolkit';
import { drawingSlice } from './drawingSlice';
import { settingsSlice } from './settingsSlice';
import { saveHistory, saveSettings } from '../utils/storage';

export const store = configureStore({
  reducer: {
    drawing: drawingSlice.reducer,
    settings: settingsSlice.reducer,
  },
});

// Persistence Middleware
store.subscribe(() => {
  const state = store.getState();
  try {
    saveHistory(state.drawing.history);
    saveSettings(state.settings);
  } catch (err) {
    console.error("Failed to save state", err);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;