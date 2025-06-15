import { useState } from 'react'
import * as S from './styles'

const Header = () => {
  const [abrirMenu, setAbrirMenu] = useState(false)

  const handleClick = () => setAbrirMenu(!abrirMenu)
  const closeMenu = () => setAbrirMenu(false)

  return (
    <S.Header>
      <S.Container className="container">
        <div className="menu">
          <S.Title>Portifólio</S.Title>
          <S.Hamburguer onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </S.Hamburguer>
        </div>
        <nav className="desktop">
          <ul>
            <li id="item">
              <S.Links id="links" href="#Sobre">
                Sobre
              </S.Links>
            </li>
            <li id="item">
              <S.Links id="links" href="#Habilidade">
                Habilidade
              </S.Links>
            </li>
            <li id="item">
              <S.Links id="links" href="#Projetos">
                Projetos
              </S.Links>
            </li>
            <li id="item">
              <S.Links id="links" href="#Contato">
                Contato
              </S.Links>
            </li>
          </ul>
        </nav>
        {abrirMenu && (
          <nav className="mobile">
            <ul>
              <li id="item">
                <S.Links id="links" onClick={closeMenu} href="#Sobre">
                  Sobre
                </S.Links>
              </li>
              <li id="item">
                <S.Links id="links" onClick={closeMenu} href="#Habilidade">
                  Habilidade
                </S.Links>
              </li>
              <li id="item">
                <S.Links id="links" onClick={closeMenu} href="#Projetos">
                  Projetos
                </S.Links>
              </li>
              <li id="item">
                <S.Links id="links" onClick={closeMenu} href="#Contato">
                  Contato
                </S.Links>
              </li>
            </ul>
          </nav>
        )}
      </S.Container>
    </S.Header>
  )
}

export default Header
