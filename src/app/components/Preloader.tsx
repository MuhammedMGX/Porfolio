"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../../public/Logo.png"
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("preloader-active");
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.documentElement.classList.remove("preloader-active");
    }
  }, [isLoading]);


  return (
    <AnimatePresence
        onExitComplete={() => {
            document.body.style.overflow = "";
        }}
        >

      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0.2, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
          >
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className=" mx-auto h-auto"
              priority
            />
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}