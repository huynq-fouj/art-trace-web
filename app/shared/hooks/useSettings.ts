import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../toolkits/store";
import { Language, Theme } from "../types/types";
import { setLanguage, setTheme } from "../toolkits/settingsSlice";
import { toggleSettings } from "../toolkits/drawingSlice";

export default function useSettings() {
    const dispatch = useDispatch();
    const { language, theme } = useSelector((state: RootState) => state.settings);

    const handleThemeChange = (newTheme: Theme) => {
        dispatch(setTheme(newTheme));
    };

    const handleLanguageChange = (lang: Language) => {
        dispatch(setLanguage(lang));
    };

    const toggle = (val: boolean) => {
        dispatch(toggleSettings(val));
    }

    return {
        language,
        theme,
        setTheme: handleThemeChange,
        setLanguage: handleLanguageChange,
        openSettings: () => toggle(true),
        closeSettings: () => toggle(false)
    }
}