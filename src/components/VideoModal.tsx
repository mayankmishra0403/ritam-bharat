"use client";

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import VideoEmbed from '@/components/VideoEmbed';

type Props = {
  open: boolean;
  onClose: () => void;
  videoId: string;
  title?: string;
};

export default function VideoModal({ open, onClose, videoId, title = 'Video' }: Props) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative w-[90vw] max-w-4xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-12 right-0 text-white hover:text-amber-300"
        >
          <X className="w-7 h-7" />
        </button>
        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-video">
            <VideoEmbed videoId={videoId} title={title} startPlaying />
          </div>
        </div>
      </div>
    </div>
  );
}
