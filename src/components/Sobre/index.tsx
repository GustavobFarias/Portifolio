import Foto from '../../components/assets/images/eu.jpg'
import * as S from './styles'
import { useState, useEffect } from 'react'

const Sobre = () => {
  const texto = 'Desenvolvedor Front-end'
  const [textoDigitando, setTextoDigitando] = useState('')
  const [indice, setIndice] = useState(0)
  const [apagando, setApagando] = useState(false)

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined

    if (!apagando && indice <= texto.length) {
      timer = setTimeout(() => {
        setTextoDigitando(texto.slice(0, indice))
        setIndice((prev) => prev + 1)
      }, 100)
    } else if (apagando && indice >= 0) {
      timer = setTimeout(() => {
        setTextoDigitando(texto.slice(0, indice))
        setIndice((prev) => prev - 1)
      }, 50)
    }

    if (indice === texto.length + 1) {
      setTimeout(() => setApagando(true), 1000)
    } else if (indice === -1 && apagando) {
      setTimeout(() => {
        setApagando(false)
        setIndice(0)
      }, 1000)
    }

    return () => clearTimeout(timer)
  }, [indice, apagando])

  return (
    <S.Sobre id="Sobre">
      <div className="container">
        <S.Intro>
          <S.Logo>
            <a
              href="https://github.com/GustavobFarias"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Foto} alt="Foto de Gustavo Farias" />
            </a>
          </S.Logo>
          <S.Title>
            <h1 className="dizOla">Olá, eu sou o</h1>
            <span className="nome">Gustavo Farias :)</span>
            <p className="front">
              {textoDigitando}
              <span className="cursor">|</span>
            </p>
            <S.Button as="a" href="/curriculo.pdf" download>
              Download CV
            </S.Button>
          </S.Title>
        </S.Intro>
        <div>
          <S.TitleSobre>Sobre mim</S.TitleSobre>
          <S.Text>
            Olá! Meu nome é Gustavo Farias, tenho 19 anos e estou no primeiro
            ano de Engenharia de Software na UniCesumar. Além disso, estou
            cursando Full Stack Python na EBAC, onde já concluí a parte de
            front-end. Atualmente, busco oportunidades no mercado para praticar
            minhas habilidades e aprofundar meus conhecimentos.
          </S.Text>
        </div>
      </div>
    </S.Sobre>
  )
}

export default Sobre
