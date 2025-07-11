"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { DotPattern } from "@/components/magicui/dot-pattern"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { FloatingNav } from "@/components/floating-nav"
import { Logo } from "@/components/logo"
import { ContainerScroll } from "@/components/container-scroll-animation"
import { LoadingScreen } from "@/components/loading-screen"

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Achievements", link: "#achievements" },
  { name: "Contact", link: "#contact" },
]

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const { theme } = useTheme();

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return (
    <div className="relative bg-black">
      {/* DotPattern background for light theme only */}
      {theme === "light" && (
        <div className="fixed inset-0 -z-10">
          <DotPattern className="w-full h-full" />
        </div>
      )}
      <Logo />
      <FloatingNav navItems={navItems} />
      <section id="home">
        <Hero />
      </section>
      <ContainerScroll>
        <section id="about">
          <About />
        </section>
      </ContainerScroll>
      <ContainerScroll>
        <section id="skills">
          <Skills />
        </section>
      </ContainerScroll>
      <ContainerScroll>
        <section id="projects">
          <Projects />
        </section>
      </ContainerScroll>
      <ContainerScroll>
        <section id="achievements">
          <Achievements />
        </section>
      </ContainerScroll>
      <ContainerScroll>
        <section id="contact">
          <Contact />
        </section>
      </ContainerScroll>
    </div>
  )
}
