import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function GlobalFollowerPointer({ title }: { title?: string }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setShow(true);
    };
    const handleLeave = () => setShow(false);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const colors = [
    "#0ea5e9",
    "#737373",
    "#14b8a6",
    "#22c55e",
    "#3b82f6",
    "#ef4444",
    "#eab308",
  ];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed z-[9999] h-4 w-4 pointer-events-none"
          style={{
            top: pos.y,
            left: pos.x,
            transform: "translate(-12px, -10px)",
          }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="1"
            viewBox="0 0 16 16"
            className="h-6 w-6 -rotate-[70deg] stroke-sky-600 text-sky-500"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
          </svg>
          <motion.div
            style={{
              backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className={
              "min-w-max rounded-full bg-neutral-200 px-2 py-2 text-xs whitespace-nowrap text-white"
            }
          >
            {title || `William Shakespeare`}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 