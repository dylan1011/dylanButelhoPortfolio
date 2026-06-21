"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroVisual() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-accent/20 bg-surfaceElevated">
      {!imgError ? (
        <Image
          src="/hero-visual.png"
          alt="Portfolio hero — developer workspace"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/20 via-surfaceMuted to-accent/10">
          <span className="font-mono text-accent/60 text-sm">
            {"// build something great"}
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent pointer-events-none" />
    </div>
  );
}
