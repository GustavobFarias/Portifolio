import { Github, Linkedin, Instagram, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Portfólio</h3>
            <p className="text-muted-foreground text-sm text-pretty">
              Desenvolvedor Full Stack criando experiências digitais incríveis.
            </p>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Redes Sociais</h4>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.instagram.com/fariasdev_hub?igsh=N2ZhODY0Nno1ZGIw" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            &copy; {currentYear} Gustavo Farias. Feito com <Heart className="h-4 w-4 text-red-500 fill-red-500" /> 
          </p>
        </div>
      </div>
    </footer>
  )
}
