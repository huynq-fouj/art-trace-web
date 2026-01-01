import { getTranslation } from "../translate/translations";
import useSettings from "./useSettings";

export default function useTranslate() {
    const { language, setLanguage } = useSettings();
    const t = getTranslation(language);

    return {
        language,
        setLanguage,
        t
    }
}