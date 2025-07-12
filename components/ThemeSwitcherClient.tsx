"use client";
import Switch from "@/components/Switch";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

export default function ThemeSwitcherClient() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = useCallback(() => {
    if (!mounted) return;
    
    const currentTheme = resolvedTheme || theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }, [resolvedTheme, theme, setTheme, mounted]);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="fixed top-10 right-3 z-[6000] scale-75">
        <div className="w-16 h-8 bg-gray-300 rounded-full animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="fixed top-10 right-3 z-[6000] scale-75">
      <Switch 
        checked={resolvedTheme === "dark"} 
        onChange={handleThemeChange} 
      />
    </div>
  );
} 