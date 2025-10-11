"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        threshold: 0.1, // ativa quando 20% da section está visível
        rootMargin: "0px 0px -10% 0px", // ou até "0px"
      }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Eplay",
      description: "Site de portfólio moderno e responsivo com animações suaves e design minimalista",
      image: "/eplay.png",
      tags: ["HTML", "React", "Reducer", 'TypeScript'],
      github: "https://github.com",
      demo: "https://eplay-swart-ten.vercel.app/",
    },
    {
      title: "Efood",
      description: "Site de portfólio moderno e responsivo com animações suaves e design minimalista",
      image: "/efood.png",
      tags: ["HTML", "React", "Reducer", 'TypeScript'],
      github: "https://github.com/GustavobFarias/Efood",
      demo: "https://efood-omega-sage.vercel.app/",
    },
    {
      title: "Disney+",
      description: "Esse é um clone da Disney+, projeto no qual recriei a interface e algumas funcionalidades básicas do site original, como a navegação entre categorias e a exibição de filmes e séries.",
      image: "/disney.png",
      tags: ["HTML", "CSS", "JavaScript", "Gulp"],
      github: "https://github.com/GustavobFarias/clone_disneyplus",
      demo: "https://clone-disneyplus-zeta-lake.vercel.app/",
    },
    {
      title: "Canto dos Sabores",
      description: "Desenvolvi o site Canto dos Sabores com uma interface moderna e intuitiva, apresentando o cardápio completo e os eventos do restaurante, proporcionando uma experiência prática e agradável aos visitantes.",
      image: "/restaurante.png",
      tags: ["HTML", "CSS","bootstrap", "JavaScript"],
      github: "https://github.com/GustavobFarias/restaurante",
      demo: "https://restaurante-coral-six.vercel.app/",
    },
    {
      title: "Boruto Naruto Next Generations",
      description: "Criei este projeto para reunir de forma simples e organizada os links do anime Boruto: Naruto Next Generations. Durante o desenvolvimento, aprimorei meus conhecimentos em HTML e CSS, focando em uma interface limpa, funcional e fácil de navegar.",
      image: "/boruto.png",
      tags: ["HTML", "CSS"],
      github: "https://github.com/GustavobFarias/Boruto-Naruto-Next-Generations",
      demo: "https://boruto-naruto-next-generations.vercel.app/",
    },
    {
      title: "barbearia",
      description: "Site de portfólio moderno e responsivo com animações suaves e design minimalista",
      image: "/barbearia.png",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/GustavobFarias/barbearia",
      demo: "https://barbearia-ivory.vercel.app/",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Projetos</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`overflow-hidden transition-all duration-1000 hover:shadow-2xl hover:-translate-y-2 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </a>
                </Button>
                <Button size="sm" asChild className="flex-1">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Projeto
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}