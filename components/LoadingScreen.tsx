"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
      <Image
        src="/images/logo.png"
        alt="Shree Krishna Studio"
        width={140}
        height={140}
        priority
       className="animate-pulse w-auto h-auto"
      />

      <h2 className="mt-6 text-3xl font-bold text-white tracking-widest">
        SHREE KRISHNA
      </h2>

      <p className="mt-2 text-green-400 tracking-[6px] uppercase text-sm">
        Capturing Forever
      </p>

      <div className="mt-10 h-1 w-60 overflow-hidden rounded-full bg-zinc-800">
        <div className="h-full w-full animate-[loading_2s_linear_forwards] bg-green-500" />
      </div>
    </div>
  );
}