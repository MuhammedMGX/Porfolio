"use client";

import { useEffect, useState } from "react";
import logo from "../../../public/Logo.png";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("preloader-active");
    document.body.style.overflow = "hidden";

    const exitTimer = setTimeout(() => setIsExiting(true), 1800);
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
      document.documentElement.classList.remove("preloader-active");
      document.body.style.overflow = "";
    }, 2400);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`preloader ${isExiting ? "preloader-exit" : ""}`}>
      <div className="preloader-logo">
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="mx-auto h-auto"
          priority
        />
      </div>
    </div>
  );
}