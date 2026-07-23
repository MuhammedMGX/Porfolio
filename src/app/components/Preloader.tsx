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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
        >
          <motion.div
            initial={{
              opacity: 0.2,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 3,
              ease: "easeOut",
            }}
          >
            <Image src={logo} alt={"logo"} className="w-[20%] mx-auto"/>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}