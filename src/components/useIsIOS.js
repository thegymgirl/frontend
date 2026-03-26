"use client";

import { useEffect, useState } from "react";

export default function useIsIOS() {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || "";
    const iOSDevice = /iPad|iPhone|iPod/.test(ua);
    const iPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
    setIsIOS(iOSDevice || iPadOS);
  }, []);

  return isIOS;
}