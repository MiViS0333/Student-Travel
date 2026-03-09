import { toursService, TourLocationsResponse, TourType, ToursResponse } from '@/lib/api';
import HomePageClient from './HomePageClient';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  // Await the params as required by recent Next.js versions for dynamic route segments
  const resolvedParams = await params;
  const locale = (resolvedParams.locale || 'ru').toUpperCase();

  let toursData: ToursResponse | null = null;
  let locationsData: TourLocationsResponse | null = null;
  let tourTypesData: TourType[] | null = null;

  try {
    // Fetch data in parallel on the server
    const [toursRes, locationsRes, tourTypesRes] = await Promise.allSettled([
      toursService.getTours({ lang: locale, limit: 4 }), // Fetch 4 tours for the homepage
      toursService.getLocations(locale),
      toursService.getTourTypes(locale),
    ]);

    if (toursRes.status === 'fulfilled') toursData = toursRes.value;
    if (locationsRes.status === 'fulfilled') locationsData = locationsRes.value;
    if (tourTypesRes.status === 'fulfilled') tourTypesData = tourTypesRes.value;
  } catch (error) {
    console.error('Failed to fetch home page data', error);
  }

  // Transform data to expected format for Selects
  const departures = locationsData?.departures
    ? locationsData.departures.map(d => ({ value: d, label: d }))
    : [];

  const destinations = locationsData?.destinations
    ? locationsData.destinations.map(d => ({ value: d, label: d }))
    : [];

  const tourTypes = tourTypesData
    ? tourTypesData.map(t => {
      const langData = t.languages?.find(l => l.languageCode === locale);
      return { value: t.id, label: langData?.name || 'Unknown Type' };
    })
    : [];

  const tours = toursData?.data || [];

  return (
    <HomePageClient
      tours={tours}
      departures={departures}
      destinations={destinations}
      tourTypes={tourTypes}
      locale={locale.toLowerCase()}
    />
  );
}
