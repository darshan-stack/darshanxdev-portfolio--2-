"use client";
import React, { useEffect, useState } from "react";
import AboutFooter from "@/components/AboutFooter";

const aboutLines = [
  { type: "keyword", text: "class" },
  { type: "class-name", text: " DarshanXDev " },
  { type: "punctuation", text: "{" },
  { type: "comment", text: "  // I can, because I did." },
  { type: "comment", text: "  // My vast variety of skills is continuously expanding." },
  { type: "empty", text: "" },
  { type: "keyword", text: "  constructor" },
  { type: "punctuation", text: "() {" },
  { type: "property", text: "    this.name" },
  { type: "operator", text: " = " },
  { type: "string", text: "'Darshan Mistari'" },
  { type: "punctuation", text: ";" },
  { type: "property", text: "    this.alias" },
  { type: "operator", text: " = " },
  { type: "string", text: "'DARSHANXDEV'" },
  { type: "punctuation", text: ";" },
  { type: "property", text: "    this.location" },
  { type: "operator", text: " = " },
  { type: "string", text: "'Pune, India'" },
  { type: "punctuation", text: ";" },
  { type: "property", text: "    this.email" },
  { type: "operator", text: " = " },
  { type: "string", text: "'darshan@example.com'" },
  { type: "punctuation", text: ";" },
  { type: "punctuation", text: "  }" },
  { type: "empty", text: "" },
  { type: "function", text: "  workExperience" },
  { type: "punctuation", text: "() {" },
  { type: "keyword", text: "    return [" },
  { type: "string", text: "      { '2023-now': 'AI/Robotics Developer & Full-stack Engineer' }," },
  { type: "string", text: "      { '2021-2023': 'AI/ML Researcher & Hackathon Winner' }," },
  { type: "string", text: "      { '2019-2021': 'Web Developer & Cloud Enthusiast' }," },
  { type: "keyword", text: "    ];" },
  { type: "punctuation", text: "  }" },
  { type: "empty", text: "" },
  { type: "function", text: "  education" },
  { type: "punctuation", text: "() {" },
  { type: "keyword", text: "    return [" },
  { type: "string", text: "      { '2020-2024': 'B.Tech, Computer Science, Pune University' }," },
  { type: "keyword", text: "    ];" },
  { type: "punctuation", text: "  }" },
  { type: "empty", text: "" },
  { type: "function", text: "  skills" },
  { type: "punctuation", text: "() {" },
  { type: "keyword", text: "    return [" },
  { type: "string", text: "      'AI', 'Machine Learning', 'Robotics', 'React', 'Node.js', 'TypeScript', 'Python', 'Cloud', 'Hackathons', 'Full-Stack', 'Next.js', 'Tailwind', 'TensorFlow', 'PyTorch', 'AWS', 'GCP', 'Docker', 'Kubernetes', 'MongoDB', 'SQL', 'Figma', 'UI/UX', 'OpenCV', 'ROS', 'Arduino', 'Raspberry Pi'" },
  { type: "keyword", text: "    ];" },
  { type: "punctuation", text: "  }" },
  { type: "punctuation", text: "}" },
];

const syntaxColors: Record<string, string> = {
  keyword: "text-[#ff7b72]", // red/orange
  "class-name": "text-[#d2a8ff]", // purple
  function: "text-[#79c0ff]", // blue
  property: "text-[#79c0ff]", // blue
  operator: "text-[#ffdf5d]", // yellow
  string: "text-[#a5d6ff]", // light blue
  comment: "text-[#8b949e] italic", // gray
  punctuation: "text-[#c9d1d9]", // default
  empty: "", // for blank lines
};

export default function AboutCodeBlock() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < aboutLines.length) {
      const timeout = setTimeout(() => setVisibleLines(visibleLines + 1), 80);
      return () => clearTimeout(timeout);
    }
  }, [visibleLines]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">About</h2>
      <div className="bg-[#18181b] rounded-xl shadow-lg font-mono text-[15px] md:text-lg text-[#c9d1d9] border border-[#23272e] overflow-x-auto relative">
        {/* Editor bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#23272e] rounded-t-xl border-b border-[#23272e]">
          <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
        </div>
        <pre className="px-4 py-4 whitespace-pre-wrap min-h-[400px]">
          {aboutLines.slice(0, visibleLines).map((line, idx) =>
            line.type === "empty" ? (
              <br key={idx} />
            ) : (
              <span key={idx} className={syntaxColors[line.type] || ""}>{line.text}</span>
            )
          )}
          {visibleLines < aboutLines.length && (
            <span className="inline-block w-2 h-5 align-middle bg-blue-400 animate-pulse ml-1" />
          )}
        </pre>
      </div>
    </div>
  );
} 