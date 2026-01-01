import { HistoryItem, SettingsState } from "../types/types";

export const loadHistory = (): HistoryItem[] => {
  try {
    const serialized = localStorage.getItem('drawingHistory');
    return serialized ? JSON.parse(serialized) : [];
  } catch (err) {
    return [];
  }
};

export const saveHistory = (histories: HistoryItem[]) => {
    localStorage.setItem('drawingHistory', JSON.stringify(histories));
}

export const loadSettings = (): SettingsState => {
  try {
    const serialized = localStorage.getItem('appSettings');
    return serialized ? JSON.parse(serialized) : { language: 'vi', theme: 'light' };
  } catch (err) {
    return { language: 'vi', theme: 'light' };
  }
};

export const saveSettings = (settings: SettingsState) => {
    localStorage.setItem('appSettings', JSON.stringify(settings));
}