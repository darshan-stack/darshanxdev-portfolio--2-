"use client"

import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { motion } from "framer-motion";
import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript", "javascript", "dart", "java", "react", "flutter", "android", "html5", "css3",
  "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws", "postgresql", "firebase", "nginx",
  "vercel", "testinglibrary", "jest", "cypress", "docker", "git", "jira", "github", "gitlab",
  "visualstudiocode", "androidstudio", "sonarqube", "figma",
];

export function Skills() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <FollowerPointerCard title="Skills">
      <div className="min-h-screen bg-background text-foreground py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-0"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-sans">
            Skills & Expertise
          </h2>
          <p className="text-2xl md:text-3xl font-bold mb-1 text-gray-900 dark:text-gray-100 max-w-3xl mx-auto font-sans">
            A comprehensive toolkit spanning AI, robotics, and modern web development
          </p>
        </motion.div>
        <div className="flex flex-col items-center mt-2">
          <span className="font-bold text-lg mb-1 text-gray-900 dark:text-gray-100">Featured</span>
          <div className="relative flex size-full items-center justify-center overflow-hidden min-h-[420px]">
            <IconCloud images={images} />
          </div>
        </div>
        {/* Tech Stack Grid */}
        <div className="w-full flex justify-center mt-2">
          <div className="rounded-2xl border border-green-200 dark:border-green-700 bg-gradient-to-r from-white/80 via-gray-100/80 to-white/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80 shadow-lg px-2 py-4 max-w-4xl w-full">
            <div className="flex flex-wrap justify-center gap-3">
              <TechPill iconSrc="https://cdn.simpleicons.org/javascript/fff/000" label="JavaScript" />
              <TechPill iconSrc="https://cdn.simpleicons.org/tailwindcss/fff/06b6d4" label="Tailwind" />
              <TechPill iconSrc="https://cdn.simpleicons.org/react/fff/61dafb" label="React" />
              <TechPill iconSrc="https://cdn.simpleicons.org/nodedotjs/fff/339933" label="Node.js" />
              <TechPill iconSrc="https://cdn.simpleicons.org/express/fff/000" label="Express.js" />
              <TechPill iconSrc="https://cdn.simpleicons.org/typescript/fff/3178c6" label="TypeScript" />
              <TechPill iconSrc="https://cdn.simpleicons.org/mongodb/fff/47a248" label="MongoDB" />
              <TechPill iconSrc="https://cdn.simpleicons.org/nextdotjs/fff/000" label="Next.js" />
              <TechPill iconSrc="https://cdn.simpleicons.org/framer/fff/0055ff" label="Framer" />
              <TechPill iconSrc="https://cdn.simpleicons.org/prisma/fff/2d3748" label="Prisma" />
              <TechPill iconSrc="https://cdn.simpleicons.org/amazonaws/fff/ff9900" label="AWS" />
              <TechPill iconSrc="https://cdn.simpleicons.org/cloudflare/fff/f38020" label="Cloudflare" />
              <TechPill iconSrc="https://cdn.simpleicons.org/redis/fff/d82c20" label="Redis" />
              <TechPill iconSrc="https://cdn.simpleicons.org/postgresql/fff/336791" label="PostgreSQL" />
              <TechPill iconSrc="https://cdn.simpleicons.org/firebase/fff/ffca28" label="Firebase" />
              <TechPill iconSrc="https://cdn.simpleicons.org/rust/fff/000" label="Rust" />
              <TechPill iconSrc="https://cdn.simpleicons.org/linux/fff/000" label="Linux" />
              <TechPill iconSrc="https://cdn.simpleicons.org/supabase/fff/3ecf8e" label="Supabase" />
              <TechPill iconSrc="https://cdn.simpleicons.org/react/fff/61dafb" label="React Native" />
            </div>
          </div>
        </div>
        {/* Reduce bottom gap here */}
        <div className="h-4" />
        </div>
      </div>
    </FollowerPointerCard>
  );
}

function TechPill({ iconSrc, label }: { iconSrc: string; label: string }) {
  return (
    <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800 text-white font-semibold text-base shadow-md border border-gray-700 min-w-[120px] justify-center">
      <img src={iconSrc} alt={label} className="w-6 h-6" />
      {label}
    </span>
  );
}
