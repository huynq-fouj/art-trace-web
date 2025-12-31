import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DrawingState, HistoryItem, SettingsState, Language, Theme } from '@/app/shared/types/types';

// Loaders
const loadHistory = (): HistoryItem[] => {
  try {
    const serialized = localStorage.getItem('drawingHistory');
    return serialized ? JSON.parse(serialized) : [];
  } catch (err) {
    return [];
  }
};

const loadSettings = (): SettingsState => {
  try {
    const serialized = localStorage.getItem('appSettings');
    return serialized ? JSON.parse(serialized) : { language: 'vi', theme: 'light' };
  } catch (err) {
    return { language: 'vi', theme: 'light' };
  }
};

// Drawing Slice
const initialDrawingState: DrawingState = {
  history: loadHistory(),
  currentImage: null,
  isCameraMode: false,
  isSettingsOpen: false,
};

const drawingSlice = createSlice({
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

      state.history = newHistory.slice(0, 3);
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

// Settings Slice
const initialSettingsState: SettingsState = loadSettings();

const settingsSlice = createSlice({
  name: 'settings',
  initialState: initialSettingsState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    }
  }
});

export const { setCurrentImage, exitCameraMode, selectFromHistory, toggleSettings } = drawingSlice.actions;
export const { setLanguage, setTheme } = settingsSlice.actions;

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
    localStorage.setItem('drawingHistory', JSON.stringify(state.drawing.history));
    localStorage.setItem('appSettings', JSON.stringify(state.settings));
  } catch (err) {
    console.error("Failed to save state", err);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;