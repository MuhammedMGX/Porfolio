"use client";

import { useState, useEffect, cloneElement, ReactElement, MouseEventHandler, ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

type ClickableChild = ReactElement<{ onClick?: MouseEventHandler<any> }>;

type ProjectModalProps = {
  title: string;
  description: React.ReactNode;
  screen: string;
  demo: string;
  github: string;
  children: ClickableChild;
};

export function ProjectModal({ title, description, screen, demo, github, children }: ProjectModalProps) {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const trigger = cloneElement(children, {
    onClick: (e) => {
      children.props.onClick?.(e);
      setOpen(true);
    },
  });

  return (
    <>
      {trigger}

      {isMounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              >
                <motion.div
                  className="bg-[#0A0A0A] rounded-lg shadow-lg w-[90%] p-6 relative max-h-[80vh] overflow-y-auto md:px-10 modal-content"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-end sticky top-0 -mr-5">
                    <button
                      className="text-gray-600 hover:text-black text-2xl"
                      onClick={() => setOpen(false)}
                    >
                      &times;
                    </button>
                  </div>

                  <div className="flex items-center pb-2 ">
                    <h2 className="text-[clamp(1rem,5vw,3rem)] md:text-[clamp(1rem,10vw,3rem)] font-bold text-white me-5">
                      {title}
                    </h2>

                    <a href={github}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github bg-[#1A1A1A] hover:opacity-70 p-2 w-11 h-11 rounded-full cursor-pointer transition"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                      </svg>
                    </a>
                    <a href={demo}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-world bg-[#1A1A1A] hover:opacity-70 p-2 w-11 h-11 rounded-full cursor-pointer transition ms-3"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M3.6 9h16.8" />
                        <path d="M3.6 15h16.8" />
                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                      </svg>
                    </a>
                  </div>

                  <div className="w-[80%] h-1 bg-white rounded-full"></div>

                  <div className="text-white py-10">
                    <p>{description}</p>
                  </div>

                  <div className="pb-10">
                    <img src={screen} alt="Full project screenshot" className="w-full rounded-lg mb-4" />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

interface ShowMyCVProps {
  children: ReactNode;
}

export function ShowMyCV({ children }: ShowMyCVProps) {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <div onClick={() => setOpen(true)} className="inline-block cursor-pointer">
        {children}
      </div>

      {isMounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              >
                <motion.div
                  className="bg-[#0A0A0A] rounded-lg shadow-lg aspect-[8.5/11] p-6 relative h-screen  md:px-10 modal-content"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-end sticky top-0 -mr-5">
                    <button
                      className="text-gray-600 hover:text-black text-2xl"
                      onClick={() => setOpen(false)}
                    >
                      &times;
                    </button>
                  </div>

                  <div className="flex items-center pb-2">
                    <h2 className="text-[clamp(1rem,5vw,3rem)] md:text-[clamp(1rem,10vw,3rem)] font-bold text-white me-5">
                      My CV
                    </h2>
                  </div>

                  <div className="w-[80%] h-1 bg-white rounded-full"></div>

                  <div className="pb-10">
                    <iframe
                      src="https://drive.google.com/file/d/124eEEP5Y7zao7EZyA5oTFTbx6aW5Bepb/preview"
                      width="100%"
                      height="600"
                      allow="autoplay"
                    ></iframe>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
