'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function ClarityScript() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const clarityID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
    if (!clarityID) {
      console.warn('Microsoft Clarity Project ID environment variable nahi mila.');
      return;
    }

    // Clarity Script ko initialize karein
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", clarityID);

  }, [pathname, searchParams]);

  return null; // Yeh component UI mein kuch nahi dikhata
}

