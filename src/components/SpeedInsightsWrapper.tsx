"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the SpeedInsights Next component to avoid server-side import issues
const SpeedInsights = dynamic(() => import('@vercel/speed-insights/next').then(mod => mod.SpeedInsights), { ssr: false });

export default function SpeedInsightsWrapper() {
  // Only render in production environments
  if (process.env.NODE_ENV !== 'production') return null;

  return <SpeedInsights />;
}
