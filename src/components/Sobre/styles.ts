import styled from 'styled-components'
import { colors } from '../../styles'

export const Sobre = styled.section`
  height: 100vh;
  animation: appear 2s;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes appear {
    from {
      opacity: 0;
      translate: -30vw 0;
    }

    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  .container {
    height: 48vh;
  }

  @media (max-width: 1200px) {
    height: 80vh;
    padding-bottom: 0;
  }

  @media (max-width: 600px) {
    .container {
      height: 80vh;
    }
    height: 100vh;
  }
`

export const Intro = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 64px 32px;

  @media (max-width: 1200px) {
    flex-direction: none;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`

export const Title = styled.div`
  color: ${colors.corDoTexto};
  font-family: 'DM Sans', sans-serif;
  font-size: 2rem;

  .nome {
    color: ${colors.corSecundaria};
    font-size: 2.7rem;
    display: block;
  }

  .front {
    font-size: 1.3rem;
    color: ${colors.corDofront};
    margin-bottom: 16px;
  }

  @media (max-width: 1200px) {
    font-size: 1.5rem;

    .nome {
      font-size: 1.7rem;
    }

    .front {
      font-size: 1rem;
    }
  }
`

export const Logo = styled.div`
  margin-right: 32px;

  @media (max-width: 1200px) {
    display: contents;
  }

  img {
    height: 350px;
    width: 350px;
    border-radius: 50%;
    border: 5px solid ${colors.corSecundariaEscura};
    box-shadow: 1px 2px 20px ${colors.corSecundaria};
    transition: all ease 0.5s;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      height: 200px;
      width: 200px;
    }

    @media (max-width: 1200px) {
      height: 250px;
      width: 250px;
      margin: 0 auto;
      margin-bottom: 16px;
    }
  }
`

export const Button = styled.a`
  text-decoration: none;
  padding: 8px 18px;
  background-color: ${colors.corSecundaria};
  color: ${colors.corDoDownload};
  font-family: 'Blinker', sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 18px;
  transition: all ease-in-out 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${colors.corSecundariaEscura};
    color: ${colors.corDoTexto};
  }

  @media (max-width: 1200px) {
    padding: 12px 64px;
  }
`

export const TitleSobre = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 1.8rem;
  color: ${colors.corSecundaria};
  text-align: center;
  margin-bottom: 16px;
`

export const Text = styled.p`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  line-height: 30px;
  font-size: 18px;
  color: ${colors.corDofront};

  @media (max-width: 600px) {
    width: 90%;
  }
`
