import es from "./es.json";
import en from "./en.json";

export const languages = { es: "ES", en: "EN" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "es";

export type Dictionary = typeof es;

const dictionaries: Record<Lang, Dictionary> = { es, en };

export function getDictionary(lang: Lang): Dictionary {
    return dictionaries[lang];
}

export function isLang(value: unknown): value is Lang {
    return typeof value === "string" && value in languages;
}
