'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview } from '@/lib/gtm';

export default function GoogleTagManagerTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const originalPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== originalPathname.current) {
      // URL hat sich geändert, sende ein Pageview-Ereignis
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      pageview(url);
      originalPathname.current = pathname;
    }
  }, [pathname, searchParams]);

  // Initialisiere das erste Pageview-Ereignis
  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    pageview(url);
  }, []);

  return null; // Diese Komponente rendert nichts
}
