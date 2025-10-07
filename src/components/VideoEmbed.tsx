"use client";

import React, { useState } from 'react';
import { Play } from 'lucide-react';

type Props = {
  videoId: string;
  title?: string;
  className?: string;
  startPlaying?: boolean;
};

export default function VideoEmbed({ videoId, title = 'Video', className = '', startPlaying = false }: Props) {
  const [playing, setPlaying] = useState(startPlaying);

  // YouTube thumbnail URL pattern
  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const embedSrc = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&showinfo=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=1${playing ? '&autoplay=1' : ''}`;

  return (
    <div className={`w-full h-full ${className}`}>
      {!playing ? (
        <button
          aria-label={`Play ${title}`}
          className="relative w-full h-full focus:outline-none"
          onClick={() => setPlaying(true)}
        >
          <img src={thumb} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
              <Play className="w-8 h-8 text-indigo-900" />
            </div>
          </div>
        </button>
      ) : (
        <iframe
          className="w-full h-full"
          src={embedSrc}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
}
