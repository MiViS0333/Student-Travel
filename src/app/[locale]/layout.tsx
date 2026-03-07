import type { Metadata, Viewport } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/pagination';
import '@/assets/scss/app.scss';
import '../globals.css';
import ClientLayout from './ClientLayout';
import TranslationsProvider from '@/components/TranslationsProvider';
import initTranslations from '@/lib/i18n';

const i18nNamespaces = ['common'];

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Studentravel',
  description: 'Student Travel — исследуйте мир вместе с нами',
  icons: {
    icon: '/media/icoStudentTravel.png',
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css"
        />
      </head>
      <body id="body" className="x-hidden ui-transition">
        <div id="__next">
          <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
          >
            <ClientLayout>{children}</ClientLayout>
          </TranslationsProvider>
        </div>
      </body>
    </html>
  );
}
