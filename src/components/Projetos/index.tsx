import efood from '../assets/images/efood.png'
import disney from '../assets/images/disney.png'
import restaurante from '../assets/images/restaurante.png'
import unimar from '../assets/images/unimar.png'
import boruto from '../assets/images/boruto.png'

import html from '../assets/icons/skills/html-5.png'
import css from '../assets/icons/skills/css-3.png'
import sass from '../assets/icons/skills/sass_logo.png'
import javaScript from '../assets/icons/skills/js.png'
import bootstrap from '../assets/icons/skills/bootstrap.png'
import redux from '../assets/icons/skills/redux.svg'
import gulp from '../assets/icons/skills/gulp.png'
import react from '../assets/icons/skills/react-original.svg'
import typeScript from '../assets/icons/skills/typescript.png'

import * as S from './styles'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useState } from 'react'
import Modal from '../Modal'

AOS.init()

type Projeto = {
  titulo: string
  imagem: string
  tecnologias: string[]
}

const Projetos = () => {
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(
    null
  )

  // Array de projetos com suas respectivas informações
  const projetos = [
    {
      titulo: 'E-food',
      imagem: efood,
      tecnologias: [react, typeScript, redux]
    },
    {
      titulo: 'Disney+',
      imagem: disney,
      tecnologias: [html, css, javaScript, gulp]
    },
    {
      titulo: 'Canto dos Sabores',
      imagem: restaurante,
      tecnologias: [html, css, bootstrap, javaScript]
    },
    {
      titulo: 'Unimar Tecnologia',
      imagem: unimar,
      tecnologias: [html, sass, javaScript]
    },
    {
      titulo: 'Boruto Naruto Next Generations',
      imagem: boruto,
      tecnologias: [html, css]
    }
  ]

  return (
    <>
      <S.Projetos
        data-aos="fade-right"
        data-aos-delay="500"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        id="Projetos"
      >
        <div>
          <S.Title>Projetos</S.Title>
          <div className="container">
            <S.Table>
              <tbody>
                <tr>
                  {projetos.map((projeto, index) => (
                    <td key={index}>
                      <S.ContainerProjeto>
                        <S.FotoProjeto
                          src={projeto.imagem}
                          alt={projeto.titulo}
                        />
                        <div>
                          <S.Text>
                            <p>{projeto.titulo}</p>
                            <div>
                              {projeto.tecnologias.map((tec, i) => (
                                <img
                                  src={tec}
                                  alt={`Tecnologia ${i}`}
                                  key={i}
                                />
                              ))}
                            </div>
                          </S.Text>
                        </div>
                        <S.Button>
                          <button
                            onClick={() => setProjetoSelecionado(projeto)}
                          >
                            Ver mais
                          </button>
                        </S.Button>
                      </S.ContainerProjeto>
                    </td>
                  ))}
                </tr>
              </tbody>
            </S.Table>
          </div>
        </div>
      </S.Projetos>

      {projetoSelecionado && (
        <Modal
          projeto={projetoSelecionado}
          onClose={() => setProjetoSelecionado(null)}
        />
      )}
    </>
  )
}

export default Projetos
