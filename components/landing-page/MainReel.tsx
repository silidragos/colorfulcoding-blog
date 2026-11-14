"use client";
import { useRef, useState } from "react";
import hero from "../../app/studio-hero.module.css";

export default function MainReel() {
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  return <div className={hero.reel} data-preview={!started}>
    <video ref={video} controls={started} playsInline preload="none" poster="/images/studio-reel.jpg" aria-label="ColorfulCoding studio reel" onEnded={() => setStarted(false)}>
      <source src="/video/reel_wide_compressed.mp4" type="video/mp4" />
    </video>
    {!started && <button aria-label="Play studio reel" onClick={() => { video.current?.play().then(() => setStarted(true)).catch(() => setStarted(true)); }}>
      <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true"><path fill="currentColor" d="M7 3.8a1 1 0 0 1 1.5-.86l13 8.2a1 1 0 0 1 0 1.72l-13 8.2A1 1 0 0 1 7 20.2z"/></svg>
    </button>}
  </div>;
}
