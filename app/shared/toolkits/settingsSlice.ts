import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Language, SettingsState, Theme } from "../types/types";
import { loadSettings } from "../utils/storage";

const initialSettingsState: SettingsState = loadSettings();

export const settingsSlice = createSlice({
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

export const { setLanguage, setTheme } = settingsSlice.actions;