"use client"

import { useEffect, useRef, useState } from "react"
import type { LucideIcon } from "lucide-react"
import {
  Atom,
  Boxes,
  Braces,
  Container,
  Database,
  FileCode,
  FileType,
  GitBranch,
  Layers,
  LayoutGrid,
  Paintbrush,
  Palette,
  PenTool,
  Server,
  TestTube,
  Wind,
  Zap,
} from "lucide-react"

/** Ícones Lucide (evita react-icons: barrel do Next falha na Vercel com JSON/undefined). */
const skillsData: { name: string; icon: LucideIcon }[] = [
  { name: "HTML5", icon: FileCode },
  { name: "CSS3", icon: Paintbrush },
  { name: "JavaScript", icon: Braces },
  { name: "React", icon: Atom },
  { name: "Node.js", icon: Server },
  { name: "Express", icon: Zap },
  { name: "Next.js", icon: Boxes },
  { name: "Tailwind CSS", icon: Wind },
  { name: "TypeScript", icon: FileType },
  { name: "MongoDB", icon: Database },
  { name: "Bootstrap", icon: LayoutGrid },
  { name: "Sass", icon: Palette },
  { name: "Redux", icon: Layers },
  { name: "Jest", icon: TestTube },
  { name: "Docker", icon: Container },
  { name: "Figma", icon: PenTool },
  { name: "Git", icon: GitBranch },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollInterval = useRef<NodeJS.Timeout | null>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  // Infinite animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        threshold: 0.5,
        rootMargin: "0px 0px -20% 0px",
      }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Infinite auto-scroll logic
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    function startAutoScroll() {
      if (scrollInterval.current) clearInterval(scrollInterval.current)
      scrollInterval.current = setInterval(() => {
        if (!isDragging.current) {
          el.scrollLeft += 1
          if (el.scrollLeft >= el.scrollWidth / 2) {
            el.scrollLeft = 0
          }
        }
      }, 16)
    }

    startAutoScroll()
    return () => {
      if (scrollInterval.current) clearInterval(scrollInterval.current)
    }
  }, [])

  // Mouse/touch drag logic
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true
      startX.current = e.pageX - el.offsetLeft
      scrollLeft.current = el.scrollLeft
      el.classList.add("cursor-grabbing")
    }
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      e.preventDefault()
      const x = e.pageX - el.offsetLeft
      const walk = (x - startX.current)
      el.scrollLeft = scrollLeft.current - walk
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0
      if (el.scrollLeft < 0) el.scrollLeft = el.scrollWidth / 2
    }
    const onMouseUp = () => {
      isDragging.current = false
      el.classList.remove("cursor-grabbing")
    }

    const onTouchStart = (e: TouchEvent) => {
      isDragging.current = true
      startX.current = e.touches[0].pageX - el.offsetLeft
      scrollLeft.current = el.scrollLeft
    }
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return
      const x = e.touches[0].pageX - el.offsetLeft
      const walk = (x - startX.current)
      el.scrollLeft = scrollLeft.current - walk
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0
      if (el.scrollLeft < 0) el.scrollLeft = el.scrollWidth / 2
    }
    const onTouchEnd = () => {
      isDragging.current = false
    }

    el.addEventListener("mousedown", onMouseDown)
    el.addEventListener("mousemove", onMouseMove)
    el.addEventListener("mouseleave", onMouseUp)
    el.addEventListener("mouseup", onMouseUp)
    el.addEventListener("touchstart", onTouchStart)
    el.addEventListener("touchmove", onTouchMove)
    el.addEventListener("touchend", onTouchEnd)

    return () => {
      el.removeEventListener("mousedown", onMouseDown)
      el.removeEventListener("mousemove", onMouseMove)
      el.removeEventListener("mouseleave", onMouseUp)
      el.removeEventListener("mouseup", onMouseUp)
      el.removeEventListener("touchstart", onTouchStart)
      el.removeEventListener("touchmove", onTouchMove)
      el.removeEventListener("touchend", onTouchEnd)
    }
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título mantém animação padrão */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Habilidades</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Carrossel animado dos cards */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="overflow-x-scroll flex cursor-grab select-none py-4"
            style={{
              scrollBehavior: "auto",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            {[...skillsData, ...skillsData].map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={index}
                  className={`
                    flex-shrink-0 mx-4 group
                    transition-all duration-700
                    ${isVisible
                      ? "opacity-100 scale-100 rotate-0"
                      : "opacity-0 scale-75 rotate-[-8deg]"
                    }
                  `}
                  style={{
                    transitionDelay: isVisible ? `${(index % skillsData.length) * 80 + 200}ms` : "0ms"
                  }}
                >
                  <div className="bg-card border border-border rounded-xl p-6 w-40 h-40 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-110 hover:border-primary hover:shadow-lg hover:shadow-primary/20">
                    <Icon className="w-12 h-12 text-primary group-hover:text-accent transition-colors duration-300" />
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </div>
                </div>
              )
            })}
          </div>
          {/* Gradientes nas bordas para efeito de fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>

        <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          Tecnologias e ferramentas que domino para criar experiências digitais incríveis
        </p>
      </div>
    </section>
  )
}