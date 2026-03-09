import PageHeader from '@/components/shared/PageHeader';
import { toursService } from '@/lib/api';
import ToursClient from './ToursClient';

export default async function ToursPage({ params, searchParams }: { params: Promise<{ locale: string }>, searchParams: Promise<any> }) {
    const resolvedParams = await params;
    const locale = (resolvedParams.locale || 'ru').toUpperCase();
    const resolvedSearchParams = await searchParams;

    // Fetch initial tours
    const toursData = await toursService.getTours({
        lang: locale,
        page: Number(resolvedSearchParams.page) || 1,
        departure: resolvedSearchParams.departure || undefined,
        destination: resolvedSearchParams.destination || undefined,
        typeId: resolvedSearchParams.type || undefined,
        maxPrice: Number(resolvedSearchParams.maxPrice) || undefined,
    });

    // Fetch dropdown options
    const locations = await toursService.getLocations(locale);
    const tourTypes = await toursService.getTourTypes(locale);

    return (
        <>
            <PageHeader title="СПИСОК ТУРОВ" />
            <ToursClient
                initialTours={toursData}
                locations={locations}
                tourTypes={tourTypes}
                locale={locale.toLowerCase()}
            />
        </>
    );
}
