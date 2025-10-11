"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Rocket, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Code2,
      title: "Desenvolvimento",
      description: "Criação de sites, sistemas e plataformas web responsivas e seguras.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Sites rápidos, otimizados para SEO e com excelente experiência do usuário.",
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Atendimento próximo, comunicação clara e soluções sob medida para cada cliente.",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg md:text-xl text-muted-foreground text-center leading-relaxed text-balance">
              Olá! Meu nome é <span className="text-primary font-semibold">Gustavo Farias</span>, tenho 20 anos e sou Desenvolvedor Full Stack, dedicado a criar soluções digitais modernas e eficientes.
              Trabalho com o desenvolvimento de sites e sistemas personalizados, voltados para empresas e profissionais que desejam fortalecer sua presença online e alcançar melhores resultados.
              Meu foco é unir design, performance e funcionalidade, entregando projetos que proporcionem experiências agradáveis e resultados reais. Busco sempre aplicar as melhores práticas do mercado para garantir qualidade, segurança e escalabilidade em cada projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className={`transition-all duration-1000 hover:shadow-xl hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-pretty">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}