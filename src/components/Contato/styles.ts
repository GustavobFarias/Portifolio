import styled from 'styled-components'
import { colors } from '../../styles'

export const Contato = styled.section`
  height: 80vh;
  display: flex;
  justify-content: center;
  margin-top: 64px;
  scroll-margin-top: 100px;

  @media (max-width: 768px) {
    margin-bottom: 16rem;
  }
`

export const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  color: ${colors.corSecundaria};
  text-align: center;
  margin: 62px 0;

  @media (max-width: 1200px) {
    margin: 32px 0;
  }
`

export const Container = styled.div`
  text-align: center;

  .container-links {
    display: flex;
  }

  a {
    text-decoration: none;
    margin: 0 38px;
    transition: all 0.2s ease-in-out;

    @media (max-width: 768px) {
      margin: 0 20px;
    }

    &:hover {
      transform: scale(1.3);
    }
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6rem;

    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 32px;

      .container-links {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 64px;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .text {
        h3 {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          color: ${colors.corDoTexto};
          padding: 8px 5px 8px 0;
        }

        p {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: ${colors.corDofront};
        }
      }
    }
  }
`

export const ContainerImg = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.corSecundariaEscura};
  border-radius: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  img {
    width: 30px;
    height: 30px;
    filter: invert(63%) sepia(98%) saturate(747%) hue-rotate(120deg);
  }
`
