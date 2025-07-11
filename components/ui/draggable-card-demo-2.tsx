import React from "react";
import { StackIcon } from "@/components/ui/stack-icon";
import { motion } from "framer-motion";

const items = [
  { title: "JavaScript", icon: "javascript" },
  { title: "TypeScript", icon: "typescript" },
  { title: "React", icon: "react" },
  { title: "Next.js", icon: "next.js" },
  { title: "Node.js", icon: "nodejs" },
  { title: "Express.js", icon: "express" },
  { title: "Tailwind CSS", icon: "tailwind" },
  { title: "MongoDB", icon: "mongodb" },
  { title: "Python", icon: "python" },
  { title: "Framer", icon: "framer" },
  { title: "Prisma", icon: "prisma" },
  { title: "AWS", icon: "aws" },
  { title: "Cloudflare", icon: "cloudflare" },
  { title: "Redis", icon: "redis" },
  { title: "PostgreSQL", icon: "postgresql" },
  { title: "Firebase", icon: "firebase" },
  { title: "Rust", icon: "rust" },
  { title: "Linux", icon: "linux" },
  { title: "Supabase", icon: "supabase" },
  { title: "React Native", icon: "react native" },
  { title: "AI", icon: "ai" },
  { title: "Bash", icon: "bash" },
  { title: "C++", icon: "c++" },
  { title: "GitHub", icon: "github" },
  { title: "GitLab", icon: "gitlab" },
  { title: "LangChain", icon: "langchain" },
];

export default function DraggableCardDemo() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center py-8">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          drag
          dragConstraints={{ top: -40, left: -40, right: 40, bottom: 40 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center w-20 cursor-grab active:cursor-grabbing"
        >
          <StackIcon name={item.icon} />
          <span className="mt-2 text-xs text-center font-medium text-neutral-700 dark:text-neutral-300 truncate w-full">
            {item.title}
          </span>
        </motion.div>
      ))}
    </div>
  );
} 