export type Language = 'vi' | 'en' | 'ja';
export type Theme = 'light' | 'dark';

export interface HistoryItem {
  id: string;
  imageData: string; // Base64 string for preview/usage
  timestamp: number;
}

export interface DrawingState {
  history: HistoryItem[];
  currentImage: string | null;
  isCameraMode: boolean;
  isSettingsOpen: boolean;
}

export interface SettingsState {
  language: Language;
  theme: Theme;
}

// Icon Props
export interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}