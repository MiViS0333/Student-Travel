import type { Metadata, Viewport } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/pagination';
import '@/assets/scss/app.scss';
import '../globals.css';
import ClientLayout from './ClientLayout';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Student Travel',
  description: 'Student Travel — explore the world with us',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css"
        />
      </head>
      <body id="body" className="x-hidden ui-transition">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
