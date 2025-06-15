import styled from 'styled-components'
import { colors } from '../../styles'

export const Projetos = styled.section`
  height: 100%;
  scroll-margin-top: 100px;

  @media (max-width: 1200px) {
    .container {
      display: flex;
      justify-content: center;
    }
  }
`

export const Title = styled.h2`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: ${colors.corSecundaria};
  font-size: 1.8rem;
  margin: 7rem 0 3rem;
  padding-top: 32px;
`

export const Button = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  left: 0;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: ${colors.corDoTexto};
  background-color: rgb(22, 22, 22);
  border-radius: 0 0 8px 8px;
  z-index: -1;
  opacity: 0;
  overflow: hidden;
  cursor: pointer;
  transition: bottom 0.5s ease-in-out;

  button {
    background-color: transparent;
    color: ${colors.corSecundaria};
    font-family: 'Blinker', sans-serif;
    padding: 4px 16px;
    border: 1px solid ${colors.corSecundaria};
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 123, 255, 0.2);
    transition: all 0.3s ease;

    &:hover {
      background-color: ${colors.corSecundariaEscura};
      box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
      color: white;
    }
  }
`

export const Text = styled.p`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: ${colors.corDoTexto};
  transition: opacity 0.5s ease-in-out;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }

  div {
    display: block;

    img {
      height: 26px;
      margin-top: 5px;
      margin-left: 8px;
    }
  }
`

export const ContainerProjeto = styled.div`
  display: inline-block;
  position: relative;
  width: 480px;
  transition: all ease-in-out 0.3s;

  &:hover {
    transform: scale(1.25);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: scale(1);
    }

    &:hover ${Button} {
      bottom: 0px;
    }
  }

  @media (max-width: 500px) {
    width: 300px;
    height: none;

    &:hover {
      transform: scale(1);
    }

    &:hover ${Button} {
      bottom: 0px;
    }
  }

  &:hover ${Button} {
    opacity: 1;
    display: flex;
    justify-content: baseline;
    padding-left: 18px;
    align-items: center;
    bottom: -50px;
    transition: bottom 0.5s ease-in-out;
  }

  &:hover ${Text} {
    opacity: 0;
  }
`

export const Table = styled.tr`
  tr {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 64px;
  }

  @media (max-width: 768px) {
    tr {
      gap: 16px;
    }
  }

  td {
    margin-top: 32px;
  }

  @media (max-width: 1200px) {
    tr {
      grid-template-columns: 1fr;
    }
  }
`

export const FotoProjeto = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  filter: brightness(30%);
  transition: all ease-in-out 0.5s;
  cursor: pointer;

  ${ContainerProjeto}:hover & {
    filter: brightness(100%);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 60%;
  }
`
