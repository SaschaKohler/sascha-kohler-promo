'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview } from '@/lib/gtm';

// Diese separate Komponente für searchParams kann in einer Suspense-Grenze verwendet werden
export function SearchParamsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Überwache die searchParams und sende Pageviews
  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}
