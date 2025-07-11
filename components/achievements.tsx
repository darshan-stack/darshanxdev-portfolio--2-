"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Star, Target } from "lucide-react"
import { useTheme } from "next-themes"
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import styled from "styled-components";

const achievements = [
  {
    icon: Trophy,
    title: "Winner, 3x National-Level Hackathons",
    description: "Secured 1st place in three national hackathons (2023–2024), recognized for innovative AI and robotics solutions.",
    year: "2023–2024",
    color: "#ffd700",
  },
  {
    icon: Award,
    title: "Smart India Hackathon Finalist (Top 100)",
    description: "Selected as one of the top 100 teams in the prestigious Smart India Hackathon 2024.",
    year: "2024",
    color: "#c0c0c0",
  },
  {
    icon: Star,
    title: "Peer’s Global Hackathon Finalist (Top 10%)",
    description: "Ranked in the top 10% among thousands of participants in Peer’s Global Hackathon 2024.",
    year: "2024",
    color: "#cd7f32",
  },
  {
    icon: Target,
    title: "e-Yantra Robotics Competition",
    description: "Finalist in the Warehouse Drone Theme, demonstrating advanced robotics and automation skills.",
    year: "2024",
    color: "#3b82f6",
  },
  {
    icon: Star,
    title: "14+ National Hackathons (Top 10)",
    description: "Consistently placed in the top 10 at over 14 national-level hackathons, showcasing versatility and innovation.",
    year: "2022–2024",
    color: "#8b5cf6",
  },
];

const stats = [
  { number: "14+", label: "National Hackathons (Top 10)" },
  { number: "10+", label: "Major Projects" },
  { number: "3x", label: "National Winner" },
  { number: "2", label: "Finalist (Global/National)" },
];

// FlipCard component for 3D flip effect
function FlipCard({ icon: Icon, title, year, description, color }: { icon: any, title: string, year: string, description: string, color: string }) {
  return (
    <div className="[perspective:900px] w-60 h-72 mx-auto">
      <div className="relative w-full h-full transition-transform duration-[1500ms] [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)_rotateZ(180deg)]">
        {/* Front */}
        <div className="absolute w-full h-full rounded-2xl shadow-lg flex flex-col items-center justify-center gap-3 text-aliceblue [backface-visibility:hidden] bg-gradient-to-br from-[#F80A4A] to-[#0AA4F8]">
          <div className="p-3 rounded-full mb-2" style={{ backgroundColor: color + '20' }}>
            <Icon className="w-9 h-9" style={{ color }} />
          </div>
          <p className="front-heading text-xl font-bold">{title}</p>
          <span className="text-sm opacity-80">{year}</span>
        </div>
        {/* Back */}
        <div className="absolute w-full h-full rounded-2xl shadow-lg flex flex-col items-center justify-center gap-3 text-aliceblue [backface-visibility:hidden] bg-gradient-to-br from-[#F80A4A] to-[#0AA4F8] [transform:rotateY(180deg)_rotateZ(180deg)]">
          <p className="back-heading text-xl font-bold">{title}</p>
          <span className="text-sm opacity-80">{year}</span>
          <p className="text-center text-xs px-4 opacity-90">{description}</p>
        </div>
      </div>
    </div>
  );
}

const LaunchButton = () => (
  <StyledWrapper>
    <button>
      <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor" />
      </svg>
      <span>Launch</span>
    </button>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  button {
    display: flex;
    align-items: center;
    font-family: inherit;
    cursor: pointer;
    font-weight: 500;
    font-size: 17px;
    padding: 0.8em 1.3em 0.8em 0.9em;
    color: white;
    background: #ad5389;
    background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
    border: none;
    letter-spacing: 0.05em;
    border-radius: 16px;
  }
  button svg {
    margin-right: 3px;
    transform: rotate(30deg);
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  }
  button span {
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  }
  button:hover svg {
    transform: translateX(5px) rotate(90deg);
  }
  button:hover span {
    transform: translateX(7px);
  }
`;

export function Achievements() {
  const { theme } = useTheme();
  return (
    <FollowerPointerCard title="Achievements">
      <div className={`min-h-screen bg-background py-20 ${theme === "light" ? "text-black" : "text-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100 max-w-3xl mx-auto">
            Milestones and recognition in my journey of innovation and excellence
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-blue-500 mb-1"
              >
                {stat.number}
              </motion.div>
              <div className="text-sm md:text-base opacity-80">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <FlipCard
              key={index}
              icon={achievement.icon}
              title={achievement.title}
              year={achievement.year}
              description={achievement.description}
              color={achievement.color}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 max-w-md mx-auto mb-6">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Ready to Build Something Amazing?</h3>
            <p className="text-base mb-4 opacity-90">Let's collaborate and create innovative solutions together</p>
            <LaunchButton />
          </div>
          {/* Contact & Social Links */}
          <div className="flex flex-col items-center gap-2 mt-6">
            <div className="flex gap-4 justify-center mb-2">
              <a href="https://www.linkedin.com/in/darshanxdevs" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 font-semibold underline">LinkedIn</a>
              <a href="https://x.com/futrgenX" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 font-semibold underline">X (Twitter)</a>
            </div>
            <div className="text-white text-sm font-mono">📱 8010599511</div>
            <div className="text-white text-xs font-mono">✉️ darshanmistaridz@gmail.com</div>
            <div className="text-white text-xs font-mono mb-2">✉️ darshanmistari14@gmail.com</div>
          </div>
        </motion.div>
      </div>
    </div>
    </FollowerPointerCard>
  )
}
