type LocaleStrings = {
    okCookie: string;
    addToEstimate: string;
    instancesHeader: string;
    computeEngine: string;
};

const locales: Record<string, LocaleStrings> = {
    en: {
        okCookie: 'OK, got it',
        addToEstimate: 'Add to estimate',
        instancesHeader: 'Instances',
        computeEngine: 'Compute Engine',
    },
    es: {
        okCookie: 'OK',
        addToEstimate: 'Agregar a la estimación',
        instancesHeader: 'Instancias',
        computeEngine: 'Motor de cómputo',
    },
};

// @ts-ignore
const currentLang = process.env.LOCALE || 'en';

export function getText(key: keyof LocaleStrings): string {
    // @ts-ignore
    const strings = locales[currentLang] || locales.en;
    // @ts-ignore
    return strings[key];
}
