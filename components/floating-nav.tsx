"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import dynamic from "next/dynamic";
import {
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
const SparklesCore = dynamic(() => import("@/components/ui/sparkles").then(mod => mod.SparklesCore), { ssr: false });

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
  }[]
  className?: string
}) => {
  const [visible, setVisible] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.link.replace("#", ""))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            // Reduced padding, font size, and top margin
            "flex max-w-fit fixed top-2 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black/80 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-3 py-1.5 items-center justify-center space-x-2 text-sm",
            className,
          )}
        >
          {/* Sparkles background */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 rounded-full overflow-hidden">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={120}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          {/* Desktop Navigation */}
          <FollowerPointerCard title="Navigation">
            <FloatingDockNavText navItems={navItems} activeSection={activeSection} smoothScrollTo={smoothScrollTo} />
          </FollowerPointerCard>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 inset-x-4 bg-black/90 backdrop-blur-md border border-white/[0.2] rounded-2xl z-[4999] md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((navItem, idx) => {
                const sectionId = navItem.link.replace("#", "")
                const isActive = activeSection === sectionId

                return (
                  <motion.button
                    key={`mobile-link-${idx}`}
                    onClick={() => {
                      smoothScrollTo(sectionId)
                      setIsOpen(false)
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={cn(
                      "transition-colors duration-200 text-xl font-medium py-2 text-left w-full cursor-pointer bebas-neue-regular",
                      isActive ? "text-blue-400" : "text-neutral-50 hover:text-blue-400",
                    )}
                  >
                    {navItem.name}
                    {isActive && (
                      <motion.div
                        className="w-full h-0.5 bg-blue-400 mt-1"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                )
              })}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                onClick={() => {
                  smoothScrollTo("contact")
                  setIsOpen(false)
                }}
                className="border border-blue-500/50 text-blue-400 hover:text-white hover:bg-blue-500/20 px-4 py-3 rounded-full text-lg font-medium transition-all duration-200 mt-4"
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function FloatingDockNavText({ navItems, activeSection, smoothScrollTo }: { navItems: { name: string; link: string }[]; activeSection: string; smoothScrollTo: (id: string) => void }) {
  const mouseX = useMotionValue(Infinity);
  return (
    <div
      className="hidden md:flex items-center space-x-3 z-10"
      onMouseMove={e => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {navItems.map((navItem, idx) => {
        const sectionId = navItem.link.replace("#", "");
        const isActive = activeSection === sectionId;
        const ref = useRef<HTMLButtonElement>(null);
        const distance = useTransform(mouseX, val => {
          const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
          return val - bounds.x - bounds.width / 2;
        });
        const scale = useSpring(useTransform(distance, [-150, 0, 150], [1, 1.4, 1]), {
          mass: 0.1,
          stiffness: 150,
          damping: 12,
        });
        return (
          <motion.button
            key={`link-${idx}`}
            ref={ref}
            onClick={() => smoothScrollTo(sectionId)}
            whileTap={{ scale: 0.95 }}
            style={{ scale }}
            className={cn(
              "relative transition-colors duration-200 text-sm font-medium cursor-pointer bg-transparent border-none outline-none bebas-neue-regular",
              isActive ? "text-blue-400" : "text-neutral-50 hover:text-blue-400",
            )}
          >
            {navItem.name}
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-blue-400"
              initial={{ width: 0 }}
              animate={{ width: isActive ? "100%" : 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        );
      })}
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="relative border border-blue-500/50 text-blue-400 hover:text-white hover:bg-blue-500/20 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
        onClick={() => smoothScrollTo("contact")}
      >
        Hire Me
        <motion.div
          className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.button>
    </div>
  );
}
