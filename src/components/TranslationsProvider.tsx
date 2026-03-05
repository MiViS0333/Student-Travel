'use client';

import { I18nextProvider } from 'react-i18next';
import { initReactI18next } from 'react-i18next';
import initTranslations from '@/lib/i18n';
import { createInstance, i18n } from 'i18next';
import { useRef } from 'react';

export default function TranslationsProvider({
    children,
    locale,
    namespaces,
    resources
}: {
    children: React.ReactNode;
    locale: string;
    namespaces: string[];
    resources: any;
}) {
    const i18nRef = useRef<i18n | null>(null);

    if (!i18nRef.current) {
        i18nRef.current = createInstance();
        i18nRef.current.use(initReactI18next);
        initTranslations(locale, namespaces, i18nRef.current, resources);
    }

    return <I18nextProvider i18n={i18nRef.current}>{children}</I18nextProvider>;
}
