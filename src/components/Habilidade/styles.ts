import styled from 'styled-components'
import { colors } from '../../styles'

export const Habilidade = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 32px;
  scroll-margin-top: 100px;

  @media (max-width: 1200px) {
    margin-top: 0;
  }

  @media (max-width: 700px) {
    margin-top: 312px;
  }

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
    height: 80vh;
  }
`

export const Container = styled.div`
  width: 90%;
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

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 22px;
  padding: 32px 0;
  border-radius: 8px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 12px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
`

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(7, 67, 60);
    padding: 22px 32px;
    border-radius: 32px 0 32px 0;
    width: 130px;
    height: 130px;
    transition: all ease-in-out 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  img {
    height: 52px;
  }

  span {
    display: block;
    color: ${colors.corSecundaria};
    font-family: 'Blinker', sans-serif;
    font-size: 18px;
    margin-bottom: 18px;
  }
`
