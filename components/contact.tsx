"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        threshold: 0.2, // ativa quando 20% da section está visível
        rootMargin: "0px 0px -10% 0px", // ou até "0px"
      }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault(); // evita o reload da página

  const form = e.currentTarget;
  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

  // Monta a mensagem
  const text = `Olá! Alguém entrou em contato pelo site.\n\nNome: ${name}\nEmail: ${email}\nAssunto: ${subject}\nMensagem: ${message}`;

  // URL do WhatsApp
  const phoneNumber = "5514991029433"; // coloque seu número com código do país e DDD
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

  // Abre o WhatsApp em nova aba
  window.open(whatsappURL, "_blank");
};

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "gustavoburger@gmail.com",
      href: "mailto:gustavoburger@gmail.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (14) 99102-9433",
      href: "tel:+5514991029433",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Marília - SP, Brasil",
      href: "https://www.google.com/maps/place/R.+Manoel+Pinheiros+Matos,+385+-+Jardim+Santa+Antonieta,+Mar%C3%ADlia+-+SP,+17512-160/@-22.167027,-49.9737687,17z/data=!3m1!4b1!4m6!3m5!1s0x94bfd429a2c385c1:0x3f494a99f55c889c!8m2!3d-22.167032!4d-49.9711938!16s%2Fg%2F11vzr_0vsf?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Vamos conversar!</h3>
              <p className="text-muted-foreground text-lg text-pretty">
                Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte da sua
                visão.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={info.title}
                  className={`transition-all duration-1000 hover:shadow-lg ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <a href={info.href} className="flex items-center gap-4 group">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.title}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nome
                  </label>
                  <Input id="name" placeholder="Seu nome" className="w-full" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="seu@email.com" className="w-full" required/>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Assunto
                  </label>
                  <Input id="subject" placeholder="Assunto da mensagem" className="w-full" required/>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <Textarea id="message" placeholder="Sua mensagem..." rows={5} className="w-full resize-none" required/>
                </div>

                <Button type="submit" className="w-full cursor-pointer" size="lg">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
