"use client";

import React, { useRef } from "react";

export default function usePlaySoundButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = (): void => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  return { audioRef, playSound };
}
