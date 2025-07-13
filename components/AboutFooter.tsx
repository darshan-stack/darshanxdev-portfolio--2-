"use client";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaGlobeAsia, FaHourglassHalf } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub size={20} />, url: "https://github.com/darshanxdev", label: "GitHub"
  },
  {
    icon: <FaLinkedinIn size={20} />, url: "https://linkedin.com/in/darshanxdev", label: "LinkedIn"
  },
  {
    icon: <FaTwitter size={20} />, url: "https://twitter.com/darshanxdev", label: "Twitter"
  },
];

function getISTTime() {
  const now = new Date();
  // Convert to IST (UTC+5:30)
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const ist = new Date(utc + 5.5 * 3600000);
  return ist.toLocaleTimeString("en-GB", { hour12: false });
}

export default function AboutFooter() {
  const [time, setTime] = useState(getISTTime());

  useEffect(() => {
    const interval = setInterval(() => setTime(getISTTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 mt-2">
      {/* Social Icons */}
      <div className="flex gap-6 mb-2">
        {socialLinks.map((item, idx) => (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="rounded-full border border-gray-200 dark:border-gray-700 w-12 h-12 flex items-center justify-center bg-white dark:bg-[#18181b] shadow hover:scale-105 transition-transform"
          >
            {item.icon}
          </a>
        ))}
      </div>
      {/* Clock and Location */}
      <div className="flex items-center gap-3 text-black dark:text-white text-lg font-semibold">
        <span className="flex items-center gap-2">
          <FaHourglassHalf className="inline-block" />
          <span className="font-bold text-xl">{time}</span>
          <span className="text-base font-normal ml-1">IST</span>
        </span>
        <span className="flex items-center gap-2">
          <FaGlobeAsia className="inline-block" />
          <span className="font-bold">Pune, India</span>
        </span>
      </div>
    </div>
  );
} 