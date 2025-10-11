"use client"

import { useState, useEffect, useMemo } from "react"
import { createPortal } from "react-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const sectionIds = ["home", "about", "skills", "projects", "contact"]

  // Detecta scroll para adicionar fundo no header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Bloqueio de scroll quando menu aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMenuVisible(true)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      // delay para animação de saída
      const timer = setTimeout(() => setIsMenuVisible(false), 300) // 300ms = duração da animação
      return () => clearTimeout(timer)
    }
  }, [isMobileMenuOpen])

  // Intersection Observer para detectar seção ativa
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  const navItems = [
    { name: "Início", href: "#home", id: "home" },
    { name: "Sobre", href: "#about", id: "about" },
    { name: "Habilidades", href: "#skills", id: "skills" },
    { name: "Projetos", href: "#projects", id: "projects" },
    { name: "Contato", href: "#contact", id: "contact" },
  ]

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    setIsMobileMenuOpen(false)
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        try {
          history.replaceState(null, "", `#${id}`)
        } catch {}
      }, 80)
    } else {
      window.location.hash = id
    }
  }

  const mobileMenu = useMemo(() => {
    if (!isMenuVisible || typeof document === "undefined") return null

    return createPortal(
      <div
        className={`fixed inset-0 z-[99999] flex items-center justify-center bg-white/95 dark:bg-background/95 backdrop-blur-lg px-6 transition-all duration-300
        ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-6 right-6 w-5 h-5"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Fechar menu"
        >
          <X style={{ width: "32px", height: "32px" }} />
        </Button>

        <nav>
          <ul className="flex flex-col gap-6 text-center max-w-md mx-auto">
            {navItems.map((item, idx) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`block text-3xl font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-primary to-accent text-white scale-105 shadow-primary/30"
                      : "bg-white/70 dark:bg-background/80 text-primary hover:bg-primary/10 hover:scale-105"
                  }`}
                  style={{ transitionDelay: `${idx * 60}ms` }}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>,
      document.body
    )
  }, [isMobileMenuOpen, isMenuVisible, activeSection])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="text-xl md:text-3xl font-bold text-primary hover:text-accent transition-colors">
            Portfólio
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`text-base xl:text-lg font-semibold transition-colors relative group ${
                    activeSection === item.id ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden w-10 h-10 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              ''
            ) : (
              <Menu style={{ width: "32px", height: "32px" }} />
            )}
          </Button>
        </div>
      </nav>

      {mobileMenu}
    </header>
  )
}
