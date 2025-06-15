import { useEffect } from 'react'
import * as S from './styles'

interface ModalProps {
  projeto: {
    titulo: string
  }
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ projeto, onClose }) => {
  useEffect(() => {
    // Salva a posição atual do scroll
    const scrollY = window.scrollY
    // Adiciona a classe que impede a rolagem
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    document.body.style.overflow = 'hidden'

    return () => {
      // Remove a classe e restaura a posição do scroll
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      window.scrollTo(0, scrollY)
    }
  }, [])

  const videoClips = [
    {
      title: 'E-food',
      description:
        'E-Food é uma plataforma de delivery desenvolvida para facilitar pedidos de refeições de forma prática e eficiente. O sistema permite que usuários explorem restaurantes, visualizem cardápios, escolham pratos e concluam pedidos em poucos cliques.',
      projetoLink: 'https://efood-omega-sage.vercel.app/',
      repositorio: 'https://github.com/GustavobFarias/Efood',
      linkedin:
        'https://www.linkedin.com/feed/update/urn:li:activity:7304877364826529792/'
    },
    {
      title: 'Disney+',
      description:
        'Esse é um clone da Disney+, projeto no qual recriei a interface e algumas funcionalidades básicas do site original, como a navegação entre categorias e a exibição de filmes e séries.',
      projetoLink: 'https://clone-disneyplus-zeta-lake.vercel.app/',
      repositorio: 'https://github.com/GustavobFarias/clone_disneyplus',
      linkedin:
        'https://www.linkedin.com/feed/update/urn:li:activity:7254889972548206595/'
    },
    {
      title: 'Canto dos Sabores',
      description:
        'Esse projeto é o site do Canto dos Sabores, onde desenvolvi uma interface moderna e intuitiva para mostrar o cardápio completo e também os eventos que o restaurante oferece. O site facilita para os visitantes conhecerem os pratos disponíveis e ficarem por dentro das atrações especiais, tudo pensado para uma experiência prática e agradável.',
      projetoLink: 'https://restaurante-coral-six.vercel.app/',
      repositorio: 'https://github.com/GustavobFarias/restaurante',
      linkedin:
        'https://www.linkedin.com/feed/update/urn:li:activity:7251608650442575874/'
    },
    {
      title: 'Unimar Tecnologia',
      description:
        'Este projeto foi desenvolvido durante o Bootcamp Jovem Programador Unimar, com o objetivo de criar uma LandPage que apresentasse informações relevantes sobre a Unimar. Através deste desafio, pude aprimorar minhas habilidades em desenvolvimento web, organização de conteúdo e usabilidade para entregar uma experiência clara e funcional aos usuários.',
      projetoLink: 'https://unimar.vercel.app/',
      repositorio: 'https://github.com/GustavobFarias/unimar',
      linkedin:
        'https://www.linkedin.com/feed/update/urn:li:activity:7250554326782267392/'
    },
    {
      title: 'Boruto Naruto Next Generations',
      description:
        'Este projeto pessoal surgiu da necessidade de criar um site simples e organizado para reunir os links do anime Boruto Naruto Next Generations. Durante o desenvolvimento, aprofundei meus conhecimentos em HTML e CSS, focando em construir uma interface limpa e fácil de navegar. Foi uma ótima oportunidade para aplicar habilidades de estruturação e estilização, criando uma página funcional para fãs da série e entusiastas do desenvolvimento web.',
      projetoLink: 'https://boruto-naruto-next-generations.vercel.app/',
      repositorio:
        'https://github.com/GustavobFarias/Boruto-Naruto-Next-Generations',
      linkedin:
        'https://www.linkedin.com/feed/update/urn:li:activity:7249839455572770817/'
    }
  ]

  const clip = videoClips.find((clip) => clip.title === projeto.titulo)

  if (!clip) {
    return null
  }

  return (
    <S.ContainerCard>
      <S.Card>
        <div className="fechar">
          <span onClick={onClose} />
        </div>
        <S.Container>
          <S.Description>
            <h3>{clip.title}</h3>
            <span></span>
            <p>{clip.description}</p>
          </S.Description>
        </S.Container>
        <S.Links>
          <S.Button href={clip.projetoLink} target="_blank">
            Projeto
          </S.Button>
          <S.Button href={clip.repositorio} target="_blank">
            Repositório
          </S.Button>
          <S.Button href={clip.linkedin} target="_blank">
            Linkedin
          </S.Button>
        </S.Links>
      </S.Card>
    </S.ContainerCard>
  )
}

export default Modal
