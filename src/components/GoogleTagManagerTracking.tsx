'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { pageview } from '@/lib/gtm';

export function GoogleTagManagerTracking() {
  const pathname = usePathname();
  const originalPathname = useRef(pathname);

  // Wir verwenden nur pathname und verzichten auf searchParams
  useEffect(() => {
    if (pathname !== originalPathname.current) {
      // URL hat sich geändert, sende ein Pageview-Ereignis
      pageview(pathname);
      originalPathname.current = pathname;
    }
  }, [pathname]);

  // Initialisiere das erste Pageview-Ereignis
  useEffect(() => {
    pageview(pathname);
  }, []);

  return null; // Diese Komponente rendert nichts
}
