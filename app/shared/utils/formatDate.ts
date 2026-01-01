import { Language } from "../types/types";

const intls = {
    en: 'en-US',
    ja: 'ja-JP',
    vi: 'vi-VN'
}

export const formatDate = (timestamp: number, language?: Language) => {
    return new Intl.DateTimeFormat(intls?.[language] ?? intls.vi, {
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: '2-digit',
    }).format(new Date(timestamp));
};