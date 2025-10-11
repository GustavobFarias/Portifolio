"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Instagram , Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import InfiniteTyping from "@/app/InfiniteTyping"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl mx-auto">
                <img src="/eu-original.jpg" alt="Gustavo Farias" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-xl animate-pulse" />
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`space-y-4 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
              Olá, eu sou o{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-gradient">
                Gustavo Farias
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
              <InfiniteTyping />
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button size="lg" asChild className="group">
              <a
                href="/curriculo.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div
            className={`flex items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/GustavobFarias" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/gustavo-farias-5b4b6827b/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.instagram.com/fariasdev_hub?igsh=N2ZhODY0Nno1ZGIw" target="_blank" rel="noopener noreferrer">
                <Instagram  className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}