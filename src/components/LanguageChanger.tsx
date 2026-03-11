'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../i18nConfig';

const locales = [
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
    { code: 'uz', label: 'UZ' }
];

export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleLocaleChange = (newLocale: string) => {
        if (newLocale === currentLocale) return;

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // redirect to the new locale path
        if (
            currentLocale === i18nConfig.defaultLocale &&
            !i18nConfig.prefixDefault
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        }

        router.refresh();
    };

    return (
        <div className="d-flex align-items-center justify-content-center gap-4 mt-4">
            {locales.map(({ code, label }) => (
                <button
                    key={code}
                    onClick={() => handleLocaleChange(code)}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: 'clamp(24px, 2vw, 32px)',
                        fontWeight: '700',
                        color: currentLocale === code ? '#1a1a1a' : '#8a8a8a',
                        textTransform: 'uppercase',
                        transition: 'color 0.3s ease, transform 0.3s ease',
                        padding: 0,
                        transform: currentLocale === code ? 'scale(1.1)' : 'scale(1)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#1a1a1a';
                    }}
                    onMouseLeave={(e) => {
                        if (currentLocale !== code) {
                            e.currentTarget.style.color = '#8a8a8a';
                        }
                    }}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}

