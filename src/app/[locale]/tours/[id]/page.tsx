import { notFound } from 'next/navigation';
import PageHeader from '@/components/shared/PageHeader';
import TourDetailClient from './TourDetailClient';
import { toursService } from '@/lib/api';
import initTranslations from '@/lib/i18n';

interface PageProps {
    params: Promise<{ locale: string; id: string }>;
}

export default async function TourDetailPage({ params }: PageProps) {
    const resolvedParams = await params;
    const locale = (resolvedParams.locale || 'ru').toUpperCase();
    const id = resolvedParams.id;
    const { t } = await initTranslations(locale.toLowerCase(), ['common']);

    try {
        const tour = await toursService.getTourById(id, locale);

        if (!tour) {
            return notFound();
        }

        const langData = tour.languages?.find(l => l.languageCode === locale) || tour.languages?.[0];
        console.dir(langData)
        console.dir(tour)
        const title = langData?.title || t('tour_details');

        return (
            <>
                <PageHeader title={title.toUpperCase()} />
                <TourDetailClient tour={tour} locale={locale} />
            </>
        );
    } catch (error) {
        console.error('Failed to fetch tour details', error);
        return notFound();
    }
}
